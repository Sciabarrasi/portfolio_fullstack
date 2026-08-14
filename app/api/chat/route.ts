import { NextRequest, NextResponse } from "next/server";
import fs from 'fs'
import path from 'path'
import { GoogleGenAI } from '@google/genai'

export const runtime = 'nodejs'

type ChatMessage = {
    role: "user" | "assistante"
    content: string
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

export async function POST(req: NextRequest) { 
    try { 
        const body = await req.json()
        const messages = body?.messages as ChatMessage[] | undefined
        
        if (!messages || messages.length === 0) {
            return NextResponse.json({ error: 'No messages '}, { status: 400 })
        }

        const aboutMePath = path.join(process.cwd(), "lib", "about-me.md")
        const aboutMe = fs.readFileSync(aboutMePath, "utf-8")

        const systemPrompt = `Sos el asistente virtual del portfolio de Gianluca Sciabarrasi, desarrollador fullstack. Respondé preguntas de visitantes sobre su experiencia, skills y proyectos, en tercera persona, en español (a menos que te pregunten en otro idioma), con un tono prfesional pero cercano.
        
        Usá EXCLUSIVAMENTE la siguiente información. Si te preguntan algo que no está acá, decí honestamente que no tenés ese dato y sugerí contactarlo por mail (sciabarrasi.gianluca@gmail.com).

        No inventes datos, fechas ni tecnologías que no estén en esta info.
        
        ---
        ${aboutMe}
        ---
        `

        const contents = messages.map((m) => ({
            role: m.role === "assistante" ? "model" : "user",
            parts: [{ text: m.content }],
        }))

        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents,
            config: {
                systemInstruction: systemPrompt,
                maxOutputTokens: 1500,
                temperature: 0.7,
                thinkingConfig: {
                    thinkingBudget: 0,
                }
            },
        })

        const reply = response.text?.trim() || "No pude generar una respuesta, intentá denuevo."

        return NextResponse.json({ reply })
    } catch (err) {
        console.error('Chat endpoint error:', err)
        return NextResponse.json(
            { error: "Internal error" },
            { status: 500 }
        )
    }
}