import { Metadata } from "next";
import DocShell from "@/components/layout/DocShell";

export const metadata: Metadata = {
  title: "Legal Policies | Corpse",
  description: "Legal Policies for the Corpse platform.",
};

export default function PolicyPage() {
  return (
    <DocShell
      title="Legal Notices"
      badge="Legal"
      subtitle="Complete index of all legally binding documents governing your use of the Corpse platform."
    >
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
        <strong>Legal Notices</strong>
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
        <strong>Players Side</strong>
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
        Disclaimers • Legal Bindings • Policy Index • Governing Law • Contact
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
          Accessible via: Settings &gt; Legal | Binding on All Registered Users
        </em>
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
                    <strong>Governed By</strong>
                  </p>
                </td>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                    IT Act 2000 | IT Rules 2021 | DPDP Act 2023 | Consumer
                    Protection Act 2019
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
                    <strong>Legal Contact</strong>
                  </p>
                </td>
                <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}><a href="mailto:legal@corpsearena.com" style={{ color: "var(--red)" }}>legal@corpsearena.com</a></p>
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
          By downloading, installing, accessing, or using the Corpse platform in
          any capacity, you acknowledge that you have read, understood, and
          agree to be bound by all legal notices and policies referenced in this
          document.
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
        PART II Legally Binding Documents — Full Index
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        {" "}
        4. Account &amp; Authentication
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
        {" "}
        5. Privacy &amp; Data Protection
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
        {" "}
        6. Financial &amp; KYC
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
        {" "}
        7. Competitive Platform
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
        {" "}
        8. Community &amp; Conduct
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
        PART III Platform Disclaimer
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        {" "}
        9. Nature of the Platform
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
        {" "}
        10. Availability &amp; Uptime
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
        {" "}
        11. Content Accuracy
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
        {" "}
        12. Platform Modifications
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
        PART IV Financial Disclaimer
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        {" "}
        13. Entry Fees &amp; Prize Money
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
        {" "}
        14. Tax Obligations
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
        {" "}
        15. No Investment or Financial Advice
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
        {" "}
        16. Escrow Disclaimer
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
        PART V Competitive Disclaimer
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        {" "}
        17. ELO &amp; Rankings Disclaimer
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
        {" "}
        18. Match Results Disclaimer
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
        {" "}
        19. Anti-Cheat Disclaimer
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
        {" "}
        20. E-Sports Classification Notice
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
        PART VI Third-Party Disclaimer
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        {" "}
        21. Third-Party Services
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
        {" "}
        22. Game Publisher Disclaimer — Garena Free Fire
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
        {" "}
        23. Payment Gateway Disclaimer — Razorpay
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
        {" "}
        24. eKYC Provider Disclaimer
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
        {" "}
        25. App Store &amp; Play Store Disclaimer
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
        PART VII Age Restriction Notice
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        {" "}
        26. Minimum Age Requirements
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
        {" "}
        27. Minor User Restrictions
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
        PART VIII Limitation of Liability
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        {" "}
        28. General Limitation
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
        {" "}
        29. Maximum Liability Cap
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
        {" "}
        30. Exclusions from Liability
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
        PART IX Indemnification
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        {" "}
        31. User Indemnification Obligation
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
        PART X Intellectual Property Notice
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        {" "}
        32. Ownership of Platform IP
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
        {" "}
        33. Limited Licence to Users
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
        PART XI Governing Law &amp; Dispute Resolution
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        {" "}
        34. Governing Law
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
        {" "}
        35. Arbitration
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
        {" "}
        36. Jurisdiction
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
        PART XII Grievance Officer &amp; Contact
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        {" "}
        37. Grievance Officer
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
        {" "}
        38. Contact Directory
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
        PART I — LEGAL BINDING NOTICE
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
        <strong>1. Acceptance of All Legal Documents</strong>
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
        By downloading, installing, accessing, or using the Corpse platform —
        the mobile application operated by [CORPSE ESPORTS PRIVATE LIMITED]
        ("Company", "we", "us", "our") — you enter into a legally binding
        agreement with the Company governed by the documents listed in Part II
        of this Legal Notices document and all applicable laws of India.
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
        This acceptance is unconditional and applies regardless of whether you
        have read the documents in full. The Company strongly recommends that
        every user read all documents listed in Part II before using the
        Platform. Ignorance of any legal document, policy, or notice is not a
        valid defence against enforcement of any term contained therein.
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
          Important: Using the Platform — even as a Guest User — constitutes
          acceptance of all legal documents referenced in this notice. If you do
          not agree to any of these terms, you must immediately cease using the
          Platform and uninstall the application.
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
        <strong>2. How Legal Documents Are Accepted</strong>
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
        Legal documents are accepted by the user through the following
        mechanisms:
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
          Active acceptance — at account creation, users are presented with a
          summary of key legal documents and must actively check an acceptance
          box before their account is created. This constitutes explicit,
          recorded acceptance of the Corpse Terms &amp; Conditions and Corpse
          Privacy Policy as of the date of account creation.
        </li>
        <li>
          Continued use — continued use of the Platform after any update to any
          legal document constitutes acceptance of the updated version of that
          document. Users are notified of updates via in-app notification and
          email.
        </li>
        <li>
          Feature-specific acceptance — certain features requiring specific
          terms (such as KYC verification, paid arena participation, and guild
          creation) present their specific terms at the point of activation.
          Using those features constitutes acceptance of the relevant
          supplementary document.
        </li>
        <li>
          Mandatory acceptance — certain legal document updates are mandatory.
          The Platform may require users to re-accept updated terms before
          continuing to use the Platform. Declining mandatory acceptance will
          result in restricted access until acceptance is completed.
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
        <strong>3. Mandatory Nature of These Terms</strong>
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
        All legal documents referenced in Part II are mandatory conditions of
        Platform use — they are not optional, negotiable, or partial. A user
        cannot selectively accept some documents while rejecting others. The
        legal framework governing the Platform is a unified whole — all
        documents must be accepted in their entirety as a condition of access.
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
        The Company reserves the right to suspend or terminate the account of
        any user who violates any term contained in any document listed in Part
        II, in accordance with the Account Suspension &amp; Ban Terms &amp;
        Conditions.
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
        PART II — LEGALLY BINDING DOCUMENTS — FULL INDEX
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        The following documents constitute the complete legal framework
        governing your use of the Corpse platform. Every document listed below
        is legally binding upon acceptance as described in Part I. All documents
        are accessible within the Platform under Settings &gt; Legal.
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
        <strong>4. Account &amp; Authentication</strong>
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
                  <strong>Document</strong>
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
                  <strong>What It Governs</strong>
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
                  <strong>Who It Binds</strong>
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
                  Corpse Terms &amp; Conditions
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
                  Platform access, account creation, login rules, session
                  management, account deletion, general user obligations,
                  prohibited conduct, and governing law. The primary binding
                  agreement between the user and the Company.
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
                  All registered users and guest users
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
                  Sign Out Policy
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
                  Session management, voluntary sign-out, automatic session
                  expiry after 90 days of inactivity, force termination of
                  sessions on credential change or suspension, and re-login
                  process.
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
                  All registered users
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
        <strong>5. Privacy &amp; Data Protection</strong>
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
                  <strong>Document</strong>
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
                  <strong>What It Governs</strong>
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
                  <strong>Who It Binds</strong>
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
                  Corpse Privacy Policy v2.0
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
                  The complete, definitive framework governing all personal data
                  collection, use, storage, sharing, and protection across the
                  entire Platform — for all users and all organisers. Covers
                  account data, KYC data, arena data, financial data, ELO data,
                  guild data, organiser performance data, analytics, and all
                  data rights under the DPDP Act 2023.
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
                  All users, all organisers, all data subjects
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
        <strong>6. Financial &amp; KYC</strong>
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
                  <strong>Document</strong>
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
                  <strong>What It Governs</strong>
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
                  <strong>Who It Binds</strong>
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
                  Money Deposit &amp; Receive Policy
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
                  All financial transactions on the Platform — entry fee
                  payment, organiser security deposits, escrow structure,
                  platform commission and GST, prize money disbursement, TDS
                  deduction, organiser settlement, cancellation and refund
                  policy, and financial prohibited conduct.
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
                  All players (Captains), all organisers
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
                  KYC &amp; KYC Modification T&amp;C
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
                  KYC verification requirements, the eKYC verification process
                  (Aadhaar OTP, PAN, bank account), KYC data handling, KYC
                  modification procedure via support request and secure portal,
                  financial freeze during modification, and prize money handling
                  during KYC modification.
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
                  All KYC-verified users — Captains and Organisers
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
        <strong>7. Competitive Platform</strong>
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
                  <strong>Document</strong>
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
                  <strong>What It Governs</strong>
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
                  <strong>Who It Binds</strong>
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
                  Arena Joining Terms &amp; Conditions
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
                  All rules governing arena participation on the Platform —
                  eligibility, squad formation, registration lock, in-game ID
                  verification, emulator ban, room card rules, match conduct,
                  result submission via the auto-capture system, the 60-second
                  upload window, result disputes, disqualification, and platform
                  liability. Specific to Free Fire at launch.
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
                  All players participating in any arena — free or paid
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
                  Account Suspension &amp; Ban T&amp;C
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
                  The complete disciplinary framework — the 4-flag progressive
                  system (Flag 1: Warning, Flag 2: 1-day suspension, Flag 3:
                  1-week suspension, Flag 4+: Permanent ban), zero-tolerance
                  immediate ban violations, financial consequences of suspension
                  and ban, the in-app appeal process, and prohibited post-action
                  conduct.
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
                  All registered users
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
        <strong>8. Community &amp; Conduct</strong>
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
                  <strong>Document</strong>
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
                  <strong>What It Governs</strong>
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
                  <strong>Who It Binds</strong>
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
                  Guild Policy
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
                  All rules governing the Guild system — guild creation (KYC
                  required), the four-role hierarchy (Captain, Vice Captain,
                  Manager, Member), role permissions, the unit tier system
                  (Apex, Specialized, Core, Rising), guild membership rules,
                  request-based joining, leaving and removal, guild ELO and
                  leaderboard, the verified badge system, guild conduct and
                  prohibited behaviour, and the Company&apos;s authority to
                  suspend or dissolve guilds.
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
                  All guild members — Captains, Vice Captains, Managers, and
                  Members
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
                  IP, Trademark &amp; Copyright Policy
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
                  Ownership of all Corpse intellectual property — trademarks
                  (CORPSE, CORPSE ARENA, logo, tagline) and copyrighted works
                  (source code, UI/UX design, business documents). Limited
                  licence granted to users. Prohibited uses of Corpse IP.
                  Employee and contractor IP assignment. Enforcement mechanisms.
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
                  All users, all employees, all contractors, all API partners
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
        PART III — PLATFORM DISCLAIMER
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
        <strong>9. Nature of the Platform</strong>
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
        Corpse is a competitive esports infrastructure platform that provides
        tournament organisation tools, competitive ranking systems, squad and
        guild management features, and payment processing infrastructure for
        esports competitions. The Platform is operated by [CORPSE ESPORTS
        PRIVATE LIMITED], an Indian private limited company.
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
        The Platform is not a gambling platform, a fantasy sports platform, an
        online money gaming service, or a betting platform. The Platform is
        classified as an e-sports platform under the Online Gaming (Regulation)
        Act, 2025. Under Section 2(g) of that Act, e-sports is explicitly
        excluded from the definition of &apos;online money game&apos;. Entry
        fees paid on the Platform are tournament registration fees — not stakes,
        wagers, or bets.
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
          Corpse is an e-sports platform. Competitive gaming on Corpse is a
          skill-based activity governed by the rules of the relevant game title.
          Entry fees are tournament participation fees. Prize money is
          competitive prize pool money. These are legally distinct from
          gambling, wagering, or online money gaming.
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
        <strong>10. Availability &amp; Uptime</strong>
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
        The Company makes no warranty, express or implied, that the Platform
        will be available, uninterrupted, error-free, or free from technical
        failures at all times. The Platform may be unavailable due to:
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
          Scheduled maintenance — the Company will endeavour to notify users of
          scheduled maintenance windows via in-app notification in advance.
        </li>
        <li>
          Unscheduled technical failures — server outages, database issues, or
          infrastructure failures beyond the Company&apos;s reasonable control.
        </li>
        <li>
          Third-party service disruptions — outages at Razorpay, Firebase, the
          eKYC provider, Render, or any other third-party service provider on
          which the Platform depends.
        </li>
        <li>
          Force majeure events — events beyond the Company&apos;s control
          including natural disasters, government directives, telecommunications
          failures, and acts of God.
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
        The Company&apos;s liability for Platform unavailability is limited as
        described in Part VIII of this document.
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
        <strong>11. Content Accuracy</strong>
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
        The Company endeavours to ensure that all information displayed on the
        Platform — including match results, ELO scores, leaderboard rankings,
        and arena details — is accurate and up to date. However, the Company
        makes no warranty that Platform content is always accurate, complete, or
        current. Users should not rely on Platform content for any purpose other
        than participation in Platform features.
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
          Match results are subject to verification by the Company&apos;s trust
          and safety team before being finalised. Verified results are binding —
          see the Arena Joining Terms &amp; Conditions for the dispute process.
        </li>
        <li>
          ELO scores and leaderboard rankings are calculated by the
          Company&apos;s proprietary ELO Engine. The algorithm is the
          Company&apos;s intellectual property and is not disclosed.
          Calculations are final subject to the Company&apos;s right to adjust
          ELO for integrity violations.
        </li>
        <li>
          Arena listings, entry fees, prize pools, and organiser details are
          configured by individual organisers and are the organiser&apos;s
          responsibility. The Company does not independently verify the accuracy
          of organiser-configured arena details beyond the Platform&apos;s
          preset system.
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
        <strong>12. Platform Modifications</strong>
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
        The Company reserves the right to modify, update, discontinue, or remove
        any feature, function, or service offered on the Platform at any time,
        with or without notice, subject to the following:
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
          Material changes that affect user rights or financial interests will
          be communicated to users via in-app notification and email with
          reasonable advance notice.
        </li>
        <li>
          The Company will endeavour to provide at least 14 days advance notice
          before discontinuing any feature that users have paid for or that has
          active financial implications.
        </li>
        <li>
          The Company is not liable for any loss or inconvenience arising from
          Platform modifications made in the ordinary course of product
          development and maintenance.
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
        PART IV — FINANCIAL DISCLAIMER
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
        <strong>13. Entry Fees &amp; Prize Money</strong>
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
        Entry fees paid on the Platform are competitive tournament registration
        fees — they are not stakes, wagers, investments, or deposits in the
        financial services sense. The payment of an entry fee entitles the user
        to participate in the specified arena — it does not guarantee any
        specific outcome, result, or prize.
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
          Entry fees are non-refundable once a squad&apos;s tournament
          registration is confirmed — as set out in the Money Deposit &amp;
          Receive Policy.
        </li>
        <li>
          Prize money is competitive prize pool money funded entirely by the
          organiser&apos;s security deposit. The Platform does not contribute to
          prize pools from its own commission revenue.
        </li>
        <li>
          All prize money is subject to TDS deduction at 30% under Section
          194B/194BA of the Income Tax Act, 1961, before disbursement. The net
          amount received by the Captain will always be less than the gross
          prize amount displayed in the arena listing.
        </li>
        <li>
          Prize money amounts displayed in arena listings are gross amounts —
          before TDS deduction and bank payout fees. Users should not expect to
          receive the full displayed prize amount.
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
        <strong>14. Tax Obligations</strong>
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
        The Company deducts TDS at the applicable rate on prize winnings and
        deposits it with the Government of India. This TDS will appear in the
        recipient&apos;s Form 26AS. However, TDS deduction does not discharge
        the user&apos;s full income tax obligation. Users are individually
        responsible for:
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
        <li>Including prize income in their annual income tax return.</li>
        <li>
          Paying any additional income tax due beyond the TDS already deducted
          at source.
        </li>
        <li>
          Maintaining their own records of Platform transactions for tax filing
          purposes.
        </li>
        <li>
          Complying with all applicable GST obligations if acting as a
          GST-registered organiser.
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
          Important: The Company is not a tax advisor. Nothing in any Corpse
          legal document constitutes tax advice. Users and organisers should
          consult a qualified chartered accountant or tax professional regarding
          their specific tax obligations arising from Platform transactions.
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
        <strong>15. No Investment or Financial Advice</strong>
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
        Nothing on the Platform, in any Corpse legal document, or in any
        communication from the Company constitutes financial advice, investment
        advice, or any recommendation to invest, spend, or commit funds. The
        decision to pay entry fees, deposit security pools, or participate in
        any financial transaction on the Platform is entirely the user&apos;s
        own decision made at their own risk.
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
        <strong>16. Escrow Disclaimer</strong>
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
        All financial transactions on the Platform are processed through a nodal
        escrow account owned and operated by the Company in compliance with RBI
        guidelines. The escrow account is a transactional holding account — it
        is not a bank account, savings account, or financial instrument. No
        interest accrues on funds held in escrow in favour of users or
        organisers. The Company holds escrow funds as a trustee — not as
        beneficial owner — until the conditions for disbursement are met.
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
        PART V — COMPETITIVE DISCLAIMER
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
        <strong>17. ELO &amp; Rankings Disclaimer</strong>
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
        The ELO scores and rankings displayed on the Platform are calculated by
        the Company&apos;s proprietary ELO Engine based on competitive
        performance data from arenas played on the Platform. These rankings are
        Platform-specific competitive metrics and do not represent any external
        ranking, certification, or professional assessment of a player&apos;s
        skill.
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
          ELO scores can increase or decrease based on match results and the ELO
          rating of opposing players.
        </li>
        <li>
          ELO scores and rankings are subject to recalculation or adjustment by
          the Company if cheating, match manipulation, or result fraud is
          detected.
        </li>
        <li>
          The Company does not guarantee that ELO scores accurately reflect a
          player&apos;s true competitive skill level — they are a relative
          ranking metric within the Platform&apos;s competitive ecosystem.
        </li>
        <li>
          ELO scores reset seasonally — 60% of ELO is carried forward to the new
          season. Users accept this seasonal reset as a condition of Platform
          participation.
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
        <strong>18. Match Results Disclaimer</strong>
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
        Match results on the Platform are verified by the Company&apos;s trust
        and safety team using screenshot evidence submitted by players and
        organisers through the auto-capture system. The verification process is
        conducted in good faith based on available evidence. The Company does
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
          Have direct access to game server data from Garena or any other game
          publisher — results are verified using in-game scorecard screenshots
          only.
        </li>
        <li>
          Guarantee the accuracy of every verified result — verified results
          represent the Company&apos;s best determination based on available
          evidence and are final subject to the formal dispute process described
          in the Arena Joining Terms &amp; Conditions.
        </li>
        <li>
          Accept liability for incorrect results arising from fraudulent,
          manipulated, or unclear screenshot submissions by players or
          organisers.
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
        <strong>19. Anti-Cheat Disclaimer</strong>
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
        The Platform implements statistical analysis, match data review, and
        organiser/player reporting mechanisms to detect cheating and competitive
        integrity violations. However, the Company does not operate its own
        in-game anti-cheat software and relies on:
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
          Garena&apos;s native anti-cheat systems within Free Fire — for
          detection of in-game cheating tools.
        </li>
        <li>
          Statistical anomaly detection by the Platform&apos;s systems — for
          identifying unusual performance patterns.
        </li>
        <li>
          Community and organiser reports — for flagging suspected violations.
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
        The Company cannot guarantee detection of all cheating instances.
        Players who are found to have benefited from undetected cheating after
        prizes have been disbursed may have their results overturned and prizes
        recalled where technically possible.
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
        <strong>20. E-Sports Classification Notice</strong>
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
        The Corpse platform is an e-sports platform. Competitive play on the
        Platform involves real skill — including strategic decision-making,
        reaction time, game knowledge, teamwork, and technical proficiency. The
        outcomes of matches on the Platform are determined predominantly by
        skill, not by chance.
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
        The Platform is not subject to the regulatory framework applicable to
        online money gaming, fantasy sports, or gambling under Indian law. The
        Platform operates under the Online Gaming (Regulation) Act, 2025, which
        recognises e-sports as a legitimate competitive sport distinct from
        online money gaming.
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
          If you have any questions about the legal classification of the
          Platform or the nature of e-sports competitions, contact
          <a
            href="mailto:legal@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            legal@corpsearena.com
          </a>
          .
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
        PART VI — THIRD-PARTY DISCLAIMER
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
        <strong>21. Third-Party Services</strong>
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
        The Platform integrates with and relies upon third-party services to
        deliver certain features. The Company is not responsible for the
        availability, accuracy, reliability, or conduct of any third-party
        service provider. Third-party services used by the Platform include
        Razorpay (payment processing), an authorised eKYC service provider
        (identity verification), Firebase by Google (push notifications and
        analytics), Sentry (error monitoring), Render and Neon (cloud
        infrastructure), Apple Inc. (Apple Sign-In), and Google LLC (Google
        OAuth).
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
        Each third-party provider operates under their own terms of service and
        privacy policies, which are independent of the Company&apos;s legal
        documents. The Company has no control over and accepts no liability for:
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
          Service outages, errors, or failures at any third-party provider.
        </li>
        <li>
          Changes to third-party services that affect Platform functionality.
        </li>
        <li>
          Data processing practices of third-party providers beyond the
          Company&apos;s contractual obligations with them.
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
        <strong>22. Game Publisher Disclaimer — Garena Free Fire</strong>
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
        The Corpse platform hosts competitive arenas for Free Fire (Garena Free
        Fire MAX), a game title published by Garena Online Private Limited
        ("Garena"). The Company is an independent platform operator and is not
        affiliated with, endorsed by, sponsored by, or officially partnered with
        Garena in any capacity.
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
          Free Fire is a trademark and intellectual property of Garena Online
          Private Limited. The Company&apos;s use of Free Fire&apos;s game
          infrastructure (including custom rooms) is conducted in accordance
          with Garena&apos;s terms of service for custom room creation.
        </li>
        <li>
          The Company has no control over Garena&apos;s game servers, account
          management systems, or anti-cheat enforcement. Garena&apos;s decisions
          regarding player accounts — including bans and restrictions — are
          entirely within Garena&apos;s authority and are not subject to appeal
          through the Company.
        </li>
        <li>
          The Company is not responsible for Garena&apos;s server downtime,
          maintenance, or any disruption to Free Fire gameplay that affects
          Platform arenas.
        </li>
        <li>
          Garena may change, discontinue, or restrict features of Free Fire at
          any time. Such changes may affect Platform functionality — the Company
          is not liable for any impact on Platform arenas arising from
          Garena&apos;s product decisions.
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
        <strong>23. Payment Gateway Disclaimer — Razorpay</strong>
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
        Payment processing on the Platform is handled by Razorpay India Private
        Limited, a regulated payment aggregator authorised by the Reserve Bank
        of India. The Company is not a payment gateway, bank, or financial
        institution.
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
          The Company does not store, process, or transmit payment card data —
          all card data is handled directly by Razorpay&apos;s PCI-DSS compliant
          infrastructure.
        </li>
        <li>
          Payment disputes, chargeback processes, and payment gateway technical
          failures are subject to Razorpay&apos;s policies and timelines. The
          Company cooperates with Razorpay&apos;s dispute resolution process but
          is not responsible for delays caused by Razorpay&apos;s processing
          systems or the user&apos;s bank.
        </li>
        <li>
          The availability of specific payment methods (UPI, net banking, cards,
          wallets) is subject to Razorpay&apos;s current supported options and
          any RBI directives. The Company is not responsible for the
          unavailability of any specific payment method.
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
        <strong>24. eKYC Provider Disclaimer</strong>
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
        KYC verification on the Platform is performed by an authorised
        third-party eKYC API service provider. The identity of this provider is
        not publicly disclosed for operational and security reasons.
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
          The eKYC provider is a UIDAI-authorised entity for Aadhaar-based
          verification and operates in compliance with all applicable Indian
          regulatory requirements.
        </li>
        <li>
          The eKYC provider&apos;s processing of Aadhaar data is governed by the
          Aadhaar Act 2016 and UIDAI regulations. The Company does not store
          full Aadhaar data on its own servers.
        </li>
        <li>
          KYC verification failures, delays, or errors attributable to the eKYC
          provider&apos;s systems are outside the Company&apos;s direct control.
          The Company will work with the eKYC provider to resolve such issues
          but cannot guarantee specific resolution timelines.
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
        <strong>25. App Store &amp; Play Store Disclaimer</strong>
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
        The Corpse app is distributed through the Apple App Store and Google
        Play Store. These distribution platforms are operated by Apple Inc. and
        Google LLC respectively and are subject to their own terms of service
        and policies.
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
          Apple Inc. and Google LLC are not parties to the Company&apos;s legal
          documents and bear no responsibility for the Platform&apos;s content,
          features, or conduct.
        </li>
        <li>
          Any claims, disputes, or complaints related to the Platform must be
          directed to the Company — not to Apple or Google.
        </li>
        <li>
          App Store and Play Store ratings, reviews, and user-generated content
          on those platforms are outside the Company&apos;s control.
        </li>
        <li>
          The Company&apos;s legal documents govern the relationship between
          users and the Company. Apple and Google&apos;s terms of service govern
          the relationship between users and those platforms separately and
          independently.
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
        PART VII — AGE RESTRICTION NOTICE
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
        <strong>26. Minimum Age Requirements</strong>
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
        The Platform is open to users of all ages subject to the following
        restrictions. There is no minimum age for creating a Registered User
        account. However, certain Platform features are restricted based on age
        and KYC status:
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
                  <strong>Feature</strong>
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
                  <strong>Minimum Requirement</strong>
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
                  <strong>Basis</strong>
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
                  Creating a Registered User account
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
                  No minimum age
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
                  Platform open to all ages for basic registration
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
                  18 years + KYC verified
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
                  Financial transaction — KYC requires 18+ identity documents
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
                  18 years + KYC verified
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
                  Financial disbursement — KYC required
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
                  Depositing security pool as Organiser
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
                  18 years + KYC verified
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
                  Financial transaction — KYC required
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
                  18 years + KYC verified
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
                  Financial disbursement — KYC required
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
                  No minimum age
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
                  No direct financial transaction — invited by KYC-verified
                  Captain
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
                  Creating a Guild
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
                  18 years + KYC verified
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
                  KYC required for guild creation
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
                  No minimum age
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
        <strong>27. Minor User Restrictions</strong>
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
        Users below the age of 18 years ("Minor Users") are subject to the
        following restrictions, which are enforced technically by the Platform:
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
          Minor Users cannot complete KYC verification — their identity
          documents are not collected.
        </li>
        <li>
          Minor Users cannot act as Captain of any squad in any paid arena.
        </li>
        <li>
          Minor Users cannot pay entry fees or make any financial transaction on
          the Platform.
        </li>
        <li>Minor Users cannot create guilds.</li>
        <li>
          Minor Users can participate in paid arenas only as squad members
          invited by a KYC-verified adult Captain.
        </li>
        <li>Minor Users can participate in free arenas without restriction.</li>
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
        Under the Digital Personal Data Protection Act, 2023, the processing of
        personal data of users below 18 years requires verifiable parental
        consent. Parents or legal guardians of Minor Users who have concerns
        about their child&apos;s use of the Platform should contact
        <a href="mailto:legal@corpsearena.com" style={{ color: "var(--red)" }}>
          legal@corpsearena.com
        </a>
        .
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
        PART VIII — LIMITATION OF LIABILITY
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
        <strong>28. General Limitation</strong>
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
        To the maximum extent permitted by applicable Indian law, the Company
        shall not be liable to any user for any indirect, incidental, special,
        consequential, or punitive damages arising out of or in connection with
        the use of or inability to use the Platform — including but not limited
        to loss of data, loss of profits, loss of competitive ranking, loss of
        prize money, loss of goodwill, or any other intangible loss — even if
        the Company has been advised of the possibility of such damages.
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
        <strong>29. Maximum Liability Cap</strong>
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
        Where the Company is found liable to a user for direct damages arising
        from a breach of its obligations under any legal document — and where
        such liability cannot be excluded under applicable Indian law — the
        Company&apos;s total aggregate liability to that user shall not exceed
        the greater of:
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
          The total amount of entry fees paid by that user on the Platform in
          the 3 calendar months immediately preceding the event giving rise to
          the claim, or
        </li>
        <li>Rs 1,000 (One Thousand Rupees).</li>
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
        This liability cap applies to the aggregate of all claims by the same
        user arising from the same or related events — not to each individual
        claim separately.
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
        <strong>30. Exclusions from Liability</strong>
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
        Without limiting the general limitation in Section 28, the Company is
        specifically not liable for:
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
          Game publisher actions — Garena&apos;s decisions regarding player
          accounts, server availability, or game changes that affect Platform
          arenas.
        </li>
        <li>
          Player device or connectivity failures — device crashes, network
          outages, or ISP failures experienced by users during Platform use.
        </li>
        <li>
          Third-party service failures — outages or errors at Razorpay,
          Firebase, the eKYC provider, or any other third-party service
          provider.
        </li>
        <li>
          Force majeure events — events outside the Company&apos;s reasonable
          control.
        </li>
        <li>
          User-caused losses — losses arising from a user&apos;s own violation
          of Platform rules, including disqualification and forfeiture of entry
          fees.
        </li>
        <li>
          Unauthorised account access — losses arising from a user&apos;s
          failure to maintain the security of their account credentials.
        </li>
        <li>
          Internal squad disputes — disagreements between squad members about
          prize distribution or participation — which are entirely the
          Captain&apos;s responsibility.
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
        PART IX — INDEMNIFICATION
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
        <strong>31. User Indemnification Obligation</strong>
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
        By using the Platform, you agree to indemnify, defend, and hold harmless
        [CORPSE ESPORTS PRIVATE LIMITED], its directors, officers, employees,
        contractors, agents, and successors from and against any and all claims,
        damages, losses, costs, and expenses (including reasonable legal fees)
        arising out of or in connection with:
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
          Your use of or access to the Platform in violation of any applicable
          law or regulation.
        </li>
        <li>
          Your violation of any term contained in any legal document referenced
          in Part II of this Legal Notices document.
        </li>
        <li>
          Your violation of any third party&apos;s rights — including
          intellectual property rights, privacy rights, or contractual rights.
        </li>
        <li>
          Any content you submit to the Platform — including match result
          screenshots, profile content, or any user-generated content — that
          infringes any third party&apos;s rights or violates applicable law.
        </li>
        <li>
          Any fraudulent, deceptive, or manipulative conduct by you on the
          Platform — including match fixing, KYC fraud, or payment fraud.
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
        This indemnification obligation survives termination of your account and
        these Terms.
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
        PART X — INTELLECTUAL PROPERTY NOTICE
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
        <strong>32. Ownership of Platform IP</strong>
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
        All intellectual property on the Corpse platform — including but not
        limited to the CORPSE trademark, CORPSE ARENA trademark, the Corpse
        logo, the tagline &apos;The Operating System for Esports&apos;, all
        source code, UI/UX design, ELO Engine implementation, match result
        processing systems, and all written content — is the exclusive property
        of [CORPSE ESPORTS PRIVATE LIMITED].
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
        No user, organiser, guild member, contractor, or third party acquires
        any ownership, co-ownership, or interest in any Platform intellectual
        property by virtue of their relationship with the Company or their use
        of the Platform — except as expressly confirmed in a separate written
        agreement signed by a duly authorised director of the Company.
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
        For the complete intellectual property framework governing the Platform,
        refer to the IP, Trademark &amp; Copyright Policy accessible under
        Settings &gt; Legal.
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
        <strong>33. Limited Licence to Users</strong>
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
        By accepting these legal terms, you are granted a limited,
        non-exclusive, non-transferable, non-sublicensable, revocable licence to
        access and use the Platform and its features strictly for personal,
        non-commercial purposes in accordance with the Platform&apos;s legal
        documents. This licence does not include any right to:
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
          Copy, reproduce, or store any part of the Platform&apos;s code,
          design, or content.
        </li>
        <li>
          Use Platform content — including match data, ELO scores, or player
          profiles — for any commercial purpose.
        </li>
        <li>
          Sub-licence, assign, or transfer the licence to any third party.
        </li>
        <li>
          Use Platform branding, logos, or trademarks in any communication or
          publication without explicit written consent.
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
        This licence terminates automatically and immediately upon account
        deletion, suspension, or any violation of the Platform&apos;s legal
        documents.
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
        PART XI — GOVERNING LAW &amp; DISPUTE RESOLUTION
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
        <strong>34. Governing Law</strong>
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
        All legal documents governing the use of the Corpse platform, all
        disputes arising from or in connection with Platform use, and all
        matters relating to the relationship between the user and the Company
        are governed exclusively by the laws of India — including the
        Information Technology Act 2000, the Digital Personal Data Protection
        Act 2023, the Consumer Protection Act 2019, the Arbitration and
        Conciliation Act 1996, and all other applicable Indian laws and
        regulations as amended from time to time.
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
        <strong>35. Arbitration</strong>
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
        Any dispute, claim, or controversy arising out of or relating to the use
        of the Platform, any legal document referenced in Part II, or the
        relationship between the user and the Company — that cannot be resolved
        through the Platform&apos;s in-app grievance process — shall be
        submitted to binding arbitration under the Arbitration and Conciliation
        Act, 1996, subject to the following:
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
        <li>Seat of arbitration — Guwahati, Assam, India.</li>
        <li>Language of arbitration — English.</li>
        <li>
          Number of arbitrators — a sole arbitrator appointed by mutual
          agreement of the parties or, failing agreement, by the relevant court.
        </li>
        <li>
          Costs — each party bears their own costs of arbitration unless the
          arbitrator orders otherwise.
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
        The arbitration award shall be final and binding on both parties.
        Nothing in this clause prevents either party from seeking urgent interim
        or injunctive relief from a court of competent jurisdiction at any time
        without prior recourse to arbitration.
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
        <strong>36. Jurisdiction</strong>
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
        For matters not subject to arbitration — including applications for
        urgent interim relief and enforcement of arbitration awards — the
        parties submit to the exclusive jurisdiction of the competent courts at
        Guwahati, Assam, India. Users who are consumers under the Consumer
        Protection Act 2019 retain the right to approach the appropriate
        Consumer Disputes Redressal Commission regardless of this jurisdiction
        clause.
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
        PART XII — GRIEVANCE OFFICER &amp; CONTACT
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
        <strong>37. Grievance Officer</strong>
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
        In accordance with the Information Technology (Intermediary Guidelines
        and Digital Media Ethics Code) Rules, 2021 and the Digital Personal Data
        Protection Act, 2023, the Company has appointed a Grievance Officer to
        address user complaints and data rights requests:
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
                  <strong>Grievance Officer</strong>
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
                  [TO BE DESIGNATED — Name to be updated before launch]
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
                  <strong>Designation</strong>
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
                  Grievance Officer — [CORPSE ESPORTS PRIVATE LIMITED]
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
                  <strong>Email</strong>
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
                  <strong>Acknowledgement Time</strong>
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
                  Within 24 hours of complaint receipt
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
                  <strong>Resolution Time</strong>
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
                  Within 30 days of acknowledgement
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
                  <strong>Escalation</strong>
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
                  Data Protection Board of India (once established under DPDP
                  Act 2023) for data-related complaints
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
        <strong>38. Contact Directory</strong>
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
        For all Platform-related queries, complaints, and legal matters, use the
        following contact channels:
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
                  <strong>Matter</strong>
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
                  <strong>Contact</strong>
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
                  <strong>Response Time</strong>
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
                  General support &amp; app issues
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
                  </a>{" "}
                  or in-app support ticket
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
                  24-48 hours
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
                  Payment disputes &amp; financial issues
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
                  </a>{" "}
                  — in-app support ticket
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
                  24 hours
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
                  KYC modification requests
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
                  In-app: Settings &gt; Support &gt; KYC Modification
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
                  Acknowledgement within 24 hours
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
                  Result disputes
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
                  In-app: Arena &gt; Dispute Result
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
                  Decision within 24 hours of submission
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
                  Disciplinary appeals
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
                  In-app: Settings &gt; Support &gt; Appeal a Disciplinary
                  Action
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
                  Decision within 24 hours
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
                  Privacy complaints &amp; data rights
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
                  — Subject: PRIVACY COMPLAINT
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
                  Acknowledgement 24 hrs, resolution 30 days
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
                  IP infringement reports
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
                    href="mailto:ip@corpsearena.com"
                    style={{ color: "var(--red)" }}
                  >
                    ip@corpsearena.com
                  </a>{" "}
                  — Subject: IP Infringement Report
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
                  Acknowledgement within 5 working days
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
                  Legal matters &amp; formal notices
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
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  5 working days
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
                  Grievance Officer
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
                  — Subject: GRIEVANCE
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
                  Acknowledgement 24 hrs, resolution 30 days
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
        These Legal Notices were last updated in April 2026 and are effective
        from May 1, 2026.
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
        <em>
          All rights reserved. These Legal Notices are accessible under Settings
          &gt; Legal within the Corpse app.
        </em>
      </p>
    </DocShell>
  );
}
