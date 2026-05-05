'use client';
import DocShell, {
  DocTable, DocList, DocH2, DocH3, DocP, DocStrong, DocEm, DocLink, DocNote,
} from './DocPage';

export default function FairPlayPage() {
  return (
    <DocShell
      tag="Legal · Legal Policies"
      title="Legal Policies"
      subtitle="Disclaimers • Legal Bindings • Policy Index • Governing Law • Contact. Players Side."
      effectiveDate="May 1, 2026"
      lastUpdated="April 2026"
    >
      <DocNote>
        <DocEm>
          Accessible via: Settings &gt; Legal | Binding on All Registered Users
        </DocEm>
      </DocNote>

      <DocTable rows={[
        [<DocStrong key="a">Legal Entity</DocStrong>, 'CORPSE ESPORTS PRIVATE LIMITED'],
        [<DocStrong key="b">CIN</DocStrong>, 'TO BE UPDATED UPON NEW ENTITY REGISTRATION'],
        [<DocStrong key="c">Address</DocStrong>, 'Silchar Road Ghat Line, Subashnagar, Karimganj - 788710, Assam, India'],
        [<DocStrong key="d">Governed By</DocStrong>, 'IT Act 2000 | IT Rules 2021 | DPDP Act 2023 | Consumer Protection Act 2019'],
        [<DocStrong key="e">Jurisdiction</DocStrong>, 'India exclusively'],
        [<DocStrong key="f">Effective Date</DocStrong>, 'May 1, 2026'],
        [<DocStrong key="g">Last Updated</DocStrong>, 'April 2026'],
        [<DocStrong key="h">Legal Contact</DocStrong>, <DocLink key="lc" href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
        [<DocStrong key="i">Support Contact</DocStrong>, <DocLink key="sc" href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
      ]} />

      <DocNote>
        <DocEm>
          By downloading, installing, accessing, or using the Corpse platform in any capacity, you acknowledge that you have read, understood, and agree to be bound by all legal notices and policies referenced in this document.
        </DocEm>
      </DocNote>

      <DocH2>PART I — Legal Binding Notice</DocH2>

      <DocH3>1. Acceptance of All Legal Documents</DocH3>
      <DocP>
        By downloading, installing, accessing, or using the Corpse platform — the mobile application operated by CORPSE ESPORTS PRIVATE LIMITED (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) — you enter into a legally binding agreement with the Company governed by the documents listed in Part II of this Legal Notices document and all applicable laws of India.
      </DocP>
      <DocP>
        This acceptance is unconditional and applies regardless of whether you have read the documents in full. The Company strongly recommends that every user read all documents listed in Part II before using the Platform. Ignorance of any legal document, policy, or notice is not a valid defence against enforcement of any term contained therein.
      </DocP>
      <DocNote>
        <DocStrong>Important: Using the Platform — even as a Guest User — constitutes acceptance of all legal documents referenced in this notice. If you do not agree to any of these terms, you must immediately cease using the Platform and uninstall the application.</DocStrong>
      </DocNote>

      <DocH3>2. How Legal Documents Are Accepted</DocH3>
      <DocP>Legal documents are accepted by the user through the following mechanisms:</DocP>
      <DocList items={[
        'Active acceptance — at account creation, users are presented with a summary of key legal documents and must actively check an acceptance box before their account is created. This constitutes explicit, recorded acceptance of the Master Terms & Conditions and Master Privacy Policy as of the date of account creation.',
        'Continued use — continued use of the Platform after any update to any legal document constitutes acceptance of the updated version of that document. Users are notified of updates via in-app notification and email.',
        'Feature-specific acceptance — certain features requiring specific terms (such as KYC verification, paid arena participation, and guild creation) present their specific terms at the point of activation. Using those features constitutes acceptance of the relevant supplementary document.',
        'Mandatory acceptance — certain legal document updates are mandatory. The Platform may require users to re-accept updated terms before continuing to use the Platform. Declining mandatory acceptance will result in restricted access until acceptance is completed.',
      ]} />

      <DocH3>3. Mandatory Nature of These Terms</DocH3>
      <DocP>
        All legal documents referenced in Part II are mandatory conditions of Platform use — they are not optional, negotiable, or partial. A user cannot selectively accept some documents while rejecting others. The legal framework governing the Platform is a unified whole — all documents must be accepted in their entirety as a condition of access.
      </DocP>

      <DocH2>PART II — Legally Binding Documents — Full Index</DocH2>
      <DocP>The following documents constitute the complete legal framework governing your use of the Corpse platform. Every document listed below is legally binding upon acceptance as described in Part I. All documents are accessible within the Platform under Settings &gt; Legal.</DocP>

      <DocH3>4. Account &amp; Authentication</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">Document</DocStrong>, <DocStrong key="b">What It Governs</DocStrong>, <DocStrong key="c">Who It Binds</DocStrong>],
        ['Master Terms & Conditions', 'Platform access, account creation, login rules, session management, account deletion, general user obligations, prohibited conduct, and governing law. The primary binding agreement between the user and the Company.', 'All registered users and guest users'],
        ['Sign Out Policy', 'Session management, voluntary sign-out, automatic session expiry after 90 days of inactivity, force termination of sessions on credential change or suspension, and re-login process.', 'All registered users'],
      ]} />

      <DocH3>5. Privacy &amp; Data Protection</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">Document</DocStrong>, <DocStrong key="b">What It Governs</DocStrong>, <DocStrong key="c">Who It Binds</DocStrong>],
        ['Master Privacy Policy v2.0', 'The complete, definitive framework governing all personal data collection, use, storage, sharing, and protection across the entire Platform — for all users and all organisers. Covers account data, KYC data, arena data, financial data, ELO data, guild data, organiser performance data, analytics, and all data rights under the DPDP Act 2023.', 'All users, all organisers, all data subjects'],
      ]} />

      <DocH3>6. Financial &amp; KYC</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">Document</DocStrong>, <DocStrong key="b">What It Governs</DocStrong>, <DocStrong key="c">Who It Binds</DocStrong>],
        ['Money Deposit & Receive Policy', 'All financial transactions on the Platform — entry fee payment, organiser security deposits, escrow structure, platform commission and GST, prize money disbursement, TDS deduction, organiser settlement, cancellation and refund policy, and financial prohibited conduct.', 'All players (Captains), all organisers'],
        ['KYC & KYC Modification T&C', 'KYC verification requirements, the eKYC verification process (Aadhaar OTP, PAN, bank account), KYC data handling, KYC modification procedure via support request and secure portal, financial freeze during modification, and prize money handling during KYC modification.', 'All KYC-verified users — Captains and Organisers'],
      ]} />

      <DocH3>7. Competitive Platform</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">Document</DocStrong>, <DocStrong key="b">What It Governs</DocStrong>, <DocStrong key="c">Who It Binds</DocStrong>],
        ['Arena Joining Terms & Conditions', 'All rules governing arena participation on the Platform — eligibility, squad formation, registration lock, in-game ID verification, emulator ban, room card rules, match conduct, result submission via the auto-capture system, the 60-second upload window, result disputes, disqualification, and platform liability.', 'All players participating in any arena — free or paid'],
        ['Account Suspension & Ban T&C', 'The complete disciplinary framework — the 4-flag progressive system (Flag 1: Warning, Flag 2: 1-day suspension, Flag 3: 1-week suspension, Flag 4+: Permanent ban), zero-tolerance immediate ban violations, financial consequences of suspension and ban, the in-app appeal process, and prohibited post-action conduct.', 'All registered users'],
      ]} />

      <DocH3>8. Community &amp; Conduct</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">Document</DocStrong>, <DocStrong key="b">What It Governs</DocStrong>, <DocStrong key="c">Who It Binds</DocStrong>],
        ['Guild Policy', 'All rules governing the Guild system — guild creation (KYC required), the four-role hierarchy (Captain, Vice Captain, Manager, Member), role permissions, the unit tier system (Apex, Specialized, Core, Rising), guild membership rules, request-based joining, leaving and removal, guild ELO and leaderboard, the verified badge system, guild conduct and prohibited behaviour, and the Company\'s authority to suspend or dissolve guilds.', 'All guild members — Captains, Vice Captains, Managers, and Members'],
        ['IP, Trademark & Copyright Policy', 'Ownership of all Corpse intellectual property — trademarks (CORPSE, CORPSE ARENA, logo, tagline) and copyrighted works (source code, UI/UX design, business documents). Limited licence granted to users. Prohibited uses of Corpse IP. Employee and contractor IP assignment. Enforcement mechanisms.', 'All users, all employees, all contractors, all API partners'],
      ]} />

      <DocH2>PART III — Platform Disclaimer</DocH2>

      <DocH3>9. Nature of the Platform</DocH3>
      <DocP>
        Corpse is a competitive esports infrastructure platform that provides tournament organisation tools, competitive ranking systems, squad and guild management features, and payment processing infrastructure for esports competitions. The Platform is operated by CORPSE ESPORTS PRIVATE LIMITED, an Indian private limited company.
      </DocP>
      <DocP>
        The Platform is not a gambling platform, a fantasy sports platform, an online money gaming service, or a betting platform. The Platform is classified as an e-sports platform under the Online Gaming (Regulation) Act, 2025. Under Section 2(g) of that Act, e-sports is explicitly excluded from the definition of 'online money game'. Entry fees paid on the Platform are tournament registration fees — not stakes, wagers, or bets.
      </DocP>
      <DocNote>
        <DocEm>
          Corpse is an e-sports platform. Competitive gaming on Corpse is a skill-based activity governed by the rules of the relevant game title. Entry fees are tournament participation fees. Prize money is competitive prize pool money. These are legally distinct from gambling, wagering, or online money gaming.
        </DocEm>
      </DocNote>

      <DocH3>10. Availability &amp; Uptime</DocH3>
      <DocP>The Company makes no warranty, express or implied, that the Platform will be available, uninterrupted, error-free, or free from technical failures at all times. The Platform may be unavailable due to:</DocP>
      <DocList items={[
        'Scheduled maintenance — the Company will endeavour to notify users of scheduled maintenance windows via in-app notification in advance.',
        'Unscheduled technical failures — server outages, database issues, or infrastructure failures beyond the Company\'s reasonable control.',
        'Third-party service disruptions — outages at Razorpay, Firebase, the eKYC provider, Render, or any other third-party service provider on which the Platform depends.',
        'Force majeure events — events beyond the Company\'s control including natural disasters, government directives, telecommunications failures, and acts of God.',
      ]} />

      <DocH3>11. Content Accuracy</DocH3>
      <DocList items={[
        'Match results are subject to verification by the Company\'s trust and safety team before being finalised. Verified results are binding — see the Arena Joining Terms & Conditions for the dispute process.',
        'ELO scores and leaderboard rankings are calculated by the Company\'s proprietary ELO Engine. The algorithm is the Company\'s intellectual property and is not disclosed. Calculations are final subject to the Company\'s right to adjust ELO for integrity violations.',
        'Arena listings, entry fees, prize pools, and organiser details are configured by individual organisers and are the organiser\'s responsibility.',
      ]} />

      <DocH2>PART IV — Financial Disclaimer</DocH2>

      <DocH3>13. Entry Fees &amp; Prize Money</DocH3>
      <DocP>Entry fees paid on the Platform are competitive tournament registration fees — they are not stakes, wagers, investments, or deposits in the financial services sense.</DocP>
      <DocList items={[
        'Entry fees are non-refundable once a squad\'s tournament registration is confirmed — as set out in the Money Deposit & Receive Policy.',
        'Prize money is competitive prize pool money funded entirely by the organiser\'s security deposit.',
        'All prize money is subject to TDS deduction at 30% under Section 194B/194BA of the Income Tax Act, 1961, before disbursement.',
        'Prize money amounts displayed in arena listings are gross amounts — before TDS deduction and bank payout fees.',
      ]} />

      <DocH3>14. Tax Obligations</DocH3>
      <DocP>The Company deducts TDS at the applicable rate on prize winnings and deposits it with the Government of India. Users are individually responsible for:</DocP>
      <DocList items={[
        'Including prize income in their annual income tax return.',
        'Paying any additional income tax due beyond the TDS already deducted at source.',
        'Maintaining their own records of Platform transactions for tax filing purposes.',
        'Complying with all applicable GST obligations if acting as a GST-registered organiser.',
      ]} />
      <DocNote>
        <DocStrong>Important: The Company is not a tax advisor. Nothing in any Corpse legal document constitutes tax advice. Users and organisers should consult a qualified chartered accountant or tax professional regarding their specific tax obligations arising from Platform transactions.</DocStrong>
      </DocNote>

      <DocH2>PART VIII — Limitation of Liability</DocH2>

      <DocH3>28. General Limitation</DocH3>
      <DocP>
        To the maximum extent permitted by applicable Indian law, the Company is not liable for: indirect, incidental, special, punitive, or consequential damages of any kind; loss of profits, revenue, data, goodwill, or competitive advantage; damages resulting from unauthorised access to or use of the Platform; damages resulting from Platform unavailability, errors, or technical failures; or damages resulting from the actions or omissions of third-party service providers.
      </DocP>

      <DocH3>29. Maximum Liability Cap</DocH3>
      <DocP>
        The Company's total aggregate liability to any user for any claim arising from or relating to the Platform — regardless of the basis of the claim — is limited to the lesser of: the total entry fees paid by the user in the 6 months preceding the claim, or Rs 1,000.
      </DocP>

      <DocH2>PART XI — Governing Law &amp; Dispute Resolution</DocH2>

      <DocH3>34. Governing Law</DocH3>
      <DocP>These Legal Notices and all policies referenced herein are governed by the laws of India. All disputes shall be subject to the jurisdiction of the courts of Assam, India, subject to the arbitration clause in Section 35.</DocP>

      <DocH2>PART XII — Grievance Officer &amp; Contact</DocH2>

      <DocTable rows={[
        [<DocStrong key="a">Contact Type</DocStrong>, <DocStrong key="b">Details</DocStrong>],
        ['Grievance Officer', <DocLink key="go" href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
        ['Response Time', '30 days from receipt of complaint'],
        ['General Support', <DocLink key="gs" href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
        ['Company', 'CORPSE ESPORTS PRIVATE LIMITED'],
        ['Address', 'Silchar Road Ghat Line, Subashnagar, Karimganj - 788710, Assam, India'],
      ]} />
    </DocShell>
  );
}
