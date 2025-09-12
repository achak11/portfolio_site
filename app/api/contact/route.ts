import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request){
  const { name, email, message } = await req.json()
  if(!name || !email || !message){
     return NextResponse.json({ ok:false, error:'Missing fields' }, { status:400 }) 
    }

  try{
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT) || 465, secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    })

    const to = process.env.TO_EMAIL || 'anurag.cs.jobs@gmail.com'
    const from = process.env.FROM_EMAIL || to
    await transporter.sendMail({
      to, from, replyTo: email, subject:`Portfolio Contact — ${name}`,
      text: message, html:`<p><b>From:</b> ${name} (${email})</p><p>${String(message).replace(/\n/g,'<br/>')}</p>`
    })

    return NextResponse.json({ ok:true })

  }catch(e){ console.error('Email error', e); 
    
  return NextResponse.json({ ok:false, error:'Email failed' }, { status:500 }) }
}