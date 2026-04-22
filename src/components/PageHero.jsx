import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, subtitle, accent = 'sky', children }) {
  const accentBlob = accent === 'violet'
    ? 'bg-indigo-400/15'
    : accent === 'emerald' ? 'bg-emerald-400/15' : 'bg-sky-400/15'

  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pb-20">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className={`pointer-events-none absolute -top-20 left-1/4 h-[36rem] w-[36rem] rounded-full ${accentBlob} blur-[120px]`} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h-display mt-5 text-[clamp(2.4rem,6vw,5rem)] text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg text-white/70">{subtitle}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}
