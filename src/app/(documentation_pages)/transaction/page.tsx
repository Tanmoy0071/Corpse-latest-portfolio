import { Metadata } from "next";
import DocShell from "@/components/layout/DocShell";

export const metadata: Metadata = {
  title: "Money Deposit & Receive Policy | Corpse",
  description: "Money Deposit & Receive Policy for the Corpse platform.",
};

export default function PolicyPage() {
  return (
    <DocShell
      title="Transaction Policy"
      badge="Legal · Financial"
      subtitle="Money Deposit & Receive Policy governing all financial transactions on the Corpse platform."
    >
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <strong>CORPSE </strong>
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>The Operating System for Esports</em>
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <strong>Money Deposit &amp;</strong>
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <strong>Receive Policy</strong>
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Entry Fees • Escrow • Prize Disbursement • Organiser Settlement •
        Refunds
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>Binding on: Players | Organisers | All Financial Participants</em>
      </p>
      {/* <div style={{ overflowX: "auto", marginBottom: "32px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--g100)", border: "1px solid rgba(232,25,26,0.2)", fontSize: "14px" }}>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--g200)" }}>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    <strong>Legal Entity</strong>
                  </p>
                </td>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>[CORPSE ESPORTS PRIVATE LIMITED]</p>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--g200)" }}>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    <strong>CIN</strong>
                  </p>
                </td>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    [CIN: TO BE UPDATED UPON NEW ENTITY REGISTRATION]
                  </p>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--g200)" }}>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    <strong>GSTIN</strong>
                  </p>
                </td>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>[GSTIN: TO BE UPDATED]</p>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--g200)" }}>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    <strong>Address</strong>
                  </p>
                </td>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    Silchar Road Ghat Line, Subashnagar, Karimganj - 788710,
                    Assam, India
                  </p>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--g200)" }}>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    <strong>Payment Gateway</strong>
                  </p>
                </td>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>Razorpay India Private Limited</p>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--g200)" }}>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    <strong>Governed By</strong>
                  </p>
                </td>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    RBI Guidelines | PMLA 2002 | GST Act 2017 | Income Tax Act
                    1961 | IT Act 2000
                  </p>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--g200)" }}>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    <strong>Jurisdiction</strong>
                  </p>
                </td>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>India exclusively</p>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--g200)" }}>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    <strong>Effective Date</strong>
                  </p>
                </td>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>May 1, 2026</p>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--g200)" }}>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    <strong>Last Updated</strong>
                  </p>
                </td>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>April 2026</p>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--g200)" }}>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    <strong>Support Contact</strong>
                  </p>
                </td>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}><a href="mailto:support@corpsearena.com" style={{ color: "var(--red)" }}>support@corpsearena.com</a></p>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--g200)" }}>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    <strong>Legal Contact</strong>
                  </p>
                </td>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}><a href="mailto:legal@corpsearena.com" style={{ color: "var(--red)" }}>legal@corpsearena.com</a></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>
          This Policy governs all financial transactions on the Corpse platform
          including entry fee payments, organiser security deposits, prize money
          disbursement, organiser settlement, and refunds. By participating in
          any financial transaction on the Platform, you agree to be bound by
          this Policy in its entirety.
        </em>
      </p>
      <h2
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 600,
          color: "var(--white)",
          borderBottom: "1px solid rgba(232,25,26,0.35)",
          paddingBottom: "12px",
          marginTop: "56px",
          marginBottom: "24px",
        }}
      >
        PART I — OVERVIEW &amp; SCOPE
      </h2>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>1. What This Policy Covers</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        This Money Deposit &amp; Receive Policy ("Policy") governs all financial
        transactions on the Corpse platform operated by [CORPSE ESPORTS PRIVATE
        LIMITED] ("Company", "we", "us", "our"). It applies to every person who
        participates in any financial transaction on the Platform, including
        players who pay entry fees, organisers who deposit security pools, and
        winners who receive prize money.
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        This Policy covers the following transactions and processes:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Player entry fee payment per tournament via Razorpay</li>
        <li>Organiser security deposit for prize pool funding</li>
        <li>Escrow account structure and money flow</li>
        <li>Platform commission and tax deduction structure</li>
        <li>Prize money disbursement to winning Captains</li>
        <li>Organiser post-arena settlement</li>
        <li>Cancellation and refund scenarios</li>
        <li>Failed payment handling</li>
        <li>KYC requirements for financial participation</li>
        <li>Tax obligations — TDS and GST</li>
      </ul>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>2. </strong>
      </h3>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>3. Governing Legal Framework</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        All financial transactions on the Platform are conducted in compliance
        with the following laws and regulations:
      </p>
      <div style={{ overflowX: "auto", marginBottom: "32px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "var(--g100)",
            border: "1px solid rgba(232,25,26,0.2)",
            fontSize: "14px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Law / Regulation</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Relevance to This Policy</strong>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Reserve Bank of India (RBI) Guidelines
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Escrow account, nodal account, and payment aggregator
                  compliance
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Prevention of Money Laundering Act, 2002 (PMLA)
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  KYC requirements, financial transaction monitoring, and
                  suspicious transaction reporting
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Goods and Services Tax Act, 2017
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  GST on platform commission — 28% on the commission portion
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Income Tax Act, 1961 — Section 194B / 194BA
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  TDS 30% deduction on prize winnings from games and
                  competitions
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Information Technology Act, 2000
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Digital payment security, electronic records, and online
                  transaction compliance
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Payment and Settlement Systems Act, 2007
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Regulation of payment systems and Razorpay&apos;s operation as
                  a payment aggregator
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Online Gaming (Regulation) Act, 2025
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Compliance with e-sports platform regulations — Corpse is
                  classified as e-sports, not online money gaming
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>
          Corpse is classified as an e-sports platform under the Online Gaming
          (Regulation) Act, 2025. Under Section 2(g) of that Act, e-sports is
          explicitly excluded from the definition of &apos;online money
          game&apos;. This distinction is legally significant and governs how
          Corpse&apos;s entry fee and prize structure is treated under Indian
          law.
        </em>
      </p>
      <h2
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 600,
          color: "var(--white)",
          borderBottom: "1px solid rgba(232,25,26,0.35)",
          paddingBottom: "12px",
          marginTop: "56px",
          marginBottom: "24px",
        }}
      >
        PART II — ESCROW ACCOUNT &amp; MONEY FLOW
      </h2>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>4. The Escrow Structure</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        All money transacted on the Platform — including player entry fees,
        organiser security deposits, prize pools, and settlement amounts — is
        held in a single nodal/escrow bank account owned and operated by the
        Company ("Escrow Account"). This account is maintained in compliance
        with RBI guidelines for payment aggregators and nodal accounts.
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        The Escrow Account functions as a trust account — money deposited into
        it is held on behalf of the relevant parties (players, organisers, and
        winners) until the conditions for its release are met. The Company does
        not treat escrow funds as its own revenue until commission deductions
        are formally processed.
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>
          Note: The escrow structure ensures that prize money is always
          available before an arena goes live — the organiser&apos;s security
          deposit must be in escrow before player registration opens. This
          protects players from the risk of participating in an arena where
          prize money is not guaranteed.
        </em>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>5. When Money Moves — Trigger Events</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Money enters and exits the Escrow Account only upon specific trigger
        events. The following table details every money movement:
      </p>
      <div style={{ overflowX: "auto", marginBottom: "32px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "var(--g100)",
            border: "1px solid rgba(232,25,26,0.2)",
            fontSize: "14px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Event</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Direction</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Amount</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Trigger</strong>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Organiser deposits security pool
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  IN to Escrow
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Organiser&apos;s chosen preset amount
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Organiser confirms deposit before arena goes live
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Player pays entry fee
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  IN to Escrow
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Entry fee amount (PG fee paid separately)
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Player completes Razorpay payment for tournament slot
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Prize disbursement to Captain
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  OUT of Escrow
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Prize amount minus TDS 30% minus Rs 5.90
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Corpse verifies match result and releases prize
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Organiser settlement
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  OUT of Escrow
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Entry pool minus 10% commission minus GST
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Arena concludes and result is verified — within 24 hours
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Platform commission transfer
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  OUT of Escrow
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Net commission after GST
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Processed simultaneously with organiser settlement
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Arena cancellation refund — player
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  OUT of Escrow
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Full entry fee amount
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Arena is cancelled by any party — within 24 hours
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Organiser cancellation refund
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  OUT of Escrow
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  70% of security deposit
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Organiser cancels after deposit but before registration
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Full organiser refund
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  OUT of Escrow
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  100% of security deposit
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Corpse cancels arena due to platform issue
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>6. What Escrow Is Not</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        The Escrow Account is strictly a transactional holding account. It is
        not:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          A bank account earning interest — no interest accrues on escrow
          holdings in favour of players or organisers.
        </li>
        <li>
          A savings or investment account — the Company does not invest escrow
          funds.
        </li>
        <li>
          A personal account — players and organisers do not have direct access
          to escrow funds. All disbursements are processed by the Company.
        </li>
        <li>
          A guarantee of unlimited liability — the Company&apos;s liability is
          limited to the amounts held in escrow for the specific transaction in
          question.
        </li>
      </ul>
      <h2
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 600,
          color: "var(--white)",
          borderBottom: "1px solid rgba(232,25,26,0.35)",
          paddingBottom: "12px",
          marginTop: "56px",
          marginBottom: "24px",
        }}
      >
        PART III — PLAYER ENTRY FEE PAYMENT
      </h2>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>7. How Entry Fees Work</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Players pay an entry fee to join a paid arena tournament on the
        Platform. Entry fees are paid directly per tournament. Each time a
        player joins a paid arena, a fresh payment transaction is initiated
        through Razorpay.
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Entry fees are set by the organiser from a fixed preset of approved
          amounts. Organisers cannot set arbitrary entry fee amounts outside the
          preset options.
        </li>
        <li>
          Entry fees are collected in the Escrow Account immediately upon
          successful payment confirmation from Razorpay.
        </li>
        <li>
          The entry fee amount displayed to the player in the app is the base
          entry fee. The 2% payment gateway charge is displayed separately and
          is paid by the player on top of the base entry fee.
        </li>
        <li>
          Only KYC-verified users can pay entry fees and participate in paid
          arenas as Captain. Minor Users cannot pay entry fees independently.
        </li>
      </ul>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>8. Supported Payment Methods</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Entry fee payments are processed through Razorpay India Private Limited.
        The following payment methods are supported:
      </p>
      <div style={{ overflowX: "auto", marginBottom: "32px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "var(--g100)",
            border: "1px solid rgba(232,25,26,0.2)",
            fontSize: "14px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Payment Method</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Details</strong>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  UPI
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  All UPI-enabled apps including Google Pay, PhonePe, Paytm,
                  BHIM, and bank UPI apps
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Net Banking
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  All major Indian banks supported through Razorpay&apos;s net
                  banking integration
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Debit Cards
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Visa, Mastercard, and RuPay debit cards issued by Indian banks
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Credit Cards
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Visa, Mastercard, and American Express credit cards
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Mobile Wallets
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Paytm, Mobikwik, and other Razorpay-supported mobile wallets
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>
          Note: Payment method availability may vary based on Razorpay&apos;s
          current supported options and any RBI directives. The Company is not
          responsible for the unavailability of any specific payment method due
          to Razorpay&apos;s system or banking partner constraints.
        </em>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>9. Payment Gateway Charges</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        A payment gateway processing fee of 2% of the entry fee amount is
        charged on every entry fee transaction. This charge is:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Paid by the player — it is added on top of the base entry fee at the
          time of payment.
        </li>
        <li>
          Collected by Razorpay India Private Limited as their service fee for
          processing the transaction.
        </li>
        <li>Not retained by the Company — the 2% goes entirely to Razorpay.</li>
        <li>
          Clearly displayed to the player before payment confirmation — players
          see the base entry fee and the PG charge separately.
        </li>
      </ul>
      <div style={{ overflowX: "auto", marginBottom: "32px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "var(--g100)",
            border: "1px solid rgba(232,25,26,0.2)",
            fontSize: "14px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Example</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Amount</strong>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Base entry fee
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 59.00
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  PG charge (2%)
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 1.18
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Total player pays
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 60.18
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Amount received in escrow
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 59.00
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Amount received by Razorpay
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 1.18
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>10. Payment Confirmation</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Upon successful completion of an entry fee payment:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Razorpay sends a server-to-server webhook confirmation to the Platform
          backend.
        </li>
        <li>
          The Platform verifies the webhook signature to confirm the payment is
          genuine and not spoofed.
        </li>
        <li>
          The player&apos;s squad registration is activated and their tournament
          slot is confirmed atomically within a single database transaction.
        </li>
        <li>
          A payment receipt and registration confirmation is sent to the
          player&apos;s registered email address within a few minutes of payment
          confirmation.
        </li>
        <li>
          The player receives an in-app notification confirming their slot
          registration.
        </li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>
          Note: Email receipts are transactional communications and cannot be
          opted out of. They serve as the official record of your entry fee
          payment.
        </em>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>11. Failed Payment Handling</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        If a payment attempt fails — due to insufficient funds, network issues,
        bank decline, or any other reason:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          The payment session is marked as failed in the Platform&apos;s system.
        </li>
        <li>
          Any reserved tournament slot is immediately released and made
          available to other players.
        </li>
        <li>
          The player is notified in-app and may retry the payment subject to
          slot availability.
        </li>
        <li>
          If money was debited from the player&apos;s account but the payment
          was not confirmed by Razorpay&apos;s webhook — the amount will be
          automatically refunded by Razorpay to the player&apos;s original
          payment source within 5 to 7 working days.
        </li>
        <li>
          The Company is not responsible for delays in failed payment refunds
          caused by the banking system, Razorpay&apos;s processing timelines, or
          the player&apos;s bank&apos;s processing schedule.
        </li>
      </ul>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>12. Payment Disputes</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        If a player believes they have been incorrectly charged, charged twice,
        or charged for a slot they did not receive, they may raise a payment
        dispute through the following process:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Step 1 — Raise a dispute via in-app support within 48 hours of the
          disputed transaction.
        </li>
        <li>
          Step 2 — Provide the payment reference number (available in the email
          receipt) and a description of the issue.
        </li>
        <li>
          Step 3 — The Company will investigate the dispute in coordination with
          Razorpay and respond within 48 hours.
        </li>
        <li>
          Step 4 — If the dispute is valid, a refund will be processed within 5
          to 7 working days to the original payment source.
        </li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <strong>
          Important: Raising a chargeback directly with your bank without first
          raising a dispute through in-app support is a violation of this
          Policy. Entry fees are transferred to the escrow account immediately
          upon payment confirmation — any bank-initiated chargeback will be
          disputed by the Company through Razorpay&apos;s chargeback resolution
          process, and the player&apos;s account may be suspended pending
          resolution.
        </strong>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>13. KYC Requirement for Entry Fee Payment</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        KYC verification is mandatory for any player who wishes to pay an entry
        fee and participate as a Captain in a paid arena. KYC involves the
        submission of government-issued identity documents and bank account
        details to Razorpay, our payment gateway partner.
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Minor Users (below 18 years of age) cannot complete KYC verification
          and therefore cannot pay entry fees independently or act as Captain.
        </li>
        <li>
          KYC is processed and stored exclusively by Razorpay in compliance with
          RBI and PMLA requirements. The Company does not store KYC documents on
          its own servers.
        </li>
        <li>
          KYC verification must be complete before a player&apos;s first entry
          fee payment. The Platform will not permit entry fee payment from
          non-KYC-verified users.
        </li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>
          Note: For KYC submission, modification, and related terms, refer to
          the Corpse KYC Modification Terms &amp; Conditions.
        </em>
      </p>
      <h2
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 600,
          color: "var(--white)",
          borderBottom: "1px solid rgba(232,25,26,0.35)",
          paddingBottom: "12px",
          marginTop: "56px",
          marginBottom: "24px",
        }}
      >
        PART IV — ORGANISER SECURITY DEPOSIT
      </h2>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>14. Nature of the Security Deposit</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Before an arena can go live for player registration, the organiser must
        deposit a security amount into the Platform&apos;s Escrow Account. This
        deposit serves a dual purpose:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          It functions as the prize pool for the arena — the deposited amount
          (or the portion designated as prize pool within the preset) is what
          winning players receive as prize money.
        </li>
        <li>
          It acts as a commitment mechanism — by depositing upfront, the
          organiser commits to running the arena to completion and ensures prize
          money is guaranteed and available before a single player registers.
        </li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        The security deposit is not a fee charged by the Company — it is the
        organiser&apos;s own money held in escrow on their behalf. After the
        arena concludes, the organiser receives their settlement (entry pool
        minus deductions) in addition to the prize pool having been disbursed
        from their deposit.
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>15. Deposit Rules &amp; Restrictions</strong>
      </h3>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          The organiser must deposit the full required security amount before
          the arena is published for player registration. No arena can go live
          without a confirmed escrow deposit.
        </li>
        <li>
          Once the deposit is made and the arena goes live, the organiser cannot
          withdraw, modify, or reduce the deposit amount under any circumstance.
        </li>
        <li>
          Once player registration has opened, the organiser cannot cancel the
          arena. The arena must run to completion.
        </li>
        <li>
          A bank transfer fee of Rs 5.90 is charged on the organiser&apos;s
          deposit transaction. This fee is paid by the organiser and is separate
          from the deposit amount itself.
        </li>
        <li>
          The deposit amount is determined by the preset chosen by the
          organiser. Organisers cannot set arbitrary deposit amounts outside the
          available preset options.
        </li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <strong>
          Important: An organiser who attempts to cancel an arena after players
          have registered will not be permitted to do so. The Platform enforces
          this restriction technically — cancellation is disabled once player
          registration is open. This protects registered players from losing
          their tournament slots and entry fees.
        </strong>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>16. Preset-Based Deposit Structure</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        The Company maintains a set of approved arena presets. Each preset
        defines the entry fee amount, the security deposit required from the
        organiser, the prize pool structure, and the maximum number of
        participating squads. Organisers must select from these presets when
        creating an arena.
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        The preset system ensures:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Prize pools are proportionate to entry fees and organiser deposits —
          no arena can be created with an underfunded prize pool.
        </li>
        <li>
          Financial integrity of every arena is maintained — the Company can
          verify that every arena&apos;s prize pool is fully funded before it
          goes live.
        </li>
        <li>
          Consistency in the financial experience for players — players can
          trust that every paid arena they join has a guaranteed prize pool
          backed by the organiser&apos;s escrow deposit.
        </li>
      </ul>
      <h2
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 600,
          color: "var(--white)",
          borderBottom: "1px solid rgba(232,25,26,0.35)",
          paddingBottom: "12px",
          marginTop: "56px",
          marginBottom: "24px",
        }}
      >
        PART V — PLATFORM COMMISSION &amp; TAX STRUCTURE
      </h2>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>17. Commission on Entry Pool</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        The Company charges a platform commission of 10% on the total entry pool
        collected from all player entry fees in each arena. This commission is
        deducted from the entry pool within the escrow before the remaining
        amount is settled to the organiser.
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        GST at 28% is applicable on the platform commission. This GST is
        calculated inclusively within the commission amount — it is not charged
        on top of the 10% commission. The net platform revenue after GST is
        therefore:
      </p>
      <div style={{ overflowX: "auto", marginBottom: "32px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "var(--g100)",
            border: "1px solid rgba(232,25,26,0.2)",
            fontSize: "14px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Item</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Formula</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Example (100 players x Rs 59)</strong>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Total entry pool
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Players x entry fee
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 5,900
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Platform commission (10%)
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Entry pool x 10%
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 590
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  GST inside commission (28%)
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Commission x 28 / 128
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 129.06
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Net platform revenue
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Commission minus GST
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 460.94
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Remaining entry pool
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Entry pool minus commission
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 5,309.06
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>18. Commission on Organiser Profit</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        In addition to the commission on the entry pool, the Company charges a
        10% commission on the organiser&apos;s net profit from the arena. The
        organiser&apos;s net profit is calculated as:
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Organiser Profit = Remaining Entry Pool (after platform commission)
        minus Prize Pool (organiser&apos;s security deposit)
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        A further 10% commission is charged on this profit, and GST at 28%
        applies inside this commission as well.
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>19. Full Worked Example</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        The following is a complete worked example of all financial flows in a
        single arena with 25 squads (100 players) at Rs 59 entry fee, with an
        organiser security deposit of Rs 4,000:
      </p>
      <div style={{ overflowX: "auto", marginBottom: "32px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "var(--g100)",
            border: "1px solid rgba(232,25,26,0.2)",
            fontSize: "14px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Item</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Calculation</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Amount</strong>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Gross entry pool
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  100 players x Rs 59
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 5,900.00
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Platform commission (10%)
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 5,900 x 10%
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 590.00
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  GST inside commission (28%)
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 590 x 28/128
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 129.06
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Net platform revenue from entry pool
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 590 minus Rs 129.06
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 460.94
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Remaining entry pool after commission
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 5,900 minus Rs 590
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 5,310.00
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Organiser gross profit
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 5,310 minus Rs 4,000 (prize pool)
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 1,310.00
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Platform commission on org profit (10%)
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 1,310 x 10%
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 131.00
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  GST on org profit commission (28%)
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 131 x 28/128
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 28.67
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Net platform revenue from org profit
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 131 minus Rs 28.67
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 102.33
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Organiser net profit after commission
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 1,310 minus Rs 131 minus Rs 28.67
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 1,150.33
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Bank payout fee
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Fixed
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 5.90
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Organiser final settlement
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Security deposit refund + net profit minus bank fee
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 4,000 + Rs 1,150.33 minus Rs 5.90 = Rs 5,144.43
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Total platform earned
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Net entry commission + net org commission
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 460.94 + Rs 102.33 = Rs 563.27
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>
          Note: Prize pool disbursement (from organiser&apos;s Rs 4,000 deposit)
          is handled separately — 1st place receives 50%, 2nd place 30%, 3rd
          place 20% by default, subject to TDS deduction and bank payout fee per
          winner.
        </em>
      </p>
      <h2
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 600,
          color: "var(--white)",
          borderBottom: "1px solid rgba(232,25,26,0.35)",
          paddingBottom: "12px",
          marginTop: "56px",
          marginBottom: "24px",
        }}
      >
        PART VI — PRIZE MONEY DISBURSEMENT — PLAYERS
      </h2>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>20. Prize Pool Source</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        The prize pool for every arena on the Platform is funded entirely and
        exclusively from the organiser&apos;s security deposit held in escrow.
        Player entry fees do not contribute to the prize pool — they form the
        organiser&apos;s revenue (after platform commission deductions). This
        structure ensures:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Prize money is always pre-funded and available before any player
          registers.
        </li>
        <li>
          Players can trust that participating in a paid arena guarantees prize
          money exists — it is held in escrow from the moment the arena goes
          live.
        </li>
        <li>
          The prize pool amount is fixed and determined by the organiser&apos;s
          preset selection — it cannot be reduced after the arena goes live.
        </li>
      </ul>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>21. Winner Count &amp; Prize Split</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Organisers may configure the number of prize-winning positions and the
        prize split percentage for each winner position, within the options
        provided by their selected preset. The default prize distribution is:
      </p>
      <div style={{ overflowX: "auto", marginBottom: "32px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "var(--g100)",
            border: "1px solid rgba(232,25,26,0.2)",
            fontSize: "14px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Position</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Default Split</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Example (Rs 4,000 prize pool)</strong>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  1st Place
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  50%
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 2,000
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  2nd Place
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  30%
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 1,200
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  3rd Place
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  20%
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 800
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Organisers may customise the number of winner positions (up to 5
        winners) and the prize split percentages using credits, subject to the
        preset options available. Custom prize structures must be set before the
        arena goes live and cannot be modified after player registration opens.
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>
          Note: Regardless of customisation, total prize distribution across all
          winner positions must always equal 100% of the designated prize pool
          amount. The Platform enforces this constraint technically.
        </em>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>22. Result Verification Before Disbursement</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Prize money is not disbursed automatically upon arena conclusion. The
        Company verifies the match result before releasing any prize payment.
        This verification process:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Confirms the accuracy of the submitted match results against available
          match data.
        </li>
        <li>
          Verifies that the winning squad&apos;s registration, payment, and
          eligibility records are in order.
        </li>
        <li>
          Checks for any pending fraud or cheating flags on the winning squad or
          its members.
        </li>
        <li>
          Is completed within 24 hours of arena conclusion under normal
          circumstances.
        </li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Prize disbursement will only be initiated after result verification is
        successfully completed. The Company reserves the right to withhold
        disbursement pending investigation if any irregularity is detected
        during verification.
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>23. Disqualification &amp; Winner Ladder</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        If a squad that has been determined as a winner is subsequently
        disqualified — for cheating, use of prohibited software, match
        manipulation, or any violation of the Platform&apos;s Terms and
        Conditions — the following applies:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>The disqualified squad&apos;s prize is not disbursed to them.</li>
        <li>
          The winner ladder is modified — the next eligible squad in the ranking
          moves up to receive the prize position vacated by the disqualified
          squad.
        </li>
        <li>
          The prize amount for the disqualified position is disbursed to the
          newly eligible squad after re-verification.
        </li>
        <li>
          The disqualified squad&apos;s entry fee is forfeited and not refunded.
        </li>
        <li>
          The Company reserves the right to permanently ban disqualified players
          from the Platform and to report serious violations to relevant
          authorities.
        </li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <strong>
          Important: Disqualification after prize disbursement is not possible.
          Once prize money has been disbursed to a Captain&apos;s KYC-verified
          bank account, the transaction is final and irreversible. This is why
          result verification is mandatory before any disbursement.
        </strong>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>24. Fraud Detection &amp; Prize Freeze</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        If the Company detects indicators of fraud, cheating, match
        manipulation, or collusion in connection with an arena result before
        prize disbursement:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          The prize money is immediately frozen in escrow — pending state — and
          disbursement is halted.
        </li>
        <li>
          The Company initiates an immediate investigation into the flagged
          activity.
        </li>
        <li>
          The investigation and resolution will be completed within 24 hours of
          the freeze being applied.
        </li>
        <li>
          If the investigation clears the winning squad — prize money is
          released and disbursed within the same 24-hour window.
        </li>
        <li>
          If the investigation confirms fraud or cheating — the winning squad is
          disqualified, the winner ladder is modified, and the prize is
          disbursed to the next eligible squad after re-verification.
        </li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>
          Note: The 24-hour fraud investigation window is a firm commitment. The
          Company will not hold prize money beyond 24 hours without
          communicating the reason to the affected parties via in-app
          notification and email.
        </em>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>25. TDS Deduction on Prize Winnings</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Tax Deducted at Source (TDS) is deducted from all prize winnings before
        disbursement to the Captain, in compliance with Section 194B and Section
        194BA of the Income Tax Act, 1961.
      </p>
      <div style={{ overflowX: "auto", marginBottom: "32px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "var(--g100)",
            border: "1px solid rgba(232,25,26,0.2)",
            fontSize: "14px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Item</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Detail</strong>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  TDS Rate
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  30% of gross prize amount
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Applicable Section
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Section 194B / 194BA — Income Tax Act, 1961
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Deducted By
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  [CORPSE ESPORTS PRIVATE LIMITED] at time of prize disbursement
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Threshold
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Applicable on all prize amounts — no minimum threshold
                  exemption for e-sports prizes
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  TDS Certificate
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Not issued separately. TDS deducted is reflected in Form 26AS
                  of the recipient.
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Example
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Gross prize Rs 2,000 — TDS Rs 600 (30%) — Net disbursed Rs
                  1,400
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>
          Note: TDS deducted by the Company will be deposited with the
          Government of India and will appear in the Captain&apos;s Form 26AS.
          Players are responsible for filing their own income tax returns and
          claiming TDS credit. The Company is not a tax advisor and this Policy
          does not constitute tax advice.
        </em>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>26. Bank Payout Fee</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        A bank payout processing fee of Rs 5.90 is deducted from each prize
        disbursement transaction. This fee covers the cost of the bank transfer
        from the escrow account to the Captain&apos;s registered bank account.
        It is deducted after TDS.
      </p>
      <div style={{ overflowX: "auto", marginBottom: "32px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "var(--g100)",
            border: "1px solid rgba(232,25,26,0.2)",
            fontSize: "14px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Prize Disbursement Calculation</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Example (1st Place — Rs 2,000 prize pool)</strong>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Gross prize amount
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 2,000.00
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  TDS deducted (30%)
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 600.00
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Amount after TDS
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 1,400.00
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Bank payout fee
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 5.90
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Net amount received
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Rs 1,394.10
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>27. Captain Receives — Squad Distribution</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        All prize money for a squad is disbursed to the Captain&apos;s
        KYC-verified bank account only. The Platform does not distribute prize
        money to individual squad members directly.
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          The Captain is solely responsible for distributing the squad&apos;s
          prize winnings among squad members by any means they mutually agree
          upon.
        </li>
        <li>
          The Company bears absolutely no liability for any dispute,
          disagreement, or failure to distribute prize money between squad
          members.
        </li>
        <li>
          The Captain&apos;s acceptance of the prize constitutes full and final
          settlement by the Platform of the prize obligation for that squad.
        </li>
        <li>
          Squad members who have a dispute about prize distribution must resolve
          it directly with their Captain. The Platform&apos;s grievance
          mechanism does not cover internal squad prize disputes.
        </li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <strong>
          Important: If you are a squad member relying on your Captain to
          distribute prize winnings — ensure you have a clear agreement with
          your Captain before joining a paid arena. The Platform has no
          authority to intervene in or enforce internal squad prize distribution
          arrangements.
        </strong>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>28. Disbursement Timeline</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Prize money disbursement to the Captain&apos;s KYC-verified bank account
        will be initiated within 24 hours of successful result verification. The
        timeline breakdown is as follows:
      </p>
      <div style={{ overflowX: "auto", marginBottom: "32px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "var(--g100)",
            border: "1px solid rgba(232,25,26,0.2)",
            fontSize: "14px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Stage</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Timeline</strong>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Arena concludes
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  T + 0
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Result submission by organiser
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  T + 0 to T + 2 hours
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Corpse result verification
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  T + 2 to T + 6 hours (normal) / up to T + 24 hours (with fraud
                  check)
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Prize disbursement initiated
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Within T + 24 hours of arena conclusion
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Amount credited to Captain&apos;s bank account
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  T + 24 hours to T + 48 hours (subject to bank processing)
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>
          Note: Bank processing timelines after the Company initiates
          disbursement are outside the Company&apos;s control. NEFT/IMPS
          transfers typically credit within the same day but may take up to 2
          working days depending on the Captain&apos;s bank.
        </em>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>29. Irreversibility of Disbursement</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Once prize money has been disbursed and credited to the Captain&apos;s
        KYC-verified bank account, the transaction is final and irreversible
        under all circumstances. The Company will not recall, reverse, or cancel
        any disbursed prize payment after it has been credited.
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        This irreversibility applies even in cases of:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Subsequent discovery of rule violations by the winning squad that were
          not detected during result verification.
        </li>
        <li>
          Disputes raised by other squads regarding the match result after
          disbursement.
        </li>
        <li>
          Internal squad disputes about prize distribution after the Captain has
          received the funds.
        </li>
        <li>
          Account deletion or suspension of the Captain after disbursement.
        </li>
      </ul>
      <h2
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 600,
          color: "var(--white)",
          borderBottom: "1px solid rgba(232,25,26,0.35)",
          paddingBottom: "12px",
          marginTop: "56px",
          marginBottom: "24px",
        }}
      >
        PART VII — ORGANISER SETTLEMENT
      </h2>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>30. Settlement Calculation</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        After the arena concludes and the result is verified, the
        organiser&apos;s settlement is calculated and processed. The organiser
        receives:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Full security deposit refund — the organiser&apos;s original security
          deposit is returned in full (the prize pool amount having been paid
          out to winners separately from escrow).
        </li>
        <li>
          Organiser&apos;s share of the entry pool — all entry fees collected
          from players, minus the Platform&apos;s 10% commission (inclusive of
          GST), minus the Platform&apos;s 10% commission on the organiser&apos;s
          net profit (inclusive of GST).
        </li>
        <li>
          Settlement is calculated on the full entry pool including entry fees
          from any disqualified players — disqualifications do not reduce the
          organiser&apos;s settlement.
        </li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        A bank payout fee of Rs 5.90 is deducted from the total settlement
        amount before transfer.
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>31. GST Invoice</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        The Company will issue a GST invoice to the organiser for the platform
        commission charged on their arena. The invoice will detail:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>The gross entry pool amount.</li>
        <li>The platform commission charged (10% of entry pool).</li>
        <li>The GST component within the commission (28%).</li>
        <li>The platform commission on organiser profit (10%).</li>
        <li>The GST on the organiser profit commission (28%).</li>
        <li>The Company&apos;s GSTIN: [GSTIN: TO BE UPDATED].</li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        The GST invoice will be sent to the organiser&apos;s registered email
        address within 24 hours of settlement processing. Organisers who require
        the invoice for their own GST filings should ensure their email address
        is accurate and up to date in their Platform profile.
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>32. Settlement Timeline</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Organiser settlement — including both the security deposit refund and
        the entry pool share — will be initiated within 24 hours of arena
        conclusion and result verification. The settlement is transferred
        directly to the organiser&apos;s KYC-verified bank account.
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>
          Note: Settlement and prize disbursement to the Captain are processed
          simultaneously — both are initiated within the same 24-hour window
          after result verification.
        </em>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>33. Platform Technical Failure — Settlement Guarantee</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        If an arena fails to complete due to a technical issue on the
        Platform&apos;s side — including server downtime, payment system
        failure, or any other issue attributable to the Company — the following
        applies:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          The organiser receives a full refund of their security deposit — 100%
          with no deduction.
        </li>
        <li>
          All players receive a full refund of their entry fees within 24 hours.
        </li>
        <li>
          The Company bears the cost of the bank payout fees for all refund
          transactions in this scenario.
        </li>
        <li>
          No platform commission is charged on an arena that did not complete
          due to a platform-side issue.
        </li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>
          A platform technical failure means an issue caused by the
          Company&apos;s systems. It does not include failures caused by the
          organiser&apos;s actions, player device issues, game publisher
          downtime (e.g., BGMI server maintenance), or third-party internet
          connectivity issues.
        </em>
      </p>
      <h2
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 600,
          color: "var(--white)",
          borderBottom: "1px solid rgba(232,25,26,0.35)",
          paddingBottom: "12px",
          marginTop: "56px",
          marginBottom: "24px",
        }}
      >
        PART VIII — CANCELLATION &amp; REFUND POLICY
      </h2>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>34. Organiser Cancellation — Before Players Register</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        If an organiser cancels an arena after depositing the security amount
        but before any player has registered or paid an entry fee:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>The organiser receives a 70% refund of their security deposit.</li>
        <li>
          30% of the security deposit is deducted as a cancellation fee by the
          Platform.
        </li>
        <li>
          The bank payout fee of Rs 5.90 is deducted from the refund amount.
        </li>
        <li>
          The refund is processed within 24 hours of the cancellation request.
        </li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>
          Note: The 30% cancellation deduction exists to discourage frivolous
          arena creation and cancellation, which disrupts the platform ecosystem
          and damages the experience for players who may have scheduled their
          time around the arena.
        </em>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>35. Arena Locked — Once Player Registration Opens</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Once player registration is open for an arena, the organiser cannot
        cancel the arena under any circumstance. This restriction is enforced
        technically by the Platform — the cancellation option is disabled once
        the first player registers.
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        This policy exists to protect registered players who have paid entry
        fees and scheduled their time to participate. Organisers who attempt to
        circumvent this restriction will face:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Account suspension pending investigation.</li>
        <li>Potential forfeiture of security deposit.</li>
        <li>
          Possible permanent ban from organiser privileges on the Platform.
        </li>
      </ul>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>36. Arena Cancelled After Player Entry Fees Paid</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        If an arena is cancelled for any reason after players have paid entry
        fees — including cancellation by Corpse due to a platform issue — all
        registered players receive a full refund of their entry fees:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Full entry fee amount refunded — 100%, no deductions.</li>
        <li>Refund processed within 24 hours of cancellation.</li>
        <li>
          Refund issued to the original payment source used by the player.
        </li>
        <li>
          The 2% PG charge paid by the player at the time of entry fee payment —
          whether this is also refunded is subject to Razorpay&apos;s refund
          policy for the specific payment method used.
        </li>
      </ul>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>37. Arena Cancelled by Corpse</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        If the Company cancels an arena due to a platform-side technical issue,
        policy violation by the organiser, or any other reason within the
        Company&apos;s control:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Full security deposit refunded to organiser — 100%, no deduction,
          within 24 hours.
        </li>
        <li>
          Full entry fee refunded to all registered players — 100%, within 24
          hours.
        </li>
        <li>
          All bank payout fees for refund transactions are borne by the Company.
        </li>
        <li>No platform commission is charged.</li>
      </ul>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>38. Entry Fee Non-Refundable Once Tournament Starts</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Once a tournament has officially started — meaning the first match of
        the arena has commenced — entry fees are non-refundable under any
        circumstance, including:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Player&apos;s own device failure, connectivity issues, or inability to
          participate after the tournament starts.
        </li>
        <li>
          Player&apos;s voluntary withdrawal from the tournament after it
          starts.
        </li>
        <li>
          Player disqualification for rule violations after the tournament
          starts.
        </li>
        <li>
          Player&apos;s account suspension or ban after the tournament starts.
        </li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <strong>
          Important: Entry fees are non-refundable once the tournament starts.
          Ensure you are ready and able to participate before paying an entry
          fee. The Platform is not responsible for your inability to participate
          due to personal device, connectivity, or scheduling issues.
        </strong>
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>39. Disqualified Player Entry Fee</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        If a player is disqualified from a tournament for cheating, use of
        prohibited software, match manipulation, or any violation of the
        Platform&apos;s rules:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          The disqualified player&apos;s entry fee is permanently forfeited — no
          refund is issued under any circumstance.
        </li>
        <li>
          The forfeited entry fee remains in the escrow and is treated as part
          of the entry pool for commission calculation purposes.
        </li>
        <li>
          The organiser&apos;s settlement is not reduced by the disqualification
          — it is calculated on the full entry pool including the disqualified
          player&apos;s entry fee.
        </li>
      </ul>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>40. Failed Payment Refund</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        If a payment attempt fails after money has been debited from a
        player&apos;s account but before confirmation is received by the
        Platform:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Razorpay automatically initiates a refund to the player&apos;s
          original payment source.
        </li>
        <li>
          Refund timeline is 5 to 7 working days from the date of the failed
          transaction, subject to the player&apos;s bank processing schedule.
        </li>
        <li>
          The Company will cooperate fully with Razorpay&apos;s refund process
          and provide any transaction evidence required.
        </li>
        <li>
          Players experiencing delayed failed payment refunds should contact
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          with their Razorpay transaction reference number.
        </li>
      </ul>
      <h2
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 600,
          color: "var(--white)",
          borderBottom: "1px solid rgba(232,25,26,0.35)",
          paddingBottom: "12px",
          marginTop: "56px",
          marginBottom: "24px",
        }}
      >
        PART IX — KYC REQUIREMENTS
      </h2>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>41. KYC Mandatory Transactions</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        KYC (Know Your Customer) verification is mandatory for the following
        financial activities on the Platform:
      </p>
      <div style={{ overflowX: "auto", marginBottom: "32px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "var(--g100)",
            border: "1px solid rgba(232,25,26,0.2)",
            fontSize: "14px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Transaction</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>KYC Required?</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Why</strong>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Paying an entry fee as Captain
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Yes — mandatory
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Financial transaction — RBI and PMLA compliance
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Receiving prize money as Captain
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Yes — mandatory
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Prize disbursement requires verified bank account
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Receiving organiser settlement
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Yes — mandatory
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Settlement disbursement requires verified bank account
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Joining a paid arena as squad member
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  No
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Squad members do not pay — only Captain pays
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Joining a free arena
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  No
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  No financial transaction involved
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Viewing the Platform as a Guest
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  No
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  No financial transaction involved
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        KYC is processed exclusively by Razorpay India Private Limited. The
        Company does not store, access, or retain KYC documents on its own
        servers. All KYC data is subject to Razorpay&apos;s privacy policy and
        RBI/PMLA retention requirements.
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>42. Minor Users</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Users below 18 years of age (Minor Users) are prohibited from
        participating in any financial transaction on the Platform.
        Specifically:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Minor Users cannot pay entry fees.</li>
        <li>Minor Users cannot act as Captain of a paid squad.</li>
        <li>Minor Users cannot receive prize money.</li>
        <li>Minor Users cannot complete KYC verification.</li>
        <li>
          Minor Users can participate in paid arenas only as squad members —
          invited by a KYC-verified Captain. Their participation does not
          involve any direct financial transaction.
        </li>
      </ul>
      <h2
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 600,
          color: "var(--white)",
          borderBottom: "1px solid rgba(232,25,26,0.35)",
          paddingBottom: "12px",
          marginTop: "56px",
          marginBottom: "24px",
        }}
      >
        PART X — TAX OBLIGATIONS
      </h2>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>43. TDS on Prize Winnings</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        The Company deducts Tax at Source (TDS) from all prize winnings at 30%
        before disbursement, in compliance with Section 194B and Section 194BA
        of the Income Tax Act, 1961. The TDS is deposited with the Government of
        India and reflected in the recipient&apos;s Form 26AS.
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>TDS rate: 30% of gross prize amount.</li>
        <li>
          No TDS certificate is issued separately by the Company. Players should
          access their Form 26AS on the Income Tax Department&apos;s portal to
          verify TDS credit.
        </li>
        <li>
          TDS deduction applies regardless of the prize amount — there is no
          minimum threshold exemption for e-sports prize winnings.
        </li>
        <li>
          The recipient (Captain) is responsible for including prize income in
          their income tax return and for compliance with all personal income
          tax obligations beyond the TDS deducted at source.
        </li>
      </ul>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>44. GST on Platform Commission</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        GST at 28% is applicable on the platform commission charged by the
        Company on entry pools and organiser profits. This GST is calculated
        inclusively within the commission amount.
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>The Company&apos;s GSTIN is: [GSTIN: TO BE UPDATED].</li>
        <li>
          A GST invoice is issued to organisers for every arena settlement,
          detailing the commission charged and the GST component.
        </li>
        <li>
          Players are not charged GST separately — the 10% commission deducted
          from the entry pool already includes the GST component.
        </li>
      </ul>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>45. User Tax Responsibilities</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Each user — whether player or organiser — is individually responsible
        for:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Filing their own income tax returns and reporting all income earned
          through the Platform, including prize winnings (net of TDS) and
          organiser profits.
        </li>
        <li>
          Maintaining their own financial records of Platform transactions for
          tax purposes. The Company recommends retaining all payment receipts
          and GST invoices received from the Platform.
        </li>
        <li>
          Complying with all applicable GST obligations if the organiser is a
          GST-registered entity.
        </li>
      </ul>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <strong>
          Important: The Company is not a tax advisor. Nothing in this Policy
          constitutes tax advice. Users should consult a qualified chartered
          accountant or tax professional for guidance on their specific tax
          obligations arising from Platform transactions.
        </strong>
      </p>
      <h2
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 600,
          color: "var(--white)",
          borderBottom: "1px solid rgba(232,25,26,0.35)",
          paddingBottom: "12px",
          marginTop: "56px",
          marginBottom: "24px",
        }}
      >
        PART XI — PROHIBITED CONDUCT &amp; CONSEQUENCES
      </h2>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>46. Prohibited Financial Conduct</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        The following financial conduct is strictly prohibited on the Platform:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>
          Fraudulent payment — submitting a payment using stolen, cloned, or
          unauthorised payment credentials.
        </li>
        <li>
          Chargeback abuse — initiating a bank chargeback for a valid entry fee
          payment that was properly processed and for which a tournament slot
          was received.
        </li>
        <li>
          Entry pool manipulation — any attempt to artificially inflate or
          manipulate the entry pool of an arena for financial gain.
        </li>
        <li>
          Result manipulation for financial gain — colluding with other players,
          squad members, or the organiser to predetermine match results in order
          to win prize money fraudulently.
        </li>
        <li>
          Organiser-player collusion — an organiser and players coordinating to
          manipulate entry fee payments, prize distribution, or settlement
          amounts.
        </li>
        <li>
          Multiple account exploitation — creating multiple accounts to
          participate in the same arena and claim prize money through different
          accounts.
        </li>
        <li>
          KYC fraud — submitting false, forged, or another person&apos;s
          identity documents for KYC verification.
        </li>
        <li>
          Fake cancellation — creating arenas with no intention of running them,
          collecting entry fees, and then attempting cancellation.
        </li>
      </ul>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>47. Consequences</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Any user found to have engaged in prohibited financial conduct is
        subject to the following consequences, at the Company&apos;s sole
        discretion:
      </p>
      <ul
        style={{
          listStyle: "disc",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Immediate account suspension pending investigation.</li>
        <li>
          Permanent ban from the Platform and forfeiture of all funds in
          connection with the prohibited activity.
        </li>
        <li>
          Recovery of any fraudulently obtained prize money or settlement
          amounts through legal proceedings.
        </li>
        <li>
          Reporting to relevant law enforcement authorities, including the
          Financial Intelligence Unit (FIU-IND) under PMLA for suspicious
          financial activity.
        </li>
        <li>
          Civil legal action for damages arising from the prohibited conduct.
        </li>
        <li>
          Criminal complaint under applicable provisions of the Indian Penal
          Code, IT Act 2000, and PMLA 2002.
        </li>
      </ul>
      <h2
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 600,
          color: "var(--white)",
          borderBottom: "1px solid rgba(232,25,26,0.35)",
          paddingBottom: "12px",
          marginTop: "56px",
          marginBottom: "24px",
        }}
      >
        PART XII — GOVERNING LAW, DISPUTE RESOLUTION &amp; CONTACT
      </h2>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>48. Governing Law</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        This Policy shall be governed by and construed in accordance with the
        laws of India, including the RBI Guidelines, PMLA 2002, GST Act 2017,
        Income Tax Act 1961, IT Act 2000, and the Payment and Settlement Systems
        Act 2007, as amended from time to time.
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>49. Dispute Resolution</strong>
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Any dispute arising from or in connection with this Policy shall first
        be attempted to be resolved through good-faith negotiation by contacting{" "}
        <a
          href="mailto:support@corpsearena.com"
          style={{ color: "var(--red)" }}
        >
          support@corpsearena.com
        </a>
        . If unresolved within 30 days, the dispute shall be submitted to
        binding arbitration under the Arbitration and Conciliation Act, 1996.
        The seat of arbitration shall be Guwahati, Assam, India. The language of
        arbitration shall be English.
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        For urgent payment matters — including frozen prizes or delayed
        settlements — the Company commits to responding within 24 hours of
        contact at{" "}
        <a
          href="mailto:support@corpsearena.com"
          style={{ color: "var(--red)" }}
        >
          support@corpsearena.com
        </a>
        .
      </p>
      <h3
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 600,
          color: "var(--white)",
          marginTop: "40px",
          marginBottom: "16px",
        }}
      >
        <strong>50. Contact</strong>
      </h3>
      <div style={{ overflowX: "auto", marginBottom: "32px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "var(--g100)",
            border: "1px solid rgba(232,25,26,0.2)",
            fontSize: "14px",
          }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Company</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  [CORPSE ESPORTS PRIVATE LIMITED]
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>GSTIN</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  [GSTIN: TO BE UPDATED]
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Support Email</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <a
                    href="mailto:support@corpsearena.com"
                    style={{ color: "var(--red)" }}
                  >
                    support@corpsearena.com
                  </a>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Legal Email</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <a
                    href="mailto:legal@corpsearena.com"
                    style={{ color: "var(--red)" }}
                  >
                    legal@corpsearena.com
                  </a>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Registered Address</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Silchar Road Ghat Line, Subashnagar, Karimganj - 788710,
                  Assam, India
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Payment Dispute</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Raise via in-app support within 48 hours of transaction
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Prize / Settlement Issue</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Contact{" "}
                  <a
                    href="mailto:support@corpsearena.com"
                    style={{ color: "var(--red)" }}
                  >
                    support@corpsearena.com
                  </a>{" "}
                  — response within 24 hours
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Fraud Report</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <a
                    href="mailto:legal@corpsearena.com"
                    style={{ color: "var(--red)" }}
                  >
                    legal@corpsearena.com
                  </a>{" "}
                  — response within 24 hours
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        This Money Deposit &amp; Receive Policy was last updated in April 2026
        and is effective from May 1, 2026.
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>Version 1.0 | Corpse — [CORPSE ESPORTS PRIVATE LIMITED]</em>
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>Confidential &amp; Proprietary. All rights reserved.</em>
      </p>
    </DocShell>
  );
}
