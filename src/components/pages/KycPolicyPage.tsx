'use client';
import DocShell, { DocTable, DocList, DocH2, DocH3, DocP, DocStrong, DocEm, DocLink, DocNote } from './DocPage';

export default function KycPolicyPage() {
  return (
    <DocShell
      tag="Legal · KYC"
      title="KYC & KYC Modification Terms & Conditions"
      subtitle="Verification · Data Handling · Modification Process · Financial Impact"
      effectiveDate="May 1, 2026"
      lastUpdated="April 2026"
    >
      <DocTable rows={[
        [<DocStrong>Legal Entity</DocStrong>, '[CORPSE ESPORTS PRIVATE LIMITED]'],
        [<DocStrong>eKYC Provider</DocStrong>, 'Authorised third-party eKYC API service provider'],
        [<DocStrong>Payment Provider</DocStrong>, 'Razorpay Software Private Limited'],
        [<DocStrong>Binding On</DocStrong>, 'All KYC-Verified Users | Captains | Organisers'],
        [<DocStrong>Jurisdiction</DocStrong>, 'India exclusively'],
        [<DocStrong>Support Contact</DocStrong>, <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
        [<DocStrong>Legal Contact</DocStrong>, <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
      ]} />

      <DocNote><DocEm>By initiating KYC verification or any KYC modification on the Corpse platform, you confirm that you have read, understood, and agree to be bound by these KYC & KYC Modification Terms & Conditions in their entirety.</DocEm></DocNote>

      <DocH2>PART I — Introduction & Scope</DocH2>

      <DocH2>1. Purpose of This Document</DocH2>
      <DocP>This KYC & KYC Modification Terms & Conditions document ("KYC T&C") sets out the complete framework governing Know Your Customer (KYC) verification requirements on the Corpse platform, the data collected during KYC, the process for modifying KYC data, and the financial and operational consequences of KYC verification and modification.</DocP>

      <DocH2>2. Who This Applies To</DocH2>
      <DocList items={[
        "Any Registered User who wishes to act as Captain of a paid arena — KYC verification is mandatory before the Captain can pay an entry fee or receive prize winnings.",
        "Any Registered User who wishes to act as an Organiser on the Platform — KYC verification is mandatory before a user can create paid arenas and receive Organiser settlements.",
        "Any Registered User who has previously completed KYC verification and wishes to modify any of their KYC data.",
        "Any Registered User who has received prize winnings through a paid arena and needs to provide bank account details for disbursement.",
      ]} />

      <DocH2>3. What KYC Is Required For</DocH2>
      <DocTable rows={[
        [<DocStrong>Platform Action</DocStrong>, <DocStrong>KYC Required?</DocStrong>, <DocStrong>Who Must Be KYC Verified</DocStrong>],
        ['Participating in free arenas as a player or squad member', 'No', 'N/A'],
        ['Participating in paid arenas as a squad member (not Captain)', 'No', 'N/A'],
        ['Acting as Captain of a paid arena', 'Yes', 'The Captain must be KYC verified'],
        ['Paying an entry fee for a paid arena', 'Yes', 'The Captain must be KYC verified before payment'],
        ['Receiving prize winnings from a paid arena', 'Yes', 'The Captain must be KYC verified with a valid bank account'],
        ['Creating and managing paid arenas as an Organiser', 'Yes', 'The Organiser must be KYC verified'],
        ['Receiving Organiser settlements from paid arenas', 'Yes', 'The Organiser must be KYC verified with a valid bank account'],
      ]} />

      <DocH2>PART II — KYC Data Collected</DocH2>

      <DocH2>4. KYC Data Requirements</DocH2>
      <DocH3>4.1 Identity Verification Documents</DocH3>
      <DocTable rows={[
        [<DocStrong>Document Type</DocStrong>, <DocStrong>What Is Verified</DocStrong>, <DocStrong>Why Required</DocStrong>],
        ['Aadhaar Card', "The user's full legal name, date of birth, and address as registered with UIDAI", "Primary identity verification document — establishes the user's real-world identity"],
        ['PAN Card', "The user's Permanent Account Number, full legal name, and date of birth as registered with the Income Tax Department", 'Tax compliance — required for TDS deduction on prize winnings above ₹10,000'],
      ]} />

      <DocH3>4.2 Bank Account Details</DocH3>
      <DocTable rows={[
        [<DocStrong>Data Point</DocStrong>, <DocStrong>Why Required</DocStrong>],
        ['Bank account number', 'Identifies the specific bank account to which prize winnings or Organiser settlements will be disbursed'],
        ['IFSC code', "Identifies the specific branch of the bank that holds the user's account — required for NEFT/IMPS transfer processing"],
        ["Account holder's name (as per bank records)", "Verified against the user's KYC identity to ensure the bank account belongs to the verified identity — prevents fraud"],
      ]} />

      <DocH2>5. How KYC Verification Works</DocH2>
      <DocList items={[
        "Step 1 — The user initiates KYC verification from within the Platform app by navigating to their account settings and selecting the KYC verification option.",
        "Step 2 — The Platform's KYC flow is powered by the eKYC API service provider. The user is directed to the eKYC interface within the Platform app.",
        "Step 3 — The user submits their Aadhaar number for identity verification. The eKYC service performs an Aadhaar-based authentication to verify the user's identity.",
        "Step 4 — The user submits their PAN card number for tax compliance verification. The PAN is verified against the Income Tax Department's records.",
        "Step 5 — The user provides their bank account number and IFSC code for disbursement setup.",
        "Step 6 — The eKYC service verifies the user's bank account details through a bank account verification process.",
        "Step 7 — Once all verification steps are completed successfully, the user's KYC status is updated to 'KYC Verified' on the Platform.",
      ]} />

      <DocH2>6. KYC Verification Timeline</DocH2>
      <DocP>In most cases, KYC verification is completed within minutes of the user completing all steps in the eKYC flow, as the eKYC service performs real-time verification. In some cases, additional manual review may be required, which can extend the timeline to up to 48 hours. The user is notified of their KYC status via in-app notification and email when verification is complete.</DocP>

      <DocH2>7. Failed KYC — Reasons & Next Steps</DocH2>
      <DocTable rows={[
        [<DocStrong>Failure Reason</DocStrong>, <DocStrong>Next Steps</DocStrong>],
        ['Aadhaar verification failed — name mismatch', 'Ensure the name on your Corpse account matches your Aadhaar exactly. If there is a discrepancy, update your name through the Corpse support process before re-attempting KYC.'],
        ['Aadhaar verification failed — OTP not received', 'Ensure your mobile number is linked to your Aadhaar with UIDAI. If not, visit your nearest Aadhaar Enrolment Centre to link your mobile number.'],
        ['PAN verification failed — PAN not found or inactive', 'Verify that your PAN is active and registered with the Income Tax Department. If your PAN is inactive, contact the Income Tax Department to reactivate it.'],
        ['Bank account verification failed', 'Ensure the bank account details are correct — double-check the account number and IFSC code. If the bank account verification still fails, contact support.'],
        ['Document mismatch — name on Aadhaar does not match name on PAN', 'Both documents must show the same legal name. If there is a discrepancy between your Aadhaar and PAN, you will need to correct the discrepancy with the relevant government authority before re-attempting KYC.'],
      ]} />

      <DocH2>8. Minor Users — KYC Prohibition</DocH2>
      <DocP>Minor Users (users who are under 18 years of age based on the date of birth registered on their Corpse account) cannot complete KYC verification and cannot act as Captains of paid arenas or as Organisers. This restriction exists because Minor Users cannot enter into binding contracts under Indian law, and the KYC verification process requires the submission of identity documents that must match the user's registered identity — which cannot be done for users under 18 in the context of financial transactions.</DocP>

      <DocH2>PART III — Financial Consequences of KYC</DocH2>

      <DocH2>9. Prize Disbursement — KYC Required</DocH2>
      <DocP>Prize winnings from paid arenas are disbursed exclusively to the KYC-verified bank account of the winning squad's Captain. The following rules apply:</DocP>
      <DocList items={[
        "Prize winnings are disbursed to the Captain's KYC-verified bank account — not to any other bank account.",
        "The Captain is responsible for distributing prize winnings among their squad members — the Platform does not distribute winnings directly to individual squad members.",
        "Prize winnings are disbursed after a deduction of 30% TDS (Tax Deducted at Source) as required by the Income Tax Act, 1961 for prize winnings — specifically under Section 194B (income from winnings of online games).",
        "TDS is calculated on the net prize amount — after deduction of the entry fee paid by the Captain.",
        "The Company provides a TDS certificate to the Captain for the TDS deducted on each prize disbursement.",
      ]} />

      <DocH2>10. Organiser Settlements — KYC Required</DocH2>
      <DocP>Organiser settlement payments are disbursed exclusively to the KYC-verified bank account of the verified Organiser after the arena concludes and all prize disbursements are completed. The Organiser's settlement represents their financial return from the arena — calculated according to the organiser settlement formula in the Money Deposit & Receive Policy.</DocP>

      <DocH2>PART IV — KYC Modification</DocH2>

      <DocH2>11. What Can Be Modified</DocH2>
      <DocTable rows={[
        [<DocStrong>KYC Data Point</DocStrong>, <DocStrong>Can It Be Modified?</DocStrong>, <DocStrong>Modification Process</DocStrong>],
        ['Bank account number', 'Yes', 'Through the KYC modification flow in the Platform app — requires re-verification of the new bank account'],
        ['IFSC code', 'Yes', 'Updated automatically when the bank account number is re-verified with the new account details'],
        ['Aadhaar-linked identity', 'No — Aadhaar identity cannot be changed', 'N/A — contact support if your Aadhaar details are incorrect due to a Platform error'],
        ['PAN card', 'No — PAN cannot be changed once KYC is verified', 'N/A — contact legal@corpsearena.com if you have a genuine PAN-related issue'],
      ]} />

      <DocH2>12. Bank Account Modification Process</DocH2>
      <DocList items={[
        "Step 1 — The user navigates to their KYC settings in the Platform app and selects the bank account modification option.",
        "Step 2 — The user enters the new bank account number and IFSC code.",
        "Step 3 — The Platform initiates a bank account verification process for the new bank account details through the eKYC service.",
        "Step 4 — Once the new bank account is verified, the Platform updates the user's KYC record with the new bank account details.",
        "Step 5 — The user is notified via in-app notification and email that their bank account has been successfully updated.",
      ]} />

      <DocH2>13. Modification Restrictions</DocH2>
      <DocList items={[
        "Bank account modifications cannot be made while a prize disbursement or Organiser settlement is pending for the user. The modification will be blocked until all pending financial transactions are completed.",
        "Bank account modifications cannot be made while the user is suspended — the user must wait until their suspension ends before initiating a modification.",
        "The new bank account must be in the user's own name — as verified against the KYC identity. Bank accounts in a different name cannot be registered as the disbursement account.",
        "The Platform retains a record of all previous bank account details for audit and compliance purposes — updating your bank account does not erase the record of your previous account.",
      ]} />

      <DocH2>14. No Modifications After Permanent Ban</DocH2>
      <DocP>Once a user is permanently banned from the Platform, their KYC record is locked and no modifications can be made. All financial activity is frozen as a consequence of the permanent ban — as set out in the Account Suspension & Ban T&C. Permanently banned users cannot update their bank account details or receive any prize disbursements or Organiser settlements after the ban is applied.</DocP>

      <DocH2>PART V — Data Security & Third-Party Processing</DocH2>

      <DocH2>15. eKYC Provider — Data Processing</DocH2>
      <DocP>The KYC verification process is powered by an authorised third-party eKYC API service provider. The eKYC provider processes your Aadhaar details, PAN details, and bank account details for the purpose of verifying your identity and bank account. The eKYC provider processes your data under its own privacy policy and data security framework, which complies with Indian data protection law.</DocP>

      <DocH2>16. Data Minimisation</DocH2>
      <DocP>The Company collects only the minimum KYC data necessary to fulfil its legal and operational obligations — identity verification for contractual compliance, PAN for tax compliance, and bank account details for financial disbursement. No additional personal data is collected during the KYC process beyond what is described in Part II of this T&C.</DocP>

      <DocH2>PART VI — Company's Rights</DocH2>

      <DocH2>17. Right to Reject KYC</DocH2>
      <DocP>The Company reserves the right to reject a KYC verification request if: the documents submitted do not match the identity registered on the Corpse account, the documents are suspected to be fraudulent or altered, the Aadhaar or PAN submitted has already been used to verify a different Corpse account, or the eKYC provider is unable to verify the submitted documents through its verification system.</DocP>

      <DocH2>18. Right to Revoke KYC Status</DocH2>
      <DocP>The Company reserves the right to revoke a user's KYC verified status if it discovers post-verification that: the KYC documents submitted were fraudulent or belonged to a different person, the user provided false information during the KYC process, or the user's Aadhaar or PAN is found to have been used in a fraudulent manner on the Platform or externally.</DocP>

      <DocH2>19. Consequences of Fraudulent KYC</DocH2>
      <DocP>Submitting false identity documents, impersonating another person during KYC, or providing fraudulent bank account details during KYC or KYC modification is a Zero Tolerance violation under the Account Suspension & Ban T&C. It will result in: an immediate permanent ban from the Platform, forfeiture of all financial balances, prize winnings, and Organiser settlements, and referral to law enforcement authorities as appropriate under the Indian Penal Code, the Aadhaar Act, and the Information Technology Act.</DocP>

      <DocH2>PART VII — Governing Law, Dispute Resolution & Contact</DocH2>
      <DocP>This KYC T&C is governed by the laws of India. Any dispute arising out of or in connection with the KYC verification or modification process shall be subject to the jurisdiction of the courts of Assam, India.</DocP>
      <DocTable rows={[
        [<DocStrong>Contact Type</DocStrong>, <DocStrong>Email</DocStrong>],
        ['KYC Issues & Disputes', <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
        ['General KYC Support', <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
      ]} />
    </DocShell>
  );
}
