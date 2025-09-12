import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/siteConfig'

export default function ProjectCard({ p }: { p: Project }){
  return (
    <div className="card overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={p.image ?? '/placeholder.jpg'} alt={p.title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          {p.link && <Link href={p.link} className="text-sm link-muted">View →</Link>}
        </div>
        <p className="mt-2 text-white/80 text-sm">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map(t => <span key={t} className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs text-white/70">{t}</span>)}
        </div>
      </div>
    </div>
  )
}