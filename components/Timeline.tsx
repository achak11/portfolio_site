'use client'
import { motion } from 'framer-motion'
import { slideLeft, slideRight } from './motion'

type Item = {
  role: string
  company: string
  period: string
  bullets: string[]
}

export default function Timeline({ items }: { items: Item[] }) {
  return (
    // increased pl from 6 → 8 for more gap between dot and text
    <ol className="relative border-s border-[color:var(--border)] pl-8">
      {items.map((it, i) => (
        <motion.li
          key={i}
          initial="off"
          whileInView="on"
          viewport={{ once: true, amount: 0.4 }}
          variants={i % 2 === 0 ? slideLeft : slideRight}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          className="mb-10 ms-4 relative"
        >
          {/* Solid dot on the timeline */}
          <span
            aria-hidden
            className="absolute -start-10 mt-1.5 w-3 h-3 rounded-full border border-[color:var(--border)] bg-[rgb(var(--bg))] dark:bg-white"
          />




          {/* Role line */}
          <h3 className="text-base font-semibold text-[color:var(--fg)]">
            {it.role} · <span className="text-[color:var(--muted)]">{it.company}</span>
          </h3>

          <p className="text-xs text-[color:var(--muted)]">{it.period}</p>

          {/* Responsibilities: plain lines, no bullets */}
          <ul className="mt-2 list-none space-y-2 pl-0 text-sm text-[color:var(--fg)]/90">
            {it.bullets.map((b, j) => (
              <li key={j} className="leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ol>
  )
}
