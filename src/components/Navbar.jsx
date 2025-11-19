import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">AD</span>
          <span className="text-slate-900 font-semibold text-lg">Shine Auto Detailing</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#booking" className="hover:text-blue-600">Book</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a href="/test" className="hover:text-blue-600">Status</a>
          <a href="#booking" className="ml-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white font-medium shadow hover:bg-blue-700">Get a Quote</a>
        </nav>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
