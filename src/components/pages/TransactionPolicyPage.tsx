'use client';
import DocShell, { DocTable, DocList, DocH2, DocH3, DocP, DocStrong, DocEm, DocLink, DocNote } from './DocPage';

export default function TransactionPolicyPage() {
  return (
    <DocShell
      tag="Legal · Financial"
      title="Money Deposit & Receive Policy"
      subtitle="Entry Fees · Escrow · Prize Disbursement · Organiser Settlement · Refunds"
      effectiveDate="May 1, 2026"
      lastUpdated="April 2026"
    >
      <DocTable rows={[
        [<DocStrong>Legal Entity</DocStrong>, '[CORPSE ESPORTS PRIVATE LIMITED]'],
        [<DocStrong>GSTIN</DocStrong>, '[GSTIN: TO BE UPDATED]'],
        [<DocStrong>Payment Provider</DocStrong>, 'Razorpay Software Private Limited'],
        [<DocStrong>Binding On</DocStrong>, 'Players | Organisers | All Financial Participants'],
        [<DocStrong>Jurisdiction</DocStrong>, 'India exclusively'],
        [<DocStrong>Support Contact</DocStrong>, <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
        [<DocStrong>Legal Contact</DocStrong>, <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
      ]} />

      <DocNote><DocEm>By participating in any paid arena, depositing funds, receiving prize winnings, or receiving Organiser settlements on the Corpse platform, you confirm that you have read, understood, and agree to be bound by this Money Deposit & Receive Policy in its entirety.</DocEm></DocNote>

      <DocH2>PART I — Introduction & Scope</DocH2>

      <DocH2>1. Purpose of This Document</DocH2>
      <DocP>This Money Deposit & Receive Policy ("Financial Policy") sets out the complete framework governing all financial transactions on the Corpse platform — including entry fee payments by Captains, Organiser security deposits, escrow management, prize pool disbursement to winning squads, Organiser settlement payments, and refund rules.</DocP>

      <DocH2>2. Who This Policy Applies To</DocH2>
      <DocList items={[
        'Captains of paid arenas — users who pay an entry fee on behalf of their squad to register for a paid arena.',
        'Organisers of paid arenas — users who deposit a security deposit to fund the prize pool of a paid arena and receive a settlement after the arena concludes.',
        'Squad members of paid arenas — users who participate in paid arenas as part of a KYC-verified Captain\'s squad.',
        'Any Registered User who receives prize winnings from a paid arena.',
        'Any user who has funds held in a Platform wallet or escrow account.',
      ]} />

      <DocH2>3. Payment Infrastructure</DocH2>
      <DocP>All financial transactions on the Corpse platform are processed through Razorpay Software Private Limited ("Razorpay") — a licensed payment aggregator and payment gateway regulated by the Reserve Bank of India. The Company does not directly process, store, or handle payment card data, UPI credentials, or net banking credentials. All payment processing is handled entirely by Razorpay's secure payment infrastructure.</DocP>

      <DocH2>4. Supported Payment Methods</DocH2>
      <DocTable rows={[
        [<DocStrong>Payment Method</DocStrong>, <DocStrong>Supported?</DocStrong>, <DocStrong>Notes</DocStrong>],
        ['UPI (Unified Payments Interface)', 'Yes', 'All UPI-enabled apps supported — including GPay, PhonePe, Paytm, and bank UPI apps'],
        ['Net Banking', 'Yes', 'All major Indian banks supported via Razorpay'],
        ['Debit Card (Visa, Mastercard, Rupay)', 'Yes', 'Indian debit cards only'],
        ['Credit Card (Visa, Mastercard)', 'Yes', 'Indian credit cards only'],
        ['International Cards', 'No', 'Not supported — India-only platform'],
        ['Cryptocurrency', 'No', 'Not supported'],
        ['Cash / Offline Payment', 'No', 'Not supported'],
      ]} />

      <DocH2>PART II — Entry Fee — Captain's Payment</DocH2>

      <DocH2>5. Who Pays the Entry Fee</DocH2>
      <DocP>In paid arenas, the entry fee for the entire squad is paid by the Captain — not by individual squad members. The Captain pays a single entry fee amount that covers their entire squad's participation. Individual squad members do not make any payment to the Platform.</DocP>

      <DocH2>6. Entry Fee Amount</DocH2>
      <DocP>The entry fee amount for each paid arena is determined by the Organiser's selected preset and is displayed on the Arena listing page before registration. The entry fee is fixed at the time the Arena is listed — it cannot be changed by the Organiser after the Arena is live for registration. The entry fee is the same for all squads in a given Arena — there are no variable pricing tiers within a single Arena.</DocP>

      <DocH2>7. KYC Requirement Before Entry Fee Payment</DocH2>
      <DocP>A Captain must have completed KYC verification before they can pay an entry fee for any paid arena. Unverified users cannot pay entry fees. This requirement exists to ensure that all financial participants on the Platform are identity-verified, as required by Indian financial regulations and the Company's compliance obligations.</DocP>

      <DocH2>8. Entry Fee — Non-Refundable on Registration</DocH2>
      <DocP>The entry fee paid by the Captain at the time of squad registration is non-refundable once the registration is confirmed — regardless of the reason for not participating. This includes: the squad being unable to join the Arena room, individual squad members being unavailable on the day of the Arena, the Captain voluntarily withdrawing the squad from the Arena, or any other player-side reason for non-participation.</DocP>
      <DocNote><DocStrong>Exception: If the Arena is cancelled by Corpse before the match starts, a full refund of the entry fee is issued to the Captain's Platform wallet.</DocStrong></DocNote>

      <DocH2>9. Entry Fee Payment Processing</DocH2>
      <DocP>Entry fee payments are processed in real-time by Razorpay. Once payment is confirmed, the entry fee is transferred to the Arena's escrow account — it does not go directly to the Organiser. The Platform holds the entry fee in escrow until the Arena concludes and prizes are disbursed.</DocP>

      <DocH2>PART III — Organiser Security Deposit</DocH2>

      <DocH2>10. What the Security Deposit Is</DocH2>
      <DocP>Before a paid Arena can go live for player registration, the Organiser must deposit a security deposit — an amount equal to the guaranteed prize pool for the Arena. The security deposit is held in escrow by the Platform until the Arena concludes, results are verified, and prizes are disbursed to the winning squads.</DocP>

      <DocH2>11. Purpose of the Security Deposit</DocH2>
      <DocP>The security deposit exists to guarantee that prize money is always available for the winning squads — regardless of whether the Arena fills to capacity or how many entry fees are collected. The security deposit is the Organiser's financial commitment to the prizes they have promised to the players who register for the Arena.</DocP>

      <DocH2>12. Security Deposit — Escrow During Arena</DocH2>
      <DocP>From the moment the Organiser deposits the security deposit, those funds are held in the Platform's escrow account and are not accessible to the Organiser until the Arena concludes and the Organiser settlement is processed. The Organiser cannot withdraw the security deposit after it has been lodged, regardless of the reason.</DocP>

      <DocH2>PART IV — Prize Pool Structure & Disbursement</DocH2>

      <DocH2>13. Prize Pool — Guaranteed by the Organiser</DocH2>
      <DocP>The prize pool for each paid Arena is funded entirely by the Organiser's security deposit. The prize pool is guaranteed — the Organiser's security deposit ensures that the prize pool amount is always available for disbursement to winners, regardless of how many squads register for the Arena.</DocP>

      <DocH2>14. Prize Pool Distribution</DocH2>
      <DocP>The distribution of the prize pool among the winning squads is determined by the Organiser's selected preset. Each preset specifies the number of winning positions (e.g., 1st place, 2nd place, 3rd place) and the percentage of the prize pool allocated to each position. The prize pool distribution structure is displayed on the Arena listing page before registration.</DocP>

      <DocH2>15. TDS Deduction on Prize Winnings</DocH2>
      <DocP>Prize winnings from paid arenas are subject to TDS (Tax Deducted at Source) under Section 194B of the Income Tax Act, 1961 (income from winnings of online games). The TDS rate is 30% of the net prize winning — calculated as the gross prize amount minus the entry fee paid by the Captain. The Company deducts TDS before disbursing prize winnings to the Captain's KYC-verified bank account and issues a TDS certificate to the Captain for the TDS deducted.</DocP>
      <DocNote><DocEm>Example: If the gross prize amount is ₹10,000 and the entry fee paid was ₹500, the net prize winning is ₹9,500. TDS at 30% on ₹9,500 = ₹2,850. Net disbursement = ₹6,650. TDS certificate issued for ₹2,850.</DocEm></DocNote>

      <DocH2>16. Prize Disbursement — To Captain's Bank Account</DocH2>
      <DocP>Prize winnings are disbursed to the KYC-verified bank account of the winning squad's Captain. The disbursement is made via NEFT or IMPS bank transfer through Razorpay's payment infrastructure. Prize disbursement timeline: within 48 hours of the Arena's results being verified and confirmed by the Platform — subject to bank processing times.</DocP>

      <DocH2>17. Captain's Responsibility to Distribute Winnings</DocH2>
      <DocP>The Captain is solely responsible for distributing prize winnings among their squad members. The Platform disburses winnings to the Captain's bank account as the designated recipient for the squad. The Platform has no legal obligation to distribute winnings directly to individual squad members and takes no responsibility for any disputes between the Captain and squad members regarding prize distribution.</DocP>

      <DocH2>PART V — Organiser Settlement</DocH2>

      <DocH2>18. What the Organiser Settlement Is</DocH2>
      <DocP>After an Arena concludes, results are verified, and all prize disbursements are completed, the Organiser receives a settlement payment — their financial return from the Arena. The Organiser settlement is calculated as follows:</DocP>
      <DocTable rows={[
        [<DocStrong>Component</DocStrong>, <DocStrong>Amount</DocStrong>],
        ['Total entry fees collected', 'Sum of all entry fees paid by Captains of registered squads'],
        ['Less: Prize pool disbursed', 'Total amount disbursed to winning squads (post-TDS)'],
        ['Less: Platform commission', "The Company's commission percentage as agreed in the Organiser's terms"],
        ['Less: Payment processing fees', "Razorpay's transaction processing fees for all payments processed through the Arena"],
        ['Organiser Settlement', 'The remaining balance after all deductions — disbursed to the Organiser\'s KYC-verified bank account'],
      ]} />

      <DocH2>19. Organiser Settlement Timeline</DocH2>
      <DocP>The Organiser settlement is processed within 72 hours of all prize disbursements being confirmed. The settlement is disbursed to the Organiser's KYC-verified bank account via NEFT or IMPS bank transfer through Razorpay's payment infrastructure — subject to bank processing times.</DocP>

      <DocH2>PART VI — Refund Policy</DocH2>

      <DocH2>20. Entry Fee Refund — Arena Cancelled by Corpse</DocH2>
      <DocP>If the Platform cancels an Arena before the match starts for any reason, a full refund of the entry fee is issued to the Captain's Platform wallet within 24 hours of the cancellation. The Platform wallet credit can be used by the Captain to pay the entry fee for a future Arena on the Platform.</DocP>

      <DocH2>21. Entry Fee Refund — Arena Does Not Fill</DocH2>
      <DocP>If an Arena does not reach its minimum squad threshold by the registration close time, the Arena is cancelled by the Platform. In this case, a full refund of the entry fee is issued to the Captain's Platform wallet within 24 hours of the Arena being cancelled due to insufficient registration.</DocP>

      <DocH2>22. No Refund — Player-Side Reasons</DocH2>
      <DocP>Entry fees are non-refundable for any player-side reason — including but not limited to: the Captain or squad members being unable to join the Arena room, voluntary withdrawal from a registered Arena, device or connectivity issues, squad composition changes, or any other player-side reason for non-participation.</DocP>

      <DocH2>23. No Refund — Disqualification</DocH2>
      <DocP>If a squad is disqualified from an Arena for any reason — including violations of the Arena T&C, use of prohibited software, or result manipulation — the entry fee is forfeited in full. No refund is issued on disqualification, regardless of the reason for disqualification.</DocP>

      <DocH2>24. Organiser Security Deposit — Refund Conditions</DocH2>
      <DocTable rows={[
        [<DocStrong>Scenario</DocStrong>, <DocStrong>Organiser Deposit Outcome</DocStrong>],
        ['Arena concludes successfully', 'Deposit is used to fund prize pool; Organiser receives settlement after deductions'],
        ['Arena cancelled by Corpse before match starts', 'Full security deposit refunded to Organiser after refunding all player entry fees'],
        ['Arena cancelled due to insufficient registration', 'Full security deposit refunded to Organiser'],
        ['Organiser attempts to cancel Arena after registration closes', 'Not permitted — Organiser cannot cancel an Arena after registration closes. Deposit is not refundable in this scenario.'],
        ['Organiser permanently banned before Arena concludes', 'Security deposit is forfeited; Platform manages the Arena resolution and player refunds from the forfeited deposit'],
      ]} />

      <DocH2>PART VII — Platform Wallet</DocH2>

      <DocH2>25. Platform Wallet</DocH2>
      <DocP>The Platform maintains a wallet for each Registered User. The Platform wallet holds: entry fee refunds issued by the Platform, prize credits (in specific promotions — not prize winnings, which are disbursed directly to bank accounts), and promotional credits issued by the Company.</DocP>

      <DocH2>26. Platform Wallet — Not a Payment Account</DocH2>
      <DocP>The Platform wallet is not a licensed payment account, e-wallet, or banking facility. It is a credit balance system managed by the Company for the limited purposes described in Section 25. Platform wallet credits: cannot be withdrawn to a bank account, cannot be transferred to another user, cannot be used for any purpose other than paying entry fees on the Platform, and expire after 12 months from the date of issue if unused.</DocP>

      <DocH2>PART VIII — Financial Consequences of Disciplinary Actions</DocH2>

      <DocH2>27. Suspension — Financial Impact</DocH2>
      <DocList items={[
        'All financial activity is frozen during the suspension — the user cannot pay entry fees, receive prize winnings, or receive Organiser settlements.',
        'Any pending prize disbursements or Organiser settlements are paused for the duration of the suspension.',
        'Upon the end of the suspension period, any paused legitimate financial transactions are processed normally.',
        'Entry fees paid for Arenas that occur during the suspension period are forfeited — the suspended user cannot participate in those Arenas and no refund is issued.',
      ]} />

      <DocH2>28. Permanent Ban — Financial Impact</DocH2>
      <DocList items={[
        'All financial activity is permanently frozen upon application of the ban.',
        'All wallet balances, prize credits, and promotional credits are forfeited in full.',
        'Any pending prize disbursements or Organiser settlements are cancelled in full.',
        'All entry fees paid for Arenas that have not yet concluded are forfeited — no refund is issued.',
        'Any Organiser security deposits held in escrow at the time of the ban are forfeited — the Company manages the resolution of any affected Arenas from the forfeited deposit.',
        'No financial transactions — deposits, withdrawals, prize claims, or settlement payments — can ever be made from a permanently banned account.',
      ]} />

      <DocH2>PART IX — Tax Compliance</DocH2>

      <DocH2>29. TDS Certificates</DocH2>
      <DocP>The Company issues TDS certificates to Captains for all TDS deducted on prize winnings. TDS certificates are issued in the form of Form 16C (TDS on income from winnings) and are available in the Captain's account settings within 30 days of the prize disbursement. Captains should retain these certificates for their own income tax filing purposes.</DocP>

      <DocH2>30. User's Own Tax Obligations</DocH2>
      <DocP>Prize winnings disbursed by the Platform are net of TDS deducted by the Company. However, users remain individually responsible for declaring all income from prize winnings in their personal income tax returns and paying any additional tax that may be due. The Company's TDS deduction does not discharge the user's full tax liability — it is an advance tax deduction, not a final settlement of the user's tax obligation on prize winnings.</DocP>

      <DocH2>PART X — Prohibited Financial Conduct</DocH2>

      <DocH2>31. Money Laundering — Zero Tolerance</DocH2>
      <DocP>The Platform may not be used for any form of money laundering — including using entry fee payments or prize winnings to conceal the origin of illegitimate funds. Any suspected money laundering activity will be reported to the Financial Intelligence Unit — India (FIU-IND) as required by the Prevention of Money Laundering Act, 2002 (PMLA) and will result in an immediate permanent ban.</DocP>

      <DocH2>32. Fraudulent Payments</DocH2>
      <DocP>Using fraudulent payment instruments — including stolen cards, fraudulent UPI credentials, or any other unauthorised payment method — to pay entry fees or Organiser security deposits on the Platform is strictly prohibited and will result in: an immediate permanent ban, reversal of all fraudulent transactions, and referral to law enforcement authorities.</DocP>

      <DocH2>33. Collusion for Financial Gain</DocH2>
      <DocP>Colluding with other players, squads, or Organisers to manipulate arena results for financial gain — including intentionally losing to ensure a predetermined squad wins the prize pool, or Organisers colluding with specific squads to predetermine results — is a Zero Tolerance violation and will result in an immediate permanent ban and forfeiture of all financial balances.</DocP>

      <DocH2>PART XI — Governing Law, Dispute Resolution & Contact</DocH2>
      <DocP>This Financial Policy is governed by the laws of India — specifically the Information Technology Act, 2000, the Payment and Settlement Systems Act, 2007, the Prevention of Money Laundering Act, 2002, and the Income Tax Act, 1961. Any financial dispute arising out of or in connection with this Policy shall be subject to the jurisdiction of the courts of Assam, India.</DocP>
      <DocTable rows={[
        [<DocStrong>Contact Type</DocStrong>, <DocStrong>Email</DocStrong>],
        ['Payment Disputes & Financial Support', <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
        ['Legal & Compliance', <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
      ]} />
    </DocShell>
  );
}
