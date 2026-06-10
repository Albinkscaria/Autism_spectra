import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { nanoid } from 'nanoid';
import { createCheckoutSession } from '@/lib/stripe';
import { createDailyRoom } from '@/lib/daily';

const createAppointmentSchema = z.object({
  doctorId: z.string().uuid(),
  guestName: z.string().min(2).max(100),
  guestEmail: z.string().email(),
  guestPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  scheduledAt: z.date().refine((date) => date > new Date(), 'Cannot book in the past'),
  reason: z.string().min(10).max(1000),
  sessionType: z.enum(['video', 'chat']),
});

export const appointmentRouter = router({
  create: publicProcedure
    .input(createAppointmentSchema)
    .mutation(async ({ ctx, input }) => {
      // Generate unique booking reference
      const bookingReference = `AC-${nanoid(10).toUpperCase()}`;

      // Create video room if session type is video
      let videoRoomUrl: string | undefined;
      if (input.sessionType === 'video') {
        const room = await createDailyRoom({
          appointmentId: bookingReference,
          scheduledTime: input.scheduledAt,
        });
        videoRoomUrl = room.roomUrl;
      }

      // Create appointment
      const appointment = await ctx.prisma.appointment.create({
        data: {
          ...input,
          bookingReference,
          status: 'PENDING',
          durationMins: 60,
          videoRoomUrl,
        },
        include: {
          doctor: {
            include: {
              user: true,
            },
          },
        },
      });

      return appointment;
    }),

  createCheckoutSession: publicProcedure
    .input(z.object({ appointmentId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const appointment = await ctx.prisma.appointment.findUnique({
        where: { id: input.appointmentId },
        include: {
          doctor: {
            include: {
              user: true,
            },
          },
        },
      });

      if (!appointment) {
        throw new Error('Appointment not found');
      }

      const session = await createCheckoutSession({
        appointmentId: appointment.id,
        amount: Number(appointment.doctor.fee),
        doctorName: appointment.doctor.user.fullName,
        guestEmail: appointment.guestEmail,
        bookingReference: appointment.bookingReference,
      });

      return session;
    }),

  getByReference: publicProcedure
    .input(z.object({ reference: z.string() }))
    .query(async ({ ctx, input }) => {
      const appointment = await ctx.prisma.appointment.findUnique({
        where: { bookingReference: input.reference },
        include: {
          doctor: {
            include: {
              user: true,
            },
          },
        },
      });

      if (!appointment) {
        throw new Error('Appointment not found');
      }

      return appointment;
    }),

  checkAvailability: publicProcedure
    .input(
      z.object({
        doctorId: z.string(),
        scheduledAt: z.date(),
      })
    )
    .query(async ({ ctx, input }) => {
      // Check if slot is already booked
      const existingAppointment = await ctx.prisma.appointment.findFirst({
        where: {
          doctorId: input.doctorId,
          scheduledAt: input.scheduledAt,
          status: {
            in: ['PENDING', 'CONFIRMED'],
          },
        },
      });

      return {
        available: !existingAppointment,
      };
    }),
});
