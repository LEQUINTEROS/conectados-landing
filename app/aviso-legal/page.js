import Image from 'next/image'

export const metadata = {
  title: 'Aviso Legal — CONECTADOS',
}

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo-square.png" alt="CONECTADOS" width={32} height={32} />
            <span className="font-display font-bold text-violeta-400">CONECTADOS</span>
          </a>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 legal-content">
        <h1 className="text-4xl font-display font-extrabold text-violeta-700 mb-8">Aviso Legal</h1>
        <p className="text-sm text-gray-400 mb-8">Última actualización: [PLACEHOLDER: FECHA]</p>

        <h2>1. Datos identificativos</h2>
        <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:</p>
        <ul>
          <li><strong>Denominación social:</strong> CONECTADOS — Asociación sin fines de lucro</li>
          <li><strong>CIF:</strong> [PLACEHOLDER: G-XXXXXXXX]</li>
          <li><strong>Domicilio social:</strong> [PLACEHOLDER: Dirección completa, CP, Ciudad, Provincia]</li>
          <li><strong>Correo electrónico:</strong> [PLACEHOLDER: hola@conectados.org]</li>
          <li><strong>Teléfono:</strong> [PLACEHOLDER: +34 XXX XXX XXX]</li>
          <li><strong>Inscripción registral:</strong> Inscrita en el [PLACEHOLDER: Registro Nacional / Autonómico de Asociaciones], con el número [PLACEHOLDER: XXXXX], Sección [PLACEHOLDER], Grupo [PLACEHOLDER].</li>
        </ul>

        <h2>2. Objeto</h2>
        <p>El presente Aviso Legal regula el acceso y uso del sitio web www.conectados.org (en adelante, &ldquo;el Sitio Web&rdquo;), titularidad de CONECTADOS. La navegación por el Sitio Web atribuye la condición de usuario e implica la aceptación plena de las presentes condiciones.</p>

        <h2>3. Propiedad intelectual e industrial</h2>
        <p>Los contenidos del Sitio Web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseño gráfico y códigos fuente, son propiedad de CONECTADOS o de terceros que han autorizado su uso, y están protegidos por los derechos de propiedad intelectual e industrial.</p>
        <p>Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa, salvo para uso personal y privado.</p>

        <h2>4. Responsabilidad</h2>
        <p>CONECTADOS no se hace responsable de los daños o perjuicios que se pudieran derivar de interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento operativo del sistema electrónico.</p>
        <p>CONECTADOS no garantiza la ausencia de virus o elementos lesivos en los contenidos enlazados desde el Sitio Web.</p>

        <h2>5. Enlaces externos</h2>
        <p>El Sitio Web puede contener enlaces a páginas de terceros. CONECTADOS no asume responsabilidad alguna por el contenido, información o servicios que pudieran aparecer en dichos sitios.</p>

        <h2>6. Legislación aplicable y jurisdicción</h2>
        <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia que pudiera surgir, las partes se someten a los Juzgados y Tribunales de [PLACEHOLDER: Ciudad].</p>
      </main>
    </div>
  )
}
