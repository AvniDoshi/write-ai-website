import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "Resources" };

const centerResources = [
  {
    id: "tools-database",
    label: "Public database",
    title: "Generative AI tools for writing instruction",
    description: "WRITE AI will create a publicly available, searchable database with a web-friendly interface. Practitioners, policymakers, and researchers will be able to compare the generative AI tools colleges use for writing instruction and examine how those tools are implemented.",
    details: ["Search and compare tools, features, costs, infrastructure requirements, training needs, safety, fairness, and available evidence.", "Explore findings about which colleges are—and are not—using generative AI for writing instruction, which tools they select, and how they use them.", "Review qualitative findings that highlight important use cases and examples from institutions."],
  },
  {
    id: "research-data",
    label: "Open research",
    title: "Findings and downloadable data",
    description: "Analyses from the national landscape study will be published on this website alongside findings from qualitative interviews. The full dataset collected through survey questionnaires will also be made downloadable so other researchers can conduct additional analyses.",
    details: ["Website briefs will summarize national patterns and practical implications.", "Interview findings will document institutional examples and notable use cases.", "Downloadable survey data will support independent research and further study."],
  },
  {
    id: "implementation-guide",
    label: "Implementation support",
    title: "Implementation Support Guide",
    description: "The database, survey, interview, co-design, and evaluation findings will inform an Implementation Support Guide for postsecondary institutions. The guide will identify the expertise, conditions, and resources needed to implement generative AI tools successfully and responsibly.",
    details: ["Practical guidance for implementing PapyrusAI and related tools.", "Readiness assessments for institutions, programs, and instructional teams.", "Lessons about training, infrastructure, student support, and responsible use."],
  },
  {
    id: "evaluation-framework",
    label: "Evaluation framework",
    title: "Evaluation Framework for AI in Postsecondary Instruction",
    description: "Building on earlier work by project investigators in evaluating digital learning, WRITE AI will develop a framework for studying generative AI in postsecondary instruction by spring of Year 4. It will help institutions and researchers evaluate implementation, teaching practices, learner experiences, and educational outcomes.",
    details: ["Measures for implementation quality, readiness, and instructional alignment.", "Attention to effectiveness, student learning, equity, privacy, bias, and responsible use.", "A shared structure for rigorous evaluation across tools and institutional settings."],
  },
  {
    id: "educator-certificate",
    label: "Professional development",
    title: "Certificate program for postsecondary educators",
    description: "WRITE AI will develop a professional development certificate program in Year 1 and offer it nationally through @ONE in Years 2–5. The program will prepare educators to teach writing effectively and responsibly with generative AI.",
    details: ["Understanding AI-assisted writing and selecting appropriate tools.", "Designing courses that incorporate AI and establishing guidelines for student use.", "Supporting AI literacy, ethical use, and new approaches to writing assessment."],
  },
  {
    id: "public-learning",
    label: "Public learning",
    title: "Briefs, webinars, and podcasts",
    description: "WRITE AI will share actionable research findings with educators, researchers, institutional leaders, policymakers, and the broader public through annual briefs, educational webinars, podcasts, and recordings made available for broader access.",
    details: ["Annual briefs translating Center findings into clear, usable guidance.", "Educational webinars on emerging issues in AI-supported writing and learning.", "Podcasts and recorded sessions that extend access beyond live events."],
  },
];

const resourceGroups = [
  {
    id: "guides",
    title: "PapyrusAI guides",
    description: "Navigation and implementation materials from the Digital Learning Lab’s Generative AI in Education project.",
    items: [
      ["Student Guide", "https://docs.google.com/document/d/1hVXs5RwWi8Pau1YlhwoF5Y5zO3-1hMZAyUxych7iIDo"],
      ["Instructor Guide", "https://docs.google.com/document/d/1o3He0CdgV7hJOX65gc3Gpf3_Fr3GYvSm4Q-i-Y5cNHQ/edit?usp=sharing"],
      ["Video Navigation Guide", "https://youtu.be/OUr30SLLgs8"],
      ["Want to Use PapyrusAI?", "https://docs.google.com/document/d/1R1MW_iOt30p9l00O0vhOQtfVliexG0zGeVtXJ-7Gkk8/edit?usp=sharing"],
    ],
  },
  {
    id: "professional-development",
    title: "Professional development",
    description: "Syllabus guidance and recorded educator learning sessions.",
    items: [
      ["Generative AI in the Syllabus", "https://docs.google.com/document/d/166Wr2M9D72bsiT2WdeteSnxZ1WmqgmYy8F0F0Un0QFI/edit?usp=sharing"],
      ["Teacher PD Session 1 — Spring 2025", "https://uci.zoom.us/rec/share/2GLW-YRC7NVtL-jGY-qSxk_ifCE0mvOpAA1c475gVWUZ3cP6G3FOK0753Bk1o3Zy.3yymc1pG0cgbWuIs"],
      ["Teacher PD Session 2 — Spring 2025", "https://uci.zoom.us/rec/share/ZcUPKb-EOr0bOQYooFL1S0h24xXE82LSrmXJBiLQ4SlNhIBPHiNdQeUqA-oXfmeV.nIsPt0y6FPZ9dLU2"],
      ["Custom Professional Learning", "https://www.digitallearninglab.org/custom-professional-learning.html"],
    ],
  },
  {
    id: "prompts",
    title: "Prompts and activities",
    description: "Researcher-tested materials designed to keep student thinking at the center of AI-supported work.",
    items: [
      ["Prompt Library", "https://docs.google.com/spreadsheets/d/1gmiMQDbRtYK78xuQQzOU-zPcJT_R7gasIpYBGjuvEQo/edit?usp=sharing"],
      ["Classroom Activities", "https://docs.google.com/document/d/1VWfmc68ooBfDNCvkVhQwXi8rHOz3RlHjMBzc9V196ek/edit?usp=sharing"],
      ["Think First Questions", "https://docs.google.com/document/d/1_h6ZaHrLGSpP9hpGWzs6zNjIn9bzKdJSjxWIySwtpIU/edit?usp=sharing"],
      ["Reflection Questions", "https://docs.google.com/document/d/12_kW5Lj7DF1oIjC02AoMymX95Gwgqupr7l3M-VDrDP0/edit?usp=sharing"],
    ],
  },
  {
    id: "curriculum",
    title: "Introductory AI literacy curriculum",
    description: "Short video modules introducing core concepts for thoughtful generative AI use.",
    items: [
      ["How Large Language Models Work", "https://www.youtube.com/watch?v=RHTxxO6dOgY"],
      ["LLM Limitations and Biases", "https://www.youtube.com/watch?v=C1s2lZPUiD8"],
      ["Prompt Generation", "https://www.youtube.com/watch?v=-3TU8MC_Jis"],
      ["Iterative Prompting", "https://www.youtube.com/watch?v=q5Q-okwqQfE"],
    ],
  },
  {
    id: "hubs",
    title: "Complete DLL resource hubs",
    description: "Browse the source libraries maintained by the Digital Learning Lab and its Generative AI in Education initiative.",
    items: [
      ["Higher Education Resources", "https://www.genaied.org/higher-ed-resources.html"],
      ["K–12 Resources", "https://www.genaied.org/k-12-resources.html"],
      ["Generative AI in Education", "https://www.genaied.org/"],
      ["Digital Learning Lab Projects", "https://www.digitallearninglab.org/projects.html"],
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageIntro eyebrow="Resources" title="Resources" description="WRITE AI is developing research data, practical guides, evaluation tools, and professional learning to help postsecondary institutions use generative AI effectively, responsibly, and equitably." />
      <section className="section resource-overview">
        <div className="section-heading split-heading"><div><h2>Building capacity through evidence and practical support.</h2></div><p>These planned resources will translate WRITE AI research into information and tools for educators, institutional leaders, policymakers, practitioners, and researchers.</p></div>
        <div className="three-grid resource-summary-grid">{centerResources.map((resource, index)=><Link className="resource-card" href={`#${resource.id}`} key={resource.id}><div className="resource-meta"><span>{resource.label}</span></div><span className="card-index">0{index+1}</span><h3>{resource.title}</h3><p>{resource.description}</p></Link>)}</div>
      </section>
      <section className="section institutional-section resource-details">
        {centerResources.map((resource, index)=><article className="two-column-story resource-detail" id={resource.id} key={resource.id}><div><p className="resource-kicker">0{index+1} · {resource.label}</p><h2>{resource.title}</h2></div><div className="prose"><p>{resource.description}</p><ul>{resource.details.map((detail)=><li key={detail}>{detail}</li>)}</ul></div></article>)}
      </section>
      <section className="section"><div className="section-heading"><h2>Explore published GenAI education resources.</h2><p className="section-deck">Browse additional guides, teaching materials, research, and professional-learning resources maintained by the UC Irvine Digital Learning Lab.</p></div><Link className="button button-ghost" href="https://www.genaied.org/resources.html" target="_blank" rel="noreferrer">Explore GenAI Education Resources →</Link></section>
      <section className="page-intro resource-library-intro"><h2>Published guides and teaching materials</h2><p className="page-deck">Direct links to the UC Irvine Digital Learning Lab’s published guides, professional learning, prompts, activities, and introductory AI-literacy curriculum. These resources are maintained by their original publishers.</p></section>
      <section className="section resource-library expanded-library">
        <aside><p className="eyebrow">On this page</p>{resourceGroups.map((group)=><Link href={`#${group.id}`} key={group.id}>{group.title}</Link>)}</aside>
        <div className="resource-groups">
          {resourceGroups.map((group, groupIndex)=><section id={group.id} className="resource-group" key={group.id}><p className="resource-kicker">0{groupIndex+1}</p><h2>{group.title}</h2><p>{group.description}</p><div className="resource-link-grid">{group.items.map(([label, href])=><Link href={href} className="resource-link-card" key={label}><span>{label}</span><b aria-hidden="true">↗</b></Link>)}</div></section>)}
        </div>
      </section>
    </>
  );
}
