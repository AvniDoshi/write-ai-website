import type { Metadata } from "next";
import { SiteLink as Link } from "../../components/SiteLink";
import { getNewsStory, newsStories } from "../data";

export function generateStaticParams() {
  return newsStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = getNewsStory(slug);
  return {
    title: story?.title ?? "News story",
    description: story?.summary,
  };
}

export default async function NewsStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getNewsStory(slug);

  if (!story) {
    return <section className="section profile-page"><h1>Story not found</h1><Link className="text-link" href="/news">Back to News & Insights →</Link></section>;
  }

  return (
    <>
      <section className="profile-hero news-article-hero">
        <Link className="profile-back" href="/news">← All news and insights</Link>
        <div className="news-article-header">
          <p className="eyebrow">{story.category}</p>
          <h1>{story.title}</h1>
          <p className="news-article-date">{story.date}</p>
        </div>
      </section>
      <article className="section news-article">
        <div className="news-article-body">
          {story.paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>
              {paragraph.map((part, partIndex) => part.href
                ? <Link href={part.href} key={partIndex}>{part.text}</Link>
                : part.text)}
            </p>
          ))}
          {story.cta ? <Link className="button" href={story.cta.href}>{story.cta.label} →</Link> : null}
        </div>
      </article>
    </>
  );
}
