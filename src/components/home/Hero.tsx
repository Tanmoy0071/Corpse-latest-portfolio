"use client";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import StatsStrip from "@/components/home/StatsStrip";

export default function Hero() {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";

  const px = isMobile ? "24px" : isTablet ? "40px" : "80px";

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        background: "var(--black)",
      }}
    >
      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* Red glow */}
      <div
        style={{
          position: "absolute",
          top: isMobile ? "-10%" : "-20%",
          right: isMobile ? "-30%" : "-10%",
          width: isMobile ? "400px" : "700px",
          height: isMobile ? "400px" : "700px",
          background:
            "radial-gradient(circle, rgba(232,25,26,0.18) 0%, rgba(232,25,26,0.06) 40%, transparent 70%)",
          pointerEvents: "none",
          animation: "pulse 4s ease-in-out infinite alternate",
        }}
      />

      {/* Sparks */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/symbol.png"
          alt=""
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            width: "16px",
            height: "16px",
            filter: "drop-shadow(0 0 8px rgba(255,0,0,.6))",
            opacity: 0.8,
            animation: "pulse 3s infinite",
            objectFit: "contain",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/symbol.png"
          alt=""
          style={{
            position: "absolute",
            top: "35%",
            left: "8%",
            width: "22px",
            height: "22px",
            filter: "drop-shadow(0 0 8px rgba(255,0,0,.6))",
            opacity: 0.6,
            animation: "pulse 4s infinite 1s",
            objectFit: "contain",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/symbol.png"
          alt=""
          style={{
            position: "absolute",
            top: "40%",
            right: "35%",
            width: "26px",
            height: "26px",
            filter: "drop-shadow(0 0 8px rgba(255,0,0,.6))",
            opacity: 0.9,
            animation: "pulse 2.5s infinite 0.5s",
            objectFit: "contain",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/symbol.png"
          alt=""
          style={{
            position: "absolute",
            bottom: "25%",
            right: "45%",
            width: "18px",
            height: "18px",
            filter: "drop-shadow(0 0 8px rgba(255,0,0,.6))",
            opacity: 0.7,
            animation: "pulse 3.5s infinite 2s",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Content Grid Wrapper */}
      <div
        style={{
          padding: `120px ${px} ${isMobile ? "40px" : "80px"}`,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {/* Content Grid */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            display: "grid",
            gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr auto",
            gap: "40px",
            alignItems: "end",
          }}
        >
          {/* Left Side */}
          <div style={{ maxWidth: isMobile ? "100%" : "900px" }}>
            {/* Eyebrow */}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--red)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  width: "32px",
                  height: "1px",
                  background: "var(--red)",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              Season 3 · Now open
            </div>

            {/* Title */}
            <h1
              className="hero-title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(64px, 11vw, 160px)",
                color: "var(--white)",
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                lineHeight: 0.87,
                margin: "0 0 28px 0",
              }}
            >
              <span
                className="line"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(14px, 1.5vw, 28px)",
                }}
              >
                <span className="word">ENTER</span>
                <span
                  className="star"
                  style={{
                    width: "clamp(48px, 9vw, 140px)",
                    height: "clamp(48px, 9vw, 140px)",
                    display: "inline-block",
                    transform: "translateY(-0.05em)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/symbol.png"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      animation: "symbolGlow 2s ease-in-out infinite alternate",
                    }}
                  />
                </span>
              </span>
              <span className="line" style={{ display: "block" }}>
                <span className="word">THE</span>{" "}
                <span className="word" style={{ color: "var(--red)" }}>
                  ARENA
                </span>
              </span>
            </h1>
            <style
              dangerouslySetInnerHTML={{
                __html: `
          @keyframes symbolGlow {
            0%   { filter: drop-shadow(0 0 12px rgba(255,0,0,.6)) drop-shadow(0 0 28px rgba(255,0,0,.3)); }
            100% { filter: drop-shadow(0 0 32px rgba(255,0,0,1))  drop-shadow(0 0 60px rgba(255,0,0,.6)) drop-shadow(0 0 80px rgba(255,0,0,.3)); }
          }
          @keyframes tickerScroll {
            0%   { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
        `,
              }}
            />

            {/* Bottom row: manifesto + ticker */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: isMobile ? "24px" : "48px",
                marginTop: "36px",
                animation: "fadeIn 0.8s var(--ease) 0.6s both",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              {/* Manifesto paragraph */}
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: isMobile ? "15px" : "17px",
                  color: "#fff",
                  lineHeight: 1.65,
                  maxWidth: isMobile ? "100%" : "420px",
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                A red-on-black mobile esports arena built for India&apos;s
                sweatiest squads. Tournaments daily. Ladder weekly.{" "}
                <span style={{ color: "var(--red)" }}>
                  Payouts in ₹, settled by morning.
                </span>
              </p>

              {/* Rolling ticker */}
              {!isMobile && (
                <div
                  style={{
                    borderLeft: "1px solid var(--g200)",
                    paddingLeft: "32px",
                    height: "46px",
                    overflow: "hidden",
                    flexShrink: 0,
                    minWidth: "240px",
                  }}
                >
                  <div
                    style={{
                      animation: "tickerScroll 8s linear infinite",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {[
                      { label: "REGN.", status: "OPEN", text: "CODM CUP R02" },
                      { label: "REGN.", status: "CLOSING", text: "FF WEEKLY" },
                      {
                        label: "LIVE",
                        status: "NOW",
                        text: "BGMI INVITATIONAL",
                      },
                      {
                        label: "REGN.",
                        status: "OPEN",
                        text: "VALORANT CLASH",
                      },
                      { label: "REGN.", status: "OPEN", text: "CODM CUP R02" },
                      { label: "REGN.", status: "CLOSING", text: "FF WEEKLY" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        style={{
                          fontFamily: '"JetBrains Mono", monospace',
                          fontSize: "11px",
                          letterSpacing: "0.06em",
                          color: "var(--g400)",
                          textTransform: "uppercase",
                          whiteSpace: "nowrap",
                          display: "flex",
                          gap: "6px",
                        }}
                      >
                        <span style={{ color: "var(--g300)" }}>
                          // {item.label}
                        </span>
                        <span style={{ color: "var(--red)" }}>
                          {item.status}
                        </span>
                        <span>· {item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side (Stats) */}
          {!(isMobile || isTablet) && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "280px",
                paddingBottom: "8px",
              }}
            >
              <div
                style={{
                  borderTop: "1px solid var(--g200)",
                  paddingTop: "12px",
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "10.5px",
                  letterSpacing: "-0.02em",
                  color: "var(--g400)",
                  textTransform: "uppercase",
                }}
              >
                <span>Live arenas now</span>
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "32px",
                    color: "#fff",
                    fontWeight: 500,
                    letterSpacing: "-0.04em",
                    display: "block",
                    marginTop: "4px",
                    lineHeight: 1,
                  }}
                >
                  412{" "}
                  <small
                    style={{
                      fontSize: "11px",
                      color: "var(--g400)",
                      marginLeft: "4px",
                      letterSpacing: "-0.02em",
                      fontWeight: 400,
                    }}
                  >
                    / 480
                  </small>
                </span>
              </div>
              <div
                style={{
                  borderTop: "1px solid var(--g200)",
                  paddingTop: "12px",
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "10.5px",
                  letterSpacing: "-0.02em",
                  color: "var(--g400)",
                  textTransform: "uppercase",
                }}
              >
                <span>This week's pool</span>
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "32px",
                    color: "var(--red)",
                    fontWeight: 500,
                    letterSpacing: "-0.04em",
                    display: "block",
                    marginTop: "4px",
                    lineHeight: 1,
                  }}
                >
                  ₹ 18.4L
                </span>
              </div>
              <div
                style={{
                  borderTop: "1px solid var(--g200)",
                  paddingTop: "12px",
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "10.5px",
                  letterSpacing: "-0.02em",
                  color: "var(--g400)",
                  textTransform: "uppercase",
                }}
              >
                <span>Active squads</span>
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "32px",
                    color: "#fff",
                    fontWeight: 500,
                    letterSpacing: "-0.04em",
                    display: "block",
                    marginTop: "4px",
                    lineHeight: 1,
                  }}
                >
                  22,839
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Scroll indicator — hidden on mobile */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              bottom: "160px",
              right: px,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              zIndex: 2,
              animation: "fadeIn 1s var(--ease) 1.2s both",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: "var(--g400)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                writingMode: "vertical-rl",
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: "1px",
                height: "48px",
                background:
                  "linear-gradient(to bottom, var(--red), transparent)",
                animation: "scrollLine 1.5s ease-in-out infinite",
              }}
            />
          </div>
        )}
      </div>

      <StatsStrip />
    </section>
  );
}
