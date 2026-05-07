import { Metadata } from "next";
import DocShell from "@/components/layout/DocShell";

export const metadata: Metadata = {
  title: "Sign Out & Auto-Expiry Policy | Corpse",
  description: "Sign Out & Auto-Expiry Policy for the Corpse platform.",
};

export default function PolicyPage() {
  return (
    <DocShell
      title="Sign Out Policy"
      badge="Legal · Account"
      subtitle="Sign Out Policy governing session management, inactivity expiry, and force termination."
    >
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
        <strong>Sign Out Policy</strong>
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Sessions • Sign Out • Inactivity • Force Termination • Re-Login
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <em>Binding on: All Registered Users | All Active Sessions</em>
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
                    Corpse Terms &amp; Conditions | Account Suspension &amp; Ban
                    T&amp;C | Privacy Policy
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
          This Sign Out Policy governs all session management, voluntary
          sign-out, automatic session expiry, and force-termination events on
          the Corpse platform. By using the Platform, you agree to be bound by
          this Policy.
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
        PART IV Automatic Session Expiry — 90-Day Inactivity
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
        11. Inactivity Definition
      </p>
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
        12. 90-Day Expiry Rule
      </p>
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
        13. Inactivity Warning Notification
      </p>
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
        14. Effect of Session Expiry
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
        PART V Force Termination of Sessions
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
        15. Credential Change — Email or Login Method
      </p>
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
        16. Account Suspension or Ban
      </p>
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
        17. Platform-Initiated Security Termination
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
        PART VI Session Reference Table
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
        18. All Session Events at a Glance
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
        PART VII Governing Law &amp; Contact
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
        19. Governing Law
      </p>
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
        20. Contact
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
        This Sign Out Policy ("Policy") governs all aspects of session
        management on the Corpse platform operated by [CORPSE ESPORTS PRIVATE
        LIMITED] ("Company", "we", "us", "our"). It sets out the rules
        governing:
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
        <li>How user sessions are created and maintained on the Platform.</li>
        <li>What happens when a user voluntarily signs out of the Platform.</li>
        <li>
          How sessions are automatically expired after a period of inactivity.
        </li>
        <li>
          When and how sessions are force-terminated by the Platform — including
          on credential change, account suspension, or platform-initiated
          security events.
        </li>
        <li>
          The effect of sign-out and session expiry on arena registrations,
          platform data, and locally cached information.
        </li>
        <li>
          How a user re-authenticates after signing out or being signed out.
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
        This Policy applies to every registered user of the Platform on every
        device and session through which they access the Platform.
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
        <strong>2. Relationship to Other Corpse Policies</strong>
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
        This Sign Out Policy operates within and supplements the following
        Corpse policies:
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
          Corpse Terms &amp; Conditions — general session and account rules.
        </li>
        <li>
          Account Suspension &amp; Ban T&amp;C — force termination of sessions
          on suspension or ban is governed jointly by that policy and this one.
        </li>
        <li>
          Privacy Policy — data handling during and after sign-out is governed
          by the Privacy Policy.
        </li>
        <li>
          Account Creation &amp; Deletion Policy — the distinction between
          signing out (temporary) and account deletion (permanent) is addressed
          in the Account Creation &amp; Deletion Policy.
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
        PART II — SESSION MANAGEMENT
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
        <strong>3. What a Session Is</strong>
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
        A session is the authenticated connection between a user&apos;s account
        and the Corpse platform on a specific device. A session is created when
        a user successfully signs into the Platform and is maintained until the
        session is voluntarily ended (sign out), automatically expired
        (inactivity), or force-terminated (credential change, suspension, or
        security event).
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        Sessions are managed using JSON Web Tokens (JWT) — a secure,
        industry-standard authentication mechanism. Each session token carries
        the user&apos;s identity, session expiry information, and device
        context. The Platform&apos;s backend validates the session token on
        every authenticated request — ensuring the session is still active and
        valid before any protected action is performed.
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
        <strong>4. Single-Device Session Model</strong>
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
        The Corpse platform operates on a single-device session model — a
        user&apos;s account can only have one active authenticated session per
        device at any given time. However, the Platform does not restrict a user
        to a single device — a user may be simultaneously logged in on multiple
        devices (for example, on both their Android phone and their iPad).
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
          Each device maintains its own independent session — signing in on a
          new device creates a new session for that device only.
        </li>
        <li>
          Signing out of one device terminates the session on that device only —
          other active sessions on other devices remain unaffected.
        </li>
        <li>
          The only events that terminate all active sessions simultaneously are:
          credential change (email or login method update) and account
          suspension or ban — as described in Part V.
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
          Note: If you believe your account has been accessed on a device you do
          not recognise, contact{" "}
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          immediately. The Platform&apos;s security team can review active
          session records and take appropriate action to secure your account.
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
        <strong>5. Locally Cached Data</strong>
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
        The Corpse app stores a limited amount of data locally on your device to
        enable faster re-login and a smoother user experience on return visits.
        This locally cached data includes:
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
          Your account identifier (not your password or authentication
          credentials) — enabling the app to pre-populate your login screen on
          return.
        </li>
        <li>
          App preferences and UI settings — such as notification preferences and
          display settings you have configured.
        </li>
        <li>
          Non-sensitive profile data — such as your username and avatar,
          enabling the app to display your profile information on the login
          screen before authentication.
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
        The following data is never cached locally:
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
          Authentication credentials — passwords, magic link tokens, OAuth
          tokens.
        </li>
        <li>KYC documents or financial data.</li>
        <li>
          Session tokens — these are stored in secure, encrypted storage on the
          device and are invalidated on sign-out.
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
        Locally cached data is not deleted when a user signs out — it is
        retained to enable faster re-login. However, cached session tokens are
        invalidated immediately on sign-out, meaning cached data alone cannot
        grant access to the account without re-authentication.
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
        PART III — VOLUNTARY SIGN OUT
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
        <strong>6. How to Sign Out</strong>
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
        A user can sign out of the Corpse platform at any time by navigating to
        their Profile within the app and selecting the &apos;Sign Out&apos;
        option. The sign-out action is immediate — no confirmation delay or
        waiting period applies. The user is signed out of the Platform on the
        current device the moment the action is confirmed.
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
        <strong>7. Effect of Sign Out on Current Device</strong>
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
        When a user signs out of the Platform on the current device, the
        following occurs immediately:
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
          The active session token for the current device is invalidated — the
          user is logged out and cannot access any authenticated features of the
          Platform without signing in again.
        </li>
        <li>
          The app returns to the login screen — displaying the user&apos;s
          cached account identifier for convenience but requiring full
          re-authentication before access is granted.
        </li>
        <li>
          All authenticated actions — arena participation, squad management,
          guild management, financial transactions — become inaccessible until
          re-login.
        </li>
        <li>
          Locally cached non-sensitive data (username, avatar, preferences) is
          retained on the device for faster re-login — it is not deleted on
          sign-out.
        </li>
        <li>
          Cached session tokens are invalidated and deleted from secure storage
          — they cannot be reused for re-access.
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
        <strong>8. Effect of Sign Out on Other Active Sessions</strong>
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
        Signing out of the Platform on one device has no effect on any other
        active sessions on other devices. If a user is simultaneously logged in
        on two devices and signs out of one, the session on the other device
        remains fully active and operational. The user continues to have access
        to the Platform on the device they did not sign out of.
      </p>
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
          This design allows users to securely sign out of a shared or public
          device without disrupting their session on their personal device. If
          you sign out of a device you no longer use, your primary device
          session is preserved.
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
        <strong>9. Arena Registrations After Sign Out</strong>
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
        Signing out of the Platform does not affect a user&apos;s existing arena
        registrations. Registrations are account-level records — they are not
        tied to a specific session or device. When a user signs out:
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
          All active arena registrations are preserved — the user remains
          registered for all arenas they were registered for before signing out.
        </li>
        <li>
          Entry fees already paid are not refunded — sign-out does not
          constitute withdrawal from an arena.
        </li>
        <li>
          The user cannot participate in an arena while signed out — squad
          participation requires an active session on a device.
        </li>
        <li>
          If a match occurs while the user is signed out — the squad&apos;s
          registration remains intact and other squad members can still
          participate. The absent member&apos;s impact is governed by the Arena
          Joining T&amp;C (Part VII, Section 33).
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
          Important: Signing out while registered for an upcoming arena means
          you may miss the room card notification delivered 30 minutes before
          match start. Ensure you are signed in and active on at least one
          device before the room card distribution time if you are registered
          for a match. The Platform is not responsible for missed room card
          notifications due to the user being signed out.
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
        <strong>10. Re-Login After Sign Out</strong>
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
        After signing out, a user re-authenticates using the same method they
        used when creating their account:
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
                  <strong>Account Creation Method</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Re-Login Method After Sign Out</strong>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Email (Magic Link)
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  User enters their registered email address. A Magic Link is
                  sent to that email. The user clicks the Magic Link to
                  authenticate and re-enter the Platform. Magic Links are valid
                  for 6 hours from the time of sending.
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
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
                  User taps &apos;Continue with Google&apos; and authenticates
                  through their Google account. No separate Corpse password is
                  required.
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
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
                  User taps &apos;Continue with Apple&apos; and authenticates
                  through their Apple ID. No separate Corpse password is
                  required.
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
          Note: The re-login method is fixed to the method used when the account
          was created. A user who registered via Magic Link cannot switch to
          Google OAuth for re-login without updating their account
          authentication method in settings. Contact{" "}
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          if you need assistance changing your login method.
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
        PART IV — AUTOMATIC SESSION EXPIRY — 90-DAY INACTIVITY
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
        <strong>11. Inactivity Definition</strong>
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
        For the purpose of this Policy, inactivity is defined as the absence of
        any authenticated interaction with the Corpse Platform on a specific
        device session. Inactivity is measured per session — a user who has
        multiple active sessions (on multiple devices) may have one session
        expire due to inactivity while another remains active.
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        The following actions constitute activity for the purpose of the
        inactivity clock — they reset the 90-day inactivity counter:
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
          Opening the Corpse app and completing authentication on the device.
        </li>
        <li>
          Any authenticated in-app action — browsing arenas, checking the
          leaderboard, managing squad or guild, viewing match history, or any
          other interaction with authenticated platform features.
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
        The following do not constitute activity for the purpose of the
        inactivity clock:
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
          Receiving push notifications — receiving a notification without
          opening the app and interacting does not reset the inactivity clock.
        </li>
        <li>Having the app installed on the device without opening it.</li>
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
        <strong>12. 90-Day Expiry Rule</strong>
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
        If a user&apos;s session on a specific device remains inactive for 90
        consecutive calendar days, the session is automatically expired by the
        Platform. This means:
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
          The session token for that device is invalidated — the user is
          effectively signed out of that device.
        </li>
        <li>
          The user must re-authenticate using their registered login method to
          regain access on that device.
        </li>
        <li>
          The user&apos;s account itself is not affected — account data, ELO,
          match history, guild membership, and all other account-level
          information is preserved. Only the specific session on the inactive
          device is expired.
        </li>
        <li>
          If the user has other active sessions on other devices that were used
          within the 90-day period — those sessions are unaffected by the
          inactivity expiry of the inactive device&apos;s session.
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
          Note: 90-day inactivity expiry applies per session (per device). If
          you use the Platform on one device regularly but have an old session
          on another device you no longer use, only the unused device&apos;s
          session will expire after 90 days.
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
        <strong>13. Inactivity Warning Notification</strong>
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
        Before a session is automatically expired due to inactivity, the
        Platform sends an advance warning notification to the user. This
        notification:
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
          Is sent to the user&apos;s registered email address and, where the
          device has push notifications enabled, as an in-app push notification.
        </li>
        <li>
          Is sent in advance of the 90-day expiry — giving the user sufficient
          time to re-open the app and reset the inactivity clock before their
          session expires.
        </li>
        <li>Informs the user which device/session is approaching expiry.</li>
        <li>
          Instructs the user to open the app and sign in to prevent expiry.
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
        If the user does not act on the warning notification and the 90-day
        period elapses, the session expires as described in Section 12. No
        further warnings are sent after the initial notification.
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
        <strong>14. Effect of Session Expiry</strong>
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
        When a session expires due to 90-day inactivity, the effect is identical
        to a voluntary sign-out on that device:
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
          The session token is invalidated — access to the Platform on that
          device requires re-authentication.
        </li>
        <li>
          Locally cached non-sensitive data is retained on the device for faster
          re-login.
        </li>
        <li>
          Account-level data (ELO, history, registrations, guild membership) is
          fully preserved — expiry only affects the session, not the account.
        </li>
        <li>Other active sessions on other devices are unaffected.</li>
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
        PART V — FORCE TERMINATION OF SESSIONS
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
        <strong>15. Credential Change — Email or Login Method</strong>
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
        If a user updates their registered email address or changes their login
        authentication method — for example, linking a different Google account
        or changing from Magic Link to OAuth — the Platform immediately
        force-terminates all active sessions on all devices. This is a security
        measure to ensure that only the holder of the new, verified credentials
        can access the account.
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
          All active sessions across all devices are invalidated simultaneously
          upon credential change confirmation.
        </li>
        <li>
          The user is signed out of every device where they were logged in.
        </li>
        <li>
          The user must re-authenticate on each device using the updated
          credentials.
        </li>
        <li>
          A notification is sent to the user&apos;s registered email address
          (both old and new, where applicable) confirming the credential change
          and the resulting session termination.
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
          Important: If you receive a credential change notification that you
          did not initiate — your account may have been compromised. Contact
          <a
            href="mailto:support@corpsearena.com"
            style={{ color: "var(--red)" }}
          >
            support@corpsearena.com
          </a>{" "}
          immediately. Do not attempt to re-login until you have spoken with the
          Platform&apos;s security team.
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
        <strong>16. Account Suspension or Ban</strong>
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
        When the Platform applies a temporary suspension or permanent ban to a
        user&apos;s account — as governed by the Account Suspension &amp; Ban
        Terms &amp; Conditions — all active sessions on all devices are
        immediately and forcibly terminated. This session termination is
        automatic and simultaneous across all devices at the exact moment the
        suspension or ban is applied.
      </p>
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--g600)",
          marginBottom: "20px",
        }}
      >
        <strong>During Temporary Suspension:</strong>
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
          All active sessions are terminated immediately — the user is logged
          out of every device.
        </li>
        <li>
          All login attempts during the suspension period will display the
          suspension notice — the user cannot re-authenticate until the
          suspension ends.
        </li>
        <li>
          When the suspension period ends, the user can re-authenticate normally
          using their registered login method.
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
        <strong>Upon Permanent Ban:</strong>
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
          All active sessions are terminated immediately and permanently — the
          user is logged out of every device.
        </li>
        <li>
          All login attempts display the permanent ban notice — the user cannot
          re-authenticate on the banned account.
        </li>
        <li>
          The session termination on a banned account is irreversible — no
          session can be created for a permanently banned account.
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
        <strong>17. Platform-Initiated Security Termination</strong>
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
        In addition to the specific triggers described in Sections 15 and 16,
        the Platform reserves the right to force-terminate one or all of a
        user&apos;s active sessions at any time if the Platform&apos;s security
        systems detect:
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
          Suspicious account activity — for example, concurrent authenticated
          sessions from geographically distant locations that are inconsistent
          with normal user behaviour.
        </li>
        <li>
          Potential account compromise — indicators that the account may have
          been accessed by an unauthorised party.
        </li>
        <li>
          Unusual transaction patterns — session activity patterns inconsistent
          with the account&apos;s normal usage that may indicate fraudulent use.
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
        When the Platform force-terminates sessions for security reasons, the
        user is notified via email and, where possible, via push notification on
        the affected device. The notification includes a recommendation to
        review account security and change login credentials if the user did not
        initiate the session activity that triggered the security review.
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
        PART VI — SESSION REFERENCE TABLE
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
        <strong>18. All Session Events at a Glance</strong>
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
        The following table is the complete reference for all session events on
        the Platform — what triggers them, which sessions are affected, and what
        the user must do to regain access:
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
                  <strong>Sessions Affected</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Account Data Affected?</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>User Action to Regain Access</strong>
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Voluntary sign out
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Current device only
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  No — all data preserved
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Re-login using registered method on that device
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  90-day inactivity expiry
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Inactive device only
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  No — all data preserved
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Re-login using registered method on that device
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Credential change (email / login method)
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  All devices simultaneously
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  No — all data preserved
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Re-login on each device using updated credentials
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Temporary suspension
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  All devices simultaneously
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  No — data preserved, frozen
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Re-login automatically unlocked when suspension ends
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Permanent ban
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  All devices — permanently
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Account permanently locked
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Cannot re-login on banned account. May create new account per
                  Suspension T&amp;C Section 29
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Platform security termination
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Affected device(s)
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  No — all data preserved
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  Re-login using registered method. Review account security.
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
        PART VII — GOVERNING LAW &amp; CONTACT
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
        <strong>19. Governing Law</strong>
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
        This Sign Out Policy shall be governed by and construed in accordance
        with the laws of India, including the Information Technology Act 2000
        and the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules
        2021, as amended from time to time. This Policy operates within and
        supplements the Corpse Terms &amp; Conditions of the Corpse platform.
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
        <strong>20. Contact</strong>
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
        For all session-related queries — including unrecognised sign-out
        events, suspected account compromise, or re-login issues — contact the
        Platform&apos;s support team:
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
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>Re-Login Issue</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
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
                  via in-app support or email — response within 24 hours
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--g200)" }}>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--g600)",
                    marginBottom: "20px",
                  }}
                >
                  <strong>General Session Query</strong>
                </p>
              </td>
              <td
                style={{
                  border: "1px solid var(--g200)",
                  padding: "10px 14px",
                  color: "var(--g600)",
                  verticalAlign: "top",
                }}
              >
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
                  — response within 48 hours
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
        This Sign Out Policy was last updated in April 2026 and is effective
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
        <em>Confidential &amp; Proprietary. All rights reserved.</em>
      </p>
    </DocShell>
  );
}
