'use client'
import { useEffect, useState } from 'react'

const phrases = ['Backend Software Engineer','Full-Stack Developer','Distributed Systems Enthusiast']

export default function AnimatedText(){
  const [i, setI] = useState(0); const [s, setS] = useState(''); const [del, setDel] = useState(false)
  useEffect(()=>{
    const cur = phrases[i%phrases.length]
    const t = setTimeout(()=>{
      if(!del){ const n = cur.slice(0, s.length+1); setS(n); if(n.length===cur.length) setTimeout(()=>setDel(true), 900) }
      else { const n = cur.slice(0, Math.max(0, s.length-1)); setS(n); if(n.length===0){ setDel(false); setI((i+1)%phrases.length) } }
    }, del?40:70)
    return ()=>clearTimeout(t)
  },[s,del,i])
  return <span style={{ color:'rgb(var(--fg) / 0.9)' }}>{s}<span className="animate-pulse">|</span></span>
}
