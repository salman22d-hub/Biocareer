'use client'

import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

const details = [
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: undefined as string | undefined,
  },
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's Work Together"
          description="Open to research collaborations, technical operations roles, and data-driven projects across national and international organizations."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            {details.map((d) => {
              const Inner = (
                <>
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                    <d.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {d.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-pretty break-words">
                      {d.value}
                    </p>
                  </div>
                </>
              )
              return d.href ? (
                <a
                  key={d.label}
                  href={d.href}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-accent/40"
                >
                  {Inner}
                </a>
              ) : (
                <div
                  key={d.label}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  {Inner}
                </div>
              )
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 lg:col-span-3 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="How can I help you?"
                className="resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] sm:w-auto"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="size-4" />
                  Message Sent
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
