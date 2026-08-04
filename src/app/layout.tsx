import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Velora Event & Decor - Luxury Event Management & Production',
  description: 'Velora Event & Decor specializes in luxury weddings, corporate events, conferences, decoration, catering, sound & lighting in Addis Ababa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-[#fdf9f5] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
