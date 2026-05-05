"use client";
import { useEffect, useState } from "react";
import { useNav } from "@/context/NavContext";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import type { Page } from "@/lib/data";

const NAV_LINKS: { label: string; page: Page }[] = [
  { label: "Esports", page: "home" },
  { label: "Arenas", page: "compete" },
  { label: "Ladder", page: "roster" },
  { label: "Guilds", page: "about" },
];

export default function Navbar() {
  const { currentPage, navigate } = useNav();
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }) + " IST",
      );
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    navigate(page);
    setMenuOpen(false);
  };

  const getActive = (label: string) => {
    if (label === "Esports" && currentPage === "home") return true;
    if (label === "Arenas" && currentPage === "compete") return true;
    if (label === "Ladder" && currentPage === "roster") return true;
    if (
      (label === "Guilds" || label === "Campus" || label === "Payouts") &&
      currentPage === "about"
    )
      return true;
    return false;
  };

  return (
    <>
      {/* Tape (Desktop/Tablet only) */}
      {!isMobile && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px clamp(24px, 4vw, 56px)",
            borderBottom: "1px solid var(--g200)",
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "10.5px",
            letterSpacing: "-0.02em",
            color: "var(--g400)",
            textTransform: "uppercase",
            background: "var(--black)",
          }}
        >
          <span
            style={{
              color: "var(--red)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                background: "var(--red)",
                borderRadius: "99px",
                boxShadow: "0 0 8px 2px rgba(255,0,0,.7)",
                animation: "pulse 1.4s infinite",
              }}
            />
            SERVER STATUS — ALL ARENAS NORMAL
          </span>
          {!isTablet && <span>v2.4.1 · CORPSE.LTD</span>}
          <span style={{ display: "flex", gap: "22px" }}>
            <span>SHARD&nbsp;#0001 · MUMBAI</span>
            <span>02 MAY 2026 · {timeStr}</span>
          </span>
        </div>
      )}

      {/* Main Nav */}
      <nav
        style={{
          display: "grid",
          gridTemplateColumns:
            isMobile || isTablet ? "auto 1fr auto" : "auto 1fr auto",
          alignItems: "center",
          padding: `22px clamp(24px, 4vw, 56px)`,
          borderBottom: "1px solid var(--g200)",
          gap: "32px",
          background: "var(--black)",
          position: "relative",
          zIndex: 500,
        }}
      >
        {/* Brand */}
        <button
          onClick={() => handleNavigate("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "none",
            border: "none",
            cursor: "none",
            padding: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo.png"
            alt="Corpse Arena"
            style={{
              height: isMobile ? "32px" : "40px",
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
          {!isMobile && (
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              CORPSE ARENA
            </span>
          )}
        </button>

        {/* Desktop Links */}
        {!(isMobile || isTablet) ? (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              gap: "28px",
              justifySelf: "center",
            }}
          >
            {NAV_LINKS.map(({ label, page }) => {
              const active = getActive(label);
              return (
                <li key={label}>
                  <button
                    onClick={() => handleNavigate(page)}
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: "11px",
                      letterSpacing: "-0.02em",
                      textTransform: "uppercase",
                      color: active ? "#fff" : "var(--g400)",
                      transition: "color .15s",
                      background: "none",
                      border: "none",
                      cursor: "none",
                      padding: 0,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => {
                      if (!active) e.currentTarget.style.color = "var(--g400)";
                    }}
                  >
                    {active ? (
                      <>
                        <span style={{ color: "var(--red)" }}>/ </span>
                        {label}
                      </>
                    ) : (
                      label
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div />
        )}

        {/* Right Section: CTA & Hamburger */}
        <div
          style={{
            justifySelf: "end",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <button
            onClick={() => handleNavigate("compete")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--red)",
              color: "#fff",
              padding: "10px 16px 11px",
              borderRadius: "999px",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              border: "none",
              cursor: "none",
              transition: "transform .15s, box-shadow .15s",
              boxShadow: "0 0 0 0 rgba(255,0,0,0)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 24px 0 rgba(255,0,0,.6)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(.98)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "none")}
          >
            Enter Arena{" "}
            <span
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontWeight: 400,
              }}
            >
              →
            </span>
          </button>

          {(isMobile || isTablet) && (
            <button
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                background: "none",
                border: "none",
                cursor: "none",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "flex-end",
              }}
            >
              <span
                style={{
                  display: "block",
                  height: "2px",
                  background: "var(--white)",
                  transition: "all 200ms",
                  width: menuOpen ? "20px" : "24px",
                  transform: menuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "2px",
                  background: "var(--white)",
                  transition: "all 200ms",
                  width: "20px",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "2px",
                  background: "var(--white)",
                  transition: "all 200ms",
                  width: menuOpen ? "20px" : "16px",
                  transform: menuOpen
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                }}
              />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile/Tablet Dropdown */}
      {(isMobile || isTablet) && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 499,
            background: "var(--black)",
            borderBottom: "1px solid var(--g200)",
            maxHeight: menuOpen ? "400px" : "0",
            overflow: "hidden",
            transition: "max-height 350ms var(--ease)",
          }}
        >
          <div
            style={{
              padding: "16px clamp(24px, 4vw, 56px) 24px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {NAV_LINKS.map(({ label, page }) => {
              const active = getActive(label);
              return (
                <button
                  key={label}
                  onClick={() => handleNavigate(page)}
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "14px",
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                    color: active ? "#fff" : "var(--g400)",
                    background: "none",
                    border: "none",
                    cursor: "none",
                    textAlign: "left",
                    padding: "16px 0",
                    borderBottom: "1px solid var(--g200)",
                    display: "flex",
                    alignItems: "center",
                    transition: "color .15s",
                  }}
                >
                  {active ? (
                    <span style={{ color: "var(--red)", marginRight: "8px" }}>
                      /
                    </span>
                  ) : null}
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Global styles for pulse animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: .35; } }
      `,
        }}
      />
    </>
  );
}
