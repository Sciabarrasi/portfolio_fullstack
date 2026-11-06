import { ArrowUpRight, BadgeCheck, GraduationCap, Languages } from "lucide-react"
import { education, languages } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./section-heading"

export function Education() {
  return (
    <section id="formacion" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Formación"
        title="Aprendizaje continuo."
        description="Formación técnica, bootcamps y cursos que acompañan la experiencia práctica."
      />

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <ol className="relative space-y-4 border-l border-border pl-6 sm:pl-8">
          {education.map((ed) => (
            <li key={ed.title} className="relative">
              <span
                className={cn(
                  "absolute top-6 -left-[31px] size-3 rounded-full border-2 sm:-left-[39px]",
                  ed.current ? "border-primary bg-primary" : "border-border-strong bg-background",
                )}
              />
              <div className="card p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-pretty">{ed.title}</h3>
                      <p className="text-sm text-muted-foreground">{ed.place}</p>
                    </div>
                  </div>
                  <span className={cn("chip font-mono", ed.current && "border-primary/40 text-primary")}>
                    {ed.period}
                  </span>
                </div>
                {ed.note && <p className="mt-3 pl-8 text-sm text-subtle-foreground">{ed.note}</p>}
                {ed.certificate && (
                  <a
                    href={ed.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 ml-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    <BadgeCheck className="size-4" />
                    Ver certificado
                    <ArrowUpRight className="size-3.5" />
                    <span className="sr-only">(se abre en una pestaña nueva)</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="card h-fit p-6">
          <div className="flex items-center gap-2">
            <Languages className="size-5 text-primary" />
            <h3 className="font-semibold">Idiomas</h3>
          </div>
          <ul className="mt-5 space-y-4">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-center justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                <span className="text-foreground/90">{lang.name}</span>
                <span className="chip">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
