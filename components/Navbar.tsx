'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact Me' },
]

export default function Navbar(){
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b border-white/10/0 bg-transparent">
      <div className="container nav-shell">
        <nav className="nav-pills">
          <Link href="/" className={clsx('nav-pill', pathname==='/' && 'nav-pill-active')}>Home</Link>
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={clsx('nav-pill', pathname===l.href && 'nav-pill-active')}
            >{l.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  )
}