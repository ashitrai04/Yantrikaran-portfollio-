import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Sparkles, Trophy } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import LazyMount from '../components/LazyMount.jsx'
import { COMPANY, DIRECTIONS, GIS_PROJECTS, ROBOTICS_PROJECTS, STACK_MARQUEE } from '../data/content.js'

const SubmarineScene = lazy(() => import('../three/SubmarineScene.jsx'))

// Hero uses Mk-I — edit here to tune the home-page submarine only.
const HERO_TUNING = {
  src: '/sub-mk1.glb',
  scale: 2.8,
  autoRotateSpeed: 0.9,
}

const featured = [
  GIS_PROJECTS[0],
  GIS_PROJECTS[1],
  ROBOTICS_PROJECTS[0],
  GIS_PROJECTS[2],
]

export default function HomePage() {

  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-16">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-sky-400/15 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              YANTRIKARAN · EST. {COMPANY.founded}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
              className="h-display mt-5 text-[clamp(2.6rem,7vw,6rem)] text-white"
            >
              Engineering <span className="text-gradient">intelligence</span> for the physical world.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed"
            >
              We build the machines that operate in the field — and the AI that makes sense of the ground beneath them.
              From underwater drones to nation-scale geospatial systems, it is one engineering practice, working under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/robotics" className="btn-primary">See our work <ArrowUpRight size={16} /></Link>
              <Link to="/contact" className="btn-ghost">Start a project <ArrowRight size={16} /></Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-4 max-w-xl"
            >
              {[
                { k: '2', v: 'verticals' },
                { k: '7+', v: 'Working projects' },
                { k: '3+', v: 'govt. recognitions' },
              ].map((s) => (
                <div key={s.v} className="surface rounded-xl p-4">
                  <div className="font-display text-3xl text-white">{s.k}</div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.25em] text-white/45 uppercase">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="stage relative rounded-[28px] border border-white/10 overflow-hidden h-[460px] md:h-[600px]">
              <div className="absolute inset-0 grid-bg opacity-25" />
              <LazyMount className="absolute inset-0" rootMargin="300px">
                <Suspense fallback={null}>
                  <SubmarineScene className="absolute inset-0" {...HERO_TUNING} />
                </Suspense>
              </LazyMount>
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] text-white/65">
                SUBMARINE MK-I · DRAG TO ROTATE
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-white/60">
                <span>DEPTH · 40 M</span>
                <span className="flex items-center gap-2"><span className="dot-pulse" /> TELEMETRY ONLINE</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stack marquee */}
        <div className="relative mt-16 border-y border-white/5 py-5 overflow-hidden">
          <div className="marquee gap-10 font-mono text-xs tracking-[0.3em] text-white/40 uppercase">
            {[...STACK_MARQUEE, ...STACK_MARQUEE].map((t, i) => (
              <span key={i} className="whitespace-nowrap">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow">One practice</span>
              <h2 className="h-display mt-3 text-4xl md:text-5xl text-white">Hardware and intelligence, together.</h2>
            </div>
            <p className="max-w-md text-white/65">
              The machines we build and the geospatial AI we ship are two faces of the same engineering discipline — perception, autonomy and decisioning, applied to the real world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {DIRECTIONS.map((d, i) => {
              const Icon = d.icon
              return (
                <motion.div
                  key={d.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <Link to={d.href} className="card block h-full group">
                    <div className="photo-card !rounded-none !border-0 h-56">
                      <img src={d.image} alt={d.name} loading="lazy" />
                      <div className="overlay" />
                      <div className="absolute top-4 left-4 flex items-center gap-2.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl glass">
                          <Icon size={18} className="text-sky-300" />
                        </div>
                        <div className="font-mono text-[10px] tracking-[0.3em] text-white/80 uppercase">{d.name}</div>
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="h-display text-2xl md:text-3xl text-white">{d.headline}</h3>
                      <p className="mt-3 text-white/65 leading-relaxed">{d.blurb}</p>
                      <ul className="mt-5 space-y-2">
                        {d.capabilities.slice(0, 3).map((c) => (
                          <li key={c} className="flex gap-2 text-sm text-white/70">
                            <span className="text-sky-300 mt-0.5">—</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 inline-flex items-center gap-2 text-sky-300 text-sm font-medium group-hover:gap-3 transition-all">
                        See the work <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow">Featured work</span>
              <h2 className="h-display mt-3 text-4xl md:text-5xl text-white">Selected projects.</h2>
            </div>
            <Link to="/gis" className="btn-ghost text-sm">
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="surface rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-indigo-400/10 blur-[100px]" />
            <div className="grid md:grid-cols-12 gap-10 relative">
              <div className="md:col-span-5">
                <span className="eyebrow"><Trophy size={12} /> Recognition</span>
                <h2 className="h-display mt-3 text-3xl md:text-4xl text-white">Backed by governments & research.</h2>
                <p className="mt-4 text-white/65">
                  Our work has been recognised at the highest levels of Indian industry, government and research grants.
                </p>
              </div>
              <div className="md:col-span-7 grid gap-3">
                {COMPANY.recognition.map((r, i) => (
                  <motion.div
                    key={r}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="glass rounded-xl p-4 flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/10 border border-sky-400/20">
                      <Sparkles size={16} className="text-sky-300" />
                    </div>
                    <div className="text-white/80">{r}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <span className="eyebrow">Let's build</span>
          <h2 className="h-display mt-4 text-4xl md:text-6xl text-white">
            Have a problem worth <span className="text-gradient">engineering</span>?
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/65 text-lg">
            From concept to deployed system — we take on ambitious robotics and geospatial AI briefs and ship measurable outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary">Start a project <ArrowUpRight size={16} /></Link>
            <Link to="/about" className="btn-ghost">About us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
