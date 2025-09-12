import ContactForm from '@/components/ContactForm'
import { site } from '@/lib/siteConfig'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail, MdPictureAsPdf } from 'react-icons/md'
import Link from 'next/link'

export default function ContactPage(){

  return (
    <section className="container mt-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-2" style={{color:'rgb(var(--fg) / 0.8)'}}>Want to collaborate or chat? Send me a note or use the shortcuts below.</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a href={site.socials.linkedin} target="_blank" className="card px-4 py-2 inline-flex items-center gap-2">
          <FaLinkedin className="text-xl" /> <span>LinkedIn</span>
        </a>
        <a href={site.socials.github} target="_blank" className="card px-4 py-2 inline-flex items-center gap-2">
          <FaGithub className="text-xl" /> <span>GitHub</span>
        </a>
        <a href={`mailto:${site.email}`} className="card px-4 py-2 inline-flex items-center gap-2">
          <MdEmail className="text-xl" /> <span>Email</span>
        </a>
        <Link href="/Anurag_Chakraborty_resume.pdf" target="_blank" className="card px-4 py-2 inline-flex items-center gap-2">
          <MdPictureAsPdf className="text-xl" /> <span>Resume</span>
        </Link>
      </div>
      <div className="mt-6 max-w-2xl">
        <ContactForm />
      </div>
    </section>
  )
}