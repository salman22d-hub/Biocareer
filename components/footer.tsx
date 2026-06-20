import { Leaf, Languages } from 'lucide-react'
import { profile, navLinks } from '@/lib/portfolio-data'

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-heading text-base font-bold">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Leaf className="size-4" />
              </span>
              Dr. Salman Waheed
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Life Sciences Professional, Researcher, and AI &amp; Data
              Operations Leader.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Languages className="size-3.5" />
              Languages
            </p>
            <ul className="mt-3 space-y-2">
              {profile.languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2 text-sm"
                >
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {lang.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dr. Salman Waheed. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Gujranwala, Pakistan
          </p>
        </div>
      </div>
    </footer>
  )
}
