import { Briefcase } from 'lucide-react'
import { experiences } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          description="A track record of leading scientific operations, managing teams, and adopting new technology across the life sciences and agri-tech sectors."
        />

        <ol className="relative mt-12 border-l border-border pl-6 sm:pl-8">
          {experiences.map((exp) => (
            <li key={exp.role + exp.org} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[34px] flex size-7 items-center justify-center rounded-full border border-border bg-card text-primary sm:-left-[42px]">
                <Briefcase className="size-3.5" />
              </span>

              <div className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-lg font-bold leading-snug">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-primary">
                      {exp.org}{' '}
                      <span className="text-muted-foreground">
                        · {exp.location}
                      </span>
                    </p>
                  </div>
                  <span
                    className={
                      exp.current
                        ? 'inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground'
                        : 'inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground'
                    }
                  >
                    {exp.current && (
                      <span className="size-1.5 rounded-full bg-primary" />
                    )}
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
