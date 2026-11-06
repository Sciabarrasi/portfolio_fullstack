"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"

export type ChatMessage = {
  id: string
  role: "user" | "assistant"
  content: string
  error?: boolean
}

type ChatContextValue = {
  messages: ChatMessage[]
  loading: boolean
  sendMessage: (text: string) => Promise<void>
  reset: () => void
  panelOpen: boolean
  setPanelOpen: (open: boolean) => void
}

const ChatContext = createContext<ChatContextValue | null>(null)

function uid() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2)
}

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const messagesRef = useRef<ChatMessage[]>([])
  useEffect(() => {
    messagesRef.current = messages
  }, [messages])

  const sendMessage = useCallback(
    async (text: string) => {
      const content = text.trim()
      if (!content || loading) return

      const userMsg: ChatMessage = { id: uid(), role: "user", content }
      const history = [...messagesRef.current.filter((m) => !m.error), userMsg]
      setMessages((prev) => [...prev, userMsg])
      setLoading(true)

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: history.map(({ role, content }) => ({ role, content })),
          }),
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = (await res.json()) as { reply?: string }
        setMessages((prev) => [
          ...prev,
          { id: uid(), role: "assistant", content: data.reply ?? "…" },
        ])
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: uid(),
            role: "assistant",
            error: true,
            content:
              "Ups, no pude responder en este momento. Probá de nuevo en unos segundos o escribile directo a sciabarrasi.gianluca@gmail.com.",
          },
        ])
      } finally {
        setLoading(false)
      }
    },
    [loading],
  )

  const reset = useCallback(() => setMessages([]), [])

  const value = useMemo(
    () => ({ messages, loading, sendMessage, reset, panelOpen, setPanelOpen }),
    [messages, loading, sendMessage, reset, panelOpen],
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export function useChat() {
  const ctx = useContext(ChatContext)
  if (!ctx) throw new Error("useChat must be used inside <ChatProvider>")
  return ctx
}
