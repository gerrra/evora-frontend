import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Evora Portal',
  description: 'Evora Portal Frontend - Next.js 14 with TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
