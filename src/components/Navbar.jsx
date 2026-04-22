import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react'

const LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/robotics', label: 'Robotics' },
  { to: '/gis',      label: 'Geospatial AI' },
  { to: '/about',    label: 'About' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [loc.pathname])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2.5' : 'py-4'}`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className={`nav-chrome flex items-center justify-between rounded-2xl px-4 py-2.5 transition ${scrolled ? 'glass shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/yi.png" alt="" className="h-14 w-14 md:h-16 md:w-16 object-contain drop-shadow-[0_0_18px_rgba(56,189,248,0.55)]" />
            <div className="leading-tight">
              <div className="font-display text-xl md:text-2xl tracking-[0.16em] text-white font-semibold">YANTRIKARAN</div>
              <div className="font-mono text-[10px] tracking-[0.35em] text-white/45 mt-1">ROBOTICS · GEOSPATIAL · AI</div>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm transition ${
                    isActive ? 'text-white' : 'text-white/65 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-white/8 border border-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <button onClick={onToggleTheme} className="theme-toggle ml-2" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <NavLink to="/contact" className="ml-2 btn-primary !py-2 !px-4 text-sm">
              Start a Project <ArrowUpRight size={14} />
            </NavLink>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={onToggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button className="rounded-full p-2 text-white/80" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass rounded-2xl p-3"
          >
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `block w-full px-4 py-3 text-sm rounded-xl ${isActive ? 'text-white bg-white/8' : 'text-white/75 hover:text-white'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="mt-2 btn-primary w-full justify-center text-sm">
              Start a Project <ArrowUpRight size={14} />
            </NavLink>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
