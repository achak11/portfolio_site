import ResumeButton from '@/components/ResumeButton'
import { site } from '@/lib/siteConfig'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <section className="container mt-12 max-w-4xl">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="shrink-0 md:pt-[2px]">
          <Image
            src="/anurag.jpg" 
            alt="Anurag Chakraborty"
            width={180}             
            height={180}           
            className="rounded-lg border border-[color:var(--border)] shadow-soft object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">About</h2>

          <p className="mt-4" style={{ color: 'rgb(var(--fg) / 0.85)' }}>
            I’m a software engineer with 3+ years of experience, focused on shipping robust, scalable backend
            services and responsive full-stack products. I enjoy learning new things and building complex features.
            Outside of work, I enjoy soccer, tech, and hiking.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={site.socials.linkedin}
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-xl border px-4 py-2"
              style={{ borderColor: 'rgb(var(--fg) / 0.14)' }}
            >
              <FaLinkedin className="text-xl" /> <span>LinkedIn</span>
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-xl border px-4 py-2"
              style={{ borderColor: 'rgb(var(--fg) / 0.14)' }}
            >
              <FaGithub className="text-xl" /> <span>GitHub</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 rounded-xl border px-4 py-2"
              style={{ borderColor: 'rgb(var(--fg) / 0.14)' }}
            >
              <MdEmail className="text-xl" /> <span>{site.email}</span>
            </a>
            <ResumeButton />
          </div>
        </div>
      </div>
      <section className="mt-10">
        <h3 className="text-xl font-semibold">Education</h3>
        <div className="mt-4 space-y-4">
          <div className="card p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium">University of Florida – Gainesville, Florida</p>
                <p className="subtle-text">Master of Science in Computer Science (GPA: 3.7/4.0)</p>
              </div>
              <p className="subtle-text mt-1 sm:mt-0">Aug 2022 – Dec 2024</p>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium">SRM Institute of Science and Technology</p>
                <p className="subtle-text">Bachelor of Science in Computer Science (GPA: 3.5/4.0)</p>
              </div>
              <p className="subtle-text mt-1 sm:mt-0">Aug 2016 – May 2020</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
