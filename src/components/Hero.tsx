import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Eye, Github, Linkedin, Twitter, Sparkles } from 'lucide-react'
import { profile, stack } from '../data'
import { fadeUp, stagger } from '../anim'
import HeroPhoto from './HeroPhoto'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-mask opacity-60" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-[380px] w-[380px] rounded-full bg-accent-2/15 blur-[120px]" />
      </div>

      <div className="container-x grid items-center gap-10 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        {/* left: copy */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span variants={fadeUp} className="eyebrow">
            <Sparkles size={13} /> Available for freelance & full-time
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.4rem]"
          >
            Hi, I&apos;m <span className="text-gradient">{profile.first}</span>
            <br />
            <span className="text-fg">I build things </span>
            <span className="text-gradient">for the web.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.blurb}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary">
              View My Work <ArrowUpRight size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              View Resume <Eye size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              download="Dheeraj-Tanwar-Resume.pdf"
              className="btn-ghost"
            >
              Download Resume <Download size={16} />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              Follow
            </span>
            <div className="h-px w-8 bg-border" />
            <div className="flex items-center gap-2">
              {[
                { Icon: Github, href: profile.socials.github, label: 'GitHub' },
                { Icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
                { Icon: Twitter, href: profile.socials.twitter, label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-elevated/60 text-muted transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* right: photo + code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[460px]"
        >
          {/* portrait */}
          <div className="absolute inset-0">
            <HeroPhoto />
          </div>

          {/* floating circular code badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-3 -right-2 flex h-[132px] w-[132px] flex-col items-center justify-center rounded-full border border-border bg-surface/85 text-center shadow-2xl backdrop-blur-xl sm:h-[150px] sm:w-[150px]"
          >
            {/* rotating dashed ring */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full animate-[spin_16s_linear_infinite] text-accent/40"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden
            >
              <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
            </svg>

            <div className="mb-1.5 flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-red-400/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
              <span className="h-2 w-2 rounded-full bg-green-400/80" />
            </div>
            <span className="font-mono text-2xl font-bold text-gradient sm:text-3xl">&lt;/&gt;</span>
            <span className="mt-1 font-mono text-[10px] text-muted sm:text-[11px]">developer.ts</span>
            <span className="mt-0.5 inline-block h-3 w-1.5 animate-blink bg-accent" />
          </motion.div>
        </motion.div>
      </div>

      {/* tech marquee */}
      <div className="relative border-y border-border bg-surface/40 py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
        <div className="flex w-max animate-marquee gap-10">
          {[...stack, ...stack].map((s, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-mono text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
