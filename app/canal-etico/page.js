import Image from 'next/image'

export const metadata = {
  title: 'Canal Ético — CONECTADOS',
}

export default function CanalEtico() {
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
          Canal Ético
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          CONECTADOS pone a tu disposición un canal interno de denuncias en cumplimiento de la
          Ley 2/2023, de 20 de febrero, reguladora de la protección de las personas que informen
          sobre infracciones normativas y de lucha contra la corrupción.
        </p>

        <h2>1. ¿Qué puedes comunicar?</h2>
        <p>A través de este canal puedes informar sobre hechos o conductas que puedan constituir:</p>
        <ul>
          <li>Infracciones del Derecho de la Unión Europea recogidas en la Directiva (UE) 2019/1937.</li>
          <li>Infracciones penales o administrativas graves o muy graves del ordenamiento jurídico español.</li>
          <li>Incumplimientos del Código de Conducta de CONECTADOS o de sus políticas internas (acoso, discriminación, conflictos de interés, uso indebido de fondos, etc.).</li>
        </ul>

        <h2>2. ¿Quién puede utilizarlo?</h2>
        <p>Podrán utilizar el canal todas las personas que mantengan una relación con la entidad: equipo contratado, personas voluntarias, colaboradoras, prácticas, proveedoras, socias, donantes y cualquier persona usuaria de nuestras actividades.</p>

        <h2>3. Cómo enviar una comunicación</h2>
        <p>Las comunicaciones se pueden presentar:</p>
        <ul>
          <li><strong>Por correo electrónico:</strong> <a href="mailto:canaletico@asociacionconectados.org">canaletico@asociacionconectados.org</a></li>
          <li><strong>Por correo postal:</strong> Responsable del Sistema Interno de Información, Calle Margarita Retuerto 2, planta 3, puerta A — 07015 Palma de Mallorca (Illes Balears). Sobre cerrado con la indicación &ldquo;CONFIDENCIAL — CANAL ÉTICO&rdquo;.</li>
          <li><strong>Presencialmente:</strong> solicitando reunión con el Responsable del Sistema Interno de Información en un plazo máximo de 7 días.</li>
        </ul>
        <p>Las comunicaciones pueden presentarse de forma identificada o anónima. En ambos casos se garantiza la confidencialidad.</p>

        <h2>4. Garantías</h2>
        <ul>
          <li><strong>Confidencialidad</strong> de la identidad de la persona informante, las personas afectadas y de cualquier tercero mencionado.</li>
          <li><strong>Prohibición de represalias</strong>: no se tolerará ninguna represalia, directa o indirecta, contra quien comunique de buena fe.</li>
          <li><strong>Presunción de inocencia</strong> y derecho de defensa de las personas afectadas.</li>
          <li><strong>Protección de datos</strong> conforme al RGPD y la LOPDGDD.</li>
        </ul>

        <h2>5. Tramitación</h2>
        <p>El Responsable del Sistema Interno de Información acusará recibo en un plazo máximo de 7 días naturales y resolverá la investigación en un plazo máximo de 3 meses desde la recepción (ampliables a 3 meses adicionales en casos de especial complejidad).</p>

        <h2>6. Canal externo</h2>
        <p>Además del canal interno, tienes derecho a comunicar los hechos ante la <strong>Autoridad Independiente de Protección del Informante (A.A.I.)</strong> o las autoridades autonómicas competentes, así como ante las instituciones, órganos u organismos de la Unión Europea.</p>

        <h2>7. Tratamiento de datos</h2>
        <p>Los datos personales se tratarán por CONECTADOS con la finalidad de gestionar la comunicación, conforme al art. 6.1.c) y e) del RGPD y al art. 30 de la Ley 2/2023. Se conservarán únicamente durante el tiempo imprescindible, con un máximo de 10 años. Puedes ejercer tus derechos escribiendo a <a href="mailto:contacto@asociacionconectados.org">contacto@asociacionconectados.org</a>.</p>

        <div className="mt-16 p-6 rounded-2xl bg-turquesa-50 border border-turquesa-200">
          <h3 className="font-display font-bold text-violeta-700 text-lg mb-2 mt-0">
            ¿Tienes dudas antes de informar?
          </h3>
          <p className="text-gray-700 !mb-0">
            Escribe al Responsable del Sistema Interno de Información en{' '}
            <a href="mailto:canaletico@asociacionconectados.org" className="text-violeta-400 underline">
              canaletico@asociacionconectados.org
            </a>{' '}
            para recibir orientación general, sin necesidad de formalizar aún una comunicación.
          </p>
        </div>
      </main>
    </div>
  )
}
