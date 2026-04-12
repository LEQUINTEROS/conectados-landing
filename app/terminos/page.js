import Image from 'next/image'

export const metadata = {
  title: 'Términos y Condiciones — CONECTADOS',
}

export default function Terminos() {
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
        <h1 className="text-4xl font-display font-extrabold text-violeta-700 mb-8">Términos y Condiciones de Uso</h1>
        <p className="text-sm text-gray-400 mb-8">Última actualización: 12 de abril de 2026</p>

        <h2>1. Objeto</h2>
        <p>Las presentes condiciones regulan el uso del sitio web www.conectados.org, titularidad de CONECTADOS, asociación sin fines de lucro con CIF G-75578229. El acceso al sitio web implica la aceptación de estas condiciones.</p>

        <h2>2. Acceso y uso del sitio web</h2>
        <p>El acceso al sitio web es gratuito y no requiere registro previo, salvo para determinadas funcionalidades como formularios de contacto o inscripción en actividades.</p>
        <p>El usuario se compromete a hacer un uso adecuado del sitio web, conforme a la ley, las presentes condiciones, la buena fe y el orden público.</p>

        <h2>3. Conductas prohibidas</h2>
        <p>Queda prohibido:</p>
        <ul>
          <li>Utilizar el sitio web con fines ilícitos o contrarios al orden público.</li>
          <li>Introducir virus, programas maliciosos o cualquier otro código dañino.</li>
          <li>Intentar acceder a áreas restringidas del sitio web sin autorización.</li>
          <li>Reproducir, distribuir o modificar los contenidos del sitio web sin autorización expresa.</li>
          <li>Suplantar la identidad de otros usuarios o de CONECTADOS.</li>
        </ul>

        <h2>4. Formularios y datos personales</h2>
        <p>Los formularios disponibles en el sitio web permiten enviar consultas, solicitar información o inscribirse en actividades. Al enviar un formulario, el usuario:</p>
        <ul>
          <li>Garantiza la veracidad de los datos proporcionados.</li>
          <li>Consiente el tratamiento de sus datos conforme a la <a href="/privacidad">Política de Privacidad</a>.</li>
          <li>Acepta que CONECTADOS se ponga en contacto por los medios proporcionados.</li>
        </ul>

        <h2>5. Propiedad intelectual</h2>
        <p>Todos los contenidos del sitio web están protegidos por derechos de propiedad intelectual. Se permite la visualización, descarga e impresión de contenidos exclusivamente para uso personal y no comercial, siempre que se cite la fuente.</p>

        <h2>6. Limitación de responsabilidad</h2>
        <p>CONECTADOS no garantiza la disponibilidad continua del sitio web y no será responsable de:</p>
        <ul>
          <li>Interrupciones en el servicio por causas técnicas o de fuerza mayor.</li>
          <li>Daños derivados del uso indebido del sitio web por parte del usuario.</li>
          <li>Contenidos de sitios web de terceros enlazados desde esta página.</li>
        </ul>

        <h2>7. Modificaciones</h2>
        <p>CONECTADOS se reserva el derecho de modificar estas condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web.</p>

        <h2>8. Legislación aplicable y jurisdicción</h2>
        <p>Estas condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de Palma de Mallorca.</p>
      </main>
    </div>
  )
}
