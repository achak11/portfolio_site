import { FaJava, FaPython, FaReact, FaAws, FaDocker } from 'react-icons/fa'
import { SiSpringboot, SiKubernetes, SiPostgresql, SiSupabase, SiGraphql, SiJenkins, SiTypescript } from 'react-icons/si'

const skills = [
  { name: 'Java', icon: <FaJava /> }, { name: 'Python', icon: <FaPython /> }, { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> }, { name: 'React/Next.js', icon: <FaReact /> }, { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Supabase', icon: <SiSupabase /> }, { name: 'AWS', icon: <FaAws /> }, { name: 'Docker', icon: <FaDocker /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> }, { name: 'GraphQL', icon: <SiGraphql /> }, { name: 'CI/CD (Jenkins)', icon: <SiJenkins /> },
]

export default function Skills(){
  return (
    <section className="container mt-16">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <p className="mt-2 subtle-text">A snapshot of tools I use most.</p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((s) => (
          <div key={s.name} className="group card flex items-center gap-3 p-4 hover:scale-[1.02] transition">
            <div className="text-2xl">{s.icon}</div>
            <div className="font-medium">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}