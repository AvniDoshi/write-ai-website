"use client";

import { useState } from "react";
import { SiteLink as Link } from "../components/SiteLink";
import { newsStories, type NewsCategory } from "./data";

const categories: Array<"All" | NewsCategory> = ["All", "Research", "Center News", "Publications", "Resources", "Events"];

export function NewsFeed() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const storiesByDate = [...newsStories].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
  const visibleStories = activeCategory === "All" ? storiesByDate : storiesByDate.filter((story) => story.category === activeCategory);

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
            <Link className="resource-card news-card" href={`/news/${story.slug}`} key={story.title}>
              <div className="resource-meta"><span>{story.category}</span><span>{story.date}</span></div>
              <h3>{story.title}</h3>
              <p>{story.summary}</p>
              <span className="text-link">Read full story &rarr;</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-state news-empty"><h3>No {activeCategory.toLowerCase()} updates yet.</h3><p>New items will appear here as they are published.</p></div>
      )}
    </>
  );
}
