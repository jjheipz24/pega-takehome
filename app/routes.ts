import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('bugs', 'routes/bugs.tsx'),
  route('epics', 'routes/epics.tsx'),
] satisfies RouteConfig;
