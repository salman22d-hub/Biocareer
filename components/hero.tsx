import Image from 'next/image'
import { ArrowDown, Download, FlaskConical, GraduationCap, BookMarked } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

const stats = [
  { icon: FlaskConical, value: '13+', label: 'Years in Science & Operations' },
  { icon: BookMarked, value: '2', label: 'Peer-Reviewed Publications' },
  { icon: GraduationCap, value: '3.61', label: 'M.Phil CGPA / 4.00' },
 ]

export function Hero() {
  return (
    // 🎨 !bg-[#e6f4ea] mein '!' ka matlab hai IMPORTANT. Yeh Tailwind ko majboor karega ke purana rang chorr kar Mint Green dikhaye.
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 !bg-[#e6f4ea]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 size-[36rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div id="about" className="scroll-mt-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            {/* 🎨 Dot Color Implemented directly with CSS style attribute */}
            <span 
              className="size-1.5 rounded-full animate-pulse" 
              style={{ backgroundColor: '#10b981', display: 'inline-block' }} 
            />
            Life Sciences · Research · AI Operations
          </span>

          {/* 🎯 Dr. Salman Waheed - Main Name (Forced Color via style attribute) */}
          <h1 
            className="mt-5 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: '#112d24' }}
          >
            {profile.name}
          </h1>

          {/* 🎯 Subtitle Line (Forced Color via style attribute) */}
          <p 
            className="mt-4 text-pretty text-base font-medium sm:text-lg"
            style={{ color: '#10b981' }}
          >
            {profile.title}
          </p>

          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/cv-salman-waheed.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03]"
            >
              <Download className="size-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contact Me
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-2xl font-bold sm:text-3xl">
                  {s.value}
                </dd>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
            <Image
              src="/hero-science.png"
              alt="Abstract illustration"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-md backdrop-blur sm:block">
            <p className="font-heading text-sm font-semibold">Theriogenology</p>
            <p className="text-xs text-muted-foreground">
              Animal Reproduction & Cryopreservation
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="#experience"
          className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-4 animate-bounce" />
          Scroll to explore
        </a>
      </div>
    </section>
  )
}