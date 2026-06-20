import { GraduationCap } from 'lucide-react'
import { education } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-y border-border bg-secondary/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academics"
          title="Education & Background"
          description="Formal training in veterinary medicine and animal reproduction, graduating in the first division across professional degrees."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {education.map((edu, i) => (
            <article
              key={edu.degree}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                  <GraduationCap className="size-5" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {edu.period}
                </span>
              </div>

              <h3 className="mt-4 font-heading text-lg font-bold leading-snug">
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {edu.institution}
              </p>

              <span className="mt-3 w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                {edu.grade}
              </span>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {edu.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
