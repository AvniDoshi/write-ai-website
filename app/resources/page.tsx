import type { Metadata } from "next";
import { PageIntro } from "../components/SiteShell";
import { resources } from "../data/site";

export const metadata: Metadata = { title: "Resources" };

export default function ResourcesPage() {
  const types = ["Research briefs", "Best practices", "Implementation guides", "Teaching materials", "AI literacy resources", "Evaluation frameworks", "Webinars", "Publications + datasets"];
  return (
    <>
      <PageIntro eyebrow="Resources" title="Evidence made useful." description="A growing library for educators, researchers, institutions, and students working at the intersection of writing and generative AI." />
      <section className="section audience-strip"><span>For educators</span><span>For researchers</span><span>For institutions</span><span>For students</span></section>
      <section className="section resource-library">
        <aside><p className="eyebrow">Browse by type</p>{types.map((type) => <span key={type}>{type}</span>)}</aside>
        <div className="resource-list">{resources.map((resource, index) => <article key={resource.title}><span>0{index + 1}</span><div><p className="resource-kicker">{resource.type} · {resource.audience}</p><h2>{resource.title}</h2><p>{resource.summary}</p></div><b>Coming soon</b></article>)}</div>
      </section>
    </>
  );
}
