"use client";

import { useEffect, useState } from "react";

type SectionLink = {
  id: string;
  name: string;
};

export function PeopleSectionNav({ sections }: { sections: SectionLink[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (sections.some((section) => section.id === hash)) setActiveId(hash);
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, [sections]);

  return (
    <aside className="organization-nav" aria-label="People and partner sections">
      {sections.map((section) => (
        <a
          href={`#${section.id}`}
          key={section.id}
          className={activeId === section.id ? "section-link-active" : undefined}
          aria-current={activeId === section.id ? "location" : undefined}
          onClick={() => setActiveId(section.id)}
        >
          {section.name}
        </a>
      ))}
    </aside>
  );
}
