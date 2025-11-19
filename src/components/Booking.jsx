import { useState } from 'react'

export default function Booking() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', vehicle_make: '', vehicle_model: '', vehicle_year: '', service_id: '', preferred_date: '', notes: ''
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          vehicle_year: form.vehicle_year ? Number(form.vehicle_year) : null,
        })
      })
      const data = await res.json()
      if (res.ok) {
        setStatus(`Success! ${data.message}`)
        setForm({ name: '', email: '', phone: '', vehicle_make: '', vehicle_model: '', vehicle_year: '', service_id: '', preferred_date: '', notes: '' })
      } else {
        setStatus(data.detail || 'Something went wrong')
      }
    } catch (e) {
      setStatus(e.message)
    }
  }

  return (
    <section id="booking" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Book Your Detail</h2>
            <p className="mt-2 text-slate-600">Tell us about your vehicle and preferred time. We’ll confirm shortly.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="border border-slate-300 rounded-lg px-4 py-3" placeholder="Full name" name="name" value={form.name} onChange={handleChange} required />
              <input className="border border-slate-300 rounded-lg px-4 py-3" placeholder="Email" name="email" value={form.email} onChange={handleChange} required />
              <input className="border border-slate-300 rounded-lg px-4 py-3" placeholder="Phone" name="phone" value={form.phone} onChange={handleChange} required />
              <input className="border border-slate-300 rounded-lg px-4 py-3" placeholder="Vehicle make" name="vehicle_make" value={form.vehicle_make} onChange={handleChange} required />
              <input className="border border-slate-300 rounded-lg px-4 py-3" placeholder="Vehicle model" name="vehicle_model" value={form.vehicle_model} onChange={handleChange} required />
              <input className="border border-slate-300 rounded-lg px-4 py-3" placeholder="Year" name="vehicle_year" value={form.vehicle_year} onChange={handleChange} />
              <input className="border border-slate-300 rounded-lg px-4 py-3 sm:col-span-2" placeholder="Preferred date" name="preferred_date" value={form.preferred_date} onChange={handleChange} />
              <textarea className="border border-slate-300 rounded-lg px-4 py-3 sm:col-span-2" rows="4" placeholder="Notes" name="notes" value={form.notes} onChange={handleChange} />
              <button className="sm:col-span-2 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700">Request Booking</button>
            </form>
            {status && <p className="mt-3 text-sm text-slate-700">{status}</p>}
          </div>
          <div className="self-start rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-900">What to expect</h3>
            <ul className="mt-3 list-disc pl-6 text-slate-600 space-y-2">
              <li>We’ll text to confirm your appointment</li>
              <li>We bring water and power if needed</li>
              <li>Secure online payment after service</li>
              <li>Rain reschedule guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
