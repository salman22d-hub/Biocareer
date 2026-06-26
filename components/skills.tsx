'use client'

import { useState } from 'react'
import {
  FlaskConical,
  Sigma,
  Sparkles,
  MessageSquare,
  Workflow,
} from 'lucide-react'
import { skillGroups } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const icons = [FlaskConical, Sigma, Sparkles, MessageSquare, Workflow]

export function Skills() {
  const [active, setActive] = useState<string>('All')
  const filters = ['All', ...skillGroups.map((g) => g.category)]
  const visible =
    active === 'All'
      ? skillGroups
      : skillGroups.filter((g) => g.category === active)

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-border bg-secondary/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Expertise"
          title="Core Competencies & Skills"
          description="Filter by discipline to explore the blend of laboratory research, statistics, and modern computational tooling."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                active === f
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((group) => {
            const Icon = icons[skillGroups.indexOf(group) % icons.length]
            return (
              <article
                key={group.category}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold">
                  {group.category}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
