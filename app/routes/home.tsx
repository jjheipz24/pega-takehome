import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Pega - Technical Assessment' },
    { name: 'description', content: 'Pega - Technical Assessment' },
  ];
}

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
}
