import { FileText, Microscope, Quote } from 'lucide-react'
import { research } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

export function Research() {
  return (
    <section id="research" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Research & Publications"
          title="Peer-Reviewed Scientific Work"
          description="Controlled experimental research in animal reproduction, with findings published in international and national journals."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-primary p-6 text-primary-foreground lg:col-span-2 lg:p-8">
            <Microscope className="size-7" />
            <h3 className="mt-5 font-heading text-xl font-bold">
              {research.project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/90">
              {research.project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Two-way ANOVA', "Duncan's MRT", 'SPSS', 'Cryopreservation'].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
            <Quote
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 -right-2 size-28 opacity-10"
            />
          </div>

          <div className="grid gap-5 lg:col-span-3">
            {research.publications.map((pub, i) => (
              <article
                key={pub.title}
                className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md sm:p-6"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <FileText className="size-5" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-secondary-foreground">
                      {pub.tag}
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-2 font-heading text-base font-bold leading-snug">
                    {pub.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-primary">
                    {pub.journal}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {pub.meta}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
