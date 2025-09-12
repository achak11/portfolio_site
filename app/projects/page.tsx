import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/siteConfig'

export default function ProjectsPage(){
  return (
    <section className="container mt-12">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <p className="text-white/80 mt-2">Selected work that I&apos;m happy to share.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => <ProjectCard key={p.title} p={p} />)}
      </div>
    </section>
  )
}