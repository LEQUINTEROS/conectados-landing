import Image from 'next/image'

export const metadata = {
  title: 'Política de Privacidad en Redes Sociales — CONECTADOS',
}

const redes = [
  { nombre: 'Instagram', url: 'https://www.instagram.com/asociacionconectados/' },
  { nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/asociaci%C3%B3n-conectados-77746633b/' },
  { nombre: 'X (Twitter)', url: 'https://x.com/ConectadosAso' },
  { nombre: 'Facebook', url: null },
  { nombre: 'TikTok', url: null },
  { nombre: 'YouTube', url: null },
]

export default function PrivacidadRedes() {
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
          <span className="text-violeta-400 font-semibold text-sm uppercase tracking-widest">Legal</span>
        </div>

        <h1 className="text-4xl font-display font-extrabold text-violeta-700 mb-6">
          Política de privacidad en redes sociales
        </h1>
        <p className="text-sm text-gray-400 mb-10">Última actualización: 15 de mayo de 2025</p>

        <h2>1. Responsable del tratamiento</h2>
        <p>CONECTADOS — Asociación sin fines de lucro, con CIF G-75578229 y domicilio en Calle Margarita Retuerto 2, planta 3, puerta A, 07015 Palma de Mallorca (Illes Balears). Correo: <a href="mailto:contacto@asociacionconectados.org">contacto@asociacionconectados.org</a>.</p>

        <h2>2. Perfiles oficiales</h2>
        <p>CONECTADOS dispone de perfiles oficiales en las siguientes redes sociales:</p>
        <ul>
          {redes.map((r) => (
            <li key={r.nombre}>
              {r.url ? (
                <a href={r.url} target="_blank" rel="noopener noreferrer">{r.nombre}</a>
              ) : (
                r.nombre
              )}
            </li>
          ))}
        </ul>

        <h2>3. Finalidad del tratamiento</h2>
        <p>Los datos personales que se publiquen, faciliten o se obtengan a través de estos perfiles serán tratados con las siguientes finalidades:</p>
        <ul>
          <li>Informar sobre actividades, eventos, formaciones y proyectos de CONECTADOS.</li>
          <li>Atender consultas, comentarios o mensajes recibidos por los canales de la red social.</li>
          <li>Generar comunidad en torno a la misión de inclusión social a través de la inteligencia artificial.</li>
        </ul>

        <h2>4. Legitimación</h2>
        <p>La base legal es el consentimiento del usuario al seguir el perfil, interactuar con los contenidos o enviarnos un mensaje (art. 6.1.a RGPD), así como el interés legítimo de CONECTADOS en difundir su actividad (art. 6.1.f RGPD).</p>

        <h2>5. Conservación</h2>
        <p>Mantendremos tus datos mientras sigas vinculado al perfil. Podrás dejar de seguirnos o solicitar que no se traten tus datos en cualquier momento.</p>

        <h2>6. Cesiones de datos</h2>
        <p>Los datos personales que compartas en las redes sociales serán tratados, además de por CONECTADOS, por la propia plataforma (Meta, X, LinkedIn, ByteDance, Google, etc.), conforme a sus propias políticas de privacidad. Te recomendamos revisarlas antes de interactuar.</p>

        <h2>7. Derechos</h2>
        <p>Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad mediante escrito a <a href="mailto:contacto@asociacionconectados.org">contacto@asociacionconectados.org</a>, adjuntando copia de tu DNI o documento identificativo. También puedes reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).</p>

        <h2>8. Normas de participación</h2>
        <p>Al interactuar con nuestros perfiles te comprometes a mantener un trato respetuoso. CONECTADOS se reserva el derecho de eliminar comentarios ofensivos, spam, publicidad no solicitada o contenidos contrarios a la dignidad de las personas, así como a bloquear a quienes incumplan estas normas.</p>
      </main>
    </div>
  )
}
