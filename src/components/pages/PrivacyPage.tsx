'use client';
import DocShell, {
  DocTable, DocList, DocH2, DocH3, DocP, DocStrong, DocEm, DocLink, DocNote,
} from './DocPage';

export default function PrivacyPage() {
  return (
    <DocShell
      tag="Legal · Privacy"
      title="Corpse Privacy Policy"
      subtitle="Master Privacy Policy — Version 2.0 — Complete Platform Coverage"
      version="2.0"
      effectiveDate="May 1, 2026"
      lastUpdated="April 2026"
    >
      <DocNote>
        <DocEm>
          This Master Privacy Policy v2.0 is the single, definitive, and complete document governing how CORPSE ESPORTS PRIVATE LIMITED collects, uses, stores, shares, and protects personal data across the entire Corpse platform — for all users, all organisers, and all data subjects.
        </DocEm>
      </DocNote>

      <DocTable rows={[
        [<DocStrong key="a">Legal Entity</DocStrong>, 'CORPSE ESPORTS PRIVATE LIMITED'],
        [<DocStrong key="b">CIN</DocStrong>, 'TO BE UPDATED UPON NEW ENTITY REGISTRATION'],
        [<DocStrong key="c">Address</DocStrong>, 'Silchar Road Ghat Line, Subashnagar, Karimganj - 788710, Assam, India'],
        [<DocStrong key="d">Version</DocStrong>, '2.0 — Includes Organiser Data, Consent Withdrawal, Cross-Device Linkage, App Store Disclosure'],
        [<DocStrong key="e">Governing Law</DocStrong>, 'DPDP Act 2023 | IT Act 2000 | Aadhaar Act 2016 | PMLA 2002 | Income Tax Act 1961'],
        [<DocStrong key="f">Jurisdiction</DocStrong>, 'India exclusively'],
        [<DocStrong key="g">Effective Date</DocStrong>, 'May 1, 2026'],
        [<DocStrong key="h">Last Updated</DocStrong>, 'April 2026'],
        [<DocStrong key="i">Grievance Officer</DocStrong>, <DocLink key="gl" href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
        [<DocStrong key="j">Support Contact</DocStrong>, <DocLink key="sl" href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
      ]} />

      <DocH2>PART I — Introduction &amp; Legal Framework</DocH2>

      <DocH3>1. Who We Are &amp; What This Policy Covers</DocH3>
      <DocP>
        CORPSE ESPORTS PRIVATE LIMITED (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the Corpse platform — a competitive esports infrastructure platform available as a mobile application on iOS and Android (&quot;Platform&quot;). This Master Privacy Policy (&quot;Policy&quot;) is the single, definitive, and complete document governing how the Company collects, uses, stores, shares, and protects personal data across every feature, function, and interaction on the Platform — for all users and all organisers.
      </DocP>
      <DocP>This Policy covers data processing across every aspect of the Platform including:</DocP>
      <DocList items={[
        'Account creation, authentication, and session management.',
        'Player profile — username, avatar, in-game ID, ELO, and Ecosystem Pipeline tier.',
        'KYC verification and financial identity for players and organisers.',
        'Arena participation — registration, match play, result submission, and disputes.',
        'ELO Engine and Ecosystem Pipeline tier progression.',
        'Guild creation, membership, roles, and unit tiers.',
        'Organiser account data, performance metrics, reliability scoring, and dashboard usage.',
        'Financial transactions — entry fees, prize disbursements, organiser settlements, and TDS compliance.',
        'Notifications — in-app, email, SMS, and WhatsApp communications.',
        'Platform analytics — Firebase, Sentry error monitoring, and business intelligence.',
        'Account deletion and post-deletion data handling.',
        'App Store and Play Store data — outside the Company\'s direct control.',
      ]} />

      <DocH3>2. Who This Policy Applies To</DocH3>
      <DocP>This Policy applies to every individual who interacts with the Platform in any capacity:</DocP>
      <DocList items={[
        'Guest Users — individuals who access the Platform without creating an account.',
        'Registered Users — individuals who create and maintain an account on the Platform.',
        'Minor Users — Registered Users below the age of 18 years.',
        'KYC-Verified Users — Registered Users who have completed KYC verification.',
        'Captains — Registered Users who lead squads and conduct financial transactions.',
        'Organisers — Registered Users or entities who create and manage arenas on the Platform.',
        'Guild Members — Registered Users who are members of guilds on the Platform.',
      ]} />

      <DocH3>3. Legal Basis for Processing Personal Data</DocH3>
      <DocP>The Company processes personal data on the following legal bases under the Digital Personal Data Protection Act, 2023:</DocP>
      <DocTable rows={[
        [<DocStrong key="a">Legal Basis</DocStrong>, <DocStrong key="b">Description</DocStrong>, <DocStrong key="c">Data Categories Covered</DocStrong>],
        ['Consent', 'The data subject has given explicit, informed consent to the processing of their personal data for the specific purpose stated at the time of collection. Consent may be withdrawn at any time — see Section 62.', 'Registration data, optional profile data, marketing communications, WhatsApp notifications, analytics'],
        ['Contractual Necessity', 'Processing is necessary to perform the contract between the Company and the data subject — i.e., to provide the Platform\'s services.', 'Account data, session data, arena registration, squad data, organiser data, financial transactions'],
        ['Legal Obligation', 'Processing is required to comply with a legal obligation under Indian law.', 'KYC data (PMLA), TDS records (Income Tax Act), financial records (RBI guidelines)'],
        ['Legitimate Interests', 'Processing is necessary for the Company\'s legitimate interests in operating a secure, fair, and commercially viable platform — provided those interests are not overridden by the data subject\'s rights.', 'Platform analytics, security monitoring, ELO calculation, fraud detection, organiser reliability scoring'],
      ]} />

      <DocH3>4. Governing Legislation</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">Legislation</DocStrong>, <DocStrong key="b">Relevance</DocStrong>],
        ['Digital Personal Data Protection Act, 2023 (DPDP Act)', 'Primary data protection legislation governing all personal data processing on the Platform. Establishes user rights including consent withdrawal.'],
        ['Information Technology Act, 2000 (as amended)', 'Digital data, electronic records, intermediary obligations, and data security.'],
        ['IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021', 'Grievance redressal, content moderation, and data handling obligations for intermediaries including the requirement for a named Grievance Officer.'],
        ['Aadhaar (Targeted Delivery) Act, 2016', 'Aadhaar-based eKYC — consent, usage restrictions, and data handling.'],
        ['PMLA 2002', 'Anti-money laundering obligations requiring KYC verification and financial record retention.'],
        ['Income Tax Act, 1961', 'TDS obligations on prize money above threshold amounts.'],
      ]} />

      <DocH2>PART II — Data Collected — Account Creation &amp; Authentication</DocH2>

      <DocH3>5. Guest User Data</DocH3>
      <DocP>When you access the Platform without creating an account, the Company automatically collects: IP address, device type, operating system, browser or app version, approximate location (city/country level derived from IP), pages visited, and session duration. This data is used solely for platform analytics and security monitoring.</DocP>

      <DocH3>6. Registration Data</DocH3>
      <DocP>When you create an account, the Company collects: email address, date of birth, username (chosen by user, permanent), state/region, and authentication method used (email magic link, Google, or Apple).</DocP>

      <DocH3>7. Authentication Method Data</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">Method</DocStrong>, <DocStrong key="b">Data Collected</DocStrong>],
        ['Email Magic Link', 'Email address, magic link token (not stored after use), login timestamp'],
        ['Google OAuth', 'Google account ID, email address linked to Google account, Google profile display name'],
        ['Apple Sign In', 'Apple ID (anonymised token), email address (may be Apple relay address), login timestamp'],
      ]} />

      <DocH3>8. Auto-Generated Data at Sign-Up</DocH3>
      <DocP>At account creation, the Company automatically generates and stores: a unique Platform User ID, ELO starting score (zero), Ecosystem Pipeline tier (Initiate), account creation timestamp, and account status flag (Active).</DocP>

      <DocH3>9. Session &amp; Device Data</DocH3>
      <DocP>At every login, the Company collects and stores: device model and OS version, IP address, login timestamp, session token (encrypted), device fingerprint hash, and app version. Only one active session is permitted per account at any time — see Terms Section 12.</DocP>

      <DocH3>10. Phone Number Collection</DocH3>
      <DocP>Phone numbers are collected only when a user opts in to WhatsApp notifications or when provided during KYC verification. Phone numbers are not collected at account registration.</DocP>

      <DocH3>11. Cross-Device Data Linkage</DocH3>
      <DocP>If you log in to the Platform from multiple devices using the same account, the Company links session data, device fingerprints, and activity logs across those devices under your single Platform User ID. This linkage is used for security monitoring, fraud detection, and ensuring the one-account-per-user policy.</DocP>

      <DocH2>PART III — Data Collected — Player Profile</DocH2>

      <DocH3>12. Profile Fields</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">Field</DocStrong>, <DocStrong key="b">Required/Optional</DocStrong>, <DocStrong key="c">Public/Private</DocStrong>],
        ['Username', 'Required at sign-up', 'Public'],
        ['Avatar', 'Optional', 'Public'],
        ['State/Region', 'Required at sign-up', 'Public'],
        ['Date of Birth', 'Required at sign-up', 'Private (age tier displayed publicly)'],
        ['In-Game IDs', 'Optional (required for arena participation)', 'Public'],
        ['ELO Score', 'Auto-generated', 'Public'],
        ['Ecosystem Pipeline Tier', 'Auto-generated', 'Public'],
        ['Win/Loss Record', 'Auto-generated', 'Public'],
        ['Guild Membership', 'Optional', 'Public'],
        ['Email Address', 'Required', 'Private'],
      ]} />

      <DocH3>13. In-Game ID Data</DocH3>
      <DocP>In-Game IDs are the unique identifiers within specific game titles (e.g., Free Fire UID). These are publicly visible on your profile and are used for identity verification before arena matches. Multiple In-Game IDs may be registered for different game titles.</DocP>

      <DocH3>14. Public vs Private Profile Data</DocH3>
      <DocP>Public profile data is visible to all Platform users. Private data (email, date of birth, KYC data, financial data) is never publicly displayed and is accessible only to the Company for platform operation and legal compliance purposes.</DocP>

      <DocH2>PART IV — Data Collected — KYC Verification</DocH2>

      <DocH3>15. What KYC Data Is Collected</DocH3>
      <DocP>KYC verification requires: Aadhaar number (last 4 digits stored only, full number processed by eKYC provider only), PAN card number, full legal name (as per Aadhaar), date of birth (verified against Aadhaar), bank account number, IFSC code, and account holder name.</DocP>

      <DocH3>16. What Corpse Stores vs eKYC Provider</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">Data</DocStrong>, <DocStrong key="b">Corpse Stores</DocStrong>, <DocStrong key="c">eKYC Provider Processes</DocStrong>],
        ['Full Aadhaar Number', 'No', 'Yes (during verification only)'],
        ['Last 4 digits of Aadhaar', 'Yes', 'N/A'],
        ['PAN Number', 'Yes (encrypted)', 'Yes'],
        ['Full Legal Name', 'Yes (encrypted)', 'Yes'],
        ['Date of Birth', 'Yes', 'Yes'],
        ['Bank Account Number', 'Yes (encrypted)', 'Yes (for prize disbursement)'],
        ['IFSC Code', 'Yes', 'Yes'],
        ['Biometric Data', 'No', 'No'],
      ]} />

      <DocH3>17. KYC Data Sharing — Razorpay</DocH3>
      <DocP>KYC-verified financial data (PAN, bank account details, IFSC) is shared with Razorpay for the purposes of processing prize money disbursements. Razorpay is bound by its own privacy policy and applicable Indian financial regulations. The Company does not share KYC data with any party other than the eKYC provider and Razorpay.</DocP>

      <DocH3>18. KYC Data Retention</DocH3>
      <DocP>KYC data is retained for 7 years from the date of verification, as required by applicable Indian law (PMLA 2002, Income Tax Act 1961). KYC data is not deleted upon account deletion — see Part XVI.</DocP>

      <DocH2>PART XVIII — Your Rights Under the DPDP Act 2023</DocH2>

      <DocH3>59. Right to Access</DocH3>
      <DocP>You have the right to request access to the personal data the Company holds about you. To exercise this right, email <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink> with the subject line "Data Access Request". The Company will respond within 30 days.</DocP>

      <DocH3>60. Right to Correction</DocH3>
      <DocP>You have the right to request correction of inaccurate or incomplete personal data. Some data fields (username, date of birth) cannot be corrected after account creation. Corrections to KYC data must follow the KYC Modification procedure.</DocP>

      <DocH3>61. Right to Erasure</DocH3>
      <DocP>You have the right to request deletion of your personal data by deleting your account through the Platform. Certain data categories are retained after deletion as required by law — see Part XVI. Erasure requests for specific data fields (not full account deletion) should be directed to <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>.</DocP>

      <DocH3>62. Right to Withdraw Consent</DocH3>
      <DocP>Where data processing is based on your consent (marketing communications, WhatsApp notifications, optional analytics), you may withdraw that consent at any time through Settings &gt; Notifications or by emailing <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>. Withdrawal of consent does not affect processing that occurred prior to withdrawal.</DocP>

      <DocH3>63. Right to Grievance Redressal</DocH3>
      <DocP>If you believe the Company has processed your data incorrectly or in violation of your rights, you may file a complaint with the Grievance Officer at <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>. The Grievance Officer will respond within 30 days. If you are not satisfied with the response, you may escalate to the Data Protection Board of India.</DocP>

      <DocH3>65. How to Exercise Your Rights</DocH3>
      <DocP>To exercise any of your rights under this Policy, email <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink> with the subject line corresponding to the right you wish to exercise (e.g., "Data Access Request", "Erasure Request", "Consent Withdrawal"). Include your Platform username and registered email address in your request.</DocP>

      <DocH2>PART XXI — Grievance Officer &amp; Contact</DocH2>
      <DocTable rows={[
        [<DocStrong key="a">Role</DocStrong>, <DocStrong key="b">Contact</DocStrong>],
        ['Grievance Officer', <DocLink key="go" href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
        ['General Support', <DocLink key="gs" href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
        ['Data Access / Erasure Requests', <DocLink key="da" href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
        ['Company', 'CORPSE ESPORTS PRIVATE LIMITED'],
        ['Address', 'Silchar Road Ghat Line, Subashnagar, Karimganj - 788710, Assam, India'],
      ]} />
    </DocShell>
  );
}
