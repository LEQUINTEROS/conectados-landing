import Image from 'next/image'

export const metadata = {
  title: 'Política de Cookies — CONECTADOS',
}

export default function Cookies() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo-square.png" alt="CONECTADOS" width={32} height={32} />
            <span className="font-display font-bold text-violeta-400">CONECTADOS</span>
          </a>
          <a href="/" className="text-sm text-violeta-400 hover:text-turquesa-500 font-semibold">
            ← Volver al inicio
          </a>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 legal-content">
        <h1 className="text-4xl font-display font-extrabold text-violeta-700 mb-8">Política de Cookies</h1>
        <p className="text-sm text-gray-400 mb-8">Última actualización: 12 de abril de 2026</p>

        <h2>1. ¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (ordenador, teléfono móvil o tablet) cuando los visitas. Sirven para que el sitio web recuerde información sobre tu visita, como tus preferencias, y facilitan la navegación.</p>

        <h2>2. ¿Qué cookies utilizamos?</h2>
        <p>En el sitio web de CONECTADOS utilizamos las siguientes categorías de cookies:</p>

        <h3>Cookies técnicas (necesarias)</h3>
        <p>Son imprescindibles para el funcionamiento del sitio web. No requieren consentimiento.</p>
        <ul>
          <li><strong>cookie-consent</strong> — Almacena tu preferencia sobre cookies. Duración: 24 meses. Primera parte.</li>
        </ul>

        <h3>Cookies analíticas (opcionales)</h3>
        <p>Nos permiten medir y analizar la navegación de los usuarios en el sitio web para mejorar nuestros servicios. Solo se activan si das tu consentimiento.</p>
        <ul>
          <li><strong>[PLACEHOLDER: Nombre de la cookie analítica, p.ej. _ga]</strong> — [PLACEHOLDER: Proveedor, p.ej. Google Analytics]. Finalidad: análisis estadístico. Duración: [PLACEHOLDER: p.ej. 2 años]. Tercera parte.</li>
        </ul>

        <h2>3. ¿Cómo gestionar las cookies?</h2>
        <p>Al acceder a nuestro sitio web, se mostrará un banner de cookies con tres opciones de igual visibilidad:</p>
        <ul>
          <li><strong>Aceptar todas:</strong> activas todas las cookies.</li>
          <li><strong>Rechazar todas:</strong> solo se mantienen las cookies técnicas necesarias.</li>
          <li><strong>Configurar:</strong> puedes elegir qué categorías de cookies aceptar.</li>
        </ul>
        <p>Puedes modificar tu elección en cualquier momento haciendo clic en el botón &ldquo;Cookies&rdquo; disponible en la parte inferior izquierda de todas las páginas del sitio web.</p>

        <h2>4. Configuración del navegador</h2>
        <p>También puedes gestionar las cookies desde la configuración de tu navegador. A continuación te indicamos los enlaces a las instrucciones de los principales navegadores:</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>

        <h2>5. Transferencias internacionales</h2>
        <p>[PLACEHOLDER: Si se usan servicios como Google Analytics, indicar que los datos pueden transferirse a EE.UU. al amparo del Marco de Privacidad de Datos UE-EE.UU. (decisión de adecuación de la Comisión Europea de julio de 2023).]</p>

        <h2>6. Más información</h2>
        <p>Para cualquier consulta sobre nuestra política de cookies, puedes contactarnos en <strong>contacto@asociacionconectados.org</strong>.</p>
        <p>También puedes obtener más información sobre las cookies en: <a href="https://www.aepd.es/guias/guia-uso-de-las-cookies.pdf" target="_blank" rel="noopener noreferrer">Guía de la AEPD sobre el uso de cookies</a>.</p>
      </main>
    </div>
  )
}
