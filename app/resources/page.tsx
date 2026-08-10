import type { Metadata } from "next";
import { PageIntro } from "../components/SiteShell";
import { resources } from "../data/site";

export const metadata: Metadata = { title: "Resources" };

export default function ResourcesPage() {
  const types = ["Research briefs", "Best practices", "Implementation guides", "Teaching materials", "AI literacy resources", "Evaluation frameworks", "Webinars", "Publications + datasets"];
  return (
    <>
      <PageIntro eyebrow="Resources" title="Evidence made useful." description="This library will grow as WRITE AI studies progress. The items below are planned deliverables—not yet published resources." />
      <section className="section audience-strip"><span>For educators</span><span>For researchers</span><span>For institutions</span><span>For students</span></section>
      <section className="section resource-library">
        <aside><p className="eyebrow">Browse by type</p>{types.map((type) => <span key={type}>{type}</span>)}</aside>
        <div className="resource-list">{resources.map((resource, index) => <article key={resource.title}><span>0{index + 1}</span><div><p className="resource-kicker">{resource.type} · {resource.audience}</p><h2>{resource.title}</h2><p>{resource.summary}</p></div><b>Planned</b></article>)}</div>
      </section>
    </>
  );
}
