"use client"

import { useRef, useState } from "react"
import { Send, Sparkles, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { profile, suggestedQuestions } from "@/lib/portfolio-data"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function AsistentePage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  async function sendMessage(text: string) {
    const content = text.trim()
    if (!content || loading) return

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
    }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setLoading(true)

    try {
      // falta hacer esta integración
          const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!res.ok) throw new Error("no endpoint")

      const data = await res.json()
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.reply ?? "…",
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "El asistente todavía no está conectado. Conectá tu endpoint /api/chat para responder preguntas sobre Gianluca.",
        },
      ])
    } finally {
      setLoading(false)
      requestAnimationFrame(() => {
        scrollRef.current?.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth",
        })
      })
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="flex flex-col gap-6">
      <header>
        <div className="flex items-center gap-2">
          <Sparkles className="size-6 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">Asistente IA</h1>
        </div>
        <p className="mt-2 text-muted-foreground text-pretty">
          Preguntá lo que quieras sobre {profile.firstName}: su experiencia,
          skills o proyectos.
        </p>
      </header>

      <div className="flex min-h-[60vh] flex-col rounded-xl border border-border bg-card">
        <div
          ref={scrollRef}
          className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6"
        >
          {messages.length === 0 ? (
            <div className="flex flex-col items-center gap-6 py-10 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="size-6 text-primary" />
              </div>
              <p className="max-w-sm text-sm text-muted-foreground text-pretty">
                Empezá con una de estas preguntas o escribí la tuya.
              </p>
              <div className="grid w-full gap-2 sm:grid-cols-2">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="rounded-lg border border-border bg-secondary px-3 py-2.5 text-left text-sm text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-accent"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "flex gap-3",
                  m.role === "user" && "flex-row-reverse",
                )}
              >
                <div
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full",
                    m.role === "assistant"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary text-secondary-foreground",
                  )}
                >
                  {m.role === "assistant" ? (
                    <Sparkles className="size-4" />
                  ) : (
                    <User className="size-4" />
                  )}
                </div>
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    m.role === "assistant"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-primary text-primary-foreground",
                  )}
                >
                  {m.content}
                </div>
              </div>
            ))
          )}

          {loading && (
            <div className="flex gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="size-4" />
              </div>
              <div className="flex items-center gap-1 rounded-2xl bg-secondary px-4 py-3">
                <span className="size-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                <span className="size-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                <span className="size-2 animate-bounce rounded-full bg-muted-foreground" />
              </div>
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-border p-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribí tu pregunta…"
            className="flex-1 rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
            aria-label="Mensaje para el asistente"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            aria-label="Enviar mensaje"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </div>
  )
}
