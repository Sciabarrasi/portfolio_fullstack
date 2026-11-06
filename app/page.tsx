import { SiteHeader } from "@/components/site-header"
import { ChatLauncher } from "@/components/chat/chat-launcher"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Stack } from "@/components/sections/stack"
import { Education } from "@/components/sections/education"
import { Assistant } from "@/components/sections/assistant"
import { Contact } from "@/components/sections/contact"
import { profile } from "@/lib/portfolio-data"

export default function HomePage() {
  return (
    <>
      <a
        href="#sobre-mi"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-surface-2 focus:px-4 focus:py-2"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Assistant />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-8 text-sm text-subtle-foreground sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
          </p>
          <p>Hecho con Next.js, TypeScript y Tailwind CSS.</p>
        </div>
      </footer>
      <ChatLauncher />
    </>
  )
}
