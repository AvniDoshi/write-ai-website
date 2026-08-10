import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { partnerOrganizations, peopleSections } from "./data";

export const metadata: Metadata = { title: "People" };

export default function PeoplePage() {
  return <>
    <section className="compact-intro"><p className="eyebrow">People</p><h1>People</h1><p>WRITE AI brings together researchers, educators, institutional leaders, technologists, and advisors with expertise across writing, generative AI, postsecondary education, research and evaluation, and responsible technology.</p></section>
    <section className="section people-directory"><aside className="organization-nav"><p className="eyebrow">On this page</p>{peopleSections.map((section)=><Link href={`#${section.id}`} key={section.id}>{section.name}</Link>)}<Link href="#partner-organizations">Partner Organizations</Link></aside><div className="organization-sections">{peopleSections.map((section)=><section className="organization-section" id={section.id} key={section.id}><h2>{section.name}</h2><div className="organization-people">{section.people.map((person)=><Link className="person-card" href={`/people/${person.slug}`} key={person.slug}><div className="person-monogram compact" aria-hidden="true">{person.name.split(" ").map((part)=>part[0]).join("")}</div><div><h3>{person.name}</h3><p>{person.role}</p><small>{person.institution}</small><span>View profile →</span></div></Link>)}</div></section>)}<section className="organization-section" id="partner-organizations"><h2>Partner Organizations</h2><div className="partner-grid large-partners">{partnerOrganizations.map((partner)=><span key={partner}>{partner}</span>)}</div></section></div></section>
  </>;
}
