import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <PageIntro eyebrow="Our research" title="Building an evidence base for writing in the age of AI." description="A five-year program of exploratory research, participatory development, evaluation, training, and national leadership." />
      <section className="section research-overview">
        <div><p className="eyebrow">What is being done and planned</p><h2>One coordinated program, from discovery through implementation.</h2></div>
        <div className="prose"><p>WRITE AI is planned as a five-year center that first maps the AI-writing landscape, then develops PapyrusAI with community-college educators, evaluates the tool through a randomized study and implementation case studies, and turns the findings into public guidance, training, and research resources.</p><p>Responsible AI is embedded throughout the work. The studies will examine privacy, bias, fairness, academic integrity, AI literacy, and student agency alongside adoption and learning outcomes.</p><Link className="button button-ghost" href="https://www.genaied.org/higher-ed-resources.html">Explore DLL writing + AI resources →</Link></div>
      </section>
      <section className="section research-detail" id="landscape">
        <div className="detail-number">01</div><div><p className="eyebrow">AI writing landscape</p><h2>Understand what colleges are using—and why.</h2><p className="section-deck">The planned exploratory study combines provider and institutional surveys with a public review of tools used for postsecondary writing. It asks what each tool does, where it is used, what adoption requires, and what evidence exists about learning outcomes.</p><ul className="tag-list"><li>Guides + manuals</li><li>Costs</li><li>Infrastructure</li><li>Training</li><li>Safety</li><li>Bias + fairness</li><li>Outcome evidence</li></ul><p>Survey results are intended to be downloadable and updated in multiple waves beginning in the second project year.</p></div>
      </section>
      <section className="section research-detail alternate" id="papyrus">
        <div className="detail-number">02</div><div><p className="eyebrow">PapyrusAI research</p><h2>Design with educators. Test with rigor.</h2><p className="section-deck">The proposed development study begins with 24 instructors across six community colleges. A later randomized evaluation is designed to include 60 first-year composition instructors, followed by instructor case studies, cost analysis, and implementation guidance.</p><div className="timeline"><div><b>Years 1–2</b><span>Co-design + iterative development with instructors</span></div><div><b>Years 3–4</b><span>Randomized evaluation with first-year composition courses</span></div><div><b>Year 4</b><span>Instructor case studies + implementation learning</span></div><div><b>Year 5</b><span>Final resources + implementation guidance</span></div></div></div>
      </section>
      <section className="section research-detail" id="responsible-ai">
        <div className="detail-number">03</div><div><p className="eyebrow">Responsible AI</p><h2>Keep agency, fairness, and trust at the center.</h2><p className="section-deck">Ethical risk mitigation is not a side project. It is embedded throughout our research, design, evaluation, and dissemination.</p><ul className="tag-list large"><li>AI literacy</li><li>Bias + fairness</li><li>Privacy</li><li>Academic integrity</li><li>Student agency</li><li>Responsible use</li></ul></div>
      </section>
      <section className="section two-column-story">
        <div><p className="eyebrow">Related work</p><h2>A broader UCI research foundation.</h2></div>
        <div className="prose"><p>The Digital Learning Lab lists active initiatives in generative AI, conversational agents, and a California Learning Lab project on AI coaching for academic writing and digital literacy. WRITE AI is informed by this wider program of research while addressing a distinct national postsecondary-writing agenda.</p><Link className="text-link" href="https://www.digitallearninglab.org/projects.html">Explore DLL research projects →</Link></div>
      </section>
    </>
  );
}
