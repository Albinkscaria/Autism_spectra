import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

export const resourceRouter = router({
  list: publicProcedure
    .input(z.object({ category: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.resource.findMany({
        where: input.category ? { category: input.category } : undefined,
        orderBy: { createdAt: 'desc' },
      });
    }),

  getCategories: publicProcedure.query(async ({ ctx }) => {
    const resources = await ctx.prisma.resource.findMany({
      select: { category: true },
      distinct: ['category'],
    });
    return resources.map(r => r.category);
  }),

  download: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const resource = await ctx.prisma.resource.findUnique({ where: { id: input.id } });
      if (!resource) throw new Error('Resource not found');
      return resource;
    }),
});
