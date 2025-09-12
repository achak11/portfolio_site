import Timeline from '@/components/Timeline'
import { experience } from '@/lib/siteConfig'

export default function WorkPage(){
  return (
    <section className="container mt-12">
      <h2 className="text-2xl font-semibold">Work</h2>
      <p className="text-white/80 mt-2 max-w-2xl">Selected roles and impact.</p>
      <div className="mt-8">
        <Timeline items={experience} />
      </div>
    </section>
  )
}