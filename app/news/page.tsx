import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "News & Insights" };

const latest = [
  ["Research", "Enhancing academic writing and digital literacy with an AI coach", "The Digital Learning Lab lists this California Learning Lab project as active from January 2025 through December 2027.", "Current", "https://www.digitallearninglab.org/grants.html"],
  ["Resources", "Generative AI in Education", "A UCI initiative investigating responsible and effective AI integration across K–12 and higher education.", "Current", "https://www.genaied.org/"],
  ["Events", "AI in Higher Education", "A three-unit UCI course focused on AI literacy, critical evaluation, ethics, equity, and human-centered scaffolding.", "September 2026", "https://www.digitallearninglab.org/ai-in-higher-education.html"],
];

export default function NewsPage() {
  return <>
    <PageIntro eyebrow="News + insights" title="News & Insights" description="Research findings, publications, resources, events, and updates from the WRITE AI Center." />
    <section className="section featured-story"><div><p className="eyebrow">Featured story</p><p className="resource-kicker">Center news</p><h2>GenAI team presents writing research across three institutions</h2><p>Tamara Tate, Beth Harnick-Shapiro, and Stephanie Tran presented work on incorporating generative AI into writing at the DET/CHE annual conference.</p><span>December 2025</span><br/><Link className="text-link" href="https://www.digitallearninglab.org/">Read more →</Link></div></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">Latest</p><h2>Current research, resources, and events.</h2></div><div className="news-filters" aria-label="News categories"><span className="active">All</span><span>Research</span><span>Center News</span><span>Publications</span><span>Resources</span><span>Events</span></div><div className="three-grid">{latest.map(([category,title,copy,date,href])=><article className="resource-card" key={title}><div className="resource-meta"><span>{category}</span><span>{date}</span></div><h3>{title}</h3><p>{copy}</p><Link className="text-link" href={href}>Read more →</Link></article>)}</div></section>
    <section className="section two-column-story institutional-section"><div><p className="eyebrow">Research and publications</p><h2>Research in progress</h2></div><div className="prose"><p>WRITE AI is conducting research on generative AI tools, AI-supported writing instruction, student and instructor outcomes, implementation, and responsible AI use.</p><p>As findings become available, publications, preprints, research briefs, accessible summaries, podcasts, and other public-facing research communication will be shared here.</p></div></section>
  </>;
}
