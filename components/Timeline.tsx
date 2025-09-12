export default function Timeline({ items }:{ items: {role:string, company:string, period:string, bullets:string[]}[] }){
  return (
    <ol className="relative border-s border-white/10 pl-6">
      {items.map((it, i) => (
        <li key={i} className="mb-10 ms-4">
          <span className="absolute -start-3 mt-1 size-3 rounded-full border border-white/20 bg-white/40" />
          <h3 className="text-base font-semibold">{it.role} · <span className="text-white/70">{it.company}</span></h3>
          <p className="text-xs text-white/60">{it.period}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
            {it.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  )
}