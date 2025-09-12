'use client'
import Link from 'next/link'
import AnimatedText from './AnimatedText'
import AccentBar from './AccentBar'
import ResumeButton from './ResumeButton'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="container mt-20 md:mt-28 text-left">
      <div className="max-w-3xl">
        <h1 className="hero-h1">Anurag Chakraborty</h1>
        <div className="mt-1 text-lg muted-text"><AnimatedText /></div>
        <div className="hero-sub mt-2">Software Engineer — Backend & Full-Stack</div>
        <AccentBar />
        <p className="hero-copy">
          I build reliable backend infrastructure and robust full-stack apps with Spring Boot, Next.js, PostgreSQL, and cloud tooling (Docker & Kubernetes).
          At my current role, I'm building a marketplace ecosystem end-to-end from designing scalable DB schemas to building responsive UI/UX.
        </p>
        <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="mt-8 flex items-center gap-3">
          <Link href="/contact" className="btn btn-brand">Get in touch</Link>
          <Link href="/projects" className="btn" style={{border:'1px solid rgb(var(--fg) / 0.2)'}}>View projects</Link>
          <ResumeButton />
        </motion.div>
      </div>
    </section>
  )
}