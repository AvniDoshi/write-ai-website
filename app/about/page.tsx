import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Why WRITE AI exists"
        title="Writing still matters. How we teach it must evolve."
        description="WRITE AI brings researchers, educators, institutions, and technology specialists together to learn how generative AI can strengthen writing education without weakening student thinking."
      />
      <section className="section two-column-story">
        <div><p className="eyebrow">The challenge</p><h2>Individual feedback is essential—and difficult to scale.</h2></div>
        <div className="prose"><p>Writing develops through planning, practice, feedback, and revision. Yet instructors often lack the time and resources to give every student frequent, individualized support.</p><p>Generative AI may help close that gap, but poorly designed use can also allow students to bypass the very thinking that writing is meant to develop.</p></div>
      </section>
      <section className="mission-panel">
        <p className="eyebrow light">Our mission</p>
        <h2>Research how AI can provide personalized writing support while helping students become stronger writers and responsible, critical users of AI.</h2>
      </section>
      <section className="section">
        <div className="section-heading"><p className="eyebrow">Our approach</p><h2>Better learning sits at the intersection.</h2></div>
        <div className="formula" aria-label="Writing plus AI plus educators plus research leads to better learning">
          {[
            ["Writing", "The durable skill"], ["AI", "The emerging tool"], ["Educators", "The essential guides"], ["Research", "The evidence base"],
          ].map(([title, copy]) => <div key={title}><strong>{title}</strong><span>{copy}</span></div>)}
          <b>Better learning</b>
        </div>
      </section>
      <section className="section questions-section">
        <p className="eyebrow">Our guiding questions</p>
        <div className="question-list">
          <article><span>01</span><h3>What generative AI tools are colleges using for writing, and what matters for instructional adoption?</h3></article>
          <article><span>02</span><h3>How can a guided AI writing tool best support community-college instruction and student outcomes?</h3></article>
          <article><span>03</span><h3>How can institutions mitigate risks, biases, privacy concerns, and ethical challenges?</h3></article>
        </div>
      </section>
      <section className="section two-column-story">
        <div><p className="eyebrow">Research home</p><h2>Connected to UC Irvine’s Digital Learning Lab.</h2></div>
        <div className="prose"><p>The Digital Learning Lab studies learning from early childhood through graduate education and develops tools and resources that expand digital learning opportunities. Its current work includes responsible generative AI integration across K–12 and higher education.</p><p>WRITE AI extends that human-centered research agenda into postsecondary writing, with a particular focus on community colleges.</p><Link className="text-link" href="https://www.digitallearninglab.org/">Visit the Digital Learning Lab →</Link></div>
      </section>
    </>
  );
}
