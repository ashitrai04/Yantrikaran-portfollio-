import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Satellite, Layers } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { GIS_CAPS, GIS_PROJECTS } from '../data/content.js'

import gisHeroImage from '../data/ride-into-orbit-secure.jpg'

const HERO_IMG = gisHeroImage

const SECTORS = [
  { icon: Satellite, label: 'Earth Observation', value: 'Sentinel · Landsat · GEDI' },
  { icon: Layers,    label: 'Datasets fused',    value: '14+ live layers' },
  { icon: MapPin,    label: 'Operational scale', value: 'State · National' },
]

export default function GISPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Geospatial AI"
        title={<>Intelligence layered on top of the <span className="text-gradient">earth</span>.</>}
        subtitle="The other half of our practice — satellite, UAV and AI pipelines that turn raw earth observation into decisions for governments, defence briefs and operators."
        accent="sky"
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">Brief our GIS team <ArrowUpRight size={16} /></Link>
          <a href="#projects" className="btn-ghost">View projects</a>
        </div>
      </PageHero>

      {/* HERO BANNER */}
      <section className="relative py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="photo-card h-[360px] md:h-[480px]">
            <img src={HERO_IMG} alt="Earth from space" loading="lazy" />
            <div className="overlay" />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-4">
                {SECTORS.map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} className="glass rounded-xl p-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/10 border border-sky-400/20">
                        <Icon size={16} className="text-sky-300" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] tracking-[0.25em] text-white/55 uppercase">{s.label}</div>
                        <div className="text-white text-sm mt-0.5">{s.value}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow">Capabilities</span>
              <h2 className="h-display mt-3 text-4xl md:text-5xl text-white">From pixels to decisions.</h2>
            </div>
            <p className="max-w-md text-white/65">
              Earth observation pipelines, deep classification models and decision systems that operate at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {GIS_CAPS.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card p-6 h-full"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={18} className="text-sky-300" />
                  </div>
                  <h3 className="mt-5 font-display text-lg text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{c.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <span className="eyebrow">Selected projects</span>
              <h2 className="h-display mt-3 text-4xl md:text-5xl text-white">Geospatial systems shipped.</h2>
            </div>
            <p className="max-w-md text-white/65 text-sm">
              State-scale classification, property intelligence, energy planning and defence reconnaissance — currently in build or deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {GIS_PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="surface rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-sky-400/10 blur-[100px]" />
            <div className="grid md:grid-cols-12 gap-10 relative">
              <div className="md:col-span-4">
                <span className="eyebrow">How we engage</span>
                <h2 className="h-display mt-3 text-3xl md:text-4xl text-white">Briefed to deployed.</h2>
                <p className="mt-4 text-white/65">
                  We work with state agencies, mission operators and labs from problem statement through field rollout.
                </p>
              </div>
              <div className="md:col-span-8 grid sm:grid-cols-2 gap-3">
                {[
                  { n: '01', t: 'Discovery', d: 'AOIs, datasets, target accuracy and operational constraints.' },
                  { n: '02', t: 'Pipeline',  d: 'GEE / Python pipelines, deep models, validation against ground truth.' },
                  { n: '03', t: 'Decisioning', d: 'Dashboards, MCDA scoring and operator-facing tools.' },
                  { n: '04', t: 'Deployment', d: 'Hardening, hand-off and field deployment with continuous updates.' },
                ].map((s) => (
                  <div key={s.n} className="glass rounded-xl p-5">
                    <div className="font-mono text-[10px] tracking-[0.3em] text-sky-300/85">STEP {s.n}</div>
                    <div className="mt-2 font-display text-lg text-white">{s.t}</div>
                    <div className="mt-1 text-sm text-white/60 leading-relaxed">{s.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <span className="eyebrow">Have an AOI?</span>
          <h2 className="h-display mt-4 text-3xl md:text-5xl text-white">
            From <span className="text-gradient">satellite to system</span> — we'll build it.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary">Start a project <ArrowUpRight size={16} /></Link>
            <Link to="/robotics" className="btn-ghost">Explore Robotics</Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
