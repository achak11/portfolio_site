
'use client'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher(){
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'dark'|'light'>('dark')

  useEffect(() => {
    setMounted(true)
  }, [])
  useEffect(() => {
    if (!mounted) return
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const sysPref = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    const nextTheme = (saved === 'light' || saved === 'dark') ? (saved as 'light'|'dark') : (sysPref as 'light'|'dark')
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme === 'light' ? 'light' : 'dark')
  }, [mounted])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next === 'light' ? 'light' : 'dark')
    if (typeof window !== 'undefined') localStorage.setItem('theme', next)
  }

  if (!mounted) return <button className="theme-toggle" aria-label="Toggle theme">Theme</button>

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      {theme==='dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}
