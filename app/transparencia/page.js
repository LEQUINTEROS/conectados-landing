import Image from 'next/image'

export const metadata = {
  title: 'Transparencia — CONECTADOS',
}

const sections = [
  {
    id: 'estatutos',
    title: 'Estatutos',
    description: 'Documento fundacional de la asociación que recoge nuestra misión, estructura, órganos de gobierno y normas de funcionamiento. CONECTADOS está inscrita en el Registro Nacional de Asociaciones con el número 630180, Sección 1ª.',
    documents: [
      { label: 'Estatutos de la Asociación CONECTADOS (PDF)', href: '/documentos/estatutos.pdf' },
      { label: 'Certificado de inscripción en el RNA (PDF)', href: '/documentos/certificado-inscripcion-rna.pdf' },
    ],
  },
  {
    id: 'memorias',
    title: 'Memorias anuales',
    description: 'Informes anuales de actividades, resultados e impacto. Una forma de rendir cuentas sobre lo que hacemos y lo que logramos juntos.',
    documents: [
      { label: 'Memoria Anual 2025 (PDF)', href: '/documentos/memoria-2025.pdf' },
    ],
  },
  {
    id: 'cuentas',
    title: 'Cuentas y financiación',
    description: 'Origen de nuestros recursos, cuentas anuales auditadas y desglose del destino de cada euro que recibimos.',
    status: 'Publicaremos las primeras cuentas tras el cierre del primer ejercicio.',
  },
  {
    id: 'codigo-etico',
    title: 'Código ético',
    description: 'Principios y compromisos que guían nuestra acción: respeto, inclusión, transparencia, innovación, responsabilidad social y legalidad. Es de obligado cumplimiento para todo el equipo, voluntariado y colaboradores.',
    documents: [
      { label: 'Código de Conducta de la Asociación CONECTADOS (PDF)', href: '/documentos/codigo-conducta.pdf' },
    ],
  },
  {
    id: 'voluntariado',
    title: 'Política de voluntariado',
    description: 'Marco de colaboración con personas voluntarias: derechos, deberes, procesos de acogida, formación y acompañamiento, conforme a la Ley 45/2015 del Voluntariado.',
    documents: [
      { label: 'Plan de Voluntariado (PDF)', href: '/documentos/plan-voluntariado.pdf' },
    ],
  },
  {
    id: 'igualdad',
    title: 'Plan de igualdad',
    description: 'Compromiso de CONECTADOS con la igualdad efectiva entre mujeres y hombres en todas sus actividades, estructuras y procesos. Vigencia 2025–2030, conforme a la Ley Orgánica 3/2007.',
    documents: [
      { label: 'Plan de Igualdad 2025–2030 (PDF)', href: '/documentos/plan-igualdad.pdf' },
    ],
  },
  {
    id: 'proteccion-datos',
    title: 'Protección de datos',
    description: 'CONECTADOS cuenta con un Delegado de Protección de Datos (DPD), Nicolás Eloy Beltrán Moyano, inscrito en el registro de la Agencia Española de Protección de Datos conforme al artículo 34.4 de la LOPDGDD.',
    status: 'Puedes consultar nuestra Política de Privacidad para más información.',
    documents: [
      { label: 'Resolución de alta del DPD ante la AEPD (PDF)', href: '/documentos/resolucion-dpd-aepd.pdf' },
    ],
  },
]

export default function Transparencia() {
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
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-[2px] bg-violeta-400" />
          <span className="text-violeta-400 font-semibold text-sm uppercase tracking-widest">Transparencia</span>
        </div>

        <h1 className="text-4xl font-display font-extrabold text-violeta-700 mb-6">
          Transparencia y rendición de cuentas
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          Creemos que una asociación que aspira a transformar la sociedad tiene que ser, ante todo,
          transparente. Aquí publicamos los documentos clave que explican quiénes somos,
          cómo trabajamos y cómo gestionamos los recursos que recibimos.
        </p>

        <nav aria-label="Índice de transparencia" className="mb-12 p-6 rounded-2xl bg-violeta-50/50 border border-violeta-100">
          <h2 className="text-sm font-display font-bold text-violeta-700 uppercase tracking-wider mb-4 mt-0">
            Índice
          </h2>
          <ul className="space-y-2 !mb-0">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-violeta-400 hover:text-violeta-700 text-sm">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {sections.map((s) => (
          <section key={s.id} id={s.id} className="mb-10 scroll-mt-28">
            <h2>{s.title}</h2>
            <p>{s.description}</p>
            {s.documents && (
              <ul className="!mb-4">
                {s.documents.map((doc, j) => (
                  <li key={j}>
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-violeta-400 hover:text-violeta-700 underline font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      </svg>
                      {doc.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {s.status && <p className="text-sm text-gray-500 italic">{s.status}</p>}
          </section>
        ))}

        <div className="mt-16 p-6 rounded-2xl bg-turquesa-50 border border-turquesa-200">
          <h3 className="font-display font-bold text-violeta-700 text-lg mb-2 mt-0">
            ¿Tienes alguna pregunta?
          </h3>
          <p className="text-gray-700 !mb-0">
            Si necesitas más información o quieres solicitar algún documento en particular,
            escríbenos a{' '}
            <a href="mailto:contacto@asociacionconectados.org" className="text-violeta-400 underline">
              contacto@asociacionconectados.org
            </a>.
          </p>
        </div>
      </main>
    </div>
  )
}
