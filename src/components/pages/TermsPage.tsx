'use client';
import DocShell, {
  DocTable, DocList, DocH2, DocH3, DocP, DocStrong, DocEm, DocLink, DocNote,
} from './DocPage';

export default function TermsPage() {
  return (
    <DocShell
      tag="Legal · Terms"
      title="Master Terms &amp; Conditions"
      subtitle="Players Side — Full Platform. Profile • ELO • Ecosystem • Arena • Guild • KYC • Payments • Conduct"
      version="1.0"
      effectiveDate="May 1, 2026"
      lastUpdated="April 2026"
    >
      <DocNote>
        <DocEm>
          Binding on: All Registered Users | All Players | All Captains | All Squad Members
        </DocEm>
      </DocNote>

      <DocTable rows={[
        [<DocStrong key="a">Legal Entity</DocStrong>, 'CORPSE ESPORTS PRIVATE LIMITED'],
        [<DocStrong key="b">CIN</DocStrong>, 'TO BE UPDATED UPON NEW ENTITY REGISTRATION'],
        [<DocStrong key="c">Address</DocStrong>, 'Silchar Road Ghat Line, Subashnagar, Karimganj - 788710, Assam, India'],
        [<DocStrong key="d">Governed By</DocStrong>, 'IT Act 2000 | DPDP Act 2023 | Consumer Protection Act 2019 | IT Rules 2021'],
        [<DocStrong key="e">Jurisdiction</DocStrong>, 'India exclusively'],
        [<DocStrong key="f">Effective Date</DocStrong>, 'May 1, 2026'],
        [<DocStrong key="g">Last Updated</DocStrong>, 'April 2026'],
        [<DocStrong key="h">Support Contact</DocStrong>, <DocLink key="sc" href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
        [<DocStrong key="i">Legal Contact</DocStrong>, <DocLink key="lc" href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
      ]} />

      <DocNote>
        <DocEm>
          By downloading, installing, accessing, or using the Corpse platform in any manner, you confirm that you have read, understood, and agree to be bound by these Terms &amp; Conditions in their entirety. These Terms are binding regardless of whether you actively accept them — continued use of the Platform constitutes acceptance.
        </DocEm>
      </DocNote>

      <DocH2>PART I — Introduction &amp; Acceptance</DocH2>

      <DocH3>1. Purpose &amp; Scope</DocH3>
      <DocP>
        These Terms &amp; Conditions — Players Side (&quot;Players T&amp;C&quot; or &quot;Terms&quot;) constitute the comprehensive, binding legal agreement governing every aspect of a player's use of the Corpse platform, mobile application, and all associated services (collectively, the &quot;Platform&quot;), operated by CORPSE ESPORTS PRIVATE LIMITED (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
      </DocP>
      <DocP>
        These Terms cover the complete player experience on the Platform — from account creation and profile management through ELO ranking, ecosystem progression, squad formation, arena participation, guild membership, KYC verification, financial transactions, leaderboards, notifications, and account management. They apply to every registered user of the Platform in their capacity as a player, regardless of whether they compete in paid arenas, free arenas, or use the Platform purely for social and community features.
      </DocP>

      <DocH3>2. Acceptance of Terms</DocH3>
      <DocP>
        By downloading, installing, accessing, or using the Platform in any manner — including browsing as a Guest User — you accept these Terms in their entirety. Acceptance is not conditional on your having read every word — by using the Platform, you are deemed to have accepted these Terms unconditionally.
      </DocP>
      <DocNote>
        <DocStrong>Important: These Terms are a legally binding contract under the Information Technology Act, 2000 and the Indian Contract Act, 1872. By using the Platform, you represent that you have the legal capacity to enter into a binding agreement under Indian law.</DocStrong>
      </DocNote>

      <DocH3>3. Definitions</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">Term</DocStrong>, <DocStrong key="b">Definition</DocStrong>],
        ['Platform', 'The Corpse mobile application (iOS and Android), website, and all associated services operated by the Company'],
        ['Player', 'Any Registered User who uses the Platform to participate in arenas, form squads, join guilds, or engage with competitive features'],
        ['Captain', 'The Registered User who creates and leads a squad, pays entry fees, and receives prize money on behalf of the squad'],
        ['Squad', 'A temporary team of players registered together for a specific arena'],
        ['Guild', 'A persistent competitive team on the Platform with its own identity, ELO, and leadership structure'],
        ['Arena', 'A structured competitive tournament on the Platform — free or paid'],
        ['ELO', 'The Platform\'s proprietary skill rating system — a numerical score reflecting a player\'s competitive performance'],
        ['Ecosystem Pipeline', 'The Platform\'s six-tier player progression system from entry level to elite competitive status'],
        ['KYC', 'Know Your Customer verification — identity and financial verification required for financial transactions'],
        ['Magic Link', 'A secure, single-use, time-limited authentication link sent to a user\'s registered email for passwordless login'],
        ['Room Card', 'The custom match room ID and password distributed to registered players 30 minutes before an arena match starts'],
        ['Flag', 'A formal disciplinary record placed on a player\'s account following a confirmed rule violation'],
        ['In-Game ID', 'A player\'s unique identifier within a specific game title — verified and registered on the Platform'],
      ]} />

      <DocH3>4. Relationship to Other Corpse Policies</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">Policy</DocStrong>, <DocStrong key="b">What It Governs</DocStrong>],
        ['Master Terms &amp; Conditions', 'General platform rules, account creation, session management, account deletion — the foundational agreement for all users'],
        ['Arena Joining T&amp;C', 'Detailed rules for arena registration, match conduct, result submission, disputes, and disqualification'],
        ['Money Deposit &amp; Receive Policy', 'Entry fee payment, prize disbursement, refund policy, TDS, and all financial flows'],
        ['KYC &amp; KYC Modification T&amp;C', 'KYC verification process, data handling, modification procedure, and financial freeze during modification'],
        ['Account Suspension &amp; Ban T&amp;C', 'Flag system, warning process, suspension durations, permanent ban, and appeal mechanism'],
        ['Guild Policy', 'Guild creation, roles, unit tiers, membership rules, ELO, and conduct'],
        ['Sign Out Policy', 'Session management, voluntary sign-out, inactivity expiry, and force termination'],
        ['IP, Trademark &amp; Copyright Policy', 'Platform IP ownership, user licence, prohibited uses, and enforcement'],
        ['Account Creation &amp; Deletion Policy', 'Account creation eligibility, deletion process, data after deletion, and re-registration'],
        ['Privacy Policy', 'Collection, use, storage, and deletion of personal data'],
      ]} />

      <DocH2>PART II — Account &amp; Player Profile</DocH2>

      <DocH3>5. Account Creation &amp; Eligibility</DocH3>
      <DocP>To access the full features of the Platform, a user must create a Registered User account. By creating an account, you represent that:</DocP>
      <DocList items={[
        'All information provided during registration is accurate, complete, and current.',
        'You will maintain the accuracy of your account information throughout your use of the Platform.',
        'You have not previously been permanently banned from the Platform — banned users may only create new accounts under the conditions specified in the Account Suspension &amp; Ban T&amp;C.',
        'You will not create or maintain more than one account on the Platform at any time.',
      ]} />

      <DocH3>6. Access Tiers</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">User Type</DocStrong>, <DocStrong key="b">Age</DocStrong>, <DocStrong key="c">Arena (Squad Member)</DocStrong>, <DocStrong key="d">Arena (Captain)</DocStrong>, <DocStrong key="e">Guild</DocStrong>, <DocStrong key="f">KYC Required</DocStrong>],
        ['Guest User', 'Any', 'No', 'No', 'No', 'No'],
        ['Minor Registered User', 'Under 18', 'Yes — Captain\'s invite only', 'No — KYC required', 'No', 'No'],
        ['Standard Registered User', '18+', 'Yes', 'No — KYC required first', 'Yes', 'No'],
        ['KYC-Verified User', '18+', 'Yes', 'Yes', 'Yes', 'Yes'],
      ]} />

      <DocH2>PART IV — ELO Engine</DocH2>

      <DocH3>15. What ELO Is on Corpse</DocH3>
      <DocP>ELO on Corpse is a proprietary numerical skill rating that reflects a player's competitive performance across all arenas they have participated in. ELO is separate from the game publisher's in-game rankings — it is an independent measurement operated entirely by the Platform.</DocP>

      <DocH3>16. How Player ELO Is Calculated</DocH3>
      <DocP>ELO is calculated based on: arena placement (rank relative to other squads), margin of victory or defeat, relative ELO of opponents, game mode (Battle Royale vs Clash Squad), and arena type (free vs paid). The specific formula and weightings are the Company's intellectual property and are not disclosed.</DocP>

      <DocH3>17. ELO Going Up and Down</DocH3>
      <DocP>ELO increases when you perform better than expected relative to your opponents' ELO. ELO decreases when you perform worse than expected. Every completed arena affects your ELO — there is no way to opt out of ELO tracking after entering an arena.</DocP>

      <DocH3>20. Company's Right to Adjust ELO</DocH3>
      <DocP>The Company reserves the right to adjust a player's ELO at any time without notice for the following reasons: correction of calculation errors, removal of ELO gained through fraudulent means, reversal of ELO changes from disputed matches, and integrity enforcement following confirmed violations.</DocP>

      <DocH2>PART V — Ecosystem Pipeline — Player Progression</DocH2>

      <DocH3>22. The Six Progression Tiers</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">Tier</DocStrong>, <DocStrong key="b">Name</DocStrong>, <DocStrong key="c">ELO Range (Indicative)</DocStrong>],
        ['1', 'Initiate', '0 – 999'],
        ['2', 'Recruit', '1,000 – 1,999'],
        ['3', 'Operative', '2,000 – 2,999'],
        ['4', 'Specialist', '3,000 – 3,999'],
        ['5', 'Elite', '4,000 – 4,999'],
        ['6', 'Apex', '5,000+'],
      ]} />

      <DocH3>24. Seasonal Reset — 60% ELO Carry-Forward</DocH3>
      <DocP>At the end of each competitive season, all ELO scores are reset. Players carry forward 60% of their ELO into the new season. The remaining 40% is reset to zero. Season length and reset dates are announced via in-app notification at least 14 days in advance.</DocP>

      <DocH2>PART VII — Arena Participation</DocH2>

      <DocH3>35. Registration Lock — No Withdrawal</DocH3>
      <DocP>Once a squad's arena registration is confirmed (entry fee paid for paid arenas, or registration submitted for free arenas), the registration is locked. No withdrawal, cancellation, or refund is possible — except where the arena itself is cancelled by the organiser, in which case entry fees are refunded in full within 24 hours.</DocP>

      <DocH3>36. Room Card — 30 Minutes Before Match</DocH3>
      <DocP>The Room Card (custom match room ID and password) is delivered to all registered squad Captains 30 minutes before the match start time. The Captain is responsible for distributing the Room Card to squad members. Failure to check in to the match room within the check-in window will result in disqualification.</DocP>

      <DocH3>38. Match Conduct</DocH3>
      <DocList items={[
        'All squad members must play using the In-Game ID registered on the Platform.',
        'Emulators are not permitted. Mobile-only competition.',
        'Any form of cheating — hacks, aimbots, macros — results in immediate disqualification and a permanent ban.',
        'Deliberate loss of game connectivity to avoid defeat constitutes cheating.',
        'Respectful conduct toward all participants is mandatory.',
      ]} />

      <DocH3>40. Result Disputes</DocH3>
      <DocP>If you believe a match result is incorrect, you may raise a dispute within 24 hours of the result being posted on the Platform. Disputes must be submitted through the in-app dispute system with supporting evidence (screenshots, video recordings). Disputes submitted after the 24-hour window will not be accepted. The Company's decision is final.</DocP>

      <DocH2>PART IX — KYC Verification</DocH2>

      <DocH3>47. When KYC Is Required</DocH3>
      <DocList items={[
        'Becoming a Captain (the squad member who pays the entry fee and receives prize money).',
        'Creating or managing an organiser account.',
        'Receiving any prize money from a paid arena.',
        'Any transaction above the threshold set by applicable Indian financial regulations.',
      ]} />

      <DocH2>PART X — Financial Transactions</DocH2>

      <DocH3>51. Entry Fee Payment</DocH3>
      <DocP>Entry fees are paid by the Captain on behalf of the entire squad. Payment is processed via Razorpay. A 2% payment gateway charge is added to the entry fee at the time of payment — this charge goes to Razorpay, not the Platform. Entry fees are non-refundable once registration is confirmed.</DocP>

      <DocH3>52. Prize Disbursement</DocH3>
      <DocP>Prize money is disbursed to the Captain's KYC-verified bank account within 24 hours of the arena result being verified by the Platform. Prize money is subject to TDS deduction at 30% under Section 194B/194BA of the Income Tax Act, 1961, and a bank payout fee of Rs 5.90 per disbursement. The net amount received by the Captain will always be less than the gross prize amount displayed in the arena listing.</DocP>

      <DocH3>53. Non-Refundable Entry Fees</DocH3>
      <DocP>Entry fees are non-refundable except where: the arena is cancelled by the organiser before the match (100% refund within 24 hours), the arena cannot proceed due to a Platform outage attributable to the Company (100% refund), or the squad is disqualified due to the organiser's fault (100% refund).</DocP>

      <DocH2>PART XIII — User Obligations &amp; Prohibited Conduct</DocH2>

      <DocH3>62. Prohibited Conduct — Full List</DocH3>
      <DocList items={[
        'Creating or maintaining more than one account.',
        'Using hacks, aimbots, wallhacks, speed hacks, or any unauthorised third-party software during or in connection with arena matches.',
        'Match-fixing — deliberately losing or manipulating match outcomes for any reason.',
        'Using an emulator to compete in mobile-only arenas.',
        'Sharing your account credentials with any other person.',
        'Allowing another person to play matches on your account.',
        'Impersonating another player, organiser, or Company employee.',
        'Harassment, abuse, threats, discriminatory language, or any form of conduct harmful to other users.',
        'Attempting to reverse-engineer, hack, or compromise the Platform\'s systems.',
        'Submitting false or manipulated match results.',
        'Creating accounts after a permanent ban without the Company\'s written permission.',
        'Circumventing any Platform security, access restriction, or account verification system.',
      ]} />

      <DocH2>PART XIX — Governing Law, Grievance &amp; Contact</DocH2>

      <DocH3>80. Governing Law</DocH3>
      <DocP>These Terms are governed by the laws of India. Any dispute arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Assam, India, subject to Section 81 below.</DocP>

      <DocH3>81. Dispute Resolution &amp; Arbitration</DocH3>
      <DocP>Any dispute between the Company and a user that cannot be resolved through the Platform's internal dispute process shall be referred to arbitration under the Arbitration and Conciliation Act, 1996, with a sole arbitrator appointed by the Company. The arbitration shall be conducted in English, at Karimganj, Assam, India.</DocP>

      <DocTable rows={[
        [<DocStrong key="a">Contact Type</DocStrong>, <DocStrong key="b">Email</DocStrong>],
        ['General Support', <DocLink key="gs" href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
        ['Legal &amp; Grievance', <DocLink key="lg" href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
        ['Company', 'CORPSE ESPORTS PRIVATE LIMITED'],
        ['Address', 'Silchar Road Ghat Line, Subashnagar, Karimganj - 788710, Assam, India'],
      ]} />
    </DocShell>
  );
}
