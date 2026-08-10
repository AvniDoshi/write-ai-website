import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { organizations } from "./data";

export const metadata: Metadata = { title: "People & Partners" };

export default function PeoplePage() {
  return (
    <>
      <h1 className="sr-only">People and partners</h1>
      <section className="section people-directory people-directory-top">
        <aside className="organization-nav"><p className="eyebrow">Organizations</p>{organizations.map((org)=><Link href={`#${org.id}`} key={org.id}>{org.name}</Link>)}</aside>
        <div className="organization-sections">
          {organizations.map((org)=><section className="organization-section" id={org.id} key={org.id}><h2>{org.name}</h2><p className="organization-description">{org.description}</p><div className="organization-people">{org.people.map((person)=><Link className="person-card" href={`/people/${person.slug}`} key={person.slug}><div className="person-monogram compact" aria-hidden="true">{person.name.split(" ").map((part)=>part[0]).join("")}</div><div><h3>{person.name}</h3><p>{person.role}</p><span>View profile →</span></div></Link>)}</div></section>)}
        </div>
      </section>
      <section className="section dll-team-link"><div><p className="eyebrow">Current lab team</p><h2>See the full Digital Learning Lab directory.</h2></div><div><p>The DLL maintains the current list of its leadership, researchers, graduate students, collaborators, and alumni.</p><Link className="button button-ghost" href="https://www.digitallearninglab.org/people.html">View the DLL team →</Link></div></section>
    </>
  );
}
