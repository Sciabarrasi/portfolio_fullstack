import type { Metadata } from "next"
import { skillGroups } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Skills — Gianluca Sciabarrasi",
  description: "Lenguajes y tecnologías con las que trabajo.",
}

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Skills</h1>
        <p className="mt-2 text-muted-foreground text-pretty">
          Lenguajes, frameworks y herramientas con los que tengo experiencia.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <section
            key={group.category}
            className="rounded-xl border border-border bg-card p-5"
          >
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
              {group.category}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
