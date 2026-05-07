import { Metadata } from "next";
import DocShell from "@/components/layout/DocShell";

export const metadata: Metadata = {
  title: "Contact Support | Corpse",
  description: "Contact Corpse support for help with your account or platform queries.",
};

export default function PolicyPage() {
  return (
    <DocShell
      title="Contact Support"
      badge="Support"
      subtitle="Get in touch with the Corpse support team for help with your account or platform queries."
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "480px",
            border: "1px solid var(--g200)",
            borderRadius: "16px",
            padding: "40px 32px",
            textAlign: "center",
            background: "var(--g100)",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(232,25,26,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--red)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "20px", height: "20px" }}
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-sub)",
              fontSize: "14px",
              color: "var(--g500)",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            Have a question or issue? Send us an email and we&apos;ll get back to
            you within 24–48 hours.
          </p>

          {/* Button */}
          <a
            href="mailto:support@corpsearena.com"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              padding: "14px 20px",
              borderRadius: "10px",
              background: "var(--red)",
              color: "var(--white)",
              fontFamily: "var(--font-ui)",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "opacity 150ms",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "16px", height: "16px" }}
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
            support@corpsearena.com
          </a>
        </div>
      </div>
    </DocShell>
  );
}
