import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.veloraevents.et'),
  title: 'Velora Event & Communication - Luxury Event Management in Addis Ababa',
  description: 'Velora Event & Communication specializes in luxury weddings, corporate events, conferences, decoration, catering, sound & lighting in Addis Ababa, Ethiopia.',
  keywords: [
    'Velora Event',
    'Velora Events',
    'Velora Event & Communication',
    'Event planner Addis Ababa',
    'Wedding planner Ethiopia',
    'Luxury event decor Addis Ababa',
    'Corporate event production Ethiopia',
  ],
  alternates: {
    canonical: 'https://www.veloraevents.et',
  },
  openGraph: {
    title: 'Velora Event & Communication',
    description: 'Premier event management & production in Addis Ababa, Ethiopia.',
    url: 'https://www.veloraevents.et',
    siteName: 'Velora Event & Communication',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/custom_hero_wedding.jpg',
        width: 1200,
        height: 630,
        alt: 'Velora Event & Communication',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: '7RDO7o93RjKu5j3uxUSv3txEfdd67unO8VtWok',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Velora Event & Communication',
  image: 'https://www.veloraevents.et/custom_hero_wedding.jpg',
  logo: 'https://www.veloraevents.et/icon-512.png',
  '@id': 'https://www.veloraevents.et',
  url: 'https://www.veloraevents.et',
  telephone: '+251956535210',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '22 next to Zerihun building, IPS building 2nd floor',
    addressLocality: 'Addis Ababa',
    addressCountry: 'ET',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 9.0107,
    longitude: 38.7612,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '20:00',
  },
  sameAs: ['https://www.veloraevents.et'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#f8eee0] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
