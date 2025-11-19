import { useEffect, useState } from 'react'

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/services`)
        if (res.ok) {
          const data = await res.json()
          setServices(data)
        }
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="services" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-slate-900">Services</h2>
        <p className="mt-2 text-slate-600">Transparent pricing. Mix and match to build your perfect detail.</p>
        {loading ? (
          <p className="mt-6 text-slate-600">Loading services...</p>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-blue-600 font-semibold text-lg">${s.price.toFixed(2)}</span>
                  <span className="text-slate-500 text-sm">~ {s.duration_minutes} min</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
