import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data'
import { fadeUp, stagger, viewport } from '../anim'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)

  const go = useCallback((next: number) => {
    setDir(next > 0 ? 1 : -1)
    setI((c) => (c + next + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => go(1), 6000)
    return () => clearInterval(id)
  }, [go])

  const t = testimonials[i]

  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            Testimonials
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title mt-4">
            What clients <span className="text-gradient">say</span>
          </motion.h2>
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="card relative overflow-hidden p-8 sm:p-12">
            <Quote className="absolute right-6 top-6 h-16 w-16 text-accent/10" />
            <div className="min-h-[190px] sm:min-h-[150px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.blockquote
                  key={i}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-lg font-medium leading-relaxed sm:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-6 flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 font-bold text-white">
                      {t.name.split(' ').map((w) => w[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-muted">{t.title}</div>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>

          {/* controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-elevated/60 text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDir(idx > i ? 1 : -1)
                    setI(idx)
                  }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    idx === i ? 'w-6 bg-accent' : 'w-2 bg-border hover:bg-muted'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-elevated/60 text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
