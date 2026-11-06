import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

// Versión PNG del monograma de app/icon.svg para iOS (pantalla de inicio).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#141d25",
        }}
      >
        <svg width="150" height="150" viewBox="8 8 48 48">
          <g fill="none" stroke="#7cd2ae" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M28.57 24.93 A10 10 0 1 0 31.5 32 H22.5" />
            <path d="M51.7 24.5 A6 5 0 1 0 46.5 32 A6 5 0 1 1 41.3 39.5" />
          </g>
        </svg>
      </div>
    ),
    size,
  )
}
