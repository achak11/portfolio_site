'use client'

import { useRef, useState } from 'react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  function shake() {
    const el = formRef.current; if (!el) return;
    el.classList.remove('animate-[shake_0.4s_ease]'); void el.offsetWidth;
    el.classList.add('animate-[shake_0.4s_ease]')
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    if (!data.name || !data.email || !data.message) {
      shake()
      toast.error('Please fill all required fields.')
      return
    }

    try {
      setStatus('sending')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent'); form.reset()
      toast.success('Message sent! I’ll reply soon.')
    } catch {
      setStatus('error'); shake()
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="card p-6 space-y-4">
      <style jsx global>{`@keyframes shake{10%,90%{transform:translateX(-1px)}20%,80%{transform:translateX(2px)}30%,50%,70%{transform:translateX(-4px)}40%,60%{transform:translateX(4px)}}`}</style>
      <div><label className="block text-sm mb-1">Name</label>
        <input name="name" required className="input-field w-full rounded-xl border px-3 py-2 outline-none focus:border-brand" /></div>
      <div><label className="block text-sm mb-1">Email</label>
        <input type="email" name="email" required className="input-field w-full rounded-xl border px-3 py-2 outline-none focus:border-brand" /></div>
      <div><label className="block text-sm mb-1">Message</label>
        <textarea name="message" required rows={5} className="input-field w-full rounded-xl border px-3 py-2 outline-none focus:border-brand" /></div>
      <button disabled={status === 'sending'} className="btn btn-brand">{status === 'sending' ? 'Sending...' : 'Send'}</button>
      {status==='sent' && (
        <div className="success-pop block w-fit mt-4 rounded-lg px-3 py-2"
            style={{ background:'rgb(34 197 94 / 0.12)', color:'#16a34a', border:'1px solid rgb(22 163 74 / 0.25)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="ml-2 align-middle">Message sent successfully!</span>
        </div>
      )}
      {status === 'error' && <p className="text-sm" style={{ color: '#f43f5e' }}>Something went wrong. Please try again.</p>}
    </form>
  )
}