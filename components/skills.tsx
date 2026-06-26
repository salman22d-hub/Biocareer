'use client'

import {
  FlaskConical,
  Sigma,
  Sparkles,
  MessageSquare,
  Workflow,
} from 'lucide-react'
import { skillGroups } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

const icons = [FlaskConical, Sigma, Sparkles, MessageSquare, Workflow]

export function Skills() {
  // Infinite scroll ke liye data ko copy kar rahe hain
  const duplicatedSkills = [...skillGroups, ...skillGroups, ...skillGroups, ...skillGroups]

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-zinc-800 bg-black py-20 sm:py-24 overflow-hidden relative"
    >
      {/* Hover pause rule has been completely removed from here */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes v-marquee {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        .v-scroll-normal { animation: v-marquee 25s linear infinite !important; }
        .v-scroll-slow { animation: v-marquee 35s linear infinite !important; }
        .v-scroll-fast { animation: v-marquee 18s linear infinite !important; }
      `}} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Expertise"
          title="Core Competencies & Skills"
          description="A 3D perspective into the blend of laboratory research, statistics, and agentic AI integration."
        />

        <div className="mt-16 relative flex h-[600px] w-full flex-row items-center justify-center overflow-hidden rounded-xl">
          
          <div 
            className="mq-box grid h-full w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
            style={{
              transform: 'perspective(1200px) rotateX(24deg) rotateZ(-8deg) skewX(6deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6 overflow-hidden h-full relative">
              <div className="flex flex-col gap-6 v-scroll-normal">
                {duplicatedSkills.map((group, idx) => {
                  if (idx % 3 !== 0) return null
                  const Icon = icons[idx % icons.length]
                  return <SkillCard key={`col1-${idx}`} group={group} Icon={Icon} />
                })}
              </div>
            </div>

            {/* Column 2 */}
            <div className="hidden sm:flex flex-col gap-6 overflow-hidden h-full relative">
              <div className="flex flex-col gap-6 v-scroll-slow">
                {duplicatedSkills.map((group, idx) => {
                  if (idx % 3 !== 1) return null
                  const Icon = icons[idx % icons.length]
                  return <SkillCard key={`col2-${idx}`} group={group} Icon={Icon} />
                })}
              </div>
            </div>

            {/* Column 3 */}
            <div className="hidden lg:flex flex-col gap-6 overflow-hidden h-full relative">
              <div className="flex flex-col gap-6 v-scroll-fast">
                {duplicatedSkills.map((group, idx) => {
                  if (idx % 3 !== 2) return null
                  const Icon = icons[idx % icons.length]
                  return <SkillCard key={`col3-${idx}`} group={group} Icon={Icon} />
                })}
              </div>
            </div>

          </div>

          {/* Fading Gradients Overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent z-20" />
        </div>
      </div>
    </section>
  )
}

function SkillCard({ group, Icon }: { group: any; Icon: any }) {
  return (
    <article
      className="flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-950/90 p-5 shadow-xl transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900 backdrop-blur-sm group cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div>
        <div className="flex items-center gap-3">
          <span className="inline-flex size-9 items-center justify-center rounded-lg bg-zinc-900 text-zinc-100 border border-zinc-800 shadow-inner group-hover:bg-zinc-800 transition-colors">
            <Icon className="size-4.5 stroke-[1.75]" />
          </span>
          <div>
            <h3 className="font-heading text-sm font-semibold text-zinc-100 tracking-wide">
              {group.category}
            </h3>
            <p className="text-[10px] text-zinc-500 font-mono">@biocareer</p>
          </div>
        </div>
        
        <p className="mt-3 text-xs leading-relaxed text-zinc-400">
          {group.description}
        </p>
      </div>

      <ul className="mt-4 flex flex-wrap gap-1">
        {group.skills.map((skill: string) => (
          <li
            key={skill}
            className="rounded bg-zinc-900 border border-zinc-800/60 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}