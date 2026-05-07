import { Metadata } from "next";
import DocShell from "@/components/layout/DocShell";

export const metadata: Metadata = {
  title: "KYC Modification Policy | Corpse",
  description: "KYC Modification Policy for the Corpse platform.",
};

export default function PolicyPage() {
  return (
    <DocShell
      title="KYC Policy"
      badge="Legal · Financial"
      subtitle="KYC & KYC Modification Terms & Conditions for financial verification on the Corpse platform."
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
        <strong>CORPSE</strong>
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
        <strong>KYC &amp; KYC Modification</strong>
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
        <strong>Terms &amp; Conditions</strong>
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
        Verification • Data Handling • Modification Process • Financial Impact
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
        <em>Binding on: All KYC-Verified Users | Captains | Organisers</em>
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
                    <strong>eKYC Provider</strong>
                  </p>
                </td>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    Authorised third-party eKYC API service provider (identity
                    confidential)
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
                    PMLA 2002 | Aadhaar Act 2016 | RBI Guidelines | IT Act 2000
                    | DPDP Act 2023
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
          By submitting KYC information or initiating a KYC modification request
          on the Corpse platform, you confirm that you have read, understood,
          and agree to be bound by these Terms &amp; Conditions in their
          entirety.
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
        PART I — INTRODUCTION &amp; SCOPE
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
        <strong>1. What KYC Is &amp; Why It Is Required</strong>
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
        Know Your Customer ("KYC") is the process by which the Company verifies
        the identity and financial details of users who wish to participate in
        financial transactions on the Corpse platform. KYC is a mandatory
        regulatory requirement under the Prevention of Money Laundering Act,
        2002 (PMLA) and Reserve Bank of India (RBI) guidelines for any platform
        that facilitates the movement of money between users.
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
        On the Corpse platform, KYC serves three specific purposes:
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
          Identity verification — confirming that the user is who they claim to
          be, using government-issued identity documents.
        </li>
        <li>
          Financial verification — confirming that the user&apos;s bank account
          details are valid and belong to them, to ensure prize money and
          settlement payments are disbursed to the correct and verified
          recipient.
        </li>
        <li>
          Regulatory compliance — satisfying the Company&apos;s obligations
          under PMLA, RBI payment aggregator guidelines, and income tax
          regulations including TDS deduction and reporting.
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
          Note: KYC is not required to create an account or to use the
          Platform&apos;s free features. It is required only when a user
          initiates a financial transaction — specifically when acting as a
          Captain paying an entry fee, receiving prize money, or receiving an
          organiser settlement.
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
        <strong>2. Who This Document Applies To</strong>
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
        These KYC &amp; KYC Modification Terms &amp; Conditions ("KYC Terms")
        apply to:
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
          All users who have completed or are in the process of completing KYC
          verification on the Platform.
        </li>
        <li>
          All users who wish to modify any KYC detail previously submitted to
          the Platform.
        </li>
        <li>Players acting as Captains of paid arena squads.</li>
        <li>
          Organisers who deposit security pools and receive arena settlements.
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
        These KYC Terms must be read alongside the Money Deposit &amp; Receive
        Policy and the Corpse Terms &amp; Conditions of the Platform, all of
        which together constitute the binding financial framework governing your
        use of the Platform.
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
        <strong>3. Governing Legal Framework</strong>
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
                  <strong>Relevance to KYC on Corpse</strong>
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
                  Mandates KYC for financial transactions, suspicious
                  transaction reporting, and financial record-keeping
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
                  Aadhaar (Targeted Delivery of Financial and Other Subsidies,
                  Benefits and Services) Act, 2016
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
                  Governs the use of Aadhaar-based eKYC verification, consent
                  requirements, and data handling obligations
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
                  RBI Guidelines on Payment Aggregators &amp; Payment Gateways
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
                  Mandates user verification before processing financial
                  transactions through payment gateways
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
                  TDS obligations require verified identity details of prize
                  recipients for deduction and reporting
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
                  Digital Personal Data Protection Act, 2023 (DPDP Act)
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
                  Governs the collection, storage, processing, and deletion of
                  KYC personal data
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
                  Governs digital verification processes, electronic records,
                  and online identity authentication
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
        PART II — KYC REQUIREMENTS ON CORPSE
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
        <strong>4. Who Must Complete KYC</strong>
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
        KYC verification is mandatory for the following users and activities on
        the Platform:
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
                  <strong>User / Activity</strong>
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
                  <strong>Reason</strong>
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
                  Player acting as Captain — paying entry fee
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
                  Player acting as Captain — receiving prize money
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
                  Prize disbursement requires verified bank account and identity
                  for TDS
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
                  Organiser — depositing security pool
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
                  Financial deposit into escrow — PMLA compliance
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
                  Organiser — receiving arena settlement
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
        <strong>5. Who Is Exempt from KYC</strong>
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
                  <strong>User / Activity</strong>
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
                  <strong>Reason</strong>
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
                  Squad member (non-Captain) in a paid arena
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
                  Squad members do not pay entry fees — Captain pays on behalf
                  of squad
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
                  Any user joining a free arena
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
                  Minor Users (below 18 years)
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
                  No — and cannot complete KYC
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
                  Minor Users are prohibited from all financial transactions on
                  the Platform
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
                  Guest Users
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
                  No account — no financial transaction possible
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
                  Any user creating an account
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
                  KYC is not triggered at account creation stage
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
        <strong>6. When KYC Is Triggered</strong>
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
        KYC is not required at the time of account creation. It is triggered at
        the point when a user first attempts to initiate a financial transaction
        on the Platform — specifically:
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
          When a user first attempts to pay an entry fee as Captain — the
          Platform will prompt KYC completion before the payment can proceed.
        </li>
        <li>
          When an organiser first attempts to deposit a security pool — the
          Platform will prompt KYC completion before the deposit can proceed.
        </li>
        <li>
          The Platform will not permit any financial transaction to be initiated
          by a user who has not completed KYC verification.
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
        PART III — KYC VERIFICATION PROCESS
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
        <strong>7. eKYC Service Provider</strong>
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
        The Company uses the services of an authorised third-party eKYC API
        service provider ("eKYC Provider") to conduct digital identity and
        financial verification. The eKYC Provider is a UIDAI-authorised entity
        for Aadhaar-based verification and operates in compliance with all
        applicable Indian regulatory requirements.
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
        The identity of the eKYC Provider is not disclosed publicly for security
        and operational reasons. All verification performed by the eKYC Provider
        is conducted under the Company&apos;s instruction and within the
        regulatory framework described in these KYC Terms.
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
          Note: By submitting your KYC details on the Platform, you consent to
          your information being shared with and processed by the eKYC Provider
          and Razorpay for the purposes described in these KYC Terms.
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
        <strong>8. Verification Types Performed</strong>
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
        The KYC process on the Platform comprises three distinct verification
        types, all of which must be successfully completed before a user&apos;s
        KYC status is activated:
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
                  <strong>Verification Type</strong>
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
                  <strong>What Is Verified</strong>
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
                  <strong>Regulatory Basis</strong>
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
                  Aadhaar OTP Verification
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
                  User&apos;s identity against UIDAI&apos;s Aadhaar database via
                  OTP sent to Aadhaar-linked mobile number
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
                  Aadhaar Act 2016, UIDAI eKYC regulations
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
                  PAN Verification
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
                  User&apos;s Permanent Account Number against the Income Tax
                  Department&apos;s database
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
                  Income Tax Act 1961 — required for TDS deduction and reporting
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
                  Bank Account Verification
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
                  User&apos;s bank account number and IFSC code — confirmed as
                  valid, active, and belonging to the user
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
                  RBI guidelines — required for prize and settlement
                  disbursement
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
        <strong>9. Aadhaar OTP Verification Flow</strong>
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
        The Aadhaar-based eKYC verification on the Platform uses the OTP-based
        authentication method authorised by UIDAI. The process is as follows:
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
          Step 1 — The user enters their 12-digit Aadhaar number in the
          designated field within the Platform or eKYC portal.
        </li>
        <li>
          Step 2 — The user provides explicit consent for Aadhaar-based eKYC
          verification, as required under the Aadhaar Act, 2016.
        </li>
        <li>
          Step 3 — The eKYC Provider sends a One Time Password (OTP) to the
          mobile number registered with the user&apos;s Aadhaar (the
          Aadhaar-linked mobile number).
        </li>
        <li>
          Step 4 — The user enters the OTP within the validity window to
          authenticate the verification.
        </li>
        <li>
          Step 5 — Upon successful OTP entry, the eKYC Provider retrieves the
          user&apos;s demographic details from UIDAI&apos;s database and
          confirms identity verification.
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
          Important: The OTP for Aadhaar eKYC is sent to your Aadhaar-linked
          mobile number — not your Corpse-registered email or phone. If your
          mobile number is not linked to your Aadhaar, you will not be able to
          complete Aadhaar-based eKYC. Contact UIDAI to update your
          Aadhaar-linked mobile number before attempting KYC on the Platform.
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
        <strong>10. PAN Verification Flow</strong>
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
        PAN verification is performed to confirm the user&apos;s tax identity
        for TDS deduction and reporting purposes:
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
          Step 1 — The user enters their 10-character Permanent Account Number
          (PAN).
        </li>
        <li>
          Step 2 — The eKYC Provider verifies the PAN against the Income Tax
          Department&apos;s database to confirm it is valid, active, and matches
          the name provided.
        </li>
        <li>
          Step 3 — Verification result is returned to the Platform — confirmed
          or failed.
        </li>
        <li>
          Step 4 — If PAN verification fails, the user is notified and must
          provide a valid PAN to proceed.
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
          Note: The name on your PAN must match the name provided during Aadhaar
          verification. A mismatch between PAN name and Aadhaar name will result
          in KYC rejection. Ensure both documents reflect the same legal name
          before initiating KYC.
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
        <strong>11. Bank Account Verification Flow</strong>
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
        Bank account verification confirms that the user&apos;s bank account is
        valid, active, and belongs to them — ensuring prize money and settlement
        payments are disbursed correctly:
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
          Step 1 — The user enters their bank account number, IFSC code, and
          account holder name.
        </li>
        <li>
          Step 2 — The eKYC Provider performs a penny drop or bank account
          verification check — a small nominal amount is credited and reversed
          to confirm the account is active and the details are correct.
        </li>
        <li>
          Step 3 — Verification result confirms the account is valid and belongs
          to the user.
        </li>
        <li>
          Step 4 — Verified bank account details are stored and used for all
          future prize disbursements and settlement payments.
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
          Note: Only one bank account can be linked to a KYC-verified Platform
          account at any time. If you wish to change your bank account, you must
          submit a KYC modification request as described in Part VI of these
          Terms.
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
        <strong>12. Hybrid Verification Experience</strong>
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
        The KYC verification process on the Platform is a hybrid experience —
        certain steps are completed within the Corpse app itself, while other
        steps involving direct interaction with the eKYC Provider&apos;s secure
        systems are completed on a page or interface provided by the eKYC
        Provider outside the app environment.
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
          In-app steps include: entering your Aadhaar number, PAN, and bank
          account details; providing consent for eKYC; and viewing verification
          status updates.
        </li>
        <li>
          Redirected steps include: OTP entry for Aadhaar authentication and any
          document liveness or identity confirmation steps managed by the eKYC
          Provider&apos;s secure interface.
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
        This hybrid approach ensures that sensitive authentication steps —
        particularly Aadhaar OTP entry — are handled within the eKYC
        Provider&apos;s regulated and secure environment, minimising the risk of
        data interception.
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
        PART IV — KYC DATA HANDLING &amp; PRIVACY
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
        <strong>13. What Corpse Stores</strong>
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
        Upon successful completion of KYC verification, the Company stores the
        following on its own servers:
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
        <li>KYC verification status — verified, pending, or rejected.</li>
        <li>
          Masked Aadhaar number — only the last 4 digits are stored on Corpse
          servers. The full 12-digit Aadhaar number is never stored by the
          Company.
        </li>
        <li>
          PAN number — stored in encrypted form for TDS deduction and reporting
          purposes.
        </li>
        <li>
          Verified bank account details — account number (masked), IFSC code,
          and account holder name — stored in encrypted form for disbursement
          purposes.
        </li>
        <li>
          KYC completion timestamp — date and time of successful verification.
        </li>
        <li>
          eKYC reference ID — the transaction reference number provided by the
          eKYC Provider for the verification session.
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
        <strong>14. What the eKYC Provider Stores</strong>
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
        The eKYC Provider stores the following on their own regulated and secure
        infrastructure:
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
          Full Aadhaar eKYC data — retrieved from UIDAI upon successful OTP
          authentication, including name, date of birth, address, and photograph
          as per UIDAI records.
        </li>
        <li>
          Aadhaar XML / eKYC XML — the digitally signed XML file returned by
          UIDAI containing the user&apos;s demographic data.
        </li>
        <li>
          PAN verification records — the verification query and response from
          the Income Tax Department&apos;s database.
        </li>
        <li>
          Bank account verification records — the penny drop or verification
          query and result.
        </li>
        <li>
          Verification session logs — timestamps, IP addresses, and session
          metadata for audit and regulatory compliance.
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
        The eKYC Provider retains this data in accordance with their own privacy
        policy and applicable regulatory requirements including UIDAI
        guidelines, PMLA, and RBI data retention mandates. The Company does not
        control the eKYC Provider&apos;s data retention policies.
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
        <strong>15. Data Sharing — Razorpay</strong>
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
        The Company shares the following KYC-verified data with Razorpay India
        Private Limited, our payment gateway partner, strictly for the purpose
        of processing financial transactions:
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
          Verified bank account details — for prize disbursement and organiser
          settlement transfers.
        </li>
        <li>
          PAN number — for TDS deduction and reporting to the Income Tax
          Department.
        </li>
        <li>Name as per KYC — for payment beneficiary identification.</li>
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
        This data sharing is mandatory for regulatory compliance and cannot be
        opted out of. By completing KYC on the Platform, you consent to this
        data being shared with Razorpay for the stated purposes.
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
        <strong>16. No Sale of KYC Data</strong>
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
        The Company does not sell, rent, trade, or otherwise transfer your KYC
        data to any third party for commercial, marketing, or any other purpose.
        KYC data is shared only with the eKYC Provider (for verification) and
        Razorpay (for payment processing) — both of which are mandatory for the
        operation of the Platform&apos;s financial features.
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
        <strong>
          Important: If you receive any communication claiming to be from Corpse
          asking for your Aadhaar number, OTP, bank password, or any other
          sensitive financial credential outside of the official KYC flow within
          the Corpse app — it is fraudulent. Corpse will never ask for your OTP,
          bank password, or full Aadhaar number via email, SMS, phone call, or
          WhatsApp. Report such incidents immediately to
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>
          .
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
        <strong>17. DPDP Act 2023 &amp; Aadhaar Act 2016 Compliance</strong>
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
        The Company handles all KYC data in compliance with the Digital Personal
        Data Protection Act, 2023 and the Aadhaar (Targeted Delivery of
        Financial and Other Subsidies, Benefits and Services) Act, 2016:
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
          Aadhaar-based eKYC is performed only with the user&apos;s explicit,
          informed consent as required under Section 8 of the Aadhaar Act, 2016.
        </li>
        <li>
          The full Aadhaar number is not stored by the Company — only the masked
          version (last 4 digits) is retained.
        </li>
        <li>
          Aadhaar data retrieved via eKYC is used only for identity verification
          and is not used for any purpose beyond what is stated in these KYC
          Terms.
        </li>
        <li>
          Users have the right to access, correct, or request erasure of their
          KYC data subject to legal retention requirements. Requests should be
          directed to{" "}
          <a
            href="mailto:legal@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            legal@corpsearena.com
          </a>
          .
        </li>
        <li>
          KYC data retention by the Company is governed by PMLA requirements —
          financial transaction records including KYC data must be retained for
          a minimum of 5 years from the date of the last transaction.
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
        PART V — KYC MODIFICATION — OVERVIEW
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
        <strong>18. What Can Be Modified</strong>
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
        After initial KYC verification is complete, a user may request
        modification of any of the following KYC fields:
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
                  <strong>KYC Field</strong>
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
                  <strong>Can Be Modified?</strong>
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
                  <strong>Re-Verification Required</strong>
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
                  Aadhaar details
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
                  Yes
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
                  Full Aadhaar OTP eKYC re-verification via portal
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
                  PAN number
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
                  Yes
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
                  PAN re-verification via portal
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
                  Bank account number
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
                  Yes
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
                  Bank account re-verification via portal
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
                  IFSC code
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
                  Yes
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
                  Bank account re-verification via portal
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
                  Account holder name
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
                  Yes
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
                  Bank account re-verification via portal
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
                  UPI ID
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
                  Yes
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
                  Bank account / UPI re-verification via portal
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
          Note: Only the specific field being modified requires re-verification.
          For example, if you are only changing your bank account details, you
          do not need to redo Aadhaar or PAN verification — only the bank
          account verification step is repeated on the portal.
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
        <strong>19. Modification via Support Request Only</strong>
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
        KYC modification is not available as a self-service feature within the
        Platform&apos;s settings. All KYC modification requests must be
        initiated through the Platform&apos;s in-app support system. This
        restriction exists to:
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
          Ensure every modification request is reviewed by the Company&apos;s
          support team before being forwarded to the eKYC Provider.
        </li>
        <li>Prevent unauthorised or fraudulent modification of KYC details.</li>
        <li>
          Maintain a clear audit trail of all KYC changes for regulatory
          compliance.
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
        <strong>20. One Active Request at a Time</strong>
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
        A user may only have one active KYC modification request pending at any
        given time. The Platform will not accept a second modification request
        while a previous request is still under review. If a user wishes to
        change multiple KYC fields simultaneously, all changes must be included
        in a single modification request.
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
        <strong>21. Non-Withdrawable Once Submitted</strong>
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
        Once a KYC modification request has been submitted and the identity
        verification Magic Link has been clicked by the user — the request
        cannot be withdrawn, cancelled, or reversed. The financial freeze that
        accompanies the modification request (described in Part VII) will remain
        in place until the modification is either approved or rejected by the
        Company.
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
        <strong>
          Important: Think carefully before submitting a KYC modification
          request. Once submitted and identity-verified, it cannot be undone.
          Your financial activity on the Platform will be frozen for 3 to 5
          working days until the request is resolved. Do not submit a
          modification request unless you genuinely need to change your KYC
          details.
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
        PART VI — KYC MODIFICATION — STEP-BY-STEP PROCESS
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
        <strong>22. Step 1 — Raise In-App Support Ticket</strong>
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
        The KYC modification process begins when the user raises a support
        ticket through the Platform&apos;s in-app support system. The support
        ticket must include:
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
        <li>The specific KYC field(s) the user wishes to modify.</li>
        <li>
          The reason for the modification (e.g., bank account changed, name
          correction, new Aadhaar).
        </li>
        <li>A brief description of the change required.</li>
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
        Users should not include any sensitive document details (Aadhaar number,
        bank account number) in the support ticket itself. These details will be
        submitted securely through the portal provided in Step 4.
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
          Note: Support tickets must be raised from within the Platform app
          under Settings &gt; Support &gt; KYC Modification Request. Requests
          submitted via email or other channels without a corresponding in-app
          ticket may not be processed.
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
        <strong>23. Step 2 — Identity Verification via Magic Link</strong>
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
        Upon receiving the KYC modification support ticket, the Company sends a
        secure, single-use Magic Link to the user&apos;s registered email
        address. This step is mandatory and serves as identity verification —
        confirming that the modification request is being made by the actual
        account holder and not a third party.
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
        <li>The Magic Link is valid for 24 hours from the time it is sent.</li>
        <li>
          The user must click the Magic Link within 24 hours to confirm their
          identity and proceed with the modification request.
        </li>
        <li>
          If the Magic Link expires before the user clicks it, the support
          ticket is automatically closed. The user must raise a new support
          ticket to restart the process.
        </li>
        <li>
          Clicking the Magic Link constitutes the user&apos;s explicit
          confirmation of identity and consent to proceed with the KYC
          modification.
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
          Important: If you receive a KYC modification Magic Link that you did
          not request, do not click it. Contact{" "}
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          immediately to report potential unauthorised access to your account.
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
        <strong>24. Step 3 — Support Team Review &amp; Portal Dispatch</strong>
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
        After the user successfully clicks the identity verification Magic Link,
        the Company&apos;s support team reviews the modification request to
        confirm:
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
          The modification request is complete and includes all necessary
          information.
        </li>
        <li>
          The user does not already have an active KYC modification request
          pending.
        </li>
        <li>
          The request does not contain any indicators of fraudulent intent.
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
        Upon completing the review, the support team dispatches a secure,
        time-limited portal link to the user&apos;s registered email address.
        This portal link provides access to the eKYC re-verification flow for
        the specific field being modified.
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
          The portal link is dispatched within 24 hours of the Magic Link being
          successfully clicked by the user.
        </li>
        <li>The portal link is valid for 24 hours from the time it is sent.</li>
        <li>
          If the portal link expires before the user accesses it, the user must
          raise a new support ticket to restart the process from Step 1.
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
        <strong>25. Step 4 — User Accesses Secure Portal</strong>
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
        The user accesses the secure portal by clicking the portal link sent to
        their registered email address. The portal is provided by the
        Company&apos;s authorised eKYC service provider and is a secure,
        regulated environment for KYC data submission.
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
          The portal will display only the specific KYC field(s) that need to be
          re-verified, as specified in the user&apos;s support ticket.
        </li>
        <li>
          The user does not need to re-verify KYC fields that are not being
          changed.
        </li>
        <li>
          The portal session is linked to the user&apos;s Platform account and
          support ticket reference number, ensuring the submission is associated
          with the correct modification request.
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
          Note: The portal link can only be used once. Once you have completed
          the re-verification steps on the portal, the link is permanently
          invalidated. Do not share the portal link with anyone.
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
        <strong>26. Step 5 — Field-Specific eKYC Re-Verification</strong>
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
        Within the secure portal, the user completes eKYC re-verification for
        the specific field being modified. The re-verification process depends
        on which field is being changed:
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
                  <strong>Field Being Modified</strong>
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
                  <strong>Re-Verification Steps on Portal</strong>
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
                  Aadhaar details
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
                  User enters new Aadhaar number + provides consent + receives
                  and enters OTP sent to new Aadhaar-linked mobile number. UIDAI
                  confirms updated identity details.
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
                  PAN number
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
                  User enters new PAN number. eKYC Provider verifies new PAN
                  against Income Tax Department database. Name match with
                  existing Aadhaar record is confirmed.
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
                  Bank account details
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
                  User enters new bank account number, IFSC code, and account
                  holder name. eKYC Provider performs penny drop verification to
                  confirm account is valid, active, and belongs to the user.
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
                  UPI ID
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
                  User enters new UPI ID. eKYC Provider verifies UPI ID is
                  active and linked to the user&apos;s verified bank account.
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
        Upon successful completion of re-verification on the portal, the eKYC
        Provider sends the verification result to the Company for final review.
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
        <strong>27. Step 6 — Company Review &amp; Decision</strong>
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
        Upon receiving the eKYC re-verification result from the eKYC Provider,
        the Company reviews the result and makes a final decision on the
        modification request. The review timeline is 3 to 5 working days from
        the date the portal re-verification is successfully completed.
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
        During the review period, the Company may:
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
          Approve the modification if the re-verification is successful and the
          new KYC details are consistent and valid.
        </li>
        <li>
          Reject the modification if the re-verification fails, documents are
          inconsistent, or the new details raise any compliance concern.
        </li>
        <li>
          Request additional information from the user via the support ticket if
          clarification is needed before a decision can be made.
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
        <strong>28. Step 7 — Notification &amp; Outcome</strong>
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
        The user is notified of the outcome of their KYC modification request
        via both in-app notification and email to their registered email
        address.
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
        <strong>If Approved:</strong>
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
          The new KYC details are activated on the user&apos;s account
          immediately upon approval.
        </li>
        <li>
          The financial activity freeze is lifted immediately — the user can
          resume paying entry fees, receiving prize money, and receiving
          organiser settlements.
        </li>
        <li>
          Any prize money held in escrow during the modification review period
          is released to the new KYC-verified bank account.
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
        <strong>If Rejected:</strong>
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
          The rejection notification includes the specific reason for rejection.
        </li>
        <li>
          The financial activity freeze is lifted immediately upon rejection —
          the user&apos;s original KYC details remain active.
        </li>
        <li>
          Any prize money held in escrow during the review period is released to
          the original KYC-verified bank account.
        </li>
        <li>
          The user may resubmit a new KYC modification request immediately by
          raising a new in-app support ticket from Step 1.
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
        PART VII — FINANCIAL ACTIVITY DURING KYC MODIFICATION
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
        <strong>29. Complete Financial Freeze</strong>
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
        From the moment a KYC modification request is confirmed — specifically
        from the moment the user successfully clicks the identity verification
        Magic Link in Step 2 — all financial activity on the user&apos;s
        Platform account is completely frozen. This freeze remains in place
        until the modification request is either approved or rejected.
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
        <strong>
          Important: The financial freeze is automatic and cannot be reversed,
          paused, or bypassed while a KYC modification request is active. Plan
          your KYC modification requests carefully to avoid disruption to your
          tournament participation and financial activities on the Platform.
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
        <strong>30. What Is Frozen</strong>
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
        The following financial activities are suspended during the KYC
        modification review period:
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
                  <strong>Activity</strong>
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
                  <strong>Status During Modification</strong>
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
                  <strong>Resumed When</strong>
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
                  Paying entry fees as Captain
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
                  Frozen — not permitted
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
                  Immediately upon approval or rejection
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
                  Receiving prize money disbursement
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
                  Held in escrow
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
                  Released upon approval (to new account) or rejection (to
                  original account)
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
                  Frozen — not processed
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
                  Processed immediately upon approval or rejection
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
                  Depositing security pool as organiser
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
                  Frozen — not permitted
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
                  Immediately upon approval or rejection
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
          Note: Free arena participation as a non-Captain squad member is not
          affected by the financial freeze. Only financial transactions are
          suspended — the user can still browse the Platform, participate in
          free arenas as a squad member, and access all non-financial features.
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
        <strong>31. When the Freeze Is Lifted</strong>
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
        The financial freeze is lifted immediately and automatically upon either
        of the following outcomes:
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
          Approval — the new KYC details are activated and all financial
          activity resumes under the new KYC credentials.
        </li>
        <li>
          Rejection — the original KYC details remain active and all financial
          activity resumes under the existing KYC credentials.
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
        There is no manual step required by the user to lift the freeze — it is
        lifted automatically by the Platform upon the Company&apos;s decision
        being recorded in the system.
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
        PART VIII — PRIZE MONEY DURING KYC MODIFICATION
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
        <strong>32. Prize Won During Review Period</strong>
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
        If a user wins a prize in an arena that concludes while their KYC
        modification request is under review — the prize money will not be
        disbursed immediately. Instead:
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
          The prize money is held in the Platform&apos;s escrow account in a
          pending state.
        </li>
        <li>
          The escrow hold is applied automatically as soon as the
          Platform&apos;s system detects that the winning user has an active KYC
          modification request.
        </li>
        <li>
          The user is notified via in-app notification and email that their
          prize is being held pending KYC modification review.
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
          Note: Participating in a paid arena as Captain while a KYC
          modification request is active is not recommended, as you will not be
          able to pay any new entry fees during the review period. However, if
          you were already registered for an arena before submitting your
          modification request, the arena will proceed normally — only the prize
          disbursement will be held pending modification resolution.
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
        <strong>33. Release Upon Approval</strong>
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
        If the KYC modification request is approved, the held prize money is
        released as follows:
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
          The prize is disbursed to the new KYC-verified bank account — not the
          original bank account — immediately upon approval.
        </li>
        <li>
          TDS at 30% is deducted from the prize amount before disbursement as
          per normal prize disbursement rules.
        </li>
        <li>Bank payout fee of Rs 5.90 is deducted.</li>
        <li>
          The user is notified of the prize disbursement via in-app notification
          and email.
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
        <strong>34. Release Upon Rejection</strong>
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
        If the KYC modification request is rejected, the held prize money is
        released as follows:
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
          The prize is disbursed to the original KYC-verified bank account — the
          one on record before the modification request was submitted.
        </li>
        <li>
          TDS at 30% is deducted from the prize amount before disbursement as
          per normal prize disbursement rules.
        </li>
        <li>Bank payout fee of Rs 5.90 is deducted.</li>
        <li>
          The user is notified of the prize disbursement and the rejection of
          the modification request simultaneously.
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
          Note: The 24-hour prize disbursement commitment in the Money Deposit
          &amp; Receive Policy is paused during a KYC modification review
          period. The disbursement clock restarts from the moment the
          modification request is resolved — approval or rejection.
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
        PART IX — REJECTION &amp; RESUBMISSION
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
        <strong>35. Grounds for Rejection</strong>
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
        A KYC modification request may be rejected on any of the following
        grounds:
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
          The eKYC re-verification failed — for example, the Aadhaar OTP was not
          entered correctly, the PAN verification returned a mismatch, or the
          bank account penny drop failed.
        </li>
        <li>
          The new details are inconsistent with existing verified KYC details —
          for example, the name on the new PAN does not match the name on the
          existing Aadhaar record.
        </li>
        <li>
          The documents or details submitted raise a compliance concern — for
          example, an Aadhaar number that has been previously flagged, or bank
          account details associated with a suspicious account.
        </li>
        <li>
          The portal link expired before the user completed the re-verification
          steps.
        </li>
        <li>
          The request contains incomplete or insufficient information to process
          the modification.
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
        <strong>36. Notification of Rejection</strong>
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
        The user is notified of the rejection via in-app notification and email.
        The notification includes:
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
        <li>The specific reason for rejection — clearly stated.</li>
        <li>The KYC fields that failed verification — if applicable.</li>
        <li>
          Guidance on what the user should check or correct before resubmitting.
        </li>
        <li>
          Confirmation that the original KYC details remain active and financial
          activity has resumed.
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
        <strong>37. Resubmission Process</strong>
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
        A user whose KYC modification request has been rejected may resubmit
        immediately — there is no waiting period before a new request can be
        submitted. To resubmit:
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
          The user raises a new in-app support ticket from Step 1 of the
          modification process.
        </li>
        <li>
          The user should address the specific reason for the previous rejection
          — for example, providing the correct Aadhaar number, ensuring the PAN
          name matches the Aadhaar name, or providing correct bank account
          details.
        </li>
        <li>
          The full 8-step modification process is repeated from the beginning
          for the new request.
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
          Note: There is no limit on the number of KYC modification requests a
          user can submit. However, each rejected request results in an extended
          period of financial activity freeze — plan accordingly and ensure your
          new documents are correct before resubmitting.
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
        PART X — PROHIBITED CONDUCT &amp; CONSEQUENCES
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
        <strong>38. Prohibited Conduct</strong>
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
        The following conduct in connection with KYC verification or KYC
        modification is strictly prohibited:
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
          Submitting false, fabricated, forged, or another person&apos;s
          identity documents (Aadhaar, PAN) for KYC verification or
          modification.
        </li>
        <li>
          Submitting bank account details that do not belong to the user —
          including using a family member&apos;s or third party&apos;s bank
          account without their knowledge and consent.
        </li>
        <li>
          Using a KYC modification request as a mechanism to redirect prize
          money or settlement payments to a third party&apos;s bank account.
        </li>
        <li>
          Submitting multiple simultaneous KYC modification requests through
          multiple channels to circumvent the one-at-a-time restriction.
        </li>
        <li>
          Using KYC modification to evade tax obligations — for example,
          changing PAN details to avoid TDS deduction or reporting.
        </li>
        <li>
          Using KYC modification to evade financial monitoring obligations under
          PMLA.
        </li>
        <li>
          Sharing the portal link provided by the support team with any third
          party.
        </li>
        <li>
          Clicking a KYC modification Magic Link or portal link that was not
          requested by the account holder — this constitutes unlawful access to
          another user&apos;s KYC process.
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
        <strong>39. Consequences</strong>
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
        Any user found to have engaged in prohibited conduct in connection with
        KYC or KYC modification is subject to the following consequences, at the
        Company&apos;s sole discretion:
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
          Immediate suspension of the user&apos;s Platform account and financial
          privileges pending investigation.
        </li>
        <li>
          Permanent revocation of KYC status — the user will be unable to
          participate in any financial transaction on the Platform.
        </li>
        <li>
          Permanent ban from the Platform and forfeiture of all funds associated
          with the prohibited activity.
        </li>
        <li>
          Reporting to the Financial Intelligence Unit — India (FIU-IND) under
          the Prevention of Money Laundering Act, 2002 for suspicious financial
          activity.
        </li>
        <li>Reporting to UIDAI for misuse of Aadhaar-based eKYC.</li>
        <li>
          Criminal complaint under applicable provisions of the Indian Penal
          Code, IT Act 2000, and Aadhaar Act 2016.
        </li>
        <li>
          Civil legal action for recovery of any amounts fraudulently obtained
          through misuse of the KYC system.
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
        PART XI — COMPANY&apos;S RIGHTS
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
        <strong>40. Right to Reject or Suspend</strong>
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
        The Company reserves the right to:
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
          Reject any KYC verification or modification request at its sole
          discretion if the documents submitted are invalid, inconsistent,
          unverifiable, or raise any compliance concern — without being
          obligated to provide a detailed explanation beyond the general reason
          for rejection.
        </li>
        <li>
          Suspend a user&apos;s KYC privileges and financial activity at any
          time if the Company has reasonable grounds to suspect fraudulent,
          deceptive, or non-compliant use of the KYC system.
        </li>
        <li>
          Place a KYC modification request on extended hold beyond the standard
          3-5 working day timeline if the Company is awaiting additional
          information or is conducting a regulatory compliance review — the user
          will be notified of any such extension.
        </li>
        <li>
          Permanently revoke KYC status from any user who is found to have
          submitted fraudulent KYC documents or engaged in any prohibited
          conduct listed in Section 38.
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
        <strong>41. Right to Report to Authorities</strong>
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
        The Company is legally obligated under the Prevention of Money
        Laundering Act, 2002 to report suspicious financial activity, including
        suspicious KYC submissions or modification requests, to the Financial
        Intelligence Unit — India (FIU-IND). The Company may also report:
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
        <li>Misuse of Aadhaar-based eKYC to UIDAI.</li>
        <li>
          Suspected tax evasion through KYC manipulation to the Income Tax
          Department.
        </li>
        <li>Identity fraud to the relevant law enforcement authorities.</li>
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
        The Company will exercise this right without prior notice to the user
        where required by law or where prior notice would compromise the
        integrity of any investigation.
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
        <strong>42. Governing Law</strong>
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
        These KYC Terms shall be governed by and construed in accordance with
        the laws of India, including the Prevention of Money Laundering Act
        2002, the Aadhaar Act 2016, RBI Guidelines, the Digital Personal Data
        Protection Act 2023, and the Information Technology Act 2000, as amended
        from time to time.
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
        <strong>43. Dispute Resolution</strong>
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
        Any dispute arising from or in connection with these KYC Terms shall
        first be attempted to be resolved through good-faith negotiation by
        contacting{" "}
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
        <strong>44. Contact</strong>
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
        For all KYC-related queries, modification requests, and disputes,
        contact the Company through the following channels:
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
                  <strong>KYC Modification Request</strong>
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
                  Raise in-app support ticket under Settings &gt; Support &gt;
                  KYC Modification Request
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
                  <strong>KYC Support Response</strong>
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
                  Acknowledgement within 24 hours of support ticket submission
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
                  <strong>Modification Decision</strong>
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
                  3 to 5 working days from successful portal re-verification
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
        These KYC &amp; KYC Modification Terms &amp; Conditions were last
        updated in April 2026 and are effective from May 1, 2026.
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
