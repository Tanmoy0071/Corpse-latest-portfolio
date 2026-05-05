'use client';
import DocShell, { DocTable, DocList, DocH2, DocH3, DocP, DocStrong, DocEm, DocLink, DocNote } from './DocPage';

export default function ArenaTermsPage() {
  return (
    <DocShell
      tag="Legal · Arena Rules"
      title="Arena Joining Terms & Conditions"
      subtitle="Eligibility · Registration · Match Rules · Results · Disputes — Launch Game: Free Fire (Garena Free Fire MAX)"
      effectiveDate="May 1, 2026"
      lastUpdated="April 2026"
    >
      <DocTable rows={[
        [<DocStrong>Legal Entity</DocStrong>, '[CORPSE ESPORTS PRIVATE LIMITED]'],
        [<DocStrong>Launch Game</DocStrong>, 'Free Fire (Garena Free Fire MAX)'],
        [<DocStrong>Game Publisher</DocStrong>, 'Garena Online Private Limited'],
        [<DocStrong>Governed By</DocStrong>, 'Master T&C | Money Deposit & Receive Policy | Account Suspension & Ban T&C'],
        [<DocStrong>Jurisdiction</DocStrong>, 'India exclusively'],
        [<DocStrong>Binding On</DocStrong>, 'All Players | Captains | Squad Members | Free & Paid Arenas'],
        [<DocStrong>Support Contact</DocStrong>, <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
        [<DocStrong>Legal Contact</DocStrong>, <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
      ]} />

      <DocNote><DocEm>By registering for or participating in any Arena on the Corpse platform — whether free or paid — you confirm that you have read, understood, and agree to be bound by these Arena Joining Terms & Conditions in their entirety.</DocEm></DocNote>

      <DocH2>PART I — Introduction & Scope</DocH2>

      <DocH2>1. What the Arena Is</DocH2>
      <DocP>The Arena is the competitive tournament environment on the Corpse platform — a structured, organised, and verified competitive space where players form squads, register for matches, compete against other squads, and earn prizes. Unlike informal tournaments organised through WhatsApp groups or Discord servers, every Arena on the Corpse platform operates within a defined framework of rules, timelines, verified identities, and transparent results.</DocP>
      <DocP>Every Arena on the Platform is created and managed by a verified Organiser using Corpse's organiser tools. The Platform provides the infrastructure — registration, squad management, room card distribution, result submission, and prize disbursement — while the Organiser configures the specific parameters of each Arena within the options provided by their selected preset.</DocP>

      <DocH2>2. Scope — Free & Paid Arenas</DocH2>
      <DocP>These Arena Joining Terms & Conditions apply to every Arena on the Platform — both free arenas (no entry fee, no prize pool) and paid arenas (entry fee paid by Captain, prize pool funded by the Organiser's security deposit). The rules governing eligibility, squad formation, match conduct, result submission, and disputes apply equally to both Arena types unless specifically distinguished.</DocP>

      <DocH2>3. Launch Game — Free Fire</DocH2>
      <DocP>At launch, the Corpse platform supports competitive arenas for one game title: Free Fire (Garena Free Fire MAX), published by Garena Online Private Limited ("Garena"). All Arena rules, match formats, squad sizes, and conduct standards described in these Arena T&C are designed specifically for Free Fire gameplay.</DocP>
      <DocNote><DocEm>Free Fire is a trademark and intellectual property of Garena Online Private Limited. Corpse is an independent platform and is not affiliated with, endorsed by, or officially partnered with Garena. Use of Free Fire's game infrastructure — including custom rooms — is conducted in accordance with Garena's terms of service for custom room creation.</DocEm></DocNote>

      <DocH2>4. Relationship to Other Corpse Policies</DocH2>
      <DocTable rows={[
        [<DocStrong>Policy</DocStrong>, <DocStrong>What It Governs in Arena Context</DocStrong>],
        ['Master Terms & Conditions', 'General platform rules, user obligations, prohibited conduct, and governing law'],
        ['Money Deposit & Receive Policy', 'Entry fee payment, prize disbursement, refunds, and financial consequences of disqualification'],
        ['KYC & KYC Modification T&C', 'KYC requirements for Captains of paid arenas and prize recipients'],
        ['Account Suspension & Ban T&C', 'Flag system, warnings, suspensions, and bans triggered by Arena conduct violations'],
        ['IP, Trademark & Copyright Policy', 'Ownership of Arena data, match records, and Platform content'],
      ]} />

      <DocH2>PART II — Arena Types & Formats</DocH2>

      <DocH2>5. Free Arenas</DocH2>
      <DocP>Free arenas are competitive matches on the Platform with no entry fee and no prize pool. They are open to all Registered Users who meet the eligibility requirements. Free arenas:</DocP>
      <DocList items={[
        'Do not require KYC verification from the Captain.',
        'Do not involve any financial transaction — no entry fee is paid and no prize money is disbursed.',
        'Are subject to all non-financial Arena T&C — eligibility, squad formation, match conduct, result submission, and dispute rules all apply in full.',
        "Contribute to the Platform's ELO ranking system — performance in free arenas affects a player's ELO score equally to paid arenas.",
        "May have a prize in the form of in-app recognition, badges, or credits — but no monetary prize pool unless the Organiser has specifically configured a non-cash prize.",
      ]} />

      <DocH2>6. Paid Arenas</DocH2>
      <DocP>Paid arenas are competitive matches where players pay an entry fee to participate and compete for a monetary prize pool funded by the Organiser's security deposit. Paid arenas:</DocP>
      <DocList items={[
        'Require the Captain to be KYC verified before paying the entry fee.',
        'Require the Captain to pay the entry fee on behalf of their squad using the payment methods supported by Razorpay.',
        "Have a guaranteed prize pool — the Organiser's security deposit is held in escrow before the Arena goes live, ensuring prize money is always available.",
        'Are subject to TDS deduction of 30% on prize winnings before disbursement to the Captain\'s KYC-verified bank account.',
        'Are fully governed by the Money Deposit & Receive Policy for all financial aspects.',
      ]} />

      <DocH2>7. Free Fire Game Modes Supported</DocH2>
      <DocTable rows={[
        [<DocStrong>Game Mode</DocStrong>, <DocStrong>Description</DocStrong>, <DocStrong>Applicable Arena Format</DocStrong>],
        ['Battle Royale', "The classic Free Fire survival format — squads compete to be the last team standing on the map. Players are eliminated when their health reaches zero and cannot be revived after final elimination.", 'Squad format as configured in the Organiser\'s preset'],
        ['Clash Squad', 'A tactical round-based format — two teams of 4 face each other in close-quarters combat. Teams earn rounds by eliminating the opposing team. The first team to win a set number of rounds wins the match.', '4v4 format'],
      ]} />

      <DocH2>8. Squad Formats & Preset Structure</DocH2>
      <DocList items={[
        'Solo — 1 player per squad. Each participant registers individually as both Captain and sole squad member.',
        'Duo — 2 players per squad. Captain registers and invites one squad member.',
        'Squad — 4 players per squad. Captain registers and invites three squad members for Battle Royale formats.',
        'Clash Squad — 4 players per team (4v4). Each team of 4 registers as a squad.',
      ]} />

      <DocH2>9. Map & Room Configuration</DocH2>
      <DocP>The Free Fire map and custom room settings for each Arena are configured by the Organiser within the options provided by their selected preset. This may include: the specific Free Fire map (e.g., Bermuda, Purgatory, Kalahari), custom room settings including match duration and zone settings, and the room ID and password shared with registered players via the Platform's room card system.</DocP>

      <DocH2>PART III — Player Eligibility</DocH2>

      <DocH2>10. Account Requirements</DocH2>
      <DocP>To be eligible to join any Arena — free or paid — a player must:</DocP>
      <DocList items={[
        'Be a Registered User with an active, verified account on the Platform. Guest Users cannot register for or participate in any Arena.',
        'Have their account in good standing — accounts that are suspended or permanently banned are ineligible to join any Arena.',
        'Have a valid Free Fire in-game ID and in-game username registered on their Platform account.',
        'Have agreed to these Arena T&C, the Master Terms & Conditions, and all applicable Platform policies.',
      ]} />

      <DocH2>11. Age & KYC Requirements</DocH2>
      <DocTable rows={[
        [<DocStrong>User Type</DocStrong>, <DocStrong>Free Arena Eligibility</DocStrong>, <DocStrong>Paid Arena — As Captain</DocStrong>, <DocStrong>Paid Arena — As Squad Member</DocStrong>],
        ['Standard Registered User (18+, KYC verified)', 'Yes — full access', 'Yes — KYC required and must be complete before paying entry fee', 'Yes — no KYC required as squad member'],
        ['Standard Registered User (18+, KYC not yet done)', 'Yes — full access', 'No — must complete KYC first', 'Yes — no KYC required as squad member'],
        ['Minor User (under 18)', "Yes — as squad member only, via Captain's invite", 'No — cannot be Captain of any Arena', "Yes — if invited by KYC-verified Captain"],
        ['Suspended User', 'No — ineligible for all Arenas during suspension', 'No', 'No'],
        ['Permanently Banned User', 'No — ineligible permanently', 'No', 'No'],
      ]} />

      <DocH2>12. In-Game ID Requirement</DocH2>
      <DocList items={[
        "Must be the player's actual active Free Fire in-game ID — not a placeholder, fake ID, or another player's ID.",
        'Is verified by the Platform before the Arena starts.',
        'Must be the same ID used when joining the actual Free Fire custom room.',
        'Cannot be changed or updated during an active Arena registration.',
      ]} />
      <DocNote><DocStrong>Important: Using a different Free Fire in-game ID than the one registered on your Corpse account will result in immediate disqualification and may trigger a flag under the Suspension Policy.</DocStrong></DocNote>

      <DocH2>13. ELO-Based Matchmaking</DocH2>
      <DocP>Arena eligibility may also be restricted by ELO tier — some Arenas may be configured by the Organiser to be open only to players within a specific ELO bracket. Players outside the configured ELO range for a specific Arena cannot register for that Arena, regardless of whether they meet all other eligibility requirements.</DocP>

      <DocH2>14. Ineligible Players</DocH2>
      <DocP>The following users are ineligible to participate in any Arena on the Platform: Guest Users (no account), Suspended Users (for the duration of the suspension), Permanently Banned Users (lifetime ineligibility), Minor Users acting as Captains in any Arena (free or paid), Standard Users without a completed KYC attempting to act as Captain in a paid Arena, and Users whose Free Fire in-game ID is not registered on their Corpse account.</DocP>

      <DocH2>PART IV — Arena Timeline</DocH2>

      <DocH2>15. The Five Stages of Every Arena</DocH2>
      <DocTable rows={[
        [<DocStrong>Stage</DocStrong>, <DocStrong>Description</DocStrong>, <DocStrong>Who Acts</DocStrong>],
        ['1. Registration Open', 'Arena is listed and open for squad registration', 'Captains register their squads; squad members accept invites'],
        ['2. Registration Close', 'Registration closes at the cut-off time set by the Organiser', 'No new registrations accepted after this point'],
        ['3. Room Card Available', 'Room card (room ID + password) is generated and shared with all registered players 30 minutes before match start', 'Organiser generates and the Platform distributes the room card'],
        ['4. Match Start', 'The actual Free Fire custom room match begins', 'All registered players participate'],
        ['5. Result Submission', 'Players and Organiser submit match results within the submission window', 'Players and Organiser submit results; Corpse verifies and confirms'],
      ]} />

      <DocH2>PART V — Squad Formation & Registration</DocH2>

      <DocH2>20. Squad Creation by Captain</DocH2>
      <DocP>To register a squad for an Arena, the Captain must: select the Arena from the Platform's Arena listings, choose to register as a Captain and create a squad for that Arena, set the squad name (if applicable), send invite tokens to the squad members they wish to include, and (for paid Arenas) pay the entry fee using their KYC-verified payment method.</DocP>

      <DocH2>23. Registration Lock — No Withdrawal</DocH2>
      <DocP>Once a squad is registered for an Arena, registration is locked. The Captain cannot withdraw the squad from the Arena after registration is complete. There are no refunds for entry fees after registration, regardless of the reason for withdrawal.</DocP>

      <DocH2>24. Entry Fee — Non-Refundable on Registration</DocH2>
      <DocP>The entry fee paid by the Captain at the time of registration is non-refundable once the registration is confirmed. The only exception is if the Arena is cancelled by Corpse before the match starts — in which case a full refund of the entry fee is issued to the Captain's Platform wallet.</DocP>

      <DocH2>PART VI — In-Game Identity & Device Rules</DocH2>

      <DocH2>27. Mandatory In-Game ID Verification</DocH2>
      <DocP>The Platform cross-references the in-game ID on the player's Profile account against the squad registration for the Arena. Any player whose in-game ID cannot be verified against their registered Corpse account will be disqualified from the Arena.</DocP>

      <DocH2>28. Emulator Ban — Mobile Only</DocH2>
      <DocP>The Corpse platform requires all players to participate in Free Fire arenas using the mobile version of Free Fire (Garena Free Fire MAX) on a physical mobile device. Participation via emulators (software that simulates a mobile device on a PC or other platform) is strictly prohibited and will result in immediate disqualification of the entire squad.</DocP>

      <DocH2>PART VII — Room Card & Match Start</DocH2>

      <DocH2>30. How the Room Card Is Generated & Shared</DocH2>
      <DocP>The Organiser creates the custom room directly within Free Fire using Free Fire's custom room feature. The resulting room ID and room password are entered into the Platform by the Organiser and distributed automatically to all registered players via the Platform's room card system — accessible in the Platform app 30 minutes before the scheduled match start time.</DocP>

      <DocH2>31. Room Card Confidentiality</DocH2>
      <DocP>The room card (room ID and password) is distributed exclusively to registered players for the specific Arena and must be kept confidential. Sharing the room card with any non-registered player — intentionally or accidentally — is a prohibited act and will result in disqualification of the squad whose member shared the room card, and may result in a flag under the Suspension Policy.</DocP>

      <DocH2>PART VIII — During the Match — Code of Conduct</DocH2>

      <DocH2>35. Dual Rule Applicability — Corpse & Garena</DocH2>
      <DocP>During any Arena match, players are simultaneously subject to two sets of rules: these Arena T&C (the Corpse Platform rules governing competitive conduct, fair play, and results) and Garena's Free Fire Terms of Service (the game publisher's rules governing in-game behaviour, account use, and permitted software).</DocP>

      <DocH2>36. Prohibited In-Game Software & Tools</DocH2>
      <DocP>The use of any software, tool, script, bot, macro, exploit, or modification that provides an unfair competitive advantage is strictly prohibited during any Corpse Arena. This includes but is not limited to: aimbots, wallhacks, speed hacks, lag switches, game file modifications, and any other third-party software that interacts with the Free Fire client in a manner not authorised by Garena.</DocP>

      <DocH2>PART IX — Result Submission Process</DocH2>

      <DocH2>41. The Auto-Capture System</DocH2>
      <DocP>At the end of each match, the Platform's Auto-Capture system automatically captures the match result from the Free Fire game data where technically possible. Auto-capture results are subject to verification by both the player/squad and the Organiser.</DocP>

      <DocH2>44. The 60-Second Upload Window</DocH2>
      <DocP>After the match ends, both the Captain (on behalf of their squad) and the Organiser have a 60-second window to upload or confirm the match result screenshot. If the 60-second window expires without a result being uploaded, the Auto-Capture result (if available) is used as the default. If no Auto-Capture result is available and no result is uploaded within the window, the result for that squad is treated as a No Result.</DocP>

      <DocH2>PART X — Result Disputes</DocH2>

      <DocH2>47. Right to Dispute</DocH2>
      <DocP>Any registered player or squad Captain may dispute a match result if they believe the result as submitted or verified by the Organiser is inaccurate, fraudulent, or based on disqualification grounds that are incorrect.</DocP>

      <DocH2>48. Dispute Submission Process</DocH2>
      <DocP>Disputes must be submitted through the Platform's in-app dispute system within 2 hours of the match result being confirmed on the Platform. Disputes submitted after this window will not be considered. All disputes must include: the specific result being disputed, the reason for the dispute, and supporting evidence.</DocP>

      <DocH2>50. Corpse's Review & Decision</DocH2>
      <DocP>The Company's dispute resolution team will review all valid disputes. The review timeline is up to 72 hours from receipt of a valid dispute with complete evidence. During the dispute review period, prize disbursement for the disputed match is paused for all parties involved in the dispute.</DocP>

      <DocH2>PART XI — Disqualification</DocH2>

      <DocH2>53. Grounds for Disqualification</DocH2>
      <DocList items={[
        "Using an in-game ID or account that is not registered on the player's Corpse account.",
        'Using an emulator to participate in the match.',
        'Using prohibited third-party software, hacks, or exploits during the match.',
        'Participating via a suspended or permanently banned Corpse account.',
        'Sharing the room card with non-registered players, resulting in non-registered players entering the match.',
        'Match fixing or intentionally losing to manipulate results.',
        'Failing to submit a match result within the 60-second window (in conjunction with Auto-Capture failure).',
      ]} />

      <DocH2>PART XII — Platform Liability</DocH2>

      <DocH2>56. Game Server & Publisher Issues</DocH2>
      <DocP>The Corpse platform is not responsible for any technical failures, server outages, disconnections, or gameplay issues caused by Garena's Free Fire game infrastructure. If a match is interrupted or cancelled due to Garena server issues, the Platform will determine the appropriate resolution.</DocP>

      <DocH2>57. Player Device & Connectivity Issues</DocH2>
      <DocP>The Platform is not responsible for any player's device failure, internet disconnection, or connectivity issues during a match. If a player disconnects from a match due to device or connectivity issues, the match proceeds without them. No result adjustments are made for individual player disconnections due to player-side issues.</DocP>

      <DocH2>58. Arena Cancelled by Corpse</DocH2>
      <DocP>If the Platform cancels an Arena before the match starts, all registered squads receive a full refund of their entry fee to their Platform wallet. The Company is not liable for any additional losses or costs incurred by players as a result of an Arena cancellation.</DocP>

      <DocH2>PART XIII — Prohibited Conduct — Full Reference</DocH2>

      <DocH2>60. Complete List of Prohibited Acts</DocH2>
      <DocList items={[
        'Using prohibited third-party software, hacks, or exploits during the match.',
        'Match fixing or intentionally losing.',
        'Sharing the room card with non-registered players.',
        'Participating with a different in-game ID than the one registered on your Corpse account.',
        'Using an emulator to participate in any Arena match.',
        'Withdrawing from a match after it has started without completing the match.',
        'Conducting or facilitating any form of financial fraud related to entry fees or prizes.',
        'Filing a false or frivolous dispute.',
        'Harassing or threatening another player, organiser, or Company employee.',
        'Attempting to access or interfere with another player\'s Platform account.',
        'Violating any of Garena\'s Terms of Service in connection with a Corpse Arena.',
      ]} />

      <DocH2>PART XIV — Governing Law, Dispute Resolution & Contact</DocH2>
      <DocP>These Arena T&C are governed by the laws of India. Any dispute arising out of or in connection with these Arena T&C shall be subject to the jurisdiction of the courts of Assam, India. For all arena-related support enquiries: <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink> | Legal matters: <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink></DocP>
    </DocShell>
  );
}
