import { site } from '@/lib/siteConfig'

export default function Footer(){
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container py-10 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${site.email}`} className="link-muted">{site.email}</a>
          <a href={site.socials.linkedin} className="link-muted">LinkedIn</a>
          <a href={site.socials.github} className="link-muted">GitHub</a>
        </div>
      </div>
    </footer>
  )
}