import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Booking from './components/Booking'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Booking />
        <Contact />
        <footer className="border-t border-slate-200 py-10">
          <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600">© {new Date().getFullYear()} Shine Auto Detailing. All rights reserved.</p>
            <div className="text-slate-600 text-sm">Proudly eco-friendly • Mobile available • Gift cards</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
