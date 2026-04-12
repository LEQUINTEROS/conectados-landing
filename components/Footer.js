'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative bg-violeta-800 text-white overflow-hidden">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-violeta-400 via-turquesa-400 to-violeta-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo-square.png" alt="CONECTADOS" width={36} height={36} className="w-9 h-9" />
              <span className="font-display font-bold text-lg">
                CONECTA<span className="text-turquesa-300">DOS</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Asociación sin fines de lucro que impulsa la inclusión social a través de la
              inteligencia artificial. Formación, comunidad y oportunidades para todas las personas.
            </p>
            <div className="flex gap-4">
              {/* Social icons */}
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/asociacionconectados/', path: 'M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a1 1 0 110 2 1 1 0 010-2z' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/asociaci%C3%B3n-conectados-77746633b/', path: 'M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.5 18.5v-7h-2v7h2zm-1-8.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 8.5v-4c0-2.5-1.5-3.5-3-3.5-1.25 0-2 .75-2.25 1.25v-1.25h-2v7.5h2v-3.75c0-1 .5-1.75 1.5-1.75s1.25.75 1.25 1.75v3.75h2.5z' },
                { label: 'X / Twitter', href: 'https://x.com/ConectadosAso', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-turquesa-400/30 flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Contact inside brand column */}
            <ul className="mt-8 space-y-3 text-sm text-white/60">
              <li>
                <a href="mailto:contacto@asociacionconectados.org" className="hover:text-turquesa-300 transition-colors break-all">
                  contacto@asociacionconectados.org
                </a>
              </li>
              <li>Calle Margarita Retuerto 2<br />Palma de Mallorca, Islas Baleares</li>
              <li>
                <a href="tel:+34871717535" className="hover:text-turquesa-300 transition-colors">
                  871 71 75 35
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-turquesa-300 mb-5">Navegación</h4>
            <ul className="space-y-3">
              {[
                { href: '#por-que', label: 'Por qué existimos' },
                { href: '#que-hacemos', label: 'Qué hacemos' },
                { href: '#como', label: 'Cómo lo hacemos' },
                { href: '#impacto', label: 'Impacto' },
                { href: '#ideas', label: 'Pensar el futuro' },
                { href: '#suma', label: 'Suma tu energía' },
              ].map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-white/60 hover:text-turquesa-300 transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Transparencia */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-turquesa-300 mb-5">Transparencia</h4>
            <ul className="space-y-3">
              {[
                { href: '/transparencia#estatutos', label: 'Estatutos' },
                { href: '/transparencia#memorias', label: 'Memorias anuales' },
                { href: '/transparencia#cuentas', label: 'Cuentas y financiación' },
                { href: '/transparencia#codigo-etico', label: 'Código ético' },
                { href: '/transparencia#voluntariado', label: 'Política de voluntariado' },
                { href: '/transparencia#proteccion-datos', label: 'Protección de datos' },
              ].map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-white/60 hover:text-turquesa-300 transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-turquesa-300 mb-5">Legal</h4>
            <ul className="space-y-3">
              {[
                { href: '/aviso-legal', label: 'Aviso legal' },
                { href: '/privacidad', label: 'Política de privacidad' },
                { href: '/cookies', label: 'Política de cookies' },
                { href: '/privacidad-redes-sociales', label: 'Privacidad en redes' },
                { href: '/canal-etico', label: 'Canal ético' },
                { href: '/terminos', label: 'Términos y condiciones' },
              ].map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-white/60 hover:text-turquesa-300 transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} CONECTADOS — Asociación sin fines de lucro.
            CIF: G-75578229
          </p>
          <p className="text-white/30 text-xs">
            Hecho con propósito, código y comunidad.
          </p>
        </div>
      </div>
    </footer>
  )
}
