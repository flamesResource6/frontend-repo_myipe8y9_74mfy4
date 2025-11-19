export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white"/>
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Premium Auto Detailing that Makes Your Car Look Brand New
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Mobile and in-shop services. Eco-friendly products. Transparent pricing. Same-week availability.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#booking" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700">Book Now</a>
              <a href="#services" className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50">View Services</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div>5-star rated</div>
              <div>Fully insured</div>
              <div>We come to you</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-blue-200/40 blur-2xl"/>
            <img src="https://images.unsplash.com/photo-1587350855729-bab6beeac1ed?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaGlueSUyMGNhcnxlbnwwfDB8fHwxNzYzNTE4MDczfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Shiny car" className="relative rounded-3xl shadow-xl"/>
          </div>
        </div>
      </div>
    </section>
  )
}
