import { Heading } from '@/shared/ui/Heading';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <Heading>Evora Portal</Heading>
      <p className="mt-4 text-gray-600 text-sm">
        Version 1.0.0 - Next.js 14 with TypeScript
      </p>
    </main>
  );
}
