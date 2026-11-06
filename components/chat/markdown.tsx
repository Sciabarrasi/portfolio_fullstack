import { Fragment, type ReactNode } from "react"

/**
 * Renderer mínimo para las respuestas del asistente:
 * párrafos, listas con "-", "*" o "1.", **negrita**, *itálica* y `código`.
 */
function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\*[^*\s][^*]*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code key={i} className="rounded bg-background/60 px-1 py-0.5 font-mono text-[0.85em]">
          {part.slice(1, -1)}
        </code>
      )
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

type Block = { type: "p"; text: string } | { type: "ul" | "ol"; items: string[] }

function parse(source: string): Block[] {
  const blocks: Block[] = []
  let paragraph: string[] = []

  const flush = () => {
    if (paragraph.length) blocks.push({ type: "p", text: paragraph.join(" ") })
    paragraph = []
  }

  for (const rawLine of source.split("\n")) {
    const line = rawLine.trim()
    const bullet = line.match(/^[-*•]\s+(.*)$/)
    const numbered = line.match(/^\d+[.)]\s+(.*)$/)

    if (!line) {
      flush()
    } else if (bullet || numbered) {
      flush()
      const type = bullet ? "ul" : "ol"
      const item = (bullet ?? numbered)![1]
      const last = blocks[blocks.length - 1]
      if (last && last.type === type) last.items.push(item)
      else blocks.push({ type, items: [item] })
    } else {
      paragraph.push(line.replace(/^#{1,6}\s+/, ""))
    }
  }
  flush()
  return blocks
}

export function Markdown({ content }: { content: string }) {
  return (
    <div className="space-y-2.5">
      {parse(content).map((block, i) => {
        if (block.type === "p") return <p key={i}>{renderInline(block.text)}</p>
        const List = block.type === "ul" ? "ul" : "ol"
        return (
          <List
            key={i}
            className={
              block.type === "ul"
                ? "list-disc space-y-1 pl-5 marker:text-primary"
                : "list-decimal space-y-1 pl-5 marker:text-primary"
            }
          >
            {block.items.map((item, j) => (
              <li key={j}>{renderInline(item)}</li>
            ))}
          </List>
        )
      })}
    </div>
  )
}
