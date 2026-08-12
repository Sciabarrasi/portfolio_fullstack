import type { Metadata } from "next"
import { ExternalLink } from "lucide-react"
import { freelanceProjects } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Freelance — Gianluca Sciabarrasi",
  description: "Proyectos freelance desarrollados de punta a punta.",
}

export default function FreelancePage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Freelance</h1>
        <p className="mt-2 text-muted-foreground text-pretty">
          Proyectos que desarrollé de forma independiente, de punta a punta.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        {freelanceProjects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold text-pretty">
                {project.title}
              </h2>
              <span className="font-mono text-xs text-muted-foreground">
                {project.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-primary">
              {project.client}
            </p>

            <p className="mt-4 leading-relaxed text-foreground/80 text-pretty">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-col gap-2">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground/80">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Ver proyecto
                <ExternalLink className="size-3.5" />
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
