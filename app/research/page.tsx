import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <PageIntro eyebrow="Our research" title="Building an evidence base for writing in the age of AI." description="A five-year program of exploratory research, participatory development, evaluation, training, and national leadership." />
      <section className="section research-detail" id="landscape">
        <div className="detail-number">01</div><div><p className="eyebrow">AI writing landscape</p><h2>Understand what colleges are using—and why.</h2><p className="section-deck">National surveys of providers and public institutions will identify tools, instructional uses, adoption conditions, and evidence about student outcomes.</p><ul className="tag-list"><li>Features</li><li>Costs</li><li>Infrastructure</li><li>Training</li><li>Safety</li><li>Bias + fairness</li><li>Evidence</li></ul><Link className="text-link" href="/ai-tools">Preview the AI tools database →</Link></div>
      </section>
      <section className="section research-detail alternate" id="papyrus">
        <div className="detail-number">02</div><div><p className="eyebrow">PapyrusAI research</p><h2>Design with educators. Test with rigor.</h2><p className="section-deck">PapyrusAI will be developed with community-college instructors and evaluated through a randomized controlled trial, implementation research, and cost analysis.</p><div className="timeline"><div><b>Years 1–2</b><span>Co-design + iterative development</span></div><div><b>Year 3</b><span>Randomized controlled trial begins</span></div><div><b>Year 4</b><span>Implementation case studies</span></div><div><b>Year 5</b><span>Final resources + guidance</span></div></div></div>
      </section>
      <section className="section research-detail" id="responsible-ai">
        <div className="detail-number">03</div><div><p className="eyebrow">Responsible AI</p><h2>Keep agency, fairness, and trust at the center.</h2><p className="section-deck">Ethical risk mitigation is not a side project. It is embedded throughout our research, design, evaluation, and dissemination.</p><ul className="tag-list large"><li>AI literacy</li><li>Bias + fairness</li><li>Privacy</li><li>Academic integrity</li><li>Student agency</li><li>Responsible use</li></ul></div>
      </section>
    </>
  );
}
