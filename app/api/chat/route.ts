import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { GoogleGenAI } from "@google/genai"

export const runtime = "nodejs"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

const MAX_MESSAGES = 20
const MAX_MESSAGE_LENGTH = 2000

let aiClient: GoogleGenAI | null = null
function getClient() {
  if (!aiClient) aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })
  return aiClient
}

let aboutMeCache: string | null = null
function getAboutMe() {
  if (!aboutMeCache) {
    aboutMeCache = fs.readFileSync(path.join(process.cwd(), "lib", "about-me.md"), "utf-8")
  }
  return aboutMeCache
}

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false
  const m = value as Record<string, unknown>
  return (m.role === "user" || m.role === "assistant") && typeof m.content === "string"
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    const raw = body?.messages

    if (!Array.isArray(raw) || raw.length === 0 || !raw.every(isChatMessage)) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 })
    }

    const messages = (raw as ChatMessage[])
      .slice(-MAX_MESSAGES)
      .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }))

    const systemPrompt = `Sos el asistente virtual del portfolio de Gianluca Sciabarrasi, Software Engineer Full Stack. Respondé preguntas de visitantes (muchas veces recruiters o potenciales clientes) sobre su experiencia, proyectos, skills, formación y forma de trabajar.

Reglas:
- Hablá de Gianluca en tercera persona, en español rioplatense (a menos que te escriban en otro idioma: en ese caso respondé en ese idioma), con un tono profesional pero cercano.
- Usá EXCLUSIVAMENTE la información de abajo. Si te preguntan algo que no está, decí honestamente que no tenés ese dato y sugerí contactarlo por mail (sciabarrasi.gianluca@gmail.com).
- No inventes datos, fechas, métricas ni tecnologías. En particular, no atribuyas tecnologías a proyectos donde no figuran.
- Respuestas breves y escaneables: 2 a 5 oraciones o una lista corta. Podés usar **negrita** y listas con "-".
- Si la pregunta no tiene que ver con Gianluca o su perfil profesional, redirigí amablemente la conversación.

---
${getAboutMe()}
---`

    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }))

    const response = await getClient().models.generateContent({
      model: "gemini-3-flash-preview",
      contents,
      config: {
        systemInstruction: systemPrompt,
        maxOutputTokens: 1500,
        temperature: 0.7,
        thinkingConfig: {
          thinkingBudget: 0,
        },
      },
    })

    const reply = response.text?.trim() || "No pude generar una respuesta, intentá de nuevo."

    return NextResponse.json({ reply })
  } catch (err) {
    console.error("Chat endpoint error:", err)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}
