import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { partnerOrganizations, peopleSections } from "./data";
import { PeopleSectionNav } from "./PeopleSectionNav";

export const metadata: Metadata = { title: "People" };

function initialsFor(name: string) {
  return name.split(" ").filter((part) => !part.includes(",") && part !== "PhD").map((part) => part[0]).join("");
}

export default function PeoplePage() {
  return <>
    <section className="compact-intro"><h1>People</h1><p>WRITE AI brings together researchers, educators, institutional leaders, technologists, and advisors with expertise across writing, generative AI, postsecondary education, research and evaluation, and responsible technology.</p></section>
    <section className="section people-directory">
      <PeopleSectionNav sections={[...peopleSections.map(({ id, name }) => ({ id, name })), { id: "partner-organizations", name: "Partner Organizations" }]} />
      <div className="organization-sections">
        {peopleSections.map((section) => <section className="organization-section" id={section.id} key={section.id}><h2>{section.name}</h2><div className="organization-people">{section.people.map((person) => <Link className="person-card" href={`/people/${person.slug}`} key={person.slug}>{person.image ? <img className="person-photo compact" src={person.image} alt="" style={person.imageObjectPosition ? { objectPosition: person.imageObjectPosition } : undefined} /> : <div className="person-monogram compact" aria-hidden="true">{initialsFor(person.name)}</div>}<div><h3>{person.name}</h3><p>{person.role}</p><small>{person.institution}</small></div></Link>)}</div></section>)}
        <section className="organization-section" id="partner-organizations"><h2>Partner Organizations</h2><div className="partner-grid large-partners">{partnerOrganizations.map((partner) => <Link className="partner-link" href={partner.href} key={partner.name}>{partner.name}</Link>)}</div></section>
      </div>
    </section>
  </>;
}
