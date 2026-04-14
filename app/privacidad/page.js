import Image from 'next/image'

export const metadata = {
  title: 'Política de Privacidad — CONECTADOS',
}

export default function Privacidad() {
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
        <h1 className="text-4xl font-display font-extrabold text-violeta-700 mb-8">Política de Privacidad</h1>

        <h2>1. Información al usuario</h2>

        <h3>¿Quién es el responsable del tratamiento de tus datos personales?</h3>
        <p><strong>CONECTADOS</strong> es el RESPONSABLE del tratamiento de los datos personales del USUARIO y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).</p>

        <h3>¿Para qué tratamos tus datos personales y por qué lo hacemos?</h3>
        <p>Según el formulario donde hayamos obtenido sus datos personales, los trataremos de manera confidencial para alcanzar los siguientes fines:</p>

        <p><strong>En el formulario Contacto</strong></p>
        <ul>
          <li>Dar respuesta a las consultas o cualquier tipo de petición que sea realizada por el usuario a través de cualquiera de las formas de contacto que se ponen a su disposición en la página web del responsable. <em>(por el interés legítimo del responsable, art. 6.1.f GDPR)</em></li>
          <li>Realizar análisis estadísticos y estudios de mercado. <em>(por el interés legítimo del responsable, art. 6.1.f GDPR)</em></li>
        </ul>

        <p><strong>En el formulario Newsletter</strong></p>
        <ul>
          <li>Remitir boletines informativos, novedades, ofertas y promociones online. <em>(por el consentimiento del interesado, 6.1.a GDPR)</em></li>
        </ul>

        <p><strong>En el formulario Foro online</strong></p>
        <ul>
          <li>Participar en los foros online propuestos por el responsable. <em>(por el consentimiento del interesado, 6.1.a GDPR)</em></li>
        </ul>

        <p><strong>En el formulario Currículum</strong></p>
        <ul>
          <li>Hacer partícipe al interesado en los procesos de selección de personal y analizar el perfil del solicitante con el objetivo de seleccionar un candidato para el puesto vacante del responsable. <em>(por el consentimiento del interesado, 6.1.a GDPR)</em></li>
        </ul>

        <p><strong>En el formulario Testimonio</strong></p>
        <ul>
          <li>Moderar y publicar en la página web las experiencias, opiniones y sugerencias del usuario sobre un producto o servicio. <em>(por el consentimiento del interesado, 6.1.a GDPR)</em></li>
        </ul>

        <p><strong>En el formulario Comentarios</strong></p>
        <ul>
          <li>Moderar y publicar en la página web las opiniones sobre una publicación. <em>(por el consentimiento del interesado, 6.1.a GDPR)</em></li>
        </ul>

        <p><strong>En el formulario Registro de usuario</strong></p>
        <ul>
          <li>Gestionar la cuenta del usuario para proporcionarle un acceso personalizado a la página web y a los servicios interactivos que ofrece. <em>(por el consentimiento del interesado, 6.1.a GDPR)</em></li>
        </ul>

        <p><strong>En el formulario Tarjeta de fidelización</strong></p>
        <ul>
          <li>Gestionar la tarjeta de fidelización en caso de solicitarla. <em>(por el consentimiento del interesado, 6.1.a GDPR)</em></li>
          <li>Realizar análisis estadísticos y estudios de mercado. <em>(por el interés legítimo del responsable, art. 6.1.f GDPR)</em></li>
        </ul>

        <p><strong>En el formulario Inscripción voluntariado</strong></p>
        <ul>
          <li>Gestionar la inscripción en el voluntariado a través de los diferentes programas que lleva a cabo la organización. <em>(por el consentimiento del interesado, 6.1.a GDPR)</em></li>
        </ul>

        <p><strong>En el formulario Inscripción socio</strong></p>
        <ul>
          <li>Gestionar y tramitar cualquier tipo de solicitud de información, incluidas aquellas dirigidas a hacerse socio. Mantener informados a los socios con las acciones que llevamos a cabo. Divulgación de las actividades. <em>(para la ejecución de un contrato o precontrato, 6.1.b GDPR)</em></li>
          <li>Enviar comunicaciones comerciales publicitarias por e-mail, fax, SMS, MMS, redes sociales o cualquier otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales. Estas comunicaciones serán realizadas por el responsable y estarán relacionadas con sus productos y servicios, o de sus colaboradores o proveedores, con los que este haya alcanzado algún acuerdo de promoción. En este caso, los terceros nunca tendrán acceso a los datos personales. <em>(por el consentimiento del interesado, 6.1.a GDPR)</em></li>
          <li>Realizar análisis estadísticos y estudios de mercado. <em>(por el interés legítimo del responsable, art. 6.1.f GDPR)</em></li>
        </ul>

        <p><strong>En el formulario Donaciones</strong></p>
        <ul>
          <li>Para gestionar y cumplir las obligaciones legales derivadas de la donación que usted realiza. <em>(para el cumplimiento de una obligación legal, 6.1.c GDPR)</em></li>
        </ul>

        <p><strong>En el formulario Contacto</strong></p>
        <ul>
          <li>Dar respuesta a las consultas o cualquier tipo de petición que sea realizada por el usuario a través de cualquiera de las formas de contacto que se ponen a su disposición en la página web del responsable. <em>(por el interés legítimo del responsable, art. 6.1.f GDPR)</em></li>
          <li>Enviar comunicaciones comerciales publicitarias por e-mail, fax, SMS, MMS, redes sociales o cualquier otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales. Estas comunicaciones serán realizadas por el responsable y estarán relacionadas con sus productos y servicios, o de sus colaboradores o proveedores, con los que este haya alcanzado algún acuerdo de promoción. En este caso, los terceros nunca tendrán acceso a los datos personales. <em>(por el consentimiento del interesado, 6.1.a GDPR)</em></li>
          <li>Realizar análisis estadísticos y estudios de mercado. <em>(por el interés legítimo del responsable, art. 6.1.f GDPR)</em></li>
        </ul>

        <p><strong>En el formulario Canal ético o de denuncias</strong></p>
        <ul>
          <li>Gestionar adecuadamente el canal ético, tramitando las correspondientes irregularidades notificadas a través del mismo, y decidiendo sobre la procedencia de iniciar una investigación, al objeto de detectar posibles delitos y prevenir la imposición de cualquier tipo de responsabilidad, así como para evitar cualquier tipo de conducta contraria a la normativa interna o externa de la entidad. <em>(para el cumplimiento de una obligación legal, 6.1.c GDPR)</em></li>
        </ul>

        <p><strong>En el formulario Sorteos y promociones</strong></p>
        <ul>
          <li>Participar en sorteos, concursos, promociones u otros servicios ofrecidos por el responsable. <em>(por el consentimiento del interesado, 6.1.a GDPR)</em></li>
          <li>Enviar comunicaciones comerciales publicitarias por e-mail, fax, SMS, MMS, redes sociales o cualquier otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales. Estas comunicaciones serán realizadas por el responsable y estarán relacionadas con sus productos y servicios, o de sus colaboradores o proveedores, con los que este haya alcanzado algún acuerdo de promoción. En este caso, los terceros nunca tendrán acceso a los datos personales. <em>(por el consentimiento del interesado, 6.1.a GDPR)</em></li>
        </ul>

        <p><strong>En el formulario Inscripción al concurso</strong></p>
        <ul>
          <li>Tramitar y gestionar la participación en los concursos organizados por el responsable. <em>(por el consentimiento del interesado, 6.1.a GDPR)</em></li>
        </ul>

        <h3>¿Durante cuánto tiempo guardaremos tus datos personales?</h3>
        <p>Se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o existan prescripciones legales que dictaminen su custodia y cuando ya no sea necesario para ello, se suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o la destrucción total de los mismos.</p>

        <h3>¿A quién facilitamos tus datos personales?</h3>
        <p>No está prevista ninguna comunicación de datos personales a terceros salvo, si fuese necesario para el desarrollo y ejecución de las finalidades del tratamiento, a nuestros proveedores de servicios relacionados con comunicaciones, con los cuales el RESPONSABLE tiene suscritos los contratos de confidencialidad y de encargado de tratamiento exigidos por la normativa vigente de privacidad.</p>

        <h3>¿Cuáles son tus derechos?</h3>
        <p>Los derechos que asisten al USUARIO son:</p>
        <ul>
          <li>Derecho a retirar el consentimiento en cualquier momento.</li>
          <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento.</li>
          <li>Derecho a presentar una reclamación ante la autoridad de control (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
        </ul>

        <p><strong>Datos de contacto para ejercer sus derechos:</strong></p>
        <p>CONECTADOS. CALLE MARGARITA RETUERTO,, 2 PISO 3 A - 07015 PALMA (Illes Balears). E-mail: contacto@asociacionconectados.org</p>

        <h2>2. Carácter obligatorio o facultativo de la información facilitada por el usuario</h2>
        <p>Los USUARIOS, mediante la marcación de las casillas correspondientes y la entrada de datos en los campos, marcados con un asterisco (*) en el formulario de contacto o presentados en formularios de descarga, aceptan expresamente y de forma libre e inequívoca, que sus datos son necesarios para atender su petición, por parte del prestador, siendo voluntaria la inclusión de datos en los campos restantes. El USUARIO garantiza que los datos personales facilitados al RESPONSABLE son veraces y se hace responsable de comunicar cualquier modificación de los mismos.</p>
        <p>El RESPONSABLE informa de que todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al USUARIO. En caso de que no se faciliten todos los datos, no se garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades.</p>

        <h2>3. Medidas de seguridad</h2>
        <p>Que de conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas GDPR y LOPDGDD para el tratamiento de los datos personales de su responsabilidad, y manifiestamente con los principios descritos en el artículo 5 del GDPR, por los cuales son tratados de manera lícita, leal y transparente en relación con el interesado y adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados.</p>
        <p>El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el GDPR y la LOPDGDD con el fin de proteger los derechos y libertades de los USUARIOS y les ha comunicado la información adecuada para que puedan ejercerlos.</p>
        <p>Para más información sobre las garantías de privacidad, puedes dirigirte al RESPONSABLE a través de CONECTADOS. CALLE MARGARITA RETUERTO,, 2 PISO 3 A - 07015 PALMA (Illes Balears). E-mail: dpd@asociacionconectados.org</p>
      </main>
    </div>
  )
}
