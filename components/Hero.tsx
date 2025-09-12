import Link from 'next/link'

export default function Hero(){
  return (
    <section className="container mt-20 md:mt-28 text-left">
      <div className="max-w-3xl">
        <h1 className="hero-h1">Anurag Chakraborty</h1>
        <div className="hero-sub mt-2">Software Engineer — Full‑Stack & Backend</div>
        <p className="hero-copy">
          I build reliable backends and pragmatic full‑stack apps with Spring Boot, Next.js, PostgreSQL, and cloud tooling.
          Recently, I delivered a marketplace MVP (30+ merchants) on Supabase with typed Next.js, and I&apos;ve led
          GraphQL/API performance work in production systems.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <Link href="/contact" className="btn btn-brand">Get in touch</Link>
          <Link href="/projects" className="btn border border-white/20">View projects</Link>
        </div>
      </div>
    </section>
  )
}