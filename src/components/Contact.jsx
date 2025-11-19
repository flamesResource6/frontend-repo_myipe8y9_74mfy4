import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('Thanks! We will get back to you soon.')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus(data.detail || 'Something went wrong')
      }
    } catch (e) {
      setStatus(e.message)
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
            <p className="mt-2 text-slate-600">Have a question or special request? Send us a message.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input className="w-full border border-slate-300 rounded-lg px-4 py-3" placeholder="Name" name="name" value={form.name} onChange={handleChange} required />
              <input className="w-full border border-slate-300 rounded-lg px-4 py-3" placeholder="Email" name="email" value={form.email} onChange={handleChange} required />
              <textarea className="w-full border border-slate-300 rounded-lg px-4 py-3" rows="5" placeholder="Message" name="message" value={form.message} onChange={handleChange} required />
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700">Send Message</button>
            </form>
            {status && <p className="mt-3 text-sm text-slate-700">{status}</p>}
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-xl font-semibold text-slate-900">Our Service Area</h3>
            <p className="mt-2 text-slate-600">We serve the greater metro area. Mobile appointments available.</p>
            <div className="mt-4 h-64 w-full rounded-xl bg-gradient-to-br from-blue-200 to-blue-100 flex items-center justify-center text-blue-800 font-medium">Map Placeholder</div>
          </div>
        </div>
      </div>
    </section>
  )
}
