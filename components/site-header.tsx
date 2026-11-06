"use client"

import { useEffect, useState } from "react"
import { Download, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems, profile } from "@/lib/portfolio-data"

export function SiteHeader() {
  const [active, setActive] = useState<string>("")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-35% 0px -55% 0px" },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 font-display text-sm font-bold text-primary">
            {profile.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold sm:inline">
            {profile.firstName} {profile.lastName}
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm transition-colors",
                    active === item.id
                      ? "bg-surface-2 text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.cv}
            download
            className="hidden items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary sm:inline-flex"
          >
            <Download className="size-4" />
            CV
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-surface-2 lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Navegación móvil" className="border-t border-border lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base transition-colors",
                    active === item.id ? "bg-surface-2 text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 sm:hidden">
              <a
                href={profile.cv}
                download
                className="flex items-center justify-center gap-2 rounded-lg border border-border-strong px-3 py-3 text-base font-medium"
              >
                <Download className="size-4" />
                Descargar CV
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
