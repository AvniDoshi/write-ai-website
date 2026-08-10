import type { Metadata } from "next";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "PapyrusAI" };

export default function PapyrusPage() {
  return (
    <>
      <PageIntro eyebrow="A WRITE AI research project" title="AI that helps students write—not writes for them." description="PapyrusAI is a guided environment designed to support planning, drafting, revision, reflection, and AI literacy while keeping teachers in the loop." />
      <section className="section comparison">
        <div className="comparison-card muted"><p className="eyebrow">General-purpose AI</p><h2>A shortcut to an answer.</h2><div className="linear-flow"><span>Student</span><b>→</b><span>Prompt</span><b>→</b><span>AI answer</span></div></div>
        <div className="comparison-card emphasized"><p className="eyebrow light">PapyrusAI</p><h2>A scaffold for learning.</h2><div className="vertical-flow"><span>Guided questions</span><span>Student thinking</span><span>AI feedback</span><span>Student revision</span></div></div>
      </section>
      <section className="section">
        <div className="section-heading"><p className="eyebrow">Three core pieces</p><h2>Structure changes what AI makes possible.</h2></div>
        <div className="three-grid">
          <article className="feature-card"><span>01</span><h3>Guided AI conversations</h3><p>Students move through research-informed prompts that model productive writing strategies.</p></article>
          <article className="feature-card"><span>02</span><h3>Instructor-controlled prompts</h3><p>Educators select, adapt, and sequence prompts to fit their learning objectives and courses.</p></article>
          <article className="feature-card"><span>03</span><h3>Instructional resources</h3><p>Materials make writing strategies and responsible AI practices explicit for teachers and students.</p></article>
        </div>
      </section>
      <section className="teacher-loop"><div><p className="eyebrow light">Teacher in the loop</p><h2>Technology supports the instructor’s expertise—not the other way around.</h2></div><p>Teachers maintain control over when AI is appropriate, which prompts students encounter, and how the experience connects to instruction.</p></section>
    </>
  );
}
