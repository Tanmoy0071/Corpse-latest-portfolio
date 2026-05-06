import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IP & Copyright Policy | Corpse",
  description: "IP & Copyright Policy for the Corpse platform.",
};

export default function PolicyPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-32 max-w-5xl min-h-screen flex flex-col items-center text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-[#e8192c] uppercase tracking-wider drop-shadow-[0_0_15px_rgba(232,25,44,0.4)]">
        IP & Copyright Policy
      </h1>
      <div className="space-y-8 text-white/70 text-lg flex flex-col items-center w-full">
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>CORPSE</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>The Operating System for Esports</em>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Intellectual Property,</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Trademark &amp; Copyright Policy</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Ownership • Protection • Permitted Use • Enforcement
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Binding on: Employees | Contractors | Users | Organisers | API
            Partners | All Third Parties
          </em>
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
                    <strong>Governed By</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Copyright Act 1957 | Trade Marks Act 1999 | IT Act 2000
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
                    <strong>IP Contact</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"><a href="mailto:ip@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">ip@corpsearena.com</a></p>
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
            All intellectual property, trademarks, and copyrighted works
            described in this document are the exclusive property of [CORPSE
            ESPORTS PRIVATE LIMITED]. Unauthorised use, reproduction, or
            infringement of any kind will be pursued to the fullest extent
            permitted under Indian law.
          </em>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART I — OWNERSHIP DECLARATION &amp; LEGAL FOUNDATION
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>1. Declaration of Exclusive Ownership</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          [CORPSE ESPORTS PRIVATE LIMITED] ("Company", "we", "us", "our") is the
          sole and exclusive owner of all intellectual property rights
          subsisting in and relating to the Corpse platform, its products,
          services, technology, content, branding, and associated works
          (collectively, "Corpse IP").
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This ownership is absolute, unconditional, and not subject to any
          implied licence, trust, or equitable interest in favour of any third
          party, including employees, contractors, users, organisers, or API
          partners. All rights not expressly granted in writing by the Company
          are reserved.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Policy sets out the full scope of Corpse IP, the nature of the
          protections in place, the obligations of all parties who interact with
          or have access to Corpse IP, and the enforcement mechanisms available
          to the Company.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: No person, entity, employee, contractor, user, organiser,
            or API partner acquires any ownership, co-ownership, or interest in
            any Corpse IP by virtue of their relationship with the Company or
            their use of the Platform — unless expressly confirmed in a separate
            written agreement signed by a duly authorised director of the
            Company.
          </strong>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>2. Works Made for Hire</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          All intellectual property created by any employee, director, officer,
          intern, or contractor of the Company in the course of their
          employment, engagement, or contract — including but not limited to
          software code, design work, algorithms, documentation, marketing
          materials, architectural decisions, and any other creative or
          technical output — constitutes a "work made for hire" within the
          meaning of Section 17 of the Copyright Act, 1957.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Accordingly, the Company is deemed the author and first owner of
          copyright in all such works from the moment of their creation. No
          further assignment, transfer, or deed is required to vest ownership in
          the Company. This principle applies regardless of:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Whether the work was created during working hours or outside of
            them, provided it relates to the Company&apos;s business or
            platform.
          </li>
          <li>
            Whether the work was created using Company equipment, personal
            equipment, or both.
          </li>
          <li>
            Whether the creator was a full-time employee, part-time employee, or
            independent contractor.
          </li>
          <li>
            Whether the work has been formally disclosed to the Company or not.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every employee and contractor has a continuing obligation to promptly
          disclose to the Company any IP created that relates to the Platform,
          its technology, or its business — whether or not they believe it falls
          within the scope of this clause.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: All current team members have signed Non-Disclosure and IP
            Assignment Agreements with the Company. Those agreements are
            separate binding instruments that reinforce and supplement this
            Policy.
          </em>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>3. Legal Framework</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The intellectual property rights of the Company are protected under
          the following Indian statutes and, where applicable, international
          conventions to which India is a signatory:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Statute / Convention</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>What It Protects for Corpse</strong>
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Copyright Act, 1957</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Source code, software, UI/UX design, written content,
                    documents, databases, and all original creative works
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Trade Marks Act, 1999</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    The Corpse name, Corpse Arena name, logo, tagline, and all
                    registered or common law marks used in connection with the
                    Platform
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Information Technology Act, 2000 (as amended)
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Digital works, software, and electronic records — reinforces
                    copyright protection for the codebase and digital platform
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Berne Convention for the Protection of Literary and Artistic
                    Works
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    International copyright protection in all 181 member
                    countries — automatic from creation
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">TRIPS Agreement (WTO)</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Minimum IP protection standards enforceable across all WTO
                    member states
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Paris Convention for the Protection of Industrial Property
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Trademark protection and priority rights in member countries
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART II — IP ASSET REGISTER
        </h2>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following tables constitute the official register of all
          intellectual property assets owned by [CORPSE ESPORTS PRIVATE
          LIMITED]. This register is maintained by the Company and updated as
          new IP is created or registered. The absence of an asset from this
          register does not imply that it is not protected — all original works
          created by the Company are protected by copyright from the moment of
          creation under Section 13 of the Copyright Act, 1957.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>4. Trademark Assets</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following marks are owned by the Company as trademarks. They are
          protected under the Trade Marks Act, 1999 and, to the extent they have
          been used in commerce, also enjoy common law protection as
          unregistered marks.
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Mark</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Type</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Description</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Protection Basis</strong>
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">CORPSE</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Word Mark</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    The word &apos;Corpse&apos; as used in connection with the
                    esports platform and all associated services
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Trade Marks Act 1999 + Common Law</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">CORPSE ARENA</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Word Mark</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    The words &apos;Corpse Arena&apos; as used in connection
                    with the tournament platform and competitive features
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Trade Marks Act 1999 + Common Law</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Corpse Logo</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Device Mark</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    The stylised lightning bolt and bird graphic on a red
                    background, as used across all Company platforms and
                    materials
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Trade Marks Act 1999 + Copyright Act 1957
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">THE OPERATING SYSTEM FOR ESPORTS</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Tagline / Slogan</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    The tagline &apos;The Operating System for Esports&apos; as
                    used in Company communications, pitch materials, and
                    platform branding
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Trade Marks Act 1999 + Common Law</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: The Corpse logo is additionally protected as an original
            artistic work under the Copyright Act, 1957, independent of its
            trademark protection. Both forms of protection apply simultaneously.
          </em>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>5. Copyright Assets</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following works are owned by the Company as original works
          protected under Section 13 of the Copyright Act, 1957. Copyright
          subsists automatically from the date of creation and does not require
          registration. All works listed below are the exclusive property of
          [CORPSE ESPORTS PRIVATE LIMITED].
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Work</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Category Under Copyright Act</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Description</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Year</strong>
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">ELO Engine — source code</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Literary work (software)</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    The complete source code, logic, and implementation of the
                    universal ELO-based skill scoring system for players,
                    squads, guilds, and organisers
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">2024–2026</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Archetype Analytics — source code</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Literary work (software)</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    The complete source code and implementation of the player
                    archetype classification and analytics system. Copyright
                    subsists in the code expression, not the underlying concept
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">2024–2026</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">OCR Verification — source code</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Literary work (software)</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    The complete source code and implementation of the Optical
                    Character Recognition system for automated match data
                    extraction from game scorecards
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">2025–2026</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Mobile Application Codebase</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Literary work (software)</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    The full Flutter-based cross-platform mobile application
                    source code for iOS and Android, including all modules,
                    screens, components, and logic
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">2024–2026</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Backend Codebase &amp; API</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Literary work (software)</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    The full Node.js / Express.js backend source code, API
                    architecture, endpoint logic, middleware, database schemas,
                    and all server-side implementations
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">2024–2026</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Platform UI/UX Design</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Artistic work</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    All visual design elements, screen layouts, interface
                    designs, iconography, colour systems, typography choices,
                    and user experience flows of the Platform
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">2024–2026</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Corpse Logo</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Artistic work</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    The original graphic design comprising the stylised
                    lightning bolt and bird silhouette on a red background,
                    including all variants and adaptations
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">2024</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Business Plan &amp; Financial Models</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Literary work</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    The 24-month business plan, financial projections, unit
                    economics models, and all associated planning documents
                    authored by the Company
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">2024–2026</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Technical Architecture Documents</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Literary work</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    The technical system documents, architecture decision
                    records, API documentation, and all engineering
                    documentation authored by the Company
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">2024–2026</p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Marketing &amp; Pitch Materials</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">Literary work / Artistic work</p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    All pitch decks, investor presentations, marketing
                    collateral, website copy, social media content, and
                    promotional materials created for or by the Company
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">2024–2026</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Copyright in software code extends to the literal code
            (the text of the program) and, in certain circumstances, to the
            non-literal elements such as structure, sequence, and organisation
            of the program. Anyone who copies, reproduces, or substantially
            reproduces the Platform&apos;s code — even after modification — may
            be liable for copyright infringement.
          </strong>
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART III — TRADEMARK RIGHTS &amp; PROTECTION
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>6. What Trademark Protection Covers</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Trademark protection under the Trade Marks Act, 1999 gives the Company
          the exclusive right to use the registered and common law marks listed
          in Section 4 in connection with the goods and services for which they
          are used. This includes:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The right to use the marks in the course of trade — on the Platform,
            in marketing, on merchandise, in communications, and in all
            commercial contexts.
          </li>
          <li>
            The right to prevent any third party from using an identical or
            deceptively similar mark in connection with identical or similar
            goods or services without the Company&apos;s consent.
          </li>
          <li>
            The right to bring an action for trademark infringement under
            Section 29 of the Trade Marks Act, 1999.
          </li>
          <li>
            The right to bring a common law action for passing off — protecting
            the Company&apos;s goodwill and reputation even where a formal
            registration is not yet complete.
          </li>
          <li>
            The right to oppose registration of any conflicting trademark
            application filed by a third party before the Trade Marks Registry.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>7. Common Law Trademark Rights</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Even before formal trademark registration is completed, the Company
          enjoys substantial protection for its marks under the common law
          doctrine of passing off. This protection arises from the
          Company&apos;s use of the marks in commerce and the goodwill
          associated with them.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          To succeed in a passing off action, the Company would establish: (a)
          the existence of goodwill in the mark; (b) a misrepresentation by the
          defendant that causes confusion; and (c) damage or likely damage to
          the Company&apos;s goodwill. Given the Platform&apos;s commercial
          operations and user base, goodwill in the Corpse marks is established
          from the date of first use.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Common law trademark rights exist from the date of first commercial
            use of the mark — not from the date of registration. The
            Company&apos;s marks have been in commercial use since 2024,
            establishing priority from that date.
          </em>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>8. Prohibited Uses of Corpse Trademarks</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          No person, entity, or organisation may use any Corpse trademark —
          including the name CORPSE, CORPSE ARENA, the Corpse logo, or the
          tagline THE OPERATING SYSTEM FOR ESPORTS — in any of the following
          ways without prior written consent from the Company:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            As a brand name, trading name, company name, or domain name for any
            product or service.
          </li>
          <li>
            In any advertisement, promotion, or marketing material in a manner
            that suggests endorsement, affiliation, or partnership with the
            Company.
          </li>
          <li>
            As a hashtag, username, or social media handle that could cause
            confusion with the Company&apos;s official accounts.
          </li>
          <li>
            In any modified, altered, distorted, or derivative form that changes
            the appearance or meaning of the mark.
          </li>
          <li>
            In combination with other words or designs that disparage, mock, or
            dilute the distinctiveness of the mark.
          </li>
          <li>
            On merchandise, apparel, or physical goods without an explicit
            merchandise licence agreement with the Company.
          </li>
          <li>
            In connection with any esports platform, tournament tool, ranking
            system, or competitive gaming service that competes with or could be
            confused with the Platform.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Using the Corpse name, logo, or tagline without
            authorisation — even in fan content, parody, or commentary — may
            constitute trademark infringement or passing off under Indian law.
            When in doubt, contact <a href="mailto:ip@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">ip@corpsearena.com</a> before use.
          </strong>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>9. Trademark Infringement &amp; Passing Off</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Under Section 29 of the Trade Marks Act, 1999, a person infringes a
          registered trademark if they use a mark that is identical or
          deceptively similar to the registered mark in the course of trade
          without consent, in relation to goods or services identical or similar
          to those for which the trademark is registered.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Under common law, passing off occurs when a person misrepresents their
          goods or services as being those of, or associated with, the Company
          in a way that damages or is likely to damage the Company&apos;s
          goodwill. Passing off does not require a registered trademark — it
          protects the Company&apos;s reputation and business goodwill directly.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Both infringement and passing off can occur through:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Using a name, logo, or mark that is visually, phonetically, or
            conceptually similar to any Corpse trademark.
          </li>
          <li>
            Operating an esports platform, tournament service, or gaming
            community under a name that could be confused with Corpse or Corpse
            Arena.
          </li>
          <li>
            Registering domain names, social media handles, or app store
            listings that incorporate or imitate Corpse marks.
          </li>
          <li>
            Creating counterfeit or imitation Corpse-branded merchandise or
            digital assets.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>10. Enforcement of Trademark Rights</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company will actively monitor and enforce its trademark rights.
          Upon becoming aware of any potential infringement or passing off, the
          Company may take the following steps, at its sole discretion:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Issue a formal cease and desist notice demanding immediate cessation
            of the infringing use.
          </li>
          <li>
            File a complaint with the Trade Marks Registry opposing any
            conflicting trademark application.
          </li>
          <li>
            Initiate civil proceedings seeking an injunction, damages, delivery
            up of infringing materials, and costs.
          </li>
          <li>
            File a criminal complaint under Section 103 of the Trade Marks Act,
            1999, which provides for imprisonment of up to three years and a
            fine for knowingly using a false trademark.
          </li>
          <li>
            Report infringing app store listings, social media accounts, or
            domain registrations to the relevant platform or registrar for
            takedown.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART IV — COPYRIGHT RIGHTS &amp; PROTECTION
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>11. What Copyright Covers Under Indian Law</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Under the Copyright Act, 1957, copyright subsists in the following
          categories of original works created by the Company:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Literary works — including all software source code, backend logic,
            API specifications, algorithms as expressed in code, technical
            documents, business plans, and written content on the Platform.
          </li>
          <li>
            Artistic works — including the Corpse logo, all UI/UX design
            elements, visual interfaces, iconography, illustrations, and
            graphical assets.
          </li>
          <li>
            Sound recordings — any audio content created for or by the Platform,
            including notification sounds and promotional audio.
          </li>
          <li>
            Cinematograph films — any video content, tutorials, or promotional
            films created by the Company.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Copyright gives the Company the exclusive right to do or authorise the
          doing of any of the following acts in relation to a work or any
          substantial part thereof: reproduce it, issue copies to the public,
          perform it in public, communicate it to the public, make any
          translation or adaptation, and make any cinematograph film or sound
          recording in respect of it.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>12. Automatic Protection — No Registration Required</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Under Section 13 of the Copyright Act, 1957, copyright subsists
          automatically in every original literary, dramatic, musical, and
          artistic work as soon as it is created and expressed in a tangible
          form. No registration, notice, or deposit is required for copyright to
          exist and be enforceable in India.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This means that every line of code written for the Platform, every
          design element created, every document authored, and every piece of
          content produced is protected by copyright from the moment it comes
          into existence — regardless of whether it carries a copyright notice
          or has been formally registered.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            Note: The absence of a copyright notice (the © symbol) on any Corpse
            work does not mean the work is unprotected or in the public domain.
            All Corpse works are protected from creation, whether or not a
            notice appears.
          </em>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>13. Why Formal Registration Is Strongly Recommended</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          While copyright subsists automatically without registration, the
          Company strongly recommends formal registration of key works with the
          Copyright Office of India (copyright.gov.in) before the Platform
          launches. This is a direct and honest recommendation, not a legal
          formality.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">The reasons are practical and significant:</p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Evidentiary weight — a copyright registration certificate is prima
            facie evidence of ownership in any court proceeding. Without it, the
            Company must independently prove ownership, creation date, and
            authorship in every dispute.
          </li>
          <li>
            Enforcement leverage — registered copyrights are significantly
            easier and faster to enforce. Courts take registered claims more
            seriously and are more likely to grant urgent interim injunctions.
          </li>
          <li>
            Criminal prosecution — registrations strengthen criminal complaints
            under Section 63 of the Copyright Act, particularly where the
            infringing party claims ignorance of ownership.
          </li>
          <li>
            Cost — registration fees are minimal (approximately Rs 500 per
            literary work, Rs 5,000 for software). The cost of not registering
            in a dispute is exponentially higher.
          </li>
          <li>
            Investor and partnership credibility — registered IP is a hard asset
            on the Company&apos;s balance sheet. Investors, acquirers, and
            partners will expect registered IP during due diligence.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: The Company should file copyright registrations for at
            minimum the mobile application codebase, the ELO Engine source code,
            and the Corpse logo before the Platform launch date. Delaying
            registration until after a dispute arises is one of the most common
            and most costly mistakes made by early-stage technology companies.
          </strong>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>14. Restricted Acts — What No One May Do</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          No person, entity, or organisation may perform any of the following
          acts in relation to any Corpse copyrighted work without the prior
          written consent of the Company:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Reproduce the work or any substantial part of it in any material
            form whatsoever — including copying source code, downloading design
            files, screenshotting proprietary interfaces, or replicating written
            content.
          </li>
          <li>
            Issue copies of the work to the public — including distributing,
            selling, or making available any copy of any Corpse work.
          </li>
          <li>
            Communicate the work to the public — including broadcasting,
            streaming, publishing, or transmitting any Corpse work online or
            offline.
          </li>
          <li>
            Make any translation of the work into any other language or adapt it
            into any other form, including creating a modified version of the
            code or a redesigned version of the UI.
          </li>
          <li>
            Make any cinematograph film or sound recording in respect of any
            Corpse literary or artistic work.
          </li>
          <li>
            Reverse engineer, decompile, disassemble, or otherwise attempt to
            derive the source code of any compiled software component of the
            Platform.
          </li>
          <li>
            Create derivative works, modifications, forks, or ports of any
            Corpse software, design, or content.
          </li>
          <li>
            Use any Corpse copyrighted work as the basis for training,
            fine-tuning, or improving any artificial intelligence or machine
            learning model without explicit written consent.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>15. Limited Licence Granted to Users</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          By accepting the Platform&apos;s Terms and Conditions, users are
          granted a limited, non-exclusive, non-transferable, non-sublicensable,
          revocable licence to access and use the Platform and its features
          strictly for the personal, non-commercial purposes described in the
          Corpse Terms and Conditions.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">This licence specifically does NOT include:</p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Any right to copy, reproduce, or store any part of the
            Platform&apos;s code, design, or content beyond what is strictly
            necessary for normal use of the Platform on a personal device.
          </li>
          <li>
            Any right to use Platform content — including match data,
            leaderboard data, ELO scores, or profile data — for any commercial
            purpose or external publication.
          </li>
          <li>
            Any right to sub-licence, assign, or transfer the licence to any
            third party.
          </li>
          <li>
            Any right to use Platform branding, logos, or trademarks in any
            communication or publication.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This licence terminates automatically and immediately upon the
          user&apos;s account deletion, suspension, or any violation of the
          Platform&apos;s Terms and Conditions.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>16. No Derivative Works or Sublicensing</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The limited licence granted to users under Section 15 is strictly a
          licence to use — it is not a licence to build upon, adapt, or extend.
          The following are absolutely prohibited under this Policy and under
          the Platform&apos;s Terms and Conditions:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Creating any application, tool, website, or service that
            incorporates, replicates, or is derived from any Corpse copyrighted
            work.
          </li>
          <li>
            Building competing or complementary esports platforms, ranking
            systems, or tournament tools that are substantially similar to the
            Platform&apos;s design, functionality, or methodology.
          </li>
          <li>
            Sub-licensing any Corpse content or software to any third party —
            the user&apos;s licence is personal and cannot be transferred or
            shared.
          </li>
          <li>
            Attempting to remove, alter, or circumvent any technological
            protection measures applied to Corpse software or content.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART V — USER &amp; ORGANISER IP OBLIGATIONS
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>17. Prohibited Conduct — Users</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every user of the Platform, by accepting the Platform&apos;s Terms and
          Conditions, agrees to the following IP-related obligations:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            You will not attempt to reverse engineer, decompile, disassemble, or
            otherwise derive the source code of any part of the Platform.
          </li>
          <li>
            You will not use any automated tool, bot, scraper, crawler, or data
            harvesting system to extract data, content, or information from the
            Platform without the Company&apos;s prior written consent.
          </li>
          <li>
            You will not copy, reproduce, or republish any part of the
            Platform&apos;s interface, content, or design for any purpose other
            than your personal use.
          </li>
          <li>
            You will not use any data generated by or obtained from the Platform
            — including match data, ELO scores, leaderboard standings, or player
            profiles — for any commercial purpose, publication, research, or
            monetisation without the Company&apos;s prior written consent.
          </li>
          <li>
            You will not create any product, service, or application that
            replicates, imitates, or is substantially similar to the
            Platform&apos;s functionality, design, or methodology, based on your
            experience as a user of the Platform.
          </li>
          <li>
            You will immediately notify the Company at <a href="mailto:ip@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">ip@corpsearena.com</a> if you
            become aware of any infringement of Corpse IP by any third party.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>18. Prohibited Conduct — Organisers</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Organisers who use the Platform&apos;s tools to create and manage
          tournaments are subject to the following additional IP obligations,
          over and above the general user obligations in Section 17:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Tournament creation tools, bracket templates, organiser dashboard
            interfaces, and all features available to organisers within the
            Platform remain the exclusive property of the Company. Organisers
            are granted a licence to use these tools for the purpose of running
            tournaments on the Platform — this licence does not transfer
            ownership of any tool, template, or interface.
          </li>
          <li>
            Organisers may not replicate, copy, or adapt the organiser dashboard
            design, tournament creation flow, or any proprietary feature of the
            organiser toolkit for use in any competing or independent platform.
          </li>
          <li>
            Organisers may not export, extract, or commercially exploit any
            participant data, match data, or tournament statistics generated
            through the Platform without the Company&apos;s prior written
            consent.
          </li>
          <li>
            Any branding, promotional materials, or tournament pages created
            using Corpse platform tools remain associated with the
            Company&apos;s platform and may not be repurposed as standalone
            branding outside the Platform.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>19. Platform Data &amp; Tournament Data Ownership</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          All data generated on or through the Platform — including but not
          limited to match results, ELO scores, ranking data, tournament
          statistics, squad records, organiser performance metrics, and player
          profiles — is owned by the Company.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This includes data contributed by users and organisers in the course
          of using the Platform. By using the Platform, users and organisers
          grant the Company a perpetual, irrevocable, worldwide, royalty-free
          licence to use, store, process, aggregate, analyse, and commercially
          exploit this data in any manner the Company sees fit, subject to the
          Platform&apos;s Privacy Policy.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">The Company may:</p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Use aggregated and anonymised Platform data for research, analytics,
            product improvement, and commercial reporting.
          </li>
          <li>
            License aggregated data sets (with all personally identifiable
            information removed) to research institutions, esports
            organisations, or commercial partners.
          </li>
          <li>
            Publish leaderboards, statistics, and rankings derived from Platform
            data as part of the Company&apos;s marketing and community
            engagement activities.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>
            Important: Organisers do not own the data generated by tournaments
            they host on the Platform. Tournament data — including participation
            records, match results, and prize records — belongs to the Company.
            Organisers may view and use this data within the Platform but may
            not export it for external commercial use.
          </strong>
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>20. User-Generated Content</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Users may submit certain content to the Platform — such as profile
          photos, in-game usernames, squad names, guild names, and any text
          entered in profile or community fields. With respect to such
          user-generated content:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The user retains ownership of any original creative content they
            submit, subject to the licence granted to the Company below.
          </li>
          <li>
            By submitting content to the Platform, the user grants the Company a
            non-exclusive, worldwide, royalty-free, sublicensable, perpetual
            licence to use, reproduce, display, adapt, and distribute that
            content for the purpose of operating and promoting the Platform.
          </li>
          <li>
            The user represents and warrants that any content they submit does
            not infringe the intellectual property rights of any third party.
          </li>
          <li>
            The Company reserves the right to remove any user-generated content
            that infringes third-party IP rights or violates the Platform&apos;s
            Terms and Conditions, without notice and without liability.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART VI — API ACCESS &amp; THIRD-PARTY LICENSING
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>21. Nature of API Licence</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company intends to make certain Platform APIs available to
          approved third-party developers and organisations ("API Partners") to
          enable integration with the Platform&apos;s data and features. Any
          such API access is granted exclusively on the following terms:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            API access constitutes a limited, revocable, non-exclusive,
            non-transferable licence to interact with specified Platform
            endpoints for the permitted purposes set out in a separate API
            Licence Agreement.
          </li>
          <li>
            The licence is personal to the API Partner — it cannot be assigned,
            sub-licensed, or transferred to any other person or entity without
            the Company&apos;s prior written consent.
          </li>
          <li>
            The licence is strictly limited to the scope of permitted use
            defined in the API Licence Agreement. Any use beyond that scope is
            unlicensed and constitutes a breach of this Policy and the API
            Licence Agreement.
          </li>
          <li>
            The licence may be revoked by the Company at any time, with or
            without cause, upon written notice to the API Partner.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>22. What API Access Does Not Grant</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          API access grants no rights beyond the specific, limited licence
          described in Section 21. In particular, API access does not grant any
          of the following:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Any ownership interest, co-ownership, or equity interest in any
            Corpse IP — including the underlying code, algorithms, data models,
            or architecture.
          </li>
          <li>
            Any right to access, view, copy, or reverse engineer the source code
            underlying any API endpoint.
          </li>
          <li>
            Any right to use Corpse trademarks, logos, or branding in any manner
            beyond what is expressly permitted in the API Licence Agreement.
          </li>
          <li>
            Any right to store, aggregate, or commercially exploit Platform data
            retrieved via the API beyond the specific permitted use defined in
            the API Licence Agreement.
          </li>
          <li>
            Any right to sub-licence the API access or data obtained through it
            to any third party.
          </li>
          <li>
            Any implied licence to any other Corpse IP not expressly included in
            the API Licence Agreement.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>23. Prohibited API Uses</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following uses of any Corpse API are absolutely prohibited,
          regardless of what any API Licence Agreement may state:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Building any product, service, or application that competes with,
            imitates, or is substantially similar to the Platform, using data or
            functionality obtained through API access.
          </li>
          <li>
            Using API-obtained data to train, fine-tune, or improve any
            artificial intelligence or machine learning model without the
            Company&apos;s explicit prior written consent.
          </li>
          <li>
            Scraping, harvesting, or bulk-extracting data through the API beyond
            normal, rate-limited programmatic access.
          </li>
          <li>
            Attempting to access any API endpoint, database, or system resource
            not expressly included in the API Licence Agreement.
          </li>
          <li>
            Sharing API credentials, access tokens, or API keys with any third
            party not named in the API Licence Agreement.
          </li>
          <li>
            Using API access to circumvent any access restriction, rate limit,
            or data protection measure implemented by the Company.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>24. API Licence Agreement Requirement</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          No third party may access any Corpse API without first executing a
          separate written API Licence Agreement with the Company. This Policy
          establishes the IP framework governing all API access — the API
          Licence Agreement governs the specific technical, commercial, and
          operational terms of each individual integration.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The API Licence Agreement will specify, at minimum:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>The specific APIs and endpoints to which access is granted.</li>
          <li>
            The permitted use cases and prohibited use cases for the specific
            integration.
          </li>
          <li>
            Data handling, storage, and security obligations of the API Partner.
          </li>
          <li>Rate limits, volume limits, and technical access parameters.</li>
          <li>
            Commercial terms, if any, including fees, revenue sharing, or
            attribution requirements.
          </li>
          <li>Term and termination conditions.</li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          To apply for API access, contact <a href="mailto:ip@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">ip@corpsearena.com</a> with a description of
          the intended use case and the organisation&apos;s details.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>25. Termination of API Access</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Upon termination of API access — whether by the Company&apos;s
          revocation, the API Partner&apos;s voluntary cessation, or expiry of
          the API Licence Agreement — the following obligations apply
          immediately:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            The API Partner must immediately cease all calls to Corpse APIs and
            deactivate all integration code.
          </li>
          <li>
            The API Partner must delete all Platform data obtained through the
            API, except where retention is required by law, in which case the
            Company must be notified in writing within 7 days.
          </li>
          <li>
            All IP obligations under this Policy survive termination — the API
            Partner retains no licence to use Corpse trademarks, copyrighted
            works, or data after termination.
          </li>
          <li>
            The Company reserves the right to audit compliance with
            post-termination data deletion obligations.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART VII — EMPLOYEE &amp; CONTRACTOR IP ASSIGNMENT
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>26. Automatic Assignment of IP</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          By virtue of their employment contract or contractor agreement with
          the Company, every employee, director, and contractor automatically
          assigns to the Company, with full title guarantee, all intellectual
          property rights (including copyright, design rights, and any other
          rights) in all works, inventions, improvements, and developments they
          create, conceive, develop, or reduce to practice:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            In the course of their employment or engagement with the Company.
          </li>
          <li>
            Using the Company&apos;s resources, information, or equipment.
          </li>
          <li>
            In relation to or connected with the Company&apos;s business,
            platform, products, or services — even if created outside of working
            hours or off Company premises.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This assignment is immediate and automatic — it takes effect from the
          moment the work is created and does not require any further act,
          signature, or deed. To the extent any additional formal assignment is
          required to perfect the Company&apos;s title in any jurisdiction, the
          employee or contractor agrees to execute such documents promptly upon
          request.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>27. Scope of Assignment</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The assignment described in Section 26 covers, without limitation:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            All source code, scripts, modules, libraries, APIs, and software
            written or contributed to by the employee or contractor.
          </li>
          <li>
            All design work, wireframes, mockups, prototypes, visual assets, and
            UI/UX elements created by the employee or contractor.
          </li>
          <li>
            All written content, documentation, technical specifications,
            business plans, pitch materials, and marketing content created by
            the employee or contractor.
          </li>
          <li>
            All algorithms, methodologies, processes, and system architectures
            conceived or developed by the employee or contractor.
          </li>
          <li>
            All improvements, modifications, enhancements, or derivative works
            made to any pre-existing Corpse IP.
          </li>
          <li>
            All work product created during any trial period, probationary
            period, or internship.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The assignment extends to all current and future forms of intellectual
          property protection that may be available for the assigned works,
          including copyright in all its forms and for the full duration of the
          copyright term.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>28. Disclosure Obligation</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Every employee and contractor has a continuing obligation to promptly
          disclose to the Company, in writing, any IP they create that may fall
          within the scope of Section 26. This obligation applies:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>During the period of employment or engagement.</li>
          <li>
            For a period of 12 months after the termination of employment or
            engagement, in respect of any IP that was conceived or developed
            during the employment or engagement period but not disclosed before
            termination.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Disclosure must be made to the Company&apos;s designated IP contact at
          <a href="mailto:ip@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">ip@corpsearena.com</a> and must include a description of the work created, the
          date of creation, and the circumstances of its creation. Failure to
          disclose IP is a breach of the employment or contractor agreement and
          may result in disciplinary action or legal proceedings.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>29. Survival After Termination</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          All IP assignment obligations under this Part survive the termination
          of employment or engagement for any reason — resignation, redundancy,
          dismissal, expiry of contract, or otherwise. Upon termination:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            All Company IP in the employee&apos;s or contractor&apos;s
            possession — including source code repositories, design files,
            documentation, and any copies thereof — must be returned to the
            Company or securely deleted within 7 days of the termination date.
          </li>
          <li>
            The employee or contractor retains no licence to use, copy, or build
            upon any Corpse IP after termination.
          </li>
          <li>
            The obligation to maintain confidentiality of any information about
            Corpse IP — including its architecture, algorithms, business logic,
            and unreleased features — continues in perpetuity after termination.
          </li>
          <li>
            The Company retains the right to seek injunctive relief and damages
            against any former employee or contractor who misuses Corpse IP
            after termination.
          </li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART VIII — INFRINGEMENT &amp; ENFORCEMENT
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>30. Copyright Infringement</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Under Section 51 of the Copyright Act, 1957, copyright in a work is
          infringed when any person, without the licence of the owner:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Does anything that only the owner has the exclusive right to do —
            such as reproducing, distributing, or communicating the work to the
            public.
          </li>
          <li>
            Permits any place to be used for the communication of the work to
            the public for profit, where such communication constitutes an
            infringement of copyright.
          </li>
          <li>
            Imports infringing copies of the work into India for sale or hire,
            or by way of trade offers or exposes for sale or hire any infringing
            copy.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The following are particularly relevant to the Platform&apos;s
          context:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Copying or reproducing Platform source code — even partially or in
            modified form — without authorisation.
          </li>
          <li>
            Creating a competing application, platform, or tool that
            substantially reproduces the design, layout, or functional
            architecture of the Platform.
          </li>
          <li>
            Scraping, downloading, or redistribution of Platform content, data,
            or design elements without authorisation.
          </li>
          <li>
            Using Corpse copyrighted content — including documents, marketing
            materials, or technical documents — without permission.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>31. Trademark Infringement</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Under Section 29 of the Trade Marks Act, 1999, a registered trademark
          is infringed when a person uses in the course of trade a mark which
          is:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Identical to the registered trademark in relation to identical goods
            or services.
          </li>
          <li>
            Identical to the registered trademark in relation to similar goods
            or services, and there is a likelihood of confusion.
          </li>
          <li>
            Similar to the registered trademark in relation to identical or
            similar goods or services, and there is a likelihood of confusion
            including likelihood of association.
          </li>
        </ul>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          During the trademark registration period, the Company&apos;s marks are
          additionally protected against passing off at common law — any use of
          a confusingly similar mark that damages the Company&apos;s goodwill is
          actionable regardless of whether registration is complete.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>32. Civil Remedies</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Upon establishing copyright or trademark infringement, the Company may
          seek the following civil remedies before the competent court:
        </p>
        <ul className="list-disc pl-10 space-y-3 mb-10 text-white/80 text-left bg-[#101010] p-8 rounded-xl border-l-4 border-[#e8192c] max-w-3xl w-full shadow-lg shadow-black/50">
          <li>
            Injunction — an order requiring the infringing party to immediately
            cease the infringing activity. Courts may grant urgent interim
            injunctions before a full trial where there is a serious question to
            be tried and the balance of convenience favours the applicant.
          </li>
          <li>
            Damages — compensation for the actual loss suffered by the Company
            as a result of the infringement, including loss of revenue, market
            share, and reputational damage.
          </li>
          <li>
            Account of profits — an order requiring the infringer to disgorge
            all profits made from the infringing activity, as an alternative to
            damages.
          </li>
          <li>
            Delivery up and destruction — an order requiring the infringer to
            deliver up all infringing copies, materials, and equipment used in
            the infringement, for destruction or forfeiture.
          </li>
          <li>
            Costs — recovery of the Company&apos;s legal costs from the
            infringer.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>33. Criminal Remedies</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Copyright and trademark infringement are criminal offences under
          Indian law, in addition to being civil wrongs:
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Copyright Act, 1957 — Section 63:</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Any person who knowingly infringes or abets the infringement of
          copyright in a work shall be punishable with imprisonment for a term
          of not less than six months, which may extend to three years, and a
          fine of not less than Rs 50,000, which may extend to Rs 2,00,000. For
          second and subsequent offences, the imprisonment term shall not be
          less than one year.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <strong>Trade Marks Act, 1999 — Section 103:</strong>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Any person who applies a false trademark to goods or services, or
          possesses articles for labelling goods with a false trademark, shall
          be punishable with imprisonment for a term of not less than six
          months, which may extend to three years, and a fine of not less than
          Rs 50,000, which may extend to Rs 2,00,000.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company reserves the right to file criminal complaints against
          infringers in addition to or instead of civil proceedings, based on
          the nature and severity of the infringement.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>34. Reporting Infringement to Corpse</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          The Company actively monitors for infringement of its IP across app
          stores, social media platforms, domain registrars, and the web. If you
          become aware of any infringement of Corpse IP, please report it
          immediately to:
        </p>
        <div className="overflow-x-auto mb-10 w-full max-w-4xl">
          <table className="w-full text-left border-collapse border border-[#e8192c]/20 bg-[#101010] rounded-xl overflow-hidden shadow-lg shadow-black/50">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>IP Contact Email</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"><a href="mailto:ip@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">ip@corpsearena.com</a></p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Subject Line</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    IP Infringement Report — [Brief Description]
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Include</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    Details of the infringing work or mark, the URL or location
                    where infringement was observed, the date first observed,
                    and any supporting screenshots or evidence
                  </p>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    <strong>Response Time</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    We will acknowledge your report within 5 business days and
                    advise on action taken within 15 business days
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          If you receive a claim that your use of any Corpse material is
          infringing a third party&apos;s rights, contact <a href="mailto:ip@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">ip@corpsearena.com</a>
          immediately with full details. The Company will assess all such claims
          and respond appropriately.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-16 mb-8 text-white border-b-2 border-[#e8192c]/50 pb-4 inline-block">
          PART IX — GOVERNING LAW, DISPUTE RESOLUTION &amp; CONTACT
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>35. Governing Law</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Intellectual Property, Trademark and Copyright Policy and all
          matters arising from or connected with it shall be governed by and
          construed exclusively in accordance with the laws of India, including
          the Copyright Act, 1957, the Trade Marks Act, 1999, and the
          Information Technology Act, 2000, as amended from time to time.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>36. Jurisdiction &amp; Arbitration</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          For disputes arising from or connected with this Policy that involve
          contractual parties — including employees, contractors, and API
          partners — the parties agree to first attempt resolution through good
          faith negotiation. If unresolved within 30 days, the dispute shall be
          submitted to binding arbitration under the Arbitration and
          Conciliation Act, 1996. The seat of arbitration shall be Guwahati,
          Assam, India. The language of arbitration shall be English.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          For enforcement actions against third-party infringers who are not
          contractual parties, the Company shall have the right to initiate
          proceedings before any court of competent jurisdiction in India,
          including the appropriate High Court or District Court having
          jurisdiction over the matter.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          Nothing in this Policy prevents the Company from seeking urgent
          interim or interlocutory relief from a court of competent jurisdiction
          at any time, without prior recourse to arbitration.
        </p>
        <h3 className="text-xl md:text-2xl font-medium mt-12 mb-6 text-white inline-block">
          <strong>37. IP Contact &amp; Enforcement</strong>
        </h3>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          All IP-related queries, licensing requests, infringement reports, and
          enforcement matters should be directed to:
        </p>
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
                    <strong>IP Contact Email</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]"><a href="mailto:ip@corpsearena.com" className="text-[#e8192c] hover:underline transition-colors">ip@corpsearena.com</a></p>
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
                    <strong>Response Time</strong>
                  </p>
                </td>
                <td className="border border-white/20 p-3">
                  <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
                    IP queries: 5 business days. Enforcement matters: 2 business
                    days.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          This Intellectual Property, Trademark &amp; Copyright Policy was last
          updated in April 2026 and is effective from May 1, 2026.
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>Version 1.0 | Corpse — [CORPSE ESPORTS PRIVATE LIMITED]</em>
        </p>
        <p className="mb-6 max-w-3xl w-full leading-relaxed text-[#d7d7d7]">
          <em>
            All rights reserved. Unauthorised use, reproduction, or infringement
            of any Corpse IP will be pursued to the fullest extent of Indian
            law.
          </em>
        </p>
      </div>
    </main>
  );
}
