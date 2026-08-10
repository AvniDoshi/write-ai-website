import type { Metadata } from "next";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "Training & Events" };

export default function TrainingPage() {
  return (
    <>
      <PageIntro eyebrow="Training + events" title="Build the capacity to study and teach with AI." description="Learning opportunities that connect rigorous research methods, responsible implementation, and the everyday realities of postsecondary education." />
      <section className="section event-feature"><div><p className="eyebrow light">Signature gathering</p><h2>Futures Summit</h2><p>A national conversation about evidence, policy, and the future of writing education with generative AI.</p><span>Program details forthcoming</span></div><div className="event-date"><strong>2027</strong><span>National convening</span></div></section>
      <section className="section">
        <div className="section-heading"><p className="eyebrow">Research Fellows Program</p><h2>Train the people who will build the next evidence base.</h2><p className="section-deck">Designed for researchers, educators, institutional researchers, EdTech professionals, and graduate students.</p></div>
        <div className="topic-grid">{["AI evaluation frameworks", "RCTs + A/B testing", "Engagement analytics", "Research data management", "Mixed-methods research", "Bias + ethics"].map((topic, index) => <div key={topic}><span>0{index + 1}</span><strong>{topic}</strong></div>)}</div>
      </section>
      <section className="professional-learning"><div><p className="eyebrow">Professional development</p><h2>Practical learning for educators.</h2></div><p>Workshops, webinars, and certificate programs will help instructors make informed choices about when and how to incorporate AI into writing instruction.</p></section>
    </>
  );
}
