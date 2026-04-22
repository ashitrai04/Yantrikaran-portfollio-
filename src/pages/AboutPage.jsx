import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Trophy, Sparkles, Compass, Layers, Shield } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import { COMPANY } from '../data/content.js'

import teamPhoto from '../data/team.jpeg'

const TEAM_PHOTO = teamPhoto
const LAB_PHOTO  = 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80&auto=format&fit=crop'

const VALUES = [
  { icon: Compass, title: 'Engineering-first', text: 'We measure ourselves on systems that ship and operate, not slide decks.' },
  { icon: Layers,  title: 'Full-stack ownership', text: 'Hardware, ML, infrastructure and field deployment — under one roof.' },
  { icon: Shield,  title: 'Mission seriousness', text: 'Defence and government briefs receive defence-grade rigour, security and accountability.' },
]

const TIMELINE = [
  { year: '2024', title: 'Submarine Mk-I built',  text: 'First operational hybrid underwater drone delivered with Softgear Pvt. Ltd.' },
  { year: '2025', title: 'Yantrikaran founded',   text: 'Incorporated as a deep-tech engineering firm focused on robotics and geospatial AI.' },
  { year: '2025', title: 'Andhra Pradesh stack',  text: 'GIS·AI systems delivered for the Government of Andhra Pradesh across property and energy intelligence.' },
  { year: '2026', title: 'Defence recce R&D',     text: 'Reconnaissance prototype currently under active R&D for defence use-cases.' },
]

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="About"
        title={<>Deep-tech engineering, built in <span className="text-gradient">India</span>.</>}
        subtitle="Yantrikaran Innovations is a robotics and geospatial AI firm building intelligent systems for industry, governments and defence research."
        accent="emerald"
      />

      {/* STORY */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="eyebrow">Our story</span>
            <h2 className="h-display text-3xl md:text-4xl text-white">From hackathon prototypes to government briefs.</h2>
            {COMPANY.about.map((p) => (
              <p key={p.slice(0, 24)} className="text-white/70 leading-relaxed">{p}</p>
            ))}
            <div className="pt-3 flex flex-wrap gap-3">
              <Link to="/robotics" className="btn-primary">See robotics <ArrowUpRight size={16} /></Link>
              <Link to="/gis" className="btn-ghost">See GIS · AI</Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="photo-card h-72 col-span-2">
              <img src={TEAM_PHOTO} alt="Engineering team" loading="lazy" />
              <div className="overlay" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.3em] text-white/85">FOUNDING TEAM · 2025</div>
            </div>
            <div className="photo-card h-44">
              <img src={LAB_PHOTO} alt="Lab" loading="lazy" />
              <div className="overlay" />
              <div className="absolute bottom-3 left-3 font-mono text-[9px] tracking-[0.3em] text-white/85">LAB</div>
            </div>
            <div className="surface rounded-[22px] h-44 p-5 flex flex-col justify-between">
              <Trophy size={20} className="text-sky-300" />
              <div>
                <div className="font-display text-3xl text-white">3</div>
                <div className="mt-1 font-mono text-[10px] tracking-[0.25em] text-white/45 uppercase">government honours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10">
            <span className="eyebrow">What we believe</span>
            <h2 className="h-display mt-3 text-3xl md:text-4xl text-white">Engineering principles.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={18} className="text-sky-300" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-white">{v.title}</h3>
                  <p className="mt-2 text-white/65 leading-relaxed">{v.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="surface rounded-3xl p-10 md:p-14 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <span className="eyebrow"><Trophy size={12} /> Recognition</span>
              <h2 className="h-display mt-3 text-3xl md:text-4xl text-white">Honoured at the highest levels.</h2>
            </div>
            <div className="md:col-span-7 grid gap-3">
              {COMPANY.recognition.map((r) => (
                <div key={r} className="glass rounded-xl p-4 flex items-center gap-4">
                  <Sparkles size={16} className="text-sky-300 shrink-0" />
                  <div className="text-white/80">{r}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <span className="eyebrow">Milestones</span>
          <h2 className="h-display mt-3 text-3xl md:text-4xl text-white mb-10">The road so far.</h2>
          <div className="relative pl-6 md:pl-10 border-l border-white/10 space-y-8">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="absolute -left-[33px] md:-left-[45px] top-1.5 h-3 w-3 rounded-full bg-sky-400 border-4 border-[var(--bg)]" />
                <div className="font-mono text-[10px] tracking-[0.3em] text-sky-300/85">{t.year}</div>
                <div className="mt-1 font-display text-xl text-white">{t.title}</div>
                <div className="mt-1 text-white/65">{t.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <h2 className="h-display text-3xl md:text-5xl text-white">
            Want to <span className="text-gradient">work together</span>?
          </h2>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary">Reach out <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
