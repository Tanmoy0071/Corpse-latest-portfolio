import { Metadata } from "next";
import DocShell from "@/components/layout/DocShell";

export const metadata: Metadata = {
  title: "Help Centre | Corpse",
  description: "Help Centre for the Corpse platform.",
};

export default function PolicyPage() {
  return (
    <DocShell
      title="Support Policy"
      badge="Support"
      subtitle="Support Centre & Contact Policy for the Corpse platform."
    >
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
        <strong>Help Centre</strong>
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
        <em>Your complete guide to Corpse</em>
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
        How-To Guides FAQs Troubleshooting Safety Glossary
      </p>
      {/* <div style={{ overflowX: "auto", marginBottom: "32px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "var(--g100)", border: "1px solid rgba(232,25,26,0.2)", fontSize: "14px" }}>
            <tbody>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                  <strong>Version</strong>
                </p>
              </td>
              <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>1.0</p>
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
                  <strong>Support Email</strong>
                </p>
              </td>
              <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}><a href="mailto:support@corpsearena.com" style={{ color: "var(--red)" }}>support@corpsearena.com</a></p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>
                  <strong>In-App Support</strong>
                </p>
              </td>
              <td style={{ border: "1px solid var(--g200)", padding: "10px 14px", color: "var(--g600)", verticalAlign: "top" }}>
                <p style={{ fontFamily: "var(--font-sub)", fontSize: "15px", lineHeight: 1.75, color: "var(--g600)", marginBottom: "20px" }}>Settings &gt; Support</p>
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
          Can't find what you're looking for? Email{" "}
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          or tap Settings &gt; Support. We respond within 24 hours.
        </em>
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
        <strong>What's Inside</strong>
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
        <strong>SECTION 1 Quick Reference Card</strong>
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
        <strong>SECTION 2 What's New</strong>
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
        <strong>SECTION 3 Getting Started</strong>
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
        3.1 How to Create Your Account
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
        3.2 How to Set Up Your Profile
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
        3.3 How to Log In
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
        3.4 How to Sign Out
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
        <strong>SECTION 4 Account FAQs</strong>
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
        <strong>SECTION 5 KYC Verification</strong>
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
        5.1 How to Complete KYC
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
        5.2 How to Modify Your KYC
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
        5.3 KYC FAQs
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
        <strong>SECTION 6 Arenas</strong>
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
        6.1 Free vs Paid Arenas
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
        6.2 How to Find an Arena
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
        6.3 How to Create a Squad and Invite Members
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
        6.4 How to Pay the Entry Fee
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
        6.5 How to Join the Game Room
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
        6.6 How to Submit Your Result
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
        6.7 How to Raise a Result Dispute
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
        6.8 Arena FAQs
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
        <strong>SECTION 7 Payments and Prize Money FAQs</strong>
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
        <strong>SECTION 8 ELO and Ecosystem Pipeline FAQs</strong>
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
        <strong>SECTION 9 Guild</strong>
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
        9.1 How to Create a Guild
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
        9.2 How to Join a Guild
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
        9.3 How to Manage Your Guild
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
        9.4 Guild FAQs
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
        <strong>SECTION 10 Suspension and Flags FAQs</strong>
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
        <strong>SECTION 11 Edge Cases</strong>
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
        <strong>SECTION 12 Troubleshooting</strong>
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
        <strong>SECTION 13 Safety and Security Tips</strong>
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
        <strong>SECTION 14 Glossary</strong>
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
        <strong>SECTION 15 Contact Support</strong>
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
                <strong>SECTION 1 QUICK REFERENCE CARD</strong>
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
        These are the most important numbers every Corpse player needs to know.
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
                <strong>What</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>The Number</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Why It Matters</strong>
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
                Room card delivery
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                30 minutes before match
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Room ID and password arrive 30 mins before your match. Be ready
                on your phone.
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
                Result upload window
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                60 seconds
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Once the organiser uploads their result, you have 60 seconds to
                upload yours. Miss it and your data will not be counted.
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
                Result dispute window
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                24 hours after result posted
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Think the result is wrong? Raise a dispute within 24 hours.
                After that it is final.
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
                Prize disbursement
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Within 24 hours
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                After Corpse verifies the result, prize money reaches the
                Captain's bank within 24 hours.
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
                KYC modification
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                3 to 5 working days
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Updating KYC details takes 3 to 5 working days. Financial
                activity is frozen during this time.
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
                Magic Link validity
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                6 hours
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The login link sent to your email is valid for 6 hours. After
                that, request a new one.
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
                Session auto-expiry
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                90 days of inactivity
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                If you do not open the app for 90 days, you will be
                automatically logged out.
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
                Flag expiry
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                12 months
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                A flag expires after 1 year. After that it no longer counts
                toward your total.
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
                Appeal response
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Within 24 hours
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Appeal a flag, suspension, or ban and Corpse will respond within
                24 hours.
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
                Within 24 hours
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Organisers receive their settlement within 24 hours of the arena
                ending.
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
                Cancellation refund (organiser)
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                70% refund
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                If an organiser cancels after depositing but before players
                register, they get 70% back.
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
                Entry fee refund (cancelled arena)
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                100% within 24 hours
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                If an arena is cancelled after you paid, you get a full refund
                within 24 hours.
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
                TDS on prize money
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                30% is deducted from your prize before it reaches your bank.
                This is income tax.
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
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                A Rs 5.90 transfer fee is deducted from every prize
                disbursement.
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
                PG charge on entry fee
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                2% of entry fee
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                A 2% payment gateway charge is added on top of your entry fee.
                This goes to Razorpay, not Corpse.
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
                Max guild members
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                20
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                A guild can have a maximum of 20 members including all
                leadership roles.
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
                ELO seasonal reset
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                60% carry-forward
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                At each seasonal reset, 60% of your ELO carries over to the new
                season.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>Still need help? </strong>Email us at
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
                </a>{" "}
                or go to Settings &gt; Support inside the app. We respond within
                24 hours.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>SECTION 2 WHAT'S NEW</strong>
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
        <strong>Live at Launch — May 2026</strong>
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
        <li>Free Fire arenas — Battle Royale and Clash Squad modes</li>
        <li>
          Squad system — create squads, invite members, register for arenas
        </li>
        <li>
          ELO Engine — real-time skill ranking for players, squads, and guilds
        </li>
        <li>
          Ecosystem Pipeline — competitive progression tiers from Initiate to
          Apex
        </li>
        <li>Guild system — create or join guilds, build guild ELO</li>
        <li>KYC verification — for Captains and Organisers</li>
        <li>
          Paid arenas — entry fee collection via Razorpay, prize disbursement to
          Captain's bank
        </li>
        <li>
          Auto-capture result system — tap to upload your match scoreboard
        </li>
        <li>
          Player and Guild leaderboards — public rankings updated in real time
        </li>
        <li>In-app support system — raise tickets directly from the app</li>
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
        <strong>Coming Soon</strong>
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
                <strong>Expected</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>What It Is</strong>
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
                Organiser Subscriptions
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                October 2026
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Pro and Elite tiers for organisers unlocking custom arenas,
                analytics, and reduced commission rates.
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
                Multi-game Support
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Phased rollout
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Expanding beyond Free Fire to BGMI, CODM, Valorant, CS2, and
                more.
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
                Monthly Leagues
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                January 2027
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Platform-run monthly competitive leagues. Top 100 players get
                free entry.
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
                Player Subscriptions
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                February 2027
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Corpse Pass, Corpse Pro, and Corpse Elite tiers unlocking
                exclusive platform features.
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
                Sponsorships and Guild Battles
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                March 2027
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Brand-sponsored guild battles, in-app banners, and seasonal
                ladders.
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
                OCR Verification
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                April 2027
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Automatic match result extraction from scorecards. No more
                manual screenshot uploads.
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
                AI Personal Coach
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Future
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Personalised match analysis and strategic suggestions based on
                your play style.
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
                Archetype Analytics
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Future
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Deep analytics on your Attack, Defence, Support, Strategy, or
                Balance profile.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>Still need help? </strong>Email us at
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
                </a>{" "}
                or go to Settings &gt; Support inside the app. We respond within
                24 hours.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>SECTION 3 GETTING STARTED</strong>
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
        <strong>3.1 How to Create Your Account</strong>
      </h2>
      <ol
        style={{
          listStyle: "decimal",
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
          Download the Corpse app from the Google Play Store or Apple App Store.
        </li>
        <li>Open the app and tap Create Account.</li>
        <li>
          Enter your email address. A Magic Link will be sent to your inbox.
        </li>
        <li>
          Check your email and tap the Magic Link. It is valid for 6 hours.
        </li>
        <li>
          Choose your username. This is permanent and cannot be changed later.
        </li>
        <li>
          Enter your date of birth. This determines your access level on the
          platform.
        </li>
        <li>Select your state or region.</li>
        <li>Your account is created. You are now logged in.</li>
      </ol>
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
          You can also sign up using Google or Apple. Tap the corresponding
          button on the sign-up screen instead of entering your email.
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
        <em>
          If you do not receive the Magic Link email within a few minutes, check
          your spam folder. If it is still not there, tap Resend Magic Link in
          the app.
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
        <strong>3.2 How to Set Up Your Profile</strong>
      </h2>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>After creating your account, tap your profile icon in the app.</li>
        <li>Tap Edit Profile.</li>
        <li>
          Upload an avatar. Your avatar must follow content rules — no NSFW
          content and no impersonating others.
        </li>
        <li>
          Tap Add In-Game ID and enter your Free Fire in-game ID. This is the
          unique ID linked to your Free Fire account.
        </li>
        <li>Tap Save.</li>
      </ol>
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
          Your in-game ID must be your actual active Free Fire account ID. Using
          a wrong or fake ID will result in disqualification when Corpse
          verifies your identity before a match.
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
        <strong>3.3 How to Log In</strong>
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
        <strong>Using a Magic Link</strong>
      </p>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Open the Corpse app and tap Log In.</li>
        <li>Enter your registered email address.</li>
        <li>Tap Send Magic Link.</li>
        <li>
          Open your email and tap the link. You will be logged in automatically.
        </li>
      </ol>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <strong>Using Google</strong>
      </p>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Open the app and tap Log In.</li>
        <li>Tap Continue with Google.</li>
        <li>Select your Google account. You will be logged in immediately.</li>
      </ol>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <strong>Using Apple</strong>
      </p>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Open the app and tap Log In.</li>
        <li>Tap Continue with Apple.</li>
        <li>
          Authenticate using Face ID, Touch ID, or your Apple ID password.
        </li>
      </ol>
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
          Use the same sign-in method you used when creating your account. If
          you signed up with Google, log in with Google.
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
        <strong>3.4 How to Sign Out</strong>
      </h2>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Go to Settings by tapping the settings icon.</li>
        <li>Scroll to the bottom and tap Sign Out.</li>
        <li>Confirm. You will be returned to the login screen.</li>
      </ol>
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
          Signing out only logs you out on the current device. Other devices
          remain logged in. If you are registered for an upcoming arena, signing
          out does not cancel your registration — but you will not receive the
          Room Card notification if you are signed out.
        </em>
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
                <strong>Still need help? </strong>Email us at
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
                </a>{" "}
                or go to Settings &gt; Support inside the app. We respond within
                24 hours.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>SECTION 4 ACCOUNT FAQs</strong>
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
        <strong>Can I change my username?</strong>
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
        No. Usernames are permanent on Corpse. Once you set it at registration,
        it cannot be changed under any circumstance. Choose carefully — it is
        your competitive identity on the platform.
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
        <strong>I did not receive my Magic Link email. What do I do?</strong>
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
        Check your spam or junk folder first. If it is not there, go back to the
        login screen and tap Resend Magic Link. Make sure you entered the
        correct email address. If the problem continues, contact
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
        <strong>My Magic Link expired. Can I get a new one?</strong>
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
        Yes. Magic Links are valid for 6 hours. If yours has expired, go to the
        login screen and request a new one.
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
        <strong>Can I have more than one Corpse account?</strong>
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
        No. One account per user. Creating multiple accounts to manipulate ELO
        or arena outcomes is a rule violation and can result in a permanent ban
        on all accounts.
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
        <strong>Can I change my registered email address?</strong>
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
        Yes, but it requires a support request. When you change your email, all
        active sessions across all your devices are terminated immediately as a
        security measure. You will need to log in again on each device.
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
        <strong>I am under 18. Can I use Corpse?</strong>
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
        Yes. You can create an account and use most features. However, you
        cannot complete KYC, which means you cannot pay entry fees as Captain or
        receive prize money. You can participate in paid arenas as a squad
        member if a KYC-verified adult Captain invites you.
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
        <strong>What happens if I delete my account?</strong>
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
        Account deletion is permanent. Your username, avatar, and active squad
        or guild memberships are removed immediately. Financial records and
        match history are retained for legal compliance for up to 5 years. You
        can re-register with a new email after deletion.
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
        <strong>Will I get logged out automatically?</strong>
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
        Yes. If you do not use the app for 90 consecutive days, your session on
        that device will automatically expire. You will also be logged out
        across all devices if you change your login credentials, or if your
        account is suspended or banned.
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
          Can I be logged in on multiple devices at the same time?
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
        Yes. You can be logged in on multiple devices simultaneously. Each
        device has its own session. Signing out of one device does not affect
        the others.
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
        <strong>How do I update my in-game ID?</strong>
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
        Go to Profile &gt; Edit Profile and update your in-game ID. Make sure
        the new ID belongs to you — using someone else's ID will result in
        disqualification.
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
                <strong>Still need help? </strong>Email us at
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
                </a>{" "}
                or go to Settings &gt; Support inside the app. We respond within
                24 hours.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>SECTION 5 KYC VERIFICATION</strong>
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
        <strong>5.1 How to Complete KYC</strong>
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
        KYC is required if you want to pay entry fees as Captain or receive
        prize money.
      </p>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Go to Settings &gt; KYC Verification.</li>
        <li>Tap Start KYC Verification.</li>
        <li>
          Aadhaar step — enter your 12-digit Aadhaar number and tap Send OTP. An
          OTP is sent to the mobile number linked to your Aadhaar. Enter the OTP
          to verify.
        </li>
        <li>
          PAN step — enter your 10-character PAN number. The system verifies it
          against the Income Tax database. The name on your PAN must match your
          Aadhaar name exactly.
        </li>
        <li>
          Bank account step — enter your account number, IFSC code, and account
          holder name. The system performs a verification check to confirm the
          account is active and belongs to you.
        </li>
        <li>
          Review your details and confirm. KYC is typically completed within a
          few minutes.
        </li>
      </ol>
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
          The OTP is sent to your Aadhaar-linked mobile number, not your Corpse
          email. If you do not receive it, your mobile number may not be linked
          to your Aadhaar. Contact UIDAI to link your number first.
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
        <strong>
          Make sure the name on your PAN exactly matches your Aadhaar name. Even
          a small difference will cause KYC to fail.
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
        <strong>5.2 How to Modify Your KYC</strong>
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
        If you need to update your bank account, PAN, or Aadhaar details after
        KYC is complete, follow these steps.
      </p>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Go to Settings &gt; Support and raise a new support ticket.</li>
        <li>Select KYC Modification Request as the ticket type.</li>
        <li>
          Describe which field you want to change and why. Do not include your
          full Aadhaar number or bank details in the ticket text.
        </li>
        <li>
          Submit the ticket. The support team will send a Magic Link to your
          registered email to verify your identity.
        </li>
        <li>
          Click the Magic Link in your email to confirm the request. The link is
          valid for 24 hours.
        </li>
        <li>
          After identity verification, the support team will send a secure
          portal link to your email within 24 hours. This portal link is valid
          for 24 hours.
        </li>
        <li>
          Open the portal and complete the re-verification for the specific
          field you are changing.
        </li>
        <li>
          Corpse reviews your submission and approves or rejects within 3 to 5
          working days.
        </li>
        <li>
          You will receive an in-app and email notification of the outcome.
        </li>
      </ol>
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
          All financial activity on your account is frozen from the moment you
          confirm your KYC modification request. You cannot pay entry fees,
          receive prize money, or receive organiser settlements until the
          modification is resolved.
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
        <strong>5.3 KYC FAQs</strong>
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
        <strong>Why do I need KYC?</strong>
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
        KYC is required by Indian law (PMLA 2002 and RBI guidelines) for
        platforms that process financial transactions. On Corpse, KYC verifies
        your identity before you can pay entry fees or receive prize money.
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
        <strong>What documents do I need for KYC?</strong>
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
        Three things: your Aadhaar card (specifically the mobile number linked
        to it for the OTP), your PAN card number, and your bank account number
        and IFSC code.
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
        <strong>Can I complete KYC without a PAN card?</strong>
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
        No. PAN is mandatory for KYC because it is required for TDS deduction
        and reporting to the Income Tax Department.
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
        <strong>I did not receive the Aadhaar OTP. What do I do?</strong>
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
        The OTP goes to your Aadhaar-linked phone number, not your Corpse email.
        If you have not received it after a minute, tap Resend OTP. If it still
        does not arrive, your mobile number may not be linked to your Aadhaar.
        Contact UIDAI to link it.
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
        <strong>My KYC failed. What do I do?</strong>
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
        The most common reasons are: name mismatch between PAN and Aadhaar (the
        names must match exactly), an incorrect OTP, or incorrect bank details.
        Fix the specific issue and try again.
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
        <strong>Does Corpse store my full Aadhaar number?</strong>
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
        No. Corpse stores only the last 4 digits of your Aadhaar number. Your
        full Aadhaar data is held by our authorised eKYC service provider in
        compliance with UIDAI regulations.
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
        <strong>Can I change my KYC bank account later?</strong>
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
        Yes. Request a KYC modification as described in Section 5.2. The process
        takes 3 to 5 working days and your financial activity will be frozen
        during that time.
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
                <strong>Still need help? </strong>Email us at
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
                </a>{" "}
                or go to Settings &gt; Support inside the app. We respond within
                24 hours.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>SECTION 6 ARENAS</strong>
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
        <strong>6.1 Free vs Paid Arenas</strong>
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
            ></td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Free Arena</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>Paid Arena</strong>
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
                Entry fee
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                None
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Set by organiser from preset amounts
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
                Prize pool
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                No monetary prize
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Funded by organiser's security deposit
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
                KYC required
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Not required
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Required for Captain
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
                ELO impact
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                Room card
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Shared 30 mins before match
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Shared 30 mins before match
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
                Entry refundable
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                No entry fee to refund
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                No — non-refundable once registered
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
        <strong>6.2 How to Find an Arena</strong>
      </h2>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Open the Corpse app and tap Arena on the home screen.</li>
        <li>
          Browse the arena feed. Each card shows the game mode, entry fee, prize
          pool, squad format, and match time.
        </li>
        <li>
          Use filters to narrow results by game mode, entry fee range, or time.
        </li>
        <li>
          Tap an arena to see full details including the organiser's reliability
          score, prize breakdown, and registration status.
        </li>
      </ol>
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
          Check the organiser's reliability score before joining a paid arena. A
          high score means they consistently run arenas to completion.
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
        <strong>6.3 How to Create a Squad and Invite Members</strong>
      </h2>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>On the arena details page, tap Register for Arena.</li>
        <li>Tap Create New Squad and enter a squad name.</li>
        <li>You are now the Captain of this squad.</li>
        <li>Tap Invite Members. An invite link is generated.</li>
        <li>
          Share the link with your squadmates via WhatsApp or in-app. Each link
          is single-use — generate a new one for each member.
        </li>
        <li>
          Once all members have joined and the squad is full, the Captain
          proceeds to register.
        </li>
      </ol>
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
          Invite links expire after a set time. If a squadmate says the link
          does not work, generate a new one from the squad screen.
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
        <strong>6.4 How to Pay the Entry Fee</strong>
      </h2>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>After your squad is complete, tap Proceed to Payment.</li>
        <li>
          Review the payment summary — entry fee and the 2% payment gateway
          charge.
        </li>
        <li>Tap Pay Now. The Razorpay payment screen opens.</li>
        <li>
          Select your payment method — UPI, net banking, debit card, credit
          card, or mobile wallet.
        </li>
        <li>
          Complete the payment. Your slot is confirmed and a receipt is sent to
          your email.
        </li>
      </ol>
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
          Entry fees are non-refundable once your registration is confirmed.
          Once you pay, your slot is locked. You cannot withdraw from the arena.
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
        <strong>6.5 How to Join the Game Room</strong>
      </h2>
      <ol
        style={{
          listStyle: "decimal",
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
          30 minutes before your match start time, you will receive an in-app
          notification with the Room Card — the Free Fire custom room ID and
          password.
        </li>
        <li>Open Free Fire on your mobile device.</li>
        <li>Navigate to the Custom Room lobby.</li>
        <li>Enter the Room ID and Password from the notification.</li>
        <li>Join the room. The match starts at the scheduled time.</li>
      </ol>
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
          Make sure in-app notifications are enabled on your device. If they are
          off, you will not receive the Room Card. Enable them in Device
          Settings &gt; Apps &gt; Corpse &gt; Notifications.
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
        <strong>
          The Room Card is confidential. Do not share it with anyone who is not
          a registered participant in your arena. Sharing the Room Card leads to
          immediate disqualification of your squad.
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
        <em>
          If you have not received the Room Card 25 minutes before the match
          start, contact support immediately via Settings &gt; Support. Do not
          wait until match start time.
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
        <strong>6.6 How to Submit Your Result</strong>
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
        Corpse uses an auto-capture system that makes result submission easy.
      </p>
      <ol
        style={{
          listStyle: "decimal",
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
          Before entering the Free Fire room, tap Start Match in the Corpse app.
          A floating capture button will appear as an overlay on your screen.
        </li>
        <li>Play your match in Free Fire. The capture button stays visible.</li>
        <li>
          When the match ends and the scoreboard appears, tap the floating
          capture button.
        </li>
        <li>
          The system screenshots the scoreboard and uploads it automatically.
        </li>
        <li>
          You will receive an in-app confirmation that your result has been
          uploaded.
        </li>
      </ol>
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
          The 60-second window: As soon as the organiser uploads their result, a
          60-second countdown starts. If you have not uploaded yet, do it
          immediately. After the window closes, your screenshot will not be
          accepted.
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
        <strong>
          If you accidentally left the scoreboard before tapping capture, go to
          the arena screen in Corpse and tap Upload Result Manually. Select your
          scoreboard screenshot from your gallery. You must still do this within
          the 60-second window.
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
        <strong>6.7 How to Raise a Result Dispute</strong>
      </h2>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Go to the completed arena in the Corpse app.</li>
        <li>
          Tap Dispute Result. This is available for 24 hours after the result is
          posted.
        </li>
        <li>
          Select the specific issue — wrong winner, incorrect kill count,
          incorrect ranking, and so on.
        </li>
        <li>Write a clear explanation of what is wrong and why.</li>
        <li>
          Attach your screenshot evidence — the scoreboard clearly showing your
          in-game name and stats.
        </li>
        <li>
          Submit. Corpse will review and give a final decision within 24 hours.
        </li>
      </ol>
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
          The dispute window closes exactly 24 hours after the result is posted.
          After that, results are permanently locked. Raise your dispute as soon
          as you spot an error.
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
        <strong>6.8 Arena FAQs</strong>
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
        <strong>Can I leave an arena after I have registered?</strong>
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
        No. Once your squad's registration is confirmed and the entry fee is
        paid, the registration is locked. You cannot withdraw and the entry fee
        is non-refundable.
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
        <strong>What happens if my squad member does not show up?</strong>
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
        Your squad is not disqualified. The remaining members can play without
        the absent member. The match proceeds with whoever made it into the
        room.
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
        <strong>Can I use an emulator to play in Corpse arenas?</strong>
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
        No. Emulators are strictly banned. All arenas must be played on a
        physical mobile device. Using an emulator results in immediate
        disqualification and a flag on your account.
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
        <strong>I did not receive the Room Card. What do I do?</strong>
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
        Check that in-app notifications are enabled. If they are on but you
        still did not receive the Room Card 25 minutes before the match, contact{" "}
        <a
          href="mailto:support@corpsearena.com"
          style={{ color: "var(--red)" }}
        >
          support@corpsearena.com
        </a>{" "}
        immediately. Do not wait until match start time.
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
        <strong>The match started and I missed it. Do I get a refund?</strong>
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
        No. Once the tournament has started, entry fees are non-refundable. This
        includes device issues, connectivity problems, or personal
        unavailability.
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
        <strong>Can the organiser remove me after I have registered?</strong>
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
        No. Once your registration is confirmed, the organiser cannot remove
        you. Only Corpse's platform team can disqualify a player after
        registration, and only for rule violations.
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
        <strong>What if the arena is cancelled after I paid?</strong>
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
        You will receive a full 100% refund of your entry fee within 24 hours.
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
        <strong>Can I join two arenas that happen at the same time?</strong>
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
        No. The platform prevents you from registering for two arenas with
        overlapping match times.
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
        <strong>I used the wrong in-game ID. What happens?</strong>
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
        Using a different in-game ID than the one registered on Corpse results
        in immediate disqualification when Corpse verifies identities before the
        match. Your entry fee is forfeited.
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
                <strong>Still need help? </strong>Email us at
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
                </a>{" "}
                or go to Settings &gt; Support inside the app. We respond within
                24 hours.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>SECTION 7 PAYMENTS AND PRIZE MONEY FAQs</strong>
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
          How much is the payment gateway charge on top of the entry fee?
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
        2% of the entry fee. This is charged by Razorpay for processing the
        payment and goes to Razorpay, not Corpse. For example, if the entry fee
        is Rs 59, you pay Rs 60.18 total.
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
        <strong>Which payment methods can I use?</strong>
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
        UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking, Debit Card, Credit
        Card (Visa, Mastercard, Amex), and Mobile Wallets. All processed through
        Razorpay.
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
        <strong>My payment failed but money was deducted. What do I do?</strong>
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
        Razorpay will automatically refund the amount to your original payment
        source within 5 to 7 working days. If you have not received it after 7
        days, raise a support ticket in the app with your transaction reference
        number.
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
        <strong>When do I receive my prize money?</strong>
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
        Prize money is disbursed to the Captain's KYC-verified bank account
        within 24 hours of Corpse verifying the match result. 30% TDS and Rs
        5.90 bank payout fee are deducted before the money arrives.
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
        <strong>Why did I receive less than the prize amount shown?</strong>
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
        Two deductions are made before disbursement: 30% TDS (income tax
        required by the Income Tax Act 1961) and Rs 5.90 bank payout fee. For
        example, a Rs 2,000 prize becomes Rs 1,394.10 after deductions.
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
        <strong>What is TDS and do I need to do anything about it?</strong>
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
        TDS stands for Tax Deducted at Source. Corpse deducts 30% from your
        prize and deposits it directly with the Government of India. It will
        appear in your Form 26AS on the Income Tax portal. You still need to
        include this income in your annual tax return. Consult a CA for your
        specific situation.
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
          I am a squad member, not the Captain. How do I get my share?
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
        The full squad prize goes to the Captain's bank account. The Captain is
        responsible for distributing it among squad members. Corpse has no
        involvement in internal squad prize distribution.
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
          Can I get a refund if I want to withdraw from a paid arena?
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
        No. Entry fees are non-refundable once registration is confirmed. The
        only time you get a refund is if the arena is cancelled before it
        starts.
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
                <strong>Still need help? </strong>Email us at
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
                </a>{" "}
                or go to Settings &gt; Support inside the app. We respond within
                24 hours.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>SECTION 8 ELO AND ECOSYSTEM PIPELINE FAQs</strong>
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
        <strong>What is ELO on Corpse?</strong>
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
        ELO is your competitive skill score. Every player starts with a baseline
        score at account creation. It goes up when you win and can go down when
        you lose. Your ELO is public and shown on your profile and the
        leaderboard.
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
        <strong>How is my ELO calculated?</strong>
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
        ELO is calculated by Corpse's proprietary ELO Engine based on match
        results. Beating a higher-ELO opponent earns you more ELO than beating a
        lower one. Losing to a lower-ranked player costs you more than losing to
        a higher one. The exact formula is Corpse's intellectual property.
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
        <strong>Does my ELO go down if I lose?</strong>
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
        Yes. ELO can go up and down. Consistently losing to lower-ranked players
        will reduce your ELO. This is intentional — ELO reflects your current
        competitive level.
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
        <strong>Can Corpse change my ELO?</strong>
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
        Yes. Corpse can adjust or recalculate ELO if cheating, match
        manipulation, or result fraud is detected.
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
        <strong>What is the Ecosystem Pipeline?</strong>
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
        The Ecosystem Pipeline is your competitive progression tier on Corpse.
        Every player is assigned a tier based on their ELO and match activity.
        Tiers go from the entry level up to the highest competitive tier. Your
        tier is displayed on your public profile.
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
        <strong>Does my tier reset every season?</strong>
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
        Yes. At each seasonal reset, 60% of your ELO carries forward to the new
        season. If you had 1,000 ELO, you start the new season with 600.
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
        <strong>Do free arenas count toward my ELO?</strong>
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
        Yes. Both free and paid arenas contribute to your ELO equally.
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
        <strong>Is my Corpse ELO the same as my Free Fire in-game rank?</strong>
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
        No. They are completely separate. Corpse ELO reflects your performance
        within Corpse arenas only. Your Free Fire rank is determined by Garena's
        own system.
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
                <strong>Still need help? </strong>Email us at
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
                </a>{" "}
                or go to Settings &gt; Support inside the app. We respond within
                24 hours.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>SECTION 9 GUILD</strong>
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
        <strong>9.1 How to Create a Guild</strong>
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
        You need to be KYC verified to create a guild.
      </p>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Go to the Guild section in the app.</li>
        <li>Tap Create Guild.</li>
        <li>
          Enter your guild name. Follow content rules — no NSFW content and no
          impersonating other guilds or real people.
        </li>
        <li>Confirm creation. You are now the Captain.</li>
      </ol>
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
          Once created, a guild cannot be deleted. Choose your guild name
          carefully.
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
        <strong>9.2 How to Join a Guild</strong>
      </h2>
      <ol
        style={{
          listStyle: "decimal",
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
          Go to the Guild section and browse the leaderboard or search for a
          specific guild.
        </li>
        <li>Tap on a guild profile to view their details.</li>
        <li>Tap Request to Join.</li>
        <li>
          Your request is sent to the guild's Captain, Vice Captain, and
          Manager.
        </li>
        <li>
          If accepted, you will receive an in-app notification and join as a
          Member in the Rising Unit.
        </li>
      </ol>
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
          You can only be in one guild at a time. Leave your current guild
          before joining another.
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
        <strong>9.3 How to Manage Your Guild</strong>
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
        <strong>Accepting or Rejecting Join Requests</strong>
      </p>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Go to your Guild profile and tap Manage Requests.</li>
        <li>Review incoming requests and tap Accept or Reject.</li>
      </ol>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <strong>Assigning Roles</strong>
      </p>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Go to Guild Management &gt; Member List.</li>
        <li>Tap a member's name and select Change Role.</li>
      </ol>
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
          Only the Captain can appoint the Vice Captain and Manager. The Vice
          Captain can remove Managers. Managers can accept or reject join
          requests and remove Members.
        </em>
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
        <strong>Transferring Captaincy</strong>
      </p>
      <ol
        style={{
          listStyle: "decimal",
          paddingLeft: "28px",
          margin: "0 0 32px",
          background: "var(--g100)",
          border: "1px solid var(--g200)",
          borderLeft: "3px solid var(--red)",
          padding: "24px 28px",
          lineHeight: 1.8,
        }}
      >
        <li>Go to Guild Settings &gt; Transfer Ownership.</li>
        <li>Select the member you want to make Captain.</li>
        <li>
          They receive a notification and must accept. Once accepted, they
          become Captain and you become a Member.
        </li>
      </ol>
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
          You cannot leave the guild without transferring captaincy first. If
          you are permanently banned, the Vice Captain automatically becomes
          Captain.
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
        <strong>9.4 Guild FAQs</strong>
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
        <strong>Can I be in more than one guild?</strong>
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
        No. You can only be in one guild at a time. Leave your current guild
        first before joining another.
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
        <strong>How do I leave my guild?</strong>
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
        If you are a Member, Vice Captain, or Manager, go to your Guild profile
        and tap Leave Guild. It is immediate. If you are the Captain, transfer
        ownership to another member first.
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
        <strong>Can the Captain remove me from the guild?</strong>
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
        Yes. The Captain, Vice Captain, and Manager can all remove members.
        Removal is immediate.
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
        <strong>What are the unit tiers?</strong>
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
        Unit tiers classify members within your guild. Apex Unit includes the
        Captain, Vice Captain, Manager, and the top 2 ELO players. Specialized
        Unit includes the top archetype performers excluding Apex members. Core
        Unit includes consistent and reliable members. Rising Unit is the entry
        level where all new members start.
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
        <strong>How does my guild get a Verified Badge?</strong>
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
        The Verified Badge is earned when your guild reaches a specific level on
        the platform's progression system. It is awarded automatically when the
        threshold is reached.
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
          What happens to my guild if the Captain gets permanently banned?
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
        The Vice Captain automatically becomes Captain immediately. The guild's
        ELO drops slightly but the guild continues operating normally.
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
        <strong>Can Corpse shut down my guild?</strong>
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
        Yes. Corpse can suspend or permanently dissolve a guild for serious rule
        violations including coordinated match fixing, organised cheating, or
        establishing rules that require members to violate platform policies.
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
                <strong>Still need help? </strong>Email us at
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
                </a>{" "}
                or go to Settings &gt; Support inside the app. We respond within
                24 hours.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>SECTION 10 SUSPENSION AND FLAGS FAQs</strong>
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
        <strong>What is a flag on Corpse?</strong>
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
        A flag is a formal disciplinary record placed on your account when you
        violate platform rules. Flags are cumulative. They expire after 12
        months, so only active flags count toward your total.
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
        <strong>What happens when I get a flag?</strong>
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
        Flag 1 is a warning only — no suspension, stays on your record for 12
        months. Flag 2 triggers a 1-day suspension — all sessions are terminated
        immediately. Flag 3 triggers a 1-week suspension. Flag 4 or more results
        in a permanent ban.
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
        <strong>What violations get me a flag?</strong>
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
        The main violations are: cheating or hacking in matches, match fixing or
        deliberately losing, creating multiple accounts to manipulate results,
        impersonating other players or Corpse staff, and posting NSFW or
        inappropriate content.
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
        <strong>What causes an immediate permanent ban?</strong>
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
        Some violations skip the flag system and result in an immediate ban.
        These include: sexually explicit content especially anything involving
        minors, extreme hate speech, impersonating Corpse staff to commit
        financial fraud, attacking the platform's infrastructure, and
        coordinated large-scale fraud.
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
        <strong>What happens to my money if I am suspended?</strong>
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
        During a temporary suspension, any prize money or settlements that come
        in are held in escrow and released to you automatically when the
        suspension ends. During a permanent ban, all financial amounts including
        entry fees paid, pending prizes, and settlements are permanently
        forfeited.
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
        <strong>How do I appeal a flag, suspension, or ban?</strong>
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
        Go to Settings &gt; Support &gt; Appeal a Disciplinary Action. Fill out
        the form with the specific reason you believe the action was wrong and
        attach any evidence. Corpse will respond within 24 hours. If your
        account is permanently banned and you cannot access the app, email
        <a
          href="mailto:support@corpsearena.com"
          style={{ color: "var(--red)" }}
        >
          support@corpsearena.com
        </a>{" "}
        from your registered email address.
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
        <strong>My appeal was rejected. What can I do?</strong>
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
        Each action can only be appealed once. If your appeal is rejected, the
        decision is final within the platform. If you believe the process itself
        was conducted unfairly, raise a formal grievance with the Grievance
        Officer at{" "}
        <a href="mailto:legal@corpsearena.com" style={{ color: "var(--red)" }}>
          legal@corpsearena.com
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
        <strong>If my flag expires, does it disappear from my record?</strong>
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
        An expired flag no longer counts toward your active total for
        determining consequences. However, Corpse retains the internal record of
        all past violations. Expiry means it does not trigger new consequences —
        not that it is erased from our systems.
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
                <strong>Still need help? </strong>Email us at
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
                </a>{" "}
                or go to Settings &gt; Support inside the app. We respond within
                24 hours.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>SECTION 11 EDGE CASES</strong>
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
        These are the scenarios players ask about most.
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
        <strong>
          What happens if the Captain gets suspended during an active arena?
        </strong>
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
        <li>Your squad's registration stays active — it is not cancelled.</li>
        <li>
          The suspended Captain cannot log in or participate during the
          suspension.
        </li>
        <li>The remaining squad members can still play the match.</li>
        <li>
          Prize money won during the suspension is held in escrow and released
          to the Captain's account when the suspension ends.
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
        <strong>What happens if a squad member does not show up?</strong>
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
        <li>The squad is not disqualified.</li>
        <li>The remaining members play with whoever made it into the room.</li>
        <li>Entry fees are not refunded.</li>
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
        <strong>
          What happens if the organiser does not share the Room Card?
        </strong>
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
          If you have not received the Room Card 25 minutes before the match
          start, contact{" "}
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          or go to Settings &gt; Support immediately.
        </li>
        <li>
          If the match cannot proceed, the arena will be cancelled and all
          players will receive a full refund within 24 hours.
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
          Do not wait until match start time to report a missing Room Card.
          Report it at 25 minutes before start so Corpse has time to act.
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
        <strong>
          What happens if my KYC is under modification during an arena?
        </strong>
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
          You cannot register for new paid arenas as Captain while the
          modification is pending.
        </li>
        <li>
          If you were already registered before the modification started, the
          registration stands.
        </li>
        <li>
          Prize money won during the modification period is held in escrow and
          released to your new bank account once approved.
        </li>
        <li>
          If the modification is rejected, the prize is released to your
          original bank account.
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
        <strong>What happens if the winning squad gets disqualified?</strong>
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
        <li>The disqualified squad does not receive the prize.</li>
        <li>
          The winner ladder shifts up — 2nd place becomes 1st, 3rd becomes 2nd,
          and so on.
        </li>
        <li>
          The prize is disbursed to the newly eligible squad after
          re-verification.
        </li>
        <li>
          The disqualified squad's entry fee is forfeited and a flag is applied
          to the offending players.
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
        <strong>What happens if the arena is cancelled after I paid?</strong>
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
          You receive a full 100% refund of your entry fee within 24 hours.
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
                <strong>Still need help? </strong>Email us at
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
                </a>{" "}
                or go to Settings &gt; Support inside the app. We respond within
                24 hours.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>SECTION 12 TROUBLESHOOTING</strong>
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
        <strong>Account Issues</strong>
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
        <strong>I cannot log in to my account</strong>
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
          Check you are using the same sign-in method used when you created your
          account.
        </li>
        <li>
          If using Magic Link: make sure you entered the correct email. Check
          spam. Request a new link if the old one expired.
        </li>
        <li>
          If your account is suspended: you will see a suspension notice on the
          login screen. Read it for duration and appeal instructions.
        </li>
        <li>
          If none of the above works: contact{" "}
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          from your registered email.
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
          My account shows I am permanently banned but I did nothing wrong
        </strong>
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
        <li>Tap Appeal This Ban on the login screen.</li>
        <li>
          Or email{" "}
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          with subject: APPEAL — PERMANENT BAN.
        </li>
        <li>
          Include your registered email, username, and a detailed explanation.
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
        <strong>Payment and KYC Issues</strong>
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
        <strong>My KYC keeps failing</strong>
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
          Name mismatch: the name on your PAN must match your Aadhaar exactly.
        </li>
        <li>
          OTP not received: your mobile number may not be linked to your
          Aadhaar. Contact UIDAI.
        </li>
        <li>
          Bank account failure: verify the account number, IFSC, and account
          holder name are all correct and the account is active.
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
        <strong>I was charged but did not get my slot</strong>
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
        <li>Wait 5 minutes — confirmations can take a moment to process.</li>
        <li>Check your email for a Razorpay receipt.</li>
        <li>
          If payment was confirmed but slot not allocated: go to Settings &gt;
          Support with your Razorpay transaction reference.
        </li>
        <li>
          If money was deducted but payment was not confirmed: Razorpay will
          refund automatically within 5 to 7 working days.
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
        <strong>I have not received my prize money</strong>
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
          Check that result verification is complete. Prizes are only disbursed
          after Corpse verifies the result.
        </li>
        <li>Prizes are disbursed within 24 hours of verification.</li>
        <li>
          If it has been more than 24 hours after verification: contact
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>
          .
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
        <strong>Arena and Room Card Issues</strong>
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
        <strong>I did not receive the Room Card</strong>
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
          Check that in-app notifications are enabled for Corpse in your device
          settings.
        </li>
        <li>
          Check the Corpse notification centre in the app — the Room Card may
          have been delivered there.
        </li>
        <li>
          If it is 25 minutes before match start and still no Room Card: contact{" "}
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          immediately.
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
        <strong>I cannot join the Free Fire room</strong>
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
        <li>Double-check the Room ID and Password — typos are common.</li>
        <li>Make sure your Free Fire app is updated to the latest version.</li>
        <li>Make sure your Free Fire account is in good standing.</li>
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
        <strong>Result Submission Issues</strong>
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
        <strong>I missed the 60-second upload window</strong>
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
        <li>Your screenshot data will not be accepted.</li>
        <li>
          The result will be determined by the organiser's submission and any
          player screenshots received within the window.
        </li>
        <li>
          If you believe the determined result is incorrect, raise a dispute
          within 24 hours.
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
          To avoid this in future: stay on the scoreboard screen after the match
          ends. Tap the capture button the moment the scoreboard appears.
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
        <strong>The auto-capture button did not appear</strong>
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
          Make sure you tapped Start Match in the Corpse app before entering the
          Free Fire room. The button only appears after this.
        </li>
        <li>
          If it disappeared during the match: go back to Corpse and use Upload
          Result Manually on the arena screen.
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
        <strong>Guild and ELO Issues</strong>
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
        <strong>My ELO is not updating after a match</strong>
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
          ELO updates after result verification, not immediately after the match
          ends.
        </li>
        <li>Wait for verification to complete (usually within a few hours).</li>
        <li>
          If ELO has not updated 24 hours after verification: contact
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>
          .
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
        <strong>I cannot join a guild</strong>
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
          Check you are not already in another guild. You can only be in one at
          a time.
        </li>
        <li>
          Leave your current guild first before requesting to join a new one.
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
        <strong>Suspension Issues</strong>
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
        <strong>I think I was flagged by mistake</strong>
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
        <li>Go to Settings &gt; Support &gt; Appeal a Disciplinary Action.</li>
        <li>
          Be specific about why the flag was wrong. Generic appeals do not work.
        </li>
        <li>
          Attach evidence — screenshots, timestamps, or any proof that supports
          your case.
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
                <strong>Still need help? </strong>Email us at
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
                </a>{" "}
                or go to Settings &gt; Support inside the app. We respond within
                24 hours.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>SECTION 13 SAFETY AND SECURITY TIPS</strong>
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
        <strong>Protect Your Account</strong>
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
          Never share your Magic Link with anyone. It is like your password.
        </li>
        <li>
          Never share your login details with any other player or third party.
        </li>
        <li>
          If you sign in on a shared or public device, always sign out when you
          are done.
        </li>
        <li>
          If you notice login activity on a device you do not recognise, contact{" "}
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          immediately.
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
        <strong>Protect Your KYC Information</strong>
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
          Never share your Aadhaar number, PAN number, or bank details with any
          other player or organiser.
        </li>
        <li>
          The Aadhaar OTP is sent to your Aadhaar-linked phone. Never share this
          OTP with anyone, including someone claiming to be from Corpse.
        </li>
        <li>
          The KYC portal link sent by the support team is single-use. Never
          share this link.
        </li>
        <li>
          Corpse will never ask for your OTP, bank password, or full Aadhaar
          number through any channel.
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
        <strong>Protect Your Room Card</strong>
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
        <li>The Room Card is for registered players only.</li>
        <li>
          Never share the room ID or password with anyone who is not a
          registered participant in your arena.
        </li>
        <li>
          Sharing the Room Card leads to immediate disqualification of your
          squad and a flag.
        </li>
        <li>
          If you accidentally share it, contact{" "}
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          immediately before the match starts.
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
        <strong>Spot Fake Corpse Messages</strong>
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
        Corpse will never contact you through WhatsApp, Instagram, Discord, or
        any unofficial channel to ask for personal information or payment.
        Official Corpse communications come only from:
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
        <li>In-app notifications within the Corpse app</li>
        <li>
          Emails from the @corpsearena.com domain (such as{" "}
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          or
          <a
            href="mailto:legal@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            legal@corpsearena.com
          </a>
          )
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
        If you receive a message from someone claiming to be Corpse through any
        other channel, it is not us. Do not click any links. Report it to
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
        <strong>Report Harassment or Toxic Behaviour</strong>
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
        <li>Go to the player's profile and tap Report Player.</li>
        <li>Select the appropriate category and describe what happened.</li>
        <li>
          For serious or ongoing situations, contact{" "}
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          with a description and screenshot evidence.
        </li>
        <li>
          You will not be penalised for reporting. All reports are reviewed by
          the trust and safety team.
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
                <strong>Still need help? </strong>Email us at
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
                </a>{" "}
                or go to Settings &gt; Support inside the app. We respond within
                24 hours.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>SECTION 14 GLOSSARY</strong>
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
        New to Corpse? Here is every term you will encounter on the platform.
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
                <strong>What It Means</strong>
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
                A single organised match event on Corpse. Either free (no entry
                fee) or paid (entry fee required). Created and managed by an
                Organiser.
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
                Auto-Capture System
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Corpse's built-in result submission tool. A floating button
                appears when you tap Start Match. Tap it when the match
                scoreboard appears to automatically upload your result.
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
                Apex Unit
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The highest unit tier in a guild. Includes the Captain, Vice
                Captain, Manager, and the 2 highest ELO players.
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
                Battle Royale
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                One of the two Free Fire modes on Corpse. Squads compete to be
                the last team standing.
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
                The squad leader. The Captain creates the squad, invites
                members, pays the entry fee, and receives prize money on behalf
                of the squad. KYC required for paid arenas.
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
                Clash Squad
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                One of the two Free Fire modes on Corpse. Teams of 4 face off in
                a round-based format.
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
                Core Unit
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The third unit tier in a guild. Consistent and reliable members
                who regularly compete as part of the guild.
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
                Your competitive skill score. Goes up when you win, can go down
                when you lose. Publicly visible on your profile and the
                leaderboard.
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
                The competitive progression tier system. Players move through
                tiers based on ELO and activity. Resets seasonally with 60% ELO
                carry-forward.
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
                Escrow
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The Company's secure holding account. All financial transactions
                go through escrow — guaranteeing prize pools exist before arenas
                go live.
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
                A disciplinary record on your account for a rule violation. Flag
                1 is a warning. Flag 2 is a 1-day suspension. Flag 3 is a 1-week
                suspension. Flag 4 or more is a permanent ban. Flags expire
                after 12 months.
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
                Free Arena
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                An arena with no entry fee and no monetary prize pool. Open to
                all registered users. ELO still applies.
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
                A persistent competitive team. Guilds have their own ELO,
                leaderboard ranking, and internal structure. Maximum 20 members.
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
                Guild ELO
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The collective competitive rating of a guild. Separate from
                individual player ELO. Calculated from guild performance in
                arenas.
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
                Your unique identifier in the game title (your Free Fire in-game
                ID). Required to participate in arenas.
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
                Know Your Customer. The identity and financial verification
                process required to pay entry fees and receive prize money.
                Involves Aadhaar OTP, PAN verification, and bank account
                verification.
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
                A secure single-use login link sent to your email. Clicking it
                logs you in without a password. Valid for 6 hours.
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
                Manager
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The third leadership role in a guild. Handles day-to-day
                operations — accepting join requests, removing members, and
                adding supplementary guild rules.
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
                Minor User
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                A registered user below 18 years of age. Can join arenas as a
                squad member but cannot be Captain, pay entry fees, or complete
                KYC.
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
                Organiser
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                A registered user who creates and manages arenas. Deposits a
                security pool (prize pool) before an arena goes live.
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
                Paid Arena
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                An arena requiring an entry fee from the Captain. Prize pool
                funded by the organiser's security deposit.
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
                PG Charge
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Payment Gateway Charge. A 2% fee added to entry fee payments,
                paid by the player, collected by Razorpay.
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
                Preset
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                A pre-configured arena template. Organisers choose from presets
                for entry fee amounts, prize structures, and squad formats.
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
                Prize Pool
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The total monetary prize in an arena, funded entirely by the
                organiser's security deposit.
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
                Razorpay
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Corpse's payment gateway partner. Processes all entry fee
                payments and financial transactions.
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
                Rising Unit
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The entry-level unit tier in a guild. All new members start
                here.
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
                The Free Fire custom room ID and password shared with registered
                players 30 minutes before a match.
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
                Security Deposit
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The amount an organiser deposits before an arena goes live.
                Functions as the prize pool. Held in escrow until the arena
                concludes.
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
                Session
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                An authenticated login on a specific device. Expires after 90
                days of inactivity or on sign-out.
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
                Specialized Unit
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The second unit tier in a guild. Top archetype performers,
                excluding Apex Unit members.
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
                A team of players registered together for a specific arena. Led
                by a Captain.
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
                TDS
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Tax Deducted at Source. 30% deducted from prize money before
                payout. Required by the Income Tax Act 1961. Reflected in your
                Form 26AS.
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
                Unit Tier
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The classification of a guild member — Apex, Specialized, Core,
                or Rising. Based on role, ELO, and performance.
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
                Vice Captain
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The second-in-command in a guild. Automatically becomes Captain
                if the Captain leaves or is banned.
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
                Verified Badge
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                An official recognition mark for guilds that reach a specific
                level on the platform's progression system.
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
                60-Second Window
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                The upload window for player result screenshots. Starts when the
                organiser submits their result. All players must upload within
                60 seconds.
              </p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
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
                <strong>SECTION 15 CONTACT SUPPORT</strong>
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
        Can't find your answer in this Help Centre? Here is who to contact and
        how.
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
                <strong>Issue</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                <strong>How to Reach Us</strong>
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                General support and app issues
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Settings &gt; Support inside the app, or email
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
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
                Within 24 hours
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
                Payment failed or not confirmed
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Settings &gt; Support — include your Razorpay transaction
                reference
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Within 24 hours
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
                Prize money not received
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Settings &gt; Support — include arena name and match date
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Within 24 hours
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
                KYC modification request
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Settings &gt; Support &gt; KYC Modification Request
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Acknowledgement 24 hours, decision 3-5 working days
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
                KYC failed or verification error
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                — describe the specific error
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Within 24 hours
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
                Room Card not received
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Settings &gt; Support — report at least 25 minutes before match
                start
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Immediate — report early
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
                Result dispute
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                Flag or suspension appeal
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Settings &gt; Support &gt; Appeal a Disciplinary Action
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Within 24 hours
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
                Permanent ban appeal
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Email{" "}
                <a
                  href="mailto:support@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  support@corpsearena.com
                </a>{" "}
                — Subject: APPEAL PERMANENT BAN
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Within 24 hours
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
                Privacy complaint or data rights
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Email{" "}
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
                Acknowledgement 24 hours, resolution 30 days
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
                IP infringement report
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Email{" "}
                <a
                  href="mailto:ip@corpsearena.com"
                  style={{ color: "var(--red)" }}
                >
                  ip@corpsearena.com
                </a>{" "}
                — Subject: IP INFRINGEMENT REPORT
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Within 5 working days
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
                Grievance (formal complaint about process)
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Email{" "}
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
                Acknowledgement 24 hours, resolution 30 days
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
                Suspected account compromise or scam
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                — Subject: SECURITY URGENT
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sub)",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--g600)",
                  marginBottom: "20px",
                }}
              >
                Priority within 24 hours
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
                Legal matters and formal notices
              </p>
            </td>
            <td
              style={{
                border: "1px solid var(--g200)",
                padding: "10px 14px",
                color: "var(--g600)",
                verticalAlign: "top",
              }}
            >
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
                Within 5 working days
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
        <strong>We are always here to help.</strong>
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
        <a
          href="mailto:support@corpsearena.com"
          style={{ color: "var(--red)" }}
        >
          support@corpsearena.com
        </a>{" "}
        | Settings &gt; Support inside the app | Response within 24 hours
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
        This Help Centre was last updated in April 2026 and is effective from
        May 1, 2026.
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
        <em>Version 1.0 Corpse [CORPSE ESPORTS PRIVATE LIMITED]</em>
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
          Help Centre content is for guidance only and does not constitute legal
          advice. For legal obligations, refer to the official documents under
          Settings &gt; Legal.
        </em>
      </p>
    </DocShell>
  );
}
