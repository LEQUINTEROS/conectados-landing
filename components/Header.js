'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(['por-que', 'que-hacemos', 'como', 'impacto', 'ideas'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#por-que', label: 'Por qué existimos' },
    { href: '#que-hacemos', label: 'Qué hacemos' },
    { href: '#como', label: 'Cómo lo hacemos' },
    { href: '#impacto', label: 'Impacto' },
    { href: '#ideas', label: 'Ideas' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileOpen
            ? 'bg-[#0F0A1A]'
            : scrolled
              ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-violeta-400/5'
              : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3 shrink-0" aria-label="CONECTADOS - Inicio">
            <Image
              src="/logo-square.png"
              alt="CONECTADOS"
              width={40}
              height={40}
              className="w-9 h-9 md:w-10 md:h-10"
            />
            <span className={`font-display font-bold text-lg md:text-xl tracking-wide transition-colors duration-300 ${
              scrolled && !mobileOpen ? 'text-violeta-400' : 'text-white'
            }`}>
              CONECTA<span className={`transition-colors duration-300 ${
                scrolled && !mobileOpen ? 'text-violeta-700' : 'text-turquesa-300'
              }`}>DOS</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const isActive = `#${activeSection}` === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 hover:text-turquesa-400 ${
                    isActive
                      ? 'text-turquesa-400'
                      : scrolled ? 'text-violeta-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-turquesa-400 rounded-full" />
                  )}
                </a>
              )
            })}
            <a
              href="#suma"
              className="btn-primary bg-turquesa-400 hover:bg-turquesa-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full"
            >
              Únete
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg relative z-50"
            aria-label="Menú de navegación"
            aria-expanded={mobileOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 rounded transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2 bg-white' : ''
              } ${!mobileOpen && scrolled ? 'bg-violeta-400' : 'bg-white'}`} />
              <span className={`block h-0.5 rounded transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              } ${!mobileOpen && scrolled ? 'bg-violeta-400' : 'bg-white'}`} />
              <span className={`block h-0.5 rounded transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2 bg-white' : ''
              } ${!mobileOpen && scrolled ? 'bg-violeta-400' : 'bg-white'}`} />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ background: '#0F0A1A' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
          {links.map((link) => {
            const isActive = `#${activeSection}` === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-display font-semibold transition-colors duration-200 ${
                  isActive ? 'text-turquesa-400' : 'text-white/80 hover:text-turquesa-300'
                }`}
              >
                {link.label}
              </a>
            )
          })}
          <a
            href="#suma"
            onClick={() => setMobileOpen(false)}
            className="btn-primary bg-turquesa-400 hover:bg-turquesa-500 text-white font-bold text-lg px-10 py-4 rounded-full mt-4"
          >
            Únete
          </a>
        </div>
      </div>
    </>
  )
}
