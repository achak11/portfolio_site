'use client'
import { motion } from 'framer-motion'
import { FaCode, FaServer } from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'

const roles = [
  { icon: <MdWorkOutline className="text-2xl" />, title: 'Software Engineer / Software Developer', desc: 'I love building reliable, scalable systems and shipping robust features end-to-end.' },
  { icon: <FaServer className="text-2xl" />, title: 'Backend Engineer', desc: 'Spring Boot, Postgres, Kafka, REST API, GraphQL — focusing on performance, observability, and clean APIs.' },
  { icon: <FaCode className="text-2xl" />, title: 'Full‑Stack Engineer', desc: 'Product-minded with Next.js + TypeScript, building responsive frontend UI and robust server-side logic.' }
]
export default function Callouts(){
  return (
    <section className="container mt-10">
      <h2 className="text-2xl font-semibold">Actively looking for roles</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((r, i) => (
          <motion.div key={r.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: i * 0.05, type: 'spring', stiffness: 120, damping: 16 }} className="card p-5 hover:translate-y-[-3px] transition">
            <div className="flex items-start gap-3">
              <div className="shrink-0 rounded-xl border p-2" style={{ borderColor: 'rgb(var(--fg) / 0.14)' }}>{r.icon}</div>
              <div>
                <h3 className="font-semibold">{r.title}</h3>
                <p className="mt-1 text-sm" style={{ color:'rgb(var(--fg) / 0.8)' }}>{r.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}