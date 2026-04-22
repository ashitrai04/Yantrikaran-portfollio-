import { NavLink } from 'react-router-dom'
import { Linkedin, Mail, ArrowUpRight, Database } from 'lucide-react'
import { COMPANY } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src="/yi.png" alt="" className="h-14 w-14 object-contain drop-shadow-[0_0_14px_rgba(56,189,248,0.45)]" />
            <span className="font-display tracking-[0.18em] text-white text-xl font-semibold">YANTRIKARAN</span>
          </div>
          <p className="mt-4 text-white/60 max-w-sm text-sm leading-relaxed">
            Engineering intelligence for the physical world — autonomous machines, geospatial AI and the systems that ship them to industry, governments and defence labs.
          </p>
          <div className="mt-5 flex gap-2">
            <a href={COMPANY.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 p-2.5 hover:border-cyan-400/50 hover:text-cyan-300 transition">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${COMPANY.email}`} aria-label="Email" className="rounded-full border border-white/10 p-2.5 hover:border-cyan-400/50 hover:text-cyan-300 transition">
              <Mail size={16} />
            </a>
            <a href={COMPANY.aikosh} target="_blank" rel="noreferrer" aria-label="AI Kosh profile" title="AI Kosh — India AI Mission" className="rounded-full border border-white/10 p-2.5 hover:border-cyan-400/50 hover:text-cyan-300 transition">
              <Database size={16} />
            </a>
          </div>
          <a href={COMPANY.aikosh} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.25em] text-white/45 hover:text-sky-300 uppercase transition">
            Contributor · AI Kosh <ArrowUpRight size={11} className="opacity-70" />
          </a>
        </div>

        <div className="md:col-span-3 text-sm">
          <div className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase mb-4">Explore</div>
          <ul className="space-y-2.5">
            {[
              { to: '/robotics', label: 'Robotics' },
              { to: '/gis', label: 'Geospatial AI' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition">
                  {l.label} <ArrowUpRight size={12} className="opacity-60" />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 text-sm">
          <div className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase mb-4">Office</div>
          <div className="text-white/70 leading-relaxed">{COMPANY.address}</div>
          <div className="mt-3 text-white/70">{COMPANY.phone}</div>
          <a href={`mailto:${COMPANY.email}`} className="mt-1 block text-white/70 hover:text-white transition">{COMPANY.email}</a>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
          <div>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
          <div className="font-mono tracking-[0.25em] mt-2 md:mt-0">v2.0 · RAJKOT · IN</div>
        </div>
      </div>
    </footer>
  )
}
