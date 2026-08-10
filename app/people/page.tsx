import type { Metadata } from "next";
import { PageIntro } from "../components/SiteShell";
import { partners } from "../data/site";

export const metadata: Metadata = { title: "People & Partners" };

export default function PeoplePage() {
  const leaders = [
    ["Mark Warschauer", "Overall management + coordination", "UC Irvine / Digital Learning Lab"],
    ["Di Xu", "Pilot evaluation leadership", "UC Irvine"],
    ["Tamara Tate", "Development study + implementation guidance", "UC Irvine / Digital Learning Lab"],
    ["Alexander Mayer", "Exploratory study leadership", "MDRC"],
    ["Richard Hendra", "Research training leadership", "MDRC"],
    ["Jory Hadsell", "California community-college implementation", "Foothill–De Anza CCD"],
    ["Justin Schultz", "Project operations + implementation", "Virginia Community College System"],
    ["Hironao Okahana", "ACE project leadership", "American Council on Education"],
    ["Kristi Werry", "PapyrusAI + searchable archive engineering", "Software development"],
    ["Sabrina Look", "National communications", "UC Irvine / Digital Learning Lab"],
    ["Miguel Ramos", "Houston implementation", "Houston Community College"],
  ];
  return (
    <>
      <PageIntro eyebrow="People + partners" title="A proposed center built from many kinds of expertise." description="The project narrative brings together writing, learning science, community colleges, evaluation, educational technology, ethics, policy, and national leadership." />
      <section className="section"><div className="section-heading"><p className="eyebrow">Leadership</p><h2>Meet the team guiding the work.</h2></div><div className="people-grid">{leaders.map(([name, role, institution]) => <article key={name}><div className="person-monogram" aria-hidden="true">{name.split(" ").map((part) => part[0]).join("")}</div><h3>{name}</h3><p>{role}</p><span>{institution}</span></article>)}</div></section>
      <section className="advisor-band"><p>Research team</p><p>Writing advisors</p><p>AI + learning advisors</p><p>Ethics advisors</p></section>
      <section className="section"><div className="section-heading"><p className="eyebrow">Our partners</p><h2>National reach, shared purpose.</h2></div><div className="partner-grid large-partners">{partners.map((partner) => <span key={partner}>{partner}</span>)}</div></section>
      <section className="section two-column-story"><div><p className="eyebrow">Verified DLL team</p><h2>Meet the lab behind the UCI work.</h2></div><div className="prose"><p>The Digital Learning Lab identifies Mark Warschauer as Director and Principal Investigator, Tamara Tate as Associate Director, and Sabrina Look as Director of Communications and Special Projects.</p><a className="text-link" href="https://www.digitallearninglab.org/people.html">View the current DLL team →</a></div></section>
    </>
  );
}
