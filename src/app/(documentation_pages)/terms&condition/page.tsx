import { Metadata } from "next";
import DocShell from "@/components/layout/DocShell";

export const metadata: Metadata = {
  title: "Corpse Terms & Conditions | Corpse",
  description: "Corpse Terms & Conditions for the Corpse platform.",
};

export default function PolicyPage() {
  return (
    <DocShell
      title="Terms & Conditions"
      badge="Legal"
      subtitle="Corpse Terms & Conditions — the primary binding agreement for all registered users."
    >
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
        <strong>Players Side — Full Platform</strong>
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
        Profile • ELO • Ecosystem • Arena • Guild • KYC • Payments • Conduct
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
          Binding on: All Registered Users | All Players | All Captains | All
          Squad Members
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
                  IT Act 2000 | DPDP Act 2023 | Consumer Protection Act 2019 |
                  IT Rules 2021
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
          By downloading, installing, accessing, or using the Corpse platform in
          any manner, you confirm that you have read, understood, and agree to
          be bound by these Terms &amp; Conditions in their entirety. These
          Terms are binding regardless of whether you actively accept them —
          continued use of the Platform constitutes acceptance.
        </em>
      </p>
      {/* <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>Table of Contents</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART I Introduction &amp; Acceptance</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 1. Purpose &amp; Scope</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 2. Acceptance of Terms</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 3. Definitions</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 4. Relationship to Other Corpse Policies</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART II Account &amp; Player Profile</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 5. Account Creation &amp; Eligibility</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 6. Access Tiers</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 7. Player Profile — Fields &amp; Rules</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 8. Public Profile — What Others Can See</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 9. Private Data — What Remains Hidden</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 10. One Account Per User</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART III Authentication &amp; Session Management</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 11. Login Methods</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 12. Single Device Session Model</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 13. 90-Day Inactivity Expiry</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 14. Force Termination of Sessions</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART IV ELO Engine</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 15. What ELO Is on Corpse</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 16. How Player ELO Is Calculated</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 17. ELO Going Up and Down</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 18. Separate ELO Scores — Player, Squad, Guild</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 19. ELO Leaderboard — Public Ranking</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 20. Company's Right to Adjust ELO</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART V Ecosystem Pipeline — Player Progression</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 21. What the Ecosystem Pipeline Is</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 22. The Six Progression Tiers</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 23. How Players Progress Through Tiers</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 24. Seasonal Reset — 60% ELO Carry-Forward</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 25. Tier Displayed on Profile</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 26. Company's Right to Reset Tier</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART VI Squad System</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 27. What a Squad Is</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 28. Captain's Role &amp; Responsibilities</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 29. Invite Token System</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 30. Squad Participation Rules</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 31. Squad vs Guild — Key Distinction</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART VII Arena Participation</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 32. Free &amp; Paid Arenas</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 33. Eligibility to Join</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 34. Arena Timeline</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 35. Registration Lock — No Withdrawal</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 36. Room Card — 30 Minutes Before Match</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 37. In-Game Identity &amp; Emulator Rules</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 38. Match Conduct</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 39. Result Submission — Auto-Capture System</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 40. Result Disputes</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 41. Disqualification</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART VIII Guild Membership</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 42. What a Guild Is</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 43. Guild Roles</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 44. Unit Tier System</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 45. Joining, Leaving &amp; Removal</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 46. One Guild Per Player</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART IX KYC Verification</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 47. When KYC Is Required</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 48. What Is Verified</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 49. Data Storage</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 50. KYC Modification</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART X Financial Transactions</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 51. Entry Fee Payment</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 52. Prize Disbursement</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 53. Non-Refundable Entry Fees</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 54. Cancellation &amp; Refund Scenarios</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART XI Notifications</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 55. Notification Channels</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 56. What Triggers Notifications</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 57. Player's Responsibility</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART XII Leaderboards</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 58. Player ELO Leaderboard</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 59. Guild Leaderboard</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 60. Leaderboard Integrity</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART XIII User Obligations &amp; Prohibited Conduct</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 61. Acceptable Use</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 62. Prohibited Conduct — Full List</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 63. Reporting Violations</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART XIV Account Suspension &amp; Ban</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 64. Flag System Summary</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 65. Immediate Ban Violations</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 66. Appeals</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 67. Financial Consequences</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART XV Account Deletion</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 68. What Deletion Means</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 69. Pre-Deletion Requirements</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 70. Data After Deletion</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 71. Re-Registration</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART XVI Intellectual Property</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 72. Platform Content Ownership</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 73. Limited Licence to User</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 74. User-Generated Content</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>
            PART XVII Limitation of Liability &amp; Indemnification
          </strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 75. Platform Liability Limits</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 76. User Indemnification</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART XVIII Amendments &amp; Updates</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 77. Company's Right to Amend</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 78. Notification of Changes</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 79. Binding Nature of Amendments</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
          <strong>PART XIX Governing Law, Grievance &amp; Contact</strong>
        </p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 80. Governing Law</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 81. Dispute Resolution &amp; Arbitration</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 82. Grievance Redressal — IT Rules 2021</p>
        <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}> 83. Contact</p> */}
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <strong>PART I — INTRODUCTION &amp; ACCEPTANCE</strong>
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
        <strong>1. Purpose &amp; Scope</strong>
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
        These Terms &amp; Conditions — Players Side (&quot;Players T&amp;C&quot;
        or &quot;Terms&quot;) constitute the comprehensive, binding legal
        agreement governing every aspect of a player's use of the Corpse
        platform, mobile application, and all associated services (collectively,
        the &quot;Platform&quot;), operated by [CORPSE ESPORTS PRIVATE LIMITED]
        (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
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
        These Terms cover the complete player experience on the Platform — from
        account creation and profile management through ELO ranking, ecosystem
        progression, squad formation, arena participation, guild membership, KYC
        verification, financial transactions, leaderboards, notifications, and
        account management. They apply to every registered user of the Platform
        in their capacity as a player, regardless of whether they compete in
        paid arenas, free arenas, or use the Platform purely for social and
        community features.
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
        These Terms are the primary document a player must understand before
        using the Platform. Where specific topics are governed in greater detail
        by supplementary policies — such as the Arena Joining T&amp;C or the
        Money Deposit &amp; Receive Policy — these Terms provide the governing
        framework and those policies provide the operational detail. In the
        event of any conflict between these Terms and a supplementary policy on
        a matter of player conduct, these Terms prevail unless the supplementary
        policy expressly states otherwise.
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
        <strong>2. Acceptance of Terms</strong>
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
        By downloading, installing, accessing, or using the Platform in any
        manner — including browsing as a Guest User — you accept these Terms in
        their entirety. Acceptance is not conditional on your having read every
        word — by using the Platform, you are deemed to have accepted these
        Terms unconditionally.
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
        When the Company amends these Terms — as described in Part XVIII — the
        amended Terms are binding on you from the date of their publication on
        the Platform, regardless of whether you have actively reviewed the
        changes or clicked an acceptance button. Continued use of the Platform
        after an amendment is published constitutes irrevocable acceptance of
        the amended Terms. If you do not agree to the Terms as amended, your
        only remedy is to cease using the Platform and delete your account.
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
          Important: These Terms are a legally binding contract under the
          Information Technology Act, 2000 and the Indian Contract Act, 1872. By
          using the Platform, you represent that you have the legal capacity to
          enter into a binding agreement under Indian law.
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
        <strong>3. Definitions</strong>
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
        For the purpose of these Terms, the following definitions apply in
        addition to any definitions provided in the Corpse Terms &amp;
        Conditions:
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
                <strong>Term</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Definition</strong>
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
                Platform
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The Corpse mobile application (iOS and Android), website, and
                all associated services operated by the Company
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
                Player
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Any Registered User who uses the Platform to participate in
                arenas, form squads, join guilds, or engage with competitive
                features
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
                Captain
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The Registered User who creates and leads a squad, pays entry
                fees, and receives prize money on behalf of the squad
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
                Squad
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                A temporary team of players registered together for a specific
                arena
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
                Guild
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                A persistent competitive team on the Platform with its own
                identity, ELO, and leadership structure
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
                Arena
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                A structured competitive tournament on the Platform — free or
                paid
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
                ELO
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The Platform's proprietary skill rating system — a numerical
                score reflecting a player's competitive performance
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
                Ecosystem Pipeline
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The Platform's six-tier player progression system from entry
                level to elite competitive status
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
                KYC
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Know Your Customer verification — identity and financial
                verification required for financial transactions
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
                Magic Link
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                A secure, single-use, time-limited authentication link sent to a
                user's registered email for passwordless login
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
                Room Card
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The custom match room ID and password distributed to registered
                players 30 minutes before an arena match starts
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
                Flag
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                A formal disciplinary record placed on a player's account
                following a confirmed rule violation
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
                In-Game ID
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                A player's unique identifier within a specific game title —
                verified and registered on the Platform
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
        <strong>4. Relationship to Other Corpse Policies</strong>
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
        These Players T&amp;C operate alongside the following supplementary
        policies. Each supplementary policy governs its specific subject matter
        in full detail — these Terms provide the overarching player framework
        within which those policies operate:
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
                <strong>Policy</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                General platform rules, account creation, session management,
                account deletion — the foundational agreement for all users
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
                Arena Joining T&amp;C
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Detailed rules for arena registration, match conduct, result
                submission, disputes, and disqualification
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
                Entry fee payment, prize disbursement, refund policy, TDS, and
                all financial flows
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
                KYC verification process, data handling, modification procedure,
                and financial freeze during modification
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
                Flag system, warning process, suspension durations, permanent
                ban, and appeal mechanism
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
                Guild creation, roles, unit tiers, membership rules, ELO, and
                conduct
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
                Session management, voluntary sign-out, inactivity expiry, and
                force termination
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
                Platform IP ownership, user licence, prohibited uses, and
                enforcement
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
                Account Creation &amp; Deletion Policy
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Account creation eligibility, deletion process, data after
                deletion, and re-registration
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
                Privacy Policy
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Collection, use, storage, and deletion of personal data
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
        <strong>PART II — ACCOUNT &amp; PLAYER PROFILE</strong>
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
        <strong>5. Account Creation &amp; Eligibility</strong>
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
        To access the full features of the Platform, including arena
        participation, squad formation, and guild membership, a user must create
        a Registered User account. Account creation is open to users of all ages
        subject to the tier restrictions described in Section 6. By creating an
        account, you represent that:
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
          All information provided during registration is accurate, complete,
          and current.
        </li>
        <li>
          You will maintain the accuracy of your account information throughout
          your use of the Platform.
        </li>
        <li>
          You have not previously been permanently banned from the Platform —
          banned users may only create new accounts under the conditions
          specified in the Account Suspension &amp; Ban T&amp;C.
        </li>
        <li>
          You will not create or maintain more than one account on the Platform
          at any time — unless you have been permanently banned and are creating
          a new account under the conditions permitted by the Account Suspension
          &amp; Ban T&amp;C.
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
        <strong>6. Access Tiers</strong>
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
        The Platform operates a tiered access model based on age and KYC
        verification status. The following table sets out what each tier of user
        can and cannot do on the Platform:
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
                <strong>User Type</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Age</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Arena — As Squad Member</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Arena — As Captain / Pay Entry Fee</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Guild Membership</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>KYC Required</strong>
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
                Guest User
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Any
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                No
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
                Minor Registered User
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Under 18
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Yes — by Captain's invite only
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                No — KYC required
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                No
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
                Standard Registered User
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                18+
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                No — KYC required first
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                No
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
                KYC-Verified User
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                18+
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                Yes — full access
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                Yes
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
          Note: Minor Users below 18 years of age may participate in arenas only
          as squad members — they cannot act as Captain, pay entry fees, or
          receive prize money under any circumstance. Minor Users also cannot
          create or lead a guild.
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
        <strong>7. Player Profile — Fields &amp; Rules</strong>
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
        Every Registered User has a player profile on the Platform. The profile
        contains the following fields, each governed by specific rules:
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
                <strong>Profile Field</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Editable?</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Rules</strong>
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
                Username
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                No — permanent once set
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Chosen at account creation. Cannot be changed under any
                circumstance. Choose carefully — your username is your permanent
                identity on the Platform.
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
                Avatar
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Yes — changeable anytime
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Must comply with content rules. Prohibited: sexually explicit
                images, images impersonating other users or public figures,
                images containing hate speech or offensive content. The Company
                may remove a non-compliant avatar without notice.
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
                In-Game ID
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Yes — updatable with verification
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                One in-game ID per game title. Must be your actual active game
                account. Updating requires identity verification. Cannot be
                another player's ID.
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
                Email Address
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Yes — with verification
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Changing email requires verification of both old and new
                addresses. Triggers force sign-out of all active sessions.
                Governed by Sign Out Policy.
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
                ELO Score
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                No — system calculated
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Calculated automatically by the Platform's ELO engine based on
                competitive performance. Cannot be manually edited by any user.
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
                Ecosystem Tier
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                No — system assigned
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Assigned automatically based on ELO score and other performance
                factors. Resets seasonally with 60% ELO carry-forward.
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
        <strong>8. Public Profile — What Others Can See</strong>
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
        When another user visits your player profile on the Platform, the
        following information is publicly visible:
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
        <li>Your username — your permanent platform identity.</li>
        <li>Your avatar — the profile image you have set.</li>
        <li>
          Your ELO score — your current competitive rating on the Platform's ELO
          leaderboard.
        </li>
        <li>
          Your guild tag — the tag of the guild you are currently a member of,
          if any.
        </li>
        <li>
          Your Ecosystem Pipeline tier — your current progression tier within
          the Platform's competitive hierarchy.
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
        Your public profile cannot be set to private — the Platform's commitment
        to competitive transparency requires all player profiles to be publicly
        accessible to other registered users.
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
        <strong>9. Private Data — What Remains Hidden</strong>
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
        The following information is private and is not visible to other users
        on your public profile:
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
          Your match history and arena participation record — these are
          accessible only to you within your own account.
        </li>
        <li>
          Your Free Fire in-game ID — your game account identifier is registered
          on the Platform for verification purposes but is not displayed on your
          public profile.
        </li>
        <li>Your registered email address.</li>
        <li>Your KYC details — Aadhaar, PAN, and bank account information.</li>
        <li>Your device information and session data.</li>
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
        <strong>10. One Account Per User</strong>
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
        Each user may maintain only one active Registered User account on the
        Platform at any time. Creating multiple accounts — whether to circumvent
        a suspension, manipulate ELO rankings, or for any other purpose — is a
        violation of these Terms and the Account Suspension &amp; Ban T&amp;C.
        Confirmed multiple-account creation will result in all secondary
        accounts being permanently banned and a flag being applied to the
        primary account.
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
        <strong>PART III — AUTHENTICATION &amp; SESSION MANAGEMENT</strong>
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
        <strong>11. Login Methods</strong>
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
        The Platform supports three authentication methods. A user's login
        method is determined by how they created their account and cannot be
        changed without a formal account update through support:
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
                <strong>Method</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>How It Works</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Re-Login After Sign Out</strong>
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
                Email Magic Link
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                User enters registered email. A secure, single-use Magic Link is
                sent to that email. User clicks the link to authenticate. Magic
                Links are valid for 6 hours.
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Enter email, receive new Magic Link, click to authenticate.
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
                Google OAuth
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                User authenticates through their Google account — no separate
                Corpse password required. Authentication is handled by Google's
                OAuth 2.0 system.
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Tap 'Continue with Google' and authenticate through Google
                account.
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
                Apple Sign-In
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                User authenticates through their Apple ID — no separate Corpse
                password required. Authentication is handled by Apple's Sign-In
                system.
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Tap 'Continue with Apple' and authenticate through Apple ID.
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
        <strong>
          Important: Magic Links are single-use and expire after 6 hours. Never
          share a Magic Link with anyone — clicking a Magic Link grants full
          access to your account. If you receive a Magic Link you did not
          request, contact{" "}
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          immediately and do not click the link.
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
        <strong>12. Single Device Session Model</strong>
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
        The Platform maintains one active authenticated session per device. A
        user may be simultaneously logged in on multiple devices — each device
        maintains its own independent session. Signing out of one device does
        not affect sessions on other devices. The Platform limits each device to
        one active session at a time — a new login on a device replaces any
        previous session on that device.
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
        <strong>13. 90-Day Inactivity Expiry</strong>
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
        If a session on a specific device remains inactive for 90 consecutive
        calendar days — meaning the user has not opened the app and interacted
        with any authenticated feature on that device — the session is
        automatically expired. The user receives an advance warning notification
        before expiry. Session expiry affects only the specific inactive session
        — the user's account and all account data remain fully intact. The user
        must re-authenticate to regain access on that device.
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
        <strong>14. Force Termination of Sessions</strong>
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
        The following events cause immediate, automatic termination of all
        active sessions across all devices simultaneously:
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
          Email address change or login method update — all sessions terminated
          as a security measure.
        </li>
        <li>
          Account suspension — all sessions terminated for the duration of the
          suspension.
        </li>
        <li>Permanent ban — all sessions permanently terminated.</li>
        <li>
          Platform-initiated security termination — triggered by suspected
          account compromise or unusual session activity.
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
        For full detail on session management, refer to the Sign Out Policy.
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
        <strong>PART IV — ELO ENGINE</strong>
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
        <strong>15. What ELO Is on Corpse</strong>
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
        The ELO Engine is the Platform's proprietary skill rating system — a
        dynamic numerical score assigned to every player, squad, and guild that
        reflects their competitive performance on the Platform. ELO is the
        foundation of the Platform's matchmaking, progression, and leaderboard
        systems. It gives every competitive interaction on the Platform meaning
        — a win against a high-ELO opponent earns more ELO than a win against a
        low-ELO opponent; a loss against a strong opponent costs less ELO than a
        loss against a weaker one.
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
        ELO on the Platform is separate from any in-game rank system — a
        player's Free Fire rank within Garena's game has no bearing on their
        Corpse ELO. ELO reflects performance specifically within Corpse arenas.
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
        <strong>16. How Player ELO Is Calculated</strong>
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
        Player ELO is calculated by the Platform's ELO engine after every arena
        in which the player participates. The calculation takes into account:
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
        <li>Match outcome — win, loss, or placement position.</li>
        <li>
          Opponent ELO — the ELO rating of the opposing squads in the same
          arena.
        </li>
        <li>
          Performance metrics — kills, survival time, damage dealt, and other
          game-specific statistics relevant to the arena format.
        </li>
        <li>
          Arena format — Battle Royale and Clash Squad arenas may weight
          performance metrics differently.
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
        The specific formula and weighting factors used in ELO calculation are
        proprietary intellectual property of the Company. The Company does not
        publicly disclose the precise algorithm — this protects the integrity of
        the system against manipulation.
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
        <strong>17. ELO Going Up and Down</strong>
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
        A player's ELO score is dynamic — it increases with strong competitive
        performance and decreases with poor performance. ELO is not a one-way
        progression metric — every arena result affects it in both directions.
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
        <li>
          Winning arenas — particularly against higher-ELO opponents — increases
          ELO significantly.
        </li>
        <li>
          Losing arenas — particularly against lower-ELO opponents — decreases
          ELO.
        </li>
        <li>
          Strong individual performance within a losing squad may partially
          offset ELO loss.
        </li>
        <li>
          Consistent participation — even without wins — maintains a stable ELO
          through activity.
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
          Note: ELO fluctuations are a feature, not a flaw. They ensure the
          leaderboard reflects current competitive form rather than historical
          results. A player who performs poorly in recent arenas will see their
          ELO decline — this is intentional and reflects the dynamic nature of
          competitive skill.
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
        <strong>18. Separate ELO Scores — Player, Squad, Guild</strong>
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
        The Platform maintains three distinct ELO scores that operate
        independently of each other:
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
          Player ELO — individual competitive rating based on personal
          performance across all arenas.
        </li>
        <li>
          Squad ELO — a rating associated with a specific squad's collective
          performance in arenas they participate in together.
        </li>
        <li>
          Guild ELO — a rating associated with the guild's collective
          performance when its members compete as a guild squad. Governed in
          detail by the Guild Policy.
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
        A player's individual ELO is not simply transferred to their squad or
        guild — each ELO system has its own calculation methodology.
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
        <strong>19. ELO Leaderboard — Public Ranking</strong>
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
        All registered players are ranked against each other on the Platform's
        public ELO leaderboard based on their current player ELO score. The
        leaderboard:
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
        <li>Is publicly visible to all registered users.</li>
        <li>Updates in real time after every arena result is verified.</li>
        <li>
          Displays each player's username, ELO score, ecosystem tier, and guild
          tag.
        </li>
        <li>May be filtered by region, game title, or time period.</li>
        <li>
          Is the primary mechanism through which player talent is discovered by
          organisers, guilds, and sponsors on the Platform.
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
        <strong>20. Company's Right to Adjust ELO</strong>
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
        The Company reserves the right to adjust, recalculate, or reset a
        player's ELO score in the following circumstances:
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
          Cheating or prohibited software use is confirmed — ELO gains from
          affected arenas will be reversed.
        </li>
        <li>
          Match fixing or result manipulation is confirmed — ELO changes from
          manipulated arenas will be reversed for all involved players.
        </li>
        <li>
          A technical error in the ELO calculation system is identified — ELO
          scores may be corrected retroactively.
        </li>
        <li>
          Account suspension or ban — ELO may be frozen or reset as part of
          disciplinary action.
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
        ELO adjustments for integrity violations are not subject to the standard
        appeal process — they are technical corrections to the competitive
        record. Players who dispute an ELO adjustment on grounds other than
        disciplinary action may raise the matter with
        <a
          href="mailto:support@corpsearena.com"
          style={{ color: "var(--red)" }}
        >
          support@corpsearena.com
        </a>
        .
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
        <strong>PART V — ECOSYSTEM PIPELINE — PLAYER PROGRESSION</strong>
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
        <strong>21. What the Ecosystem Pipeline Is</strong>
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
        The Ecosystem Pipeline is the Platform's six-tier player progression
        system — a structured competitive hierarchy that classifies every
        registered player based on their ELO score, match performance, and
        platform engagement. The Pipeline gives competitive context to a
        player's standing on the Platform — it is the answer to the question:
        &quot;Where do I sit in this competitive ecosystem?&quot;
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
        The Pipeline is designed to create meaningful progression milestones
        that reward consistent, high-quality competitive performance. It is also
        the foundation of the Platform's talent discovery system — top-tier
        Pipeline players are the most visible to esports organisations, guild
        recruiters, and event organisers operating on the Platform.
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
        <strong>22. The Six Progression Tiers</strong>
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
        The Ecosystem Pipeline comprises six tiers, listed from entry level to
        elite:
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
                <strong>Tier</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Level</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Description</strong>
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
                Initiate
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Tier 1 — Entry
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The starting point for all new players. Every account begins at
                the Initiate tier regardless of in-game rank or prior
                competitive experience. The Initiate tier represents the
                beginning of a player's verified competitive journey on the
                Platform.
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
                Cadet
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Tier 2
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Players who have demonstrated initial competitive consistency —
                building their ELO through regular participation and beginning
                to establish their competitive identity on the Platform.
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
                Core
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Tier 3
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Established competitive players who have built a solid ELO
                foundation and participate regularly in arenas. Core players
                form the competitive backbone of the Platform's player
                ecosystem.
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
                Specialised
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Tier 4
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Skilled players who have demonstrated mastery of specific
                competitive approaches — characterised by strong archetype
                performance and consistent arena results against increasingly
                competitive opposition.
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
                Vanguard
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Tier 5
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Elite players who compete at the highest grassroots level on the
                Platform — strong ELO, consistent results, and a established
                competitive reputation within the Platform community.
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
                Apex
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Tier 6 — Elite
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The Platform's highest tier — reserved for the absolute elite.
                Apex players represent the pinnacle of competitive achievement
                on the Platform and are the most prominently featured in the
                Platform's talent discovery and leaderboard systems.
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
        <strong>23. How Players Progress Through Tiers</strong>
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
        Progression through the Ecosystem Pipeline is determined by the
        Platform's ELO engine in combination with additional performance factors
        including match count, win rate, and platform engagement. Players
        progress upward through tiers as their ELO and performance metrics meet
        the threshold for the next tier. Players may also drop to a lower tier
        if their ELO falls below the threshold for their current tier — the
        Pipeline reflects current competitive form, not historical achievement.
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
          Tier thresholds are maintained by the Platform and may be adjusted
          from time to time to reflect the overall competitive distribution of
          the player base.
        </li>
        <li>
          The specific ELO threshold required for each tier is displayed within
          the Platform's progression interface.
        </li>
        <li>
          Tier changes — both promotions and demotions — are automatic and take
          effect in real time as ELO scores update after each arena.
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
        <strong>24. Seasonal Reset — 60% ELO Carry-Forward</strong>
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
        The Ecosystem Pipeline operates on a seasonal basis. At the end of each
        season, the following reset applies:
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
          All player ELO scores are partially reset — each player carries
          forward 60% of their end-of-season ELO into the new season.
        </li>
        <li>
          The remaining 40% of ELO is reset — players begin the new season at a
          reduced ELO that reflects their prior performance but creates fresh
          competitive opportunities.
        </li>
        <li>
          Ecosystem Pipeline tiers are reassigned at the start of each new
          season based on the player's post-reset ELO score.
        </li>
        <li>
          Season duration and reset dates are communicated within the Platform
          in advance of each reset.
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
          Note: The seasonal reset with 60% carry-forward is designed to prevent
          permanent entrenchment of the leaderboard while preserving competitive
          context. Strong players retain a meaningful head start — but every
          season creates fresh opportunities for rising players to challenge
          established rankings.
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
        <strong>25. Tier Displayed on Profile</strong>
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
        A player's current Ecosystem Pipeline tier is displayed on their public
        player profile and on the ELO leaderboard. It is one of the visible
        elements of a player's public competitive identity on the Platform —
        alongside their username, avatar, ELO score, and guild tag.
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
        <strong>26. Company's Right to Reset Tier</strong>
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
        The Company reserves the right to reset a player's Ecosystem Pipeline
        tier and associated ELO score in the event of confirmed cheating, match
        fixing, or other integrity violations that artificially inflated the
        player's ELO and tier. A tier reset is a consequence of ELO adjustment —
        it is not a separate disciplinary action but flows naturally from the
        correction of fraudulent ELO gains.
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
        <strong>PART VI — SQUAD SYSTEM</strong>
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
        <strong>27. What a Squad Is</strong>
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
        A squad is a temporary team of players assembled for the purpose of
        participating in a specific arena on the Platform. Unlike a guild —
        which is a persistent entity — a squad exists in the context of a
        specific arena registration. Squads are created by Captains and
        populated through the Platform's invite token system. Squad formats
        (Solo, Duo, Squad of 4) are determined by the arena preset selected by
        the Organiser.
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
        <strong>28. Captain's Role &amp; Responsibilities</strong>
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
        The Captain is the registered user who creates the squad, manages
        invitations, pays the entry fee (for paid arenas), and receives the
        squad's prize money. As Captain, you:
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
          Are the financial and administrative representative of your squad —
          all prize money is disbursed exclusively to your KYC-verified bank
          account.
        </li>
        <li>
          Are responsible for ensuring all squad members you invite are aware of
          and compliant with the Arena Joining T&amp;C.
        </li>
        <li>
          Are responsible for distributing prize money among squad members — the
          Platform has no involvement in or liability for internal squad prize
          distribution disputes.
        </li>
        <li>
          Must ensure your KYC verification is complete before paying any entry
          fee.
        </li>
        <li>
          Can only hold one active Captain role at a time — you cannot be
          Captain of two squads simultaneously.
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
        <strong>29. Invite Token System</strong>
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
        Squad members are invited through the Platform's invite token system.
        Each invite is a single-use, time-limited token that allows exactly one
        player to join the squad. Invite tokens expire at the registration close
        time for the arena — unaccepted invites are automatically invalidated at
        that point. Players must accept their invite before registration closes
        to be included in the squad registration.
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
        <strong>30. Squad Participation Rules</strong>
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
        The following rules govern squad participation on the Platform:
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
          A player cannot be Captain of more than one squad simultaneously —
          across any arenas, active or upcoming.
        </li>
        <li>
          A player can be a squad member in multiple arenas simultaneously,
          provided the match times of those arenas do not conflict with each
          other. The Platform enforces the time conflict rule technically at
          registration.
        </li>
        <li>
          For guild arenas specifically — a player who is a guild member cannot
          register for a second guild arena if its match time conflicts with an
          existing guild arena registration.
        </li>
        <li>
          Once registered for an arena — as Captain or member — a player cannot
          withdraw. Registration is locked and entry fees are non-refundable.
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
        <strong>31. Squad vs Guild — Key Distinction</strong>
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
        Squads and guilds serve different purposes on the Platform and operate
        independently:
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
                <strong>Squad</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Guild</strong>
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
                Duration
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Temporary — exists for one arena
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Persistent — permanent entity on the Platform
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
                Purpose
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Competing in a specific arena
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Long-term competitive team and community
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
                Membership
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Captain + members for that arena only
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Up to 20 members with permanent roles
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
                ELO
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Squad ELO for that specific competition
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Persistent guild ELO tracked over time
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
                Leadership
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Captain role only
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Captain, Vice Captain, Manager, Member
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
                Requirement
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                No KYC for free arenas; KYC for Captain in paid arenas
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                KYC required to create a guild
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
        <strong>PART VII — ARENA PARTICIPATION</strong>
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
        <strong>32. Free &amp; Paid Arenas</strong>
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
        The Platform offers two types of arenas — free arenas with no entry fee
        and no monetary prize pool, and paid arenas where the Captain pays an
        entry fee and players compete for a prize pool funded by the Organiser's
        security deposit. Both arena types are subject to all non-financial
        arena rules described in these Terms and the Arena Joining T&amp;C.
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
        <strong>33. Eligibility to Join</strong>
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
        To participate in any arena, a player must be a Registered User with an
        active account in good standing. Additional requirements apply based on
        arena type and role:
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
          Paid arena — Captain: must be KYC verified. Minor users cannot be
          Captain.
        </li>
        <li>
          Free arena — Captain: KYC not required but account must be in good
          standing.
        </li>
        <li>
          Any arena — squad member: any registered user including Minor Users
          (by Captain's invite) can participate as a squad member.
        </li>
        <li>
          Suspended or permanently banned users cannot participate in any arena.
        </li>
        <li>
          Players must have a valid Free Fire in-game ID registered on their
          Platform account to join any Free Fire arena.
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
        <strong>34. Arena Timeline</strong>
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
        Every arena progresses through five stages set by the Organiser:
        Registration Open → Registration Closed → Room Card Available (30
        minutes before match start) → Match Start → Result Submission. The arena
        timeline is set entirely by the Organiser within the Platform's preset
        framework. Players are responsible for monitoring arena timelines — the
        Platform sends notifications but does not guarantee receipt if device
        notifications are disabled.
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
        <strong>35. Registration Lock — No Withdrawal</strong>
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
        Once a squad's registration is confirmed — after the Captain pays the
        entry fee (paid arenas) or completes free registration — the
        registration is permanently locked. No player can withdraw from an arena
        after registration is confirmed under any circumstance. The entry fee is
        non-refundable once registration is confirmed, regardless of the
        player's subsequent ability or inability to participate.
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
        <strong>36. Room Card — 30 Minutes Before Match</strong>
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
        The Room Card — containing the Free Fire custom room ID and password —
        is shared with all registered players via in-app notification exactly 30
        minutes before the scheduled match start time. Players must have in-app
        notifications enabled to receive the Room Card. The Room Card is
        strictly confidential — sharing it with non-registered participants is
        prohibited and results in disqualification. If a player does not receive
        the Room Card 25 minutes before match start, they must contact
        <a
          href="mailto:support@corpsearena.com"
          style={{ color: "var(--red)" }}
        >
          support@corpsearena.com
        </a>{" "}
        immediately via in-app support.
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
        <strong>37. In-Game Identity &amp; Emulator Rules</strong>
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
        Players must use the exact Free Fire in-game ID registered on their
        Corpse account when entering the custom room. The Platform verifies
        in-game IDs before each arena. Using a different in-game ID — even one
        belonging to the same player — results in immediate disqualification.
        Playing on an emulator instead of a physical mobile device is absolutely
        prohibited and results in immediate disqualification and a flag. There
        are no exceptions to the emulator ban.
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
        <strong>38. Match Conduct</strong>
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
        During every Corpse Arena match, both Corpse's rules and Garena's Free
        Fire rules apply simultaneously. The following conduct is prohibited
        during any arena match:
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
          Use of aimbots, wallhacks, speed hacks, lag switches, or any
          prohibited software.
        </li>
        <li>
          Match fixing, deliberate underperformance, or result manipulation of
          any kind.
        </li>
        <li>
          Sharing the Room Card with non-registered participants during the
          match.
        </li>
        <li>
          Account sharing — allowing another person to play on your behalf.
        </li>
        <li>
          Harassment, abusive language, or discriminatory conduct toward other
          players.
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
        Violations of match conduct rules result in disqualification, entry fee
        forfeiture, and a flag under the Account Suspension &amp; Ban T&amp;C.
        For the complete match conduct framework, refer to the Arena Joining
        T&amp;C.
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
        <strong>39. Result Submission — Auto-Capture System</strong>
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
        The Platform uses an auto-capture system for match result submission.
        When a player taps 'Start Match' in the Corpse app, a floating screen
        capture button appears as an overlay. When the match ends and the
        scoreboard is visible, the player taps the capture button — the
        screenshot uploads automatically. Players can also manually upload a
        screenshot within the submission window. The critical rule: from the
        moment the Organiser uploads their result screenshot, a 60-second window
        opens for all remaining players to submit. Players who do not submit
        within 60 seconds will have their screenshot data excluded from result
        verification.
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
        <strong>40. Result Disputes</strong>
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
        A player who believes a match result is incorrect may dispute it within
        24 hours of the result being posted. Disputes are submitted via in-app
        support with screenshot evidence. The Platform reviews disputes and
        communicates a decision within 24 hours of submission. The Platform's
        dispute decision is final. Submitting frivolous disputes without
        evidence may result in a flag. For the complete dispute process, refer
        to the Arena Joining T&amp;C.
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
        <strong>41. Disqualification</strong>
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
        A player or squad may be disqualified for: using a wrong in-game ID,
        using an emulator, sharing the Room Card, using prohibited software,
        match fixing, or account sharing. Disqualification results in entry fee
        forfeiture, a flag under the Suspension Policy, and exclusion from prize
        eligibility. When a prize-winning squad is disqualified, the prize
        ladder shifts to the next eligible squad. For the complete
        disqualification framework, refer to the Arena Joining T&amp;C.
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
        <strong>PART VIII — GUILD MEMBERSHIP</strong>
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
        <strong>42. What a Guild Is</strong>
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
        A guild is a persistent competitive team on the Platform — a group of up
        to 20 players united under a shared identity who compete together in duo
        and squad arenas, build a collective ELO score, and progress on the
        Platform's guild leaderboard. A guild is permanent — it cannot be
        deleted once created. Only KYC-verified users can create a guild.
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
        <strong>43. Guild Roles</strong>
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
        Every guild operates with four roles in descending order of authority:
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
          Captain — ultimate authority. Full control over all guild settings,
          rules, roles, and membership. Must transfer ownership before leaving.
          Replaced automatically by Vice Captain if permanently banned.
        </li>
        <li>
          Vice Captain — second in command. Can accept/reject join requests and
          remove Managers and Members. Cannot change guild settings or transfer
          ownership.
        </li>
        <li>
          Manager — day-to-day operations. Can accept/reject join requests,
          remove Members, and add supplementary guild rules. Cannot modify
          Captain's rules or change guild settings.
        </li>
        <li>
          Member — standard participant. Can participate in arenas, read guild
          rules, and leave freely.
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
        <strong>44. Unit Tier System</strong>
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
        Every guild member is assigned to one of four unit tiers reflecting
        their role and competitive standing within the guild:
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
          Apex Unit — Captain, Vice Captain, Manager, and the 2 highest-ELO
          non-leadership members.
        </li>
        <li>
          Specialized Unit — the guild's top archetype performers (excluding
          Apex Unit members).
        </li>
        <li>
          Core Unit — consistent, reliable members who participate regularly.
        </li>
        <li>
          Rising Unit — new members and developing players. All new members
          start here.
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
        Unit tiers are visible on member profiles within the guild context. For
        the complete guild system, refer to the Guild Policy.
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
        <strong>45. Joining, Leaving &amp; Removal</strong>
      </h2>
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
          Joining — request-based. Player sends a join request; Captain, VC, or
          Manager approves or rejects. No minimum ELO required.
        </li>
        <li>
          Leaving — Members, VCs, and Managers can leave anytime freely. Captain
          must transfer ownership before leaving.
        </li>
        <li>
          Removal — Captain, VC, and Manager can remove Members. Captain and VC
          can remove Managers. Only Captain can remove VC. Removal is immediate
          with no notice period.
        </li>
        <li>
          Rejoining — a removed or departed member can rejoin the same guild
          immediately with no cooldown.
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
        <strong>46. One Guild Per Player</strong>
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
        A player can be a member of only one guild at a time. The Platform
        enforces this technically — a player must leave their current guild
        before joining another. Guild membership does not affect a player's
        individual ELO score.
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
        <strong>PART IX — KYC VERIFICATION</strong>
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
        <strong>47. When KYC Is Required</strong>
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
        KYC verification is required for the following activities on the
        Platform: acting as Captain in a paid arena (paying entry fees),
        receiving prize money, creating a guild, and receiving any financial
        disbursement. KYC is not required to create an account, join free
        arenas, or participate as a squad member in paid arenas.
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
        <strong>48. What Is Verified</strong>
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
        KYC verification on the Platform comprises three verification types
        performed by the Company's authorised eKYC service provider:
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
          Aadhaar OTP Verification — identity confirmed via OTP sent to the
          Aadhaar-linked mobile number.
        </li>
        <li>
          PAN Verification — Permanent Account Number verified against the
          Income Tax Department's database for TDS compliance.
        </li>
        <li>
          Bank Account Verification — bank account number and IFSC confirmed as
          valid and belonging to the user via penny drop verification.
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
        <strong>49. Data Storage</strong>
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
        Upon KYC completion, the Company stores only: masked Aadhaar (last 4
        digits), encrypted PAN, and masked bank account details. Full KYC
        documents are stored exclusively by the eKYC service provider on their
        regulated infrastructure. KYC data is shared with Razorpay for payment
        processing and with the Income Tax Department for TDS compliance. KYC
        data is never sold to third parties. For the complete KYC data
        framework, refer to the KYC &amp; KYC Modification T&amp;C.
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
        <strong>50. KYC Modification</strong>
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
        All KYC fields — Aadhaar, PAN, bank account, UPI ID — can be modified
        after initial verification via a support request process. Modification
        is not available as self-service. The process: raise in-app support
        ticket → verify identity via Magic Link → support team dispatches secure
        portal (valid 24 hours) → re-verify specific field via eKYC on portal →
        Company review (3-5 working days) → approved or rejected with
        notification. All financial activity is frozen during modification
        review. For the complete modification process, refer to the KYC &amp;
        KYC Modification T&amp;C.
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
        <strong>PART X — FINANCIAL TRANSACTIONS</strong>
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
        <strong>51. Entry Fee Payment</strong>
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
        Entry fees for paid arenas are paid by the Captain via Razorpay.
        Supported payment methods: UPI, Net Banking, Debit/Credit Cards, and
        Mobile Wallets. A 2% payment gateway charge is paid by the player on top
        of the base entry fee — this goes entirely to Razorpay, not the Company.
        Entry fees are transferred to the Platform's escrow account immediately
        upon payment confirmation. A payment receipt is sent to the Captain's
        registered email.
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
        <strong>52. Prize Disbursement</strong>
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
        Prize money is funded entirely from the Organiser's security deposit
        held in escrow. After result verification, prize is disbursed to the
        Captain's KYC-verified bank account with the following deductions:
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
          TDS at 30% — deducted as required under Section 194B / 194BA of the
          Income Tax Act, 1961.
        </li>
        <li>
          Bank payout fee of Rs 5.90 — deducted per disbursement transaction.
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
        Disbursement is within 24 hours of result verification. Once disbursed,
        prize payments are irreversible. The Captain is solely responsible for
        distributing prize money among squad members — the Platform has no
        liability for internal squad prize disputes.
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
        <strong>53. Non-Refundable Entry Fees</strong>
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
        Entry fees are non-refundable once the squad's registration is confirmed
        — without exception for personal scheduling conflicts, device issues,
        connectivity problems, squad member unavailability, or disqualification.
        The only refund scenarios are governed by the Money Deposit &amp;
        Receive Policy — specifically, arena cancellation before the match
        starts.
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
        <strong>54. Cancellation &amp; Refund Scenarios</strong>
      </h2>
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
                <strong>Scenario</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Player Refund?</strong>
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
                Arena cancelled before match starts — any reason
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Full entry fee refunded within 24 hours
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
                Arena cancelled by Corpse (platform issue)
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Full entry fee refunded within 24 hours
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
                Player unable to participate after registration confirmed
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                No refund — entry fee forfeited
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
                Player disqualified for rule violation
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                No refund — entry fee forfeited
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
                Failed payment — money debited but not confirmed
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Automatic refund via Razorpay within 5-7 working days
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
        For the complete financial framework including organiser settlement and
        tax structure, refer to the Money Deposit &amp; Receive Policy.
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
        <strong>PART XI — NOTIFICATIONS</strong>
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
        <strong>55. Notification Channels</strong>
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
        The Platform communicates with players through four notification
        channels:
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
          In-app notifications — push notifications delivered within the Corpse
          app on the player's device.
        </li>
        <li>Email — sent to the player's registered email address.</li>
        <li>
          SMS — sent to the player's registered mobile number for critical
          events.
        </li>
        <li>
          WhatsApp — sent to the player's registered WhatsApp number for
          selected communications.
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
        Not all event types use all four channels — the channel used for each
        notification type is determined by the nature and urgency of the event.
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
        <strong>56. What Triggers Notifications</strong>
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
        The Platform sends notifications for the following events, among others:
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
          Room Card distribution — 30 minutes before match start (in-app +
          email).
        </li>
        <li>
          Squad invite received — player has been invited to join a squad.
        </li>
        <li>
          Arena registration confirmed — entry fee payment confirmed and slot
          secured.
        </li>
        <li>Match result posted — verified match result available to view.</li>
        <li>
          Prize disbursement initiated — prize money sent to Captain's bank
          account.
        </li>
        <li>
          Flag issued — disciplinary flag applied to account (in-app + email).
        </li>
        <li>Suspension applied — account suspended (in-app + email).</li>
        <li>
          KYC modification status — approval or rejection of modification
          request.
        </li>
        <li>Session inactivity warning — 90-day expiry approaching.</li>
        <li>
          Guild join request — a player has requested to join your guild
          (Captain, VC, Manager).
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
        <strong>57. Player's Responsibility</strong>
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
        Players are responsible for ensuring in-app notifications are enabled on
        their device and that their registered email, mobile number, and
        WhatsApp number are accurate and up to date. The Platform is not
        responsible for missed notifications due to: disabled device
        notifications, incorrect contact details, spam filters blocking emails,
        or network connectivity issues on the player's device. Critical
        notifications — particularly the Room Card — require the player to be
        active and available 30 minutes before match start.
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
        <strong>PART XII — LEADERBOARDS</strong>
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
        <strong>58. Player ELO Leaderboard</strong>
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
        The Platform maintains a public player ELO leaderboard ranking all
        registered players by their current ELO score. The leaderboard updates
        in real time after every arena result is verified. It displays each
        player's username, ELO score, Ecosystem Pipeline tier, and guild tag.
        The leaderboard may be filtered by region or game title. It is the
        primary talent discovery tool on the Platform — top-ranked players are
        most visible to guilds, organisers, and esports stakeholders.
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
        <strong>59. Guild Leaderboard</strong>
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
        The Platform maintains a public guild leaderboard ranking all guilds by
        their current guild ELO score. The guild leaderboard updates in real
        time and displays each guild's name, tag, verified badge (if earned),
        and ELO score. Both the player and guild leaderboards are publicly
        visible to all registered users and, where applicable, guest users.
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
        <strong>60. Leaderboard Integrity</strong>
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
        The Company takes leaderboard integrity seriously. The following rules
        apply:
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
          ELO scores that are found to have been inflated through cheating,
          match fixing, or manipulation will be corrected — affected leaderboard
          positions will be adjusted accordingly.
        </li>
        <li>
          Suspended players remain visible on the leaderboard during temporary
          suspension — their ELO is frozen. Permanently banned players are
          removed from public leaderboards.
        </li>
        <li>
          The Company reserves the right to remove any player or guild from the
          leaderboard if their presence is found to be the result of fraudulent
          activity, without prior notice.
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
        <strong>PART XIII — USER OBLIGATIONS &amp; PROHIBITED CONDUCT</strong>
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
        <strong>61. Acceptable Use</strong>
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
        By using the Platform, you agree to:
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
          Use the Platform only for lawful purposes and in strict compliance
          with these Terms and all applicable Indian laws.
        </li>
        <li>
          Provide accurate and complete information in all Platform interactions
          — including registration, KYC, arena participation, and support
          communications.
        </li>
        <li>
          Respect all other users, organisers, guild members, and Platform staff
          at all times.
        </li>
        <li>
          Comply with game-specific rules (Garena Free Fire Terms of Service)
          simultaneously with Platform rules during all arena matches.
        </li>
        <li>
          Maintain the security of your account credentials — do not share Magic
          Links, OAuth tokens, or account access with any third party.
        </li>
        <li>
          Report violations you become aware of through the Platform's in-app
          reporting mechanism promptly.
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
        <strong>62. Prohibited Conduct — Full List</strong>
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
        The following conduct is strictly prohibited on the Platform. Each
        confirmed violation results in a flag and progressive disciplinary
        action as described in Part XIV:
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
        <strong>Competitive Integrity Violations:</strong>
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
          Using cheats, aimbots, wallhacks, speed hacks, lag switches, or any
          prohibited software in any arena.
        </li>
        <li>
          Playing on an emulator — all arenas must be played on a physical
          mobile device.
        </li>
        <li>
          Match fixing, deliberate underperformance, or any pre-arranged result
          manipulation.
        </li>
        <li>
          Creating or using multiple accounts to manipulate ELO rankings or
          arena results.
        </li>
        <li>
          Account sharing — allowing another person to play on your behalf using
          your account or in-game ID.
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
        <strong>Identity &amp; Account Violations:</strong>
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
        <li>Impersonating any other registered user on the Platform.</li>
        <li>
          Impersonating Corpse staff, moderators, or official Platform
          representatives.
        </li>
        <li>
          Submitting false, forged, or another person's documents for KYC
          verification.
        </li>
        <li>Sharing the Room Card with non-registered participants.</li>
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
        <strong>Content Violations:</strong>
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
          Posting, uploading, or displaying sexually explicit, obscene, or NSFW
          content in any profile field, squad name, guild name, or
          user-generated content area.
        </li>
        <li>
          Using abusive, discriminatory, or threatening language toward any
          user.
        </li>
        <li>
          Posting hate speech targeting individuals or groups based on religion,
          ethnicity, gender, or any other characteristic.
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
        <strong>Financial Violations:</strong>
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
          Initiating fraudulent payments or chargebacks for valid entry fee
          transactions.
        </li>
        <li>
          Colluding with an organiser or other players to manipulate prize pool
          distribution.
        </li>
        <li>
          Submitting false KYC details to evade tax obligations or financial
          monitoring.
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
        <strong>Platform Integrity Violations:</strong>
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
          Attempting to reverse engineer, decompile, or tamper with any part of
          the Platform.
        </li>
        <li>
          Exploiting bugs or vulnerabilities — any discovered vulnerability must
          be reported to{" "}
          <a
            href="mailto:legal@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            legal@corpsearena.com
          </a>{" "}
          immediately.
        </li>
        <li>
          Using automated bots, scrapers, or data harvesting tools on the
          Platform without authorisation.
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
          Important: Violation of any prohibited conduct may result in immediate
          account suspension or permanent ban without refund of any entry fees,
          subscriptions, or credits. The Company may also pursue civil or
          criminal legal remedies for serious violations.
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
        <strong>63. Reporting Violations</strong>
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
        Players can report violations by other users, organisers, or guilds
        through the Platform's in-app reporting mechanism. Reports can be
        submitted from:
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
        <li>A player's public profile — tap 'Report Player'.</li>
        <li>A guild's public profile — tap 'Report Guild'.</li>
        <li>An arena result page — tap 'Report Result' or 'Report Conduct'.</li>
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
        All reports are reviewed by the Platform's trust and safety team.
        Reporting a violation does not guarantee a specific outcome — the
        Company investigates all credible reports and makes independent
        determinations based on available evidence.
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
        <strong>PART XIV — ACCOUNT SUSPENSION &amp; BAN</strong>
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
        <strong>64. Flag System Summary</strong>
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
        The Platform uses a progressive flag system to enforce conduct
        standards. Each confirmed violation results in a flag being placed on
        the player's account. Flags expire after 12 months. The progressive
        consequences are:
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
                <strong>Active Flag Count</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Consequence</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Duration</strong>
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
                Flag 1
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Formal Warning — no suspension
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                No suspension. Warning on record for 12 months.
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
                Flag 2
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Temporary Suspension
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                1 calendar day. All sessions terminated immediately.
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
                Flag 3
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Temporary Suspension
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                7 calendar days. All sessions terminated immediately.
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
                Flag 4+
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Permanent Ban
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Lifetime. Account permanently terminated.
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
        Financial activity is frozen during temporary suspension and all
        financial amounts are forfeited upon permanent ban. For the complete
        flag system, refer to the Account Suspension &amp; Ban T&amp;C.
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
        <strong>65. Immediate Ban Violations</strong>
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
        Certain violations result in immediate permanent ban without progressing
        through the flag system — regardless of the player's prior flag count.
        These include: posting sexually explicit content involving minors,
        extreme hate speech inciting violence, severe impersonation for
        financial fraud, attacking Platform infrastructure, and coordinated
        large-scale financial fraud.
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
        <strong>66. Appeals</strong>
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
        Every player who receives a flag, suspension, or ban has the right to
        appeal via in-app support ticket. The Company reviews all appeals and
        communicates a decision within 24 hours. Each disciplinary action can
        only be appealed once — the appeal decision is final. For the complete
        appeal process, refer to the Account Suspension &amp; Ban T&amp;C.
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
        <strong>67. Financial Consequences</strong>
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
        During temporary suspension: all financial activity is frozen — entry
        fees cannot be paid, prizes are held in escrow and released when
        suspension ends. Upon permanent ban: all entry fees paid for upcoming
        arenas, pending prizes, and any other financial amounts are permanently
        forfeited. No refunds are issued upon permanent ban.
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
        <strong>PART XV — ACCOUNT DELETION</strong>
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
        <strong>68. What Deletion Means</strong>
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
        Account deletion is the permanent, irreversible termination of a
        player's account on the Platform. Deletion is not the same as signing
        out — signing out ends a session while the account remains intact.
        Deletion removes the account permanently. Once an account is deleted,
        the username is retired and cannot be reclaimed by the same user or any
        other user.
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
        <strong>69. Pre-Deletion Requirements</strong>
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
        Before an account can be deleted, the player must:
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
          Transfer guild captaincy if they are the Captain of any guild — a
          guild cannot exist without a Captain.
        </li>
        <li>
          Ensure there are no active arena registrations with pending entry fees
          or prize money — financial matters must be resolved before deletion.
        </li>
        <li>
          Understand that all financial amounts associated with the account will
          be forfeited upon deletion — no refunds are issued post-deletion.
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
        <strong>70. Data After Deletion</strong>
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
        Upon account deletion, the following data handling applies: personal
        data is deleted from active Platform systems within the timeframes
        specified in the Privacy Policy and DPDP Act 2023 requirements.
        Financial records are retained for the minimum period required by PMLA
        and Indian tax regulations. Anonymised competitive data — match results,
        ELO records — may be retained in aggregate form for leaderboard
        integrity and platform analytics.
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
        <strong>71. Re-Registration</strong>
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
        A user who has deleted their account may create a new account on the
        Platform using a different email address. The new account starts fresh —
        no ELO, history, guild membership, or username from the deleted account
        is transferred. The deleted account's username is permanently retired
        and cannot be used by the new account.
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
        <strong>PART XVI — INTELLECTUAL PROPERTY</strong>
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
        <strong>72. Platform Content Ownership</strong>
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
        All intellectual property on the Platform — including the Corpse name,
        Corpse Arena name, logo, tagline, source code, UI/UX design, ELO engine,
        match data, leaderboard data, and all other Platform content — is the
        exclusive property of [CORPSE ESPORTS PRIVATE LIMITED]. Users acquire no
        ownership interest in any Platform content by virtue of their use of the
        Platform.
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
        <strong>73. Limited Licence to User</strong>
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
        By accepting these Terms, you are granted a limited, non-exclusive,
        non-transferable, revocable licence to access and use the Platform for
        personal, non-commercial purposes. This licence does not include the
        right to: copy or reproduce Platform code or design, use Platform data
        for commercial purposes, reverse engineer any Platform feature, or
        create derivative works based on Platform content. The licence
        terminates immediately upon account deletion, suspension, or any Terms
        violation.
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
        <strong>74. User-Generated Content</strong>
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
        Any content you submit to the Platform — including your username,
        avatar, squad names, and any text in profile fields — remains your
        property but you grant the Company a non-exclusive, worldwide,
        royalty-free, perpetual licence to use, display, and distribute that
        content for Platform operation and promotion. You represent that any
        content you submit does not infringe third-party intellectual property
        rights. The Company may remove non-compliant user-generated content
        without notice. For the complete IP framework, refer to the IP,
        Trademark &amp; Copyright Policy.
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
          PART XVII — LIMITATION OF LIABILITY &amp; INDEMNIFICATION
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
        <strong>75. Platform Liability Limits</strong>
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
        To the maximum extent permitted by applicable Indian law:
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
          The Company is not liable for any indirect, incidental, special,
          consequential, or punitive damages arising from your use of the
          Platform — including loss of ELO, missed arena opportunities, or prize
          money lost due to technical issues beyond the Company's control.
        </li>
        <li>
          The Company is not liable for Garena server downtime, Free Fire
          account actions by Garena, or any issue attributable to the game
          publisher.
        </li>
        <li>
          The Company is not liable for a player's device or connectivity issues
          during any arena.
        </li>
        <li>
          The Company's total liability to any user for any claim arising from
          their use of the Platform shall not exceed the total amount of entry
          fees paid by that user in the 90 days preceding the claim.
        </li>
        <li>
          The Company is not liable for internal squad prize distribution
          disputes between squad members — prize disbursement to the Captain
          constitutes full discharge of the Company's prize obligation.
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
          Note: Nothing in this Section excludes liability for: death or
          personal injury caused by the Company's negligence, fraud or
          fraudulent misrepresentation, or any liability that cannot be excluded
          under applicable Indian law.
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
        <strong>76. User Indemnification</strong>
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
        You agree to indemnify, defend, and hold harmless [CORPSE ESPORTS
        PRIVATE LIMITED], its directors, officers, employees, and agents from
        and against any claims, damages, losses, costs, and expenses (including
        reasonable legal fees) arising from: your use of the Platform in
        violation of these Terms, your violation of any applicable law, your
        infringement of any third-party right, or your submission of false or
        misleading information to the Platform.
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
        <strong>PART XVIII — AMENDMENTS &amp; UPDATES</strong>
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
        <strong>77. Company's Right to Amend</strong>
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
        The Company reserves the right to amend, modify, update, or replace
        these Terms at any time and for any reason — including to reflect
        changes in law, Platform features, business practices, or competitive
        regulations. The Company may make amendments unilaterally without
        seeking your prior consent.
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
        <strong>78. Notification of Changes</strong>
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
        When the Company amends these Terms, it will notify registered users
        through one or more of the following channels: in-app notification,
        email to the registered email address, or a notice displayed within the
        Platform's settings. The amended Terms will be published on the Platform
        with an updated effective date.
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
        <strong>79. Binding Nature of Amendments</strong>
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
        Amended Terms are binding on all registered users from the date they are
        published on the Platform — regardless of whether the user has received
        the notification, read the amended Terms, or clicked an acceptance
        button. Continued use of the Platform after an amendment is published
        constitutes irrevocable acceptance of the amended Terms. If you do not
        agree to the amended Terms, you must immediately cease using the
        Platform. The Company is under no obligation to maintain a version of
        the Platform compatible with prior Terms.
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
          Important: These Terms are binding whether or not you have actively
          reviewed them. The Company's right to amend is unconditional. Your
          continued use of the Platform is your acceptance — there is no opt-out
          except to stop using the Platform.
        </strong>
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
        <strong>PART XIX — GOVERNING LAW, GRIEVANCE &amp; CONTACT</strong>
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
        <strong>80. Governing Law</strong>
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
        These Terms and all matters arising from them shall be governed by and
        construed in accordance with the laws of India — including the
        Information Technology Act 2000, the Digital Personal Data Protection
        Act 2023, the Consumer Protection Act 2019, the IT (Intermediary
        Guidelines and Digital Media Ethics Code) Rules 2021, and all other
        applicable Indian statutes, as amended from time to time.
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
        <strong>81. Dispute Resolution &amp; Arbitration</strong>
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
        Any dispute arising from or in connection with these Terms shall be
        resolved as follows:
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
          Step 1 — Good-faith negotiation: Contact{" "}
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          with a full description of the dispute. The Company will respond
          within 48 hours and attempt to resolve the matter informally.
        </li>
        <li>
          Step 2 — If unresolved within 30 days of Step 1: The dispute shall be
          submitted to binding arbitration under the Arbitration and
          Conciliation Act, 1996. The seat of arbitration shall be Guwahati,
          Assam, India. The language shall be English. The arbitrator's award
          shall be final and binding.
        </li>
        <li>
          Nothing in this Section prevents either party from seeking urgent
          interim or injunctive relief from a court of competent jurisdiction in
          India.
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
        <strong>82. Grievance Redressal — IT Rules 2021</strong>
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
        In accordance with the Information Technology (Intermediary Guidelines
        and Digital Media Ethics Code) Rules, 2021, the Company has designated a
        Grievance Officer to address complaints and grievances from users:
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
                [TO BE APPOINTED — Name to be updated before launch]
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
                Silchar Road Ghat Line, Subashnagar, Karimganj - 788710, Assam,
                India
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
                <strong>General Grievances</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                In-app support ticket — acknowledged within 24 hours, resolved
                within 15 days
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
                <strong>Legal Grievances</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                — acknowledged within 24 hours, resolved within 30 days
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
        Grievances related to Platform conduct, account actions, financial
        disputes, and data privacy may be raised through in-app support for
        general matters and via email for formal legal grievances. The Grievance
        Officer will acknowledge receipt of all grievances within 24 hours and
        work to resolve them within the timeframes above.
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
        <strong>83. Contact</strong>
      </h2>
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
                <strong>Legal / Grievance Email</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                Silchar Road Ghat Line, Subashnagar, Karimganj - 788710, Assam,
                India
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
                <strong>Arena Dispute</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                In-app: Arena &gt; Dispute Result — within 24 hours of result
                posting
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
                <strong>Suspension Appeal</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                In-app: Settings &gt; Support &gt; Appeal a Disciplinary Action
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
                <strong>KYC Modification</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                In-app: Settings &gt; Support &gt; KYC Modification Request
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
                <strong>Financial Dispute</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                <strong>IP Infringement Report</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                — response within 5 business days
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
                <strong>Security Concern</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                — mark subject: SECURITY — response within 24 hours
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
        These Terms &amp; Conditions — Players Side were last updated in April
        2026 and are effective from May 1, 2026.
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
