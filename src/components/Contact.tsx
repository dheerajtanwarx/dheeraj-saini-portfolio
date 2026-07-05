import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Check, Github, Linkedin, Twitter } from 'lucide-react'
import { profile } from '../data'
import { fadeUp, stagger, viewport } from '../anim'

type Status = 'idle' | 'loading' | 'sent' | 'error'

// Web3Forms access key. Get yours free at https://web3forms.com (tied to your email).
// This key is safe to expose in client code — that's how Web3Forms is designed.
const WEB3FORMS_ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ??
  'YOUR_WEB3FORMS_ACCESS_KEY'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitError, setSubmitError] = useState<string>('')

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const next: Record<string, string> = {}
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    if (!name) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.'
    if (!phone) next.phone = 'Please enter your phone number.'
    else if (phone.replace(/\D/g, '').length < 7 || !/^[\d\s()+-]+$/.test(phone))
      next.phone = 'Enter a valid phone number.'
    if (String(data.get('message') ?? '').trim().length < 10)
      next.message = 'Message should be at least 10 characters.'
    setErrors(next)
    if (Object.keys(next).length) return

    setStatus('loading')
    setSubmitError('')

    // Build the payload from the form fields + Web3Forms config.
    const payload: Record<string, unknown> = Object.fromEntries(data.entries())
    payload.access_key = WEB3FORMS_ACCESS_KEY
    payload.subject =
      String(data.get('subject') ?? '').trim() || `New portfolio message from ${name}`
    payload.from_name = `${name} (Portfolio)`

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('sent')
        form.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setSubmitError(json.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setSubmitError('Network error — please check your connection and try again.')
    }
  }

  const contactItems = [
    { Icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    { Icon: MapPin, label: 'Location', value: profile.location, href: undefined },
  ]

  const inputCls =
    'w-full rounded-xl border border-border bg-elevated/60 px-4 py-3 text-sm text-fg placeholder:text-muted/70 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30'

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-[130px]" />
      </div>
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          {/* left */}
          <div>
            <motion.span variants={fadeUp} className="eyebrow">
              Contact
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-4">
              Have a project <span className="text-gradient">in mind?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-md leading-relaxed text-muted">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to
              be part of your vision. Let&apos;s build something great together.
            </motion.p>

            <motion.ul variants={stagger} className="mt-8 space-y-3">
              {contactItems.map(({ Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-widest text-muted">
                        {label}
                      </span>
                      <span className="font-medium">{value}</span>
                    </span>
                  </>
                )
                return (
                  <motion.li variants={fadeUp} key={label}>
                    {href ? (
                      <a href={href} className="flex items-center gap-4 transition-colors hover:text-accent">
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{inner}</div>
                    )}
                  </motion.li>
                )
              })}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-2">
              {[
                { Icon: Github, href: profile.socials.github, label: 'GitHub' },
                { Icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
                { Icon: Twitter, href: profile.socials.twitter, label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-elevated/60 text-muted transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* form */}
          <motion.form
            variants={fadeUp}
            onSubmit={submit}
            noValidate
            className="card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name <span className="text-accent">*</span>
                </label>
                <input id="name" name="name" type="text" autoComplete="name" required placeholder="Jane Doe" className={inputCls} />
                {errors.name && <p className="mt-1.5 text-xs text-red-400" role="alert">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email <span className="text-accent">*</span>
                </label>
                <input id="email" name="email" type="email" autoComplete="email" required placeholder="jane@company.com" className={inputCls} />
                {errors.email && <p className="mt-1.5 text-xs text-red-400" role="alert">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                  Phone <span className="text-accent">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  placeholder="+1 555 000 1234"
                  className={inputCls}
                />
                {errors.phone && <p className="mt-1.5 text-xs text-red-400" role="alert">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                  Subject <span className="text-muted">(optional)</span>
                </label>
                <input id="subject" name="subject" type="text" placeholder="Project inquiry" className={inputCls} />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message <span className="text-accent">*</span>
              </label>
              <textarea id="message" name="message" rows={5} required placeholder="Tell me about your project…" className={`${inputCls} resize-none`} />
              {errors.message && <p className="mt-1.5 text-xs text-red-400" role="alert">{errors.message}</p>}
            </div>

            {/* Honeypot — spam bots fill this; humans never see it */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-80"
            >
              {(status === 'idle' || status === 'error') && (<>Send Message <Send size={16} /></>)}
              {status === 'loading' && (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending…
                </>
              )}
              {status === 'sent' && (<>Message sent <Check size={16} /></>)}
            </button>
            <p
              aria-live="polite"
              className={`mt-3 text-center text-xs ${status === 'error' ? 'text-red-400' : 'text-muted'}`}
            >
              {status === 'sent'
                ? "Thanks! I'll get back to you within 24 hours."
                : status === 'error'
                  ? submitError
                  : 'I usually reply within a day.'}
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
