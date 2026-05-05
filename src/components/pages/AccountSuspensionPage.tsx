'use client';
import DocShell, { DocTable, DocList, DocH2, DocH3, DocP, DocStrong, DocEm, DocLink, DocNote } from './DocPage';

export default function AccountSuspensionPage() {
  return (
    <DocShell
      tag="Legal · Enforcement"
      title="Account Suspension & Ban T&C"
      subtitle="Flags · Warnings · Suspensions · Permanent Bans · Appeals"
      effectiveDate="May 1, 2026"
      lastUpdated="April 2026"
    >
      <DocTable rows={[
        [<DocStrong>Legal Entity</DocStrong>, '[CORPSE ESPORTS PRIVATE LIMITED]'],
        [<DocStrong>Governed By</DocStrong>, 'IT Act 2000 | Master Terms & Conditions | Platform Community Standards'],
        [<DocStrong>Jurisdiction</DocStrong>, 'India exclusively'],
        [<DocStrong>Binding On</DocStrong>, 'All Registered Users | Players | Organisers'],
        [<DocStrong>Support Contact</DocStrong>, <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
        [<DocStrong>Legal Contact</DocStrong>, <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
      ]} />

      <DocNote><DocEm>This document governs the flag system, warning process, account suspension, permanent ban, and appeal mechanism on the Corpse platform. By using the Platform, you agree to be bound by these Terms in their entirety.</DocEm></DocNote>

      <DocH2>PART I — Introduction & Scope</DocH2>

      <DocH2>1. Purpose of This Document</DocH2>
      <DocP>This Account Suspension & Ban Terms & Conditions document ("Suspension Policy") sets out the complete framework governing how [CORPSE ESPORTS PRIVATE LIMITED] identifies, flags, warns, suspends, and permanently bans users who violate the Platform's rules, community standards, and legal obligations.</DocP>
      <DocList items={[
        'Protect the integrity of competitive gameplay — ensuring all tournaments, arenas, and matches are fair, honest, and free from manipulation.',
        'Protect users from harassment, harmful content, impersonation, and other conduct that damages the Platform community.',
        'Provide a clear, transparent, and fair framework that every user understands before engaging with the Platform.',
        'Give users a meaningful opportunity to correct their behaviour through a progressive flag system before severe consequences are applied.',
        'Provide a legitimate appeal mechanism that ensures every user has the right to challenge a disciplinary action they believe is unjust.',
      ]} />

      <DocH2>2. Who This Applies To</DocH2>
      <DocP>This Suspension Policy applies to every Registered User of the Platform without exception — including:</DocP>
      <DocList items={[
        'Players participating in free or paid arenas in any capacity.',
        'Captains leading squads in paid tournaments.',
        'Organisers creating and managing arenas on the Platform.',
        'Guild leaders and guild members.',
        'Any user interacting with the Platform\'s community features, support system, or financial features.',
      ]} />

      <DocH2>3. Relationship to Other Corpse Policies</DocH2>
      <DocP>This Suspension Policy is a supplementary policy to the Corpse Master Terms & Conditions. It is specifically referenced in: Master T&C — Section 26 (Company's Right to Suspend or Terminate Accounts), KYC & KYC Modification T&C — Part XI (Company's Rights), and Money Deposit & Receive Policy — Part XI (Prohibited Conduct & Consequences).</DocP>

      <DocH2>4. Governing Legal Framework</DocH2>
      <DocTable rows={[
        [<DocStrong>Law / Framework</DocStrong>, <DocStrong>Relevance</DocStrong>],
        ['Information Technology Act, 2000 (as amended)', "Governs the Company's right to moderate content and user behaviour on its digital platform"],
        ['IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021', "Governs the Company's obligations as an intermediary including grievance redressal and content moderation"],
        ['Master Terms & Conditions — Corpse', "The primary binding agreement between the user and the Company — this Policy supplements it"],
        ['Indian Penal Code (as applicable)', "Certain severe violations — such as fraudulent impersonation, harassment, or obscene content — may also constitute criminal offences"],
      ]} />

      <DocH2>PART II — The Flag System</DocH2>

      <DocH2>5. What a Flag Is</DocH2>
      <DocP>A flag is a formal disciplinary record placed on a user's account when the user is found to have violated the Platform's rules. A flag is:</DocP>
      <DocList items={[
        "An official record — permanently attached to the user's account history for its duration and cannot be removed by the user.",
        "A warning mechanism — flags are designed to give users the opportunity to correct their behaviour before more severe consequences are applied.",
        "A cumulative system — each additional flag triggers a progressively more severe consequence, culminating in permanent ban upon a fourth flag.",
        "Time-limited — each flag expires after 12 calendar months from the date it was issued, after which it no longer counts toward the user's active flag total.",
      ]} />
      <DocNote><DocEm>Note: A flag expiring after 12 months does not erase the record of the violation from the Company's internal audit logs. The Company retains all disciplinary records indefinitely for security and compliance purposes. Only the active flag count resets after 12 months.</DocEm></DocNote>

      <DocH2>6. How Flags Are Issued</DocH2>
      <DocList items={[
        "Step 1 — A violation is detected or reported, either through the Platform's automated detection systems, a user report, or an organiser report.",
        "Step 2 — The Company's trust and safety team reviews the reported violation and conducts an investigation to confirm whether a violation occurred.",
        "Step 3 — If the investigation confirms a violation, the trust and safety team determines the appropriate flag category and issues the flag to the user's account.",
        "Step 4 — The user is notified immediately via in-app notification and email of the flag, the reason for it, their current flag count, and the consequence triggered.",
        "Step 5 — If the flag triggers a suspension or ban, the corresponding account action is applied simultaneously with the notification.",
      ]} />

      <DocH2>7. Flag Expiry — 1 Year</DocH2>
      <DocList items={[
        "Flag expiry is calculated from the date the flag was issued — not from the date any suspension associated with the flag ended.",
        "If a user has 2 active flags and both expire after 12 months without a third flag being issued, their active flag count returns to zero.",
        "If a user receives a new flag before existing flags expire, all flags — old and new — remain active and count toward the user's total.",
        "A user who has served a suspension and whose associated flags have expired starts fresh for the purpose of future violation consequences. The historical record is retained.",
      ]} />

      <DocH2>8. Progressive Action Table</DocH2>
      <DocTable rows={[
        [<DocStrong>Flag Count</DocStrong>, <DocStrong>Action</DocStrong>, <DocStrong>Duration</DocStrong>, <DocStrong>Sessions Terminated?</DocStrong>, <DocStrong>Financial Activity?</DocStrong>],
        ['Flag 1', 'Formal Warning', 'No suspension — warning on record for 12 months', 'No', 'Unaffected'],
        ['Flag 2', 'Temporary Suspension', '1 calendar day from time of application', 'Yes — immediately', 'Frozen during suspension'],
        ['Flag 3', 'Temporary Suspension', '7 calendar days from time of application', 'Yes — immediately', 'Frozen during suspension'],
        ['Flag 4+', 'Permanent Ban', 'Lifetime — account permanently terminated', 'Yes — immediately', 'All amounts forfeited'],
      ]} />
      <DocNote><DocStrong>Important: The flag count that determines consequences is the number of ACTIVE flags — flags issued within the last 12 months. Expired flags do not count. A user with 3 historical flags but only 1 active flag receives a warning, not a suspension.</DocStrong></DocNote>

      <DocH2>PART III — Violations That Trigger a Flag</DocH2>

      <DocH2>9. Category A — Competitive Integrity Violations</DocH2>
      <DocH3>9.1 Cheating & Hacking in Matches</DocH3>
      <DocP>Using any software, tool, script, bot, macro, exploit, or modification that provides an unfair competitive advantage over other players in any arena or match on the Platform. This includes but is not limited to:</DocP>
      <DocList items={[
        'Aimbots — software that automatically assists with targeting or accuracy in shooting games.',
        'Wallhacks or ESP (Extra Sensory Perception) software — tools that allow players to see through walls or detect enemy positions.',
        'Speed hacks — software that artificially increases a player\'s movement or action speed beyond normal gameplay parameters.',
        'Lag switches — hardware or software that artificially manipulates network latency to gain a competitive advantage.',
        'Game file modification — altering game files, assets, or configurations to gain any advantage not available to other players.',
        "Any third-party software or tool that interacts with the game client in a manner not authorised by the game publisher.",
      ]} />

      <DocH3>9.2 Match Fixing & Result Manipulation</DocH3>
      <DocP>Intentionally losing, manipulating match outcomes, or colluding with other players or squads to predetermine results — whether for financial gain, ELO manipulation, or any other purpose.</DocP>

      <DocH3>9.3 Impersonation During Matches</DocH3>
      <DocP>Using a different in-game account, in-game ID, or in-game username than the one registered on your Corpse Platform account to participate in a Corpse arena.</DocP>

      <DocH2>10. Category B — Identity & Account Violations</DocH2>
      <DocList items={[
        'Providing false identity information at any stage of account registration or KYC verification.',
        'Operating multiple Corpse accounts simultaneously — each person is permitted exactly one Corpse account.',
        'Re-registering on the Platform after a permanent ban.',
        'Sharing your account credentials with another person or allowing another person to access or operate your account.',
        'Selling, transferring, or renting your account to another person.',
      ]} />

      <DocH2>11. Category C — Content Violations</DocH2>
      <DocList items={[
        'Publishing, posting, or sharing sexually explicit, obscene, or NSFW content on the Platform.',
        'Publishing, posting, or sharing hate speech, discriminatory language, or content that targets individuals or groups.',
        'Harassing, threatening, or intimidating other users on or off the Platform in connection with Platform activities.',
        'Sharing another user\'s personal information without their explicit consent (doxxing).',
        'Spamming the Platform\'s support, dispute, or communication systems with false or frivolous reports.',
      ]} />

      <DocH2>PART IV — Violations That Trigger Immediate Permanent Ban</DocH2>

      <DocH2>13. Severe Violations — Zero Tolerance</DocH2>
      <DocList items={[
        'Creating, distributing, or facilitating child sexual abuse material (CSAM) of any kind.',
        'Engaging in or facilitating money laundering or financial fraud through the Platform.',
        'Engaging in or facilitating extortion, blackmail, or coercion of any other user, organiser, or Company employee.',
        'Submitting a fraudulent KYC identity or impersonating another real person during the KYC verification process.',
        'Attempting to hack, exploit, or compromise the Platform\'s infrastructure, databases, or security systems.',
        'Making or threatening violence against any Company employee, contractor, or Platform user.',
      ]} />

      <DocH2>PART V — Warning Process — Flag 1</DocH2>

      <DocH2>15. How a Warning Is Issued</DocH2>
      <DocP>A Warning is issued when a user receives their first active flag. A Warning does not result in any suspension of the user's account or restriction of their access to the Platform. It is a formal notification that the user has violated Platform rules and that further violations will result in progressively severe consequences.</DocP>

      <DocH2>PART VI — Temporary Suspension — Flag 2 & Flag 3</DocH2>

      <DocH2>19. Flag 2 Suspension — 1 Day</DocH2>
      <DocP>When a user accumulates 2 active flags, a 1-day temporary suspension is applied to their account. The suspension period is calculated from the exact time the flag was issued and the suspension was applied — not from midnight of the day of application.</DocP>

      <DocH2>20. Flag 3 Suspension — 1 Week</DocH2>
      <DocP>When a user accumulates 3 active flags, a 7-calendar-day temporary suspension is applied to their account. The suspension period is calculated from the exact time the flag was issued.</DocP>

      <DocH2>22. What Happens During Suspension</DocH2>
      <DocList items={[
        "The user's account is locked — they cannot log in to the Platform.",
        'All active sessions are immediately terminated.',
        'The user cannot register for, participate in, or join any Arena during the suspension.',
        'The user cannot send or receive messages on the Platform.',
        'The user cannot create or manage any guild activities.',
        'All financial activity — deposits, withdrawals, and prize claims — is frozen during the suspension.',
      ]} />

      <DocH2>PART VII — Permanent Ban — Flag 4 & Immediate Violations</DocH2>

      <DocH2>26. How a Permanent Ban Is Applied</DocH2>
      <DocP>A Permanent Ban is applied when a user accumulates 4 or more active flags, or when the user commits a Category D — Zero Tolerance violation as listed in Part IV. A Permanent Ban is applied immediately — simultaneously with the notification to the user.</DocP>

      <DocH2>27. What Permanent Ban Means</DocH2>
      <DocList items={[
        "The user's account is permanently and irrevocably terminated.",
        'The user loses access to all Platform features, data, match history, and ELO score.',
        'The user loses all membership in any Guild they belong to.',
        'The user loses all organiser privileges.',
        'All prize claims, winnings, or pending payouts are forfeited in full.',
        'Any wallet balance or deposits held by the Company are forfeited in full.',
      ]} />

      <DocH2>PART VIII — Notification</DocH2>

      <DocH2>31. Flag Notification</DocH2>
      <DocP>When a flag is issued, the user is notified immediately via in-app notification and email. The notification contains: the nature of the violation, the flag number, the evidence or basis for the flag, the consequence triggered (if any), and information on the appeal process.</DocP>

      <DocH2>PART IX — Appeal Process</DocH2>

      <DocH2>35. Who Can Appeal</DocH2>
      <DocP>Any Registered User who has received a flag, a temporary suspension, or a permanent ban may file one appeal against the disciplinary action. Permanent ban recipients may also appeal, but the Company's decision on appeal is final and binding in all cases.</DocP>

      <DocH2>36. How to Submit an Appeal</DocH2>
      <DocP>All appeals must be submitted in writing to <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink> within 7 calendar days of receiving the notification of the flag, suspension, or ban. Appeals submitted after this window will not be considered.</DocP>

      <DocH2>38. Appeal Review Timeline</DocH2>
      <DocP>The Company's trust and safety team will review all valid appeals within 14 calendar days of receipt. The user will be notified of the outcome within this period. Complex cases may take up to 30 days; the user will be notified of any extension.</DocP>

      <DocH2>39. Possible Outcomes of an Appeal</DocH2>
      <DocList items={[
        'Upheld — the flag, suspension, or ban is confirmed. The Company\'s decision is final and the user cannot appeal again for the same action.',
        'Overturned — the flag, suspension, or ban is reversed in full. The flag is removed from the user\'s account; any suspension is lifted.',
        'Modified — the Company determines that a lesser consequence is appropriate. The flag may be maintained but the suspension duration may be reduced.',
      ]} />

      <DocH2>40. One Appeal Per Action — Finality</DocH2>
      <DocP>A user may file only one appeal per disciplinary action. Once the Company has reviewed an appeal and communicated its decision, that decision is final, conclusive, and binding. No further review, escalation, or appeal is available within the Platform's internal processes.</DocP>

      <DocH2>PART X — Prohibited Post-Action Conduct</DocH2>
      <DocList items={[
        'During suspension: The suspended user must not attempt to access the Platform through any means, including another account, a guest session, or through another person\'s account.',
        'After permanent ban: The permanently banned user must not create a new account, register using a different email or identity, or attempt to access the Platform by any other means.',
        'During appeal review: The user must not attempt to contact or influence the Company\'s trust and safety team through any channel other than the official appeal email address.',
      ]} />

      <DocH2>PART XI — Governing Law, Dispute Resolution & Contact</DocH2>
      <DocP>This Suspension Policy is governed by the laws of India. Any dispute arising out of or in connection with a disciplinary action, appeal, or this Suspension Policy shall be subject to the jurisdiction of the courts of Assam, India. For all suspension-related enquiries: <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink></DocP>
    </DocShell>
  );
}
