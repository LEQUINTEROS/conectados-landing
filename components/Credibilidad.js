'use client'
import { useReveal } from '../hooks/useReveal'

const partners = [
  {
    name: 'Google for Nonprofits',
    type: 'text',
    description: 'Participamos en el programa Google para Organizaciones Sin Ánimo de Lucro',
    logo: (
      <svg className="h-8 w-auto" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
        <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
        <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
        <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
        <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
        <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
        <path d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.21z" fill="#4285F4"/>
      </svg>
    ),
  },
  {
    name: 'Microsoft for Nonprofits',
    type: 'text',
    description: 'Utilizamos herramientas de Microsoft para Organizaciones Sin Ánimo de Lucro',
    logo: (
      <svg className="h-7 w-auto" viewBox="0 0 318 69" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="30" height="30" fill="#F25022"/>
        <rect x="34" y="1" width="30" height="30" fill="#7FBA00"/>
        <rect x="1" y="34" width="30" height="30" fill="#00A4EF"/>
        <rect x="34" y="34" width="30" height="30" fill="#FFB900"/>
        <text x="78" y="48" fontFamily="Segoe UI, Arial" fontSize="32" fontWeight="600" fill="#737373">Microsoft</text>
      </svg>
    ),
  },
  {
    name: 'Fundación "la Caixa"',
    type: 'logo',
    description: 'Vinculados al ecosistema de proyectos sociales de Fundación "la Caixa"',
    logo: (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 relative">
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="18" fill="none" stroke="#007BC0" strokeWidth="2"/>
            <path d="M20 8 L24 16 L20 14 L16 16 Z" fill="#007BC0"/>
            <circle cx="14" cy="22" r="3" fill="#E30613"/>
            <circle cx="26" cy="22" r="3" fill="#E30613"/>
            <circle cx="20" cy="30" r="3" fill="#FFCD00"/>
          </svg>
        </div>
        <span className="text-lg font-semibold text-gray-700">Fundación &ldquo;la Caixa&rdquo;</span>
      </div>
    ),
  },
  {
    name: 'Red.es',
    type: 'text',
    description: 'Alineados con la estrategia nacional de capacitación digital de Red.es',
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-[#C8102E] flex items-center justify-center">
          <span className="text-white font-bold text-xs">R</span>
        </div>
        <span className="text-xl font-bold text-gray-700">Red.es</span>
      </div>
    ),
  },
]

export default function Credibilidad() {
  const [ref, visible] = useReveal()

  return (
    <section className="relative pt-8 pb-16 md:pt-10 md:pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-violeta-700 mb-4">
              Parte de un ecosistema de cambio
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CONECTADOS forma parte de un ecosistema de organizaciones que trabajan por
              la inclusión y la innovación social. Estos son algunos de los programas y
              entidades con los que estamos vinculados.
            </p>
          </div>

          <div className={`stagger-children grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ${visible ? 'visible' : ''}`}>
            {partners.map((p, i) => (
              <div
                key={i}
                className="card-hover flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white"
              >
                <div className="h-16 flex items-center justify-center mb-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100">
                  {p.logo}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
