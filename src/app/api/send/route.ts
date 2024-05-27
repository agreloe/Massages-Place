import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactEmail } from '../../../../emails/contact-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    let { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const response = await resend.emails.send({
      from: 'Masajes Compostela <onboarding@resend.dev>',
      to: ['reservasmasajescompostela@gmail.com'],
      subject: 'Nuevo Mensaje de Formulario',
      //@ts-ignore
      html: render(ContactEmail({ name, email, message })),
    });

    if (response.error) {
      return NextResponse.json({ error: response.error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    //@ts-ignore
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}