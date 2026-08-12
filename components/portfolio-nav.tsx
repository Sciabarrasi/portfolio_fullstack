"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Code2, Briefcase, Sparkles, Mail, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { profile } from "@/lib/portfolio-data"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

const navItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/skills", label: "Skills", icon: Code2 },
  { href: "/freelance", label: "Freelance", icon: Briefcase },
  { href: "/asistente", label: "Asistente IA", icon: Sparkles },
]

function Avatar() {
  if (profile.photo) {
    return (
      <img
        src={profile.photo || "/placeholder.svg"}
        alt={`Foto de ${profile.firstName} ${profile.lastName}`}
        className="size-20 rounded-full object-cover ring-2 ring-sidebar-primary/40"
        crossOrigin="anonymous"
      />
    )
  }
  return (
    <div
      className="flex size-20 items-center justify-center rounded-full bg-sidebar-primary/15 text-2xl font-semibold text-sidebar-primary-foreground ring-2 ring-sidebar-primary/40"
      aria-label={`Foto de ${profile.firstName} ${profile.lastName}`}
    >
      {profile.initials}
    </div>
  )
}

function NavContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col">
      {/* Perfil */}
      <div className="flex flex-col items-center gap-3 px-6 pt-8 pb-6 text-center">
        <Avatar />
        <div>
          <h1 className="text-lg font-semibold leading-tight text-sidebar-foreground text-balance">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="mt-1 text-sm text-sidebar-foreground/60">{profile.role}</p>
        </div>
      </div>

      <nav className="flex-1 px-3" aria-label="Navegación principal">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href
            const Icon = item.icon
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                >
                  <Icon className="size-4 shrink-0" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="border-t border-sidebar-border px-3 py-4">
        <div className="flex items-center justify-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            aria-label="GitHub"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md p-2 text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            aria-label="Correo"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export function PortfolioNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 bg-sidebar lg:block">
        <NavContent />
      </aside>

      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-sidebar px-4 py-3 lg:hidden">
        <span className="font-semibold text-sidebar-foreground">
          {profile.firstName} {profile.lastName}
        </span>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md p-2 text-sidebar-foreground hover:bg-sidebar-accent"
          aria-label="Abrir menú"
        >
          <Menu className="size-5" />
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 left-0 w-64 bg-sidebar shadow-xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-md p-2 text-sidebar-foreground hover:bg-sidebar-accent"
              aria-label="Cerrar menú"
            >
              <X className="size-5" />
            </button>
            <NavContent onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}
