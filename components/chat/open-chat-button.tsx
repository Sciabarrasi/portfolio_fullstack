"use client"

import { cn } from "@/lib/utils"
import { useChat } from "./chat-provider"

export function OpenChatButton({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const { setPanelOpen } = useChat()
  return (
    <button type="button" onClick={() => setPanelOpen(true)} className={cn(className)}>
      {children}
    </button>
  )
}
