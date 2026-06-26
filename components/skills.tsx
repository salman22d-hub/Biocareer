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
      className="scroll-mt-20 border-y border-border bg-zinc-50/50 dark:bg-zinc-950/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Expertise"
          title="Core Competencies & Skills"
          description="Filter by discipline to explore the blend of laboratory research, statistics, and modern computational tooling."
        />

        {/* Premium Filter Pills */}
        <div className="mt-10 flex flex-wrap gap-2 justify-start items-center">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={cn(
                'rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-300',
                active === f
                  ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid Layout with Premium Card Style */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((group) => {
            const Icon = icons[skillGroups.indexOf(group) % icons.length]
            return (
              <article
                key={group.category}
                className="flex flex-col justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md cursor-default"
              >
                <div>
                  <div className="flex items-center gap-3.5">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 ring-1 ring-zinc-200/50 dark:ring-zinc-700/50">
                      <Icon className="size-5 stroke-[1.75]" />
                    </span>
                    <h3 className="font-heading text-base font-semibold text-zinc-900 dark:text-zinc-50">
                      {group.category}
                    </h3>
                  </div>
                  
                  <p className="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {group.description}
                  </p>
                </div>

                {/* Tags Section */}
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-zinc-100 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300"
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