import type { Metadata } from "next";
import { SiteLink as Link } from "../../components/SiteLink";
import { getOrganization, organizations } from "../data";

export function generateStaticParams() {
  return organizations.map((organization) => ({ slug: organization.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const organization = getOrganization(slug);
  return { title: organization?.shortName ?? "Partner organization" };
}

export default async function OrganizationProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const organization = getOrganization(slug);

  if (!organization) {
    return <section className="section profile-page"><h1>Organization not found</h1><Link className="text-link" href="/people#partner-organizations">Back to partner organizations →</Link></section>;
  }

  return (
    <>
      <section className="profile-hero organization-profile-hero">
        <Link className="profile-back" href="/people#partner-organizations">← All partner organizations</Link>
        <div className="organization-profile-identity"><p className="eyebrow">Partner organization</p><h1>{organization.name}</h1></div>
      </section>
      <section className="section profile-content organization-profile-content">
        <article className="profile-biography"><p className="resource-kicker">About</p><h2>{organization.shortName}</h2><p>{organization.about}</p></article>
        <article><p className="resource-kicker">WRITE AI</p><h2>Role in the Center</h2><p>{organization.role}</p></article>
        <article><p className="resource-kicker">More information</p><h2>Website</h2><ul className="profile-links"><li><Link href={organization.website} target="_blank" rel="noreferrer">Visit the Digital Learning Lab<span aria-hidden="true">↗</span></Link></li></ul></article>
      </section>
    </>
  );
}
