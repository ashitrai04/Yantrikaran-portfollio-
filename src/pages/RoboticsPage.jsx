import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Cpu, Gauge, Wrench } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import LazyMount from '../components/LazyMount.jsx'
import { ROBOTICS_CAPS, ROBOTICS_PROJECTS } from '../data/content.js'

const SubmarineScene = lazy(() => import('../three/SubmarineScene.jsx'))

// ─────────────────────────────────────────────────────────────────────────────
//  PER-SHIP TUNING — edit ONE block here to adjust that submarine only.
//  Anything omitted falls back to DEFAULTS in src/three/SubmarineScene.jsx.
//  Tweak `scale`, `cameraFov`, light intensities etc. without touching the
//  other two ships.
// ─────────────────────────────────────────────────────────────────────────────
const MK1_TUNING = {
  src: '/sub-mk1.glb',
  scale: 3.2,
  autoRotateSpeed: 1.5,
}

const MK2_TUNING = {
  src: '/sub-mk2.glb',
  scale: 2.3,              // Mk-II model is natively bigger — keep this small
  cameraFov: 32,
  autoRotateSpeed: 1.5,
  ambient: 10.5,
  keyLight: 5.0,
}

const MK3_TUNING = {
  src: '/sub-mk3.glb',
  scale: 3.3,
  autoRotateSpeed: 1.5,
}

const SPECS = [
  { icon: Gauge, label: 'Depth class',      value: '50 m' },
  { icon: Cpu,   label: 'Onboard compute',  value: 'Jetson Orin' },
  { icon: Wrench, label: 'Build iteration', value: 'Mk-I · Mk-II · Mk-III' },
]

function SceneSlot({ tuning, label, badge }) {
  return (
    <div className="md:col-span-7 relative stage h-[460px] md:h-[620px]">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <LazyMount className="absolute inset-0" rootMargin="400px">
        <Suspense fallback={null}>
          <SubmarineScene className="absolute inset-0" {...tuning} />
        </Suspense>
      </LazyMount>
      <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] text-white/65">
        {label}
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-white/60">
        {badge}
      </div>
    </div>
  )
}

export default function RoboticsPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Robotics"
        title={<>Autonomous machines for <span className="text-gradient">water, land and air</span>.</>}
        subtitle="The hardware side of our practice — underwater drones, ground robots and aerial platforms designed, built and operated end-to-end."
        accent="violet"
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">Discuss a platform <ArrowUpRight size={16} /></Link>
          <a href="#projects" className="btn-ghost">View projects</a>
        </div>
      </PageHero>

      {/* MK-I — flagship */}
      <section className="relative py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="surface rounded-3xl overflow-hidden grid md:grid-cols-12">
            <SceneSlot
              tuning={MK1_TUNING}
              label="MK-I · DRAG TO ROTATE · SCROLL TO ZOOM"
              badge={<>
                <span>HYBRID · 6 DOF</span>
                <span className="flex items-center gap-2"><span className="dot-pulse" /> TELEMETRY ONLINE</span>
              </>}
            />
            <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center">
              <span className="eyebrow">Flagship platform</span>
              <h2 className="h-display mt-4 text-3xl md:text-4xl text-white">Hybrid underwater submarine.</h2>
              <p className="mt-4 text-white/65 leading-relaxed">
                Engineered with Softgear Pvt. Ltd. for inspection, survey and research operations — the Mk-I is our working
                submarine platform with computer-vision perception, acoustic telemetry and modular payloads.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {SPECS.map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} className="glass rounded-xl p-3">
                      <Icon size={16} className="text-sky-300" />
                      <div className="mt-2 font-mono text-[9px] tracking-[0.25em] text-white/50 uppercase">{s.label}</div>
                      <div className="mt-0.5 text-sm text-white">{s.value}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MK-II — earlier generation */}
      <section className="relative py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="surface rounded-3xl overflow-hidden grid md:grid-cols-12">
            <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <span className="eyebrow">Earlier generation</span>
              <h2 className="h-display mt-4 text-3xl md:text-4xl text-white">Submarine Mk-II.</h2>
              <p className="mt-4 text-white/65 leading-relaxed">
                The precursor build that informed the current Mk-I refinements. Still operational and used for
                payload research, endurance tuning and student-facing demonstrations.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {['ROS', 'Sensor fusion', 'Underwater telemetry', '40 m depth'].map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">{t}</span>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 md:col-span-7 relative stage h-[460px] md:h-[620px]">
              <div className="absolute inset-0 grid-bg opacity-25" />
              <LazyMount className="absolute inset-0" rootMargin="400px">
                <Suspense fallback={null}>
                  <SubmarineScene className="absolute inset-0" {...MK2_TUNING} />
                </Suspense>
              </LazyMount>
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] text-white/65">
                MK-II · DRAG TO ROTATE
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-white/60">
                <span>HYBRID · 4 DOF</span>
                <span>2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MK-III — in build */}
      <section className="relative py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="surface rounded-3xl overflow-hidden grid md:grid-cols-12">
            <SceneSlot
              tuning={MK3_TUNING}
              label="MK-III · PREVIEW MODEL"
              badge={<>
                <span className="flex items-center gap-2"><span className="dot-pulse !bg-orange-400" /> ACTIVE BUILD</span>
                <span>2026</span>
              </>}
            />
            <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center">
              <span className="eyebrow"><span className="dot-pulse" /> In build</span>
              <h2 className="h-display mt-4 text-3xl md:text-4xl text-white">Submarine Mk-III.</h2>
              <p className="mt-4 text-white/65 leading-relaxed">
                The next generation — refined hydrodynamics, modular payload bay and an extended endurance envelope.
                Hardware in active development; preview model shown.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {['Modular payload', 'Brushless thrusters', 'Edge AI', '6 h endurance', 'Cooperative SLAM'].map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">{t}</span>
                ))}
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
              <h2 className="h-display mt-3 text-4xl md:text-5xl text-white">The stack we ship.</h2>
            </div>
            <p className="max-w-md text-white/65">
              From brushless drivetrains to on-device neural networks — our robotics practice covers the full hardware-to-AI stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROBOTICS_CAPS.map((c, i) => {
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
              <span className="eyebrow">Project fleet</span>
              <h2 className="h-display mt-3 text-4xl md:text-5xl text-white">Submarines in build.</h2>
            </div>
            <p className="max-w-md text-white/65 text-sm">
              One operational platform, one earlier-generation hull and a third in active R&D — each exploring a distinct frontier in underwater autonomy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROBOTICS_PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="surface rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-sky-400/10 blur-[100px]" />
            <span className="eyebrow">Custom platforms</span>
            <h2 className="h-display mt-4 text-3xl md:text-5xl text-white">
              Need a robot for a <span className="text-gradient">specific brief</span>?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-white/65">
              We partner with research labs, industrial operators and defence teams to engineer application-specific platforms end-to-end.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="btn-primary">Talk to engineering <ArrowUpRight size={16} /></Link>
              <Link to="/gis" className="btn-ghost">Explore GIS · AI</Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
