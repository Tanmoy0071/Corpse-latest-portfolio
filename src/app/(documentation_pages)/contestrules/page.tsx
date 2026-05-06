import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Contest Rules | Corpse",
  description: "Official Contest Rules for the Corpse platform.",
};

export default function PolicyPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-32 max-w-5xl min-h-screen flex flex-col items-center text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-[#e8192c] uppercase tracking-wider drop-shadow-[0_0_15px_rgba(232,25,44,0.4)]">
        Official Contest Rules
      </h1>
      <div className="space-y-8 text-white/70 text-lg flex flex-col items-center w-full">

        {/* Intro paragraph visible at top of image 1 */}
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          These rules are required for compliance with Apple App Store guidelines and apply to all users participating in any contest, tournament, or competitive event hosted through the Platform.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>1. Sponsor</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          All contests and tournaments on the Corpse platform are organised and administered solely by{" "}
          <strong>[CORPSE ESPORTS PRIVATE LIMITED]</strong> (&quot;Corpse&quot;, &quot;we&quot;, &quot;us&quot;). These contests are in no way sponsored, endorsed, administered by, or associated with Apple Inc., Google LLC, or any other third-party platform or technology provider through which the Corpse application is distributed or accessed. Any questions, comments, or complaints regarding any contest must be directed to Corpse at{" "}
          <a href="mailto:support@corpse.gg" className="text-[#e8192c] hover:underline transition-colors">support@corpse.gg</a>{" "}
          — not to Apple Inc. or Google LLC.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>2. Eligibility</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          All contests on the Platform are open to registered users aged 16 years or older. Participants who are under the age of 18 years at the time of participation require the prior consent of a parent or legal guardian. By participating, a minor participant confirms that such consent has been obtained. Void where prohibited by applicable law. Employees, directors, officers, and contractors of [CORPSE ESPORTS PRIVATE LIMITED] and their immediate family members residing in the same household are ineligible to participate in any contest offering monetary prizes.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>3. How to Enter</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          To enter a contest, participants must register via the Corpse application before the tournament registration deadline displayed on the individual tournament detail page. Limit of one registration per participant per tournament. For paid tournaments, entry fees are non-refundable once the registration window closes, except in the circumstances described in the Money Deposit and Receive Policy. No purchase is necessary to enter free tournaments.
        </p>

        {/* Section 5 (Tournament Format — numbered 5 in image but logically after How to Enter) */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>4. Tournament Format</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Contests are conducted on Free Fire and Free Fire MAX (published by Garena Online Private Limited). The match format, number of rounds, squad size, scoring rules, and any game-mode-specific rules are specified on the individual tournament detail page within the application. Corpse is not affiliated with, endorsed by, or associated with Garena Online Private Limited. All in-game conduct during contests is also subject to Garena&apos;s own terms of service.
        </p>

        {/* Section 6 Prizes */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>5. Prizes</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Prize pool amounts for each contest are listed on the individual tournament detail page within the application. Winners are determined by final standings at the conclusion of the contest as verified by Corpse&apos;s trust and safety team. Prizes are distributed via bank transfer to the KYC-verified bank account of the winning squad&apos;s Captain within 24 hours of result verification. Prize amounts displayed are gross amounts before applicable tax deductions. Tax Deducted at Source (TDS) at the rate of 30% will be deducted from all prize winnings as required under Section 194B of the Income Tax Act, 1961. Any and all applicable taxes on prize winnings beyond TDS deducted at source are solely the responsibility of the winner. Corpse is not responsible for any additional tax liability arising from prize receipt.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>6. Disqualification</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Corpse reserves the right to disqualify any participant found to be: cheating or hacking during a match; using unauthorised software, emulators, or third-party tools; engaging in match fixing or deliberately manipulating contest outcomes; engaging in unsportsmanlike conduct; registering under false identity or using another player&apos;s in-game ID; or otherwise violating any provision of these Official Contest Rules or the Platform&apos;s Master Terms and Conditions. Decisions made by Corpse regarding disqualification are final and binding. Disqualified participants forfeit all entry fees paid and any prizes that would otherwise have been awarded.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>7. Intellectual Property</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          By participating in any contest on the Platform, participants grant Corpse a non-exclusive, royalty-free licence to use their username, match result data, and in-game performance statistics for the purpose of publishing contest results, operating leaderboards, and promoting the Platform. No other use of participant data is made without explicit consent. All intellectual property relating to the Corpse platform, including its ELO Engine, scoring systems, and contest infrastructure, remains the exclusive property of [CORPSE ESPORTS PRIVATE LIMITED].
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>8. Privacy</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Personal data collected during contest registration and participation is used solely for tournament administration, identity verification, prize disbursement, and regulatory compliance. All data collection and processing is governed by the Corpse Master Privacy Policy, accessible within the Platform under Settings &gt; Legal. Corpse does not sell, rent, or share participant data with any third party for marketing or advertising purposes.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>9. Modifications and Cancellation</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Corpse reserves the right to cancel, modify, or suspend any tournament or contest at its sole discretion. In the event of a cancellation after entry fees have been collected, all registered participants will receive a full refund of their entry fee within 24 hours as described in the Money Deposit and Receive Policy. Corpse is not liable for any loss, damage, or inconvenience arising from the cancellation or modification of any contest beyond the obligation to refund entry fees in circumstances where such refund is applicable.
        </p>

        {/* Section 11 */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>10. Release of Liability</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          By participating in any contest on the Platform, each participant releases and holds harmless [CORPSE ESPORTS PRIVATE LIMITED], its directors, officers, employees, and agents from and against any and all claims, damages, losses, costs, and expenses arising out of or in connection with their participation in the contest — including but not limited to any claim arising from: device or connectivity failure during a match; Garena server unavailability; prize tax obligations; or any decision made by Corpse&apos;s trust and safety team in the administration of the contest. Apple Inc. and Google LLC bear no responsibility for any aspect of these contests and are expressly released from all claims in connection with them.
        </p>

        {/* Section 12 */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          <strong>11. Governing Law</strong>
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          These Official Contest Rules are governed by and construed in accordance with the laws of India. Any dispute arising from or in connection with any contest shall be subject to the dispute resolution mechanism described in the Master Terms and Conditions — including binding arbitration with its seat at Guwahati, Assam, India. These rules are to be read together with the Master Terms and Conditions, the Money Deposit and Receive Policy, the Account Suspension and Ban Terms and Conditions, and all other applicable Corpse legal documents accessible under Settings &gt; Legal within the Platform.
        </p>

      </div>
    </main>
  );
}