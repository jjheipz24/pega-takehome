import type { Route } from './+types/epics';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Pega - Epics' },
    { name: 'description', content: 'Pega - Epics' },
  ];
}

export default function Epics() {
  return (
    <main>
      <h1>Epics</h1>
    </main>
  );
}
