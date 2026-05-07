"use client";

import Link from "next/link";

interface DocShellProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
}

export default function DocShell({ title, subtitle, badge, children }: DocShellProps) {
  return (
    <div style={{ background: "var(--black)", minHeight: "100vh", color: "var(--white)" }}>
      {/* Hero Header */}
      <div
        style={{
          position: "relative",
          borderBottom: "1px solid var(--g200)",
          padding: "clamp(48px, 8vw, 96px) clamp(24px, 6vw, 80px) clamp(40px, 6vw, 72px)",
          overflow: "hidden",
        }}
      >
        {/* Grid background decoration */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(232,25,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,25,26,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        {/* Red glow top-left */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "400px",
            height: "400px",
            background: "radial-gradient(ellipse at top left, rgba(232,25,26,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>
          {/* Back link */}
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--g400)",
              textDecoration: "none",
              marginBottom: "28px",
              transition: "color 150ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--red)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--g400)")}
          >
            <span style={{ fontSize: "11px" }}>←</span>
            Corps Arena
          </Link>

          {/* Eyebrow badge */}
          {badge && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(232,25,26,0.1)",
                border: "1px solid rgba(232,25,26,0.3)",
                padding: "4px 12px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  background: "var(--red)",
                  borderRadius: "99px",
                  boxShadow: "0 0 6px 2px rgba(232,25,26,0.7)",
                  animation: "docPulse 1.6s infinite",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--red)",
                }}
              >
                {badge}
              </span>
            </div>
          )}

          {/* Main title */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 8vw, 88px)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              margin: 0,
              color: "var(--white)",
            }}
          >
            {title}
          </h1>

          {/* Subtitle / meta line */}
          {subtitle && (
            <p
              style={{
                fontFamily: "var(--font-sub)",
                fontSize: "14px",
                color: "var(--g500)",
                lineHeight: 1.6,
                marginTop: "20px",
                marginBottom: 0,
                maxWidth: "620px",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Body content */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "clamp(40px, 6vw, 80px) clamp(24px, 6vw, 80px) clamp(60px, 8vw, 120px)",
        }}
      >
        {children}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `@keyframes docPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.35;transform:scale(0.85)} }` }} />
    </div>
  );
}
