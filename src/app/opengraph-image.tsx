import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Sina Soleymanpour — Senior Full Stack Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background orbs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: 999,
            padding: "8px 16px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#6366f1",
            }}
          />
          <span style={{ color: "#a5b4fc", fontSize: 16, fontWeight: 500 }}>
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ededed",
            lineHeight: 1.1,
            marginBottom: 16,
            letterSpacing: "-2px",
          }}
        >
          Sina Soleymanpour
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: "#a1a1aa",
            marginBottom: 48,
          }}
        >
          Senior Full Stack Engineer
        </div>

        {/* Tech pills */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["Python", "Django", "FastAPI", "Next.js", "React", "AI"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                padding: "8px 16px",
                color: "#a1a1aa",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#6366f1", fontSize: 18 }}>📍</span>
            <span style={{ color: "#71717a", fontSize: 18 }}>Pavia, Italy · Open to Remote EU</span>
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#6366f1",
              letterSpacing: "-0.5px",
            }}
          >
            sinasoleymanpour.com
          </div>
        </div>

        {/* Right accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 4,
            height: "100%",
            background: "linear-gradient(to bottom, #6366f1, #8b5cf6, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  )
}
