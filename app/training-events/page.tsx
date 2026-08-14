import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "Training & Events" };

export default function TrainingPage() {
  return <>
    <PageIntro eyebrow="Training + events" title="Training & Events" description="WRITE AI supports researchers, educators, and institutional leaders in building the knowledge and skills needed to evaluate and use generative AI in postsecondary education." />
    <section className="section two-column-story"><div><p className="eyebrow">WRITE AI Fellows Program</p><h2>Strengthening national research capacity.</h2></div><div className="prose"><p>The WRITE AI Fellows Program will train 40 researchers, educators, and institutional leaders across two cohorts.</p><p>Participants will engage in a virtual-first program combining expert-led training, collaborative learning, research resources, technical assistance, and opportunities to connect with others working in AI and education.</p></div></section>
    <section className="section institutional-section"><div className="section-heading"><p className="eyebrow">Training areas</p><h2>Methods for studying AI-supported education.</h2></div><div className="topic-grid">{[["AI Evaluation","Learning outcomes, implementation, and effectiveness."],["Causal Research","Randomized controlled trials and A/B testing."],["Engagement and Tool Behavior","How students interact with AI systems."],["Research Data and Privacy","Managing AI-generated data responsibly and securely."],["Mixed-Methods Research","Combining quantitative and qualitative approaches."],["Ethics and Bias","Identifying harms and evaluating responsible AI practices."]].map(([title,copy],index)=><div key={title}><span>0{index+1}</span><strong>{title}</strong><p>{copy}</p></div>)}</div></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">Professional development</p><h2>Supporting postsecondary educators.</h2><p className="section-deck">A new professional development certificate program for postsecondary educators will focus on understanding AI-assisted writing, selecting appropriate tools, integrating AI into course design, developing guidelines for student use, supporting AI literacy, addressing ethical issues, and adapting writing assessment.</p></div><Link className="button button-ghost" href="https://www.digitallearninglab.org/custom-professional-learning.html">Explore DLL professional learning →</Link></section>
    <section className="section institutional-section"><div className="section-heading"><p className="eyebrow">Webinars</p><h2>Emerging issues in AI-supported learning.</h2><p className="section-deck">WRITE AI will produce annual briefs, host educational webinars, and produce podcasts with recordings made available for broader access.</p></div><ul className="development-list"><li>Academic Integrity</li><li>Student AI Literacy</li><li>AI-Supported Writing Feedback</li><li>Institutional AI Adoption</li><li>Responsible AI</li></ul></section>
    <section className="section two-column-story"><div><p className="eyebrow">Events and convenings</p><h2>Bringing research, policy, and practice together.</h2></div><div className="prose"><p>WRITE AI will participate in and organize national events for researchers, educators, policymakers, institutional leaders, and technology developers.</p><p>These gatherings will support the exchange of research findings, promising practices, research priorities, and evidence-based guidance for AI in higher education.</p></div></section>
    <section className="section events-section">
      <div className="section-heading"><p className="eyebrow">Upcoming events</p><h2>Confirmed opportunities.</h2></div>
      <div className="event-calendar">
        <article className="event-card">
          <div className="calendar-date"><span>SEP</span><strong>29</strong><small>2026</small></div>
          <div className="event-card-copy"><p className="resource-kicker">Virtual · Registration open</p><h2>AI in Higher Education</h2><p>A synchronous UCI course for postsecondary instructors and instructional-support professionals, meeting Tuesdays from 4:00–5:30 p.m. Pacific through December 1.</p><Link className="text-link" href="/news/ai-in-higher-education">Course details and registration →</Link></div>
        </article>
        <article className="event-card">
          <div className="calendar-date"><span>NOV</span><strong>18</strong><small>2026</small></div>
          <div className="event-card-copy"><p className="resource-kicker">Virtual · Interest form open</p><h2>PapyrusAI November Professional Development Session</h2><p>An hour-long session introducing foundational AI literacy, the Human-First AI framework, and hands-on guidance for setting up and using PapyrusAI in writing instruction.</p><Link className="text-link" href="/news/papyrusai-november-professional-development-session">Event details and interest form →</Link></div>
        </article>
      </div>
    </section>
  </>;
}
