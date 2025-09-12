'use client'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/siteConfig'
import { motion } from 'framer-motion'

export default function ProjectCard({ p }: { p: Project }){
  return (
    <motion.div whileHover={{ y:-4, rotate:0.2, scale:1.02 }} transition={{ type:'spring', stiffness:300, damping:20 }} className="card overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden">
        <Image src={p.image ?? '/placeholder.jpg'} alt={p.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          {p.link && <Link href={p.link} className="text-sm link-muted">View →</Link>}
        </div>
        <p className="mt-2 text-sm" style={{ color:'rgb(var(--fg) / 0.8)' }}>{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => <span key={t} className="chip rounded-full px-2 py-1 text-xs">{t}</span>)}
        </div>
      </div>
    </motion.div>
  )
}