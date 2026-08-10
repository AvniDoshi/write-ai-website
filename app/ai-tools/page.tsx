import type { Metadata } from "next";
import { PageIntro } from "../components/SiteShell";
import { ToolExplorer } from "./ToolExplorer";

export const metadata: Metadata = { title: "AI Tools Database" };

export default function ToolsPage() {
  return (
    <>
      <PageIntro eyebrow="AI tools database" title="Explore AI tools for writing education." description="A developing, public research resource about generative AI tools used in postsecondary writing instruction. Preview records below demonstrate the planned experience; listings are not endorsements." />
      <section className="database-section"><ToolExplorer /></section>
    </>
  );
}
