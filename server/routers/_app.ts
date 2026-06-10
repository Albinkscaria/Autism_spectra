import { router } from '../trpc';
import { doctorRouter } from './doctor';
import { appointmentRouter } from './appointment';
import { blogRouter } from './blog';
import { communityRouter } from './community';
import { resourceRouter } from './resource';

export const appRouter = router({
  doctor: doctorRouter,
  appointment: appointmentRouter,
  blog: blogRouter,
  community: communityRouter,
  resource: resourceRouter,
});

export type AppRouter = typeof appRouter;
