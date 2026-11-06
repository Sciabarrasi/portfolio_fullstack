"use client"

import { useEffect, useState } from "react"
import { Sparkles, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useChat } from "./chat-provider"
import { ChatWindow } from "./chat-window"

/**
 * Botón flotante + panel de chat. Comparte la conversación con la sección
 * "Asistente IA", y se oculta mientras esa sección está en pantalla.
 */
export function ChatLauncher() {
  const { panelOpen, setPanelOpen } = useChat()
  const [sectionVisible, setSectionVisible] = useState(false)

  useEffect(() => {
    const section = document.getElementById("asistente")
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionVisible(entry.isIntersecting)
        if (entry.isIntersecting) setPanelOpen(false)
      },
      { threshold: 0.25 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [setPanelOpen])

  useEffect(() => {
    if (!panelOpen) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPanelOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [panelOpen, setPanelOpen])

  const hidden = sectionVisible

  return (
    <>
      <button
        type="button"
        onClick={() => setPanelOpen(true)}
        aria-label="Abrir asistente IA"
        aria-expanded={panelOpen}
        className={cn(
          "group fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full border border-primary/40 bg-surface-2/95 py-3 pr-5 pl-4 text-sm font-medium text-foreground shadow-[0_10px_40px_-10px_oklch(0.8_0.1_165/0.45)] backdrop-blur transition-all duration-300 hover:border-primary sm:right-6 sm:bottom-6",
          (panelOpen || hidden) && "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <span className="relative flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Sparkles className="size-3.5" />
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/40 [animation-duration:2.5s]" />
        </span>
        Preguntale a mi IA
      </button>

      <div
        role="dialog"
        aria-modal="false"
        aria-label="Asistente IA"
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 flex h-[85dvh] flex-col overflow-hidden rounded-t-2xl border border-border bg-surface shadow-2xl transition-all duration-300 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:h-[min(640px,calc(100dvh-7rem))] sm:w-[400px] sm:rounded-2xl",
          panelOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
        )}
        inert={!panelOpen}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Sparkles className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">Asistente de Gianluca</p>
              <p className="flex items-center gap-1.5 text-xs text-subtle-foreground">
                <span className="size-1.5 rounded-full bg-primary" /> En línea · responde con IA
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setPanelOpen(false)}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
            aria-label="Cerrar asistente"
          >
            <X className="size-4" />
          </button>
        </div>
        {panelOpen && <ChatWindow className="flex-1" autoFocus compact />}
      </div>
    </>
  )
}
