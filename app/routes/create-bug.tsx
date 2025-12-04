import type { Route } from './+types/create-bug';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Pega - New Bug Ticket' },
    { name: 'description', content: 'Pega - New Bug Ticket' },
  ];
}

export default function CreateBug() {
  return (
    <main>
      <h1>Create a New Bug Ticket</h1>
    </main>
  );
}
