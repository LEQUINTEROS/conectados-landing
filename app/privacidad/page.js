import Image from 'next/image'

export const metadata = {
  title: 'Política de Privacidad — CONECTADOS',
}

export default function Privacidad() {
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
        <h1 className="text-4xl font-display font-extrabold text-violeta-700 mb-8">Política de Privacidad</h1>
        <p className="text-sm text-gray-400 mb-8">Última actualización: [PLACEHOLDER: FECHA]</p>

        <h2>1. Responsable del tratamiento</h2>
        <ul>
          <li><strong>Identidad:</strong> CONECTADOS — Asociación sin fines de lucro</li>
          <li><strong>CIF:</strong> [PLACEHOLDER: G-XXXXXXXX]</li>
          <li><strong>Dirección:</strong> [PLACEHOLDER: Dirección completa]</li>
          <li><strong>Correo electrónico:</strong> [PLACEHOLDER: privacidad@conectados.org]</li>
          <li><strong>Delegado de Protección de Datos (DPD):</strong> [PLACEHOLDER: Nombre o indicar si no es obligatorio]</li>
        </ul>

        <h2>2. Finalidades del tratamiento</h2>
        <p>En CONECTADOS tratamos los datos personales que nos facilitas con las siguientes finalidades:</p>
        <ul>
          <li>Responder a las consultas o solicitudes que nos envíes a través de los formularios de contacto.</li>
          <li>Gestionar tu inscripción como persona interesada en participar en nuestras actividades formativas.</li>
          <li>Gestionar tu inscripción como voluntario/a o colaborador/a.</li>
          <li>Enviarte información sobre nuestras actividades, solo si nos das tu consentimiento expreso.</li>
        </ul>

        <h2>3. Base legal del tratamiento</h2>
        <ul>
          <li><strong>Consentimiento del interesado</strong> (Art. 6.1.a RGPD): al enviar un formulario, consientes expresamente el tratamiento de tus datos para las finalidades indicadas.</li>
          <li><strong>Interés legítimo</strong> (Art. 6.1.f RGPD): para la gestión interna y mejora de nuestros servicios.</li>
        </ul>

        <h2>4. Datos recopilados</h2>
        <p>A través de los formularios del sitio web recopilamos:</p>
        <ul>
          <li>Nombre</li>
          <li>Dirección de correo electrónico</li>
          <li>Mensaje o comentario (opcional)</li>
        </ul>
        <p>No recopilamos categorías especiales de datos personales.</p>

        <h2>5. Destinatarios de los datos</h2>
        <p>Tus datos no serán cedidos a terceros salvo obligación legal. Los datos pueden ser tratados por:</p>
        <ul>
          <li><strong>Proveedor de hosting:</strong> [PLACEHOLDER: Nombre del proveedor, p.ej. Vercel Inc.], con servidores en [PLACEHOLDER: ubicación]. Las transferencias internacionales se amparan en [PLACEHOLDER: Cláusulas Contractuales Tipo / Marco de Privacidad de Datos UE-EE.UU.].</li>
          <li><strong>Proveedor de correo electrónico:</strong> [PLACEHOLDER: Nombre del servicio].</li>
        </ul>

        <h2>6. Plazo de conservación</h2>
        <p>Conservaremos tus datos personales mientras sean necesarios para la finalidad para la que fueron recogidos y durante los plazos legalmente establecidos. Los datos de contacto se conservarán mientras no solicites su supresión.</p>

        <h2>7. Derechos del interesado</h2>
        <p>Puedes ejercer los siguientes derechos en cualquier momento:</p>
        <ul>
          <li><strong>Acceso:</strong> conocer qué datos personales tratamos.</li>
          <li><strong>Rectificación:</strong> modificar datos inexactos.</li>
          <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
          <li><strong>Limitación:</strong> solicitar la limitación del tratamiento.</li>
          <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado.</li>
          <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos.</li>
        </ul>
        <p>Para ejercer estos derechos, envía un correo a <strong>[PLACEHOLDER: privacidad@conectados.org]</strong> indicando tu nombre, el derecho que deseas ejercer y una copia de tu documento identificativo.</p>
        <p>También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>

        <h2>8. Seguridad</h2>
        <p>CONECTADOS adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, conforme al estado de la tecnología y la naturaleza de los datos.</p>

        <h2>9. Modificaciones</h2>
        <p>CONECTADOS se reserva el derecho a modificar la presente Política de Privacidad. Cualquier cambio será publicado en esta página con indicación de la fecha de última actualización.</p>
      </main>
    </div>
  )
}
