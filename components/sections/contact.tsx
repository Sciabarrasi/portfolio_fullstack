"use client"

import { useState } from "react"
import { Check, Copy, Download, Mail } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const links = [
    { href: profile.linkedin, label: "LinkedIn", detail: "gianluca-sciabarrasi", icon: LinkedinIcon, external: true },
    { href: profile.github, label: "GitHub", detail: "Sciabarrasi", icon: GithubIcon, external: true },
    { href: profile.cv, label: "Currículum", detail: "Descargar PDF", icon: Download, download: true },
  ]

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="card relative overflow-hidden p-8 sm:p-12">
        <div className="pointer-events-none absolute -top-32 -right-24 size-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full bg-amber/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Contacto</p>
            <h2 className="section-title mt-3">¿Tenés un proceso que se puede simplificar? Hablemos.</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Busco sumarme a un equipo donde pueda seguir construyendo software que resuelva problemas
              reales. También estoy abierto a proyectos a medida.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong"
              >
                <Mail className="size-4" />
                Escribime
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border-strong px-5 font-mono text-sm transition-colors hover:border-primary"
                aria-label="Copiar email"
              >
                {copied ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}
                <span className="max-w-[60vw] truncate">{copied ? "¡Copiado!" : profile.email}</span>
              </button>
            </div>
          </div>

          <ul className="grid gap-3">
            {links.map(({ href, label, detail, icon: Icon, external, download }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...(download ? { download: true } : {})}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition-colors hover:border-primary/50"
                >
                  <span className="flex size-11 items-center justify-center rounded-lg bg-surface-2 text-muted-foreground transition-colors group-hover:text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block font-medium">{label}</span>
                    <span className="block text-sm text-subtle-foreground">{detail}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
