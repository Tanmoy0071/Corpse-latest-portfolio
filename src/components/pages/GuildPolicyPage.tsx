'use client';
import DocShell, { DocTable, DocList, DocH2, DocH3, DocP, DocStrong, DocEm, DocLink, DocNote } from './DocPage';

export default function GuildPolicyPage() {
  return (
    <DocShell
      tag="Legal · Community"
      title="Guild Policy"
      subtitle="Creation · Roles · Membership · Conduct · ELO · Enforcement"
      effectiveDate="May 1, 2026"
      lastUpdated="April 2026"
    >
      <DocTable rows={[
        [<DocStrong>Legal Entity</DocStrong>, '[CORPSE ESPORTS PRIVATE LIMITED]'],
        [<DocStrong>Governed By</DocStrong>, 'Master Terms & Conditions | Account Suspension & Ban T&C'],
        [<DocStrong>Jurisdiction</DocStrong>, 'India exclusively'],
        [<DocStrong>Binding On</DocStrong>, 'All Guild Members | Captains | Vice Captains | Managers'],
        [<DocStrong>Support Contact</DocStrong>, <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink>],
        [<DocStrong>Legal Contact</DocStrong>, <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink>],
      ]} />

      <DocNote><DocEm>By creating, joining, or participating in any Guild on the Corpse platform, you confirm that you have read, understood, and agree to be bound by this Guild Policy in its entirety.</DocEm></DocNote>

      <DocH2>PART I — Introduction & Scope</DocH2>

      <DocH2>1. What a Guild Is</DocH2>
      <DocP>A Guild on the Corpse platform is a persistent, structured competitive team — a group of registered players who come together under a unified identity to compete in duo and squad arenas, build a collective competitive record, and progress on the Platform's guild leaderboard. Unlike a squad — which is formed for a specific arena and disbands after — a Guild is a permanent entity on the Platform that maintains its identity, ELO ranking, and member roster over time.</DocP>
      <DocP>Every Guild has a name, a public profile, a verified identity, a four-tier internal unit structure, a leadership hierarchy of four roles, and its own ELO score that is tracked and displayed on the Platform's guild leaderboard. A Guild is the closest equivalent to an esports organisation on the Corpse platform — it represents a player's competitive home and community on the Platform.</DocP>

      <DocH2>2. Purpose of the Guild System</DocH2>
      <DocList items={[
        'Competitive continuity — giving players a persistent team identity that carries forward across arenas, seasons, and game titles.',
        'Talent structure — the unit tier system (Apex, Specialized, Core, Rising) provides a clear internal hierarchy that reflects each member\'s contribution and skill level within the guild.',
        'Community building — guilds create a structured community around competitive gaming, enabling players to find consistent teammates, build chemistry, and compete as a unit over time.',
        'Collective recognition — guild ELO and the guild leaderboard give guilds a competitive standing that is distinct from individual player rankings — rewarding collective performance.',
        'Talent discovery — the Platform\'s ecosystem is designed to surface talented players and guilds to organisers, sponsors, and the broader esports community.',
      ]} />

      <DocH2>3. Relationship to Other Corpse Policies</DocH2>
      <DocTable rows={[
        [<DocStrong>Policy</DocStrong>, <DocStrong>Relevance to Guild Context</DocStrong>],
        ['Master Terms & Conditions', 'General platform rules, prohibited conduct, and governing law — all apply to guild members in their capacity as platform users'],
        ['Account Suspension & Ban T&C', 'Flag system and suspension consequences apply to individual guild members. Guild-level suspension and dissolution governed by this Guild Policy and the Suspension T&C together.'],
        ['Arena Joining T&C', 'When guild members participate in arenas as a squad, the Arena Joining T&C governs match conduct, result submission, and disputes.'],
        ['IP, Trademark & Copyright Policy', 'Guild data, ELO records, and match history generated on the Platform are owned by the Company per the IP Policy.'],
      ]} />

      <DocH2>PART II — Guild Creation</DocH2>

      <DocH2>4. Who Can Create a Guild</DocH2>
      <DocP>Guild creation is restricted to KYC-verified Registered Users of the Platform. The following conditions must be met:</DocP>
      <DocList items={[
        'The user must be a Registered User with an active, verified account on the Platform.',
        'The user must have completed KYC verification — unverified users and Minor Users cannot create a guild.',
        'The user must not be a member of an existing guild — a player can only be in one guild at a time.',
        'The user must not have a suspended or permanently banned account.',
      ]} />
      <DocP>When a user creates a guild, they automatically become the Captain of that guild. The creating user is solely responsible for the guild's name, conduct, and compliance with this Guild Policy from the moment of creation.</DocP>

      <DocH2>5. Guild Name Rules</DocH2>
      <DocH3>5.1 Permitted Guild Names</DocH3>
      <DocList items={[
        'Guild names must be original and not already registered by another guild on the Platform.',
        'Guild names may contain letters (in any language supported by the Platform), numbers, spaces, and common gaming-related symbols.',
        'Guild names can be changed at any time by the Captain — there is no cooldown period between name changes. However, the new name must comply with all rules in this Section.',
      ]} />
      <DocH3>5.2 Prohibited Guild Names</DocH3>
      <DocList items={[
        'Names containing sexually explicit, obscene, or NSFW content of any kind.',
        'Names that impersonate or are deceptively similar to another existing guild\'s name on the Platform.',
        'Names that impersonate real people, public figures, celebrities, or esports personalities.',
        "Names that impersonate Corpse, Corpse Arena, or any Corpse official entity or staff designation.",
        'Names containing hate speech, discriminatory language, or content targeting individuals or groups based on religion, ethnicity, gender, or any other characteristic.',
        'Names that are identical or deceptively similar to trademarks of third-party gaming companies, brands, or esports organisations — unless the guild has obtained explicit written permission from the trademark owner.',
      ]} />
      <DocNote><DocStrong>Important: The Company reserves the right to force-rename any guild whose name violates these rules at any time without prior notice. Repeated naming violations may result in the guild Captain receiving a flag under the Account Suspension & Ban Policy.</DocStrong></DocNote>

      <DocH2>6. Guild Profile & Public Visibility</DocH2>
      <DocP>Every guild on the Platform has a public guild profile that is visible to all registered users. The guild profile displays: guild name and guild tag, guild ELO score and leaderboard ranking, guild verified badge (if earned), current member list with roles and unit tiers, guild's competitive history, and guild's unit tier composition at a glance.</DocP>
      <DocP>Guild profiles are public by default and cannot be set to private. The Platform's commitment to transparency in competitive rankings requires all guild profiles to be publicly accessible.</DocP>

      <DocH2>8. Guild Cannot Be Deleted</DocH2>
      <DocP>Once a guild is created on the Platform, it cannot be deleted or dissolved by the Captain or any other guild member. This is a permanent, system-enforced rule. Rationale:</DocP>
      <DocList items={[
        "Guild ELO scores and match histories form part of the Platform's competitive record — deleting a guild would create gaps in the historical data that affect other guilds' rankings and records.",
        "Guild members who have invested time and effort into building a guild's reputation have a legitimate interest in the guild's continued existence — even if the Captain changes.",
        "Preventing guild deletion protects against bad-faith dissolution — for example, a Captain deleting a guild to avoid accountability for conduct violations.",
      ]} />

      <DocH2>PART III — Guild Roles & Hierarchy</DocH2>

      <DocH2>9. The Four Roles</DocH2>
      <DocTable rows={[
        [<DocStrong>Role</DocStrong>, <DocStrong>Symbol</DocStrong>, <DocStrong>Position in Hierarchy</DocStrong>, <DocStrong>Primary Responsibility</DocStrong>],
        ['Captain', '🏆', '1st — Ultimate Authority', 'Strategic leadership, guild identity, full administrative control'],
        ['Vice Captain', '⚔️', '2nd — Second in Command', "Operational management, member oversight, execution of Captain's direction"],
        ['Manager', '🧩', '3rd — Day-to-Day Operations', 'Day-to-day coordination, member intake, roster management'],
        ['Member', '👤', '4th — Standard Participant', 'Active participation in arenas and guild activities'],
      ]} />

      <DocH2>10. Captain — Ultimate Authority</DocH2>
      <DocP><DocStrong>The Captain's Exclusive Powers:</DocStrong></DocP>
      <DocList items={[
        'Transfer guild ownership to another member — the only role with this authority.',
        'Change the guild name, guild tag, and all guild profile details.',
        "Set and modify the guild's internal policy rules — including creating new rules and deleting or modifying existing ones.",
        'Appoint, change, or remove the Vice Captain.',
        'Appoint, change, or remove the Manager.',
        'Assign and modify unit tier designations for all guild members.',
        'Accept or reject member join requests.',
        'Remove any member from the guild — including the Vice Captain and Manager.',
      ]} />

      <DocH2>11. Vice Captain — Second in Command</DocH2>
      <DocP><DocStrong>Vice Captain's Powers:</DocStrong> Accept or reject member join requests. Remove Managers and Members from the guild. All other operational guild management functions not exclusively reserved for the Captain.</DocP>
      <DocP><DocStrong>Vice Captain's Limitations:</DocStrong> Cannot transfer guild ownership, change guild name/tag/profile details, set/modify/delete existing guild policy rules, appoint or change the Vice Captain role, appoint or change the Manager role, or assign/modify unit tier designations.</DocP>
      <DocNote><DocStrong>Automatic Captain Succession:</DocStrong> If the Captain permanently leaves the guild or is permanently banned from the Platform — the Vice Captain automatically assumes the Captain role immediately. No manual transfer is required in this scenario.</DocNote>

      <DocH2>12. Manager — Day-to-Day Operations</DocH2>
      <DocP><DocStrong>Manager's Powers:</DocStrong> Accept or reject member join requests. Remove Members from the guild (cannot remove Vice Captain). Read the guild's internal policy rules in full. Add new supplementary guild rules.</DocP>
      <DocP><DocStrong>Manager's Limitations:</DocStrong> Cannot transfer guild ownership, change guild name/tag/profile details, delete or modify existing guild policy rules set by the Captain, remove the Vice Captain or the Captain, appoint or change any leadership roles, or assign/modify unit tier designations.</DocP>

      <DocH2>13. Member — Standard Participant</DocH2>
      <DocP>Members are the core competitive participants of the guild. They do not hold any administrative authority within the guild but are the foundation of the guild's competitive identity — their performance directly influences the guild's ELO score and leaderboard standing.</DocP>

      <DocH2>PART IV — Role Permissions — Full Reference Table</DocH2>
      <DocTable rows={[
        [<DocStrong>Action</DocStrong>, <DocStrong>Captain</DocStrong>, <DocStrong>Vice Captain</DocStrong>, <DocStrong>Manager</DocStrong>, <DocStrong>Member</DocStrong>],
        ['Transfer guild ownership', '✅', '❌', '❌', '❌'],
        ['Change guild name / tag / profile', '✅', '❌', '❌', '❌'],
        ['Set / modify / delete guild policy rules', '✅', '❌', '❌', '❌'],
        ['Add new supplementary guild rules', '✅', '❌', '✅', '❌'],
        ['Assign / modify unit tiers', '✅', '❌', '❌', '❌'],
        ['Accept / reject join requests', '✅', '✅', '✅', '❌'],
        ['Remove Vice Captain', '✅', '❌', '❌', '❌'],
        ['Remove Manager', '✅', '✅', '❌', '❌'],
        ['Remove Member', '✅', '✅', '✅', '❌'],
        ['Leave the guild', '✅ (must transfer first)', '✅', '✅', '✅'],
        ['Participate in arenas', '✅', '✅', '✅', '✅'],
        ['View guild profile & leaderboard', '✅', '✅', '✅', '✅'],
      ]} />

      <DocH2>PART V — Unit Tier System</DocH2>

      <DocH2>15. The Four Unit Tiers</DocH2>
      <DocTable rows={[
        [<DocStrong>Tier</DocStrong>, <DocStrong>Name</DocStrong>, <DocStrong>Description</DocStrong>],
        ['Tier 1 (Highest)', 'Apex Unit', "The guild's elite performers — the top-tier competitive core of the guild. Apex Unit members are the guild's primary squad for major arenas and carry the highest competitive expectations."],
        ['Tier 2', 'Specialized Unit', "Experienced players with a specific skill set or game mode specialisation. Specialized Unit members are the guild's secondary competitive squad and regulars for most arenas."],
        ['Tier 3', 'Core Unit', "Active members who form the stable competitive backbone of the guild. Core Unit members participate regularly in arenas and are being developed toward Specialized or Apex status."],
        ['Tier 4 (Entry)', 'Rising Unit', "New members, trialists, or developing players who are in the process of proving their competitive value to the guild. Rising Unit members are eligible to participate in arenas but are not yet established in the guild's competitive hierarchy."],
      ]} />

      <DocH2>PART VI — Guild Membership</DocH2>

      <DocH2>21. Maximum Member Limit</DocH2>
      <DocP>Each guild may have a maximum of 30 members at any given time, including the Captain, Vice Captain, Manager(s), and all Members. If a guild reaches 30 members, no new join requests can be accepted until an existing member leaves or is removed.</DocP>

      <DocH2>22. One Guild Per Player</DocH2>
      <DocP>A player can only be a member of one guild at any given time. To join a different guild, a player must first leave their current guild. Leaving a guild is immediate and irreversible — the player loses all guild-associated benefits, ELO contributions to the old guild, and the unit tier designation they held.</DocP>

      <DocH2>25. Leaving a Guild — Members</DocH2>
      <DocP>Any Member, Manager, or Vice Captain may leave the guild at any time without requiring approval from the Captain or any other guild member. Leaving a guild is immediate. The departing member's guild tag is immediately removed from their individual player profile.</DocP>

      <DocH2>26. Leaving a Guild — Captain</DocH2>
      <DocP>The Captain cannot leave the guild without first completing a guild ownership transfer to another eligible member. The Platform will not permit the Captain to leave until the ownership transfer is completed. This rule exists to ensure the guild always has a Captain and to prevent guilds from being abandoned without leadership.</DocP>

      <DocH2>PART VII — Guild Rules & Internal Policy</DocH2>

      <DocH2>29. Captain's Authority Over Guild Rules</DocH2>
      <DocP>The Captain has the exclusive authority to create, modify, and delete the guild's internal policy rules — a set of custom rules that govern how the guild operates internally and what is expected of its members. Guild internal rules are displayed on the guild's public profile.</DocP>

      <DocH2>32. Platform Rules Override Guild Rules</DocH2>
      <DocP>Guild internal rules may not contradict, override, or circumvent any Corpse Platform policy, including this Guild Policy, the Master Terms & Conditions, the Account Suspension & Ban T&C, the Arena Joining T&C, or any other Platform policy. If any guild internal rule conflicts with a Platform policy, the Platform policy takes precedence and the conflicting guild rule is void and unenforceable.</DocP>

      <DocH2>PART VIII — Guild ELO & Leaderboard</DocH2>

      <DocH2>33. Guild ELO — Separate from Player ELO</DocH2>
      <DocP>Every guild has its own ELO score that is completely separate from the individual ELO scores of its members. A player's individual ELO score is not affected by guild membership, and a guild's ELO score is not a function of its members' individual ELO scores.</DocP>

      <DocH2>34. How Guild ELO Is Calculated</DocH2>
      <DocP>Guild ELO is calculated based on the cumulative competitive performance of the guild's members when they participate in arenas as a guild squad. Specifically: wins by a guild squad in paid arenas contribute positively to guild ELO, losses by a guild squad in paid arenas reduce guild ELO, and free arena results also contribute to guild ELO, but with a lower weight than paid arena results.</DocP>

      <DocH2>PART IX — Guild Verified Badge</DocH2>

      <DocH2>37. What the Verified Badge Is</DocH2>
      <DocP>The Guild Verified Badge is an official mark of authenticity, credibility, and competitive standing issued by the Company to guilds that meet the criteria described in Section 38. The badge is displayed prominently on the guild's public profile and on the guild tag shown on each member's individual player profile.</DocP>

      <DocH2>38. How a Guild Earns the Verified Badge</DocH2>
      <DocP>The Company evaluates guilds for verified status based on the following criteria: minimum of 10 members, minimum guild ELO score of 1500, at least 5 paid arena participations as a guild squad, a clean conduct record (no active guild-level suspension), a guild name that complies fully with the naming rules in Section 5, and the guild Captain must be KYC-verified.</DocP>

      <DocH2>PART X — Guild Conduct & Prohibited Behaviour</DocH2>

      <DocH2>39. Guild-Level Prohibited Conduct</DocH2>
      <DocList items={[
        'Coordinating or facilitating match fixing, result manipulation, or ELO farming at the guild level — for example, instructing guild members to intentionally lose matches to manipulate ELO scores.',
        'Using guild infrastructure (chat, communication tools, or organisational structures) to facilitate or plan any prohibited act under Platform policies or applicable law.',
        'Creating a guild with the primary purpose of aggregating suspended or banned users to circumvent the Suspension Policy.',
        'Naming a guild or guild tag in a manner that violates the naming rules in Section 5 and refusing to comply with Company force-rename requests.',
        'Coordinating harassment campaigns against other users, guilds, or Company personnel through guild infrastructure.',
      ]} />

      <DocH2>PART XI — Corpse's Authority Over Guilds</DocH2>

      <DocH2>42. Right to Suspend a Guild</DocH2>
      <DocP>The Company reserves the right to suspend a guild if: the guild or its Captain is found to have committed guild-level prohibited conduct as listed in Section 39, or if 3 or more guild members receive flags in a 30-day period arising from coordinated conduct violations.</DocP>

      <DocH2>43. Right to Dissolve a Guild</DocH2>
      <DocP>The Company reserves the right to permanently dissolve a guild in the most severe cases of guild-level misconduct or where the Captain is permanently banned and the Vice Captain succession mechanism cannot be applied. Guild dissolution is a permanent action — it cannot be appealed.</DocP>

      <DocH2>44. Captain Permanently Banned — Guild Succession</DocH2>
      <DocP>If the Captain is permanently banned from the Platform, the Vice Captain automatically assumes the Captain role immediately. If there is no Vice Captain, the Company will identify the longest-serving active Manager and promote them to Captain. If there is no Manager, the Company will identify the longest-serving active Member and promote them to Captain. If the guild has no remaining active members, the Company may dissolve the guild.</DocP>

      <DocH2>PART XII — Governing Law, Dispute Resolution & Contact</DocH2>
      <DocP>This Guild Policy is governed by the laws of India. Any dispute arising out of or in connection with this Guild Policy shall be subject to the jurisdiction of the courts of Assam, India. For all guild-related support enquiries: <DocLink href="mailto:support@corpsearena.com">support@corpsearena.com</DocLink> | Legal matters: <DocLink href="mailto:legal@corpsearena.com">legal@corpsearena.com</DocLink></DocP>
    </DocShell>
  );
}
