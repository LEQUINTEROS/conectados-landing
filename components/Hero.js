'use client'
import { useState, useEffect, useRef } from 'react'

function CircuitSVG() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="4" fill="#55BED9" className="animate-float" style={{ animationDelay: '0s' }} />
      <circle cx="250" cy="200" r="3" fill="#55BED9" className="animate-float" style={{ animationDelay: '1s' }} />
      <circle cx="650" cy="150" r="5" fill="#55BED9" className="animate-float" style={{ animationDelay: '2s' }} />
      <circle cx="700" cy="400" r="3" fill="#55BED9" className="animate-float" style={{ animationDelay: '0.5s' }} />
      <circle cx="400" cy="500" r="4" fill="#55BED9" className="animate-float" style={{ animationDelay: '1.5s' }} />
      <circle cx="150" cy="450" r="3" fill="#55BED9" className="animate-float" style={{ animationDelay: '2.5s' }} />
      <line x1="100" y1="100" x2="250" y2="200" stroke="#55BED9" strokeWidth="1" opacity="0.4" />
      <line x1="250" y1="200" x2="400" y2="500" stroke="#55BED9" strokeWidth="1" opacity="0.3" />
      <line x1="650" y1="150" x2="700" y2="400" stroke="#55BED9" strokeWidth="1" opacity="0.4" />
      <circle cx="500" cy="80" r="3" fill="#F4E10D" className="animate-float" style={{ animationDelay: '3s' }} />
      <circle cx="350" cy="350" r="2" fill="#F4E10D" className="animate-float" style={{ animationDelay: '1.8s' }} />
    </svg>
  )
}

function ChatBot() {
  const [messages, setMessages] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const messagesEnd = useRef(null)

  useEffect(() => {
    const t1 = setTimeout(() => {
      setMessages([{ from: 'bot', text: '¡Hola! Soy el asistente de CONECTADOS. 👋' }])
    }, 1200)
    const t2 = setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: '¿En qué puedo ayudarte hoy?' }])
      setShowOptions(true)
    }, 2400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const options = [
    { id: 'aprender', label: '🎓 Quiero aprender IA', response: '¡Genial! Tenemos formaciones gratuitas en inteligencia artificial para todos los niveles. Déjanos tu contacto en la sección "Suma tu energía" y te informaremos de las próximas convocatorias.' },
    { id: 'colaborar', label: '🤝 Quiero colaborar', response: 'Nos encanta contar con personas comprometidas. Puedes colaborar como voluntario/a, mentor/a o aliado/a estratégico. Escríbenos a hola@conectados.org o usa el formulario de contacto.' },
    { id: 'saber', label: '💡 Quiero saber más', response: 'CONECTADOS es una ONG que trabaja para que la inteligencia artificial sea accesible para todas las personas. Creamos comunidades de aprendizaje para quienes más lo necesitan. ¡Baja para conocer toda nuestra historia!' },
  ]

  const handleOption = (option) => {
    setSelectedOption(option.id)
    setShowOptions(false)
    setMessages(prev => [...prev, { from: 'user', text: option.label }])
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: option.response }])
      setTimeout(() => setShowOptions(true), 800)
    }, 800)
  }

  return (
    <div className="w-full max-w-sm bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden shadow-2xl shadow-violeta-800/30">
      {/* Chat header */}
      <div className="bg-violeta-400/80 backdrop-blur px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-turquesa-400 flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Asistente CONECTADOS</p>
          <p className="text-turquesa-200 text-xs">Tu primera experiencia con IA</p>
        </div>
        <div className="ml-auto flex gap-1">
          <span className="w-2 h-2 rounded-full bg-turquesa-300 animate-pulse" />
        </div>
      </div>

      {/* Messages */}
      <div className="h-56 overflow-y-auto p-4 space-y-3 scrollbar-thin">
        {messages.map((msg, i) => (
          <div key={i} className={`chatbot-message flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
              msg.from === 'user'
                ? 'bg-turquesa-400 text-white rounded-br-md'
                : 'bg-white/20 text-white/95 rounded-bl-md'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {!showOptions && messages.length > 0 && messages[messages.length - 1].from === 'user' && (
          <div className="flex justify-start">
            <div className="bg-white/20 px-4 py-3 rounded-2xl rounded-bl-md">
              <div className="typing-indicator flex gap-1">
                <span /><span /><span />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEnd} />
      </div>

      {/* Options */}
      {showOptions && (
        <div className="px-4 pb-4 space-y-2 animate-fade-in">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleOption(opt)}
              className="w-full text-left px-3.5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-sm font-medium transition-all duration-200 border border-white/10 hover:border-turquesa-400/50"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #180924 0%, #311248 25%, #7A2EB5 50%, #491C6D 75%, #0F0A1A 100%)',
      }}
    >
      <CircuitSVG />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-turquesa-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violeta-300/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violeta-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="w-2 h-2 rounded-full bg-turquesa-400 animate-pulse" />
              <span className="text-turquesa-200 text-sm font-medium">Asociación sin fines de lucro</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              La IA puede cambiar vidas.
              <br />
              <span className="text-turquesa-300">Hagamos que cambie</span>
              <br />
              <span className="text-turquesa-300">todas.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/75 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Creamos comunidades de aprendizaje en inteligencia artificial para que
              personas en situación de vulnerabilidad accedan a nuevas oportunidades,
              mejoren su empleabilidad y construyan un futuro más justo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <a
                href="#suma"
                className="btn-primary bg-turquesa-400 hover:bg-turquesa-500 text-white font-bold text-lg px-8 py-4 rounded-full text-center"
              >
                Quiero participar
              </a>
              <a
                href="#por-que"
                className="btn-secondary bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/20 text-center"
              >
                Conocer más
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start text-white/40 text-sm animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="flex -space-x-2">
                {['bg-turquesa-400', 'bg-violeta-300', 'bg-amarillo-400', 'bg-turquesa-300'].map((color, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-violeta-700 flex items-center justify-center text-white text-xs font-bold`}>
                    {['M', 'J', 'A', 'L'][i]}
                  </div>
                ))}
              </div>
              <span>Personas que ya se han sumado</span>
            </div>
          </div>

          {/* Right column - Chatbot */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <ChatBot />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
