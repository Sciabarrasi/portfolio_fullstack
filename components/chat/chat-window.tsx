"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUp, RotateCcw, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { profile, suggestedQuestions } from "@/lib/portfolio-data"
import { useChat } from "./chat-provider"
import { Markdown } from "./markdown"

export function ChatWindow({
  className,
  autoFocus = false,
  compact = false,
}: {
  className?: string
  autoFocus?: boolean
  compact?: boolean
}) {
  const { messages, loading, sendMessage, reset } = useChat()
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
  }, [messages, loading])

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus()
  }, [autoFocus])

  function submit() {
    if (!input.trim() || loading) return
    sendMessage(input)
    setInput("")
  }

  return (
    <div className={cn("flex min-h-0 flex-col", className)}>
      <div
        ref={scrollRef}
        className="flex-1 space-y-5 overflow-y-auto overscroll-contain px-4 py-5 sm:px-6"
        aria-live="polite"
      >
        {messages.length === 0 ? (
          <div className={cn("flex flex-col gap-5", compact ? "py-2" : "py-6")}>
            <div className="flex items-start gap-3">
              <AssistantAvatar />
              <div className="rounded-2xl rounded-tl-sm bg-surface-2 px-4 py-3 text-sm leading-relaxed text-foreground/90">
                ¡Hola! Soy el asistente de {profile.firstName}. Preguntame sobre su experiencia,
                sus proyectos, su stack o cómo trabaja.
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pl-11">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => sendMessage(q)}
                  className="rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-left text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((m) =>
            m.role === "user" ? (
              <div key={m.id} className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground">
                  {m.content}
                </div>
              </div>
            ) : (
              <div key={m.id} className="flex items-start gap-3">
                <AssistantAvatar />
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed",
                    m.error
                      ? "border border-amber/30 bg-amber/10 text-foreground/90"
                      : "bg-surface-2 text-foreground/90",
                  )}
                >
                  <Markdown content={m.content} />
                </div>
              </div>
            ),
          )
        )}

        {loading && (
          <div className="flex items-start gap-3">
            <AssistantAvatar />
            <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-surface-2 px-4 py-3.5">
              <span className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
              <span className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
              <span className="size-1.5 animate-bounce rounded-full bg-primary" />
              <span className="sr-only">El asistente está escribiendo</span>
            </div>
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          submit()
        }}
        className="border-t border-border p-3"
      >
        <div className="flex items-end gap-2 rounded-xl border border-border bg-background/60 p-1.5 pl-3 transition-colors focus-within:border-primary/60">
          <textarea
            ref={inputRef}
            value={input}
            rows={1}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                submit()
              }
            }}
            placeholder="Escribí tu pregunta…"
            aria-label="Mensaje para el asistente"
            maxLength={1000}
            className="max-h-32 min-h-9 flex-1 resize-none bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-subtle-foreground [field-sizing:content] focus-visible:outline-none"
          />
          {messages.length > 0 && (
            <button
              type="button"
              onClick={reset}
              className="flex size-9 shrink-0 items-center justify-center rounded-lg text-subtle-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
              aria-label="Reiniciar conversación"
              title="Reiniciar conversación"
            >
              <RotateCcw className="size-4" />
            </button>
          )}
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all hover:bg-primary-strong disabled:opacity-35"
            aria-label="Enviar mensaje"
          >
            <ArrowUp className="size-4" />
          </button>
        </div>
        <p className="mt-2 px-1 text-[11px] text-subtle-foreground">
          Respuestas generadas con IA a partir de mi CV y trayectoria. Pueden contener errores.
        </p>
      </form>
    </div>
  )
}

function AssistantAvatar() {
  return (
    <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
      <Sparkles className="size-4" />
    </div>
  )
}
