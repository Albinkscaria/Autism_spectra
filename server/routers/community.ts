import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

export const communityRouter = router({
  listCircles: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.communityGroup.findMany({
      orderBy: { memberCount: 'desc' },
      include: {
        _count: { select: { posts: true } },
      },
    });
  }),

  getCirclePosts: publicProcedure
    .input(z.object({
      groupId: z.string(),
      limit: z.number().min(1).max(50).default(20),
      cursor: z.string().optional(),
    }))
    .query(async ({ ctx, input }) => {
      const { groupId, limit, cursor } = input;

      const group = await ctx.prisma.communityGroup.findUnique({
        where: { id: groupId },
      });

      if (!group) throw new Error('Circle not found');

      const posts = await ctx.prisma.communityPost.findMany({
        where: { groupId, isApproved: true },
        include: {
          user: { select: { fullName: true, avatarUrl: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: limit + 1,
        ...(cursor && { cursor: { id: cursor }, skip: 1 }),
      });

      let nextCursor: string | undefined;
      if (posts.length > limit) {
        nextCursor = posts.pop()!.id;
      }

      return { group, posts, nextCursor };
    }),
});
