import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, Database } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import { COMPANY } from '../data/content.js'

const TOPICS = ['Robotics', 'GIS · AI', 'Defence brief', 'Research / collab', 'Other']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', org: '', topic: 'Robotics', message: '' })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[${form.topic}] Project enquiry — ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganisation: ${form.org}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`
    )
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <PageTransition>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="text-gradient">build</span> something serious.</>}
        subtitle="Drop us a line about your robotics or geospatial AI brief. We respond within two business days."
        accent="sky"
      />

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-8">
          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            onSubmit={submit}
            className="lg:col-span-7 surface rounded-3xl p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" value={form.name} onChange={update('name')} required />
              <Field label="Email" type="email" value={form.email} onChange={update('email')} required />
            </div>
            <Field label="Organisation" value={form.org} onChange={update('org')} />

            <div>
              <label className="font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase">Topic</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {TOPICS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, topic: t }))}
                    className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
                      form.topic === t
                        ? 'border-sky-400/55 bg-sky-400/10 text-sky-200'
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/25'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={update('message')}
                placeholder="Briefly describe your project, problem statement or research interest…"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-sky-400/55 transition"
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="text-xs text-white/45">By submitting you agree to be contacted at the email provided.</div>
              <button type="submit" className="btn-primary">
                {sent ? <><CheckCircle2 size={16} /> Sent</> : <>Send enquiry <Send size={14} /></>}
              </button>
            </div>
          </motion.form>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <InfoCard icon={Mail}     label="Email"    value={COMPANY.email}   href={`mailto:${COMPANY.email}`} />
            <InfoCard icon={Phone}    label="Phone"    value={COMPANY.phone}   href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`} />
            <InfoCard icon={Linkedin} label="LinkedIn" value="@yantrikaran-innovations" href={COMPANY.linkedin} external />
            <InfoCard icon={Database} label="AI Kosh · India AI Mission" value="Contributor profile · open datasets" href={COMPANY.aikosh} external />
            <InfoCard icon={MapPin}   label="Office"   value={COMPANY.address} />

            <div className="surface rounded-2xl overflow-hidden h-72">
              <iframe
                title="Yantrikaran office map"
                src={COMPANY.mapEmbed}
                loading="lazy"
                className="w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

function Field({ label, type = 'text', value, onChange, required }) {
  return (
    <label className="block">
      <div className="font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase">{label}{required && ' *'}</div>
      <input
        required={required}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-sky-400/55 transition"
      />
    </label>
  )
}

function InfoCard({ icon: Icon, label, value, href, external }) {
  const content = (
    <div className="surface rounded-2xl p-5 flex items-start gap-4 transition hover:border-sky-400/40">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 border border-sky-400/20">
        <Icon size={18} className="text-sky-300" />
      </div>
      <div className="min-w-0">
        <div className="font-mono text-[10px] tracking-[0.3em] text-white/45 uppercase">{label}</div>
        <div className="mt-1 text-white/85 leading-relaxed break-words">{value}</div>
      </div>
    </div>
  )
  if (!href) return content
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="block">
      {content}
    </a>
  )
}
