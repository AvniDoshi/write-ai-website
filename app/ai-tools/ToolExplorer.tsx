"use client";

import { useMemo, useState } from "react";
import { sampleTools } from "../data/site";

export function ToolExplorer() {
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState("All stages");
  const results = useMemo(() => sampleTools.filter((tool) => {
    const matchesQuery = `${tool.name} ${tool.type} ${tool.description}`.toLowerCase().includes(query.toLowerCase());
    const matchesStage = stage === "All stages" || tool.stage.includes(stage);
    return matchesQuery && matchesStage;
  }), [query, stage]);

  return (
    <div className="tool-explorer">
      <aside className="filters">
        <div><label htmlFor="tool-search">Search tools</label><input id="tool-search" type="search" placeholder="Search by name or feature" value={query} onChange={(event) => setQuery(event.target.value)} /></div>
        <div><label htmlFor="writing-stage">Writing stage</label><select id="writing-stage" value={stage} onChange={(event) => setStage(event.target.value)}>{["All stages", "Planning", "Drafting", "Revision", "Reflection"].map((value) => <option key={value}>{value}</option>)}</select></div>
        <p className="filter-note">The full research database will add filters for cost, instructor controls, privacy, AI literacy, evidence, and institution type.</p>
      </aside>
      <div className="tool-results">
        <div className="result-count"><strong>{results.length} preview records</strong><span>Research database in development</span></div>
        {results.map((tool) => (
          <article className="tool-card" key={tool.name}>
            <div><span className="tool-type">{tool.type}</span><h2>{tool.name}</h2><p>{tool.description}</p><div className="mini-tags">{tool.stage.map((item) => <span key={item}>{item}</span>)}</div></div>
            <dl><div><dt>Cost</dt><dd>{tool.cost}</dd></div><div><dt>Privacy</dt><dd>{tool.privacy}</dd></div><div><dt>Evidence</dt><dd>{tool.evidence}</dd></div></dl>
          </article>
        ))}
        {results.length === 0 && <div className="empty-state"><h2>No matching preview records.</h2><p>Try a different name, feature, or writing stage.</p></div>}
      </div>
    </div>
  );
}
