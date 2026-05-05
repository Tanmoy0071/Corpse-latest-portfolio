'use client';
import DocShell, { DocTable, DocList, DocH2, DocH3, DocP, DocStrong, DocEm, DocLink, DocNote } from './DocPage';

export default function SignoutPolicyPage() {
  return (
    <DocShell
      tag="Legal · Sessions"
      title="Sign Out & Auto-Expiry Policy"
      subtitle="Sessions · Sign Out · Inactivity · Force Termination · Re-Login"
      effectiveDate="May 1, 2026"
      lastUpdated="April 2026"
    >
      <DocTable rows={[
        [<DocStrong>Legal Entity</DocStrong>, '[CORPSE ESPORTS PRIVATE LIMITED]'],
        [<DocStrong>Governed By</DocStrong>, 'Master Terms & Conditions | Account Suspension & Ban T&C | Privacy Policy'],
        [<DocStrong>Binding On</DocStrong>, 'All Registered Users | All Active Sessions'],
        [<DocStrong>Jurisdiction</DocStrong>, 'India exclusively'],
        [<DocStrong>Support Contact</DocStrong>, <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
        [<DocStrong>Legal Contact</DocStrong>, <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
      ]} />

      <DocNote><DocEm>By creating an account and logging in to the Corpse platform, you confirm that you have read, understood, and agree to be bound by this Sign Out & Auto-Expiry Policy in its entirety. This Policy describes how user sessions are managed, when sessions are automatically terminated, and the consequences of session termination on Platform activity.</DocEm></DocNote>

      <DocH2>PART I — Introduction & Scope</DocH2>

      <DocH2>1. Purpose of This Policy</DocH2>
      <DocP>This Sign Out & Auto-Expiry Policy ("Session Policy") sets out the framework governing how user sessions are created, managed, and terminated on the Corpse platform. It covers voluntary sign-out, automatic session expiry due to inactivity, force session termination triggered by security or disciplinary events, and the re-login process after session termination.</DocP>

      <DocH2>2. What a Session Is</DocH2>
      <DocP>A session is an authenticated, active connection between a Registered User's device and the Corpse Platform backend. A session is created when a user successfully authenticates with the Platform — via the Magic Link, Google Sign-In, or Apple Sign-In — and remains active until the session is terminated by the user, by the Platform's inactivity timer, or by a force session termination event.</DocP>
      <DocP>Sessions are stateful — the Platform maintains a session token on the user's device that authenticates all subsequent requests to the Platform backend without requiring the user to re-authenticate for every action. This session token is the mechanism by which you stay "logged in" to the Platform between app uses.</DocP>

      <DocH2>3. Relationship to Other Corpse Policies</DocH2>
      <DocTable rows={[
        [<DocStrong>Policy</DocStrong>, <DocStrong>Relevance to Session Management</DocStrong>],
        ['Master Terms & Conditions', "Governs the user's overall Platform relationship — including the user's obligation to maintain the security of their device and session"],
        ['Account Suspension & Ban T&C', 'Force session termination is applied as an immediate consequence of account suspension or permanent ban'],
        ['Account Creation & Deletion Privacy Policy', 'Governs the authentication event log created at the point of sign-up and deletion — which is also relevant to session creation'],
        ['Privacy Policy (Full)', 'Governs the data processed during session management — including session tokens and authentication event logs'],
      ]} />

      <DocH2>PART II — Session Creation & Authentication</DocH2>

      <DocH2>4. How a Session Is Created</DocH2>
      <DocP>A session is created when a Registered User successfully authenticates with the Platform using one of the three supported authentication methods:</DocP>
      <DocTable rows={[
        [<DocStrong>Authentication Method</DocStrong>, <DocStrong>Session Creation Process</DocStrong>],
        ['Passwordless Email (Magic Link)', "The user enters their registered email address, receives a Magic Link via email, and clicks the Magic Link to authenticate. Upon clicking the Magic Link, the Platform validates the token and creates a new authenticated session."],
        ['Google Sign-In', "The user selects 'Continue with Google', authenticates with their Google account via Google's OAuth 2.0 infrastructure, and the Platform receives confirmation of successful authentication from Google. Upon confirmation, the Platform creates a new authenticated session."],
        ['Apple Sign-In', "The user selects 'Continue with Apple', authenticates with their Apple ID via Apple's Sign In with Apple infrastructure, and the Platform receives confirmation of successful authentication from Apple. Upon confirmation, the Platform creates a new authenticated session."],
      ]} />

      <DocH2>5. Session Tokens — What They Are & How They Work</DocH2>
      <DocP>When a session is created, the Platform generates a session token — a cryptographically secure, unique identifier that is stored on the user's device. This session token:</DocP>
      <DocList items={[
        'Authenticates all subsequent requests from the user\'s device to the Platform backend without requiring the user to re-authenticate with their email or social sign-in for every action.',
        'Is stored securely on the user\'s device in the app\'s secure storage system — it is not stored in a browser cookie and is not accessible to other apps on the device.',
        'Is not shared with any third party — it is used exclusively for authentication between the user\'s device and the Corpse Platform backend.',
        'Is unique to the device and session — a user who is logged in on two devices simultaneously has two separate session tokens.',
        'Is invalidated immediately and permanently when the session is terminated — by sign-out, inactivity expiry, or force termination.',
      ]} />

      <DocH2>PART III — Voluntary Sign-Out</DocH2>

      <DocH2>6. How to Sign Out</DocH2>
      <DocP>A Registered User can voluntarily sign out of the Corpse Platform at any time by: navigating to their account settings within the Platform app and selecting the "Sign Out" option, or using any Platform-provided sign-out button or link. Sign-out is immediate and permanent for that session — there is no confirmation step or undo option once sign-out is initiated.</DocP>

      <DocH2>7. What Happens When You Sign Out</DocH2>
      <DocList items={[
        "The session token stored on the user's device is immediately invalidated — it cannot be reused to re-authenticate.",
        'The user is immediately logged out of the Platform on the device from which they signed out.',
        'If the user is currently in an active Arena match at the time of sign-out, the sign-out does not remove them from the match — the match continues without interruption. However, the user will be unable to view the match or submit results from the Platform until they re-authenticate.',
        'Signing out does not affect any other active sessions on other devices — each session is independent and must be signed out separately.',
        'Signing out does not delete the user\'s account, match history, ELO score, or any other Platform data.',
      ]} />

      <DocH2>8. Sign Out From All Devices</DocH2>
      <DocP>The Platform provides a "Sign Out From All Devices" option in the account security settings. Using this option invalidates all active session tokens across all devices on which the user is currently logged in — simultaneously and immediately. This feature is intended for use when a user suspects their account has been accessed without their authorisation.</DocP>

      <DocH2>PART IV — Automatic Session Expiry</DocH2>

      <DocH2>9. Inactivity Expiry — 30 Days</DocH2>
      <DocP>If a user does not interact with the Corpse Platform app for a period of 30 consecutive calendar days, their session is automatically expired by the Platform. "Interaction" for the purposes of the inactivity timer means any authenticated action performed by the user within the Platform app — including viewing arenas, checking their profile, browsing the guild leaderboard, or any other in-app navigation.</DocP>

      <DocH2>10. What Happens on Inactivity Expiry</DocH2>
      <DocList items={[
        "The session token is automatically invalidated by the Platform after 30 days of inactivity.",
        "The user is logged out of the Platform on the device on which the session expired.",
        "The user is not notified of an inactivity expiry before it occurs — the expiry happens automatically without prior warning.",
        "The user can re-authenticate at any time after expiry using their registered email or social sign-in method.",
      ]} />

      <DocH2>11. Session Refresh — Preventing Inactivity Expiry</DocH2>
      <DocP>If a user interacts with the Platform app within the 30-day inactivity window, the inactivity timer is reset from the time of that interaction. This means that active users who use the Platform regularly will never experience an inactivity expiry — their sessions will remain active indefinitely as long as they continue to interact with the Platform at least once every 30 days.</DocP>

      <DocH2>PART V — Force Session Termination</DocH2>

      <DocH2>12. Events That Trigger Force Session Termination</DocH2>
      <DocTable rows={[
        [<DocStrong>Triggering Event</DocStrong>, <DocStrong>Effect on Sessions</DocStrong>, <DocStrong>Effect on Platform Access</DocStrong>],
        ['Account suspension applied', 'All sessions on all devices are immediately terminated', 'Account is locked — user cannot log in for the duration of the suspension'],
        ['Permanent ban applied', 'All sessions on all devices are immediately terminated', 'Account is permanently locked — user can never log in again'],
        ['Successful "Sign Out From All Devices" request', 'All sessions on all devices are immediately terminated', 'User must re-authenticate on any device to resume access'],
        ['Account deletion confirmed by user', 'All sessions on all devices are immediately terminated', 'Account is permanently deleted — user can never log in again'],
        ['Company-initiated security termination', 'All sessions on all devices are immediately terminated', 'User is notified and required to re-authenticate; additional security steps may be required'],
      ]} />

      <DocH2>13. What Happens During Force Termination</DocH2>
      <DocList items={[
        "All active session tokens across all devices are simultaneously and immediately invalidated.",
        "The user is immediately logged out of the Platform on all devices.",
        "Any in-progress actions that require an active session — such as Arena registration, result submission, or payment — are interrupted.",
        "If the user is mid-registration for an Arena when force termination occurs, the registration may be incomplete. The user should contact support to confirm the status of their registration.",
        "Force session termination does not cause any data loss — the user's account data, match history, ELO score, and other Platform data are unaffected by the termination (subject to any consequences of the triggering event — e.g., data forfeiture on permanent ban).",
      ]} />

      <DocH2>PART VI — Re-Login After Session Termination</DocH2>

      <DocH2>14. Re-Login After Voluntary Sign-Out or Inactivity Expiry</DocH2>
      <DocP>After a voluntary sign-out or inactivity expiry, the user can re-authenticate using their registered email or social sign-in method. The re-authentication process is identical to the initial login process — the user must use the same authentication method (Magic Link, Google Sign-In, or Apple Sign-In) that is registered on their account.</DocP>

      <DocH2>15. Re-Login After Suspension</DocH2>
      <DocP>A user whose account has been suspended cannot log in to the Platform for the duration of the suspension. Attempts to authenticate during the suspension period will fail. When the suspension period ends, the user's account is automatically re-enabled and the user can re-authenticate using their registered authentication method.</DocP>

      <DocH2>16. Re-Login After Permanent Ban</DocH2>
      <DocP>A user whose account has been permanently banned cannot log in to the Platform. Attempts to authenticate after a permanent ban will be permanently rejected. The permanent ban is irrevocable — re-authentication is not possible under any circumstances after a permanent ban is applied.</DocP>

      <DocH2>PART VII — Security Obligations</DocH2>

      <DocH2>17. User's Obligation to Secure Their Device</DocH2>
      <DocList items={[
        "You are solely responsible for maintaining the physical and software security of any device on which you are logged in to the Corpse Platform.",
        "You must not share your device with another person while you are logged in to the Platform — unless you are comfortable with that person having full access to your Platform account.",
        "If you lose your device or suspect your device has been compromised, you should immediately use the 'Sign Out From All Devices' option from another logged-in device or contact support.",
        "The Company is not responsible for any unauthorised access to your Platform account that results from your failure to secure your device.",
      ]} />

      <DocH2>18. Reporting Unauthorised Access</DocH2>
      <DocP>If you believe that another person has accessed your Corpse Platform account without your authorisation, you should: immediately use the "Sign Out From All Devices" option if you have access to a logged-in device, and contact the Company's support team at <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink> as soon as possible.</DocP>

      <DocH2>PART VIII — Arena Activity During Session Events</DocH2>

      <DocH2>19. Active Arena Matches During Session Events</DocH2>
      <DocTable rows={[
        [<DocStrong>Session Event</DocStrong>, <DocStrong>Impact on Active Arena Match</DocStrong>, <DocStrong>Impact on Arena Registration</DocStrong>],
        ['Voluntary sign-out', 'Match continues — player remains in the match until it ends. Player cannot view or manage the match from the Platform until they re-authenticate.', 'Registration remains active — sign-out does not cancel registration.'],
        ['Inactivity expiry', 'Match continues — player remains in the match until it ends. Player cannot view or manage the match from the Platform until they re-authenticate.', 'Registration remains active — inactivity expiry does not cancel registration.'],
        ['Suspension force termination', 'Match is interrupted — the suspended player\'s squad may be disqualified from the Arena. Refer to Arena Joining T&C for disqualification consequences.', 'All active registrations are cancelled immediately. Entry fees are non-refundable.'],
        ['Permanent ban force termination', 'Match is interrupted — the banned player\'s squad is disqualified from the Arena immediately.', 'All active registrations are cancelled immediately. Entry fees are forfeited.'],
      ]} />

      <DocH2>PART IX — Governing Law, Dispute Resolution & Contact</DocH2>
      <DocP>This Session Policy is governed by the laws of India. Any dispute arising out of or in connection with session management, sign-out, or the consequences of session termination shall be subject to the jurisdiction of the courts of Assam, India.</DocP>
      <DocTable rows={[
        [<DocStrong>Contact Type</DocStrong>, <DocStrong>Email</DocStrong>],
        ['Session & Access Issues', <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
        ['Legal Matters', <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
      ]} />
    </DocShell>
  );
}
