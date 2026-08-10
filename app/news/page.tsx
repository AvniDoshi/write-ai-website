import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "News & Insights" };

export default function NewsPage() {
  const updates = [
    ["Related UCI project", "Enhancing academic writing and digital literacy with an AI coach", "The Digital Learning Lab lists this California Learning Lab project as active from January 2025 through December 2027.", "https://www.digitallearninglab.org/grants.html", "View DLL grant details"],
    ["DLL research", "Generative AI in Education", "A UCI initiative investigating responsible and effective AI integration across K–12 and higher education.", "https://www.genaied.org/", "Visit GENAIEd"],
    ["Professional learning", "AI in Higher Education", "A three-unit UCI course for instructors and instructional-support professionals focused on AI literacy, critical evaluation, ethics, equity, and human-centered scaffolding.", "https://www.digitallearninglab.org/ai-in-higher-education", "View course information"],
    ["December 2025", "GenAI team presents writing research", "DLL reports that Tamara Tate, Beth Harnick-Shapiro, and Stephanie Tran presented work on incorporating generative AI into writing across three institutions at the DET/CHE annual conference.", "https://www.digitallearninglab.org/", "Read DLL updates"],
  ];
  return <><PageIntro eyebrow="News + insights" title="Follow the research as it develops." description="Verified related work from the Digital Learning Lab, plus future WRITE AI publications and announcements as they become available." /><section className="section channel-grid">{updates.map(([type, title, copy, href, label], index) => <article key={title}><span>0{index + 1}</span><p className="resource-kicker">{type}</p><h2>{title}</h2><p>{copy}</p><Link className="text-link" href={href}>{label} →</Link></article>)}</section></>;
}
