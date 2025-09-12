import { NextResponse } from 'next/server'

export async function POST(req: Request){
  const data = await req.json()
  // TODO: plug this into your email service / webhook.
  // For now we just log it so you can verify the request works in dev.
  console.log('Contact message:', data)
  return NextResponse.json({ ok: true })
}