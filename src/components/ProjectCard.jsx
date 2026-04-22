import { motion } from 'framer-motion'
import { ArrowUpRight, Target } from 'lucide-react'

export default function ProjectCard({ project, index = 0, large = false }) {
  const Icon = project.icon
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      onMouseMove={handleMove}
      className="card flex flex-col"
    >
      {project.image && (
        <div className={`photo-card !rounded-none !border-0 ${large ? 'h-72' : 'h-56'}`}>
          <img src={project.image} alt={project.title} loading="lazy" />
          <div className="overlay" />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            {project.inProgress && (
              <span className="chip chip-warm">
                <span className="dot-pulse !bg-orange-400" /> ACTIVE
              </span>
            )}
            {project.placeholder && <span className="chip chip-soft">CONCEPT</span>}
          </div>
          <div className="absolute bottom-3 right-3 font-mono text-[10px] tracking-[0.3em] text-white/75">
            {project.year}
          </div>
        </div>
      )}

      <div className="relative p-6 flex-1 flex flex-col">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Icon size={20} className="text-sky-300" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-xl text-white leading-tight">{project.title}</h3>
            <div className="mt-1 font-mono text-[11px] tracking-[0.18em] text-sky-300/85 uppercase truncate">
              {project.client}
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-white/65 leading-relaxed">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/65">{s}</span>
          ))}
        </div>

        {project.metric && (
          <div className="mt-auto pt-5 flex items-center justify-between border-t border-white/5">
            <div className="flex items-center gap-2 text-white/45 text-xs">
              <Target size={13} />
              <span className="font-mono uppercase tracking-[0.2em]">{project.metric.label}</span>
            </div>
            <div className="font-display text-xl text-gradient">{project.metric.value}</div>
          </div>
        )}
      </div>
    </motion.article>
  )
}
