import { Ear, Repeat, Workflow } from "lucide-react"
import { about } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

const icons = [Ear, Repeat, Workflow]

export function About() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Sobre mí"
        title={
          <>
            El buen software empieza por <span className="text-primary">escuchar</span>, no por la
            tecnología.
          </>
        }
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <ul className="grid gap-4">
          {about.principles.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <li key={item.title} className="card flex gap-4 p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
