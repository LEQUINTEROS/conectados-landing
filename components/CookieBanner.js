'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showConfig, setShowConfig] = useState(false)

  useEffect(() => {
    const consent = localStorage?.getItem?.('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    try { localStorage.setItem('cookie-consent', 'all') } catch {}
    setVisible(false)
  }

  const reject = () => {
    try { localStorage.setItem('cookie-consent', 'essential') } catch {}
    setVisible(false)
  }

  const configure = () => setShowConfig(!showConfig)

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl shadow-violeta-800/10 border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <span className="text-2xl shrink-0">🍪</span>
            <div className="flex-1">
              <h3 className="font-display font-bold text-violeta-700 text-lg mb-2">
                Respetamos tu privacidad
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Utilizamos cookies estrictamente necesarias para el funcionamiento del sitio.
                Puedes aceptar, rechazar o configurar tus preferencias. Consulta nuestra{' '}
                <a href="/cookies" className="text-violeta-400 underline">Política de Cookies</a> para más información.
              </p>

              {showConfig && (
                <div className="mb-4 p-4 bg-gray-50 rounded-xl space-y-3 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Cookies técnicas</p>
                      <p className="text-xs text-gray-500">Necesarias para el funcionamiento básico</p>
                    </div>
                    <div className="bg-turquesa-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Siempre activas
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Cookies analíticas</p>
                      <p className="text-xs text-gray-500">Nos ayudan a entender cómo usas el sitio</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-violeta-400/30 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violeta-400" />
                    </label>
                  </div>
                </div>
              )}

              {/* Buttons - AEPD compliant: equal visual weight */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={accept}
                  className="flex-1 bg-violeta-400 hover:bg-violeta-500 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-colors"
                >
                  Aceptar todas
                </button>
                <button
                  onClick={reject}
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-colors"
                >
                  Rechazar todas
                </button>
                <button
                  onClick={configure}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl text-sm transition-colors"
                >
                  Configurar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
