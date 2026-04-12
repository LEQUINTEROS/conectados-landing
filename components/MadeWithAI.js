'use client'
import { useState, useEffect } from 'react'

export default function MadeWithAI() {
  const [visible, setVisible] = useState(false)
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      if (localStorage.getItem('made-with-ai-closed-v3') === '1') {
        setClosed(true)
        return
      }
    } catch {}
    const t = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(t)
  }, [])

  const handleClose = (e) => {
    e.stopPropagation()
    try { localStorage.setItem('made-with-ai-closed-v3', '1') } catch {}
    setVisible(false)
  }

  if (closed || !visible) return null

  return (
    <div className="fixed bottom-4 right-4 z-40 animate-fade-in-up">
      <div
        className="group relative flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full border border-turquesa-400/40 shadow-lg shadow-violeta-900/20 backdrop-blur-md"
        style={{
          background: 'linear-gradient(135deg, rgba(122,46,181,0.92) 0%, rgba(85,190,217,0.92) 100%)',
        }}
      >
        <span className="text-white text-[11px] font-medium leading-tight whitespace-nowrap">
          Esta web fue creada con IA <span className="inline-block animate-pulse">❤️</span>✨
        </span>
        <button
          onClick={handleClose}
          aria-label="Cerrar"
          className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-colors"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
