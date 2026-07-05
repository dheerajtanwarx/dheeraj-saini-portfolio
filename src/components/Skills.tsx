import { motion } from 'framer-motion'
import { skills } from '../data'
import { fadeUp, stagger, viewport } from '../anim'

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-accent-2/10 blur-[120px]" />
      </div>
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            My Skills
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title mt-4">
            Technologies I <span className="text-gradient">work with</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted">
            A versatile toolkit spanning the whole stack — proficiency built through real,
            shipped products.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-12 grid max-w-4xl gap-x-10 gap-y-7 md:grid-cols-2"
        >
          {skills.map((s) => (
            <motion.div key={s.name} variants={fadeUp}>
              <div className="mb-2 flex items-baseline justify-between">
                <span className="text-sm font-semibold">{s.name}</span>
                <span className="font-mono text-xs text-accent">{s.level}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-elevated ring-1 ring-inset ring-border">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
