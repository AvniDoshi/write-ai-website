import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "People & Partners" };

const organizations = [
  { id: "uci", name: "UC Irvine + Digital Learning Lab", description: "Center leadership, development, evaluation, engineering, and national communications.", people: [["Mark Warschauer", "Overall management + coordination"], ["Di Xu", "Pilot evaluation leadership"], ["Tamara Tate", "Development study + implementation guidance"], ["Kristi Werry", "PapyrusAI + searchable archive engineering"], ["Sabrina Look", "National communications"]] },
  { id: "mdrc", name: "MDRC", description: "Exploratory research, evaluation expertise, research training, and evidence communication.", people: [["Alexander Mayer", "Exploratory study leadership"], ["Richard Hendra", "Research training leadership"]] },
  { id: "california", name: "California Community Colleges", description: "Participatory implementation and professional learning in California community colleges.", people: [["Jory Hadsell", "California community-college implementation"]] },
  { id: "virginia", name: "Virginia Community College System", description: "Project operations, leadership, outreach, and implementation across Virginia.", people: [["Justin Schultz", "Project operations + implementation"]] },
  { id: "ace", name: "American Council on Education", description: "National higher-education leadership, policy connection, and outreach.", people: [["Hironao Okahana", "ACE project leadership"]] },
  { id: "houston", name: "Houston Community College", description: "Community-college implementation and local coordination in Houston.", people: [["Miguel Ramos", "Houston implementation"]] },
];

export default function PeoplePage() {
  return (
    <>
      <PageIntro eyebrow="People + organizations" title="A national partnership with many kinds of expertise." description="Use the organization menu to move directly to each proposed partner team and its role in WRITE AI." />
      <section className="section people-directory">
        <aside className="organization-nav"><p className="eyebrow">Organizations</p>{organizations.map((org)=><Link href={`#${org.id}`} key={org.id}>{org.name}</Link>)}</aside>
        <div className="organization-sections">
          {organizations.map((org, index)=><section className="organization-section" id={org.id} key={org.id}><p className="resource-kicker">0{index+1} · Organization</p><h2>{org.name}</h2><p className="section-deck">{org.description}</p><div className="organization-people">{org.people.map(([name, role])=><article key={name}><div className="person-monogram compact" aria-hidden="true">{name.split(" ").map((part)=>part[0]).join("")}</div><div><h3>{name}</h3><p>{role}</p></div></article>)}</div></section>)}
        </div>
      </section>
      <section className="section dll-team-link"><div><p className="eyebrow">Current lab team</p><h2>See the full Digital Learning Lab directory.</h2></div><div><p>The DLL maintains the current list of its leadership, researchers, graduate students, collaborators, and alumni.</p><Link className="button button-ghost" href="https://www.digitallearninglab.org/people.html">View the DLL team →</Link></div></section>
    </>
  );
}
