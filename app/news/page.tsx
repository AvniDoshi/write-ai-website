import type { Metadata } from "next";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "News & Insights" };

export default function NewsPage() {
  const channels = [
    ["Research updates", "Follow studies from design through publication."],
    ["Center news", "Meet collaborators and see WRITE AI’s national work."],
    ["Insights", "Ideas from researchers, educators, and advisors."],
    ["Publications", "New briefs, preprints, articles, and datasets."],
    ["Webinars + podcasts", "Conversations that connect evidence and practice."],
    ["Announcements", "Programs, opportunities, and upcoming events."],
  ];
  return <><PageIntro eyebrow="News + insights" title="Follow the research as it develops." description="Updates, publications, conversations, and opportunities from across the WRITE AI collaboration." /><section className="section channel-grid">{channels.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p><b>Updates coming soon</b></article>)}</section></>;
}
