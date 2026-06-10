import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

export const doctorRouter = router({
  list: publicProcedure
    .input(
      z.object({
        specialty: z.string().optional(),
        minFee: z.number().optional(),
        maxFee: z.number().optional(),
        language: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { specialty, minFee, maxFee, language } = input;

      const doctors = await ctx.prisma.doctorProfile.findMany({
        where: {
          isApproved: true,
          ...(specialty && { specialty }),
          ...(minFee && { fee: { gte: minFee } }),
          ...(maxFee && { fee: { lte: maxFee } }),
          ...(language && { languages: { has: language } }),
        },
        include: {
          user: {
            select: {
              id: true,
              fullName: true,
              email: true,
              avatarUrl: true,
            },
          },
        },
        orderBy: [
          { rating: 'desc' },
          { totalReviews: 'desc' },
        ],
      });

      return doctors;
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const doctor = await ctx.prisma.doctorProfile.findUnique({
        where: { id: input.id },
        include: {
          user: {
            select: {
              id: true,
              fullName: true,
              email: true,
              avatarUrl: true,
            },
          },
          reviews: {
            take: 10,
            orderBy: { createdAt: 'desc' },
          },
        },
      });

      if (!doctor) {
        throw new Error('Doctor not found');
      }

      return doctor;
    }),

  getAvailability: publicProcedure
    .input(
      z.object({
        doctorId: z.string(),
        startDate: z.date(),
        endDate: z.date(),
      })
    )
    .query(async ({ ctx, input }) => {
      const doctor = await ctx.prisma.doctorProfile.findUnique({
        where: { id: input.doctorId },
        select: { availabilityJson: true },
      });

      if (!doctor) {
        throw new Error('Doctor not found');
      }

      // Get existing appointments to exclude booked slots
      const appointments = await ctx.prisma.appointment.findMany({
        where: {
          doctorId: input.doctorId,
          scheduledAt: {
            gte: input.startDate,
            lte: input.endDate,
          },
          status: {
            in: ['PENDING', 'CONFIRMED'],
          },
        },
        select: {
          scheduledAt: true,
          durationMins: true,
        },
      });

      return {
        availability: doctor.availabilityJson,
        bookedSlots: appointments,
      };
    }),

  getSpecialties: publicProcedure.query(async ({ ctx }) => {
    const specialties = await ctx.prisma.doctorProfile.findMany({
      where: { isApproved: true },
      select: { specialty: true },
      distinct: ['specialty'],
    });

    return specialties.map((s) => s.specialty);
  }),

  getLanguages: publicProcedure.query(async ({ ctx }) => {
    const doctors = await ctx.prisma.doctorProfile.findMany({
      where: { isApproved: true },
      select: { languages: true },
    });

    const allLanguages = doctors.flatMap((d) => d.languages);
    const uniqueLanguages = [...new Set(allLanguages)];

    return uniqueLanguages.sort();
  }),
});
