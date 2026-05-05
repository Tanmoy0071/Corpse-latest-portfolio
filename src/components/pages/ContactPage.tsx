'use client';
import DocShell, {
  DocTable, DocList, DocH2, DocH3, DocP, DocStrong, DocEm, DocLink, DocNote,
} from './DocPage';

export default function ContactPage() {
  return (
    <DocShell
      tag="Support · Help Centre"
      title="Help Centre"
      subtitle="Your complete guide to Corpse — How-To Guides · FAQs · Troubleshooting · Safety · Glossary"
      version="1.0"
      effectiveDate="May 1, 2026"
      lastUpdated="April 2026"
    >
      <DocTable rows={[
        [<DocStrong key="a">Version</DocStrong>, '1.0'],
        [<DocStrong key="b">Effective Date</DocStrong>, 'May 1, 2026'],
        [<DocStrong key="c">Last Updated</DocStrong>, 'April 2026'],
        [<DocStrong key="d">Support Email</DocStrong>, <DocLink key="se" href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
        [<DocStrong key="e">In-App Support</DocStrong>, 'Settings > Support'],
      ]} />

      <DocNote>
        <DocEm>
          Can't find what you're looking for? Email{' '}
          <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink> or tap Settings &gt; Support. We respond within 24 hours.
        </DocEm>
      </DocNote>

      <DocH2>Section 1 — Quick Reference Card</DocH2>
      <DocP>These are the most important numbers every Corpse player needs to know.</DocP>
      <DocTable rows={[
        [<DocStrong key="a">What</DocStrong>, <DocStrong key="b">The Number</DocStrong>, <DocStrong key="c">Why It Matters</DocStrong>],
        ['Room card delivery', '30 minutes before match', 'Room ID and password arrive 30 mins before your match. Be ready on your phone.'],
        ['Result upload window', '60 seconds', 'Once the organiser uploads their result, you have 60 seconds to upload yours. Miss it and your data will not be counted.'],
        ['Result dispute window', '24 hours after result posted', 'Think the result is wrong? Raise a dispute within 24 hours. After that it is final.'],
        ['Prize disbursement', 'Within 24 hours', 'After Corpse verifies the result, prize money reaches the Captain\'s bank within 24 hours.'],
        ['KYC modification', '3 to 5 working days', 'Updating KYC details takes 3 to 5 working days. Financial activity is frozen during this time.'],
        ['Magic Link validity', '6 hours', 'The login link sent to your email is valid for 6 hours. After that, request a new one.'],
        ['Session auto-expiry', '90 days of inactivity', 'If you do not open the app for 90 days, you will be automatically logged out.'],
        ['Flag expiry', '12 months', 'A flag expires after 1 year. After that it no longer counts toward your total.'],
        ['Appeal response', 'Within 24 hours', 'Appeal a flag, suspension, or ban and Corpse will respond within 24 hours.'],
        ['Organiser settlement', 'Within 24 hours', 'Organisers receive their settlement within 24 hours of the arena ending.'],
        ['Cancellation refund (organiser)', '70% refund', 'If an organiser cancels after depositing but before players register, they get 70% back.'],
        ['Entry fee refund (cancelled arena)', '100% within 24 hours', 'If an arena is cancelled after you paid, you get a full refund within 24 hours.'],
        ['TDS on prize money', '30%', '30% is deducted from your prize before it reaches your bank. This is income tax.'],
        ['Bank payout fee', 'Rs 5.90', 'A Rs 5.90 transfer fee is deducted from every prize disbursement.'],
        ['PG charge on entry fee', '2% of entry fee', 'A 2% payment gateway charge is added on top of your entry fee. This goes to Razorpay, not Corpse.'],
        ['Max guild members', '20', 'A guild can have a maximum of 20 members including all leadership roles.'],
        ['ELO seasonal reset', '60% carry-forward', 'At each seasonal reset, 60% of your ELO carries over to the new season.'],
      ]} />

      <DocH2>Section 2 — What's New</DocH2>

      <DocH3>Live at Launch — May 2026</DocH3>
      <DocList items={[
        'Free Fire arenas — Battle Royale and Clash Squad modes',
        'Squad system — create squads, invite members, register for arenas',
        'ELO Engine — real-time skill ranking for players, squads, and guilds',
        'Ecosystem Pipeline — competitive progression tiers from Initiate to Apex',
        'Guild system — create or join guilds, build guild ELO',
        'KYC verification — for Captains and Organisers',
        'Paid arenas — entry fee collection via Razorpay, prize disbursement to Captain\'s bank',
        'Auto-capture result system — tap to upload your match scoreboard',
        'Player and Guild leaderboards — public rankings updated in real time',
        'In-app support system — raise tickets directly from the app',
      ]} />

      <DocH3>Coming Soon</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">Feature</DocStrong>, <DocStrong key="b">Expected</DocStrong>, <DocStrong key="c">What It Is</DocStrong>],
        ['Organiser Subscriptions', 'October 2026', 'Pro and Elite tiers for organisers unlocking custom arenas, analytics, and reduced commission rates.'],
        ['Multi-game Support', 'Phased rollout', 'Expanding beyond Free Fire to BGMI, CODM, Valorant, CS2, and more.'],
        ['Monthly Leagues', 'January 2027', 'Platform-run monthly competitive leagues. Top 100 players get free entry.'],
        ['Player Subscriptions', 'February 2027', 'Corpse Pass, Corpse Pro, and Corpse Elite tiers unlocking exclusive platform features.'],
        ['Sponsorships and Guild Battles', 'March 2027', 'Brand-sponsored guild battles, in-app banners, and seasonal ladders.'],
        ['OCR Verification', 'April 2027', 'Automatic match result extraction from scorecards. No more manual screenshot uploads.'],
        ['AI Personal Coach', 'Future', 'Personalised match analysis and strategic suggestions based on your play style.'],
        ['Archetype Analytics', 'Future', 'Deep analytics on your Attack, Defence, Support, Strategy, or Balance profile.'],
      ]} />

      <DocH2>Section 3 — Getting Started</DocH2>

      <DocH3>3.1 How to Create Your Account</DocH3>
      <DocList ordered items={[
        'Download the Corpse app from the Google Play Store or Apple App Store.',
        'Open the app and tap Create Account.',
        'Enter your email address. A Magic Link will be sent to your inbox.',
        'Check your email and tap the Magic Link. It is valid for 6 hours.',
        'Choose your username. This is permanent and cannot be changed later.',
        'Enter your date of birth. This determines your access level on the platform.',
        'Select your state or region.',
        'Your account is created. You are now logged in.',
      ]} />
      <DocNote>
        <DocStrong>You can also sign up using Google or Apple. Tap the corresponding button on the sign-up screen instead of entering your email.</DocStrong>
      </DocNote>
      <DocNote>
        <DocEm>If you do not receive the Magic Link email within a few minutes, check your spam folder. If it is still not there, tap Resend Magic Link in the app.</DocEm>
      </DocNote>

      <DocH3>3.2 How to Set Up Your Profile</DocH3>
      <DocList ordered items={[
        'After creating your account, tap your profile icon in the app.',
        'Tap Edit Profile.',
        'Upload an avatar. Your avatar must follow content rules — no NSFW content and no impersonating others.',
        'Tap Add In-Game ID and enter your Free Fire in-game ID. This is the unique ID linked to your Free Fire account.',
        'Tap Save.',
      ]} />
      <DocNote>
        <DocStrong>Your in-game ID must be your actual active Free Fire account ID. Using a wrong or fake ID will result in disqualification when Corpse verifies your identity before a match.</DocStrong>
      </DocNote>

      <DocH3>3.3 How to Log In</DocH3>
      <DocP><DocStrong>Using a Magic Link</DocStrong></DocP>
      <DocList ordered items={[
        'Open the Corpse app and tap Log In.',
        'Enter your registered email address.',
        'Tap Send Magic Link.',
        'Open your email and tap the link. You will be logged in automatically.',
      ]} />
      <DocP><DocStrong>Using Google</DocStrong></DocP>
      <DocList ordered items={[
        'Open the app and tap Log In.',
        'Tap Continue with Google.',
        'Select your Google account. You will be logged in immediately.',
      ]} />
      <DocP><DocStrong>Using Apple</DocStrong></DocP>
      <DocList ordered items={[
        'Open the app and tap Log In.',
        'Tap Continue with Apple.',
        'Authenticate using Face ID, Touch ID, or your Apple ID password.',
      ]} />
      <DocNote>
        <DocStrong>Use the same sign-in method you used when creating your account. If you signed up with Google, log in with Google.</DocStrong>
      </DocNote>

      <DocH3>3.4 How to Sign Out</DocH3>
      <DocList ordered items={[
        'Go to Settings by tapping the settings icon.',
        'Scroll to the bottom and tap Sign Out.',
        'Confirm. You will be returned to the login screen.',
      ]} />
      <DocNote>
        <DocEm>Signing out only logs you out on the current device. Other devices remain logged in. If you are registered for an upcoming arena, signing out does not cancel your registration — but you will not receive the Room Card notification if you are signed out.</DocEm>
      </DocNote>

      <DocH2>Section 4 — Account FAQs</DocH2>

      <DocH3>Can I change my username?</DocH3>
      <DocP>No. Usernames are permanent on Corpse. Once you set it at registration, it cannot be changed under any circumstance. Choose carefully — it is your competitive identity on the platform.</DocP>

      <DocH3>I did not receive my Magic Link email. What do I do?</DocH3>
      <DocP>Check your spam or junk folder first. If it is not there, go back to the login screen and tap Resend Magic Link. If the problem persists after two attempts, email <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>.</DocP>

      <DocH3>Can I have more than one account?</DocH3>
      <DocP>No. Each person may only hold one Corpse account. Operating multiple accounts is a violation of the Master Terms & Conditions and will result in all associated accounts being permanently banned.</DocP>

      <DocH3>What happens if I don't use the app for a long time?</DocH3>
      <DocP>If you do not open the Corpse app for 90 consecutive days, your session will automatically expire and you will be logged out. Your account and data are retained. To log back in, simply open the app and use your usual sign-in method.</DocP>

      <DocH2>Section 5 — KYC Verification</DocH2>

      <DocH3>5.1 How to Complete KYC</DocH3>
      <DocList ordered items={[
        'Go to your Profile and tap Verify Identity (or you will be prompted when you try to create a squad as Captain or register for a paid arena).',
        'Enter your Aadhaar number. An OTP will be sent to your Aadhaar-linked mobile number.',
        'Enter the OTP to verify your Aadhaar.',
        'Enter your PAN card number.',
        'Enter your bank account number and IFSC code.',
        'Submit. KYC verification is typically completed within minutes.',
      ]} />

      <DocH3>5.2 How to Modify Your KYC</DocH3>
      <DocP>KYC modification is not self-service. To modify your KYC details (e.g., change bank account or update PAN), you must:</DocP>
      <DocList ordered items={[
        'Email support@corpsearena.com with the subject line "KYC Modification Request".',
        'Include your Platform username and the details you want to update.',
        'The support team will verify your identity and provide a secure link to a KYC modification portal.',
        'Complete the modification process on the secure portal.',
        'KYC modification takes 3 to 5 working days.',
      ]} />
      <DocNote>
        <DocStrong>Financial activity (receiving prize money, paying entry fees as Captain) is frozen during the KYC modification period. Any prize money won during this period is held in escrow and released once KYC modification is complete.</DocStrong>
      </DocNote>

      <DocH2>Section 6 — Arenas</DocH2>

      <DocH3>6.1 Free vs Paid Arenas</DocH3>
      <DocTable rows={[
        [<DocStrong key="a">Feature</DocStrong>, <DocStrong key="b">Free Arenas</DocStrong>, <DocStrong key="c">Paid Arenas</DocStrong>],
        ['Entry fee', 'None', 'Set by organiser'],
        ['KYC required (Captain)', 'No', 'Yes'],
        ['Prize money', 'Optional (organiser sets)', 'Yes (organiser sets prize pool)'],
        ['ELO tracked', 'Yes', 'Yes (higher ELO weight)'],
        ['Result dispute', 'Yes', 'Yes'],
        ['Refund on cancellation', 'N/A', '100% within 24 hours'],
      ]} />

      <DocH3>6.5 How to Join the Game Room</DocH3>
      <DocList ordered items={[
        '30 minutes before the match, you will receive a push notification with the Room Card.',
        'Open the notification or go to your active arena in the app.',
        'Note down the Room ID and Password.',
        'Open Free Fire on your device.',
        'Go to Custom Room and enter the Room ID and Password.',
        'Wait in the lobby until the organiser starts the match.',
      ]} />

      <DocH3>6.6 How to Submit Your Result</DocH3>
      <DocList ordered items={[
        'Immediately after your match ends, take a screenshot of the end-of-match scoreboard.',
        'Return to the Corpse app. You will see the Result Submission screen for your active arena.',
        'Tap Upload Screenshot and select your scoreboard screenshot.',
        'You have 60 seconds from when the organiser uploads their result to upload yours.',
        'Tap Submit.',
      ]} />
      <DocNote>
        <DocStrong>Missing the 60-second upload window means your squad\'s result will not be recorded for that round. Do not close the Corpse app during a match.</DocStrong>
      </DocNote>

      <DocH2>Section 7 — Payments and Prize Money FAQs</DocH2>

      <DocH3>Why did I receive less than the advertised prize?</DocH3>
      <DocP>Prize money amounts shown in arena listings are gross amounts before deductions. The following are deducted before you receive payment:</DocP>
      <DocList items={[
        'TDS (Tax Deducted at Source) at 30% under Section 194B of the Income Tax Act, 1961.',
        'Bank payout fee of Rs 5.90.',
      ]} />

      <DocH3>How long does it take to receive prize money?</DocH3>
      <DocP>Prize money is disbursed within 24 hours of the arena result being verified by Corpse. The money is transferred to the Captain's KYC-verified bank account via Razorpay. Bank processing times may add 1 to 2 hours after Corpse initiates the transfer.</DocP>

      <DocH2>Section 13 — Safety and Security Tips</DocH2>
      <DocList items={[
        'Never share your Magic Link with anyone. It is a one-time login token — treat it like a password.',
        'Corpse will never ask for your full Aadhaar number, password, or banking credentials via chat, email, or phone call.',
        'If you receive any suspicious communication claiming to be from Corpse, forward it to support@corpsearena.com.',
        'Use a strong, unique password for your email account — your email is your identity on Corpse.',
        'Enable two-factor authentication (2FA) on your email account for additional security.',
        'Always download the Corpse app from the official Google Play Store or Apple App Store only. Beware of unofficial APK files.',
        'If you suspect your account has been compromised, email support@corpsearena.com immediately.',
      ]} />

      <DocH2>Section 15 — Contact Support</DocH2>
      <DocTable rows={[
        [<DocStrong key="a">Contact Type</DocStrong>, <DocStrong key="b">Details</DocStrong>, <DocStrong key="c">Response Time</DocStrong>],
        ['General Support', <DocLink key="gs" href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>, '24 hours'],
        ['Legal / Grievance', <DocLink key="lg" href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>, '30 days'],
        ['In-App Support', 'Settings > Support', '24 hours'],
      ]} />
    </DocShell>
  );
}
