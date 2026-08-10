import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { PageIntro } from "../components/SiteShell";
import { partners } from "../data/site";

export const metadata: Metadata = { title: "About" };

const approaches = [
  ["Research Driven", "We use rigorous qualitative and quantitative research to understand what works, for whom, and under what conditions."],
  ["Human Centered", "Students and educators help shape the tools, resources, and implementation approaches we study."],
  ["Teacher in the Loop", "Generative AI is treated as a support for educator expertise, not a replacement for it."],
  ["Responsible by Design", "Our work considers privacy, bias, fairness, academic integrity, student agency, and appropriate reliance on AI."],
  ["Built for Practice", "We aim to turn findings into usable resources for colleges, instructors, researchers, and policymakers."],
];

export default function AboutPage() {
  return <>
    <PageIntro eyebrow="About WRITE AI" title="About WRITE AI" description="The National Center for Writing Research to Improve Teaching Effectiveness with Generative AI. WRITE AI is focused on building the research, tools, and capacity needed to support effective and responsible uses of generative AI in postsecondary writing instruction." />
    <section className="section two-column-story"><div><p className="eyebrow">The challenge</p><h2>Personalized support is difficult to scale.</h2></div><div className="prose"><p>Writing is a process-based skill that develops through practice, guidance, feedback, and revision.</p><p>Yet instructors often teach multiple courses with limited time and resources, making it difficult to provide every student with timely, detailed, and individualized support. These challenges can be especially significant in community colleges, where students and instructors may also have less access to traditional writing support and technology resources.</p><p>Generative AI may help expand access to personalized support, but it also creates risks related to overreliance, privacy, bias, ethics, and authenticity.</p></div></section>
    <section className="mission-panel"><p className="eyebrow light">Our mission</p><h2>Improve postsecondary writing instruction through effective, responsible, and equitable uses of generative AI.</h2><ul className="mission-list"><li>Strengthen student writing</li><li>Support instructors</li><li>Build student and educator AI literacy</li><li>Preserve student agency and learning</li><li>Address privacy, bias, fairness, and ethical concerns</li></ul><p>The Center places particular emphasis on community colleges and expanding access to personalized writing support.</p></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">Our approach</p><h2>Rigorous research designed for practice.</h2></div><div className="approach-grid">{approaches.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="section institutional-section"><div className="section-heading"><p className="eyebrow">Who we serve</p><h2>Evidence for the people shaping AI and writing.</h2></div><div className="service-grid">{[["Students","Learning to write and use AI critically."],["Educators","Making decisions about how AI fits into instruction."],["Researchers","Evaluating AI-supported teaching and learning."],["Institutional leaders","Considering AI adoption and implementation."],["Policymakers","Seeking evidence for responsible AI use in higher education."],["Technology developers","Designing educational AI tools."]].map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">Our partners</p><h2>A collaborative national effort.</h2><p className="section-deck">Organizations contribute complementary expertise in research, higher education, writing, technology, evaluation, and national leadership.</p></div><div className="partner-grid large-partners">{partners.map((partner)=><span key={partner}>{partner}</span>)}</div></section>
    <section className="funding-panel"><div><p className="eyebrow light">Funding</p><h2>$10 million grant proposal</h2></div><div><p>WRITE AI is described in a five-year, $10 million proposal covering the research agenda, activities, partnerships, evaluation, and center leadership.</p><Link className="button button-light" href="/WRITE-AI-Center-Proposal.pdf" download>View grant proposal PDF →</Link></div></section>
  </>;
}
