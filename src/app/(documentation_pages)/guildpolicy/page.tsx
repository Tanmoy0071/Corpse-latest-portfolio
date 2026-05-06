import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guild Policy | Corpse",
  description: "Guild Policy for the Corpse platform.",
};

export default function PolicyPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-32 max-w-5xl min-h-screen flex flex-col items-center text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-[#e8192c] uppercase tracking-wider drop-shadow-[0_0_15px_rgba(232,25,44,0.4)]">
        Guild Policy
      </h1>
      <div className="space-y-8 text-white/70 text-lg flex flex-col items-center w-full">
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>CORPSE</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>The Operating System for Esports</em>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Guild Policy</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Creation • Roles • Membership • Conduct • ELO • Enforcement
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Binding on: All Guild Members | Captains | Vice Captains | Managers
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
                  <strong>Governed By</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Corpse Terms &amp; Conditions | Account Suspension &amp; Ban
                  T&amp;C
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
            By creating, joining, or participating in any Guild on the Corpse
            platform, you confirm that you have read, understood, and agree to
            be bound by this Guild Policy in its entirety.
          </em>
        </p>
        {/* <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Table of Contents</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART I Introduction &amp; Scope</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 1. What a Guild Is</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 2. Purpose of the Guild System</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 3. Relationship to Other Corpse Policies</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART II Guild Creation</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 4. Who Can Create a Guild</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 5. Guild Name Rules</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 6. Guild Profile &amp; Public Visibility</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 7. Guild Tag on Member Profiles</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 8. Guild Cannot Be Deleted</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART III Guild Roles &amp; Hierarchy</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 9. The Four Roles</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 10. Captain — Ultimate Authority</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 11. Vice Captain — Second in Command</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 12. Manager — Day-to-Day Operations</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 13. Member — Standard Participant</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART IV Role Permissions — Full Reference Table</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 14. What Each Role Can and Cannot Do</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART V Unit Tier System</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 15. The Four Unit Tiers</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 16. Apex Unit</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 17. Specialized Unit</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 18. Core Unit</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 19. Rising Unit</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 20. Unit Tier Visibility</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART VI Guild Membership</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 21. Maximum Member Limit</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 22. One Guild Per Player</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 23. Request-Based Joining</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 24. No Minimum ELO Requirement</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 25. Leaving a Guild — Members</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 26. Leaving a Guild — Captain</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 27. Member Removal</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 28. Rejoining After Removal or Departure</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART VII Guild Rules &amp; Internal Policy</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 29. Captain's Authority Over Guild Rules</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 30. Adding New Rules</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 31. Restrictions on Rule Modification</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 32. Platform Rules Override Guild Rules</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART VIII Guild ELO &amp; Leaderboard</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 33. Guild ELO — Separate from Player ELO</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 34. How Guild ELO Is Calculated</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 35. Guild Leaderboard</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 36. Impact of Captain Ban on Guild ELO</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART IX Guild Verified Badge</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 37. What the Verified Badge Is</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 38. How a Guild Earns the Verified Badge</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART X Guild Conduct &amp; Prohibited Behaviour</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 39. Guild-Level Prohibited Conduct</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 40. Member-Level Obligations Within a Guild</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 41. Reporting a Guild for Misconduct</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART XI Corpse's Authority Over Guilds</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 42. Right to Suspend a Guild</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 43. Right to Dissolve a Guild</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          {" "}
          44. Captain Permanently Banned — Guild Succession
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 45. Force-Rename of Guild Name</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            PART XII Governing Law, Dispute Resolution &amp; Contact
          </strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 46. Governing Law</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 47. Dispute Resolution</p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"> 48. Contact</p> */}
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART I — INTRODUCTION &amp; SCOPE</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>1. What a Guild Is</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A Guild on the Corpse platform is a persistent, structured competitive
          team — a group of registered players who come together under a unified
          identity to compete in duo and squad arenas, build a collective
          competitive record, and progress on the Platform's guild leaderboard.
          Unlike a squad — which is formed for a specific arena and disbands
          after — a Guild is a permanent entity on the Platform that maintains
          its identity, ELO ranking, and member roster over time.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every Guild has a name, a public profile, a verified identity, a
          four-tier internal unit structure, a leadership hierarchy of four
          roles, and its own ELO score that is tracked and displayed on the
          Platform's guild leaderboard. A Guild is the closest equivalent to an
          esports organisation on the Corpse platform — it represents a player's
          competitive home and community on the Platform.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>2. Purpose of the Guild System</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Guild system on the Corpse platform serves the following purposes:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Competitive continuity — giving players a persistent team identity
            that carries forward across arenas, seasons, and game titles.
          </li>
          <li>
            Talent structure — the unit tier system (Apex, Specialized, Core,
            Rising) provides a clear internal hierarchy that reflects each
            member's contribution and skill level within the guild.
          </li>
          <li>
            Community building — guilds create a structured community around
            competitive gaming, enabling players to find consistent teammates,
            build chemistry, and compete as a unit over time.
          </li>
          <li>
            Collective recognition — guild ELO and the guild leaderboard give
            guilds a competitive standing that is distinct from individual
            player rankings — rewarding collective performance.
          </li>
          <li>
            Talent discovery — the Platform's ecosystem is designed to surface
            talented players and guilds to organisers, sponsors, and the broader
            esports community.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>3. Relationship to Other Corpse Policies</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Guild Policy must be read alongside the following Corpse
          policies, all of which apply to guild participants:
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
                  <strong>Relevance to Guild Context</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Corpse Terms &amp; Conditions</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  General platform rules, prohibited conduct, and governing law
                  — all apply to guild members in their capacity as platform
                  users
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Account Suspension &amp; Ban T&amp;C</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Flag system and suspension consequences apply to individual
                  guild members. Guild-level suspension and dissolution governed
                  by this Guild Policy and the Suspension T&amp;C together.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Arena Joining T&amp;C</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  When guild members participate in arenas as a squad, the Arena
                  Joining T&amp;C governs match conduct, result submission, and
                  disputes.
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">IP, Trademark &amp; Copyright Policy</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Guild data, ELO records, and match history generated on the
                  Platform are owned by the Company per the IP Policy.
                </p>
              </td>
            </tr>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART II — GUILD CREATION</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>4. Who Can Create a Guild</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Guild creation is restricted to KYC-verified Registered Users of the
          Platform. The following conditions must be met by a user before they
          can create a guild:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The user must be a Registered User with an active, verified account
            on the Platform.
          </li>
          <li>
            The user must have completed KYC verification — unverified users and
            Minor Users cannot create a guild.
          </li>
          <li>
            The user must not be a member of an existing guild — a player can
            only be in one guild at a time and must leave their current guild
            before creating a new one.
          </li>
          <li>
            The user must not have a suspended or permanently banned account.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          When a user creates a guild, they automatically become the Captain of
          that guild. The creating user is solely responsible for the guild's
          name, conduct, and compliance with this Guild Policy from the moment
          of creation.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>5. Guild Name Rules</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every guild must have a unique name on the Platform. Guild names are
          subject to the following rules:
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>5.1 Permitted Guild Names</strong>
        </h3>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Guild names must be original and not already registered by another
            guild on the Platform.
          </li>
          <li>
            Guild names may contain letters (in any language supported by the
            Platform), numbers, spaces, and common gaming-related symbols.
          </li>
          <li>
            Guild names can be changed at any time by the Captain — there is no
            cooldown period between name changes. However, the new name must
            comply with all rules in this Section.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>5.2 Prohibited Guild Names</strong>
        </h3>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Names containing sexually explicit, obscene, or NSFW content of any
            kind.
          </li>
          <li>
            Names that impersonate or are deceptively similar to another
            existing guild's name on the Platform.
          </li>
          <li>
            Names that impersonate real people, public figures, celebrities, or
            esports personalities.
          </li>
          <li>
            Names that impersonate Corpse, Corpse Arena, or any Corpse official
            entity or staff designation — for example, 'Corpse Official',
            'Corpse Admin Team', or similar.
          </li>
          <li>
            Names containing hate speech, discriminatory language, or content
            targeting individuals or groups based on religion, ethnicity,
            gender, or any other characteristic.
          </li>
          <li>
            Names that are identical or deceptively similar to trademarks of
            third-party gaming companies, brands, or esports organisations —
            unless the guild has obtained explicit written permission from the
            trademark owner.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: The Company reserves the right to force-rename any guild
            whose name violates these rules at any time without prior notice.
            Repeated naming violations may result in the guild Captain receiving
            a flag under the Account Suspension &amp; Ban Policy.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>6. Guild Profile &amp; Public Visibility</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every guild on the Platform has a public guild profile that is visible
          to all registered users and, where applicable, guest users browsing
          the Platform. The guild profile displays:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Guild name and guild tag.</li>
          <li>Guild ELO score and leaderboard ranking.</li>
          <li>Guild verified badge (if earned).</li>
          <li>Current member list with roles and unit tiers.</li>
          <li>
            Guild's competitive history — arenas participated in, wins, and
            performance statistics.
          </li>
          <li>Guild's unit tier composition at a glance.</li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Guild profiles are public by default and cannot be set to private. The
          Platform's commitment to transparency in competitive rankings requires
          all guild profiles to be publicly accessible.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>7. Guild Tag on Member Profiles</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          When a player is a member of a guild, their guild tag — a shortened
          identifier derived from the guild name — is displayed on their
          individual player profile on the Platform. This tag:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Appears alongside the player's username and ELO score on their
            profile page.
          </li>
          <li>
            Appears on leaderboards and match records where the player's profile
            is displayed.
          </li>
          <li>
            Is removed automatically from the player's profile when they leave
            or are removed from the guild.
          </li>
          <li>
            Is set by the Captain when creating the guild and can be changed by
            the Captain at any time subject to the guild name rules in Section
            5.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>8. Guild Cannot Be Deleted</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Once a guild is created on the Platform, it cannot be deleted or
          dissolved by the Captain or any other guild member. This is a
          permanent, system-enforced rule. The rationale for this policy is:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Guild ELO scores and match histories form part of the Platform's
            competitive record — deleting a guild would create gaps in the
            historical data that affect other guilds' rankings and records.
          </li>
          <li>
            Guild members who have invested time and effort into building a
            guild's reputation have a legitimate interest in the guild's
            continued existence — even if the Captain changes.
          </li>
          <li>
            Preventing guild deletion protects against bad-faith dissolution —
            for example, a Captain deleting a guild to avoid accountability for
            conduct violations.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Platform may dissolve a guild as a disciplinary measure — as
          described in Part XI. This is the only mechanism by which a guild can
          cease to exist on the Platform.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART III — GUILD ROLES &amp; HIERARCHY</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>9. The Four Roles</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every guild on the Platform operates with a four-tier leadership and
          membership structure. Each role carries specific authorities,
          responsibilities, and restrictions. The hierarchy from highest to
          lowest authority is:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Role</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Symbol</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Position in Hierarchy</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Primary Responsibility</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Captain</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">🏆</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">1st — Ultimate Authority</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Strategic leadership, guild identity, full administrative
                  control
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Vice Captain</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">⚔️</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">2nd — Second in Command</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Operational management, member oversight, execution of
                  Captain's direction
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Manager</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">🧩</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">3rd — Day-to-Day Operations</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Day-to-day coordination, member intake, roster management
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Member</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">👤</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">4th — Standard Participant</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  Active participation in arenas and guild activities
                </p>
              </td>
            </tr>
          </table>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>10. Captain — Ultimate Authority</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Captain holds the highest level of authority within the guild. The
          Captain is the founding member (or the member who has received
          transferred captaincy) and is solely accountable for the guild's
          identity, conduct, and compliance with this Guild Policy and all
          Platform rules.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>The Captain's Exclusive Powers:</strong>
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Transfer guild ownership to another member — the only role with this
            authority.
          </li>
          <li>
            Change the guild name, guild tag, and all guild profile details.
          </li>
          <li>
            Set and modify the guild's internal policy rules — including
            creating new rules and deleting or modifying existing ones.
          </li>
          <li>Appoint, change, or remove the Vice Captain.</li>
          <li>Appoint, change, or remove the Manager.</li>
          <li>
            Assign and modify unit tier designations for all guild members.
          </li>
          <li>Accept or reject member join requests.</li>
          <li>
            Remove any member from the guild — including the Vice Captain and
            Manager.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Captain's Obligations:</strong>
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Must transfer captaincy to the Vice Captain or another eligible
            member before leaving the guild voluntarily. A Captain cannot leave
            the guild without completing the ownership transfer.
          </li>
          <li>
            Is responsible for ensuring the guild's name, conduct, and internal
            policies comply with this Guild Policy and Platform rules at all
            times.
          </li>
          <li>
            Is accountable for the conduct of guild members within
            guild-organised activities on the Platform.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>11. Vice Captain — Second in Command</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Vice Captain is the second-in-command of the guild, supporting the
          Captain in managing the guild's operations and maintaining competitive
          standards. The Vice Captain steps up to lead when the Captain is
          unavailable and automatically assumes the Captain role if the Captain
          permanently leaves or is banned.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Vice Captain's Powers:</strong>
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Accept or reject member join requests.</li>
          <li>Remove Managers and Members from the guild.</li>
          <li>
            All other operational guild management functions not exclusively
            reserved for the Captain.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Vice Captain's Limitations:</strong>
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Cannot transfer guild ownership — only the Captain holds this
            authority.
          </li>
          <li>Cannot change the guild name, tag, or profile details.</li>
          <li>Cannot set, modify, or delete existing guild policy rules.</li>
          <li>
            Cannot appoint or change the Vice Captain role (their own position).
          </li>
          <li>
            Cannot appoint or change the Manager role — only the Captain can
            appoint Managers.
          </li>
          <li>Cannot assign or modify unit tier designations.</li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Automatic Captain Succession:</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If the Captain permanently leaves the guild or is permanently banned
          from the Platform — the Vice Captain automatically assumes the Captain
          role immediately. No manual transfer is required in this scenario. The
          newly promoted Captain then has the full authority of the Captain role
          including the ability to appoint a new Vice Captain.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>12. Manager — Day-to-Day Operations</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Manager is responsible for the guild's day-to-day operational
          functions — focused on execution rather than strategic authority. The
          Manager handles player interactions, member intake, and roster
          coordination, keeping the guild organised and consistently active.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Manager's Powers:</strong>
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Accept or reject member join requests.</li>
          <li>Remove Members from the guild (cannot remove Vice Captain).</li>
          <li>Read the guild's internal policy rules in full.</li>
          <li>
            Add new supplementary guild rules — subject to the restrictions in
            Section 30 and 31.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Manager's Limitations:</strong>
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Cannot transfer guild ownership.</li>
          <li>Cannot change guild name, tag, or profile details.</li>
          <li>
            Cannot delete or modify existing guild policy rules set by the
            Captain.
          </li>
          <li>Cannot remove the Vice Captain or the Captain.</li>
          <li>Cannot appoint or change any leadership roles.</li>
          <li>Cannot assign or modify unit tier designations.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>13. Member — Standard Participant</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Members are the core competitive participants of the guild. They do
          not hold any administrative authority within the guild but are the
          foundation of the guild's competitive identity — their performance
          directly influences the guild's ELO score and leaderboard standing.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Member's Rights:</strong>
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Participate in arenas as part of the guild's squad.</li>
          <li>
            View the guild's public profile, leaderboard ranking, and match
            history.
          </li>
          <li>Read the guild's internal policy rules.</li>
          <li>Leave the guild at any time without restriction.</li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Member's Limitations:</strong>
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>No administrative authority within the guild.</li>
          <li>Cannot invite, accept, or reject other members.</li>
          <li>Cannot remove other members.</li>
          <li>Cannot modify any guild settings, rules, or policies.</li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART IV — ROLE PERMISSIONS — FULL REFERENCE TABLE</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>14. What Each Role Can and Cannot Do</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following table is the definitive, complete reference for all
          guild actions and the roles permitted to perform them. In case of any
          ambiguity, this table takes precedence.
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Guild Action</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Captain</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Vice Captain</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Manager</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Member</strong>
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Transfer guild ownership (captaincy)</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
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
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Change guild name &amp; tag</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
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
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Change guild profile details</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
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
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Appoint or change Vice Captain</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
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
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Appoint or change Manager</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
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
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Assign unit tier designations</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
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
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Create new guild policy rules</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
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
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Delete or modify existing guild rules</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
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
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Add supplementary guild rules</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Accept or reject join requests</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Remove Members from guild</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Remove Manager from guild</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
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
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Remove Vice Captain from guild</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
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
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Read guild policy rules</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Participate in arenas as guild squad</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">View guild profile and stats</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Leave guild freely</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Must transfer first</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes</p>
              </td>
            </tr>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: 'No' in this table means the action is technically restricted
            by the Platform — it is not merely a policy rule but a
            system-enforced limitation. Members and Managers cannot perform
            Captain-exclusive actions even if the Captain gives verbal
            permission — the Platform will not permit it.
          </em>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART V — UNIT TIER SYSTEM</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>15. The Four Unit Tiers</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every guild member is assigned to one of four unit tiers — a
          structured classification system that reflects each member's role,
          skill level, and contribution within the guild. The unit tier system
          provides a clear internal hierarchy that is visible on the guild
          profile and on individual member profiles within the guild context.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The four unit tiers, from highest to lowest standing, are: Apex Unit,
          Specialized Unit, Core Unit, and Rising Unit. Unit tier assignments
          are made by the Captain and are updated as member performance and
          roles evolve.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>16. Apex Unit</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>🏆 APEX UNIT — The Elite</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Apex Unit consists of the guild's absolute elite — the leaders and
          highest-performing players who define the guild's identity and set the
          standard for all other members. Apex Unit membership is a combination
          of leadership role and competitive excellence.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Apex Unit Composition:</strong>
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>The Captain — by virtue of their leadership role.</li>
          <li>The Vice Captain — by virtue of their leadership role.</li>
          <li>The Manager — by virtue of their operational role.</li>
          <li>
            The 2 strongest players in the guild by ELO score — automatically
            identified by the Platform's ELO system from among the
            non-leadership members.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Apex Unit therefore always consists of exactly 5 members: 3
          leadership role holders and 2 top ELO performers. The 2 ELO-based Apex
          Unit spots update dynamically as member ELO scores change — a member
          who drops in ELO ranking may be replaced in the Apex Unit by a rising
          player.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: Leadership role holders (Captain, VC, Manager) remain in the
            Apex Unit regardless of their ELO score. The 2 ELO-based spots are
            drawn from non-leadership members only.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>17. Specialized Unit</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>🧩 SPECIALIZED UNIT — Precision Specialists</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Specialized Unit consists of the guild's top archetype holders —
          players who have demonstrated mastery of specific competitive
          archetypes (Attack, Defence, Support, Strategy, or Balance) as
          identified by the Platform's proprietary Archetype Analytics system.
          These players bring precision-driven specialisation to the guild,
          providing distinct strategic advantages.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Specialized Unit Composition:</strong>
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Members who hold the highest archetype scores within the guild for
            each of the five archetype categories — as determined by the
            Platform's Archetype Analytics system.
          </li>
          <li>
            Excludes Apex Unit members — even if a leadership member holds the
            highest archetype score, the Specialized Unit is composed of
            non-Apex members with top archetype performance.
          </li>
          <li>
            The number of Specialized Unit members depends on the guild's member
            composition and archetype distribution — it is not a fixed number.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>18. Core Unit</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>⚙️ CORE UNIT — The Engine</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Core Unit comprises the guild's consistent, dependable members —
          players who regularly participate in arenas, contribute to the guild's
          ELO performance, and form the operational backbone of the guild's
          competitive activities. Core Unit members are not the highest
          performers but are consistently present and reliable.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Core Unit Characteristics:</strong>
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Regular arena participation on behalf of the guild.</li>
          <li>
            Consistent ELO contribution — not necessarily the highest ELO but
            maintaining active competitive performance.
          </li>
          <li>
            Members who have progressed beyond the Rising Unit through
            demonstrated engagement and reliability.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>19. Rising Unit</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>🌱 RISING UNIT — Emerging Talent</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Rising Unit consists of newer or developing guild members —
          players who are still building their competitive record within the
          guild, growing their ELO, and establishing their archetype identity.
          The Rising Unit is the entry point for all new guild members.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Rising Unit Characteristics:</strong>
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            All new members who join a guild are initially classified in the
            Rising Unit regardless of their individual ELO score or platform
            history.
          </li>
          <li>
            Rising Unit members progress to Core, Specialized, or Apex tiers as
            they demonstrate consistent performance, build their archetype
            profile, and contribute to the guild's competitive identity.
          </li>
          <li>
            The Rising Unit is not a lesser classification — it represents
            potential and trajectory. The Platform's talent discovery features
            specifically spotlight Rising Unit members to identify future stars.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>20. Unit Tier Visibility</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Unit tier designations are visible in the following locations:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            On the guild's public profile page — the unit tier composition of
            the guild is displayed, showing how many members are in each tier.
          </li>
          <li>
            On each member's profile within the guild context — when viewing a
            member's profile from the guild page, their unit tier designation is
            displayed alongside their role and ELO score.
          </li>
          <li>
            Unit tiers are not displayed on a member's standalone individual
            player profile outside of the guild context — they are
            guild-specific designations, not platform-wide rankings.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART VI — GUILD MEMBERSHIP</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>21. Maximum Member Limit</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every guild on the Platform has a maximum capacity of 20 members at
          any given time — including all leadership roles (Captain, Vice
          Captain, Manager) and standard Members. The Platform enforces this
          limit technically — no join requests can be accepted once the guild
          reaches 20 members.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Captain is responsible for managing the guild's roster within this
          limit. If a guild is at capacity and the Captain wishes to add a new
          member, an existing member must leave or be removed before the new
          member can be accepted.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>22. One Guild Per Player</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A registered user can be a member of only one guild at a time on the
          Platform. This rule is system-enforced — the Platform will not permit
          a player to accept a join request for a second guild while they are
          already a member of another guild.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            A player must leave their current guild before they can join or
            create a new one.
          </li>
          <li>
            Leadership role holders (Captain, VC, Manager) must complete any
            required transitions (see Section 26 for Captain-specific
            requirements) before leaving to join another guild.
          </li>
          <li>
            A player's individual ELO score is separate from guild membership —
            leaving a guild does not affect the player's personal ELO.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>23. Request-Based Joining</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Guild membership is obtained through a request-based system — not open
          joining or direct invitation. The process works as follows:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Step 1 — A player discovers a guild through the Platform's guild
            discovery feature or leaderboard and navigates to the guild's public
            profile.
          </li>
          <li>
            Step 2 — The player taps 'Request to Join' on the guild profile.
            This sends a join request notification to the guild's Captain, Vice
            Captain, and Manager.
          </li>
          <li>
            Step 3 — The Captain, Vice Captain, or Manager reviews the request
            and either accepts or rejects it.
          </li>
          <li>
            Step 4 — If accepted — the player is added as a Member in the Rising
            Unit immediately. They receive an in-app notification confirming
            their guild membership.
          </li>
          <li>
            Step 5 — If rejected — the player receives an in-app notification
            that their request was not accepted. No reason is required to be
            given for rejection.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: There is no limit on the number of join requests a player can
            send to different guilds simultaneously. However, if a request is
            accepted for one guild, the player's pending requests to other
            guilds are automatically withdrawn.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>24. No Minimum ELO Requirement</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          There is no platform-enforced minimum ELO requirement to join a guild.
          Any registered user — regardless of their competitive ELO score or
          Platform experience level — may send a join request to any guild. The
          guild leadership (Captain, VC, or Manager) makes the final decision on
          whether to accept the request based on the guild's own internal
          criteria.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Guilds may set their own internal ELO or performance standards as part
          of their guild policy — communicated through the guild's public
          profile or internal rules. However, these are internal guild
          standards, not Platform-enforced requirements.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>25. Leaving a Guild — Members</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Any guild member — including Vice Captains and Managers — may leave a
          guild at any time without restriction or approval from any other guild
          member. To leave a guild:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Navigate to the guild profile within the Platform app.</li>
          <li>Tap 'Leave Guild' and confirm the action.</li>
          <li>Guild membership is terminated immediately upon confirmation.</li>
          <li>
            The guild tag is removed from the player's profile immediately.
          </li>
          <li>
            The player's individual ELO score is unaffected by leaving the
            guild.
          </li>
          <li>
            The player is free to join another guild immediately after leaving.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: If a Vice Captain or Manager leaves the guild — their role is
            vacated. The Captain is responsible for appointing a replacement.
            The guild continues to operate normally in the interim.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>26. Leaving a Guild — Captain</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Captain is the only guild member who cannot leave freely. Before
          leaving a guild — whether voluntarily or in anticipation of account
          closure — the Captain must transfer ownership to another eligible
          guild member. The process is:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Step 1 — The Captain navigates to guild settings and selects
            'Transfer Ownership'.
          </li>
          <li>
            Step 2 — The Captain selects the member to whom ownership is being
            transferred. Ownership can be transferred to any guild member — not
            only the Vice Captain.
          </li>
          <li>
            Step 3 — The selected member receives an in-app notification and
            must accept the ownership transfer.
          </li>
          <li>
            Step 4 — Upon acceptance, the new member becomes Captain
            immediately. The former Captain's role is automatically downgraded
            to Member.
          </li>
          <li>
            Step 5 — The former Captain may then leave the guild if they wish.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: A Captain who attempts to leave the guild without
            completing an ownership transfer will be blocked by the Platform —
            the 'Leave Guild' function is disabled for Captains until ownership
            transfer is complete. If a Captain's account is permanently banned
            before transferring ownership, the Vice Captain automatically
            assumes the Captain role as described in Section 44.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>27. Member Removal</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Guild members may be removed by the Captain, Vice Captain, or Manager
          subject to the role permissions detailed in Part IV. Removal is
          immediate and unconditional — no notice period, explanation, or appeal
          process is required within the guild framework.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Removal takes effect immediately — the removed member's guild tag is
            removed from their profile instantly.
          </li>
          <li>
            The removed member receives an in-app notification that they have
            been removed from the guild.
          </li>
          <li>
            No reason for removal is required to be communicated to the removed
            member.
          </li>
          <li>
            Removal from a guild does not constitute a platform-level
            disciplinary action — it is an internal guild management decision.
            Platform-level disciplinary actions (flags, suspensions) are
            governed by the Account Suspension &amp; Ban T&amp;C and are
            separate from guild removal.
          </li>
          <li>
            A removed member's individual ELO score and platform history are
            unaffected by removal.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>28. Rejoining After Removal or Departure</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          There is no cooldown period preventing a removed or departed member
          from rejoining the same guild. A player who has left voluntarily or
          been removed may send a new join request to the same guild
          immediately. The guild leadership retains full discretion to accept or
          reject the new join request regardless of the circumstances of the
          previous departure or removal.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART VII — GUILD RULES &amp; INTERNAL POLICY</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>29. Captain's Authority Over Guild Rules</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Captain has full authority to establish the guild's internal rules
          and policies — governing expectations for member behaviour, arena
          participation, communication standards, and any other aspect of guild
          operation the Captain considers important. These internal rules are
          set by the Captain and displayed within the guild profile for all
          members to read.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Internal guild rules are a private governance tool for the guild —
          they are not enforced by the Platform. The Platform only enforces its
          own policies (Corpse T&amp;C, Suspension Policy, Arena T&amp;C, this
          Guild Policy). Guild-specific internal rules are entirely the
          Captain's responsibility to establish and enforce within the guild's
          own management structure.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>30. Adding New Rules</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          In addition to the Captain's exclusive authority over the core guild
          rules, both the Captain and the Manager have the ability to add new
          supplementary rules to the guild's policy. This allows the Manager to
          contribute to the guild's governance without requiring the Captain's
          direct involvement in every policy update.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The Captain can create, modify, delete, and add any rules without
            restriction.
          </li>
          <li>
            The Manager can add new supplementary rules to the guild policy.
            These additions are logged with the Manager's name and the date of
            addition.
          </li>
          <li>
            The Vice Captain does not have the authority to add, modify, or
            delete guild rules — this is a Captain and Manager-level function.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>31. Restrictions on Rule Modification</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Manager's rule-addition authority comes with the following
          restriction:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The Manager can add new rules but cannot delete, modify, or override
            any rule that was created by the Captain.
          </li>
          <li>
            Only the Captain can delete or modify existing guild rules —
            including rules added by the Manager.
          </li>
          <li>
            This ensures that the Captain retains ultimate authority over the
            guild's governance framework — Managers contribute to it but cannot
            undermine it.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: Guild members who feel that a Manager-added rule is
            inappropriate or inconsistent with the guild's direction should
            raise this with the Captain directly. The Platform does not
            adjudicate internal guild rule disputes.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>32. Platform Rules Override Guild Rules</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Guild internal rules operate within the boundaries set by the
          Platform's policies — they cannot override, modify, or contradict any
          rule established in the Corpse Terms &amp; Conditions, the Account
          Suspension &amp; Ban T&amp;C, the Arena Joining T&amp;C, or this Guild
          Policy. In the event of any conflict between a guild's internal rules
          and Platform policies, Platform policies prevail without exception.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            A guild cannot establish internal rules that require members to
            engage in conduct that violates Platform policies — for example,
            requiring members to deliberately lose arenas, share account
            credentials, or violate the Arena T&amp;C's code of conduct.
          </li>
          <li>
            If a guild's internal rules are found to require or encourage
            Platform policy violations, the Platform may issue warnings,
            suspend, or dissolve the guild as described in Part XI.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART VIII — GUILD ELO &amp; LEADERBOARD</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>33. Guild ELO — Separate from Player ELO</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every guild on the Platform has its own ELO score — a collective
          competitive rating that is entirely separate from the individual ELO
          scores of its members. A player's individual ELO score is not affected
          by guild membership, and a guild's ELO score is not simply the average
          of its members' individual ELO scores.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Guild ELO reflects the guild's collective competitive performance —
          specifically how the guild's members perform when competing together
          in arenas as a guild squad. It is a measure of the guild as a
          competitive unit, not of its individual components.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>34. How Guild ELO Is Calculated</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Guild ELO is calculated by the Platform's ELO engine based on the
          collective performance of guild members when competing in arenas
          together. The key principles of guild ELO calculation are:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Guild ELO increases when guild members win or perform well in arenas
            as a coordinated guild squad.
          </li>
          <li>
            Guild ELO decreases when guild members lose or perform poorly in
            arenas as a guild squad.
          </li>
          <li>
            The magnitude of ELO change depends on the ELO rating difference
            between competing guilds — beating a higher-ELO guild increases your
            guild ELO more than beating a lower-ELO guild.
          </li>
          <li>
            Guild ELO updates in real time after every arena in which guild
            members participate as a squad.
          </li>
          <li>
            Individual arena performances by guild members who are competing as
            part of non-guild squads do not directly affect guild ELO — only
            performances as a guild squad count toward guild ELO.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: The specific formula and weighting factors used in guild ELO
            calculation are proprietary to Corpse and constitute part of the
            Company's intellectual property. The Company does not publicly
            disclose the precise algorithm.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>35. Guild Leaderboard</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          All guilds on the Platform are ranked against each other on a public
          guild leaderboard based on their guild ELO scores. The guild
          leaderboard:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Is publicly visible to all registered users and, where applicable,
            guest users.
          </li>
          <li>
            Updates in real time as guild ELO scores change after each arena.
          </li>
          <li>
            Displays each guild's name, tag, verified badge (if earned), ELO
            score, and rank position.
          </li>
          <li>
            May be filtered by region, game title, or time period — enabling
            players, organisers, and sponsors to identify top guilds within
            specific competitive contexts.
          </li>
          <li>
            Is the primary metric used by the Platform for talent discovery —
            top-ranking guilds are featured prominently in the Platform's
            esports ecosystem.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>36. Impact of Captain Ban on Guild ELO</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If the Captain of a guild is permanently banned from the Platform, the
          following impact on guild ELO applies:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The guild's ELO score decreases to reflect the loss of the Captain's
            competitive contribution — the specific ELO reduction is calculated
            by the Platform's ELO engine based on the Captain's ELO weight
            within the guild.
          </li>
          <li>
            Guild members remain in the guild — the ban of the Captain does not
            trigger dissolution of the guild.
          </li>
          <li>
            The Vice Captain automatically assumes the Captain role immediately
            upon the permanent ban being applied.
          </li>
          <li>
            The guild continues to compete and accumulate ELO under the new
            Captain's leadership.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART IX — GUILD VERIFIED BADGE</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>37. What the Verified Badge Is</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Guild Verified Badge is an official recognition mark awarded by
          the Company to guilds that have reached specific achievement levels on
          the Platform. The badge:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Is displayed prominently on the guild's public profile.</li>
          <li>Is displayed on the guild tag shown on all member profiles.</li>
          <li>
            Signals to other players, organisers, and sponsors that the guild
            has achieved a recognised level of competitive standing and platform
            engagement.
          </li>
          <li>
            Is awarded and managed by the Company — it cannot be purchased or
            obtained through any means other than legitimate guild level
            progression.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>38. How a Guild Earns the Verified Badge</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Guild Verified Badge is tied to the guild's level progression on
          the Platform. Guilds earn levels through a combination of competitive
          performance, member activity, and platform engagement — measured by
          the Platform's guild progression system.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            As a guild accumulates ELO, participates in arenas, and grows its
            competitive record, it progresses through guild levels.
          </li>
          <li>
            The Verified Badge is awarded when a guild reaches a specific guild
            level threshold as determined by the Platform's progression system.
          </li>
          <li>
            The badge is awarded automatically by the Platform when the
            threshold is reached — no application or manual review process is
            required.
          </li>
          <li>
            If a guild's level drops below the threshold due to ELO decline or
            reduced activity, the badge may be revoked at the Platform's
            discretion.
          </li>
          <li>
            The specific guild level required to earn the Verified Badge is
            communicated within the Platform's guild progression interface and
            may be updated by the Company from time to time.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART X — GUILD CONDUCT &amp; PROHIBITED BEHAVIOUR</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>39. Guild-Level Prohibited Conduct</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following conduct is prohibited at the guild level — meaning that
          if a guild as an entity, or its leadership in their capacity as guild
          representatives, engages in these behaviours, the guild itself may
          face suspension or dissolution under Part XI:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Coordinated match fixing — the guild organising or directing its
            members to deliberately lose arenas, manipulate results, or fix
            outcomes for financial or competitive gain.
          </li>
          <li>
            Impersonating another guild — adopting a name, tag, or identity
            designed to be confused with another existing guild on the Platform.
          </li>
          <li>
            Coordinated harassment — the guild as a unit targeting, harassing,
            or bullying individual players, other guilds, or Platform staff.
          </li>
          <li>
            Exploiting the guild system to manipulate ELO rankings — for
            example, creating multiple guilds controlled by the same individuals
            to artificially inflate guild ELO scores.
          </li>
          <li>
            Operating a guild in violation of Platform policies — establishing
            internal guild rules that require or encourage members to violate
            the Corpse T&amp;C, Arena T&amp;C, or any other Platform policy.
          </li>
          <li>
            Using the guild structure to facilitate financial fraud — for
            example, using the guild's collective participation in arenas to
            coordinate prize pool manipulation.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>40. Member-Level Obligations Within a Guild</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          As a guild member, you are individually responsible for your own
          conduct on the Platform — both within guild activities and outside of
          them. Being a member of a guild does not diminish your individual
          obligations under the Corpse T&amp;C and other Platform policies.
          Additionally, as a guild member, you agree to:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Represent the guild's name and tag with conduct consistent with the
            Platform's community standards — your in-game behaviour and
            interactions with other players reflect on your guild.
          </li>
          <li>
            Comply with the guild's internal rules established by the Captain —
            to the extent those rules are consistent with Platform policies.
          </li>
          <li>
            Not use the guild platform to coordinate conduct that violates
            Platform policies — including match fixing, result manipulation, or
            harassment of other users.
          </li>
          <li>
            Promptly inform the guild Captain or the Platform's support team if
            you become aware of conduct within the guild that violates Platform
            policies.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>41. Reporting a Guild for Misconduct</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Any registered user on the Platform may report a guild for conduct
          that violates this Guild Policy or the Platform's Corpse Terms &amp;
          Conditions. Reports can be submitted through the Platform's in-app
          reporting mechanism:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Navigate to the guild's public profile page.</li>
          <li>Tap the 'Report Guild' option.</li>
          <li>
            Select the category of misconduct being reported and provide a
            description and any supporting evidence.
          </li>
          <li>
            The report is submitted to the Platform's trust and safety team for
            review.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Guild reports are reviewed by the trust and safety team in accordance
          with the same investigation standards applied to individual player
          reports. The reporting user is notified of the outcome of the
          investigation to the extent permitted by the Platform's privacy
          obligations.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>PART XI — CORPSE'S AUTHORITY OVER GUILDS</strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>42. Right to Suspend a Guild</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company reserves the right to suspend a guild — temporarily
          restricting the guild's ability to participate in arenas, accept new
          members, and appear on the leaderboard — in the following
          circumstances:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The guild is under active investigation for a conduct violation
            reported by users, detected by the Platform's systems, or identified
            through the Platform's trust and safety review.
          </li>
          <li>
            The guild's Captain or multiple leadership members have received
            flags or suspensions that raise concerns about the guild's
            competitive integrity.
          </li>
          <li>
            The guild name or profile content is found to violate the content
            rules in Section 5 and a name change has not been promptly executed
            by the Captain.
          </li>
          <li>
            The guild is suspected of coordinated conduct violations pending
            investigation and resolution.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A guild suspension is a temporary measure pending investigation. The
          guild Captain is notified of the suspension and the reason for it. The
          suspension is lifted upon resolution of the investigation — either
          through clearance (suspension lifted) or through dissolution (if
          violations are confirmed).
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>43. Right to Dissolve a Guild</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company reserves the right to permanently dissolve a guild in the
          following circumstances:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The guild is confirmed to have engaged in coordinated match fixing,
            result manipulation, or prize pool fraud as a guild entity.
          </li>
          <li>
            The guild's leadership has been found to have established or
            directed internal rules that systematically violate Platform
            policies.
          </li>
          <li>
            The guild has been suspended multiple times for conduct violations
            and continues to engage in prohibited behaviour after each
            suspension.
          </li>
          <li>
            The guild's Captain and Vice Captain have both been permanently
            banned from the Platform, leaving no eligible leadership succession.
          </li>
          <li>
            The guild's name and conduct are found to be fundamentally
            incompatible with the Platform's community standards — for example,
            a guild established specifically to organise or promote cheating.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Guild dissolution is permanent — once a guild is dissolved, it cannot
          be reinstated. The guild's ELO score, match history, and leaderboard
          ranking are removed from public display. Guild members retain their
          individual accounts and ELO scores and may join or create other guilds
          subject to their individual account status.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Guild dissolution results in the permanent loss of the
            guild's competitive history and leaderboard position. Members of a
            dissolved guild bear no individual disciplinary consequence unless
            they were personally involved in the conduct that led to dissolution
            — individual disciplinary actions are governed by the Account
            Suspension &amp; Ban T&amp;C.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>44. Captain Permanently Banned — Guild Succession</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If the Captain of a guild is permanently banned from the Platform for
          any reason, the following succession process applies automatically:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The Vice Captain immediately and automatically assumes the Captain
            role — no manual transfer or Platform intervention is required.
          </li>
          <li>
            The newly promoted Captain has full Captain authority from the
            moment of succession — including the ability to appoint a new Vice
            Captain, manage guild roles, and set guild policy.
          </li>
          <li>
            The guild's ELO score decreases to reflect the loss of the banned
            Captain's competitive contribution, as described in Section 36.
          </li>
          <li>
            The guild continues to operate normally under the new Captain's
            leadership.
          </li>
          <li>
            If there is no Vice Captain at the time of the Captain's ban — the
            Platform will place the guild in a temporary administered state and
            notify the senior active Manager to initiate a leadership
            transition. If no leadership succession can be established within 30
            days, the Platform may dissolve the guild.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>45. Force-Rename of Guild Name</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If a guild's name is found to violate the content rules in Section 5,
          the Company may force-rename the guild. The force-rename process:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The Company notifies the guild Captain via in-app notification and
            email of the naming violation and requires the Captain to change the
            guild name within 48 hours.
          </li>
          <li>
            If the Captain does not change the guild name within 48 hours, the
            Platform automatically assigns a temporary placeholder name to the
            guild.
          </li>
          <li>
            The Captain can then set a new compliant name through the normal
            name change function.
          </li>
          <li>
            The first instance of a naming violation results in a warning to the
            Captain. Subsequent naming violations will result in a flag under
            the Account Suspension &amp; Ban Policy.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            PART XII — GOVERNING LAW, DISPUTE RESOLUTION &amp; CONTACT
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>46. Governing Law</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Guild Policy shall be governed by and construed in accordance
          with the laws of India, including the Information Technology Act 2000
          and the IT (Intermediary Guidelines and Digital Media Ethics Code)
          Rules 2021, as amended from time to time. This Guild Policy operates
          within and supplements the Corpse Terms &amp; Conditions of the Corpse
          platform.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>47. Dispute Resolution</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Platform does not adjudicate internal guild disputes —
          disagreements between guild members about internal guild governance,
          role assignments, internal rules, or internal decisions are matters to
          be resolved within the guild. The Platform's support team will not
          intervene in internal guild management disputes.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          However, disputes involving Platform policy violations — including but
          not limited to guild conduct violations, wrongful guild suspension or
          dissolution, or conduct by guild members that violates the Corpse
          T&amp;C — may be raised with the Platform's support team. Such
          disputes are handled as follows:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Raise the matter via in-app support ticket with a full description
            and supporting evidence.
          </li>
          <li>
            The trust and safety team will review and respond within 48 hours.
          </li>
          <li>
            If unresolved after the support process — the matter may be
            escalated through good-faith negotiation directed to
            <a href="mailto:legal@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">legal@corpsearena.com</a>. If unresolved within 30 days, binding arbitration
            under the Arbitration and Conciliation Act, 1996 applies with the
            seat of arbitration at Guwahati, Assam, India.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>48. Contact</strong>
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
                  <strong>Guild Report</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">In-app: Guild Profile &gt; Report Guild</p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Guild Misconduct Query</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a> via in-app support ticket
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>Guild Policy Dispute</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <a href="mailto:legal@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">legal@corpsearena.com</a> — response within 30 days
                </p>
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <strong>General Guild Support</strong>
                </p>
              </td>
              <td className="border border-white/20 p-3">
                <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                  <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a> — response within 48 hours
                </p>
              </td>
            </tr>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Guild Policy was last updated in April 2026 and is effective from
          May 1, 2026.
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
