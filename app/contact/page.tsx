import ContactForm from '@/components/ContactForm'

export default function ContactPage(){
  return (
    <section className="container mt-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="text-white/80 mt-2">Want to collaborate or chat? Send me a note.</p>
      <div className="mt-6 max-w-2xl">
        <ContactForm />
      </div>
    </section>
  )
}