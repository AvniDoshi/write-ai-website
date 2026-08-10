import type { Metadata } from "next";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "Training & Events" };

export default function TrainingPage() {
  return (
    <>
      <PageIntro eyebrow="Training + events" title="Build the capacity to study and teach with AI." description="Learning opportunities that connect rigorous research methods, responsible implementation, and the everyday realities of postsecondary education." />
      <section className="section event-feature"><div><p className="eyebrow light">Planned national convenings</p><h2>Evidence, policy, and practice at one table.</h2><p>The proposal calls for stakeholder convenings in project Years 2 and 4, each bringing together 75–100 researchers, educators, policymakers, students, developers, and institutional leaders.</p><span>Dates and participation details forthcoming</span></div><div className="event-date"><strong>75–100</strong><span>participants per convening</span></div></section>
      <section className="section">
        <div className="section-heading"><p className="eyebrow">Research Fellows Program</p><h2>Train the people who will build the next evidence base.</h2><p className="section-deck">Designed for researchers, educators, institutional researchers, EdTech professionals, and graduate students.</p></div>
        <div className="topic-grid">{["AI evaluation frameworks", "RCTs + A/B testing", "Engagement analytics", "Research data management", "Mixed-methods research", "Bias + ethics"].map((topic, index) => <div key={topic}><span>0{index + 1}</span><strong>{topic}</strong></div>)}</div>
      </section>
      <section className="professional-learning"><div><p className="eyebrow">Professional development</p><h2>Practical learning for educators.</h2></div><p>Planned outreach includes monthly webinars, annual research briefs, a quarterly podcast series with MDRC’s Evidence First, and a professional-development certificate developed in Year 1 and offered through @ONE in Years 2–5.</p></section>
    </>
  );
}
