import { Building2, ChevronDown, Quote } from "lucide-react"
import { experiences, recommendation } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Experience() {
  return (
    <section id="experiencia" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Experiencia"
        title="Producto real, usuarios reales, ciclo completo."
        description="Desarrollo, QA y soporte para una plataforma Fintech de Estados Unidos: desde construir la funcionalidad hasta ver cómo la vive el usuario final."
      />

      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        {experiences.map((exp) => (
          <article key={exp.company + exp.client} className="card p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-primary">
                  <Building2 className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                  <p className="mt-1 text-muted-foreground">
                    <span className="font-medium text-foreground">{exp.company}</span> · {exp.modality}{" "}
                    para <span className="font-medium text-primary">{exp.client}</span>
                  </p>
                </div>
              </div>
              <span className="chip font-mono">{exp.period}</span>
            </div>

            <p className="mt-5 rounded-lg border border-border bg-background/40 px-4 py-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{exp.client}:</span> {exp.clientDescription}
            </p>

            <ul className="mt-6 space-y-3">
              {exp.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
              {exp.stack.map((tech) => (
                <li key={tech} className="chip font-mono">
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}

        <aside className="card relative flex flex-col overflow-hidden p-6 sm:p-8" aria-labelledby="recomendacion">
          <div className="pointer-events-none absolute -top-20 -right-20 size-56 rounded-full bg-amber/10 blur-3xl" />
          <Quote className="size-8 text-amber" aria-hidden="true" />
          <p id="recomendacion" className="mt-2 font-mono text-xs tracking-[0.2em] text-amber uppercase">
            Carta de recomendación
          </p>
          <blockquote className="mt-5 font-display text-xl leading-snug text-foreground/95 text-pretty sm:text-2xl">
            “{recommendation.highlight}”
          </blockquote>
          <div className="mt-6 border-t border-border pt-5">
            <p className="font-semibold">{recommendation.author}</p>
            <p className="text-sm text-muted-foreground">
              {recommendation.authorRole} · {recommendation.company}
            </p>
          </div>
          <p className="mt-4 text-sm text-subtle-foreground">
            {recommendation.summary} {recommendation.date}.
          </p>

          <details className="group mt-6">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-primary hover:underline [&::-webkit-details-marker]:hidden">
              Leer la carta completa (inglés)
              <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-4 space-y-3 border-l-2 border-amber/40 pl-4 text-sm leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground/90">To Whom It May Concern:</p>
              {recommendation.fullText.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p>
                Sincerely,
                <br />
                {recommendation.author} — {recommendation.authorRole}, {recommendation.company}
              </p>
            </div>
          </details>
        </aside>
      </div>
    </section>
  )
}
