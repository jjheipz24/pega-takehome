import type { Route } from './+types/bugs';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Pega - Bugs' },
    { name: 'description', content: 'Pega - Bugs' },
  ];
}

export default function Bugs() {
  return (
    <main>
      <h1>Bugs Page</h1>
    </main>
  );
}
