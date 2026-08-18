import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { PageIntro } from "../components/SiteShell";
import { NewsFeed } from "./NewsFeed";
import { newsStories } from "./data";

export const metadata: Metadata = { title: "News & Insights" };

export default function NewsPage() {
  const featuredStory = newsStories.find((story) => story.slug === "ai-in-higher-education")
    ?? [...newsStories].sort((a, b) => b.sortDate.localeCompare(a.sortDate))[0];

  return <>
    <PageIntro eyebrow="News + insights" title="News & Insights" description="Research findings, publications, resources, events, and updates from the WRITE AI Center." />
    <section className="section featured-story"><div><p className="eyebrow">Featured story</p><p className="resource-kicker">{featuredStory.category}</p><h2><Link href={`/news/${featuredStory.slug}`}>{featuredStory.title}</Link></h2><p>{featuredStory.summary}</p><span>{featuredStory.date}</span><br/><Link className="text-link" href={`/news/${featuredStory.slug}`}>Read full story →</Link></div></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">Latest</p><h2>Current research, resources, and events.</h2></div><NewsFeed /></section>
  </>;
}
