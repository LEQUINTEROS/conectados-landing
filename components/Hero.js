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
  const [phase, setPhase] = useState('loading') // loading | menu | responding | answered
  const [isTyping, setIsTyping] = useState(false)
  const [showCta, setShowCta] = useState(null)
  const [visible, setVisible] = useState(false)
  const messagesEnd = useRef(null)

  useEffect(() => {
    const t0 = setTimeout(() => setVisible(true), 800)
    const t1 = setTimeout(() => {
      setMessages([{ from: 'bot', text: 'Estoy aquí para ayudarte a entender cómo la inteligencia artificial puede abrirte oportunidades.' }])
    }, 1600)
    const t2 = setTimeout(() => setPhase('menu'), 2200)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    const container = messagesEnd.current?.parentElement
    if (container) {
      setTimeout(() => {
        container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' })
      }, 50)
    }
  }, [messages, isTyping, showCta])

  const flows = {
    aprender: {
      label: 'Quiero aprender IA',
      icon: '🎓',
      response: 'En CONECTADOS impulsamos comunidades de aprendizaje para que más personas puedan entender y usar la inteligencia artificial en su vida y su trabajo.',
      cta: { text: 'Descubrir cómo lo hacemos', href: '#como' },
    },
    colaborar: {
      label: 'Quiero colaborar',
      icon: '🤝',
      response: 'También estamos construyendo esta comunidad con personas, entidades y organizaciones que quieren sumar.',
      cta: { text: 'Ver formas de colaborar', href: '#suma' },
    },
    conocer: {
      label: 'Conocer el proyecto',
      icon: '💡',
      response: 'CONECTADOS trabaja para que la inteligencia artificial sea una herramienta de inclusión social y nuevas oportunidades.',
      cta: { text: 'Conocer el proyecto', href: '#que-hacemos' },
    },
    oportunidades: {
      label: 'Ver oportunidades',
      icon: '🚀',
      response: 'La IA ya está transformando el mundo. Queremos que más personas puedan acceder a ese cambio con apoyo, aprendizaje y comunidad.',
      cta: { text: 'Explorar oportunidades', href: '#impacto' },
    },
  }

  const handleOption = (key) => {
    const flow = flows[key]
    setPhase('responding')
    setShowCta(null)
    setMessages(prev => [...prev, { from: 'user', text: `${flow.icon} ${flow.label}` }])
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: flow.response }])
      setTimeout(() => setShowCta(flow.cta), 400)
      setTimeout(() => setPhase('answered'), 600)
    }, 1000)
  }

  const handleReset = () => {
    setShowCta(null)
    setMessages(prev => [...prev, { from: 'bot', text: '¿En qué más puedo ayudarte?' }])
    setPhase('menu')
  }

  return (
    <div className={`relative w-full max-w-sm h-full max-h-[80vh] my-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Glow effect behind chatbot */}
      <div className="absolute -inset-4 bg-turquesa-400/10 rounded-[2rem] blur-2xl" />
      {/* Connection nodes */}
      <div className="absolute -top-3 -left-3 w-3 h-3 rounded-full bg-turquesa-400/40 animate-pulse" />
      <div className="absolute -bottom-2 -right-4 w-2 h-2 rounded-full bg-violeta-300/50 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 -right-5 w-2 h-2 rounded-full bg-turquesa-400/30 animate-float" style={{ animationDelay: '0.5s' }} />

      <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-violeta-900/40 flex flex-col h-full backdrop-blur-md"
        style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.18) 0%, rgba(122,46,181,0.35) 50%, rgba(85,190,217,0.25) 100%)' }}>

        {/* Header — compact */}
        <div className="px-4 py-2.5 flex items-center gap-2.5 border-b border-white/10"
          style={{ background: 'linear-gradient(135deg, rgba(122,46,181,0.55) 0%, rgba(85,190,217,0.35) 100%)' }}>
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-turquesa-400 to-violeta-400 flex items-center justify-center shadow-md shadow-turquesa-400/20">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-display font-bold text-xs tracking-wide">CONECTADOS IA</p>
            <p className="text-turquesa-300/80 text-[10px]">Asistente de oportunidades</p>
          </div>
          <span className="flex items-center gap-1 text-[10px] text-turquesa-300/70">
            <span className="w-1.5 h-1.5 rounded-full bg-turquesa-400 animate-pulse" />
            Online
          </span>
        </div>

        {/* Messages */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={`chatbot-message flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[88%] px-3.5 py-2.5 text-sm leading-relaxed ${
                msg.from === 'user'
                  ? 'bg-turquesa-400/90 text-white rounded-2xl rounded-br-md'
                  : 'bg-white/10 text-white/90 rounded-2xl rounded-bl-md border border-white/5'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start chatbot-message">
              <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-md border border-white/5">
                <div className="typing-indicator flex gap-1.5">
                  <span /><span /><span />
                </div>
              </div>
            </div>
          )}

          {/* CTA button inside chat */}
          {showCta && (
            <div className="flex justify-start chatbot-message">
              <a
                href={showCta.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-turquesa-400/20 hover:bg-turquesa-400/30 border border-turquesa-400/30 text-turquesa-300 text-sm font-semibold transition-all duration-200 hover:border-turquesa-400/50"
              >
                {showCta.text}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          )}

          <div ref={messagesEnd} />
        </div>

        {/* Footer: full menu OR compact back button */}
        {phase === 'menu' && (
          <div className="px-3 pb-3 pt-1 space-y-1.5 animate-fade-in border-t border-white/5">
            {Object.entries(flows).map(([key, flow]) => (
              <button
                key={key}
                onClick={() => handleOption(key)}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.12] text-white/85 hover:text-white border border-white/[0.06] hover:border-turquesa-400/30 group"
              >
                <span className="text-sm group-hover:scale-110 transition-transform duration-200">{flow.icon}</span>
                {flow.label}
              </button>
            ))}
          </div>
        )}

        {phase === 'answered' && (
          <div className="px-3 pb-3 pt-1 animate-fade-in border-t border-white/5">
            <button
              onClick={handleReset}
              className="w-full text-center px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 bg-white/[0.06] hover:bg-white/[0.12] text-white/70 hover:text-white border border-white/[0.06] hover:border-turquesa-400/30 flex items-center justify-center gap-2"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Más opciones
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function Typewriter({ lines, onComplete }) {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (currentLine >= lines.length) {
      setDone(true)
      onComplete?.()
      return
    }

    const line = lines[currentLine].text
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(prev => prev + 1)
      }, 40)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
        setCurrentChar(0)
      }, 200)
      return () => clearTimeout(timeout)
    }
  }, [currentLine, currentChar, lines, onComplete])

  return (
    <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-extrabold text-white leading-[1.1] mt-8 mb-6">
      {lines.map((line, lineIdx) => {
        let text = ''
        if (lineIdx < currentLine) {
          text = line.text
        } else if (lineIdx === currentLine) {
          text = line.text.slice(0, currentChar)
        }

        if (!text && lineIdx > currentLine) return null

        return (
          <span key={lineIdx} className="block">
            <span className={line.className || ''}>
              {text}
            </span>
            {lineIdx === currentLine && !done && (
              <span className="inline-block w-[3px] h-[0.85em] bg-turquesa-400 ml-1 align-middle animate-pulse" />
            )}
          </span>
        )
      })}
    </h1>
  )
}

export default function Hero() {
  const [typingDone, setTypingDone] = useState(false)

  const heroLines = [
    { text: 'La Inteligencia Artificial', className: 'text-white' },
    { text: 'al servicio de la Inclusión Social', className: 'text-turquesa-300' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #180924 0%, #311248 25%, #7A2EB5 50%, #491C6D 75%, #0F0A1A 100%)',
      }}
    >
      <CircuitSVG />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-turquesa-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violeta-300/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violeta-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
          {/* Left column - Text */}
          <div className="text-center lg:text-left self-center">

            <Typewriter lines={heroLines} onComplete={() => setTypingDone(true)} />

            <p className={`text-lg sm:text-xl text-white/75 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-700 ${typingDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
              Impulsamos comunidades de aprendizaje en Inteligencia Artificial para que
              personas en situación de vulnerabilidad accedan a nuevas oportunidades,
              mejoren su empleabilidad y construyan un futuro más justo.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-200 ${typingDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
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

          </div>

          {/* Right column - Chatbot */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up h-full" style={{ animationDelay: '1s' }}>
            <ChatBot />
          </div>
        </div>
      </div>
    </section>
  )
}
