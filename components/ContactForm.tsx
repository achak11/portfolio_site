'use client'
import { useState } from 'react'

export default function ContactForm(){
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      setStatus('sending')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if(!res.ok) throw new Error('Failed')
      setStatus('sent')
      form.reset()
    } catch (e) {
      console.error(e)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 space-y-4">
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input name="name" required className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none focus:border-brand" />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input type="email" name="email" required className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none focus:border-brand" />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea name="message" required rows={5} className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none focus:border-brand" />
      </div>
      <button disabled={status==='sending'} className="btn btn-brand">{status==='sending'?'Sending...':'Send'}</button>
      {status==='sent' && <p className="text-sm text-green-400">Thanks! I&apos;ll get back to you shortly.</p>}
      {status==='error' && <p className="text-sm text-rose-400">Something went wrong. Please try again.</p>}
    </form>
  )
}