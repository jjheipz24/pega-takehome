import type { Route } from './+types/create-epic';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Pega - New Epic' },
    { name: 'description', content: 'Pega - New Epic' },
  ];
}

export default function CreateEpic() {
  return (
    <main>
      <h1>Create a New Epic</h1>
    </main>
  );
}
