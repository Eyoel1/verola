import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Velora Event & Decor - Luxury Event Management & Production',
  description: 'Velora Event & Decor specializes in luxury weddings, corporate events, conferences, decoration, catering, sound & lighting in Addis Ababa.',
  icons: {
    icon: '/Velora_1.png',
    shortcut: '/Velora_1.png',
    apple: '/Velora_1.png',
  },
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
      <head>
        <link rel="icon" href="/Velora_1.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/Velora_1.png" />
      </head>
      <body className="antialiased min-h-screen bg-[#f8eee0] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
