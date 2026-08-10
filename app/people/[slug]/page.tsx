import type { Metadata } from "next";
import { SiteLink as Link } from "../../components/SiteLink";
import { getPerson, organizations } from "../data";

export function generateStaticParams() {
  return organizations.flatMap((organization) => organization.people.map((person) => ({ slug: person.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  return { title: person?.name ?? "Person profile" };
}

export default async function PersonProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = getPerson(slug);

  if (!person) {
    return <section className="section profile-page"><h1>Profile not found</h1><Link className="text-link" href="/people">Back to People →</Link></section>;
  }

  const initials = person.name.split(" ").map((part) => part[0]).join("");

  return (
    <>
      <section className="profile-hero">
        <Link className="profile-back" href="/people">← All people</Link>
        <div className="profile-identity"><div className="person-monogram profile-monogram" aria-hidden="true">{initials}</div><div><p className="eyebrow">{person.organization.name}</p><h1>{person.name}</h1><p>{person.role}</p></div></div>
      </section>
      <section className="section profile-content">
        <article><p className="resource-kicker">About</p><h2>Biography</h2><p>Add a longer biography, background, education, and current position here.</p></article>
        <article><p className="resource-kicker">WRITE AI</p><h2>Role in the center</h2><p>{person.role}. Add more detail about responsibilities, activities, and contributions here.</p></article>
        <article><p className="resource-kicker">More information</p><h2>Links and publications</h2><p>Add a personal website, institutional profile, selected publications, and contact links here.</p></article>
      </section>
    </>
  );
}
