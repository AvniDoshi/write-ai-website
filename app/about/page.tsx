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

const faqGroups = [
  {
    title: "About the Center",
    items: [
      {
        question: "What is the WRITE AI Center?",
        answer: "The National Center for Writing Research to Improve Teaching Effectiveness with Generative AI — the WRITE AI Center — is a national research center studying how generative artificial intelligence can be used effectively and responsibly to strengthen writing instruction in postsecondary education. Led by the University of California, Irvine, it brings together researchers, educators, and higher education leaders to build evidence on how AI can expand access to high-quality, personalized writing instruction while helping students develop their own writing ability and AI literacy.",
      },
      {
        question: "Who funds the Center, and for how long?",
        answer: "The Center is supported by a five-year, $10 million grant from the Institute of Education Sciences (IES) at the U.S. Department of Education, awarded to the Regents of the University of California through Grant R305C260035. Its program of work runs from September 1, 2026 through August 31, 2031.",
      },
      {
        question: "Who leads the Center, and who are the partners?",
        answer: "The Center is directed by Mark Warschauer, Distinguished Professor of Education at UC Irvine, with Tamara Tate and Di Xu as co-principal investigators. UC Irvine leads a national partnership that includes MDRC, the American Council on Education, the California Community Colleges’ Digital Center for Innovation, Transformation and Equity — working with three participating California community colleges — the Virginia Community College System, and Houston City College. Together the partners bring expertise in writing research, educational technology, program evaluation, higher education policy, and community college instruction.",
      },
      {
        question: "What are the Center’s main areas of work?",
        answer: "The Center pursues three interconnected strands:",
        bullets: [
          "Documenting how generative AI is currently used to teach writing across colleges and universities, including a publicly accessible resource describing widely used tools and their instructional features.",
          "Further developing and rigorously evaluating PapyrusAI, a UC Irvine–created platform that gives students structured, personalized help as they plan and revise their writing.",
          "Building national research and educational capacity through fellowships, training, convenings, and practical resources that address the effectiveness, scalability, privacy, bias, and ethics of AI-supported instruction.",
        ],
      },
    ],
  },
  {
    title: "About PapyrusAI",
    items: [
      {
        question: "What is PapyrusAI?",
        answer: "PapyrusAI is a writing-support platform designed specifically for teaching and learning, rather than for generating text. It engages students in guided, back-and-forth interaction as they plan, draft, and revise their own writing, and it gives instructors the ability to select, adapt, or create the prompts and activities their students use. It was developed at UC Irvine with prior support from the National Science Foundation and others, and has been piloted in composition, writing-across-the-curriculum, ESL, and English courses.",
      },
      {
        question: "How is PapyrusAI different from ChatGPT or other AI chatbots?",
        answer: "Unlike general-purpose chatbots, PapyrusAI is built around research-based writing instruction. It supports both planning and revision — not only feedback — and uses embedded prompts that direct the AI to guide students rather than write for them. It operates as a bounded environment in which students interact with a large language model without needing their own account with the model provider, and instructors can see and shape how the tool is used in their courses.",
      },
      {
        question: "Does PapyrusAI write students’ essays for them? How does the Center address academic integrity?",
        answer: "PapyrusAI is designed to support students as they develop ideas, plan, and revise their own writing—not to produce completed assignments for them. Its guided activities keep students actively engaged in making decisions about their work, while instructors determine which activities are available and can review students’ interactions with the tool. This combination of structured support and instructor oversight is intended to strengthen student authorship while promoting responsible use of AI.",
      },
      {
        question: "What role do instructors play?",
        answer: "Instructors are central. They choose and customize the activities and prompts their students encounter, aligning the tool with their course goals, and they receive professional development and instructional resources so they do not need to become AI experts themselves. The Center describes this as a “teacher-in-the-loop” design intended to amplify instructors’ pedagogical and contextual knowledge, not to replace it.",
      },
    ],
  },
  {
    title: "Research and evidence",
    items: [
      {
        question: "What will the Center’s research investigate?",
        answer: "The research examines whether this approach improves students’ writing quality, AI literacy, confidence, and persistence in college, along with its effects on instructors. The work proceeds from an exploratory study of current AI use, through iterative development of PapyrusAI, to a randomized pilot study testing its effects.",
      },
      {
        question: "How is the research kept rigorous and independent?",
        answer: "MDRC serves as an independent evaluator and is kept separate from tool development. MDRC oversees random assignment, reviews and approves the analytic plan before outcome data are examined, independently verifies the primary impact estimates, and conducts the cost analysis. Findings will be reported regardless of their direction or statistical significance.",
      },
      {
        question: "Is there already evidence that PapyrusAI works?",
        answer: "Prior piloting demonstrates that the platform can be implemented in authentic postsecondary courses, and a year-long design-based study has been published in a peer-reviewed journal. The Center is careful to distinguish feasibility from effectiveness: successful implementation shows the tool can be used well, but the randomized pilot is what will test whether it produces meaningful improvements in student outcomes.",
      },
    ],
  },
  {
    title: "Students, equity, and ethics",
    items: [
      {
        question: "Why does the Center focus on community colleges?",
        answer: "Community colleges serve millions of students, including disproportionate numbers of first-generation students, working adults, and learners from low-income backgrounds, yet they often have limited resources for individualized writing support. They are therefore both where the need is greatest and where scalable, personalized writing instruction could make the largest difference.",
      },
      {
        question: "How is student data protected?",
        answer: "PapyrusAI provides a bounded environment in which students do not create individual accounts with the underlying model provider, and their interactions are not shared with that provider for training its models. The Center’s research follows human-subjects review and applicable privacy requirements, including FERPA, and training for the field includes data management and privacy compliance.",
      },
      {
        question: "How does the Center address bias, equity, and ethics?",
        answer: "These concerns are built into the work rather than treated separately. The Center’s design principles emphasize responsible use and appropriate trust in AI, its research examines possible negative pathways such as biased feedback or unequal access, and its national training program includes a dedicated module on ethical considerations and bias mitigation. The Center will also produce an evaluation framework and guidance to help institutions make evidence-based decisions about adopting AI tools.",
      },
      {
        question: "Is instructor and student participation voluntary?",
        answer: "Yes. Participation in the Center’s research takes place under human-subjects protections and informed-consent procedures reviewed by the relevant institutional review board.",
      },
    ],
  },
  {
    title: "Getting involved and staying informed",
    items: [
      {
        question: "What will the Center produce and share?",
        answer: "The Center will publish open-access research and plain-language research briefs, maintain a public website and searchable database of AI writing tools, host an annual Futures Summit and other stakeholder convenings, produce podcasts, and train a national cohort of fellows in the rigorous evaluation of AI in education. It will also develop instructional resources and policy recommendations to support the effective and responsible use of AI in writing instruction.",
      },
      {
        question: "How can colleges, instructors, or students take part in Center activities?",
        answer: "Information about public resources, events, training, research participation, and other opportunities will be posted on the Center website. Colleges, instructors, students, and others interested in the Center’s work can also subscribe to its newsletter for regular updates.",
      },
    ],
  },
];

export default function AboutPage() {
  return <>
    <PageIntro eyebrow="About WRITE AI" title="About WRITE AI" description="The National Center for Writing Research to Improve Teaching Effectiveness with Generative AI. WRITE AI is focused on building the research, tools, and capacity needed to support effective and responsible uses of generative AI in postsecondary writing instruction." />
    <section className="section two-column-story"><div><p className="eyebrow">The challenge</p><h2>Personalized support is difficult to scale.</h2></div><div className="prose"><p>Writing is a process-based skill that develops through practice, guidance, feedback, and revision.</p><p>Yet instructors often teach multiple courses with limited time and resources, making it difficult to provide every student with timely, detailed, and individualized support. These challenges can be especially significant in community colleges, where students and instructors may also have less access to traditional writing support and technology resources.</p><p>Generative AI may help expand access to personalized support, but it also creates risks related to overreliance, privacy, bias, ethics, and authenticity.</p></div></section>
    <section className="mission-panel"><p className="eyebrow light">Our mission</p><h2>Improve postsecondary writing instruction through effective, responsible, and equitable uses of generative AI.</h2><ul className="mission-list"><li>Strengthen student writing</li><li>Support instructors</li><li>Build student and educator AI literacy</li><li>Preserve student agency and learning</li><li>Address privacy, bias, fairness, and ethical concerns</li></ul><p>The Center places particular emphasis on community colleges and expanding access to personalized writing support.</p></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">Our approach</p><h2>Rigorous research designed for practice.</h2></div><div className="approach-grid">{approaches.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="section institutional-section"><div className="section-heading"><p className="eyebrow">Who we serve</p><h2>Evidence for the people shaping AI and writing.</h2></div><div className="service-grid">{[["Students","Learning to write and use AI critically."],["Educators","Making decisions about how AI fits into instruction."],["Researchers","Evaluating AI-supported teaching and learning."],["Institutional leaders","Considering AI adoption and implementation."],["Policymakers","Seeking evidence for responsible AI use in higher education."],["Technology developers","Designing educational AI tools."]].map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="section"><div className="section-heading"><p className="eyebrow">Our partners</p><h2>A collaborative national effort.</h2><p className="section-deck">Organizations contribute complementary expertise in research, higher education, writing, technology, evaluation, and national leadership.</p></div><div className="partner-grid large-partners">{partners.map((partner)=><Link className="partner-link" href={partner.href} key={partner.name}>{partner.name}</Link>)}</div></section>
    <section className="section faq-section" id="faq">
      <div className="section-heading"><p className="eyebrow">What to know</p><h2>Frequently asked questions</h2><p className="section-deck">Learn about the WRITE AI Center, PapyrusAI, our research, and ways to get involved.</p></div>
      <div className="faq-groups">{faqGroups.map((group, groupIndex) => <section className="faq-group" aria-labelledby={`faq-group-${groupIndex}`} key={group.title}>
        <h3 id={`faq-group-${groupIndex}`}>{group.title}</h3>
        <div className="faq-list">{group.items.map((item) => <details key={item.question}>
          <summary>{item.question}</summary>
          <div className="faq-answer"><p>{item.answer}</p>{item.bullets ? <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}</div>
        </details>)}</div>
      </section>)}</div>
      <p className="faq-disclosure">The WRITE AI Center is supported by the Institute of Education Sciences, U.S. Department of Education, through Grant R305C260035 to the Regents of the University of California. The opinions expressed are those of the authors and do not represent views of the Institute or the U.S. Department of Education.</p>
    </section>
    <section className="funding-panel"><div><p className="eyebrow light">Funding</p><h2>$10 million grant proposal</h2></div><div><p>WRITE AI is described in a five-year, $10 million proposal covering the research agenda, activities, partnerships, evaluation, and center leadership.</p><Link className="button button-light" href="/WRITE-AI-Center-Proposal.pdf" download>View grant proposal PDF →</Link></div></section>
  </>;
}
