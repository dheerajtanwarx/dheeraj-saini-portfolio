import { useState } from 'react'
import { motion } from 'framer-motion'
import { ImageIcon } from 'lucide-react'

/**
 * Hero portrait — a background-removed cutout standing on a gradient disc.
 * Cutout lives at `public/dimg1-cutout.png` (generated from `dimg1.png`).
 */
export default function HeroPhoto() {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative h-full w-full">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-20 flex items-end justify-center">
        <div className="mb-[4%] h-[80%] w-[80%] rounded-full bg-accent/30 blur-3xl" />
      </div>

      {/* gradient disc backdrop */}
      <div className="pointer-events-none absolute inset-x-[6%] bottom-[3%] -z-10 aspect-square animate-float rounded-full bg-gradient-to-br from-accent via-fuchsia-500/80 to-accent-2 opacity-95" />

      {/* dotted ring outline — open arc at the bottom so it never crosses the subject */}
      <svg
        className="pointer-events-none absolute inset-x-[4%] bottom-[1%] -z-10 aspect-square w-[92%] text-white/25"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden
      >
        <path
          d="M 25.5 92.4 A 49 49 0 1 1 74.5 92.4"
          stroke="currentColor"
          strokeWidth="0.4"
          strokeDasharray="1 3"
          strokeLinecap="round"
        />
      </svg>

      {/* dotted accent grid (top-right) */}
      <div
        className="pointer-events-none absolute right-[2%] top-[4%] -z-10 h-16 w-16 opacity-70"
        style={{
          backgroundImage: 'radial-gradient(rgb(var(--accent)) 1.3px, transparent 1.3px)',
          backgroundSize: '12px 12px',
        }}
        aria-hidden
      />

      {/* cutout portrait */}
      {failed ? (
        <div className="absolute inset-[14%] flex flex-col items-center justify-center gap-3 rounded-full bg-elevated/80 text-muted">
          <ImageIcon size={36} className="text-accent/70" />
          <p className="px-6 text-center text-xs leading-relaxed">
            Add your cutout at
            <br />
            <code className="font-mono text-accent">public/hero.webp</code>
          </p>
        </div>
      ) : (
        <motion.picture
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-[6%] bottom-[3%] block aspect-square"
        >
          <source srcSet="/hero.webp" type="image/webp" />
          <img
            src="/hero.png"
            alt="Portrait of Dheeraj Tanwar, Full Stack Web Developer"
            onError={() => setFailed(true)}
            className="h-full w-full object-contain object-bottom drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]"
            loading="eager"
            decoding="async"
            width={908}
            height={1218}
          />
        </motion.picture>
      )}

      {/* floating accent badge (top-left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute left-0 top-[16%] z-10 flex items-center gap-2 rounded-full border border-border bg-surface/85 px-3 py-1.5 shadow-lg backdrop-blur"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        <span className="text-xs font-semibold">Open to work</span>
      </motion.div>
    </div>
  )
}
