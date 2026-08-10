"use client";

import { useState } from "react";
import { SiteLink as Link } from "../components/SiteLink";

const categories = ["All", "Research", "Center News", "Publications", "Resources", "Events"] as const;

const stories = [
  { category: "Research", title: "Enhancing academic writing and digital literacy with an AI coach", copy: "The Digital Learning Lab lists this California Learning Lab project as active from January 2025 through December 2027.", date: "Current", href: "https://www.digitallearninglab.org/grants.html" },
  { category: "Center News", title: "GenAI team presents writing research across three institutions", copy: "Tamara Tate, Beth Harnick-Shapiro, and Stephanie Tran presented work on incorporating generative AI into writing at the DET/CHE annual conference.", date: "December 2025", href: "https://www.digitallearninglab.org/" },
  { category: "Resources", title: "Generative AI in Education", copy: "A UCI initiative investigating responsible and effective AI integration across K-12 and higher education.", date: "Current", href: "https://www.genaied.org/" },
  { category: "Events", title: "AI in Higher Education", copy: "A three-unit UCI course focused on AI literacy, critical evaluation, ethics, equity, and human-centered scaffolding.", date: "September 2026", href: "https://www.digitallearninglab.org/ai-in-higher-education.html" },
] as const;

export function NewsFeed() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const visibleStories = activeCategory === "All" ? stories : stories.filter((story) => story.category === activeCategory);

  return (
    <>
      <div className="news-filters" aria-label="Filter news by category">
        {categories.map((category) => (
          <button
            className={activeCategory === category ? "active" : undefined}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      {visibleStories.length ? (
        <div className="three-grid news-grid">
          {visibleStories.map((story) => (
            <article className="resource-card" key={story.title}>
              <div className="resource-meta"><span>{story.category}</span><span>{story.date}</span></div>
              <h3>{story.title}</h3>
              <p>{story.copy}</p>
              <Link className="text-link" href={story.href}>Read more &rarr;</Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state news-empty"><h3>No {activeCategory.toLowerCase()} updates yet.</h3><p>New items will appear here as they are published.</p></div>
      )}
    </>
  );
}
