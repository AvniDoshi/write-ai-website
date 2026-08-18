"use client";

import { useState } from "react";
import { SiteLink as Link } from "../components/SiteLink";
import { newsStories, type NewsCategory } from "./data";

const categories: Array<"All" | NewsCategory> = ["All", "Research", "Center News", "Publications", "Resources", "Events"];
const STORIES_PER_PAGE = 6;

export function NewsFeed() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const storiesByDate = [...newsStories].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
  const filteredStories = activeCategory === "All" ? storiesByDate : storiesByDate.filter((story) => story.category === activeCategory);
  const totalPages = Math.ceil(filteredStories.length / STORIES_PER_PAGE);
  const pageStart = (currentPage - 1) * STORIES_PER_PAGE;
  const visibleStories = filteredStories.slice(pageStart, pageStart + STORIES_PER_PAGE);

  const selectCategory = (category: (typeof categories)[number]) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const selectPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <>
      <div className="news-filters" aria-label="Filter news by category">
        {categories.map((category) => (
          <button
            className={activeCategory === category ? "active" : undefined}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => selectCategory(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      {visibleStories.length ? (
        <div className="three-grid news-grid">
          {visibleStories.map((story) => (
            <Link className="resource-card news-card" href={`/news/${story.slug}`} key={story.slug}>
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
      {totalPages > 1 ? (
        <nav className="news-pagination" aria-label={`${activeCategory} news pages`}>
          <button
            type="button"
            className="news-pagination-step"
            onClick={() => selectPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &larr; Previous
          </button>
          <div className="news-page-numbers" aria-label="Choose a news page">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                type="button"
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
                onClick={() => selectPage(page)}
                key={page}
              >
                {page}
              </button>
            ))}
          </div>
          <span className="sr-only" aria-live="polite">
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            className="news-pagination-step"
            onClick={() => selectPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next &rarr;
          </button>
        </nav>
      ) : null}
    </>
  );
}
