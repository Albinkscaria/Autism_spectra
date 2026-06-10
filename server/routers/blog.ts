import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

export const blogRouter = router({
  list: publicProcedure
    .input(
      z.object({
        category: z.string().optional(),
        limit: z.number().min(1).max(50).default(20),
        cursor: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { category, limit, cursor } = input;

      const posts = await ctx.prisma.blogPost.findMany({
        where: {
          status: 'published',
          ...(category && { category }),
        },
        include: {
          author: {
            select: { fullName: true, avatarUrl: true },
          },
        },
        orderBy: { publishedAt: 'desc' },
        take: limit + 1,
        ...(cursor && { cursor: { id: cursor }, skip: 1 }),
      });

      let nextCursor: string | undefined;
      if (posts.length > limit) {
        nextCursor = posts.pop()!.id;
      }

      return { posts, nextCursor };
    }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.prisma.blogPost.findUnique({
        where: { slug: input.slug },
        include: {
          author: {
            select: { fullName: true, avatarUrl: true },
          },
        },
      });

      if (!post || post.status !== 'published') {
        throw new Error('Post not found');
      }

      return post;
    }),

  getCategories: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.blogPost.findMany({
      where: { status: 'published' },
      select: { category: true },
      distinct: ['category'],
    });
    return posts.map((p) => p.category);
  }),
});
