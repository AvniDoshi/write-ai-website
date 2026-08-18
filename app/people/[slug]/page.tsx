import type { Metadata } from "next";
import { SiteLink as Link } from "../../components/SiteLink";
import { getPerson, peopleSections } from "../data";

export function generateStaticParams() {
  return peopleSections.flatMap((section) => section.people.map((person) => ({ slug: person.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return { title: "Person profile" };

  const description = person.description ?? `${person.name} serves as ${person.role} with the WRITE AI Center.`;
  return {
    title: person.name,
    description,
    openGraph: {
      title: `${person.name} | WRITE AI Center`,
      description,
      images: person.image ? [{ url: person.image, alt: `Portrait of ${person.name}` }] : [],
    },
    twitter: {
      card: person.image ? "summary_large_image" : "summary",
      title: `${person.name} | WRITE AI Center`,
      description,
      images: person.image ? [person.image] : [],
    },
  };
}

export default async function PersonProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = getPerson(slug);

  if (!person) {
    return <section className="section profile-page"><h1>Profile not found</h1><Link className="text-link" href="/people">Back to People →</Link></section>;
  }

  const initials = person.name.split(" ").filter((part) => !part.includes(",") && part !== "PhD").map((part) => part[0]).join("");

  return (
    <>
      <section className="profile-hero">
        <Link className="profile-back" href="/people">← All people</Link>
        <div className="profile-identity">{person.image ? <img className={`profile-photo${person.imagePosition ? ` profile-photo-${person.imagePosition}` : ""}`} src={person.image} alt={`Portrait of ${person.name}`} style={person.imageObjectPosition ? { objectPosition: person.imageObjectPosition } : undefined} /> : <div className="person-monogram profile-monogram" aria-hidden="true">{initials}</div>}<div><p className="eyebrow">{person.section.name}</p><h1>{person.name}</h1><p>{person.title ?? person.role} · {person.institution}</p></div></div>
      </section>
      <section className="section profile-content">
        <article className="profile-biography"><p className="resource-kicker">About</p><h2>Biography</h2><p>{person.description ?? "Additional biography information will be added as it becomes available."}</p></article>
        <article><p className="resource-kicker">WRITE AI</p><h2>Role in the center</h2><p>{person.role}</p></article>
        <article><p className="resource-kicker">More information</p><h2>Links</h2>{person.links?.length ? <ul className="profile-links">{person.links.map((link) => <li key={link.href}><Link href={link.href} target="_blank" rel="noreferrer">{link.label}<span aria-hidden="true">↗</span></Link></li>)}</ul> : <p>Additional links will be added as they become available.</p>}</article>
      </section>
    </>
  );
}
