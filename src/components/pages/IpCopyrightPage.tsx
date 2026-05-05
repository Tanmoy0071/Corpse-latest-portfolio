'use client';
import DocShell, { DocTable, DocList, DocH2, DocH3, DocP, DocStrong, DocEm, DocLink, DocNote } from './DocPage';

export default function IpCopyrightPage() {
  return (
    <DocShell
      tag="Legal · Intellectual Property"
      title="IP, Trademark & Copyright Policy"
      subtitle="Ownership · Protection · Permitted Use · Enforcement"
      effectiveDate="May 1, 2026"
      lastUpdated="April 2026"
    >
      <DocTable rows={[
        [<DocStrong>Legal Entity</DocStrong>, '[CORPSE ESPORTS PRIVATE LIMITED]'],
        [<DocStrong>Governed By</DocStrong>, 'Copyright Act 1957 | Trade Marks Act 1999 | IT Act 2000 | Master T&C'],
        [<DocStrong>Jurisdiction</DocStrong>, 'India exclusively'],
        [<DocStrong>Binding On</DocStrong>, 'Employees | Contractors | Users | Organisers | API Partners | All Third Parties'],
        [<DocStrong>Legal Contact</DocStrong>, <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
        [<DocStrong>Support Contact</DocStrong>, <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
      ]} />

      <DocNote><DocEm>This Policy governs the ownership, protection, and permitted use of all intellectual property created by or associated with [CORPSE ESPORTS PRIVATE LIMITED] and the Corpse platform. By using the Platform, you confirm that you have read, understood, and agree to be bound by this Policy in its entirety.</DocEm></DocNote>

      <DocH2>PART I — Introduction & Scope</DocH2>

      <DocH2>1. Purpose of This Policy</DocH2>
      <DocP>This Intellectual Property, Trademark & Copyright Policy ("IP Policy") sets out the framework governing the ownership, protection, and permitted use of all intellectual property (IP) created by, owned by, or associated with [CORPSE ESPORTS PRIVATE LIMITED] ("Company", "we", "us", "our") and the Corpse platform ("Platform").</DocP>

      <DocH2>2. Who This Policy Applies To</DocH2>
      <DocList items={[
        'All Registered Users of the Platform — including players, organisers, guild members, and viewers.',
        'All employees, contractors, consultants, and agents of the Company.',
        'All third-party partners, API partners, sponsors, and collaborators who have access to or use any Company IP.',
        'All individuals or entities who create content on the Platform — including match data, results, screenshots, and any other user-generated content.',
        'Any person or entity who references, reproduces, distributes, or commercially exploits any Company IP in any format.',
      ]} />

      <DocH2>3. Relationship to Other Corpse Policies</DocH2>
      <DocTable rows={[
        [<DocStrong>Policy</DocStrong>, <DocStrong>IP Relevance</DocStrong>],
        ['Master Terms & Conditions', "Governs the user's overall relationship with the Platform, including the grant of a limited licence to use the Platform's content and the user's warranty that their content does not infringe third-party IP"],
        ['Arena Joining T&C', 'Governs ownership of Arena data, match results, and Platform-generated competitive records'],
        ['Guild Policy', 'Governs ownership of guild data, ELO records, and match history generated through guild activities'],
        ['Account Creation & Deletion Privacy Policy', 'Governs data generated at account creation — none of which constitutes user-generated IP'],
      ]} />

      <DocH2>PART II — Company Intellectual Property</DocH2>

      <DocH2>4. Company-Owned IP — What We Own</DocH2>
      <DocP>The following intellectual property is owned exclusively by [CORPSE ESPORTS PRIVATE LIMITED]:</DocP>

      <DocH3>4.1 Trademarks & Brand Assets</DocH3>
      <DocList items={[
        'The name "CORPSE" as a trademark registered or pending registration in India under Classes 41 and 42.',
        'The name "CORPS ARENA" and "CORPSE ARENA" as trademarks registered or pending registration in India.',
        'The Corpse logo — including all versions, colour variants, and stylised forms of the logo.',
        'The Corpse brand identity system — including the colour palette (primary red: #E8192C), typography specifications, design language, and visual identity guidelines.',
        'All taglines, slogans, and brand phrases associated with the Corpse platform — including "The Operating System for Esports".',
        'All promotional and marketing materials produced by the Company.',
      ]} />

      <DocH3>4.2 Software & Platform IP</DocH3>
      <DocList items={[
        "The Corpse platform application — including all source code, object code, algorithms, data structures, APIs, and technical architecture.",
        "The ELO engine — the Company's proprietary formula, weighting system, and algorithm for calculating individual player ELO scores and guild ELO scores on the Platform.",
        "The Corpse Arena management system — including the organiser dashboard, preset system, room card system, and result verification system.",
        "All user interface designs, UX flows, screen designs, and interactive elements of the Platform application.",
        "All databases, data schemas, and data processing pipelines owned and operated by the Company.",
      ]} />

      <DocH3>4.3 Platform-Generated Data & Records</DocH3>
      <DocList items={[
        'All match data generated by Arena matches played on the Platform — including results, scores, kill counts, and performance statistics.',
        "All ELO scores — both individual player ELO scores and guild ELO scores — generated and maintained by the Company's ELO engine.",
        'All leaderboard data — including rankings, standings, and competitive tier classifications.',
        'All tournament brackets, fixture lists, and scheduling data generated by the Platform.',
        'All prize pool calculations, disbursement records, and financial transaction records generated by the Platform.',
      ]} />

      <DocH3>4.4 Original Content</DocH3>
      <DocList items={[
        'All original written content published by the Company on the Platform — including policy documents, help articles, event descriptions, and announcements.',
        "All original visual content produced by the Company — including the Platform's illustration library, icon sets, and graphical elements.",
        'All video, audio, and multimedia content produced by or for the Company in connection with the Corpse brand.',
      ]} />

      <DocH2>PART III — Third-Party Intellectual Property</DocH2>

      <DocH2>5. Game Publisher IP</DocH2>
      <DocP>The Corpse platform at launch supports competitive arenas for Free Fire (Garena Free Fire MAX), published by Garena Online Private Limited ("Garena"). Free Fire, Garena Free Fire MAX, and all associated game titles, logos, characters, gameplay elements, maps, assets, and trademarks are the exclusive intellectual property of Garena Online Private Limited.</DocP>
      <DocP>The Company does not claim any ownership over Garena's IP. The Corpse platform facilitates tournament organisation using Garena's custom room infrastructure in accordance with Garena's terms of service. The Company is not affiliated with, endorsed by, or officially partnered with Garena.</DocP>

      <DocH2>6. Third-Party Software Licences</DocH2>
      <DocP>The Platform is built using a combination of proprietary and open-source software. All open-source software components used in the Platform are licensed under their respective open-source licences. The Company complies with all licence requirements for open-source software used in the Platform.</DocP>

      <DocH2>7. User-Generated Content — Limited Scope</DocH2>
      <DocP>Users of the Corpse platform generate very limited forms of original content on the Platform:</DocP>
      <DocList items={[
        "Guild names — created by guild Captains. Guild names are subject to the naming rules in the Guild Policy. A guild name that meets the naming rules may constitute original creative expression, but the Company does not claim ownership over a user's original guild name.",
        "Platform usernames — auto-generated by the Platform based on the user's legal name. Usernames are not user-generated creative works.",
        "Match result screenshots — uploaded by players and organisers as evidence of match results. Screenshots of Free Fire gameplay contain Garena's IP and are subject to Garena's terms of service.",
        "Guild internal rules — written by the guild Captain and displayed on the guild's public profile. Guild rules are the original work of the Captain within the constraints of the Guild Policy.",
      ]} />
      <DocNote>The Platform does not host blogs, forums, social posts, or any open-ended user content creation infrastructure. User-generated content on the Platform is strictly limited to the categories described in this Section.</DocNote>

      <DocH2>PART IV — Licence to Use Platform Content</DocH2>

      <DocH2>8. Company's Grant of Limited Licence to Users</DocH2>
      <DocP>The Company grants you a limited, non-exclusive, non-transferable, revocable licence to access and use the Platform and its content for your personal, non-commercial use as a registered user of the Platform. This licence does not include: the right to reproduce, distribute, or commercially exploit any Company IP; the right to create derivative works based on any Company IP; the right to sublicence any Company IP to any third party; or the right to access, reverse-engineer, or decompile the Platform's source code or ELO engine.</DocP>

      <DocH2>9. Restrictions on Use of Company IP</DocH2>
      <DocList items={[
        "You may not use the Corpse name, logo, or any other Corpse trademark in a manner that implies an official partnership, endorsement, or affiliation with the Company without the Company's express written consent.",
        "You may not reproduce, distribute, or commercially exploit any of the Company's copyrighted content — including the Platform's written content, design assets, or multimedia content — without the Company's express written consent.",
        "You may not use the Company's ELO data, leaderboard data, or match records for any commercial purpose — including resale, data brokerage, or commercial analytics — without the Company's express written consent.",
        "You may not use the Company's brand assets to create merchandise, promotional materials, or any commercial products without the Company's express written consent.",
      ]} />

      <DocH2>10. Permitted Uses of Company IP</DocH2>
      <DocList items={[
        "Sharing your personal match results, ELO score, or leaderboard standing on personal social media accounts for non-commercial personal sharing — provided you attribute the results to the Corpse platform.",
        "Using the Corpse name in editorial, journalistic, or academic contexts — provided the use is factual, accurate, and not misleading.",
        "Creating fan content that celebrates the Corpse platform or its community — provided the content is clearly labelled as fan-made, non-commercial, and does not imply any official affiliation with the Company.",
      ]} />

      <DocH2>PART V — Platform-Generated Data — Ownership Clarifications</DocH2>

      <DocH2>11. Match Data Ownership</DocH2>
      <DocP>All match data generated through Platform-organised arenas — including results, scores, statistics, and performance records — is owned by the Company. This data is generated by the Platform's systems, verified by the Company's result verification process, and stored in Company-owned databases. Users participating in arenas do not acquire any ownership rights over match data by virtue of their participation.</DocP>

      <DocH2>12. ELO Score Ownership</DocH2>
      <DocP>ELO scores — both individual player ELO scores and guild ELO scores — are generated, calculated, and owned by the Company using the Company's proprietary ELO engine. A user's ELO score is a Platform-generated metric that reflects their competitive performance on the Platform. Users do not own their ELO scores — they have a right to view and reference their ELO scores as registered users, but the scores are Company-owned data.</DocP>

      <DocH2>PART VI — Copyright Infringement & DMCA-Style Process</DocH2>

      <DocH2>13. Reporting IP Infringement</DocH2>
      <DocP>If you believe that any content on the Platform or associated with the Platform infringes your intellectual property rights, please send a written notice to <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink> with the following information: identification of the copyrighted work claimed to have been infringed, identification of the allegedly infringing material and its location on the Platform, your contact information, a statement that the use of the material in the manner complained of is not authorised, and a statement that the information in your notice is accurate.</DocP>

      <DocH2>14. False IP Claims</DocH2>
      <DocP>Submitting a false or fraudulent IP infringement claim — including false claims made to remove legitimate content from the Platform — is prohibited and may result in the user receiving a flag under the Account Suspension & Ban T&C.</DocP>

      <DocH2>PART VII — Enforcement & Remedies</DocH2>

      <DocH2>15. Company's Right to Enforce Its IP</DocH2>
      <DocP>The Company actively monitors and enforces its intellectual property rights. The Company may take any of the following actions in response to infringement of its IP: sending a cease-and-desist notice to the infringing party, issuing a DMCA takedown notice or equivalent to the platform hosting the infringing content, commencing civil proceedings for infringement, damages, and/or injunctive relief, or filing a criminal complaint with law enforcement authorities where the infringement also constitutes a criminal offence.</DocP>

      <DocH2>PART VIII — Governing Law, Dispute Resolution & Contact</DocH2>
      <DocP>This IP Policy is governed by the laws of India — specifically the Copyright Act, 1957 (as amended), the Trade Marks Act, 1999 (as amended), the Information Technology Act, 2000, and the Design Act, 2000 where applicable. Any dispute arising out of or in connection with this IP Policy shall be subject to the jurisdiction of the courts of Assam, India.</DocP>
      <DocTable rows={[
        [<DocStrong>Contact Type</DocStrong>, <DocStrong>Email</DocStrong>],
        ['IP Infringement Reports', <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
        ['Licensing Enquiries', <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
        ['General Support', <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
      ]} />
    </DocShell>
  );
}
