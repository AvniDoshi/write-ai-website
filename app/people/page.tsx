import type { Metadata } from "next";
import { PageIntro } from "../components/SiteShell";
import { partners } from "../data/site";

export const metadata: Metadata = { title: "People & Partners" };

export default function PeoplePage() {
  const leaders = [
    ["Mark Warschauer", "Center Director", "UC Irvine"],
    ["Di Xu", "Co-Principal Investigator", "UC Irvine"],
    ["Tamara Tate", "Co-Principal Investigator", "UC Irvine"],
    ["Alexander Mayer", "Co-Principal Investigator", "MDRC"],
    ["Richard Hendra", "Co-Principal Investigator", "MDRC"],
    ["Jory Hadsell", "Co-Principal Investigator", "Foothill–De Anza CCD"],
  ];
  return (
    <>
      <PageIntro eyebrow="People + partners" title="A center built from many kinds of expertise." description="Writing, learning science, community colleges, evaluation, educational technology, ethics, policy, and national leadership—all at one table." />
      <section className="section"><div className="section-heading"><p className="eyebrow">Leadership</p><h2>Meet the team guiding the work.</h2></div><div className="people-grid">{leaders.map(([name, role, institution]) => <article key={name}><div className="person-monogram" aria-hidden="true">{name.split(" ").map((part) => part[0]).join("")}</div><h3>{name}</h3><p>{role}</p><span>{institution}</span></article>)}</div></section>
      <section className="advisor-band"><p>Research team</p><p>Writing advisors</p><p>AI + learning advisors</p><p>Ethics advisors</p></section>
      <section className="section"><div className="section-heading"><p className="eyebrow">Our partners</p><h2>National reach, shared purpose.</h2></div><div className="partner-grid large-partners">{partners.map((partner) => <span key={partner}>{partner}</span>)}</div></section>
    </>
  );
}
