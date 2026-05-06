import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Money Deposit & Receive Policy | Corpse",
  description: "Money Deposit & Receive Policy for the Corpse platform.",
};

export default function PolicyPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-32 max-w-5xl min-h-screen flex flex-col items-center text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-[#e8192c] uppercase tracking-wider drop-shadow-[0_0_15px_rgba(232,25,44,0.4)]">
        Money Deposit & Receive Policy
      </h1>
      <div className="space-y-8 text-white/70 text-lg flex flex-col items-center w-full">
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>CORPSE </strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>The Operating System for Esports</em>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Money Deposit &amp;</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Receive Policy</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Entry Fees • Escrow • Prize Disbursement • Organiser Settlement •
          Refunds
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>Binding on: Players | Organisers | All Financial Participants</em>
        </p>
        {/* <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
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
                    <strong>GSTIN</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">[GSTIN: TO BE UPDATED]</p>
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
                    <strong>Payment Gateway</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Razorpay India Private Limited</p>
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
                    RBI Guidelines | PMLA 2002 | GST Act 2017 | Income Tax Act
                    1961 | IT Act 2000
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
            </tbody>
          </table>
        </div> */}
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            This Policy governs all financial transactions on the Corpse
            platform including entry fee payments, organiser security deposits,
            prize money disbursement, organiser settlement, and refunds. By
            participating in any financial transaction on the Platform, you
            agree to be bound by this Policy in its entirety.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART I — OVERVIEW &amp; SCOPE
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>1. What This Policy Covers</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Money Deposit &amp; Receive Policy ("Policy") governs all
          financial transactions on the Corpse platform operated by [CORPSE
          ESPORTS PRIVATE LIMITED] ("Company", "we", "us", "our"). It applies to
          every person who participates in any financial transaction on the
          Platform, including players who pay entry fees, organisers who deposit
          security pools, and winners who receive prize money.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Policy covers the following transactions and processes:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Player entry fee payment per tournament via Razorpay</li>
          <li>Organiser security deposit for prize pool funding</li>
          <li>Escrow account structure and money flow</li>
          <li>Platform commission and tax deduction structure</li>
          <li>Prize money disbursement to winning Captains</li>
          <li>Organiser post-arena settlement</li>
          <li>Cancellation and refund scenarios</li>
          <li>Failed payment handling</li>
          <li>KYC requirements for financial participation</li>
          <li>Tax obligations — TDS and GST</li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>2. </strong>
        </h3>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>3. Governing Legal Framework</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          All financial transactions on the Platform are conducted in compliance
          with the following laws and regulations:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Law / Regulation</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Relevance to This Policy</strong>
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Reserve Bank of India (RBI) Guidelines</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Escrow account, nodal account, and payment aggregator
                    compliance
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Prevention of Money Laundering Act, 2002 (PMLA)
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    KYC requirements, financial transaction monitoring, and
                    suspicious transaction reporting
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Goods and Services Tax Act, 2017</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    GST on platform commission — 28% on the commission portion
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Income Tax Act, 1961 — Section 194B / 194BA
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    TDS 30% deduction on prize winnings from games and
                    competitions
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Information Technology Act, 2000</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Digital payment security, electronic records, and online
                    transaction compliance
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Payment and Settlement Systems Act, 2007
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Regulation of payment systems and Razorpay&apos;s operation
                    as a payment aggregator
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Online Gaming (Regulation) Act, 2025</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Compliance with e-sports platform regulations — Corpse is
                    classified as e-sports, not online money gaming
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Corpse is classified as an e-sports platform under the Online Gaming
            (Regulation) Act, 2025. Under Section 2(g) of that Act, e-sports is
            explicitly excluded from the definition of &apos;online money
            game&apos;. This distinction is legally significant and governs how
            Corpse&apos;s entry fee and prize structure is treated under Indian
            law.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART II — ESCROW ACCOUNT &amp; MONEY FLOW
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>4. The Escrow Structure</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          All money transacted on the Platform — including player entry fees,
          organiser security deposits, prize pools, and settlement amounts — is
          held in a single nodal/escrow bank account owned and operated by the
          Company ("Escrow Account"). This account is maintained in compliance
          with RBI guidelines for payment aggregators and nodal accounts.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Escrow Account functions as a trust account — money deposited into
          it is held on behalf of the relevant parties (players, organisers, and
          winners) until the conditions for its release are met. The Company
          does not treat escrow funds as its own revenue until commission
          deductions are formally processed.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: The escrow structure ensures that prize money is always
            available before an arena goes live — the organiser&apos;s security
            deposit must be in escrow before player registration opens. This
            protects players from the risk of participating in an arena where
            prize money is not guaranteed.
          </em>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>5. When Money Moves — Trigger Events</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Money enters and exits the Escrow Account only upon specific trigger
          events. The following table details every money movement:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Event</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Direction</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Amount</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Trigger</strong>
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Organiser deposits security pool</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">IN to Escrow</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Organiser&apos;s chosen preset amount</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Organiser confirms deposit before arena goes live
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Player pays entry fee</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">IN to Escrow</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Entry fee amount (PG fee paid separately)
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Player completes Razorpay payment for tournament slot
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Prize disbursement to Captain</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">OUT of Escrow</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Prize amount minus TDS 30% minus Rs 5.90
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Corpse verifies match result and releases prize
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Organiser settlement</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">OUT of Escrow</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Entry pool minus 10% commission minus GST
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Arena concludes and result is verified — within 24 hours
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Platform commission transfer</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">OUT of Escrow</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Net commission after GST</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Processed simultaneously with organiser settlement
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Arena cancellation refund — player</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">OUT of Escrow</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Full entry fee amount</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Arena is cancelled by any party — within 24 hours
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Organiser cancellation refund</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">OUT of Escrow</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">70% of security deposit</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Organiser cancels after deposit but before registration
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Full organiser refund</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">OUT of Escrow</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">100% of security deposit</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Corpse cancels arena due to platform issue
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>6. What Escrow Is Not</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Escrow Account is strictly a transactional holding account. It is
          not:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            A bank account earning interest — no interest accrues on escrow
            holdings in favour of players or organisers.
          </li>
          <li>
            A savings or investment account — the Company does not invest escrow
            funds.
          </li>
          <li>
            A personal account — players and organisers do not have direct
            access to escrow funds. All disbursements are processed by the
            Company.
          </li>
          <li>
            A guarantee of unlimited liability — the Company&apos;s liability is
            limited to the amounts held in escrow for the specific transaction
            in question.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART III — PLAYER ENTRY FEE PAYMENT
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>7. How Entry Fees Work</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Players pay an entry fee to join a paid arena tournament on the
          Platform. Entry fees are paid directly per tournament. Each time a
          player joins a paid arena, a fresh payment transaction is initiated
          through Razorpay.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Entry fees are set by the organiser from a fixed preset of approved
            amounts. Organisers cannot set arbitrary entry fee amounts outside
            the preset options.
          </li>
          <li>
            Entry fees are collected in the Escrow Account immediately upon
            successful payment confirmation from Razorpay.
          </li>
          <li>
            The entry fee amount displayed to the player in the app is the base
            entry fee. The 2% payment gateway charge is displayed separately and
            is paid by the player on top of the base entry fee.
          </li>
          <li>
            Only KYC-verified users can pay entry fees and participate in paid
            arenas as Captain. Minor Users cannot pay entry fees independently.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>8. Supported Payment Methods</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Entry fee payments are processed through Razorpay India Private
          Limited. The following payment methods are supported:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Payment Method</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Details</strong>
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">UPI</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    All UPI-enabled apps including Google Pay, PhonePe, Paytm,
                    BHIM, and bank UPI apps
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Net Banking</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    All major Indian banks supported through Razorpay&apos;s net
                    banking integration
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Debit Cards</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Visa, Mastercard, and RuPay debit cards issued by Indian
                    banks
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Credit Cards</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Visa, Mastercard, and American Express credit cards
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Mobile Wallets</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Paytm, Mobikwik, and other Razorpay-supported mobile wallets
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: Payment method availability may vary based on Razorpay&apos;s
            current supported options and any RBI directives. The Company is not
            responsible for the unavailability of any specific payment method
            due to Razorpay&apos;s system or banking partner constraints.
          </em>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>9. Payment Gateway Charges</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A payment gateway processing fee of 2% of the entry fee amount is
          charged on every entry fee transaction. This charge is:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Paid by the player — it is added on top of the base entry fee at the
            time of payment.
          </li>
          <li>
            Collected by Razorpay India Private Limited as their service fee for
            processing the transaction.
          </li>
          <li>
            Not retained by the Company — the 2% goes entirely to Razorpay.
          </li>
          <li>
            Clearly displayed to the player before payment confirmation —
            players see the base entry fee and the PG charge separately.
          </li>
        </ul>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Example</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Amount</strong>
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Base entry fee</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 59.00</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">PG charge (2%)</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 1.18</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Total player pays</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 60.18</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Amount received in escrow</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 59.00</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Amount received by Razorpay</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 1.18</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>10. Payment Confirmation</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Upon successful completion of an entry fee payment:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Razorpay sends a server-to-server webhook confirmation to the
            Platform backend.
          </li>
          <li>
            The Platform verifies the webhook signature to confirm the payment
            is genuine and not spoofed.
          </li>
          <li>
            The player&apos;s squad registration is activated and their
            tournament slot is confirmed atomically within a single database
            transaction.
          </li>
          <li>
            A payment receipt and registration confirmation is sent to the
            player&apos;s registered email address within a few minutes of
            payment confirmation.
          </li>
          <li>
            The player receives an in-app notification confirming their slot
            registration.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: Email receipts are transactional communications and cannot be
            opted out of. They serve as the official record of your entry fee
            payment.
          </em>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>11. Failed Payment Handling</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If a payment attempt fails — due to insufficient funds, network
          issues, bank decline, or any other reason:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The payment session is marked as failed in the Platform&apos;s
            system.
          </li>
          <li>
            Any reserved tournament slot is immediately released and made
            available to other players.
          </li>
          <li>
            The player is notified in-app and may retry the payment subject to
            slot availability.
          </li>
          <li>
            If money was debited from the player&apos;s account but the payment
            was not confirmed by Razorpay&apos;s webhook — the amount will be
            automatically refunded by Razorpay to the player&apos;s original
            payment source within 5 to 7 working days.
          </li>
          <li>
            The Company is not responsible for delays in failed payment refunds
            caused by the banking system, Razorpay&apos;s processing timelines,
            or the player&apos;s bank&apos;s processing schedule.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>12. Payment Disputes</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If a player believes they have been incorrectly charged, charged
          twice, or charged for a slot they did not receive, they may raise a
          payment dispute through the following process:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Step 1 — Raise a dispute via in-app support within 48 hours of the
            disputed transaction.
          </li>
          <li>
            Step 2 — Provide the payment reference number (available in the
            email receipt) and a description of the issue.
          </li>
          <li>
            Step 3 — The Company will investigate the dispute in coordination
            with Razorpay and respond within 48 hours.
          </li>
          <li>
            Step 4 — If the dispute is valid, a refund will be processed within
            5 to 7 working days to the original payment source.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Raising a chargeback directly with your bank without
            first raising a dispute through in-app support is a violation of
            this Policy. Entry fees are transferred to the escrow account
            immediately upon payment confirmation — any bank-initiated
            chargeback will be disputed by the Company through Razorpay&apos;s
            chargeback resolution process, and the player&apos;s account may be
            suspended pending resolution.
          </strong>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>13. KYC Requirement for Entry Fee Payment</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          KYC verification is mandatory for any player who wishes to pay an
          entry fee and participate as a Captain in a paid arena. KYC involves
          the submission of government-issued identity documents and bank
          account details to Razorpay, our payment gateway partner.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Minor Users (below 18 years of age) cannot complete KYC verification
            and therefore cannot pay entry fees independently or act as Captain.
          </li>
          <li>
            KYC is processed and stored exclusively by Razorpay in compliance
            with RBI and PMLA requirements. The Company does not store KYC
            documents on its own servers.
          </li>
          <li>
            KYC verification must be complete before a player&apos;s first entry
            fee payment. The Platform will not permit entry fee payment from
            non-KYC-verified users.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: For KYC submission, modification, and related terms, refer to
            the Corpse KYC Modification Terms &amp; Conditions.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART IV — ORGANISER SECURITY DEPOSIT
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>14. Nature of the Security Deposit</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Before an arena can go live for player registration, the organiser
          must deposit a security amount into the Platform&apos;s Escrow
          Account. This deposit serves a dual purpose:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            It functions as the prize pool for the arena — the deposited amount
            (or the portion designated as prize pool within the preset) is what
            winning players receive as prize money.
          </li>
          <li>
            It acts as a commitment mechanism — by depositing upfront, the
            organiser commits to running the arena to completion and ensures
            prize money is guaranteed and available before a single player
            registers.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The security deposit is not a fee charged by the Company — it is the
          organiser&apos;s own money held in escrow on their behalf. After the
          arena concludes, the organiser receives their settlement (entry pool
          minus deductions) in addition to the prize pool having been disbursed
          from their deposit.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>15. Deposit Rules &amp; Restrictions</strong>
        </h3>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The organiser must deposit the full required security amount before
            the arena is published for player registration. No arena can go live
            without a confirmed escrow deposit.
          </li>
          <li>
            Once the deposit is made and the arena goes live, the organiser
            cannot withdraw, modify, or reduce the deposit amount under any
            circumstance.
          </li>
          <li>
            Once player registration has opened, the organiser cannot cancel the
            arena. The arena must run to completion.
          </li>
          <li>
            A bank transfer fee of Rs 5.90 is charged on the organiser&apos;s
            deposit transaction. This fee is paid by the organiser and is
            separate from the deposit amount itself.
          </li>
          <li>
            The deposit amount is determined by the preset chosen by the
            organiser. Organisers cannot set arbitrary deposit amounts outside
            the available preset options.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: An organiser who attempts to cancel an arena after
            players have registered will not be permitted to do so. The Platform
            enforces this restriction technically — cancellation is disabled
            once player registration is open. This protects registered players
            from losing their tournament slots and entry fees.
          </strong>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>16. Preset-Based Deposit Structure</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company maintains a set of approved arena presets. Each preset
          defines the entry fee amount, the security deposit required from the
          organiser, the prize pool structure, and the maximum number of
          participating squads. Organisers must select from these presets when
          creating an arena.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">The preset system ensures:</p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Prize pools are proportionate to entry fees and organiser deposits —
            no arena can be created with an underfunded prize pool.
          </li>
          <li>
            Financial integrity of every arena is maintained — the Company can
            verify that every arena&apos;s prize pool is fully funded before it
            goes live.
          </li>
          <li>
            Consistency in the financial experience for players — players can
            trust that every paid arena they join has a guaranteed prize pool
            backed by the organiser&apos;s escrow deposit.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART V — PLATFORM COMMISSION &amp; TAX STRUCTURE
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>17. Commission on Entry Pool</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company charges a platform commission of 10% on the total entry
          pool collected from all player entry fees in each arena. This
          commission is deducted from the entry pool within the escrow before
          the remaining amount is settled to the organiser.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          GST at 28% is applicable on the platform commission. This GST is
          calculated inclusively within the commission amount — it is not
          charged on top of the 10% commission. The net platform revenue after
          GST is therefore:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Item</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Formula</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Example (100 players x Rs 59)</strong>
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Total entry pool</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Players x entry fee</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 5,900</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Platform commission (10%)</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Entry pool x 10%</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 590</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">GST inside commission (28%)</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Commission x 28 / 128</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 129.06</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Net platform revenue</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Commission minus GST</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 460.94</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Remaining entry pool</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Entry pool minus commission</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 5,309.06</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>18. Commission on Organiser Profit</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          In addition to the commission on the entry pool, the Company charges a
          10% commission on the organiser&apos;s net profit from the arena. The
          organiser&apos;s net profit is calculated as:
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Organiser Profit = Remaining Entry Pool (after platform commission)
          minus Prize Pool (organiser&apos;s security deposit)
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A further 10% commission is charged on this profit, and GST at 28%
          applies inside this commission as well.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>19. Full Worked Example</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following is a complete worked example of all financial flows in a
          single arena with 25 squads (100 players) at Rs 59 entry fee, with an
          organiser security deposit of Rs 4,000:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Item</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Calculation</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Amount</strong>
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Gross entry pool</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">100 players x Rs 59</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 5,900.00</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Platform commission (10%)</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 5,900 x 10%</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 590.00</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">GST inside commission (28%)</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 590 x 28/128</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 129.06</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Net platform revenue from entry pool</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 590 minus Rs 129.06</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 460.94</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Remaining entry pool after commission</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 5,900 minus Rs 590</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 5,310.00</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Organiser gross profit</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 5,310 minus Rs 4,000 (prize pool)</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 1,310.00</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Platform commission on org profit (10%)
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 1,310 x 10%</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 131.00</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">GST on org profit commission (28%)</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 131 x 28/128</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 28.67</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Net platform revenue from org profit</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 131 minus Rs 28.67</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 102.33</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Organiser net profit after commission</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 1,310 minus Rs 131 minus Rs 28.67</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 1,150.33</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Bank payout fee</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Fixed</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 5.90</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Organiser final settlement</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Security deposit refund + net profit minus bank fee
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Rs 4,000 + Rs 1,150.33 minus Rs 5.90 = Rs 5,144.43
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Total platform earned</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Net entry commission + net org commission
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 460.94 + Rs 102.33 = Rs 563.27</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: Prize pool disbursement (from organiser&apos;s Rs 4,000
            deposit) is handled separately — 1st place receives 50%, 2nd place
            30%, 3rd place 20% by default, subject to TDS deduction and bank
            payout fee per winner.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART VI — PRIZE MONEY DISBURSEMENT — PLAYERS
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>20. Prize Pool Source</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The prize pool for every arena on the Platform is funded entirely and
          exclusively from the organiser&apos;s security deposit held in escrow.
          Player entry fees do not contribute to the prize pool — they form the
          organiser&apos;s revenue (after platform commission deductions). This
          structure ensures:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Prize money is always pre-funded and available before any player
            registers.
          </li>
          <li>
            Players can trust that participating in a paid arena guarantees
            prize money exists — it is held in escrow from the moment the arena
            goes live.
          </li>
          <li>
            The prize pool amount is fixed and determined by the
            organiser&apos;s preset selection — it cannot be reduced after the
            arena goes live.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>21. Winner Count &amp; Prize Split</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Organisers may configure the number of prize-winning positions and the
          prize split percentage for each winner position, within the options
          provided by their selected preset. The default prize distribution is:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Position</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Default Split</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Example (Rs 4,000 prize pool)</strong>
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">1st Place</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">50%</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 2,000</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">2nd Place</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">30%</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 1,200</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">3rd Place</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">20%</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 800</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Organisers may customise the number of winner positions (up to 5
          winners) and the prize split percentages using credits, subject to the
          preset options available. Custom prize structures must be set before
          the arena goes live and cannot be modified after player registration
          opens.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: Regardless of customisation, total prize distribution across
            all winner positions must always equal 100% of the designated prize
            pool amount. The Platform enforces this constraint technically.
          </em>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>22. Result Verification Before Disbursement</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Prize money is not disbursed automatically upon arena conclusion. The
          Company verifies the match result before releasing any prize payment.
          This verification process:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Confirms the accuracy of the submitted match results against
            available match data.
          </li>
          <li>
            Verifies that the winning squad&apos;s registration, payment, and
            eligibility records are in order.
          </li>
          <li>
            Checks for any pending fraud or cheating flags on the winning squad
            or its members.
          </li>
          <li>
            Is completed within 24 hours of arena conclusion under normal
            circumstances.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Prize disbursement will only be initiated after result verification is
          successfully completed. The Company reserves the right to withhold
          disbursement pending investigation if any irregularity is detected
          during verification.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>23. Disqualification &amp; Winner Ladder</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If a squad that has been determined as a winner is subsequently
          disqualified — for cheating, use of prohibited software, match
          manipulation, or any violation of the Platform&apos;s Terms and
          Conditions — the following applies:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>The disqualified squad&apos;s prize is not disbursed to them.</li>
          <li>
            The winner ladder is modified — the next eligible squad in the
            ranking moves up to receive the prize position vacated by the
            disqualified squad.
          </li>
          <li>
            The prize amount for the disqualified position is disbursed to the
            newly eligible squad after re-verification.
          </li>
          <li>
            The disqualified squad&apos;s entry fee is forfeited and not
            refunded.
          </li>
          <li>
            The Company reserves the right to permanently ban disqualified
            players from the Platform and to report serious violations to
            relevant authorities.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Disqualification after prize disbursement is not
            possible. Once prize money has been disbursed to a Captain&apos;s
            KYC-verified bank account, the transaction is final and
            irreversible. This is why result verification is mandatory before
            any disbursement.
          </strong>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>24. Fraud Detection &amp; Prize Freeze</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If the Company detects indicators of fraud, cheating, match
          manipulation, or collusion in connection with an arena result before
          prize disbursement:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The prize money is immediately frozen in escrow — pending state —
            and disbursement is halted.
          </li>
          <li>
            The Company initiates an immediate investigation into the flagged
            activity.
          </li>
          <li>
            The investigation and resolution will be completed within 24 hours
            of the freeze being applied.
          </li>
          <li>
            If the investigation clears the winning squad — prize money is
            released and disbursed within the same 24-hour window.
          </li>
          <li>
            If the investigation confirms fraud or cheating — the winning squad
            is disqualified, the winner ladder is modified, and the prize is
            disbursed to the next eligible squad after re-verification.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: The 24-hour fraud investigation window is a firm commitment.
            The Company will not hold prize money beyond 24 hours without
            communicating the reason to the affected parties via in-app
            notification and email.
          </em>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>25. TDS Deduction on Prize Winnings</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Tax Deducted at Source (TDS) is deducted from all prize winnings
          before disbursement to the Captain, in compliance with Section 194B
          and Section 194BA of the Income Tax Act, 1961.
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Item</strong>
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
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">TDS Rate</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">30% of gross prize amount</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Applicable Section</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Section 194B / 194BA — Income Tax Act, 1961
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Deducted By</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    [CORPSE ESPORTS PRIVATE LIMITED] at time of prize
                    disbursement
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Threshold</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Applicable on all prize amounts — no minimum threshold
                    exemption for e-sports prizes
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">TDS Certificate</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Not issued separately. TDS deducted is reflected in Form
                    26AS of the recipient.
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Example</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Gross prize Rs 2,000 — TDS Rs 600 (30%) — Net disbursed Rs
                    1,400
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: TDS deducted by the Company will be deposited with the
            Government of India and will appear in the Captain&apos;s Form 26AS.
            Players are responsible for filing their own income tax returns and
            claiming TDS credit. The Company is not a tax advisor and this
            Policy does not constitute tax advice.
          </em>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>26. Bank Payout Fee</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A bank payout processing fee of Rs 5.90 is deducted from each prize
          disbursement transaction. This fee covers the cost of the bank
          transfer from the escrow account to the Captain&apos;s registered bank
          account. It is deducted after TDS.
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Prize Disbursement Calculation</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Example (1st Place — Rs 2,000 prize pool)</strong>
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Gross prize amount</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 2,000.00</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">TDS deducted (30%)</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 600.00</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Amount after TDS</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 1,400.00</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Bank payout fee</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 5.90</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Net amount received</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Rs 1,394.10</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>27. Captain Receives — Squad Distribution</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          All prize money for a squad is disbursed to the Captain&apos;s
          KYC-verified bank account only. The Platform does not distribute prize
          money to individual squad members directly.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The Captain is solely responsible for distributing the squad&apos;s
            prize winnings among squad members by any means they mutually agree
            upon.
          </li>
          <li>
            The Company bears absolutely no liability for any dispute,
            disagreement, or failure to distribute prize money between squad
            members.
          </li>
          <li>
            The Captain&apos;s acceptance of the prize constitutes full and
            final settlement by the Platform of the prize obligation for that
            squad.
          </li>
          <li>
            Squad members who have a dispute about prize distribution must
            resolve it directly with their Captain. The Platform&apos;s
            grievance mechanism does not cover internal squad prize disputes.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: If you are a squad member relying on your Captain to
            distribute prize winnings — ensure you have a clear agreement with
            your Captain before joining a paid arena. The Platform has no
            authority to intervene in or enforce internal squad prize
            distribution arrangements.
          </strong>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>28. Disbursement Timeline</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Prize money disbursement to the Captain&apos;s KYC-verified bank
          account will be initiated within 24 hours of successful result
          verification. The timeline breakdown is as follows:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Stage</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Timeline</strong>
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Arena concludes</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">T + 0</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Result submission by organiser</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">T + 0 to T + 2 hours</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Corpse result verification</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    T + 2 to T + 6 hours (normal) / up to T + 24 hours (with
                    fraud check)
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Prize disbursement initiated</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Within T + 24 hours of arena conclusion
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Amount credited to Captain&apos;s bank account
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    T + 24 hours to T + 48 hours (subject to bank processing)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: Bank processing timelines after the Company initiates
            disbursement are outside the Company&apos;s control. NEFT/IMPS
            transfers typically credit within the same day but may take up to 2
            working days depending on the Captain&apos;s bank.
          </em>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>29. Irreversibility of Disbursement</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Once prize money has been disbursed and credited to the Captain&apos;s
          KYC-verified bank account, the transaction is final and irreversible
          under all circumstances. The Company will not recall, reverse, or
          cancel any disbursed prize payment after it has been credited.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">This irreversibility applies even in cases of:</p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Subsequent discovery of rule violations by the winning squad that
            were not detected during result verification.
          </li>
          <li>
            Disputes raised by other squads regarding the match result after
            disbursement.
          </li>
          <li>
            Internal squad disputes about prize distribution after the Captain
            has received the funds.
          </li>
          <li>
            Account deletion or suspension of the Captain after disbursement.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART VII — ORGANISER SETTLEMENT
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>30. Settlement Calculation</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          After the arena concludes and the result is verified, the
          organiser&apos;s settlement is calculated and processed. The organiser
          receives:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Full security deposit refund — the organiser&apos;s original
            security deposit is returned in full (the prize pool amount having
            been paid out to winners separately from escrow).
          </li>
          <li>
            Organiser&apos;s share of the entry pool — all entry fees collected
            from players, minus the Platform&apos;s 10% commission (inclusive of
            GST), minus the Platform&apos;s 10% commission on the
            organiser&apos;s net profit (inclusive of GST).
          </li>
          <li>
            Settlement is calculated on the full entry pool including entry fees
            from any disqualified players — disqualifications do not reduce the
            organiser&apos;s settlement.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          A bank payout fee of Rs 5.90 is deducted from the total settlement
          amount before transfer.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>31. GST Invoice</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company will issue a GST invoice to the organiser for the platform
          commission charged on their arena. The invoice will detail:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>The gross entry pool amount.</li>
          <li>The platform commission charged (10% of entry pool).</li>
          <li>The GST component within the commission (28%).</li>
          <li>The platform commission on organiser profit (10%).</li>
          <li>The GST on the organiser profit commission (28%).</li>
          <li>The Company&apos;s GSTIN: [GSTIN: TO BE UPDATED].</li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The GST invoice will be sent to the organiser&apos;s registered email
          address within 24 hours of settlement processing. Organisers who
          require the invoice for their own GST filings should ensure their
          email address is accurate and up to date in their Platform profile.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>32. Settlement Timeline</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Organiser settlement — including both the security deposit refund and
          the entry pool share — will be initiated within 24 hours of arena
          conclusion and result verification. The settlement is transferred
          directly to the organiser&apos;s KYC-verified bank account.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: Settlement and prize disbursement to the Captain are processed
            simultaneously — both are initiated within the same 24-hour window
            after result verification.
          </em>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>33. Platform Technical Failure — Settlement Guarantee</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If an arena fails to complete due to a technical issue on the
          Platform&apos;s side — including server downtime, payment system
          failure, or any other issue attributable to the Company — the
          following applies:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The organiser receives a full refund of their security deposit —
            100% with no deduction.
          </li>
          <li>
            All players receive a full refund of their entry fees within 24
            hours.
          </li>
          <li>
            The Company bears the cost of the bank payout fees for all refund
            transactions in this scenario.
          </li>
          <li>
            No platform commission is charged on an arena that did not complete
            due to a platform-side issue.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            A platform technical failure means an issue caused by the
            Company&apos;s systems. It does not include failures caused by the
            organiser&apos;s actions, player device issues, game publisher
            downtime (e.g., BGMI server maintenance), or third-party internet
            connectivity issues.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART VIII — CANCELLATION &amp; REFUND POLICY
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>34. Organiser Cancellation — Before Players Register</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If an organiser cancels an arena after depositing the security amount
          but before any player has registered or paid an entry fee:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The organiser receives a 70% refund of their security deposit.
          </li>
          <li>
            30% of the security deposit is deducted as a cancellation fee by the
            Platform.
          </li>
          <li>
            The bank payout fee of Rs 5.90 is deducted from the refund amount.
          </li>
          <li>
            The refund is processed within 24 hours of the cancellation request.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: The 30% cancellation deduction exists to discourage frivolous
            arena creation and cancellation, which disrupts the platform
            ecosystem and damages the experience for players who may have
            scheduled their time around the arena.
          </em>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>35. Arena Locked — Once Player Registration Opens</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Once player registration is open for an arena, the organiser cannot
          cancel the arena under any circumstance. This restriction is enforced
          technically by the Platform — the cancellation option is disabled once
          the first player registers.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This policy exists to protect registered players who have paid entry
          fees and scheduled their time to participate. Organisers who attempt
          to circumvent this restriction will face:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Account suspension pending investigation.</li>
          <li>Potential forfeiture of security deposit.</li>
          <li>
            Possible permanent ban from organiser privileges on the Platform.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>36. Arena Cancelled After Player Entry Fees Paid</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If an arena is cancelled for any reason after players have paid entry
          fees — including cancellation by Corpse due to a platform issue — all
          registered players receive a full refund of their entry fees:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Full entry fee amount refunded — 100%, no deductions.</li>
          <li>Refund processed within 24 hours of cancellation.</li>
          <li>
            Refund issued to the original payment source used by the player.
          </li>
          <li>
            The 2% PG charge paid by the player at the time of entry fee payment
            — whether this is also refunded is subject to Razorpay&apos;s refund
            policy for the specific payment method used.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>37. Arena Cancelled by Corpse</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If the Company cancels an arena due to a platform-side technical
          issue, policy violation by the organiser, or any other reason within
          the Company&apos;s control:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Full security deposit refunded to organiser — 100%, no deduction,
            within 24 hours.
          </li>
          <li>
            Full entry fee refunded to all registered players — 100%, within 24
            hours.
          </li>
          <li>
            All bank payout fees for refund transactions are borne by the
            Company.
          </li>
          <li>No platform commission is charged.</li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>38. Entry Fee Non-Refundable Once Tournament Starts</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Once a tournament has officially started — meaning the first match of
          the arena has commenced — entry fees are non-refundable under any
          circumstance, including:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Player&apos;s own device failure, connectivity issues, or inability
            to participate after the tournament starts.
          </li>
          <li>
            Player&apos;s voluntary withdrawal from the tournament after it
            starts.
          </li>
          <li>
            Player disqualification for rule violations after the tournament
            starts.
          </li>
          <li>
            Player&apos;s account suspension or ban after the tournament starts.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Entry fees are non-refundable once the tournament starts.
            Ensure you are ready and able to participate before paying an entry
            fee. The Platform is not responsible for your inability to
            participate due to personal device, connectivity, or scheduling
            issues.
          </strong>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>39. Disqualified Player Entry Fee</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If a player is disqualified from a tournament for cheating, use of
          prohibited software, match manipulation, or any violation of the
          Platform&apos;s rules:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The disqualified player&apos;s entry fee is permanently forfeited —
            no refund is issued under any circumstance.
          </li>
          <li>
            The forfeited entry fee remains in the escrow and is treated as part
            of the entry pool for commission calculation purposes.
          </li>
          <li>
            The organiser&apos;s settlement is not reduced by the
            disqualification — it is calculated on the full entry pool including
            the disqualified player&apos;s entry fee.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>40. Failed Payment Refund</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If a payment attempt fails after money has been debited from a
          player&apos;s account but before confirmation is received by the
          Platform:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Razorpay automatically initiates a refund to the player&apos;s
            original payment source.
          </li>
          <li>
            Refund timeline is 5 to 7 working days from the date of the failed
            transaction, subject to the player&apos;s bank processing schedule.
          </li>
          <li>
            The Company will cooperate fully with Razorpay&apos;s refund process
            and provide any transaction evidence required.
          </li>
          <li>
            Players experiencing delayed failed payment refunds should contact
            <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a> with their Razorpay transaction reference number.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART IX — KYC REQUIREMENTS
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>41. KYC Mandatory Transactions</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          KYC (Know Your Customer) verification is mandatory for the following
          financial activities on the Platform:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Transaction</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>KYC Required?</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Why</strong>
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Paying an entry fee as Captain</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes — mandatory</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Financial transaction — RBI and PMLA compliance
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Receiving prize money as Captain</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes — mandatory</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Prize disbursement requires verified bank account
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Receiving organiser settlement</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Yes — mandatory</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Settlement disbursement requires verified bank account
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Joining a paid arena as squad member</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Squad members do not pay — only Captain pays
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Joining a free arena</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No financial transaction involved</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Viewing the Platform as a Guest</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">No financial transaction involved</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          KYC is processed exclusively by Razorpay India Private Limited. The
          Company does not store, access, or retain KYC documents on its own
          servers. All KYC data is subject to Razorpay&apos;s privacy policy and
          RBI/PMLA retention requirements.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>42. Minor Users</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Users below 18 years of age (Minor Users) are prohibited from
          participating in any financial transaction on the Platform.
          Specifically:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Minor Users cannot pay entry fees.</li>
          <li>Minor Users cannot act as Captain of a paid squad.</li>
          <li>Minor Users cannot receive prize money.</li>
          <li>Minor Users cannot complete KYC verification.</li>
          <li>
            Minor Users can participate in paid arenas only as squad members —
            invited by a KYC-verified Captain. Their participation does not
            involve any direct financial transaction.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART X — TAX OBLIGATIONS
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>43. TDS on Prize Winnings</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company deducts Tax at Source (TDS) from all prize winnings at 30%
          before disbursement, in compliance with Section 194B and Section 194BA
          of the Income Tax Act, 1961. The TDS is deposited with the Government
          of India and reflected in the recipient&apos;s Form 26AS.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>TDS rate: 30% of gross prize amount.</li>
          <li>
            No TDS certificate is issued separately by the Company. Players
            should access their Form 26AS on the Income Tax Department&apos;s
            portal to verify TDS credit.
          </li>
          <li>
            TDS deduction applies regardless of the prize amount — there is no
            minimum threshold exemption for e-sports prize winnings.
          </li>
          <li>
            The recipient (Captain) is responsible for including prize income in
            their income tax return and for compliance with all personal income
            tax obligations beyond the TDS deducted at source.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>44. GST on Platform Commission</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          GST at 28% is applicable on the platform commission charged by the
          Company on entry pools and organiser profits. This GST is calculated
          inclusively within the commission amount.
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>The Company&apos;s GSTIN is: [GSTIN: TO BE UPDATED].</li>
          <li>
            A GST invoice is issued to organisers for every arena settlement,
            detailing the commission charged and the GST component.
          </li>
          <li>
            Players are not charged GST separately — the 10% commission deducted
            from the entry pool already includes the GST component.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>45. User Tax Responsibilities</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Each user — whether player or organiser — is individually responsible
          for:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Filing their own income tax returns and reporting all income earned
            through the Platform, including prize winnings (net of TDS) and
            organiser profits.
          </li>
          <li>
            Maintaining their own financial records of Platform transactions for
            tax purposes. The Company recommends retaining all payment receipts
            and GST invoices received from the Platform.
          </li>
          <li>
            Complying with all applicable GST obligations if the organiser is a
            GST-registered entity.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: The Company is not a tax advisor. Nothing in this Policy
            constitutes tax advice. Users should consult a qualified chartered
            accountant or tax professional for guidance on their specific tax
            obligations arising from Platform transactions.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART XI — PROHIBITED CONDUCT &amp; CONSEQUENCES
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>46. Prohibited Financial Conduct</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following financial conduct is strictly prohibited on the
          Platform:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Fraudulent payment — submitting a payment using stolen, cloned, or
            unauthorised payment credentials.
          </li>
          <li>
            Chargeback abuse — initiating a bank chargeback for a valid entry
            fee payment that was properly processed and for which a tournament
            slot was received.
          </li>
          <li>
            Entry pool manipulation — any attempt to artificially inflate or
            manipulate the entry pool of an arena for financial gain.
          </li>
          <li>
            Result manipulation for financial gain — colluding with other
            players, squad members, or the organiser to predetermine match
            results in order to win prize money fraudulently.
          </li>
          <li>
            Organiser-player collusion — an organiser and players coordinating
            to manipulate entry fee payments, prize distribution, or settlement
            amounts.
          </li>
          <li>
            Multiple account exploitation — creating multiple accounts to
            participate in the same arena and claim prize money through
            different accounts.
          </li>
          <li>
            KYC fraud — submitting false, forged, or another person&apos;s
            identity documents for KYC verification.
          </li>
          <li>
            Fake cancellation — creating arenas with no intention of running
            them, collecting entry fees, and then attempting cancellation.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>47. Consequences</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Any user found to have engaged in prohibited financial conduct is
          subject to the following consequences, at the Company&apos;s sole
          discretion:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>Immediate account suspension pending investigation.</li>
          <li>
            Permanent ban from the Platform and forfeiture of all funds in
            connection with the prohibited activity.
          </li>
          <li>
            Recovery of any fraudulently obtained prize money or settlement
            amounts through legal proceedings.
          </li>
          <li>
            Reporting to relevant law enforcement authorities, including the
            Financial Intelligence Unit (FIU-IND) under PMLA for suspicious
            financial activity.
          </li>
          <li>
            Civil legal action for damages arising from the prohibited conduct.
          </li>
          <li>
            Criminal complaint under applicable provisions of the Indian Penal
            Code, IT Act 2000, and PMLA 2002.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART XII — GOVERNING LAW, DISPUTE RESOLUTION &amp; CONTACT
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>48. Governing Law</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Policy shall be governed by and construed in accordance with the
          laws of India, including the RBI Guidelines, PMLA 2002, GST Act 2017,
          Income Tax Act 1961, IT Act 2000, and the Payment and Settlement
          Systems Act 2007, as amended from time to time.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>49. Dispute Resolution</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Any dispute arising from or in connection with this Policy shall first
          be attempted to be resolved through good-faith negotiation by
          contacting <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a>. If unresolved within 30 days, the
          dispute shall be submitted to binding arbitration under the
          Arbitration and Conciliation Act, 1996. The seat of arbitration shall
          be Guwahati, Assam, India. The language of arbitration shall be
          English.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          For urgent payment matters — including frozen prizes or delayed
          settlements — the Company commits to responding within 24 hours of
          contact at <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a>.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>50. Contact</strong>
        </h3>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
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
                    <strong>GSTIN</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">[GSTIN: TO BE UPDATED]</p>
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
                    <strong>Payment Dispute</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Raise via in-app support within 48 hours of transaction
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Prize / Settlement Issue</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Contact <a href="mailto:support@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">support@corpsearena.com</a> — response within 24 hours
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Fraud Report</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <a href="mailto:legal@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">legal@corpsearena.com</a> — response within 24 hours
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Money Deposit &amp; Receive Policy was last updated in April 2026
          and is effective from May 1, 2026.
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
