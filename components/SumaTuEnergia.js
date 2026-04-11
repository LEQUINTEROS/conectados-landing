'use client'
import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const ctas = [
  {
    id: 'aprender',
    emoji: '🎓',
    title: 'Quiero aprender',
    subtitle: 'Accede a formación gratuita en IA',
    description: 'Si quieres entender la inteligencia artificial y aprender a usarla para mejorar tu vida, tu trabajo o tu comunidad, este es tu sitio. No necesitas experiencia previa.',
    buttonText: 'Apuntarme',
    color: 'violeta',
  },
  {
    id: 'colaborar',
    emoji: '🤝',
    title: 'Quiero colaborar',
    subtitle: 'Suma tu talento al proyecto',
    description: 'Si tienes conocimientos en tecnología, comunicación, formación o gestión de proyectos, podemos hacer mucho juntos. Voluntarios/as, mentores y aliados/as: os necesitamos.',
    buttonText: 'Colaborar',
    color: 'turquesa',
  },
  {
    id: 'apoyar',
    emoji: '💜',
    title: 'Quiero apoyar',
    subtitle: 'Haz posible el cambio',
    description: 'Si eres una entidad, empresa o persona que cree en la inclusión digital, tu apoyo puede marcar la diferencia. Financiación, espacios, difusión: cada aporte cuenta.',
    buttonText: 'Apoyar',
    color: 'violeta',
  },
]

export default function SumaTuEnergia() {
  const [ref, visible] = useReveal()
  const [activeTab, setActiveTab] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: formData.nombre,
        email: formData.email,
        mensaje: formData.mensaje,
        tipo: ctas.find(c => c.id === activeTab)?.title,
      }),
    })

    setLoading(false)

    if (res.ok) {
      setSubmitted(true)
      setFormData({ nombre: '', email: '', mensaje: '' })
      setTimeout(() => setSubmitted(false), 4000)
    } else {
      setError('Hubo un error al enviar. Inténtalo de nuevo.')
    }
  }

  return (
    <section
      id="suma"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F8F6FB 0%, #EDE5F5 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-turquesa-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-3 justify-center mb-6">
              <div className="w-12 h-[2px] bg-violeta-400" />
              <span className="text-violeta-400 font-semibold text-sm uppercase tracking-widest">Suma tu energía</span>
              <div className="w-12 h-[2px] bg-violeta-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-violeta-700 leading-tight mb-6">
              Hay muchas formas de
              <span className="gradient-text"> ser parte</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              No importa desde dónde vengas ni qué sepas. Lo que importa es que quieres
              que la tecnología funcione para todos. Elige cómo sumarte.
            </p>
          </div>

          {/* Cards */}
          <div className={`stagger-children grid md:grid-cols-3 gap-6 mb-12 ${visible ? 'visible' : ''}`}>
            {ctas.map((cta) => (
              <button
                key={cta.id}
                onClick={() => setActiveTab(activeTab === cta.id ? null : cta.id)}
                className={`card-hover text-left p-8 rounded-3xl border-2 transition-all duration-300 ${
                  activeTab === cta.id
                    ? cta.color === 'violeta'
                      ? 'border-violeta-400 bg-white shadow-lg shadow-violeta-400/10'
                      : 'border-turquesa-400 bg-white shadow-lg shadow-turquesa-400/10'
                    : 'border-gray-200 bg-white hover:border-violeta-200'
                }`}
              >
                <span className="text-4xl mb-4 block">{cta.emoji}</span>
                <h3 className="text-xl font-display font-bold text-violeta-700 mb-2">{cta.title}</h3>
                <p className={`text-sm font-semibold mb-3 ${
                  cta.color === 'violeta' ? 'text-violeta-400' : 'text-turquesa-500'
                }`}>
                  {cta.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">{cta.description}</p>
                <div className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${
                  cta.color === 'violeta' ? 'text-violeta-400' : 'text-turquesa-500'
                }`}>
                  {activeTab === cta.id ? 'Cerrar' : cta.buttonText}
                  <svg className={`w-4 h-4 transition-transform ${activeTab === cta.id ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Contact form */}
          {activeTab && (
            <div className="max-w-lg mx-auto animate-fade-in-up">
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-violeta-400/5 border border-violeta-100">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="text-2xl font-display font-bold text-violeta-700 mb-2">¡Gracias!</h3>
                    <p className="text-gray-600">Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-lg font-display font-bold text-violeta-700 mb-6">
                      {ctas.find(c => c.id === activeTab)?.title}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.nombre}
                          onChange={e => setFormData({...formData, nombre: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violeta-400 focus:ring-2 focus:ring-violeta-400/20 outline-none transition-all text-sm"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violeta-400 focus:ring-2 focus:ring-violeta-400/20 outline-none transition-all text-sm"
                          placeholder="tu@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Cuéntanos (opcional)</label>
                        <textarea
                          id="message"
                          rows={3}
                          value={formData.mensaje}
                          onChange={e => setFormData({...formData, mensaje: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violeta-400 focus:ring-2 focus:ring-violeta-400/20 outline-none transition-all text-sm resize-none"
                          placeholder="¿Algo que quieras contarnos?"
                        />
                      </div>
                      <div className="flex items-start gap-3">
                        <input type="checkbox" id="privacy" required className="mt-1 w-4 h-4 rounded border-gray-300 text-violeta-400 focus:ring-violeta-400" />
                        <label htmlFor="privacy" className="text-xs text-gray-500 leading-relaxed">
                          He leído y acepto la{' '}
                          <a href="/privacidad" className="text-violeta-400 underline" target="_blank">Política de Privacidad</a>.
                          CONECTADOS tratará tus datos para responder a tu solicitud.
                        </label>
                      </div>
                      {error && <p className="text-red-500 text-sm">{error}</p>}
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full bg-violeta-400 hover:bg-violeta-500 text-white font-bold py-3.5 rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? 'Enviando...' : 'Enviar'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}