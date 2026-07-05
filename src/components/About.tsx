import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layout, Server, Boxes, Gauge, ArrowUpRight } from 'lucide-react'
import { stats, services, profile } from '../data'
import { fadeUp, stagger, viewport } from '../anim'

const iconMap = { Layout, Server, Boxes, Gauge } as const

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value)
      return
    }
    const dur = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          {/* left copy */}
          <div>
            <motion.span variants={fadeUp} className="eyebrow">
              About Me
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-4">
              Turning ideas into <span className="text-gradient">robust digital products</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-lg leading-relaxed text-muted">
              With {stats[0].value}+ years shipping production software, I help startups and
              teams build scalable web apps end to end. I care deeply about clean architecture,
              accessibility, and interfaces that feel effortless.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 max-w-lg leading-relaxed text-muted">
              I work across the entire stack — designing APIs, modelling data, crafting UI, and
              deploying to the cloud — so you get a cohesive product, not a patchwork.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <a href="#contact" className="btn-primary">
                Let&apos;s Work Together <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* stats */}
            <motion.dl
              variants={fadeUp}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2"
            >
              {stats.map((s) => (
                <div key={s.label} className="card p-4">
                  <dd className="text-3xl font-extrabold text-gradient">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-1 text-xs font-medium text-muted">{s.label}</dt>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* right services */}
          <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2">
            {services.map((svc, i) => {
              const Icon = iconMap[svc.icon as keyof typeof iconMap]
              return (
                <motion.article
                  key={svc.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className={`card group relative overflow-hidden p-6 ${
                    i % 2 === 1 ? 'sm:mt-8' : ''
                  }`}
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100" />
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{svc.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{svc.desc}</p>
                </motion.article>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
