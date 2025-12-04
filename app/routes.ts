import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('bugs', 'routes/bugs.tsx'),
  route('epics', 'routes/epics.tsx'),
  route('create-bug', 'routes/create-bug.tsx'),
  route('create-epic', 'routes/create-epic.tsx'),
] satisfies RouteConfig;
