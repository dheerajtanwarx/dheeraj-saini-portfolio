import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const name = 'DHEERAJ TANWAR'

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dur = reduce ? 500 : 2200
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(onDone, 350)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-bg"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute inset-0 grid-mask opacity-40" />
      </div>

      {/* logo mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-white shadow-2xl shadow-accent/40">
          <span className="font-mono text-xl font-bold">&lt;/&gt;</span>
        </div>
        <div className="absolute inset-0 -z-10 animate-ping rounded-2xl bg-accent/30" style={{ animationDuration: '2s' }} />
      </motion.div>

      {/* name — staggered letters */}
      <div className="mt-6 flex overflow-hidden" aria-label={name}>
        {name.split('').map((ch, i) => (
          <motion.span
            key={i}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ delay: 0.25 + i * 0.035, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-muted"
          >
            {ch === ' ' ? ' ' : ch}
          </motion.span>
        ))}
      </div>

      {/* progress bar */}
      <div className="mt-8 h-[3px] w-56 overflow-hidden rounded-full bg-elevated ring-1 ring-inset ring-border sm:w-72">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
          style={{ width: `${count}%` }}
        />
      </div>

      {/* counter */}
      <div className="mt-4 font-mono text-xs text-muted">
        <span className="text-gradient font-bold tabular-nums">{String(count).padStart(3, '0')}</span>
        <span className="ml-1">/ 100</span>
      </div>

      {/* big corner counter */}
      <div className="pointer-events-none absolute bottom-6 right-6 font-mono text-6xl font-black tabular-nums text-fg/5 sm:bottom-10 sm:right-10 sm:text-8xl">
        {count}
      </div>
      <div className="pointer-events-none absolute bottom-8 left-6 text-xs font-medium uppercase tracking-[0.3em] text-muted/70 sm:left-10">
        Loading experience
      </div>
    </motion.div>
  )
}
