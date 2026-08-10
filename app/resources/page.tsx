import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "Resources" };

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
      <PageIntro eyebrow="DLL resource library" title="Practical resources for writing and AI." description="Direct links to the Digital Learning Lab’s published guides, professional learning, prompts, activities, and introductory AI-literacy curriculum. These resources are maintained by their original publishers." />
      <section className="section resource-library expanded-library">
        <aside><p className="eyebrow">On this page</p>{resourceGroups.map((group)=><Link href={`#${group.id}`} key={group.id}>{group.title}</Link>)}</aside>
        <div className="resource-groups">
          {resourceGroups.map((group, groupIndex)=><section id={group.id} className="resource-group" key={group.id}><p className="resource-kicker">0{groupIndex+1}</p><h2>{group.title}</h2><p>{group.description}</p><div className="resource-link-grid">{group.items.map(([label, href])=><Link href={href} className="resource-link-card" key={label}><span>{label}</span><b aria-hidden="true">↗</b></Link>)}</div></section>)}
        </div>
      </section>
    </>
  );
}
