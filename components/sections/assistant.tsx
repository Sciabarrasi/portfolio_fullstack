import { Sparkles } from "lucide-react"
import { ChatWindow } from "@/components/chat/chat-window"
import { SectionHeading } from "./section-heading"

export function Assistant() {
  return (
    <section id="asistente" className="py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Asistente IA"
            title={
              <>
                ¿Preferís preguntar? <span className="text-primary">Hablá con mi IA.</span>
              </>
            }
            description="Configuré un asistente con mi CV, mis proyectos y mi forma de trabajar. Preguntale lo que quieras: experiencia, tecnologías, disponibilidad o cómo encaro un proyecto."
          />
          <ul className="-mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary" /> Responde en español, inglés u otros idiomas.
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary" /> Solo usa información real de mi trayectoria.
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary" /> También está disponible desde el botón flotante.
            </li>
          </ul>
        </div>

        <div className="card flex h-[560px] flex-col overflow-hidden sm:h-[600px]">
          <div className="flex items-center gap-2.5 border-b border-border px-5 py-3.5">
            <span className="flex size-2 rounded-full bg-primary" />
            <p className="text-sm font-medium">Asistente de Gianluca</p>
          </div>
          <ChatWindow className="flex-1" />
        </div>
      </div>
    </section>
  )
}
