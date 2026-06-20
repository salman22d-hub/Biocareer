import Image from 'next/image'
import { ArrowDown, Download, FlaskConical, GraduationCap, BookMarked } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

import { Navbar } from '@/components/navbar'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { Research } from '@/components/research'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

const stats = [
  { icon: FlaskConical, value: '13+', label: 'Years in Science & Operations' },
  { icon: BookMarked, value: '2', label: 'Peer-Reviewed Publications' },
  { icon: GraduationCap, value: '3.61', label: 'M.Phil CGPA / 4.00' },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        
        {/* 🟢 HERO SECTION */}
        <section
          id="hero"
          className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40"
          style={{
            background: 'linear-gradient(to bottom, #e6f4ea 0%, #ffffff 100%)',
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-0 size-[36rem] rounded-full bg-primary/10 blur-3xl"
          />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
            <div id="about" className="scroll-mt-24">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <span 
                  className="size-1.5 rounded-full animate-pulse" 
                  style={{ backgroundColor: '#10b981' }} 
                />
                Life Sciences · Research · AI Operations
              </span>

              {/* 🎯 DR. SALMAN WAHEED NAME WITH DYNAMIC COLOR-SHIFTING GRADIENT (LIKE IMAGE_854947.PNG) */}
              <h1 
                className="mt-5 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-transparent bg-clip-text animate-color-shift"
                style={{
                  background: 'linear-gradient(135deg, #112d24 0%, #10b981 25%, #eab308 50%, #047857 75%, #112d24 100%)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  animation: 'colorShiftSmooth 8s ease infinite'
                }}
              >
                {profile.name}
              </h1>

              {/* 🎯 SUBTITLE IN BRIGHT EMERALD GREEN */}
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
        </section>

        {/* 🟢 OTHER SECTIONS */}
        <Experience />
        <Education />
        <Research />
        <Skills />
        <Contact />
      </main>
      <Footer />

      {/* 🛠️ CSS KEYFRAMES INJECTOR FOR AUTOMATIC GRADIENT MOVING EFFECT */}
      <style>{`
        @keyframes colorShiftSmooth {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}