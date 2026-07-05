import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../data'
import { fadeUp, stagger, viewport } from '../anim'

export default function Projects() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div className="max-w-xl">
            <motion.span variants={fadeUp} className="eyebrow">
              Featured Work
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-4">
              Some of my <span className="text-gradient">recent projects</span>
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
          >
            Start a project
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {projects.map((p) => (
            <motion.article
              key={p.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="card group relative overflow-hidden"
            >
              {/* preview */}
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                {p.image ? (
                  /* real screenshot */
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 grid-mask opacity-40" />
                    {/* mock browser */}
                    <div className="absolute inset-5 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm">
                      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-white/40" />
                        <span className="h-2 w-2 rounded-full bg-white/40" />
                        <span className="h-2 w-2 rounded-full bg-white/40" />
                      </div>
                      <div className="space-y-2 p-4">
                        <div className="h-2 w-2/3 rounded bg-white/25" />
                        <div className="h-2 w-1/2 rounded bg-white/15" />
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <div className="h-10 rounded bg-white/15" />
                          <div className="h-10 rounded bg-white/10" />
                          <div className="h-10 rounded bg-white/20" />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <span className="absolute right-4 top-4 rounded-lg bg-black/40 px-2.5 py-1 font-mono text-xs text-white/80 backdrop-blur">
                  {p.id}
                </span>

                {/* hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/55 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={p.link}
                    className="btn bg-white text-black hover:opacity-90"
                    aria-label={`View ${p.title}`}
                  >
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={p.link}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-white/40 bg-white/10 text-white hover:bg-white/20"
                    aria-label={`${p.title} source code`}
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* body */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {p.category}
                </p>
                <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-elevated px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
