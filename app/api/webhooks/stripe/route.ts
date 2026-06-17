import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getStripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';
import { sendBookingConfirmation } from '@/lib/resend';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      
      // Update appointment status
      const appointmentId = session.metadata?.appointmentId;
      
      if (appointmentId) {
        const appointment = await prisma.appointment.update({
          where: { id: appointmentId },
          data: {
            status: 'CONFIRMED',
            stripePaymentId: session.payment_intent as string,
          },
          include: {
            doctor: {
              include: {
                user: true,
              },
            },
          },
        });

        // Send confirmation email
        await sendBookingConfirmation({
          to: appointment.guestEmail,
          bookingReference: appointment.bookingReference,
          doctorName: appointment.doctor.user.fullName,
          scheduledAt: appointment.scheduledAt,
          videoUrl: appointment.videoRoomUrl || undefined,
        });

        console.log(`Appointment ${appointmentId} confirmed and email sent`);
      }
      break;
    }

    case 'checkout.session.expired': {
      const session = event.data.object as Stripe.Checkout.Session;
      
      // Optionally cancel the appointment
      const appointmentId = session.metadata?.appointmentId;
      
      if (appointmentId) {
        await prisma.appointment.update({
          where: { id: appointmentId },
          data: {
            status: 'CANCELLED',
          },
        });

        console.log(`Appointment ${appointmentId} cancelled due to expired checkout`);
      }
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
