'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import ThemeSwitcher from './ThemeSwitcher'

const links = [{href:'/about',label:'About'},
              {href:'/work',label:'Work'},
              {href:'/projects',label:'Projects'},
              {href:'/contact',label:'Contact Me'}]

export default function Navbar(){
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="container nav-shell">
        <nav className="nav-pills">
          <Link href="/" className={clsx('nav-pill', pathname==='/' && 'nav-pill-active')}>Home</Link>
          {links.map(l => <Link key={l.href} href={l.href} className={clsx('nav-pill', pathname===l.href && 'nav-pill-active')}>{l.label}</Link>)}
          <div className="mx-1 h-6 w-px" style={{ background:'rgb(var(--fg) / 0.1)' }} />
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  )
}