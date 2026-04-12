'use client'
import { useReveal } from '../hooks/useReveal'

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Acceso real a la IA',
    description: 'Aprender inteligencia artificial no debería depender de tu código postal, tu edad o tu situación económica. Diseñamos formaciones accesibles para que cualquier persona pueda entender, usar y aprovechar la IA.',
    accent: 'violeta',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Aprender en comunidad',
    description: 'Creamos comunidades donde aprender inteligencia artificial es también organizarse, compartir y avanzar juntos. Porque el futuro no se construye solo, se construye en comunidad.',
    accent: 'turquesa',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: 'Convertir aprendizaje en oportunidades',
    description: 'Conectamos la formación con el mundo real: empleabilidad, proyectos comunitarios, emprendimiento social. Que lo aprendido sirva para vivir mejor y abrir puertas que antes parecían cerradas.',
    accent: 'violeta',
  },
]

export default function QueHacemos() {
  const [ref, visible] = useReveal()

  return (
    <section id="que-hacemos" className="relative pt-8 pb-16 md:pt-10 md:pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F8F6FB 0%, #ffffff 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-turquesa-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violeta-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center gap-3 justify-center mb-6">
              <div className="w-12 h-[2px] bg-turquesa-400" />
              <span className="text-turquesa-500 font-semibold text-sm uppercase tracking-widest">Qué hacemos</span>
              <div className="w-12 h-[2px] bg-turquesa-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-violeta-700 leading-tight mb-6">
              Tres líneas de acción,
              <br />
              <span className="gradient-text">un solo propósito</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Construimos oportunidades reales para que la inteligencia artificial
              esté al servicio de todas las personas.
            </p>
          </div>

          {/* Cards */}
          <div className={`stagger-children grid md:grid-cols-3 gap-8 ${visible ? 'visible' : ''}`}>
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="card-hover group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full ${
                  pillar.accent === 'violeta' ? 'bg-violeta-400' : 'bg-turquesa-400'
                }`} />

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                  pillar.accent === 'violeta'
                    ? 'bg-violeta-50 text-violeta-400 group-hover:bg-violeta-400 group-hover:text-white'
                    : 'bg-turquesa-50 text-turquesa-500 group-hover:bg-turquesa-400 group-hover:text-white'
                }`}>
                  {pillar.icon}
                </div>

                <h3 className="text-xl font-display font-bold text-violeta-700 mb-4">
                  {pillar.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute bottom-4 right-4 w-16 h-16 rounded-full opacity-5 ${
                  pillar.accent === 'violeta' ? 'bg-violeta-400' : 'bg-turquesa-400'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
