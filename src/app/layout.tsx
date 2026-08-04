import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Velora Event & Decor - Luxury Event Management & Production',
  description: 'Velora Event & Decor specializes in luxury weddings, corporate events, conferences, decoration, catering, sound & lighting in Addis Ababa.',
  verification: {
    google: '7RDO7o93RjKu5j3uxUSv3txEfdd67unO8VtWok',
  },
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
