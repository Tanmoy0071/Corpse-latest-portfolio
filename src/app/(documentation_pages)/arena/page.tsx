import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arena Joining Terms & Conditions | Corpse",
  description: "Arena Joining Terms & Conditions for the Corpse platform.",
};

export default function PolicyPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-32 max-w-5xl min-h-screen flex flex-col items-center text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-[#e8192c] uppercase tracking-wider drop-shadow-[0_0_15px_rgba(232,25,44,0.4)]">
        Arena Joining Terms & Conditions
      </h1>
      <div className="space-y-8 text-white/70 text-lg flex flex-col items-center w-full">
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>CORPSE</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>The Operating System for Esports</em>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Arena Joining</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Terms &amp; Conditions</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Eligibility • Registration • Match Rules • Results • Disputes
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Launch Game: Free Fire (Garena Free Fire MAX)</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Binding on: All Players | Captains | Squad Members | Free &amp; Paid
            Arenas
          </em>
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
                  <strong>Launch Game</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Free Fire (Garena Free Fire MAX)</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Game Publisher</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Garena Online Private Limited</p>
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
                  Corpse T&amp;C | Money Deposit &amp; Receive Policy | Account
                  Suspension &amp; Ban T&amp;C
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
            By registering for or participating in any Arena on the Corpse
            platform — whether free or paid — you confirm that you have read,
            understood, and agree to be bound by these Arena Joining Terms &amp;
            Conditions in their entirety.
          </em>
        </p>
        {/* <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Table of Contents</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART I Introduction &amp; Scope</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 1. What the Arena Is</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 2. Scope — Free &amp; Paid Arenas</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 3. Launch Game — Free Fire</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 4. Relationship to Other Corpse Policies</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART II Arena Types &amp; Formats</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 5. Free Arenas</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 6. Paid Arenas</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 7. Free Fire Game Modes Supported</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 8. Squad Formats &amp; Preset Structure</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 9. Map &amp; Room Configuration</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART III Player Eligibility</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 10. Account Requirements</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 11. Age &amp; KYC Requirements</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 12. In-Game ID Requirement</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 13. ELO-Based Matchmaking</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 14. Ineligible Players</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART IV Arena Timeline</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 15. The Five Stages of Every Arena</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 16. Registration Open &amp; Close</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          {" "}
          17. Room Card Availability — 30 Minutes Before Start
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 18. Match Start</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 19. Result Submission Window</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART V Squad Formation &amp; Registration</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 20. Squad Creation by Captain</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 21. Invite Token System</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          {" "}
          22. Multiple Arena Registration — Time Conflict Rule
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 23. Registration Lock — No Withdrawal</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 24. Entry Fee — Non-Refundable on Registration</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 25. Duplicate Registration Prevention</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 26. Organiser Cannot Remove Registered Players</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART VI In-Game Identity &amp; Device Rules</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 27. Mandatory In-Game ID Verification</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 28. Emulator Ban — Mobile Only</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 29. Free Fire Account Status</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART VII Room Card &amp; Match Start</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 30. How the Room Card Is Generated &amp; Shared</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 31. Room Card Confidentiality</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 32. Joining the Game Room</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 33. Partial Squad — Missing Member</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 34. No Delays After Match Start</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART VIII During the Match — Code of Conduct</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          {" "}
          35. Dual Rule Applicability — Corpse &amp; Garena
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 36. Prohibited In-Game Software &amp; Tools</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 37. Match Fixing &amp; Result Manipulation</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 38. Room Card Sharing During Match</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 39. Player Conduct &amp; Sportsmanship</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 40. Garena Account Actions During Match</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART IX Result Submission Process</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 41. The Auto-Capture System</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 42. Step-by-Step — Player Result Submission</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 43. Step-by-Step — Organiser Result Submission</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 44. The 60-Second Upload Window</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 45. Manual Upload Option</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 46. Result Verification by Corpse</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART X Result Disputes</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 47. Right to Dispute</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 48. Dispute Submission Process</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 49. Evidence Requirements</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 50. Corpse's Review &amp; Decision</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 51. Outcomes of a Dispute</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 52. Frivolous Disputes</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART XI Disqualification</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 53. Grounds for Disqualification</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 54. Consequences of Disqualification</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 55. Winner Ladder on Disqualification</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART XII Platform Liability</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 56. Game Server &amp; Publisher Issues</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 57. Player Device &amp; Connectivity Issues</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 58. Arena Cancelled by Corpse</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 59. Organiser Failure to Share Room Card</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART XIII Prohibited Conduct — Full Reference</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 60. Complete List of Prohibited Acts</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            PART XIV Governing Law, Dispute Resolution &amp; Contact
          </strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 61. Governing Law</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 62. Dispute Resolution</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 63. Contact</p> */}
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART I — INTRODUCTION &amp; SCOPE</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>1. What the Arena Is</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Arena is the competitive tournament environment on the Corpse
          platform — a structured, organised, and verified competitive space
          where players form squads, register for matches, compete against other
          squads, and earn prizes. Unlike informal tournaments organised through
          WhatsApp groups or Discord servers, every Arena on the Corpse platform
          operates within a defined framework of rules, timelines, verified
          identities, and transparent results.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every Arena on the Platform is created and managed by a verified
          Organiser using Corpse's organiser tools. The Platform provides the
          infrastructure — registration, squad management, room card
          distribution, result submission, and prize disbursement — while the
          Organiser configures the specific parameters of each Arena within the
          options provided by their selected preset.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>2. Scope — Free &amp; Paid Arenas</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          These Arena Joining Terms &amp; Conditions (&quot;Arena T&amp;C&quot;)
          apply to every Arena on the Platform — both free arenas (no entry fee,
          no prize pool) and paid arenas (entry fee paid by Captain, prize pool
          funded by the Organiser's security deposit). The rules governing
          eligibility, squad formation, match conduct, result submission, and
          disputes apply equally to both Arena types unless specifically
          distinguished.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The financial rules — entry fee payment, prize disbursement, and
          refund policies — apply only to paid arenas and are governed in detail
          by the Money Deposit &amp; Receive Policy. These Arena T&amp;C
          reference those rules where relevant but do not repeat them in full.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>3. Launch Game — Free Fire</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          At launch, the Corpse platform supports competitive arenas for one
          game title: Free Fire (Garena Free Fire MAX), published by Garena
          Online Private Limited (&quot;Garena&quot;). All Arena rules, match
          formats, squad sizes, and conduct standards described in these Arena
          T&amp;C are designed specifically for Free Fire gameplay.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          As the Platform expands to support additional game titles in the
          future, separate or supplementary Arena T&amp;C will be published for
          each new title. These terms govern only Free Fire arenas until further
          notice.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Free Fire is a trademark and intellectual property of Garena Online
            Private Limited. Corpse is an independent platform and is not
            affiliated with, endorsed by, or officially partnered with Garena.
            Use of Free Fire's game infrastructure — including custom rooms — is
            conducted in accordance with Garena's terms of service for custom
            room creation.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>4. Relationship to Other Corpse Policies</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          These Arena T&amp;C must be read alongside the following Corpse
          policies, all of which apply to Arena participants:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Policy</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>What It Governs in Arena Context</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Corpse Terms &amp; Conditions</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  General platform rules, user obligations, prohibited conduct,
                  and governing law
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Money Deposit &amp; Receive Policy</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Entry fee payment, prize disbursement, refunds, and financial
                  consequences of disqualification
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">KYC &amp; KYC Modification T&amp;C</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  KYC requirements for Captains of paid arenas and prize
                  recipients
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Account Suspension &amp; Ban T&amp;C</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Flag system, warnings, suspensions, and bans triggered by
                  Arena conduct violations
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">IP, Trademark &amp; Copyright Policy</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Ownership of Arena data, match records, and Platform content
                </p>
              </td>
            </tr>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART II — ARENA TYPES &amp; FORMATS</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>5. Free Arenas</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Free arenas are competitive matches on the Platform with no entry fee
          and no prize pool. They are open to all Registered Users who meet the
          eligibility requirements described in Part III. Free arenas:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Do not require KYC verification from the Captain.</li>
          <li>
            Do not involve any financial transaction — no entry fee is paid and
            no prize money is disbursed.
          </li>
          <li>
            Are subject to all non-financial Arena T&amp;C — eligibility, squad
            formation, match conduct, result submission, and dispute rules all
            apply in full.
          </li>
          <li>
            Contribute to the Platform's ELO ranking system — performance in
            free arenas affects a player's ELO score equally to paid arenas.
          </li>
          <li>
            May have a prize in the form of in-app recognition, badges, or
            credits — but no monetary prize pool unless the Organiser has
            specifically configured a non-cash prize under the applicable
            preset.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>6. Paid Arenas</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Paid arenas are competitive matches on the Platform where players pay
          an entry fee to participate and compete for a monetary prize pool
          funded by the Organiser's security deposit. Paid arenas:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Require the Captain to be KYC verified before paying the entry fee.
          </li>
          <li>
            Require the Captain to pay the entry fee on behalf of their squad
            using the payment methods supported by Razorpay.
          </li>
          <li>
            Have a guaranteed prize pool — the Organiser's security deposit is
            held in escrow before the Arena goes live, ensuring prize money is
            always available.
          </li>
          <li>
            Are subject to TDS deduction of 30% on prize winnings before
            disbursement to the Captain's KYC-verified bank account.
          </li>
          <li>
            Are fully governed by the Money Deposit &amp; Receive Policy for all
            financial aspects.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>7. Free Fire Game Modes Supported</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          At launch, the following Free Fire game modes are supported for
          competitive arenas on the Platform:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Game Mode</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Description</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Applicable Arena Format</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Battle Royale</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The classic Free Fire survival format — squads compete to be
                  the last team standing on the map. Players are eliminated when
                  their health reaches zero and cannot be revived after final
                  elimination.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Squad format as configured in the Organiser's preset
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Clash Squad</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  A tactical round-based format — two teams of 4 face each other
                  in close-quarters combat. Teams earn rounds by eliminating the
                  opposing team. The first team to win a set number of rounds
                  wins the match.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">4v4 format</p>
              </td>
            </tr>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: Additional Free Fire game modes may be supported in future
            updates to these Arena T&amp;C. Players will be notified of any new
            mode additions via in-app notification and the updated Arena T&amp;C
            will be published with an updated effective date.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>8. Squad Formats &amp; Preset Structure</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The squad format — including the number of players per squad, the
          number of squads per arena, and the entry fee amount — is determined
          by the Organiser's selected preset. Organisers choose from a set of
          approved presets provided by the Platform. The following squad formats
          are supported across Free Fire arenas:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Solo — 1 player per squad. Each participant registers individually
            as both Captain and sole squad member.
          </li>
          <li>
            Duo — 2 players per squad. Captain registers and invites one squad
            member.
          </li>
          <li>
            Squad — 4 players per squad. Captain registers and invites three
            squad members for Battle Royale formats.
          </li>
          <li>
            Clash Squad — 4 players per team (4v4). Each team of 4 registers as
            a squad.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The specific squad format for each Arena is displayed on the Arena
          listing page before registration. Players must ensure they register
          for an Arena with a format that matches their squad size. The Platform
          enforces squad size requirements technically — registration will be
          rejected if the squad does not meet the required size.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>9. Map &amp; Room Configuration</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Free Fire map and custom room settings for each Arena are
          configured by the Organiser within the options provided by their
          selected preset. This may include:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The specific Free Fire map (e.g., Bermuda, Purgatory, Kalahari) —
            determined by the Organiser's preset selection, not randomly
            assigned by Free Fire.
          </li>
          <li>
            Custom room settings — including match duration, zone settings, and
            other in-game configuration options available within Free Fire's
            custom room system.
          </li>
          <li>
            The Organiser creates the custom room directly within Free Fire
            using Free Fire's custom room feature and shares the resulting room
            ID and password with registered players via the Platform's room card
            system.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART III — PLAYER ELIGIBILITY</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>10. Account Requirements</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          To be eligible to join any Arena on the Platform — free or paid — a
          player must:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Be a Registered User with an active, verified account on the
            Platform. Guest Users cannot register for or participate in any
            Arena.
          </li>
          <li>
            Have their account in good standing — accounts that are suspended or
            permanently banned are ineligible to join any Arena for the duration
            of the suspension or ban.
          </li>
          <li>
            Have a valid Free Fire in-game ID and in-game username registered on
            their Platform account. Players without a registered in-game ID
            cannot join any Free Fire arena.
          </li>
          <li>
            Have agreed to these Arena T&amp;C, the Corpse Terms &amp;
            Conditions, and all applicable Platform policies.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>11. Age &amp; KYC Requirements</strong>
        </h2>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>User Type</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Free Arena Eligibility</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Paid Arena Eligibility — As Captain</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Paid Arena Eligibility — As Squad Member</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Standard Registered User (18+, KYC verified)
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes — full access</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Yes — KYC required and must be complete before paying entry
                  fee
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes — no KYC required as squad member</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Standard Registered User (18+, KYC not yet done)
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes — full access</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No — must complete KYC first</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes — no KYC required as squad member</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Minor User (under 18)</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Yes — as squad member only, via Captain's invite
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No — cannot be Captain of any Arena</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes — if invited by KYC-verified Captain</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Suspended User</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  No — ineligible for all Arenas during suspension
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Permanently Banned User</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No — ineligible permanently</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
              </td>
            </tr>
          </table>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>12. In-Game ID Requirement</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every player who registers for a Free Fire arena must have their Free
          Fire in-game ID registered on their Corpse Platform account. This
          in-game ID:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Must be the player's actual active Free Fire in-game ID — not a
            placeholder, fake ID, or another player's ID.
          </li>
          <li>
            Is verified by the Platform before the Arena starts. The Platform
            cross-references the in-game ID on the player's Profile account
            against the squad registration for the Arena.
          </li>
          <li>
            Must be the same ID used when joining the actual Free Fire custom
            room — the player must enter the game room using this specific Free
            Fire account.
          </li>
          <li>
            Cannot be changed or updated during an active Arena registration.
            Any in-game ID update request during an active registration period
            will not take effect until after the Arena concludes.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Using a different Free Fire in-game ID than the one
            registered on your Corpse account — whether deliberately or
            accidentally — will result in immediate disqualification and
            forfeiture of entry fees. Ensure your registered in-game ID is
            accurate and up to date before registering for any Arena.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>13. ELO-Based Matchmaking</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Platform uses its proprietary ELO ranking system to group players
          of similar competitive skill levels within arenas. This means:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The Platform's ELO system assigns every registered player a skill
            score based on their competitive history on the Platform.
          </li>
          <li>
            When players register for an Arena, the Platform's matchmaking
            system groups squads with similar ELO scores into the same arena —
            ensuring competitive fairness.
          </li>
          <li>
            A player's ELO score is separate from their Free Fire in-game rank —
            the Platform's ELO reflects performance specifically within Corpse
            arenas, not the player's Garena rank.
          </li>
          <li>
            All ranks are welcome on the Platform — there is no minimum Free
            Fire rank requirement. The ELO system ensures fair competition
            regardless of in-game rank.
          </li>
          <li>
            ELO scores are updated after every Arena completion based on the
            result — wins improve ELO, losses affect it based on the rating
            difference between competing squads.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>14. Ineligible Players</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following players are ineligible to join any Arena on the Platform
          and will be rejected by the Platform's registration system:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Players with suspended or permanently banned accounts.</li>
          <li>
            Players who do not have a registered Free Fire in-game ID on their
            Platform account.
          </li>
          <li>
            Players attempting to register for a paid arena as Captain without
            completed KYC verification.
          </li>
          <li>
            Players attempting to register for a second Arena whose scheduled
            match time overlaps with an Arena they are already registered for.
          </li>
          <li>
            Players attempting to register for the same Arena more than once —
            duplicate registration is technically prevented by the Platform.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART IV — ARENA TIMELINE</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>15. The Five Stages of Every Arena</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every Arena on the Platform progresses through five defined stages.
          The timing of each stage is set by the Organiser when creating the
          Arena and is displayed on the Arena listing page before registration
          opens. Players must be aware of and adhere to all stage timelines.
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Stage</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Description</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Player Action Required</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">1. Registration Open</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The Arena is published and open for squad registration.
                  Players can discover, view details, and register during this
                  stage.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Captain registers squad and pays entry fee (paid arenas).
                  Squad members accept invites.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">2. Registration Closed</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Registration is no longer accepted. All registered squads are
                  locked. No new registrations, squad changes, or withdrawals
                  are permitted after this point.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No action — preparation for match only.</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">3. Room Card Available</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The Organiser shares the custom room ID and password via the
                  Platform's room card system. This occurs 30 minutes before the
                  scheduled match start time.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  All squad members receive in-app notification with room ID and
                  password. Join the Free Fire custom room.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">4. Match Start</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The scheduled match start time. The Free Fire custom room
                  match begins. Players must be inside the game room by this
                  time.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Be in the Free Fire custom room and ready to play before this
                  time.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">5. Result Submission</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  After the match ends, both players and the Organiser submit
                  screenshots of the match scoreboard through the Platform's
                  auto-capture system.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Capture and submit match result screenshot within the
                  60-second upload window after Organiser submission.
                </p>
              </td>
            </tr>
          </table>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>16. Registration Open &amp; Close</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The registration open and close times are set entirely by the
          Organiser when creating the Arena. The Platform enforces these
          timelines technically — registrations submitted after the registration
          close time are automatically rejected regardless of slot availability.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The registration open and close times are displayed prominently on
            the Arena listing page. Players are responsible for checking these
            times before attempting to register.
          </li>
          <li>
            The Platform does not send reminders about approaching registration
            deadlines. Players must monitor Arena timelines independently.
          </li>
          <li>
            Registration closes at the time set by the Organiser — which may be
            before the Arena reaches its maximum squad capacity. Even if slots
            remain, no registrations are accepted after the registration close
            time.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>17. Room Card Availability — 30 Minutes Before Start</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The room card — containing the Free Fire custom room ID and password —
          is shared with all registered players via in-app notification exactly
          30 minutes before the scheduled match start time. This timing is fixed
          by the Platform and applies to all Arenas regardless of the
          Organiser's preferences.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            All registered players — both Captains and squad members — receive
            the room card notification simultaneously.
          </li>
          <li>
            The notification is delivered within the Corpse app. Players must
            ensure in-app notifications are enabled on their device to receive
            the room card on time.
          </li>
          <li>
            Players are responsible for being available to receive the room card
            notification 30 minutes before the match start time. The Platform is
            not responsible for missed notifications due to disabled app
            notifications, device issues, or network connectivity problems on
            the player's end.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: If you do not receive the room card notification 25 minutes
            before match start — contact <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a> immediately via
            in-app support. Do not wait until match start time to report a
            missing room card.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>18. Match Start</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The match starts at the scheduled time set by the Organiser. There are
          no delays, grace periods, or extensions for any reason — including
          late-joining squad members, technical difficulties experienced by
          individual players, or missing room card notifications (unless the
          Platform itself failed to deliver the room card).
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Players must be inside the Free Fire custom room and ready to play
            before the match start time.
          </li>
          <li>
            The Organiser starts the match from within the Free Fire custom room
            at the scheduled time.
          </li>
          <li>
            Any squad that is not inside the room when the match starts will
            miss the match — the match does not wait for absent players or
            squads.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>19. Result Submission Window</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          After the match concludes, all players and the Organiser are required
          to submit their match result screenshots through the Platform's
          auto-capture system. The result submission process is time-sensitive —
          the specific rules governing this process are detailed in Part IX of
          these Arena T&amp;C.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART V — SQUAD FORMATION &amp; REGISTRATION</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>20. Squad Creation by Captain</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every squad on the Platform is created and led by a Captain. The
          Captain is the registered user who initiates the squad, pays the entry
          fee (for paid arenas), manages squad invitations, and receives the
          squad's prize money on behalf of all squad members.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Any eligible Registered User can create a squad and become Captain
            of that squad for a specific Arena.
          </li>
          <li>
            The Captain sets the squad name and initiates the squad registration
            for the chosen Arena.
          </li>
          <li>
            The Captain is responsible for ensuring all squad members they
            invite are aware of and agree to these Arena T&amp;C.
          </li>
          <li>
            For paid arenas — the Captain pays the entry fee using their
            KYC-verified account. The entry fee covers the entire squad's
            participation — squad members do not pay separately.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: As Captain, you are the financial and administrative
            representative of your squad. All prize money is disbursed
            exclusively to your KYC-verified bank account. Distribution of prize
            money to your squad members is your sole responsibility. The
            Platform has no involvement in or liability for internal squad prize
            distribution.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>21. Invite Token System</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Captain invites squad members to join the squad using the
          Platform's invite token system. Each invite is a single-use,
          time-limited token that allows exactly one player to join the squad.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The Captain generates an invite link from within the squad
            management screen.
          </li>
          <li>
            The invite link can be shared via WhatsApp, direct message, or as an
            in-app notification to another Platform user.
          </li>
          <li>
            Each invite token is valid for a single use only — once a player
            clicks the link and joins the squad, the token is permanently
            consumed and cannot be reused.
          </li>
          <li>
            Invite tokens carry an expiry timestamp — expired tokens are
            rejected regardless of whether the squad has available slots.
          </li>
          <li>
            When a player clicks the invite link, the Platform validates: token
            validity, token expiry, squad slot availability, and that the player
            is not already a member of the squad or another squad in the same
            Arena.
          </li>
          <li>
            If all checks pass, the player is added as a squad member and the
            invite token is marked as consumed. The squad is not complete until
            all required squad members have accepted their invites.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: Squad members must accept their invites before the
            registration closes. Invites that are not accepted before the
            registration close time are automatically invalidated — the Captain
            must ensure all squad members join before the deadline.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>22. Multiple Arena Registration — Time Conflict Rule</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A player may register for more than one Arena at a time, subject to
          the following strict time conflict rule:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            A player may not register for two Arenas whose match times overlap —
            the second Arena's match must be scheduled to begin after the first
            Arena's match is expected to end.
          </li>
          <li>
            The Platform enforces this rule technically at the point of
            registration — if a player attempts to register for a second Arena
            whose match time conflicts with an existing registration, the
            registration will be rejected with a clear notification of the
            conflict.
          </li>
          <li>
            Players are responsible for managing their own Arena schedules. The
            Platform will not process refund claims based on scheduling
            conflicts that arise from the player's own multiple registrations.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            The time conflict check is based on the scheduled match start and
            expected end times of each Arena. If an Arena runs longer than
            expected due to match-specific circumstances, the Platform is not
            responsible for any resulting conflict with a subsequent registered
            Arena.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>23. Registration Lock — No Withdrawal</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Once a player's squad has been successfully registered for an Arena —
          meaning the Captain has paid the entry fee (for paid arenas) or
          completed the free registration (for free arenas) and the squad's slot
          has been confirmed — the registration is permanently locked. No player
          can withdraw from an Arena after registration is confirmed under any
          circumstance.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The Captain cannot unregister the squad from an Arena after
            confirmation.
          </li>
          <li>
            Individual squad members cannot leave the squad or withdraw from the
            Arena after the squad's registration is confirmed.
          </li>
          <li>
            The Organiser cannot remove a registered squad or player from an
            Arena after registration is confirmed.
          </li>
          <li>
            The Platform cannot process withdrawal requests from players — the
            registration lock is a system-enforced rule, not an administrative
            decision.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Registration is final and irreversible once confirmed.
            Ensure your squad is complete, all members are available for the
            match time, and your in-game details are correct before completing
            registration. The Platform will not process refund requests based on
            inability to participate after registration is confirmed.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>24. Entry Fee — Non-Refundable on Registration</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          For paid arenas, the entry fee paid by the Captain at the time of
          registration is non-refundable in all circumstances once the squad's
          slot has been confirmed — including:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The Captain or any squad member's inability to participate due to
            personal scheduling conflicts, illness, device issues, or
            connectivity problems.
          </li>
          <li>
            Any squad member leaving the group or becoming unavailable after
            registration.
          </li>
          <li>
            The squad's poor performance or early elimination in the match.
          </li>
          <li>
            The Captain's account being suspended after registration — the
            suspension does not entitle the squad to a refund.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The only circumstances in which entry fees are refunded are governed
          by the Money Deposit &amp; Receive Policy — specifically, if the Arena
          is cancelled before the match starts. See the Money Deposit &amp;
          Receive Policy for the full refund framework.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>25. Duplicate Registration Prevention</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Platform's backend systems prevent duplicate registrations at all
          levels:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            A player cannot register for the same Arena twice — whether as
            Captain of two different squads or as a member of two different
            squads in the same Arena.
          </li>
          <li>
            A squad cannot be registered for the same Arena more than once.
          </li>
          <li>
            These checks are enforced at the database level using row-level
            locking — ensuring that even simultaneous registration attempts by
            the same user cannot result in duplicate registrations.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>26. Organiser Cannot Remove Registered Players</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Once a squad has been registered for an Arena and the slot is
          confirmed, the Organiser does not have the ability to remove the squad
          or any individual player from the Arena. Registration is final for all
          parties — including the Organiser. This protection exists to:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Prevent Organisers from selectively removing squads for reasons
            unrelated to Platform rules — such as favouring certain squads or
            discriminating against others.
          </li>
          <li>
            Protect players who have paid entry fees from being removed without
            recourse.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If the Organiser believes a registered player is ineligible or has
          violated Platform rules, they must report the violation to the
          Platform's support team at <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a>. Only the Platform has
          the authority to disqualify or remove a player from an Arena after
          registration.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART VI — IN-GAME IDENTITY &amp; DEVICE RULES</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>27. Mandatory In-Game ID Verification</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Platform verifies the in-game ID of every registered player before
          an Arena starts. This verification process confirms that:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The in-game ID registered on the player's Corpse account exists and
            is a valid, active Free Fire account.
          </li>
          <li>
            The in-game ID is not already registered by another Corpse user for
            the same Arena.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Players must use the exact Free Fire account associated with their
          registered in-game ID when entering the custom room and playing in the
          Arena match. The in-game name visible in the Free Fire custom room
          must match the in-game name registered on the player's Corpse account.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Using a different Free Fire account — even one belonging to the same
            player — is prohibited and will result in immediate disqualification
            upon detection.
          </li>
          <li>
            Allowing another person to play on your behalf using your Free Fire
            account — commonly known as account sharing or 'smurfing' — is
            prohibited and will result in disqualification and a flag.
          </li>
          <li>
            If a player's Free Fire in-game name has been changed since
            registration on Corpse — the player must update their in-game name
            on their Corpse profile before the Arena begins. Failure to do so
            may result in verification failure.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>28. Emulator Ban — Mobile Only</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The use of emulators to play Free Fire in any Corpse Arena is strictly
          and unconditionally prohibited. This applies to all emulator software
          regardless of the platform — including but not limited to BlueStacks,
          LDPlayer, NoxPlayer, GameLoop, and any other Android or iOS emulation
          software.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Free Fire (Garena Free Fire MAX) is a mobile game. All Corpse arenas
            must be played on a physical mobile device — Android smartphone or
            iPhone only.
          </li>
          <li>
            Garena's own anti-emulator detection systems may detect and flag
            emulator users within the game. Detection by Garena's systems during
            a Corpse Arena will result in disqualification from the Arena and
            may trigger a flag under the Account Suspension &amp; Ban Policy.
          </li>
          <li>
            Players using emulators will be disqualified immediately upon
            detection — whether detected by Garena's systems or reported by the
            Organiser or other players.
          </li>
          <li>
            Entry fees paid by emulator users are permanently forfeited — no
            refund is issued.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: The emulator ban is absolute and non-negotiable. No
            exceptions are made for any reason — including claims that the
            emulator was used accidentally, that the player's phone was
            unavailable, or that the emulator provided no competitive advantage.
            If you cannot play on a physical mobile device, do not register for
            any Arena.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>29. Free Fire Account Status</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Platform does not verify a player's Free Fire account status with
          Garena. Players are responsible for ensuring their own Free Fire
          account is in a condition that allows them to join and play in a
          custom room at the time of the Arena.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            If a player's Free Fire account is banned by Garena for any reason —
            before or during an Arena — the Platform is not responsible and no
            refund of entry fees will be issued.
          </li>
          <li>
            If Garena's servers are down or the player's Free Fire account is
            temporarily inaccessible at match time — this is not the Platform's
            responsibility and no refund or compensation will be provided.
          </li>
          <li>
            Players must ensure their Free Fire app is updated to the latest
            version before joining an Arena. Outdated game versions may prevent
            access to custom rooms — this is the player's responsibility.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART VII — ROOM CARD &amp; MATCH START</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>30. How the Room Card Is Generated &amp; Shared</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          For every Free Fire Arena on the Platform, the Organiser creates a
          custom room directly within the Free Fire game client. The custom room
          generates a unique Room ID and Password (collectively, the &quot;Room
          Card&quot;). The Organiser then enters the Room Card into the
          Platform's organiser dashboard, which distributes it to all registered
          players via in-app notification.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The Room Card is distributed to all registered players — both
            Captains and squad members — simultaneously via in-app push
            notification.
          </li>
          <li>
            Room Card distribution occurs exactly 30 minutes before the
            scheduled match start time.
          </li>
          <li>
            The Room Card notification includes: the Arena name, the Free Fire
            Room ID, the Room Password, and the scheduled match start time.
          </li>
          <li>
            Players must have in-app notifications enabled on their device to
            receive the Room Card notification. The Platform is not responsible
            for missed notifications due to device-level notification settings.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>31. Room Card Confidentiality</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Room Card is strictly confidential and is intended only for use by
          registered players in the specific Arena for which it was generated.
          Players must not share the Room Card with any person who is not a
          registered participant in that Arena.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Sharing the Room Card with non-registered players — whether
            intentionally or carelessly — is a serious violation that will
            result in immediate disqualification of the offending player's
            entire squad.
          </li>
          <li>
            If non-registered players join the custom room using a leaked Room
            Card and participate in the match, the Arena may be invalidated at
            the Platform's sole discretion. Registered players who were unaware
            of the leak will not be penalised, but the Organiser will be
            investigated.
          </li>
          <li>
            If you accidentally share the Room Card and immediately become aware
            of it — contact <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a> via in-app support before the
            match starts. The Platform will work with the Organiser to generate
            a new custom room if time permits.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Room Card sharing is treated as a competitive integrity
            violation and will result in disqualification of the responsible
            squad and a flag under the Account Suspension &amp; Ban Policy. In
            severe cases involving deliberate infiltration of matches by
            non-participants, the Company may take further legal action.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>32. Joining the Game Room</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Once the Room Card notification is received, players must:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Open Free Fire on their mobile device.</li>
          <li>
            Navigate to the Custom Room / Battle Royale or Clash Squad lobby as
            applicable for the Arena format.
          </li>
          <li>
            Enter the Room ID and Password from the Room Card notification.
          </li>
          <li>
            Join the room and be present inside the room by the scheduled match
            start time.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Players are responsible for the technical process of joining the Free
          Fire custom room. Common issues — such as being unable to find the
          custom room, entering incorrect room credentials, or being rejected by
          the room due to a full lobby — must be resolved before the match start
          time. The Platform cannot delay the match for players experiencing
          technical difficulties joining the room.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>33. Partial Squad — Missing Member</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If one or more squad members fail to join the Free Fire custom room
          before the match starts — whether due to connectivity issues, device
          problems, personal unavailability, or any other reason — the remaining
          squad members may still participate in the match without the missing
          player(s).
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The squad is not disqualified due to one or more members being
            absent from the room at match start.
          </li>
          <li>
            The remaining squad members play with the full game — they are not
            replaced by bots or substitutes.
          </li>
          <li>
            If the Captain fails to join the room — the remaining squad members
            can still play and may designate one among themselves to manage
            in-game squad leadership for that match. The platform-level Captain
            role does not change.
          </li>
          <li>
            The absence of a squad member does not entitle any player to a
            refund of entry fees — the squad's registration and entry fee remain
            locked regardless of absent members.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: Playing with fewer than the standard squad size significantly
            disadvantages the squad. The Platform strongly recommends ensuring
            all squad members are available and ready before the match start
            time. If a member is unavailable — inform the Captain well in
            advance so the Captain can attempt to organise a replacement before
            registration closes.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>34. No Delays After Match Start</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The match starts at the scheduled time — no exceptions. The Platform
          does not have the authority to delay a match that has already started,
          and the Organiser is instructed to start the match at the scheduled
          time regardless of absent squads or players.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Squads that are not inside the room when the match starts will miss
            the match. There is no mechanism for late entry into an ongoing
            match.
          </li>
          <li>
            Squads that miss the match entirely due to their own failure to join
            the room are considered to have forfeited their participation. No
            refund is issued.
          </li>
          <li>
            The match will proceed even if some registered squads are absent —
            the Platform does not require 100% squad attendance to allow the
            match to start.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART VIII — DURING THE MATCH — CODE OF CONDUCT</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>35. Dual Rule Applicability — Corpse &amp; Garena</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          During every Corpse Arena match, two sets of rules apply
          simultaneously:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Corpse Arena Rules — as set out in these Arena T&amp;C and the
            Platform's Corpse Terms &amp; Conditions. Violations are enforced by
            Corpse through the flag and suspension system.
          </li>
          <li>
            Garena Free Fire Rules — as set out in Garena's Terms of Service and
            Community Guidelines for Free Fire. Violations are enforced by
            Garena directly through their own game moderation and account
            management systems.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Players are bound by both sets of rules at all times during a Corpse
          Arena match. A violation of Garena's rules does not exempt a player
          from Corpse's rules, and vice versa. Garena's enforcement of their own
          rules — including in-game bans, temporary account restrictions, or
          match penalties — does not affect Corpse's independent application of
          these Arena T&amp;C.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>36. Prohibited In-Game Software &amp; Tools</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following software, tools, and modifications are strictly
          prohibited during any Corpse Arena match:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Aimbots — any software that automatically assists with targeting,
            aim, or accuracy in Free Fire.
          </li>
          <li>
            Wallhacks or ESP (Extra Sensory Perception) software — tools that
            allow players to see through walls, detect enemy positions, or
            access information not available through normal gameplay.
          </li>
          <li>
            Speed hacks — software that artificially increases a player's
            movement speed, action speed, or reload speed beyond normal Free
            Fire gameplay parameters.
          </li>
          <li>
            Lag switches — hardware or software that artificially manipulates
            network latency to gain a competitive advantage over other players.
          </li>
          <li>
            Damage modification — software that artificially increases the
            damage dealt by weapons or reduces damage received.
          </li>
          <li>
            Auto-fire or trigger bots — software that automatically fires
            weapons when an enemy is in the crosshair.
          </li>
          <li>
            Any Free Fire game file modification — altering game files, assets,
            configurations, or resources in any way not authorised by Garena.
          </li>
          <li>
            Any other third-party software that interacts with the Free Fire
            client in a manner not authorised by Garena or that provides any
            advantage not available through normal gameplay.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Use of any prohibited software is subject to immediate
            disqualification, entry fee forfeiture, and a flag under the Account
            Suspension &amp; Ban Policy. Repeat violations will result in
            permanent ban. The Platform uses statistical analysis and Organiser
            reports to detect suspicious performance patterns consistent with
            cheating. You do not need to be caught in the act for a violation to
            be found.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>37. Match Fixing &amp; Result Manipulation</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Match fixing — the deliberate manipulation of match outcomes for
          financial gain or competitive advantage — is the most serious
          violation that can occur within a Corpse Arena. The following
          constitute match fixing:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Pre-arranging match results with opposing squads — agreeing before
            the match who will win or lose.
          </li>
          <li>
            Deliberately losing or underperforming to benefit a specific squad —
            intentionally dying early, not engaging opponents, or otherwise
            sabotaging your own squad's performance.
          </li>
          <li>
            Coordinating with the Organiser to manipulate results — colluding
            with the Organiser to ensure a specific outcome regardless of actual
            match performance.
          </li>
          <li>
            Score manipulation — artificially inflating kills, damage, or
            survival time through coordination with other players.
          </li>
          <li>
            Any arrangement — formal or informal — designed to ensure prize
            money goes to a pre-determined recipient regardless of match
            performance.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Match fixing results in immediate disqualification of all involved
          squads, forfeiture of all entry fees, and a flag for all involved
          players. In cases involving financial manipulation of prize money, the
          Company may also pursue civil legal remedies and report the conduct to
          relevant authorities.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>38. Room Card Sharing During Match</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Sharing the Room Card during an ongoing match — for example, to allow
          a non-registered player to spectate or participate — is prohibited.
          Even if the intent is not malicious, allowing non-registered
          individuals into the custom room compromises match integrity and will
          result in disqualification of the responsible squad.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>39. Player Conduct &amp; Sportsmanship</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Players are expected to conduct themselves with sportsmanship and
          respect throughout the Arena — before, during, and after the match.
          The following conduct is prohibited:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Harassment, abuse, or threatening language directed at other players
            — whether in the Free Fire in-game voice chat, text chat, or on the
            Corpse Platform.
          </li>
          <li>
            Discriminatory language — using language that targets or demeans
            players based on religion, ethnicity, gender, language, or any other
            characteristic.
          </li>
          <li>
            Intentional disconnection — deliberately disconnecting from the
            match to disrupt the Arena or gain a restart advantage.
          </li>
          <li>
            Griefing — deliberately hindering the performance of your own squad
            members or allied players.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>40. Garena Account Actions During Match</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If Garena's own enforcement systems detect a violation by a player
          during a Corpse Arena match — resulting in an in-game ban, account
          restriction, or forced disconnection — the following applies:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Corpse is not responsible for Garena's enforcement actions and
            cannot override or reverse Garena's decisions.
          </li>
          <li>
            A Garena-enforced ban or restriction that prevents a player from
            completing the match does not entitle the player or their squad to a
            refund of entry fees.
          </li>
          <li>
            A Garena-enforced ban during a match may also trigger a Corpse
            investigation — particularly if the Garena ban was for cheating or
            using prohibited software that also violates Corpse's rules.
          </li>
          <li>
            If Garena's servers experience downtime during a match that affects
            all participants equally — the Arena may be rescheduled at the
            Platform's discretion. If the Arena cannot be rescheduled, entry
            fees will be refunded per the Money Deposit &amp; Receive Policy.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART IX — RESULT SUBMISSION PROCESS</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>41. The Auto-Capture System</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Corpse platform features a proprietary result submission system
          designed to make match result recording as seamless as possible —
          eliminating the need for players to manually take screenshots and
          upload them separately. This system is called the Auto-Capture System.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Auto-Capture System works through a floating screen capture button
          that appears within the Corpse app at the appropriate time during the
          Arena flow. The following sections describe the exact step-by-step
          process for players and Organisers.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>42. Step-by-Step — Player Result Submission</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following is the complete, detailed process for a player to submit
          their match result using the Auto-Capture System:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Step</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Action</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Detail</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Step 1</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Tap 'Start Match' in the Corpse app</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Before entering the Free Fire custom room, the Captain taps
                  the 'Start Match' button in the Corpse app to signal that the
                  match is beginning. This activates the Auto-Capture System.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Step 2</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Floating capture button appears</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  A floating screen capture button appears as an overlay on the
                  player's device screen — similar to a screen recorder or
                  floating widget. This button remains accessible while the
                  player switches to the Free Fire app.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Step 3</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Play the match in Free Fire</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The player enters the Free Fire custom room and plays the
                  match as normal. The floating capture button remains visible
                  as an overlay throughout the match.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Step 4</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Match ends — scoreboard appears</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  When the Free Fire match concludes, the in-game scoreboard
                  showing match results, kills, damage, ranking, and other
                  statistics is displayed.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Step 5</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Tap the floating capture button</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  With the scoreboard visible on screen, the player taps the
                  floating capture button. The system takes a screenshot of the
                  current screen (the scoreboard) and automatically queues it
                  for upload.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Step 6</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Screenshot uploads automatically</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The captured screenshot is uploaded to the Platform
                  automatically — no manual file selection, gallery access, or
                  upload action is required by the player.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Step 7</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Confirmation received</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The player receives an in-app confirmation that their result
                  screenshot has been successfully uploaded.
                </p>
              </td>
            </tr>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: The floating capture button must be tapped while the
            scoreboard is visible on screen. If the player navigates away from
            the scoreboard before tapping the capture button — the auto-capture
            may not correctly capture the result data. Ensure the full
            scoreboard is visible before tapping capture.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>43. Step-by-Step — Organiser Result Submission</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Organiser follows the same Auto-Capture System process on their
          end:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The Organiser is present in the Free Fire custom room as the room
            host throughout the match.
          </li>
          <li>
            When the match ends and the scoreboard is visible, the Organiser
            taps the floating capture button in the Corpse organiser app.
          </li>
          <li>
            The Organiser's screenshot — which includes the full match
            scoreboard with all squad rankings, kill counts, and other match
            statistics — is uploaded automatically.
          </li>
          <li>
            The Organiser's submission is the primary reference for result
            verification. The Organiser's screenshot captures the complete match
            overview from the room host perspective, providing the most
            comprehensive view of results.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: The moment the Organiser successfully uploads their
            result screenshot, the 60-second player upload window begins. All
            players who have not yet uploaded their screenshot must do so within
            60 seconds of the Organiser's submission. This is a firm,
            system-enforced deadline.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>44. The 60-Second Upload Window</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The 60-second upload window is one of the most important rules in the
          Arena result submission process. It works as follows:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The 60-second countdown begins automatically the moment the
            Organiser's result screenshot is successfully uploaded to the
            Platform.
          </li>
          <li>
            All registered players are notified via in-app notification when the
            countdown begins — the notification includes the time remaining.
          </li>
          <li>
            Players who have already submitted their screenshot before the
            Organiser's submission are unaffected — their submission is already
            recorded.
          </li>
          <li>
            Players who have not yet submitted their screenshot when the
            countdown begins must do so within 60 seconds.
          </li>
          <li>
            Players who fail to submit their screenshot within the 60-second
            window — for any reason — will have their data marked as 'not
            submitted'. Their personal match statistics will not be included in
            the result verification data.
          </li>
          <li>
            Failure to submit within the 60-second window does not result in
            automatic disqualification — it means the player's own screenshot
            evidence is not available for verification. The match result is
            determined by the Organiser's submission and any player screenshots
            received within the window.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: 60 seconds is a very short window. Players must be ready
            to tap the capture button and upload as soon as the match ends. Do
            not leave the scoreboard screen, navigate away from the app, or
            delay after the match ends. If you miss the window, your personal
            screenshot data will not be considered in result verification.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>45. Manual Upload Option</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Players who miss the auto-capture opportunity — for example, if they
          navigated away from the scoreboard before tapping the capture button —
          may manually upload a screenshot of the match result within the
          60-second window. To manually upload:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Navigate to the Arena result submission screen within the Corpse
            app.
          </li>
          <li>
            Tap 'Upload Result' and select the relevant screenshot from your
            device's photo gallery.
          </li>
          <li>
            The screenshot must clearly show the match scoreboard with your
            in-game name, squad ranking, kill count, and other match statistics
            visible.
          </li>
          <li>
            The manual upload is subject to the same 60-second window — it must
            be completed before the window closes.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: Manual uploads are accepted but may take slightly longer to
            process than auto-captures. Ensure your screenshot is clear,
            unedited, and shows the complete scoreboard. Edited, cropped, or
            unclear screenshots will be rejected during result verification.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>46. Result Verification by Corpse</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          After the result submission window closes, the Platform's team reviews
          the submitted screenshots — from both the Organiser and registered
          players — to verify the match result. The verification process:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Compares the Organiser's full-scoreboard screenshot with individual
            player screenshots to confirm consistency.
          </li>
          <li>
            Identifies the winning squads based on match rankings, kill counts,
            and game mode-specific scoring criteria.
          </li>
          <li>
            Flags any inconsistencies between the Organiser's submission and
            player submissions for further investigation.
          </li>
          <li>
            Is completed within 24 hours of the match conclusion under normal
            circumstances.
          </li>
          <li>
            Results in prize disbursement initiation once verification is
            successfully completed.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Platform's result verification is final — once verified, results
          cannot be changed except through the formal dispute process described
          in Part X.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART X — RESULT DISPUTES</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>47. Right to Dispute</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every registered player who participated in an Arena has the right to
          dispute the verified match result if they believe it is incorrect —
          for example, if the wrong squad is declared the winner, if kill counts
          are inaccurate, or if the result does not reflect the actual match
          outcome. The right to dispute is available for 24 hours after the
          match result is officially posted on the Platform.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>48. Dispute Submission Process</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          All result disputes must be submitted through the Platform's in-app
          support system. Disputes submitted via email or any other channel will
          not be accepted. To submit a dispute:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Step 1 — Navigate to the completed Arena in the Corpse app and tap
            'Dispute Result'.
          </li>
          <li>
            Step 2 — Select the specific aspect of the result being disputed —
            for example, incorrect winner, incorrect kill count, or incorrect
            squad ranking.
          </li>
          <li>
            Step 3 — Provide a clear written explanation of why you believe the
            result is incorrect.
          </li>
          <li>
            Step 4 — Attach your screenshot evidence. Screenshots must clearly
            show the match scoreboard with your in-game name and relevant
            statistics visible.
          </li>
          <li>
            Step 5 — Submit the dispute. You will receive an in-app confirmation
            with a dispute reference number.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The dispute window closes exactly 24 hours after the match result is
          officially posted. Disputes submitted after this window are not
          accepted under any circumstance — plan accordingly.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>49. Evidence Requirements</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A dispute without adequate evidence will not be upheld. Every dispute
          submission must include:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            A clear, unedited screenshot of the match scoreboard showing the
            full match results — including all squad rankings, kill counts, and
            survival times.
          </li>
          <li>
            The player's in-game name must be clearly visible in the screenshot
            — confirming the screenshot was taken from the player's own game
            perspective.
          </li>
          <li>
            If the dispute is about a specific event during the match — such as
            alleged cheating by another player — any additional screenshots,
            screen recordings, or evidence supporting the claim must be
            provided.
          </li>
          <li>
            The dispute must clearly identify the specific error in the posted
            result — a general complaint that 'the result is wrong' without
            specific identification of the error will not be accepted.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Submitting false or manipulated screenshots as evidence
            in a dispute is a serious violation that will result in immediate
            disqualification, a flag, and potential permanent ban. The
            Platform's result verification team is experienced in identifying
            edited or fabricated screenshots.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>50. Corpse's Review &amp; Decision</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Platform's result verification team reviews every submitted
          dispute and provides a final decision within 24 hours of the dispute
          being submitted. The review process involves:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Comparing the dispute evidence with the original Organiser
            submission and all player submissions from the match.
          </li>
          <li>
            Reviewing match data available to the Platform to identify
            inconsistencies or errors in the posted result.
          </li>
          <li>
            If necessary — requesting additional evidence from the disputing
            player, the Organiser, or other match participants.
          </li>
          <li>
            Making a final, binding determination on the dispute based on the
            totality of available evidence.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Platform's dispute decision is communicated to the disputing
          player via in-app notification and email within the 24-hour review
          window.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>51. Outcomes of a Dispute</strong>
        </h2>
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
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Dispute Upheld</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The Platform finds that the posted result is incorrect and
                  amends it. The correct winning squad is identified and the
                  winner ladder is adjusted accordingly.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Prize money is redistributed based on the corrected result. If
                  prize has already been disbursed to the wrong squad — recovery
                  proceedings may be initiated.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Dispute Partially Upheld</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The Platform finds a specific element of the result is
                  incorrect — such as kill count — but the overall winner
                  determination remains unchanged.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  No change to prize disbursement if overall winner is
                  unchanged. ELO scores may be adjusted.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Dispute Rejected</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The Platform finds that the posted result is correct and the
                  dispute evidence does not support the claim of error.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  No change to result or prize disbursement. Original result
                  stands.
                </p>
              </td>
            </tr>
          </table>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>52. Frivolous Disputes</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A dispute is considered frivolous if it is submitted without credible
          evidence, is based on subjective dissatisfaction with the match
          outcome rather than an objective error, or is submitted repeatedly for
          the same result after a decision has been made. Frivolous disputes:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            May be dismissed without full review if the platform's team
            determines within initial review that no credible basis exists for
            the dispute.
          </li>
          <li>
            May result in a flag under the Account Suspension &amp; Ban Policy
            if the player engages in a pattern of frivolous dispute submissions.
          </li>
          <li>
            Will not entitle the player to a refund of entry fees or any other
            financial compensation.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART XI — DISQUALIFICATION</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>53. Grounds for Disqualification</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A player or squad may be disqualified from an Arena on the following
          grounds:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Ground</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Description</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Who Is Disqualified</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Wrong in-game ID</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Player enters the Free Fire custom room using a Free Fire
                  account other than the one registered on their Corpse profile.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The individual player and their entire squad.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Emulator use</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Player plays the match on an emulator rather than a physical
                  mobile device.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The individual player and their entire squad.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Room Card sharing</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Player shares the Room Card with non-registered individuals,
                  allowing them to enter the custom room.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  The squad of the player who shared the Room Card.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Cheating or hacking</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Player uses prohibited software, tools, or modifications
                  during the match.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">The individual player and their squad.</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Match fixing</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Player or squad participates in pre-arranged result
                  manipulation.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  All squads and players involved in the arrangement.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Account sharing</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Player allows another person to play on their behalf using
                  their Free Fire account.
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">The individual player and their squad.</p>
              </td>
            </tr>
          </table>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>54. Consequences of Disqualification</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          When a squad or player is disqualified from an Arena, the following
          consequences apply:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The disqualified squad's registration is invalidated — their match
            results are excluded from the official Arena standings.
          </li>
          <li>
            Entry fees paid by the disqualified squad's Captain are permanently
            forfeited — no refund is issued under any circumstance.
          </li>
          <li>
            The disqualified player(s) receive a flag under the Account
            Suspension &amp; Ban Policy — the specific flag consequence
            (warning, suspension, or ban) depends on the player's current active
            flag count.
          </li>
          <li>
            The disqualification is recorded on the Platform's disciplinary
            record for the player.
          </li>
          <li>
            The Organiser is notified of the disqualification and the reason for
            it.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>55. Winner Ladder on Disqualification</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          When a squad that achieved a prize-winning position is disqualified —
          the prize ladder shifts upward to the next eligible squad:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            If the 1st place squad is disqualified — the 2nd place squad moves
            to 1st place and receives the 1st place prize. The 3rd place squad
            moves to 2nd place, and so on.
          </li>
          <li>
            The prize amounts remain the same — the prize associated with each
            position is awarded to the squad now occupying that position after
            the ladder shift.
          </li>
          <li>
            If multiple squads are disqualified — the ladder shifts upward
            accordingly for each disqualification.
          </li>
          <li>
            The winner ladder shift is applied by the Platform's result
            verification team after the disqualification is confirmed.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART XII — PLATFORM LIABILITY</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>56. Game Server &amp; Publisher Issues</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Platform operates as an independent tournament infrastructure
          layer on top of Free Fire. The Platform does not own, operate, or
          control Free Fire's game servers, matchmaking systems, or any other
          Garena infrastructure. Accordingly:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The Platform is not liable for Free Fire server downtime,
            maintenance windows, or outages that prevent players from joining
            custom rooms or completing matches.
          </li>
          <li>
            The Platform is not liable for Garena's decisions regarding player
            accounts — including temporary bans, permanent bans, or account
            restrictions applied by Garena.
          </li>
          <li>
            If Garena's servers experience downtime during an Arena that
            prevents all registered players from completing the match — the
            Platform will assess the situation and, where possible, work with
            the Organiser to reschedule the match. If rescheduling is not
            possible, entry fees will be refunded per the Money Deposit &amp;
            Receive Policy.
          </li>
          <li>
            Garena's scheduled maintenance events that affect Free Fire
            availability are not the Platform's responsibility. Players are
            advised to check Garena's official channels for scheduled
            maintenance information before registering for arenas scheduled
            close to known maintenance windows.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>57. Player Device &amp; Connectivity Issues</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Platform is not responsible for any issues arising from a player's
          own device or internet connectivity during an Arena:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Device crashes, overheating, battery failure, or hardware
            malfunction during the match — not the Platform's responsibility.
          </li>
          <li>
            Internet connectivity loss, high latency, packet loss, or ISP
            outages experienced by a player during the match — not the
            Platform's responsibility.
          </li>
          <li>
            Free Fire app crashes, freezes, or failures on the player's device —
            not the Platform's responsibility.
          </li>
          <li>
            Failure to receive the Room Card notification due to disabled app
            notifications or device notification settings — not the Platform's
            responsibility.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          None of the above circumstances entitle a player to a refund of entry
          fees or compensation of any kind. Players are responsible for ensuring
          their device and internet connection are suitable for competitive
          gameplay before registering for any Arena.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>58. Arena Cancelled by Corpse</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If the Platform cancels an Arena — due to a platform-side technical
          failure, a rule violation by the Organiser, or any other reason
          attributable to the Platform — the following applies:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            All registered players receive a full refund of their entry fees —
            100%, within 24 hours of cancellation, as governed by the Money
            Deposit &amp; Receive Policy.
          </li>
          <li>
            The Organiser receives a full refund of their security deposit —
            100%, within 24 hours of cancellation.
          </li>
          <li>No platform commission is charged on a cancelled Arena.</li>
          <li>
            Players are notified of the cancellation and refund via in-app
            notification and email.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>59. Organiser Failure to Share Room Card</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If the Room Card is not delivered to registered players 30 minutes
          before the match start time — and the failure is attributable to the
          Organiser (e.g., the Organiser failed to enter the Room Card into the
          Platform's system on time) — the following applies:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Players who have not received the Room Card must contact
            <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a> via in-app support within 30 minutes of the
            scheduled match start time to report the missing Room Card.
          </li>
          <li>
            The Platform will investigate and attempt to obtain the Room Card
            from the Organiser or work with the Organiser to reschedule the
            match.
          </li>
          <li>
            If the match cannot proceed due to the Organiser's failure to
            provide the Room Card — the Arena will be cancelled and full refunds
            issued per the Money Deposit &amp; Receive Policy.
          </li>
          <li>
            The Organiser may face consequences under the Organiser Agreement
            and their organiser subscription terms for failure to fulfil their
            Arena management obligations.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Do not wait until after the scheduled match start time to
            report a missing Room Card. If you have not received the Room Card
            25 minutes before the scheduled start — contact support immediately.
            Late reports may not allow sufficient time to resolve the issue
            before the match start.
          </strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART XIII — PROHIBITED CONDUCT — FULL REFERENCE</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>60. Complete List of Prohibited Acts</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following is the complete consolidated reference list of all
          conduct prohibited in connection with Corpse Arenas. Each item
          references the relevant section of these Arena T&amp;C and the
          consequence that applies:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Prohibited Act</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Relevant Section</strong>
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
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Registering for an Arena as a suspended or banned user
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Part III, Section 14</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Registration rejected by system. If circumvented —
                  disqualification + flag.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Registering for two Arenas with conflicting match times
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Part V, Section 22</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Second registration rejected by system.</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Withdrawing from an Arena after registration is confirmed
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Part V, Section 23</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Not permitted — registration lock is system-enforced.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Using a different Free Fire in-game ID than the one registered
                  on Corpse
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Part VI, Section 27</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Immediate disqualification + entry fee forfeited + flag.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Playing on an emulator</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Part VI, Section 28</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Immediate disqualification + entry fee forfeited + flag.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Allowing another person to play on your behalf (account
                  sharing)
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Part VI, Section 27</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Disqualification + entry fee forfeited + flag.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Sharing the Room Card with non-registered players
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Part VII, Section 31</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Disqualification of responsible squad + entry fee forfeited +
                  flag.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Using cheats, hacks, aimbots, wallhacks, or prohibited
                  software
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Part VIII, Section 36</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Immediate disqualification + entry fee forfeited + flag.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Match fixing or deliberate result manipulation
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Part VIII, Section 37</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Disqualification of all involved squads + entry fees forfeited
                  + flag.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Harassment or abusive conduct toward other players
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Part VIII, Section 39</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Flag under Suspension Policy.</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Submitting fabricated or edited screenshots in result dispute
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Part X, Section 49</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Disqualification + flag + potential permanent ban.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Submitting frivolous or repeated disputes without evidence
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Part X, Section 52</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Dispute dismissed + potential flag.</p>
              </td>
            </tr>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            PART XIV — GOVERNING LAW, DISPUTE RESOLUTION &amp; CONTACT
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>61. Governing Law</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          These Arena Joining Terms &amp; Conditions shall be governed by and
          construed in accordance with the laws of India, including the
          Information Technology Act 2000, the Consumer Protection Act 2019, and
          all applicable provisions of the Indian Penal Code, as amended from
          time to time. These Arena T&amp;C operate within and supplement the
          Corpse Terms &amp; Conditions of the Corpse platform.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>62. Dispute Resolution</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Any dispute arising from or in connection with these Arena T&amp;C —
          including disputes about match results, disqualification decisions,
          entry fee refunds, or prize disbursements — shall be handled as
          follows:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Result disputes — through the in-app dispute mechanism described in
            Part X. The Platform's decision is binding.
          </li>
          <li>
            Disqualification disputes — through the appeal process described in
            the Account Suspension &amp; Ban Terms &amp; Conditions.
          </li>
          <li>
            Financial disputes — through the dispute process described in the
            Money Deposit &amp; Receive Policy.
          </li>
          <li>
            Any remaining dispute not resolved through the above mechanisms —
            through good-faith negotiation by contacting <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a>. If
            unresolved within 30 days, the dispute shall be submitted to binding
            arbitration under the Arbitration and Conciliation Act, 1996. The
            seat of arbitration shall be Guwahati, Assam, India.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>63. Contact</strong>
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
                  <strong>Legal Email</strong>
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
                  <strong>Missing Room Card</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a> via in-app — report at least 25 mins before
                  match start
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Result Dispute</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  In-app: Arena &gt; Dispute Result — within 24 hours of result
                  posting
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Disqualification Appeal</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  In-app: Settings &gt; Support &gt; Appeal a Disciplinary
                  Action
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>General Arena Queries</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a> — response within 24 hours
                </p>
              </td>
            </tr>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          These Arena Joining Terms &amp; Conditions were last updated in April
          2026 and are effective from May 1, 2026.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Version 1.0 | Launch Game: Free Fire (Garena Free Fire MAX) | Corpse
            — [CORPSE ESPORTS PRIVATE LIMITED]
          </em>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>Confidential &amp; Proprietary. All rights reserved.</em>
        </p>
      </div>
    </main>
  );
}
