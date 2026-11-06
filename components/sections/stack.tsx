import { skillGroups } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Stack() {
  return (
    <section id="stack" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Stack tecnológico"
        title="Las herramientas con las que construyo."
        description="Del frontend a la nube: lo que usé en producción y lo que sigo sumando."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <section key={group.category} className="card p-5 sm:p-6">
            <h3 className="font-mono text-xs tracking-[0.15em] text-primary uppercase">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-border bg-surface-2/70 px-3 py-1.5 text-sm text-foreground/85"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
