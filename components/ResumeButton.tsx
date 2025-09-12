import { FiDownload } from 'react-icons/fi'
import Link from 'next/link'

export default function ResumeButton(){
  return (
    <Link href="/Anurag_Chakraborty_resume.pdf" target="_blank" className="group inline-flex items-center gap-2 rounded-xl border px-4 py-2" style={{ borderColor:'rgb(var(--fg) / 0.14)', color:'rgb(var(--fg))' }}>
      <span>Download Resume</span>
      <FiDownload className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  )
}