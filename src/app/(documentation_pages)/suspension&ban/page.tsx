import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Suspension & Ban T&C | Corpse",
  description: "Account Suspension & Ban T&C for the Corpse platform.",
};

export default function PolicyPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-32 max-w-5xl min-h-screen flex flex-col items-center text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-[#e8192c] uppercase tracking-wider drop-shadow-[0_0_15px_rgba(232,25,44,0.4)]">
        Account Suspension & Ban T&C
      </h1>
      <div className="space-y-8 text-white/70 text-lg flex flex-col items-center w-full">
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>CORPSE</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>The Operating System for Esports</em>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Account Suspension &amp; Ban</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Terms &amp; Conditions</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Flags • Warnings • Suspensions • Permanent Bans • Appeals
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>Binding on: All Registered Users | Players | Organisers</em>
        </p>
        {/* <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Legal Entity</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">[CORPSE ESPORTS PRIVATE LIMITED]</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>CIN</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  [CIN: TO BE UPDATED UPON NEW ENTITY REGISTRATION]
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Address</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Silchar Road Ghat Line, Subashnagar, Karimganj - 788710,
                  Assam, India
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Governed By</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  IT Act 2000 | Corpse Terms &amp; Conditions | Platform
                  Community Standards
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Jurisdiction</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">India exclusively</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Effective Date</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">May 1, 2026</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Last Updated</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">April 2026</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Support Contact</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"><a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a></p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Legal Contact</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"><a href="mailto:legal@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">legal@corpsearena.com</a></p>
              </td>
            </tr>
          </table>
        </div> */}
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            This document governs the flag system, warning process, account
            suspension, permanent ban, and appeal mechanism on the Corpse
            platform. By using the Platform, you agree to be bound by these
            Terms in their entirety.
          </em>
        </p>
        {/* <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Table of Contents</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART I Introduction &amp; Scope</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 1. Purpose of This Document</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 2. Who This Applies To</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 3. Relationship to Other Corpse Policies</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 4. Governing Legal Framework</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART II The Flag System</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 5. What a Flag Is</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 6. How Flags Are Issued</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 7. Flag Expiry — 1 Year</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 8. Progressive Action Table</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART III Violations That Trigger a Flag</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          {" "}
          9. Category A — Competitive Integrity Violations
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          {" "}
          10. Category B — Identity &amp; Account Violations
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 11. Category C — Content Violations</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 12. How Violations Are Detected</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            PART IV Violations That Trigger Immediate Permanent Ban
          </strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 13. Severe Violations — Zero Tolerance</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 14. Company's Sole Discretion</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART V Warning Process — Flag 1</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 15. How a Warning Is Issued</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 16. Contents of a Warning Notice</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 17. Warning on Record</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 18. User's Obligation Upon Receiving a Warning</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART VI Temporary Suspension — Flag 2 &amp; Flag 3</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 19. Flag 2 Suspension — 1 Day</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 20. Flag 3 Suspension — 1 Week</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 21. How Suspension Is Applied</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 22. What Happens During Suspension</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 23. Tournament Participation During Suspension</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 24. Financial Activity During Suspension</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 25. Suspension Lifted — What Happens Next</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            PART VII Permanent Ban — Flag 4 &amp; Immediate Violations
          </strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 26. How a Permanent Ban Is Applied</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 27. What Permanent Ban Means</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 28. Financial Consequences of Permanent Ban</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 29. Re-Registration After Permanent Ban</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 30. Detection of Banned Users on New Accounts</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            PART VIII Notification of Flags, Suspensions &amp; Bans
          </strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 31. Flag Notification</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 32. Suspension Notification</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 33. Permanent Ban Notification</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 34. Contents of All Notifications</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART IX Appeal Process</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 35. Who Can Appeal</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 36. How to Submit an Appeal</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 37. What to Include in an Appeal</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 38. Appeal Review Timeline</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 39. Possible Outcomes of an Appeal</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 40. One Appeal Per Action — Finality</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART X Prohibited Post-Action Conduct</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 41. During Suspension</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 42. After Permanent Ban</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 43. During Appeal Review</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            PART XI Governing Law, Dispute Resolution &amp; Contact
          </strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 44. Governing Law</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 45. Dispute Resolution</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 46. Contact</p> */}
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART I — INTRODUCTION &amp; SCOPE</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>1. Purpose of This Document</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Account Suspension &amp; Ban Terms &amp; Conditions document
          (&quot;Suspension Policy&quot;) sets out the complete framework
          governing how [CORPSE ESPORTS PRIVATE LIMITED] (&quot;Company&quot;,
          &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) identifies, flags,
          warns, suspends, and permanently bans users of the Corpse platform
          (&quot;Platform&quot;) who violate the Platform's rules, community
          standards, and legal obligations.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">This Suspension Policy exists to:</p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Protect the integrity of competitive gameplay on the Platform —
            ensuring that all tournaments, arenas, and matches are fair, honest,
            and free from manipulation.
          </li>
          <li>
            Protect users from harassment, harmful content, impersonation, and
            other conduct that damages the Platform community.
          </li>
          <li>
            Provide a clear, transparent, and fair framework that every user
            understands before they engage with the Platform — so that no
            suspension or ban ever comes as a surprise.
          </li>
          <li>
            Give users a meaningful opportunity to correct their behaviour
            through a progressive flag system before severe consequences are
            applied.
          </li>
          <li>
            Provide a legitimate appeal mechanism that ensures every user has
            the right to challenge a disciplinary action they believe is unjust.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>2. Who This Applies To</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Suspension Policy applies to every Registered User of the
          Platform without exception — including:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Players participating in free or paid arenas in any capacity.</li>
          <li>Captains leading squads in paid tournaments.</li>
          <li>Organisers creating and managing arenas on the Platform.</li>
          <li>Guild leaders and guild members.</li>
          <li>
            Any user interacting with the Platform's community features, support
            system, or financial features.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Policy does not apply to Guest Users — Guest Users have no
          account and therefore cannot be flagged or suspended. However, Guest
          Users who create an account after engaging in behaviour that would
          constitute a violation may have that behaviour taken into account
          during account review.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>3. Relationship to Other Corpse Policies</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Suspension Policy is a supplementary policy to the Corpse
          Terms &amp; Conditions. It is specifically referenced in:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Corpse Terms &amp; Conditions — Section 26 (Company's Right to
            Suspend or Terminate Accounts)
          </li>
          <li>
            KYC &amp; KYC Modification Terms &amp; Conditions — Part XI
            (Company's Rights)
          </li>
          <li>
            Money Deposit &amp; Receive Policy — Part XI (Prohibited Conduct
            &amp; Consequences)
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          In the event of any conflict between this Suspension Policy and the
          Corpse Terms &amp; Conditions, the Corpse Terms &amp; Conditions shall
          prevail. In the event of any conflict between this Suspension Policy
          and the Money Deposit &amp; Receive Policy on financial matters
          arising from suspensions or bans, the Money Deposit &amp; Receive
          Policy shall prevail.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>4. Governing Legal Framework</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Suspension Policy is governed by and operates within the
          following legal framework:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Law / Framework</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Relevance</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Information Technology Act, 2000 (as amended)
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Governs the Company's right to moderate content and user
                  behaviour on its digital platform
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  IT (Intermediary Guidelines and Digital Media Ethics Code)
                  Rules, 2021
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Governs the Company's obligations as an intermediary including
                  grievance redressal and content moderation
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Corpse Terms &amp; Conditions — Corpse</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The primary binding agreement between the user and the Company
                  — this Policy supplements it
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Indian Penal Code (as applicable)</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Certain severe violations — such as fraudulent impersonation,
                  harassment, or obscene content — may also constitute criminal
                  offences
                </p>
              </td>
            </tr>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART II — THE FLAG SYSTEM</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>5. What a Flag Is</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A flag is a formal disciplinary record placed on a user's account by
          the Company when the user is found to have violated the Platform's
          rules, community standards, or these Terms. A flag is:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            An official record — it is permanently attached to the user's
            account history for its duration and cannot be removed by the user.
          </li>
          <li>
            A warning mechanism — flags are designed to give users the
            opportunity to correct their behaviour before more severe
            consequences are applied.
          </li>
          <li>
            A cumulative system — each additional flag triggers a progressively
            more severe consequence, culminating in permanent ban upon a fourth
            flag.
          </li>
          <li>
            Time-limited — each flag expires after 12 calendar months from the
            date it was issued, after which it no longer counts toward the
            user's active flag total.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: A flag expiring after 12 months does not erase the record of
            the violation from the Company's internal audit logs. The Company
            retains all disciplinary records indefinitely for security and
            compliance purposes. Only the active flag count — which determines
            suspension consequences — resets after 12 months.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>6. How Flags Are Issued</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Flags are issued by the Company's trust and safety team following an
          investigation into a reported or detected violation. The flag issuance
          process is as follows:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Step 1 — A violation is detected or reported, either through the
            Platform's automated detection systems, a user report, or an
            organiser report.
          </li>
          <li>
            Step 2 — The Company's trust and safety team reviews the reported
            violation and conducts an investigation to confirm whether a
            violation occurred.
          </li>
          <li>
            Step 3 — If the investigation confirms a violation, the trust and
            safety team determines the appropriate flag category and issues the
            flag to the user's account.
          </li>
          <li>
            Step 4 — The user is notified immediately via in-app notification
            and email of the flag, the reason for it, their current flag count,
            and the consequence triggered by the flag.
          </li>
          <li>
            Step 5 — If the flag triggers a suspension or ban, the corresponding
            account action is applied simultaneously with the notification.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company does not require a minimum number of reports from other
          users before initiating an investigation. A single credible report or
          a detection by the Platform's automated systems is sufficient to
          trigger a review.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>7. Flag Expiry — 1 Year</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Each flag issued to a user's account carries a validity period of 12
          calendar months from the date of issue. After 12 months, the flag is
          considered expired and is no longer counted toward the user's active
          flag total for the purpose of determining suspension consequences.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">The following rules govern flag expiry:</p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Flag expiry is calculated from the date the flag was issued — not
            from the date any suspension associated with the flag ended.
          </li>
          <li>
            If a user has 2 active flags and both expire after 12 months without
            a third flag being issued, their active flag count returns to zero.
          </li>
          <li>
            If a user receives a new flag before existing flags expire, all
            flags — old and new — remain active and count toward the user's
            total.
          </li>
          <li>
            A user who has served a suspension and whose associated flags have
            expired starts fresh — as if they had never been flagged — for the
            purpose of future violation consequences. However, the historical
            record of past violations is retained by the Company.
          </li>
        </ul>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Scenario</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Active Flag Count</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Consequence</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">User receives Flag 1 — no prior flags</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">1 active flag</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Warning issued — no suspension</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  User receives Flag 2 — Flag 1 still active (within 12 months)
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">2 active flags</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">1-day suspension applied</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  User receives Flag 2 — Flag 1 has expired (more than 12 months
                  ago)
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">1 active flag</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Warning issued — Flag 2 treated as first active flag
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  User receives Flag 3 — Flags 1 and 2 still active
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">3 active flags</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">1-week suspension applied</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  User receives Flag 4 — all prior flags still active
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">4 active flags</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Permanent ban applied</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  User receives Flag 4 — one or more prior flags have expired
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Depends on active count</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Consequence based on active flag count, not total historical
                  flags
                </p>
              </td>
            </tr>
          </table>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>8. Progressive Action Table</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following table summarises the complete progressive action
          framework on the Platform. This is the definitive reference for all
          disciplinary consequences:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Flag Count</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Action</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Duration</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Sessions Terminated?</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Financial Activity?</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Flag 1</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Formal Warning</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  No suspension — warning on record for 12 months
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Unaffected</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Flag 2</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Temporary Suspension</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">1 calendar day from time of application</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes — immediately</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Frozen during suspension</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Flag 3</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Temporary Suspension</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">7 calendar days from time of application</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes — immediately</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Frozen during suspension</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Flag 4+</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Permanent Ban</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Lifetime — account permanently terminated
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes — immediately</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">All amounts forfeited</p>
              </td>
            </tr>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: The flag count that determines consequences is the number
            of ACTIVE flags — flags issued within the last 12 months. Expired
            flags do not count. A user with 3 historical flags but only 1 active
            flag receives a warning, not a suspension.
          </strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART III — VIOLATIONS THAT TRIGGER A FLAG</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>9. Category A — Competitive Integrity Violations</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following violations directly undermine the fairness and integrity
          of competitive gameplay on the Platform. Each confirmed instance of
          any Category A violation results in the issuance of one flag to the
          user's account:
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>9.1 Cheating &amp; Hacking in Matches</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Using any software, tool, script, bot, macro, exploit, or modification
          that provides an unfair competitive advantage over other players in
          any arena or match on the Platform. This includes but is not limited
          to:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Aimbots — software that automatically assists with targeting or
            accuracy in shooting games.
          </li>
          <li>
            Wallhacks or ESP (Extra Sensory Perception) software — tools that
            allow players to see through walls, detect enemy positions, or gain
            information not available to normal gameplay.
          </li>
          <li>
            Speed hacks — software that artificially increases a player's
            movement or action speed beyond normal gameplay parameters.
          </li>
          <li>
            Lag switches — hardware or software that artificially manipulates
            network latency to gain a competitive advantage.
          </li>
          <li>
            Game file modification — altering game files, assets, or
            configurations to gain any advantage not available to other players.
          </li>
          <li>
            Any third-party software or tool that interacts with the game client
            in a manner not authorised by the game publisher.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Cheating is the most serious competitive integrity
            violation on the Platform. The Company uses multiple detection
            methods to identify cheating, including match data analysis,
            statistical anomaly detection, and organiser reports. A single
            confirmed instance of cheating results in a flag regardless of prior
            record.
          </strong>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>9.2 Match Fixing &amp; Result Manipulation</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Deliberately manipulating the outcome of any match, arena, or
          tournament in a manner that is not consistent with genuine competitive
          play. This includes:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Pre-arranging match results with opponents — colluding to determine
            winners and losers before a match is played.
          </li>
          <li>
            Deliberately losing matches — intentionally underperforming to
            benefit another player, squad, or organiser financially or
            competitively.
          </li>
          <li>
            Coordinating with an organiser to manipulate results — an organiser
            and participating players working together to fix outcomes for
            financial gain.
          </li>
          <li>
            Prize pool manipulation — any arrangement designed to ensure a
            specific player or squad wins prize money through non-competitive
            means.
          </li>
          <li>
            Score manipulation — artificially inflating or deflating scores,
            kills, or other metrics used to determine match outcomes or ELO
            rankings.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>9.3 Creating Multiple Accounts to Manipulate Results</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Creating or using more than one Platform account for the purpose of
          manipulating competitive results, ELO rankings, or prize distribution.
          This includes:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Creating a secondary account to participate in the same arena as
            your primary account — gaining the ability to influence match
            outcomes by controlling multiple squads.
          </li>
          <li>
            Using multiple accounts to artificially inflate or deflate ELO
            rankings — for example, using a secondary account to deliberately
            lose matches against your primary account.
          </li>
          <li>
            Using multiple accounts to claim multiple prize positions in the
            same tournament.
          </li>
          <li>
            Coordinating with other users who control secondary accounts to
            manipulate collective results.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: Creating multiple accounts is separately prohibited under the
            Corpse Terms &amp; Conditions and the Account Creation Terms. This
            violation specifically covers the use of multiple accounts for the
            purpose of competitive manipulation. Creating a new account after a
            ban is separately addressed in Part VII.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>10. Category B — Identity &amp; Account Violations</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following violations relate to dishonest or deceptive use of
          identity and account features on the Platform:
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>10.1 Impersonating Other Users</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Adopting a username, profile description, in-game name, or any other
          identity element that falsely represents another registered user of
          the Platform — with the intent to deceive other users, gain an unfair
          advantage, or cause harm to the impersonated user's reputation. This
          includes:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Using a username that is identical or deceptively similar to another
            user's username on the Platform.
          </li>
          <li>
            Claiming in any Platform communication to be another specific
            registered user.
          </li>
          <li>
            Using another user's in-game name or ID on your Platform profile to
            create confusion about identity.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>10.2 Impersonating Corpse Staff</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Representing yourself as an employee, moderator, support agent, or
          official representative of the Company in any context — including
          in-app communications, squad chats, or external social media. This is
          a particularly serious violation as it can be used to defraud other
          users or extract sensitive information under false pretences.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Using a username or profile that includes words such as 'Corpse
            Admin', 'Corpse Mod', 'Corpse Support', or similar terms that imply
            official status.
          </li>
          <li>
            Sending messages to other users claiming to be from the Corpse team
            — for example, falsely claiming to offer prizes, request account
            details, or issue warnings on behalf of the Company.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: The Company will never ask for your account credentials,
            OTP, bank details, or Aadhaar number through in-app chat, direct
            messages, or any informal channel. If you receive such a request
            from someone claiming to be Corpse staff, report it immediately to
            <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a>.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>11. Category C — Content Violations</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following violations relate to inappropriate, harmful, or illegal
          content posted or shared on the Platform:
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>11.1 NSFW &amp; Inappropriate Content</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Posting, sharing, uploading, or displaying content that is sexually
          explicit, graphically violent, obscene, or otherwise inappropriate for
          a competitive gaming platform accessible to users of all ages. This
          includes:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Sexually explicit images, videos, or text in any profile field,
            squad name, guild name, or user-generated content field.
          </li>
          <li>
            Graphic violence or gore — images or descriptions of extreme
            physical harm.
          </li>
          <li>
            Content that demeans, degrades, or sexualises any individual or
            group.
          </li>
          <li>
            Hate speech — content that promotes hatred, discrimination, or
            violence against individuals or groups based on religion, ethnicity,
            gender, sexual orientation, disability, or any other characteristic.
          </li>
          <li>
            Obscene or offensive usernames, squad names, or guild names that
            violate community standards.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          NSFW and inappropriate content violations are assessed on a spectrum
          of severity. Minor violations — such as a mildly offensive username —
          will result in a flag and content removal. Severe violations — such as
          sexually explicit content or hate speech — may result in an immediate
          permanent ban without going through the flag system, as described in
          Part IV.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>12. How Violations Are Detected</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company uses the following methods to detect violations on the
          Platform:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Automated detection systems — the Platform's backend systems monitor
            for statistical anomalies in match data, ELO progression, and
            account activity that may indicate cheating or manipulation.
          </li>
          <li>
            User reports — any registered user can report a suspected violation
            through the Platform's in-app reporting mechanism. Reports are
            reviewed by the trust and safety team.
          </li>
          <li>
            Organiser reports — tournament organisers can flag suspected
            violations by players in arenas they manage.
          </li>
          <li>
            Match data analysis — the Company reviews match data, results, and
            performance metrics for patterns consistent with cheating or result
            manipulation.
          </li>
          <li>
            Manual review — the trust and safety team conducts manual
            investigations in response to escalated reports or flagged
            anomalies.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company does not reveal the specific detection methods or
          thresholds used to identify violations, as this information could be
          used to circumvent them. All investigations are conducted
          confidentially and findings are shared with the user only to the
          extent necessary for the notification and appeal process.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            PART IV — VIOLATIONS THAT TRIGGER IMMEDIATE PERMANENT BAN
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>13. Severe Violations — Zero Tolerance</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Certain violations are so severe, harmful, or fundamentally
          incompatible with the Platform's values that they result in an
          immediate permanent ban — bypassing the flag system entirely. No prior
          flags are required, and no warning is issued before the ban is
          applied. The following violations fall into this category:
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>13.1 Sexually Explicit or Child-Related Content</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Posting, sharing, or distributing any sexually explicit content —
          particularly any content that involves or depicts minors in any sexual
          context whatsoever. This is an absolute zero-tolerance violation. The
          Company will report any such content to the relevant law enforcement
          authorities and the National Crime Records Bureau (NCRB) in accordance
          with applicable Indian law.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>13.2 Extreme Hate Speech &amp; Incitement to Violence</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Posting content that explicitly calls for violence against specific
          individuals or groups, or content that constitutes criminal incitement
          under the Indian Penal Code. This includes threats of physical harm
          directed at specific users, organisers, or Corpse staff members.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>13.3 Severe Impersonation for Financial Fraud</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Impersonating Corpse staff or another user for the specific purpose of
          financial fraud — for example, tricking another user into sharing
          payment details, KYC information, or Aadhaar OTPs by falsely claiming
          to be a Corpse representative or a trusted user.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>13.4 Deliberate Platform Infrastructure Attack</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Attempting to attack, disrupt, or damage the Platform's technical
          infrastructure — including DDoS attacks, SQL injection attempts,
          server-side exploitation, or any other form of malicious technical
          attack on the Platform's systems.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>13.5 Coordinated Large-Scale Fraud</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Organising or participating in a coordinated scheme to defraud the
          Platform financially — including large-scale entry fee fraud,
          coordinated KYC fraud, or organised manipulation of prize pool
          disbursements.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>14. Company's Sole Discretion</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          In addition to the specific categories listed in Section 13, the
          Company reserves the right to apply an immediate permanent ban at its
          sole discretion in cases where the nature, severity, or pattern of
          violations is so fundamentally incompatible with the Platform's values
          and community standards that progressing through the flag system would
          be inappropriate.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company will exercise this discretion responsibly and sparingly —
          not as a routine tool, but as a measure of last resort for truly
          egregious conduct. In all cases where this discretion is exercised,
          the Company will communicate the specific reason for the immediate ban
          in the notification sent to the user and the user retains the right to
          appeal as described in Part IX.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART V — WARNING PROCESS — FLAG 1</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>15. How a Warning Is Issued</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          When a user receives their first active flag — triggering a warning —
          the following process occurs simultaneously:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The flag is recorded on the user's account with the date of issue,
            the violation category, and a description of the specific conduct
            that triggered the flag.
          </li>
          <li>
            An in-app notification is sent to the user immediately, clearly
            identifying that a warning has been issued and the reason for it.
          </li>
          <li>
            An email is sent to the user's registered email address containing
            the full warning notice as described in Section 16.
          </li>
          <li>
            No suspension is applied — the user's account remains fully active
            and accessible.
          </li>
          <li>
            No financial activity is frozen — the user can continue paying entry
            fees, participating in arenas, and receiving prize money.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>16. Contents of a Warning Notice</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every warning notice — whether delivered in-app or via email — will
          contain the following information:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The specific violation that was found to have occurred, including
            the category (Category A, B, or C) and the specific rule breached.
          </li>
          <li>
            A brief description of the conduct or content that constituted the
            violation.
          </li>
          <li>
            The user's current active flag count — for a Flag 1 warning, this
            will state '1 active flag out of a maximum of 3 before suspension.'
          </li>
          <li>
            The consequence of the current flag — no suspension, warning only.
          </li>
          <li>The consequence of a second flag — 1-day suspension.</li>
          <li>
            The expiry date of the current flag — 12 months from the date of
            issue.
          </li>
          <li>
            Information on how to appeal the warning if the user believes it was
            issued in error.
          </li>
          <li>
            A reminder of the Platform's community standards and a clear
            statement of what conduct is expected going forward.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>17. Warning on Record</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A warning issued under Flag 1 remains on the user's active flag record
          for 12 calendar months from the date of issue. During this period:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The warning counts as 1 active flag toward the user's cumulative
            flag total.
          </li>
          <li>
            Any new violation during this 12-month period will be treated as a
            second flag — triggering a 1-day suspension.
          </li>
          <li>
            The user can view their active flag count and the expiry date of
            each flag within their account profile under Account &gt;
            Disciplinary Record.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>18. User's Obligation Upon Receiving a Warning</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Upon receiving a warning, the user is expected to:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Review the warning notice carefully and understand which specific
            conduct triggered the flag.
          </li>
          <li>
            Immediately cease the violating conduct — continuing the same
            behaviour after receiving a warning will result in a second flag and
            a 1-day suspension.
          </li>
          <li>
            If the user believes the warning was issued in error, submit an
            appeal within 24 hours of receiving the warning notification as
            described in Part IX.
          </li>
          <li>
            If the user has any questions about the warning or the specific
            conduct that triggered it, contact the support team at
            <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a> for clarification.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART VI — TEMPORARY SUSPENSION — FLAG 2 &amp; FLAG 3</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>19. Flag 2 Suspension — 1 Day</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          When a user accumulates a second active flag — meaning they receive a
          new flag while a previous flag is still within its 12-month validity
          period — a temporary suspension of 1 calendar day is automatically
          applied to their account.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The 1-day suspension begins from the exact time the flag is issued and
          the suspension is applied. It ends exactly 24 hours later — at which
          point the account is automatically and fully restored without any
          manual action required from the user.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>20. Flag 3 Suspension — 1 Week</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          When a user accumulates a third active flag — meaning they receive a
          new flag while two previous flags are still within their 12-month
          validity periods — a temporary suspension of 7 calendar days is
          automatically applied to their account.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The 7-day suspension begins from the exact time the flag is issued and
          the suspension is applied. It ends exactly 168 hours (7 days) later —
          at which point the account is automatically and fully restored without
          any manual action required from the user.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: A third flag and 1-week suspension is the final warning
            stage. Any new flag received after the third flag — regardless of
            whether the suspension has ended — will result in a permanent ban.
            There is no fourth suspension tier. Act accordingly.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>21. How Suspension Is Applied</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The suspension is applied to the user's account simultaneously with
          the issuance of the flag notification. The following technical actions
          occur immediately upon suspension:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            All active sessions across all logged-in devices are immediately and
            forcibly terminated — the user is logged out of every device where
            they are currently signed in.
          </li>
          <li>
            The account is locked — all login attempts during the suspension
            period will display a suspension notice explaining the reason, the
            duration, and the appeal process.
          </li>
          <li>
            All in-app features requiring an active account — including arena
            participation, squad management, organiser tools, and financial
            transactions — are disabled for the duration of the suspension.
          </li>
          <li>
            The suspension is enforced at the account level, not the device
            level — using a different device does not allow the user to access
            their suspended account.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>22. What Happens During Suspension</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          During the suspension period, the following restrictions apply to the
          user's account:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Feature / Activity</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Status During Suspension</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Restored When</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Login to Platform</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Blocked — login screen shows suspension notice
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Automatically at suspension end</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Arena / match participation</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Blocked — cannot join or participate in any arena
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Automatically at suspension end</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Squad management</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Blocked — cannot create, manage, or join squads
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Automatically at suspension end</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Organiser tools</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Blocked — cannot create or manage arenas</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Automatically at suspension end</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Paying entry fees as Captain</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Blocked — financial activity frozen</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Automatically at suspension end</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Receiving prize money</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Held in escrow — not disbursed during suspension
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Released automatically at suspension end</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Receiving organiser settlement</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Held — not processed during suspension</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Processed automatically at suspension end
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">In-app support / appeal access</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Available — user can submit appeal during suspension
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">N/A — remains available</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Profile visibility</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Profile remains visible on leaderboards</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">N/A — unaffected</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">ELO score</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">ELO score unaffected by suspension</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">N/A — unaffected</p>
              </td>
            </tr>
          </table>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>23. Tournament Participation During Suspension</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If a user is suspended while they are registered as Captain in an
          upcoming or ongoing tournament:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The user's squad registration remains active — the squad is not
            removed from the tournament.
          </li>
          <li>
            However, the suspended Captain cannot log in or participate in the
            tournament during the suspension period.
          </li>
          <li>
            If the tournament takes place during the suspension period — the
            squad may participate if another squad member is able to take the
            Captain role temporarily. This is managed within the squad — the
            Platform does not automatically reassign Captain roles during
            suspension.
          </li>
          <li>
            If the suspended user is the only active member of the squad — the
            squad may forfeit their participation. Entry fees paid are
            non-refundable in this scenario as the suspension is the result of a
            policy violation by the user.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: If your suspension ends before a registered tournament begins
            — your Captain privileges are fully restored and you can participate
            normally. Suspensions do not carry over to tournaments that begin
            after the suspension has ended.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>24. Financial Activity During Suspension</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          All financial activity is frozen during the suspension period. This
          includes:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Entry fee payments — the suspended user cannot pay entry fees as
            Captain for any arena during the suspension period.
          </li>
          <li>
            Prize money disbursement — any prize money owed to the user from an
            arena that concluded during or before the suspension is held in
            escrow and will be released automatically when the suspension ends.
          </li>
          <li>
            Organiser settlement — any organiser settlement pending at the time
            of suspension is held and will be processed automatically when the
            suspension ends.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Financial amounts held during suspension are not forfeited — they are
          released automatically when the suspension ends. This is distinct from
          the permanent ban scenario where all financial amounts are forfeited.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>25. Suspension Lifted — What Happens Next</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          When a suspension period ends — either after 1 day (Flag 2) or 7 days
          (Flag 3) — the following occurs automatically:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The account is fully restored — the user can log in normally on any
            device.
          </li>
          <li>
            All financial holds are released — pending prize money and organiser
            settlements are disbursed automatically.
          </li>
          <li>
            Full platform access is restored — arena participation, squad
            management, organiser tools, and all other features are available.
          </li>
          <li>
            The flag that triggered the suspension remains active on the user's
            account for the remainder of its 12-month validity period — the
            suspension ending does not remove the flag.
          </li>
          <li>
            The user is notified via in-app notification and email that their
            suspension has ended and their account is fully restored.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            PART VII — PERMANENT BAN — FLAG 4 &amp; IMMEDIATE VIOLATIONS
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>26. How a Permanent Ban Is Applied</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A permanent ban is applied to a user's account in either of the
          following circumstances:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The user receives a fourth flag while three previous flags are still
            active — meaning they have already received a warning, a 1-day
            suspension, and a 1-week suspension within the preceding 12 months
            and have violated the Platform's rules again.
          </li>
          <li>
            The user commits a violation classified as a zero-tolerance
            immediate permanent ban violation as described in Part IV —
            regardless of their prior flag count.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A permanent ban is applied simultaneously with the notification. There
          is no grace period, delay, or warning before a permanent ban is
          enforced.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>27. What Permanent Ban Means</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A permanent ban is the termination of a user's account on the
          Platform. It is irreversible by default — the account cannot be
          restored, unlocked, or reactivated except through a successful appeal
          as described in Part IX. Upon a permanent ban:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            All active sessions across all logged-in devices are immediately and
            forcibly terminated.
          </li>
          <li>
            The account is permanently locked — all login attempts will display
            a permanent ban notice.
          </li>
          <li>
            The user's public profile is removed from leaderboards and
            public-facing Platform features within 24 hours.
          </li>
          <li>
            The user's username is retired — it cannot be claimed by any other
            user on the Platform.
          </li>
          <li>
            All squad memberships, guild memberships, Captain roles, and
            organiser privileges are immediately revoked.
          </li>
          <li>
            KYC verification status is revoked — the user can no longer
            participate in any financial transaction on the Platform.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>28. Financial Consequences of Permanent Ban</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Upon a permanent ban, the following financial consequences apply
          immediately and without exception:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            All unused Corpse Credits are permanently forfeited — no monetary
            refund is issued.
          </li>
          <li>
            All active subscription plans (Corpse Pass, Corpse Pro, Corpse
            Elite) are cancelled immediately — no pro-rata refund is issued.
          </li>
          <li>
            All entry fees paid for upcoming or ongoing tournaments at the time
            of the ban are permanently forfeited — no refund is processed.
          </li>
          <li>
            All prize money pending disbursement at the time of the ban is
            permanently forfeited — it is not disbursed to the banned user or
            any other party on their behalf.
          </li>
          <li>
            All organiser settlements pending at the time of the ban are
            permanently forfeited.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: All financial amounts associated with a permanently
            banned account are forfeited without exception. The Company does not
            process any financial disbursements to permanently banned accounts
            or on their behalf after the ban is applied. This policy exists to
            prevent financial gain from violating behaviour and is
            non-negotiable.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>29. Re-Registration After Permanent Ban</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A permanently banned user may create a new account on the Platform
          under the following strict conditions:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The new account must be registered using a different email address —
            the banned account's email address is permanently retired and cannot
            be used to create a new account.
          </li>
          <li>
            The new account must use a different in-game ID — the banned user's
            in-game IDs associated with the banned account are flagged in the
            Company's systems.
          </li>
          <li>
            Re-registration is permitted — there is no mandatory waiting period
            before creating a new account after a permanent ban.
          </li>
          <li>
            The new account starts with a clean slate — no ELO, no history, no
            credits, no squad memberships from the banned account are
            transferred.
          </li>
          <li>
            The ban on the original account remains in place — re-registration
            does not lift or affect the ban on the original account.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: Re-registration after a permanent ban is permitted as a
            genuine fresh start opportunity. However, if the new account is
            found to be engaged in the same or similar violating conduct that
            resulted in the original ban, the new account will also be
            permanently banned — and the re-registration privilege may be
            revoked.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>30. Detection of Banned Users on New Accounts</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company actively monitors for banned users who attempt to
          re-register on the Platform and engage in the same violating conduct
          that triggered their original ban. Detection methods include:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            In-game ID matching — if a banned user's registered in-game IDs
            appear on a new account, this triggers a review.
          </li>
          <li>
            Behavioural pattern analysis — similar patterns of violating
            behaviour on a new account may trigger a review connecting the new
            account to a previously banned user.
          </li>
          <li>
            User reports — other users may report a new account they believe
            belongs to a previously banned user.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If a new account is confirmed to belong to a previously banned user
          who is re-engaging in the same violating conduct:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>The new account will be permanently banned immediately.</li>
          <li>All financial amounts on the new account will be forfeited.</li>
          <li>
            The previously banned account's record will be updated to note the
            re-registration attempt.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            PART VIII — NOTIFICATION OF FLAGS, SUSPENSIONS &amp; BANS
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>31. Flag Notification</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          When a flag is issued to a user's account, the user is notified
          immediately via both in-app notification and email to their registered
          email address. The flag notification is sent simultaneously with the
          flag being applied to the account — there is no delay.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>32. Suspension Notification</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          When a suspension is applied — whether a 1-day (Flag 2) or 1-week
          (Flag 3) suspension — the user is notified immediately via both in-app
          notification (displayed at the moment of forced logout) and email to
          their registered email address.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>33. Permanent Ban Notification</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          When a permanent ban is applied — whether triggered by Flag 4 or an
          immediate ban violation — the user is notified via email to their
          registered email address. Since the account is immediately locked, the
          in-app notification will be visible if the user attempts to log in
          after the ban is applied.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>34. Contents of All Notifications</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every disciplinary notification — flag, suspension, or permanent ban —
          will contain the following information as a minimum:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Information Element</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Included In</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The specific violation that triggered the action
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">All notifications</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The category of violation (Category A, B, C, or immediate ban)
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">All notifications</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  A description of the specific conduct or content that
                  constituted the violation
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">All notifications</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The action being taken (warning / 1-day suspension / 1-week
                  suspension / permanent ban)
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">All notifications</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">The user's current active flag count</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Flag and suspension notifications</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The expiry date of the new flag (12 months from date of issue)
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Flag and suspension notifications</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The duration of the suspension and the exact end date/time
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Suspension notifications</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The financial impact of the action (hold, freeze, or
                  forfeiture)
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Suspension and permanent ban notifications
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  How to submit an appeal and the 24-hour response timeline
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">All notifications</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  A reminder of the Platform's community standards
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">All notifications</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">The support contact for questions</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">All notifications</p>
              </td>
            </tr>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART IX — APPEAL PROCESS</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>35. Who Can Appeal</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every user who receives a flag, suspension, or permanent ban has the
          right to appeal the decision. There are no restrictions on who can
          appeal — appeals are available for:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Flag 1 — Warning: A user who believes the warning was issued in
            error or that the evidence does not support the violation finding.
          </li>
          <li>
            Flag 2 — 1-Day Suspension: A user who believes the second flag was
            incorrectly issued, or that the underlying violation finding is
            incorrect.
          </li>
          <li>
            Flag 3 — 1-Week Suspension: A user who believes the third flag was
            incorrectly issued, or that the underlying violation finding is
            incorrect.
          </li>
          <li>
            Flag 4 — Permanent Ban: A user who believes the fourth flag was
            incorrectly issued or that the cumulative flag count has been
            miscalculated (e.g., due to expired flags being incorrectly
            counted).
          </li>
          <li>
            Immediate Permanent Ban: A user who believes the immediate ban was
            applied incorrectly or that the conduct does not fall within the
            zero-tolerance categories described in Part IV.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>36. How to Submit an Appeal</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          All appeals must be submitted through the Platform's in-app support
          system. Appeals submitted via email or any other channel will not be
          accepted. To submit an appeal:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Step 1 — Open the Corpse app. If your account is suspended, you can
            still access the login screen — use the 'Appeal This Action' link
            displayed on the suspension notice screen.
          </li>
          <li>
            Step 2 — Navigate to Settings &gt; Support &gt; Appeal a
            Disciplinary Action.
          </li>
          <li>
            Step 3 — Select the specific disciplinary action you are appealing —
            flag number, suspension, or ban.
          </li>
          <li>
            Step 4 — Complete the appeal form with all required information as
            described in Section 37.
          </li>
          <li>
            Step 5 — Submit the appeal. You will receive an in-app and email
            confirmation that your appeal has been received, along with an
            appeal reference number.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: If your account has been permanently banned and you cannot
            access the app, contact <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a> from your registered email
            address to request an appeal form. Appeals from permanently banned
            users must still provide all information described in Section 37.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>37. What to Include in an Appeal</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          An appeal that does not include sufficient information may be
          dismissed without review. Every appeal must include:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Your registered email address and Platform username.</li>
          <li>
            The specific disciplinary action being appealed — including the flag
            number, suspension duration, or permanent ban.
          </li>
          <li>The date the disciplinary action was applied.</li>
          <li>
            A clear and detailed explanation of why you believe the disciplinary
            action was issued in error — specifically addressing the violation
            finding described in the notification.
          </li>
          <li>
            Any evidence that supports your appeal — for example, match
            screenshots, timestamps, or communications that demonstrate you did
            not engage in the alleged violation.
          </li>
          <li>
            If you believe the flag count was incorrectly calculated — a
            specific explanation of which flags you believe have expired and
            when they were issued.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Appeals that simply state 'I didn't do anything wrong'
            without specific factual grounds or supporting evidence will not be
            upheld. The Company requires specific, substantive grounds for an
            appeal to be considered. Vague or unsupported appeals will be
            reviewed but are unlikely to result in a different outcome.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>38. Appeal Review Timeline</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company will review all appeals and communicate its decision
          within 24 hours of the appeal being submitted. The review is conducted
          by a senior member of the trust and safety team who was not involved
          in the original disciplinary decision.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The 24-hour timeline applies to the Company's decision — not
          necessarily the full resolution of any financial matters arising from
          the appeal outcome. Financial releases (e.g., prize money held during
          a suspension that is overturned) will be processed within the normal
          financial processing timelines after the appeal decision is
          communicated.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>39. Possible Outcomes of an Appeal</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Following the review of an appeal, the Company may reach one of the
          following outcomes:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Outcome</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>What It Means</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Financial Impact</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Appeal Upheld — Flag Removed</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The flag is removed from the user's account. The violation
                  finding is overturned. The user's active flag count is reduced
                  by 1.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Any financial holds during suspension are released
                  immediately. If the user was suspended as a result of the
                  overturned flag, the suspension is lifted immediately.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Appeal Upheld — Suspension Reduced</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The suspension duration is reduced — for example, from 7 days
                  to 3 days — but the flag remains on the user's record.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Financial holds are released at the reduced suspension end
                  date.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Appeal Partially Upheld</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The violation finding is confirmed but the consequence is
                  adjusted — for example, the flag is downgraded to a warning
                  instead of triggering a suspension.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Suspension is lifted if the consequence is downgraded to a
                  warning. Financial holds released immediately.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Appeal Dismissed — Action Upheld</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The original disciplinary action is confirmed. The flag,
                  suspension, or permanent ban remains in place.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  No change to financial impact — holds or forfeitures remain as
                  applied.
                </p>
              </td>
            </tr>
          </table>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>40. One Appeal Per Action — Finality</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Each disciplinary action — each individual flag, suspension, or ban —
          can only be appealed once. Once the Company communicates its appeal
          decision, that decision is final and binding. The user cannot:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Submit a second appeal for the same disciplinary action.</li>
          <li>
            Request a further review or escalation of the appeal decision within
            the Platform's support system.
          </li>
          <li>
            Re-open a dismissed appeal on the basis of new evidence — if new
            evidence emerges, it may be relevant to future disciplinary
            proceedings but not to the already-decided appeal.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If a user believes the appeal process itself was conducted improperly
          or unfairly, they may raise a formal grievance with the Company's
          Grievance Officer at <a href="mailto:legal@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">legal@corpsearena.com</a>. However, a grievance is not a
          second appeal — it is a review of the process, not the merits of the
          disciplinary decision.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART X — PROHIBITED POST-ACTION CONDUCT</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>41. During Suspension</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          During a temporary suspension period, the following conduct is
          strictly prohibited:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Attempting to log in to the suspended account repeatedly — this may
            be treated as an attempt to circumvent the suspension and could
            result in an additional flag.
          </li>
          <li>
            Creating or using a secondary account to access Platform features —
            including arena participation, squad management, and financial
            transactions — during the suspension period. Using a secondary
            account during a suspension to evade the suspension will result in
            the secondary account being permanently banned and an additional
            flag being applied to the primary account.
          </li>
          <li>
            Harassing, abusing, or threatening the Company's support or trust
            and safety team members via any channel — in-app, email, or
            otherwise — during the suspension or appeal process. Such conduct
            will result in an additional flag.
          </li>
          <li>
            Publicly defaming the Company or its staff in connection with the
            suspension — spreading false information about the Platform's
            disciplinary processes on social media or other channels.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>42. After Permanent Ban</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          After a permanent ban is applied, the following conduct is strictly
          prohibited:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Creating a new account for the purpose of engaging in the same
            violating conduct that triggered the original ban — as described in
            Section 30.
          </li>
          <li>
            Using another user's account to access Platform features that the
            banned user is no longer entitled to access.
          </li>
          <li>
            Attempting to contact other users through the Platform using a new
            account for the purpose of coordinating violations.
          </li>
          <li>
            Fraudulently representing yourself as a non-banned user to access
            organiser tools, financial features, or KYC privileges.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>43. During Appeal Review</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          During the 24-hour appeal review period, the following conduct is
          strictly prohibited:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Submitting multiple appeal tickets for the same disciplinary action
            — this will not accelerate the review and may result in the
            duplicate tickets being closed without review.
          </li>
          <li>
            Contacting support agents repeatedly to check on appeal status — the
            Company will communicate its decision within 24 hours. Repeated
            contact does not expedite the process.
          </li>
          <li>
            Threatening, pressuring, or attempting to influence the appeal
            outcome through inappropriate means — including threats of legal
            action communicated through support channels rather than formal
            legal processes.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            PART XI — GOVERNING LAW, DISPUTE RESOLUTION &amp; CONTACT
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>44. Governing Law</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Suspension Policy shall be governed by and construed in
          accordance with the laws of India, including the Information
          Technology Act 2000, the IT (Intermediary Guidelines and Digital Media
          Ethics Code) Rules 2021, and all applicable provisions of the Indian
          Penal Code, as amended from time to time.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>45. Dispute Resolution</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Any dispute arising from or in connection with this Suspension Policy
          — including disputes about the application of flags, the conduct of
          appeal proceedings, or financial consequences of suspensions or bans —
          shall first be attempted to be resolved through the Platform's in-app
          appeal process as described in Part IX.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If the appeal process is exhausted and the user wishes to raise a
          formal grievance about the process (not the merits), the grievance
          should be directed to the Grievance Officer at <a href="mailto:legal@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">legal@corpsearena.com</a>. If the
          grievance remains unresolved after 30 days, the dispute may be
          submitted to binding arbitration under the Arbitration and
          Conciliation Act, 1996. The seat of arbitration shall be Guwahati,
          Assam, India.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>46. Contact</strong>
        </h2>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Company</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">[CORPSE ESPORTS PRIVATE LIMITED]</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>In-App Appeal</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Settings &gt; Support &gt; Appeal a Disciplinary Action
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Support Email</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"><a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a></p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Grievance Officer Email</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"><a href="mailto:legal@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">legal@corpsearena.com</a></p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Registered Address</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Silchar Road Ghat Line, Subashnagar, Karimganj - 788710,
                  Assam, India
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Flag / Suspension Query</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a> — response within 24 hours
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Appeal Response Time</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Within 24 hours of appeal submission</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Grievance Response Time</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Within 30 days of receipt</p>
              </td>
            </tr>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Account Suspension &amp; Ban Terms &amp; Conditions was last
          updated in April 2026 and is effective from May 1, 2026.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>Version 1.0 | Corpse — [CORPSE ESPORTS PRIVATE LIMITED]</em>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>Confidential &amp; Proprietary. All rights reserved.</em>
        </p>
      </div>
    </main>
  );
}
