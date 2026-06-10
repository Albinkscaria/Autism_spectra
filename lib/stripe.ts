import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
});

export interface CreateCheckoutSessionParams {
  appointmentId: string;
  amount: number;
  doctorName: string;
  guestEmail: string;
  bookingReference: string;
}

export async function createCheckoutSession(params: CreateCheckoutSessionParams) {
  const { appointmentId, amount, doctorName, guestEmail, bookingReference } = params;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Consultation with ${doctorName}`,
            description: `Booking Reference: ${bookingReference}`,
          },
          unit_amount: Math.round(amount * 100), // Convert to cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/booking/confirmation?ref=${bookingReference}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/doctors`,
    customer_email: guestEmail,
    metadata: {
      appointmentId,
      bookingReference,
    },
  });

  return {
    sessionId: session.id,
    url: session.url,
  };
}
