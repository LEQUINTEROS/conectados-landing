import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { nombre, email, mensaje, tipo } = await req.json();

    const { error } = await resend.emails.send({
      from: 'Conectados <contacto@asociacionconectados.org>',
      to: ['contacto@asociacionconectados.org'],
      subject: `Nueva solicitud: ${tipo}`,
      html: `
        <h2>Nueva solicitud desde la landing</h2>
        <p><b>Tipo:</b> ${tipo}</p>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b> ${mensaje || 'Sin mensaje'}</p>
      `,
    });

    if (error) {
      console.error('Error Resend:', error);
      return Response.json({ ok: false, error: 'Error enviando email' }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Error en /api/send:', err);
    return Response.json({ ok: false, error: 'Error interno' }, { status: 500 });
  }
}