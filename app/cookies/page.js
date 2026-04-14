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

        <h2>Información sobre cookies</h2>
        <p>Conforme con la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI), en relación con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, General de Protección de Datos (GDPR) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD), es obligado obtener el consentimiento expreso del usuario de todas las páginas web que usan cookies prescindibles, antes de que este navegue por ellas.</p>

        <h2>¿Qué son las cookies?</h2>
        <p>Las cookies y otras tecnologías similares tales como local shared objects, flash cookies o píxeles, son herramientas empleadas por los servidores Web para almacenar y recuperar información acerca de sus visitantes, así como para ofrecer un correcto funcionamiento del sitio.</p>
        <p>Mediante el uso de estos dispositivos se permite al servidor Web recordar algunos datos concernientes al usuario, como sus preferencias para la visualización de las páginas de ese servidor, nombre y contraseña, productos que más le interesan, etc.</p>

        <h2>Cookies afectadas por la normativa y cookies exceptuadas</h2>
        <p>Según la directiva de la UE, las cookies que requieren el consentimiento informado por parte del usuario son las cookies de analítica y las de publicidad y afiliación, quedando exceptuadas las de carácter técnico y las necesarias para el funcionamiento del sitio web o la prestación de servicios expresamente solicitados por el usuario.</p>

        <h2>Tipos de cookies</h2>

        <h3>Según la finalidad</h3>
        <ul>
          <li><strong>Cookies técnicas y funcionales:</strong> son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.</li>
          <li><strong>Cookies analíticas:</strong> son aquellas que permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</li>
          <li><strong>Cookies publicitarias:</strong> son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.</li>
          <li><strong>Cookies de publicidad comportamental:</strong> recogen información sobre las preferencias y elecciones personales del usuario (retargeting) para permitir la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado.</li>
          <li><strong>Cookies sociales:</strong> son establecidas por las plataformas de redes sociales en los servicios para permitirle compartir contenido con sus amigos y redes. Las plataformas de medios sociales tienen la capacidad de rastrear su actividad en línea fuera de los Servicios. Esto puede afectar al contenido y los mensajes que ve en otros servicios que visita.</li>
          <li><strong>Cookies de afiliados:</strong> permiten hacer un seguimiento de las visitas procedentes de otras webs, con las que el sitio web establece un contrato de afiliación (empresas de afiliación).</li>
          <li><strong>Cookies de seguridad:</strong> almacenan información cifrada para evitar que los datos guardados en ellas sean vulnerables a ataques maliciosos de terceros.</li>
        </ul>

        <h3>Según la propiedad</h3>
        <ul>
          <li><strong>Cookies propias:</strong> son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.</li>
          <li><strong>Cookies de terceros:</strong> son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos a través de las cookies.</li>
        </ul>

        <h3>Según el plazo de conservación</h3>
        <ul>
          <li><strong>Cookies de sesión:</strong> son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web.</li>
          <li><strong>Cookies persistentes:</strong> son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un período definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.</li>
        </ul>

        <h2>Tratamiento de datos personales</h2>
        <p>CONECTADOS es el <strong>Responsable del tratamiento</strong> de los datos personales del <strong>Interesado</strong> y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril de 2016 (GDPR), por lo que se le facilita la siguiente información del tratamiento:</p>
        <p><strong>Fines del tratamiento:</strong> según se especifica en el apartado de cookies que se utilizan en este sitio web.</p>
        <p><strong>Legitimación del tratamiento:</strong> salvo en los casos en los que resulte necesario para la navegación por la web, por consentimiento del interesado (art. 6.1.a GDPR).</p>
        <p><strong>Criterios de conservación de los datos:</strong> según se especifica en el apartado de cookies utilizadas en la web.</p>
        <p><strong>Comunicación de los datos:</strong> no se comunicarán los datos a terceros, excepto en cookies propiedad de terceros o por obligación legal.</p>

        <p><strong>Derechos que asisten al Interesado:</strong></p>
        <ul>
          <li>Derecho a retirar el consentimiento en cualquier momento.</li>
          <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento.</li>
          <li>Derecho a presentar una reclamación ante la Autoridad de control (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
        </ul>

        <p><strong>Datos de contacto para ejercer sus derechos:</strong></p>
        <p>CONECTADOS. CALLE MARGARITA RETUERTO,, 2 PISO 3 A - 07015 PALMA (Illes Balears). E-mail: dpd@asociacionconectados.org</p>

        <h2>Cookies utilizadas en este sitio web</h2>

        <h3>Cookies controladas por el editor</h3>

        <p><strong>Técnicas y funcionales</strong></p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-3 py-2 text-left">Propiedad</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Cookie</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Finalidad</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Plazo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">PHP.net</td>
                <td className="border border-gray-200 px-3 py-2"><strong>PHPSESSID</strong></td>
                <td className="border border-gray-200 px-3 py-2">Cookies generada por las aplicaciones basadas en el lenguaje PHP. Se trata de un identificador de propósito general usado para mantener las variables de sesión de usuario. Normalmente es un número generado al azar, cómo se utiliza puede ser específica para el sitio, pero un buen ejemplo es el mantenimiento de una sesión iniciada en el estado de un usuario entre las páginas.</td>
                <td className="border border-gray-200 px-3 py-2">Sesión</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Publicitarias</strong></p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-3 py-2 text-left">Propiedad</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Cookie</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Finalidad</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Plazo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Facebook</td>
                <td className="border border-gray-200 px-3 py-2"><strong>datr</strong></td>
                <td className="border border-gray-200 px-3 py-2">Se utiliza para prevenir la creación de falsas cuentas / spam. DATR cookie se asocia con un navegador, no a las personas individuales.</td>
                <td className="border border-gray-200 px-3 py-2">en un mes</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Facebook</td>
                <td className="border border-gray-200 px-3 py-2"><strong>oo</strong></td>
                <td className="border border-gray-200 px-3 py-2">Cookie de exclusión de anuncios</td>
                <td className="border border-gray-200 px-3 py-2">en un mes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Cookies de terceros</h3>
        <p>Los servicios de terceros son ajenos al control del editor. Los proveedores pueden modificar en todo momento sus condiciones de servicio, finalidad y utilización de las cookies, etc.</p>

        <p><strong>Proveedores externos de este sitio web:</strong></p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-3 py-2 text-left">Editor</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Política de privacidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Facebook</td>
                <td className="border border-gray-200 px-3 py-2"><a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/about/privacy/</a></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">PHP.net</td>
                <td className="border border-gray-200 px-3 py-2"><a href="https://www.php.net/privacy.php" target="_blank" rel="noopener noreferrer">https://www.php.net/privacy.php</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Panel de configuración de cookies</h2>
        <p>Desde este panel podrá configurar las cookies que el sitio web puede instalar en su navegador, excepto las cookies técnicas o funcionales que son necesarias para la navegación y la utilización de las diferentes opciones o servicios que se ofrecen.</p>

        <h2>Cómo gestionar las cookies desde el navegador</h2>
        <ul>
          <li><strong>Eliminar las cookies del dispositivo:</strong> Las cookies que ya están en un dispositivo se pueden eliminar borrando el historial del navegador, con lo que se suprimen las cookies de todos los sitios web visitados. Sin embargo, también se puede perder parte de la información guardada (por ejemplo, los datos de inicio de sesión o las preferencias de sitio web).</li>
          <li><strong>Gestionar las cookies específicas del sitio:</strong> Para tener un control más preciso de las cookies específicas de cada sitio, los usuarios pueden ajustar su configuración de privacidad y cookies en el navegador.</li>
          <li><strong>Bloquear las cookies:</strong> Aunque la mayoría de los navegadores modernos se pueden configurar para evitar que se instalen cookies en los dispositivos, eso puede obligar al ajuste manual de determinadas preferencias cada vez que se visite un sitio o página. Además, algunos servicios y características pueden no funcionar correctamente (por ejemplo, los inicios de sesión con perfil).</li>
        </ul>

        <h2>Cómo eliminar las cookies de los navegadores más comunes</h2>
        <ul>
          <li><strong>Chrome:</strong> <a href="http://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">http://support.google.com/chrome/answer/95647?hl=es</a></li>
          <li><strong>Edge:</strong> <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</a></li>
          <li><strong>Explorer:</strong> <a href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer</a></li>
          <li><strong>Firefox:</strong> <a href="https://www.mozilla.org/es-ES/privacy/websites/#cookies" target="_blank" rel="noopener noreferrer">https://www.mozilla.org/es-ES/privacy/websites/#cookies</a></li>
          <li><strong>Safari:</strong> <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">https://support.apple.com/es-es/guide/safari/sfri11471/mac</a></li>
          <li><strong>Opera:</strong> <a href="https://help.opera.com/en/latest/security-and-privacy/#clearBrowsingData" target="_blank" rel="noopener noreferrer">https://help.opera.com/en/latest/security-and-privacy/#clearBrowsingData</a></li>
        </ul>
      </main>
    </div>
  )
}
