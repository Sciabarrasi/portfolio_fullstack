import Link from "next/link"
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react"
import { Button } from "../components/ui/button"
import {
  profile,
  highlights,
  experiences,
  education,
} from "@/lib/portfolio-data"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-14">
      <section>
        <p className="mb-3 font-mono text-sm text-primary">Hola, soy</p>
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {profile.firstName} {profile.lastName}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{profile.role}</p>
        <p className="mt-6 max-w-2xl leading-relaxed text-foreground/80 text-pretty">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="h-12 px-6 text-base">
            <Link href="/asistente">
              <Sparkles className="size-5" />
              Preguntale a mi IA
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
            <Link href="/freelance">
              Ver proyectos
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="rounded-xl border border-border bg-card p-4"
          >
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {h.label}
            </p>
            <p className="mt-1 font-medium text-pretty">{h.value}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-5 text-xl font-semibold">Experiencia</h2>
        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <article
              key={exp.company}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">
                  {exp.role} ·{" "}
                  <span className="text-primary">{exp.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              {exp.client && (
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {exp.client}
                </p>
              )}
              <ul className="mt-4 flex flex-col gap-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/80">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-xl font-semibold">Educación</h2>
        <div className="flex flex-col gap-3">
          {education.map((ed) => (
            <div
              key={ed.title}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
            >
              <GraduationCap className="mt-0.5 size-5 shrink-0 text-primary" />
              <div className="flex-1">
                <p className="font-medium text-pretty">{ed.title}</p>
                <p className="text-sm text-muted-foreground">{ed.place}</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                {ed.period}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
