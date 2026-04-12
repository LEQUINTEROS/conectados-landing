import './globals.css'

export const metadata = {
  title: 'CONECTADOS — Inclusión digital a través de la inteligencia artificial',
  description: 'CONECTADOS es una ONG que impulsa la inclusión social a través de la inteligencia artificial. Formación accesible, comunidades de aprendizaje y oportunidades reales para todas las personas.',
  keywords: 'inclusión digital, inteligencia artificial, ONG, formación IA, brecha digital, España',
  openGraph: {
    title: 'CONECTADOS — Inclusión digital a través de la inteligencia artificial',
    description: 'Impulsamos la inclusión social a través de la inteligencia artificial. Formación accesible para todas las personas.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo-square.png" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
