import { ArrowUpRight, Check, HeartPulse, Building, Trophy } from "lucide-react"
import { projects } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

const projectIcons: Record<string, typeof Trophy> = {
  "prode-mundial": Trophy,
  mediturno: HeartPulse,
  chiozzi: Building,
}

export function Projects() {
  return (
    <section id="proyectos" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Proyectos freelance"
        title="Sistemas a medida, de punta a punta."
        description="Proyectos que llevé adelante en contacto directo con cada cliente: entender el problema, diseñar la solución, desarrollarla y acompañarla en producción."
      />

      <div className="space-y-6">
        {projects.map((project, index) => {
          const Icon = projectIcons[project.slug] ?? Building
          return (
            <article
              key={project.slug}
              className="card group grid gap-8 p-6 transition-colors hover:border-border-strong sm:p-8 lg:grid-cols-[1fr_15rem]"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-subtle-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="chip">{project.category}</span>
                  <span className="font-mono text-xs text-subtle-foreground">{project.period}</span>
                </div>

                <div className="mt-5 flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{project.name}</h3>
                    <p className="mt-1 text-muted-foreground">{project.client}</p>
                  </div>
                </div>

                <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-xs tracking-wider text-amber uppercase">El problema</dt>
                    <dd className="mt-2 leading-relaxed text-foreground/85">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs tracking-wider text-primary uppercase">La solución</dt>
                    <dd className="mt-2 leading-relaxed text-foreground/85">{project.solution}</dd>
                  </div>
                </dl>

                <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {(project.stack || project.repo) && (
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {project.stack?.map((tech) => (
                      <span key={tech} className="chip font-mono">
                        {tech}
                      </span>
                    ))}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        Ver código
                        <ArrowUpRight className="size-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center rounded-xl border border-border bg-background/50 p-6 text-center lg:text-left">
                <p className="font-mono text-xs tracking-wider text-subtle-foreground uppercase">Impacto</p>
                <p className="mt-2 font-display text-5xl font-semibold text-amber">{project.impact.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{project.impact.label}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
