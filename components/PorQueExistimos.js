'use client'
import { useReveal } from '../hooks/useReveal'

export default function PorQueExistimos() {
  const [ref, visible] = useReveal()

  return (
    <section id="por-que" className="relative pt-8 pb-16 md:pt-10 md:pb-20 bg-white circuit-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-turquesa-400" />
            <span className="text-turquesa-500 font-semibold text-sm uppercase tracking-widest">Por qué existimos</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Main text */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-violeta-700 leading-tight mb-8">
                La inteligencia artificial ya está
                <span className="gradient-text"> transformando el mundo.</span>
                <br />
                Pero no para todos igual.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Millones de personas están quedando fuera de los beneficios de la revolución
                tecnológica más importante de nuestra era. No por falta de capacidad, sino por
                falta de acceso, formación y oportunidades.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Si no democratizamos el conocimiento sobre IA, las brechas sociales se
                ampliarán. CONECTADOS nace para intervenir ahí: donde la tecnología
                puede ser herramienta de transformación y no de exclusión.
              </p>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  number: '75,6%',
                  label: 'de jóvenes de 16 a 24 años usa IA generativa',
                  sub: 'frente al 7,4% de las personas de 65 a 74 años',
                  color: 'violeta',
                },
                {
                  number: '40%',
                  label: 'de los españoles no ha utilizado nunca',
                  sub: 'inteligencia artificial',
                  color: 'turquesa',
                },
                {
                  number: '29,8%',
                  label: 'de la población de 16 a 74 años',
                  sub: 'tiene habilidades digitales bajas o inferiores',
                  color: 'turquesa',
                },
                {
                  number: '2M',
                  label: 'de empleos en España podrían verse',
                  sub: 'automatizados en la próxima década',
                  color: 'violeta',
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`card-hover p-6 rounded-2xl border ${
                    stat.color === 'violeta'
                      ? 'bg-violeta-50/50 border-violeta-100'
                      : 'bg-turquesa-50/50 border-turquesa-100'
                  }`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <p className={`text-3xl sm:text-4xl font-display font-extrabold mb-2 ${
                    stat.color === 'violeta' ? 'text-violeta-400' : 'text-turquesa-500'
                  }`}>
                    {stat.number}
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</p>
                  <p className="text-xs text-gray-500">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Source attribution */}
          <p className="mt-8 text-xs text-gray-400 text-right">
            Fuentes: INE 2025, Randstad Research, OCU/Euroconsumers
          </p>
        </div>
      </div>
    </section>
  )
}
