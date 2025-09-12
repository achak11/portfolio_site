import Timeline from '@/components/Timeline'
import { experience } from '@/lib/siteConfig'

export default function WorkPage(){
  return (
    <section className="container mt-12">
      <h2 className="text-2xl font-semibold">Work</h2>
      <p className="mt-2" style={{color:'rgb(var(--fg) / 0.8)'}}>Professional work experience.</p>
      <div className="mt-8">
        <Timeline items={experience} />
      </div>
    </section>
  )
}