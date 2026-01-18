import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lauravargas-podologia.com'),
  title: {
    default: 'Clinica Podologica Laura Vargas | Podologo en Alcazar de San Juan',
    template: '%s | Laura Vargas Podologia'
  },
  description: 'Clinica Podologica en Alcazar de San Juan. Tratamientos de podologia profesional: quiropodia, plantillas personalizadas, unas encarnadas, pie diabetico. Pide cita: 659 26 88 58',
  keywords: [
    'podologo Alcazar de San Juan',
    'podologia Alcazar de San Juan',
    'clinica podologica Ciudad Real',
    'plantillas personalizadas Alcazar',
    'quiropodia Alcazar de San Juan',
    'unas encarnadas tratamiento',
    'pie diabetico Alcazar',
    'estudio biomecanico Ciudad Real',
    'Laura Vargas podologa'
  ],
  authors: [{ name: 'Laura Vargas' }],
  creator: 'Clinica Podologica Laura Vargas',
  publisher: 'Clinica Podologica Laura Vargas',
  formatDetection: {
    telephone: true,
    address: true,
    email: true
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.lauravargas-podologia.com',
    siteName: 'Clinica Podologica Laura Vargas',
    title: 'Clinica Podologica Laura Vargas | Podologo en Alcazar de San Juan',
    description: 'Tu podologa de confianza en Alcazar de San Juan. Profesionalidad y trato cercano. Quiropodia, plantillas, unas encarnadas y mas. Pide cita: 659 26 88 58',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clinica Podologica Laura Vargas - Alcazar de San Juan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinica Podologica Laura Vargas',
    description: 'Tu podologa de confianza en Alcazar de San Juan. Pide cita: 659 26 88 58',
    images: ['/images/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://www.lauravargas-podologia.com'
  }
}

// Schema markup
const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'MedicalBusiness'],
      '@id': 'https://www.lauravargas-podologia.com/#organization',
      name: 'Clinica Podologica Laura Vargas',
      description: 'Clinica de podologia especializada en tratamientos personalizados en Alcazar de San Juan',
      url: 'https://www.lauravargas-podologia.com',
      telephone: '+34659268858',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle Santo Domingo 26',
        addressLocality: 'Alcazar de San Juan',
        postalCode: '13600',
        addressRegion: 'Ciudad Real',
        addressCountry: 'ES'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 39.3903,
        longitude: -3.2078
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '14:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '16:30',
          closes: '20:30'
        }
      ],
      priceRange: '€€',
      image: 'https://www.lauravargas-podologia.com/images/clinica.jpg',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '15',
        bestRating: '5'
      },
      medicalSpecialty: 'Podiatry',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Podologia',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Quiropodia',
              description: 'Tratamiento completo de callos, durezas y cuidado general del pie'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Plantillas Personalizadas',
              description: 'Plantillas ortopedicas a medida para corregir problemas de pisada'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Estudio Biomecanico',
              description: 'Analisis completo de la pisada y la marcha'
            }
          }
        ]
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.lauravargas-podologia.com/#website',
      url: 'https://www.lauravargas-podologia.com',
      name: 'Clinica Podologica Laura Vargas',
      publisher: {
        '@id': 'https://www.lauravargas-podologia.com/#organization'
      }
    },
    {
      '@type': 'Person',
      '@id': 'https://www.lauravargas-podologia.com/#person',
      name: 'Laura Vargas',
      jobTitle: 'Podologa',
      description: 'Podologa titulada con Grado en Podologia',
      worksFor: {
        '@id': 'https://www.lauravargas-podologia.com/#organization'
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen bg-white antialiased">
        {children}
      </body>
    </html>
  )
}
