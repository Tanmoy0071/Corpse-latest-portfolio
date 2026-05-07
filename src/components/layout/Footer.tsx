"use client";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useNav } from "@/context/NavContext";

export default function Footer() {
  const bp = useBreakpoint();
  const { navigate } = useNav();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const px = isMobile ? "24px" : isTablet ? "40px" : "80px";

  return (
    <footer
      style={{
        background: "var(--black)",
        borderTop: "1px solid var(--g200)",
      }}
    >
      {/* CTA Hero Block */}
      <div
        style={{
          position: "relative",
          padding: `${isMobile ? "60px" : "80px"} ${px} ${isMobile ? "48px" : "60px"}`,
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            pointerEvents: "none",
          }}
        />

        {/* Decorative symbol sparks */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/symbol.png"
            alt=""
            style={{
              position: "absolute",
              top: "18%",
              right: "38%",
              width: "18px",
              height: "18px",
              filter: "drop-shadow(0 0 6px rgba(255,0,0,.7))",
              opacity: 0.85,
              animation: "footerPulse 3s infinite",
              objectFit: "contain",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/symbol.png"
            alt=""
            style={{
              position: "absolute",
              bottom: "28%",
              right: "22%",
              width: "24px",
              height: "24px",
              filter: "drop-shadow(0 0 8px rgba(255,0,0,.6))",
              opacity: 0.7,
              animation: "footerPulse 4s infinite 1.2s",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Big headline */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: isMobile ? "clamp(56px, 14vw, 96px)" : "clamp(80px, 13vw, 180px)",
            color: "var(--white)",
            textTransform: "uppercase",
            letterSpacing: "-0.03em",
            lineHeight: 0.88,
            margin: 0,
            position: "relative",
            zIndex: 2,
          }}
        >
          ARENA
          <br />
          STARTS
          <br />
          <span style={{ color: "var(--red)" }}>TONIGHT.</span>
        </h2>

        {/* Middle row: 3 columns — description | store badges | shard info */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "flex-end",
            justifyContent: "space-between",
            marginTop: isMobile ? "36px" : "48px",
            gap: isMobile ? "28px" : "32px",
          }}
        >
          {/* Left: description text only */}
          <div style={{ maxWidth: "280px", flexShrink: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-sub)",
                fontSize: "13px",
                color: "var(--g400)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <strong style={{ color: "var(--white)", fontWeight: 600 }}>
                Download the app.
              </strong>{" "}
              Pick a mode. Drop in. Squads queue across BGMI, CODM and Free Fire
              – campus brackets every Sunday, payouts settled by morning.
            </p>
          </div>

          {/* Centre: store badges */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "flex-end" }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "var(--g100)",
                border: "1px solid var(--g200)",
                padding: "10px 16px",
                color: "var(--white)",
                textDecoration: "none",
                transition: "border-color 150ms",
                cursor: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--g400)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--g200)")
              }
            >
              <span style={{ fontSize: "20px", lineHeight: 1 }}>▶</span>
              <span style={{ display: "flex", flexDirection: "column" }}>
                <small
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "8px",
                    color: "var(--g400)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  GET IT ON
                </small>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Google Play
                </span>
              </span>
            </a>

            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "var(--g100)",
                border: "1px solid var(--g200)",
                padding: "10px 16px",
                color: "var(--white)",
                textDecoration: "none",
                transition: "border-color 150ms",
                cursor: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--g400)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--g200)")
              }
            >
              <span style={{ fontSize: "20px", lineHeight: 1 }}></span>
              <span style={{ display: "flex", flexDirection: "column" }}>
                <small
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "8px",
                    color: "var(--g400)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  DOWNLOAD ON
                </small>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  App Store
                </span>
              </span>
            </a>
          </div>

          {/* Right: Shard info */}
          <div style={{ textAlign: isMobile ? "left" : "right", flexShrink: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: isMobile ? "18px" : "22px",
                color: "var(--white)",
                letterSpacing: "-0.01em",
                marginBottom: "6px",
              }}
            >
              Shard 0001 –{" "}
              <span style={{ color: "var(--red)" }}>Mumbai.</span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: "var(--g400)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                lineHeight: 1.8,
              }}
            >
              OPERATED BY CORPSE_LTD
              <br />
              POWERED BY CORPSE CAMPUS ARENA
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation Grid */}
      <div
        style={{
          borderTop: "1px solid var(--g200)",
          padding: `60px ${px}`,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "40px",
        }}
      >
        {/* PLATFORM */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h4 style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--g300)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Platform</h4>
          {(
            [
              { label: "PRIVACY POLICY", page: "privacypolicy" },
              { label: "TERMS OF SERVICE", page: "terms&condition" },
              { label: "HELP CENTRE", page: "support" },
              { label: "CONTACT US", page: "contactsupport" },
            ] as { label: string; page: string }[]
          ).map(({ label, page }) => (
            <a
              key={label}
              href={`/${page}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                background: "none", border: "none", padding: 0, margin: 0, cursor: "none",
                fontFamily: "var(--font-mono)", fontSize: "9.5px", color: "var(--g500)",
                letterSpacing: "0.04em", textTransform: "uppercase", textAlign: "left",
                transition: "color 150ms",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--g500)")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* ACCOUNTS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h4 style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--g300)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Accounts</h4>
          {(
            [
              { label: "ACCOUNT POLICY", page: "creation&deletion" },
              { label: "KYC POLICY", page: "kycmodification" },
              { label: "SIGN OUT POLICY", page: "signout" },
              { label: "SUSPENSIONS", page: "suspension&ban" },
            ] as { label: string; page: string }[]
          ).map(({ label, page }) => (
            <a
              key={label}
              href={`/${page}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                background: "none", border: "none", padding: 0, margin: 0, cursor: "none",
                fontFamily: "var(--font-mono)", fontSize: "9.5px", color: "var(--g500)",
                letterSpacing: "0.04em", textTransform: "uppercase", textAlign: "left",
                transition: "color 150ms",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--g500)")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* COMPETITIVE */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h4 style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--g300)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Competitive</h4>
          {(
            [
              { label: "ARENA RULES", page: "arena" },
              { label: "GUILD POLICY", page: "guildpolicy" },
              { label: "FAIR PLAY", page: "contestrules" },
            ] as { label: string; page: string }[]
          ).map(({ label, page }) => (
            <a
              key={label}
              href={`/${page}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                background: "none", border: "none", padding: 0, margin: 0, cursor: "none",
                fontFamily: "var(--font-mono)", fontSize: "9.5px", color: "var(--g500)",
                letterSpacing: "0.04em", textTransform: "uppercase", textAlign: "left",
                transition: "color 150ms",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--g500)")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* LEGAL & FINANCE */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h4 style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--g300)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Legal & Finance</h4>
          {(
            [
              { label: "TRANSACTIONS", page: "transaction" },
              { label: "IP & COPYRIGHT", page: "ipandcopyright" },
              { label: "LEGALS", page: "legals" },
            ] as { label: string; page: string }[]
          ).map(({ label, page }) => (
            <a
              key={label}
              href={`/${page}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                background: "none", border: "none", padding: 0, margin: 0, cursor: "none",
                fontFamily: "var(--font-mono)", fontSize: "9.5px", color: "var(--g500)",
                letterSpacing: "0.04em", textTransform: "uppercase", textAlign: "left",
                transition: "color 150ms",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--g500)")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--g200)",
          padding: `14px ${px}`,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9.5px",
            color: "var(--g400)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          INTELLECTUAL PROPERTY &amp; COPYRIGHT{" "}
          <span style={{ color: "var(--white)", fontWeight: 700 }}>
            @CORPSE
          </span>
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9.5px",
            color: "var(--g300)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          V2.4.1 · BUILD 0481
        </span>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes footerPulse {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50%       { opacity: 0.3;  transform: scale(0.85); }
        }
      `,
        }}
      />
    </footer>
  );
}
