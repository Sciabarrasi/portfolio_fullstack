import Image from "next/image"
import { Download, MapPin, Sparkles } from "lucide-react"
import { impactStats, profile } from "@/lib/portfolio-data"
import { OpenChatButton } from "@/components/chat/open-chat-button"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

export function Hero() {
  return (
    <section id="inicio" className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="animate-fade-up">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
                <span className="relative size-2 rounded-full bg-primary" />
              </span>
              Disponible para nuevos desafíos
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5" />
              {profile.location}
            </span>
          </div>

          <p className="font-mono text-sm text-muted-foreground">
            Hola, soy {profile.firstName} {profile.lastName} — {profile.role}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Construyo software que{" "}
            <span className="text-primary">simplifica el día a día</span> de quienes lo usan.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <OpenChatButton className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong">
              <Sparkles className="size-4" />
              Preguntale a mi IA
            </OpenChatButton>
            <a
              href={profile.cv}
              download
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border-strong px-6 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="size-4" />
              Descargar CV
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full p-3 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-3 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto animate-fade-up [animation-delay:120ms] lg:mx-0">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-transparent to-amber/20 blur-2xl" />
          <div className="relative size-56 overflow-hidden rounded-[2rem] border border-border-strong bg-surface-2 sm:size-72">
            <Image
              src={profile.photo}
              alt={`Foto de ${profile.firstName} ${profile.lastName}`}
              fill
              priority
              sizes="(min-width: 640px) 288px, 224px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-surface/95 px-4 py-2.5 text-xs shadow-xl backdrop-blur sm:-left-8">
            <p className="text-subtle-foreground">Último rol</p>
            <p className="font-medium">Crombie · NFTYDoor</p>
          </div>
        </div>
      </div>

      <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
        {impactStats.map((stat) => (
          <div key={stat.label} className="bg-surface/95 p-5 sm:p-6">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-display text-3xl font-semibold text-amber sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 block text-sm leading-snug text-muted-foreground">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
