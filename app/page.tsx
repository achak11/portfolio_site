import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/siteConfig'
import Skills from '@/components/Skills'
import Callouts from '@/components/Callouts'

export default function HomePage(){
  
  return (
    <>
      <Hero />
      <Callouts />
      <section className="container mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => <ProjectCard key={p.title} p={p} />)}
      </section>
      <Skills />
    </>
  )
}