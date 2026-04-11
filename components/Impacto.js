'use client'
import { useReveal } from '../hooks/useReveal'

const visions = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    title: 'Comunidades más preparadas',
    text: 'Colectivos y organizaciones que integran la IA como herramienta cotidiana de mejora y desarrollo.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Personas con más autonomía digital',
    text: 'Ciudadanos que entienden, usan y se benefician de la inteligencia artificial en su vida diaria.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: 'Nuevas oportunidades de empleo',
    text: 'Personas formadas en habilidades de IA que acceden a empleos, proyectos y emprendimientos que antes estaban fuera de su alcance.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Una tecnología más justa',
    text: 'Un ecosistema donde la inteligencia artificial sea una herramienta de equidad y no un amplificador de desigualdades.',
  },
]

export default function Impacto() {
  const [ref, visible] = useReveal()

  return (
    <section id="impacto" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violeta-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-3 justify-center mb-6">
              <div className="w-12 h-[2px] bg-turquesa-400" />
              <span className="text-turquesa-500 font-semibold text-sm uppercase tracking-widest">Impacto</span>
              <div className="w-12 h-[2px] bg-turquesa-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-violeta-700 leading-tight mb-6">
              El cambio que
              <span className="gradient-text"> queremos construir</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Estamos en una etapa temprana, pero con una visión clara de lo que viene.
              No inventamos cifras: construimos realidades. Aquí está el futuro que estamos
              empezando a hacer posible.
            </p>
          </div>

          {/* Impact label */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amarillo-50 border border-amarillo-300/50 rounded-full px-5 py-2.5">
              <div className="w-2 h-2 rounded-full bg-amarillo-400 animate-pulse" />
              <span className="text-sm font-semibold text-amarillo-700">Impacto en construcción — primeros pasos 2025</span>
            </div>
          </div>

          {/* Vision cards */}
          <div className={`stagger-children grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto ${visible ? 'visible' : ''}`}>
            {visions.map((v, i) => (
              <div key={i} className="card-hover flex gap-5 p-6 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-violeta-50/30">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-violeta-50 flex items-center justify-center text-violeta-400">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-violeta-700 text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom quote */}
          <div className="mt-16 text-center">
            <blockquote className="text-xl sm:text-2xl font-display font-semibold text-violeta-400 italic max-w-2xl mx-auto leading-relaxed">
              &ldquo;No medimos nuestro éxito por las herramientas que enseñamos, sino por las puertas que se abren.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
