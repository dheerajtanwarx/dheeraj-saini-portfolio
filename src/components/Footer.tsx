import { ArrowUp, Github, Linkedin, Twitter, Heart } from 'lucide-react'
import { profile, navLinks } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-x py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2 font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-white">
                <span className="font-mono text-sm">&lt;/&gt;</span>
              </span>
              <span className="text-[17px]">
                Dheeraj<span className="text-accent">.dev</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Full Stack Web Developer building fast, accessible and delightful products for the
              modern web.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              Navigate
            </span>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-accent">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              Connect
            </span>
            <div className="flex items-center gap-2">
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
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-elevated/60 text-muted transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <a href={`mailto:${profile.email}`} className="mt-1 text-sm text-muted transition-colors hover:text-accent">
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-muted">
            © {new Date().getFullYear()} {profile.name}. Crafted with
            <Heart size={13} className="fill-accent text-accent" /> & React.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-elevated/60 transition-transform group-hover:-translate-y-0.5">
              <ArrowUp size={15} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
