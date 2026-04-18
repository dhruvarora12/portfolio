import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, User, Briefcase, Code2, Mail } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'HOME', href: '/', icon: <Home size={20} /> },
  { label: 'ABOUT', href: '/about', icon: <User size={20} /> },
  { label: 'EXPERIENCE', href: '/experience', icon: <Briefcase size={20} /> },
  { label: 'PROJECTS', href: '/projects', icon: <Code2 size={20} /> },
  { label: 'CONTACT', href: '/contact', icon: <Mail size={20} /> },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-16 py-5 transition-all duration-500 ${
          scrolled ? 'border-b border-white/8 bg-black/80 backdrop-blur-md' : ''
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-display font-black text-[22px] tracking-tight text-white uppercase leading-none hover:opacity-80 active:scale-95 transition-all duration-200"
        >
          DA
          <span className="text-brand font-bold ml-0.5">//</span>
        </Link>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`font-mono text-[10px] tracking-[0.25em] uppercase active:scale-95 transition-all duration-200 ${
                location.pathname === item.href
                  ? 'text-brand font-bold drop-shadow-[0_0_8px_rgba(255,90,31,0.5)]'
                  : 'text-white/45 hover:text-brand'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:aroradhruv67@gmail.com"
          className="hidden md:flex font-mono text-[10px] tracking-[0.2em] uppercase text-black bg-brand px-6 py-2.5 rounded-full hover:bg-brandDark active:scale-95 shadow-[0_0_15px_rgba(255,90,31,0.4)] hover:shadow-[0_0_25px_rgba(255,90,31,0.6)] transition-all duration-300 font-bold"
        >
          Hire Me
        </a>
        
        {/* Mobile Hire Me (Icon) */}
        <a 
          href="mailto:aroradhruv67@gmail.com"
          className="md:hidden flex items-center justify-center w-10 h-10 bg-brand text-black rounded-full active:scale-95"
        >
          <Mail size={16} strokeWidth={2} />
        </a>
      </header>

      {/* ── Mobile Bottom Dock ── */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-black/85 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.8)] pb-safe">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.href
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`relative flex items-center justify-center w-12 h-12 rounded-full active:scale-90 transition-all duration-300 ${
                isActive ? 'text-brand' : 'text-white/40 hover:text-white/80'
              }`}
            >
              {isActive && (
                <span className="absolute inset-0 bg-brand/10 rounded-full animate-fade-in" />
              )}
              {item.icon}
            </Link>
          )
        })}
      </nav>
    </>
  )
}
