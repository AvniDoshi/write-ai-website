export type NewsCategory = "Research" | "Center News" | "Publications" | "Resources" | "Events";

export type StoryPart = {
  text: string;
  href?: string;
};

export type NewsStory = {
  slug: string;
  category: NewsCategory;
  title: string;
  date: string;
  sortDate: string;
  summary: string;
  paragraphs: StoryPart[][];
  cta?: {
    label: string;
    href: string;
  };
  video?: {
    src: string;
    title: string;
    type: string;
  };
};

export const newsStories: NewsStory[] = [
  {
    slug: "papyrusai-november-professional-development-session",
    category: "Events",
    title: "PapyrusAI November Professional Development Session",
    date: "November 18, 2026",
    sortDate: "2026-11-18",
    summary: "Join the next PapyrusAI training session on November 18, 2026, from 4:00–5:00 PM Pacific Time via Zoom.",
    paragraphs: [
      [
        { text: "Join us for our next " },
        { text: "PapyrusAI training session", href: "https://www.genaied.org/papyrusai.html" },
        { text: " on November 18, 2026, from 4:00–5:00 PM Pacific Time, via Zoom. This hour-long session will introduce foundational concepts in AI literacy and explore how instructors can integrate AI into writing instruction using the Human-First AI framework (Tate et al., 2025). Participants will also get hands-on guidance for setting up and navigating PapyrusAI along with real examples of AI-infused activities developed by instructors already using the platform in their courses." },
      ],
      [
        { text: "Interested in joining? Fill out our brief interest form below, and we'll follow up in late October with registration details." },
      ],
    ],
    cta: {
      label: "Interest Form",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdJNMSThhOrj0dlTojZovFEbhj5vpO6JStov0vo0zji9_HkBg/viewform",
    },
  },
  {
    slug: "ai-in-higher-education",
    category: "Events",
    title: "AI in Higher Education Course",
    date: "September 29–December 1, 2026",
    sortDate: "2026-09-29",
    summary: "A synchronous UCI course for postsecondary instructors and instructional-support professionals focused on thoughtful, effective, and responsible uses of generative AI.",
    paragraphs: [
      [
        { text: "The UC Irvine School of Education's Digital Learning Lab is offering AI in Higher Education, a three-unit course for higher education instructors and professionals who support instruction, including instructional designers, faculty-development staff, and educational technology specialists." },
      ],
      [
        { text: "The course runs from September 29 through December 1, 2026, and meets synchronously on Zoom on Tuesdays from 4:00–5:30 PM Pacific Time. No prior coding or computer science experience is required, and the course is designed for educators across levels of technical experience." },
      ],
      [
        { text: "Participants will build a foundational understanding of generative AI, its instructional possibilities and limitations, and essential aspects of AI literacy. The course emphasizes using AI to scaffold learning rather than off-load it, while keeping educators and students at the center of the learning process." },
      ],
      [
        { text: "Through hands-on activities and collaboration, participants will evaluate AI tools and their ethical implications, design AI-enhanced learning resources for their own teaching contexts, create an AI-infused lesson, and develop a digital portfolio with practical examples and a final project. The curriculum also emphasizes accessibility, ethics, equity, and responsible classroom use." },
      ],
      [
        { text: "Tuition is $750. Three units of UCI continuing education credit are optionally available for a separate $150 transcript fee." },
      ],
    ],
    cta: {
      label: "Course Details and Registration",
      href: "https://www.digitallearninglab.org/ai-in-higher-education.html",
    },
  },
  {
    slug: "futures-summit-2026-presentation",
    category: "Events",
    title: "WRITE AI Leaders to Present at Futures Summit 2026",
    date: "September 10, 2026",
    sortDate: "2026-09-10",
    summary: "WRITE AI leaders and California Community College instructors will share practical approaches to strengthening writing and critical thinking with generative AI.",
    paragraphs: [
      [
        { text: "WRITE AI Center leaders Mark Warschauer and Tamara Tate will join California Community College instructors Stephanie Tran and Francesca Caparas to present Generative AI and the Future of Writing Instruction on September 10, 2026, at " },
        { text: "Futures Summit 2026", href: "https://californiacommunitycolleges.cventevents.com/event/FuturesSummit2026/home" },
        { text: ", an annual conference hosted by the California Community Colleges Digital Center for Innovation, Transformation and Equity." },
      ],
      [
        { text: "Drawing on classroom experience and field research, the presenters will offer guidance on using generative AI to strengthen student thinking rather than replace it. They will demonstrate how the PapyrusAI personalized writing coach supports drafting, revision, and critical thinking, and share an AI literacy assignment focused on algorithmic identities." },
      ],
      [
        { text: "Futures Summit brings together more than 1,000 leaders, educators, and innovators to explore how AI and other emerging technologies are reshaping learning, work, and opportunity. The 2026 Summit takes place September 9-10 at the Santa Clara Convention Center in California." },
      ],
    ],
    cta: {
      label: "Futures Summit 2026",
      href: "https://californiacommunitycolleges.cventevents.com/event/FuturesSummit2026/home",
    },
  },
  {
    slug: "new-scoring-interview-modules-papyrusai",
    category: "Center News",
    title: "New Scoring and Interview Modules in PapyrusAI",
    date: "September 2026",
    sortDate: "2026-09-01",
    summary: "Two new PapyrusAI modules will support rubric-aligned writing review, feedback, voice-based writing support, and oral assessment.",
    paragraphs: [
      [
        { text: "PapyrusAI, the personalized writing platform developed by the WRITE AI Center, now has two new modules to support classroom instruction." },
      ],
      [
        { text: "A new multi-agent scoring module, called Review, assigns scores and provides targeted feedback on student writing based on instructor-provided rubrics. The feature draws on cutting-edge research led by WRITE AI graduate student researcher Ali Keramati, including his " },
        { text: "recent paper", href: "https://aclanthology.org/2026.acl-srw.121/" },
        { text: " presented at the 2026 Annual Meeting of the Association for Computational Linguistics." },
      ],
      [
        { text: "A new interview module enables teachers and researchers to conduct voice-based conversations with students. It can be used to scaffold students' writing processes or support oral assessments." },
      ],
      [
        { text: "Both modules are being released in September 2026." },
      ],
    ],
    cta: {
      label: "Read the Research Paper",
      href: "https://aclanthology.org/2026.acl-srw.121/",
    },
  },
  {
    slug: "new-papers-multi-agent-scoring",
    category: "Publications",
    title: "New Papers on Multi-Agent Scoring",
    date: "August 2026",
    sortDate: "2026-08-17",
    summary: "WRITE AI graduate student researcher Ali Keramati presented three recent papers on the multi-agent debate system behind PapyrusAI's scoring mechanism.",
    paragraphs: [
      [
        { text: "WRITE AI graduate student researcher Ali Keramati presented three recent papers at the international conference of the Association for Computational Linguistics." },
      ],
      [
        { text: "All three " },
        { text: "papers", href: "https://aclanthology.org/people/ali-keramati/" },
        { text: " examine the research behind the multi-agent debate system that drives the scoring mechanism in PapyrusAI." },
      ],
    ],
    cta: {
      label: "View Ali Keramati's Papers",
      href: "https://aclanthology.org/people/ali-keramati/",
    },
  },
  {
    slug: "new-cambridge-elements-writing-academic-integrity",
    category: "Publications",
    title: "New Cambridge Elements on Writing and Academic Integrity",
    date: "2026",
    sortDate: "2026-08-14",
    summary: "Two new Cambridge Elements examine academic integrity in the age of AI and generative AI for second-language writing, feedback, assessment, and instruction.",
    paragraphs: [
      [
        { text: "The " },
        { text: "Cambridge Elements in Generative AI in Education", href: "https://www.cambridge.org/core/publications/elements/generative-ai-in-education" },
        { text: " series, edited by WRITE AI Center leaders Mark Warschauer and Tamara Tate, has published two new online monographs of interest to writing researchers and educators." },
      ],
      [
        { text: "In " },
        { text: "Academic Integrity in the Age of AI", href: "https://www.cambridge.org/core/elements/abs/academic-integrity-in-the-age-of-ai/8652D952D1C480A46996183626BE3DD7" },
        { text: ", authors Tricia Bertram Gallant, Mary Davis, and Zeenath Reza Khan offer a multilayered, balanced approach to academic integrity. The monograph addresses guidelines, policies, and procedures; the redesign of assessment; and the cultivation of ethical decision-making in the age of AI." },
      ],
      [
        { text: "In " },
        { text: "Generative AI for Second Language Writing Feedback, Assessment, and Instruction", href: "https://www.cambridge.org/core/elements/generative-ai-for-second-language-writing-feedback-assessment-and-instruction/895B73EE7CB0C563A65494B923F4E826" },
        { text: ", authors Mimi Li, Jining Han, and Gouda Taha synthesize current research and practical applications showing how generative AI can support students throughout the writing process, provide high-quality feedback, and facilitate second-language writing assessment." },
      ],
    ],
    cta: {
      label: "Explore the Cambridge Elements Series",
      href: "https://www.cambridge.org/core/publications/elements/generative-ai-in-education",
    },
  },
  {
    slug: "new-ai-writing-digital-literacy-fellows-cohort-launched",
    category: "Center News",
    title: "New AI Writing & Digital Literacy Fellows Cohort Launched",
    date: "2026",
    sortDate: "2026-08-14",
    summary: "The second annual AI Writing and Digital Literacy Fellows program brings together 54 instructors across three California public higher education partners.",
    paragraphs: [
      [
        { text: "We are excited to announce the launch of the second annual " },
        { text: "AI Writing and Digital Literacy Fellows", href: "https://www.genaied.org/ai-fellows.html" },
        { text: " program, a year-long professional development and research opportunity that brings together writing faculty from across California's public higher education system. Funded by the " },
        { text: "California Education Learning Lab", href: "https://calearninglab.org/2024/11/20/ai-grand-award-announcements/" },
        { text: ", the program is a collaborative partnership between UC Irvine (UCI), Cal State Fullerton (CSUF), and the North Orange County Community College District (NOCCCD). This year's cohort includes 54 instructors across the three partner institutions." },
      ],
      [
        { text: "Fellows participate in a Faculty Learning Community (FLC) to explore best practices for integrating generative AI into the classroom in ways that support student learning. Through the program, Fellows gain access to training, mentorship, and PapyrusAI — a generative AI-based tool designed to strengthen students' writing skills and critical AI literacy while safeguarding student privacy and preserving teacher agency." },
      ],
    ],
  },
  {
    slug: "human-first-ai-framework",
    category: "Resources",
    title: "Human-First AI Framework",
    date: "June 30, 2026",
    sortDate: "2026-06-30",
    summary: "A new framework from the UC Irvine Digital Learning Lab offers five practical habits for staying in charge of thinking, judgment, and learning while using generative AI.",
    paragraphs: [
      [
        { text: "The UC Irvine Digital Learning Lab has released the Human-First AI framework, which helps students, educators, and the public use generative AI effectively and ethically while maintaining responsibility for their own thinking, judgment, and learning." },
      ],
      [
        { text: "The framework centers on five practical habits: think first, ask and iterate, take charge, check your facts, and reflect and learn. Together, these habits provide a functional foundation for using artificial intelligence to strengthen human cognition and academic growth rather than displace them." },
      ],
      [
        { text: "Watch the video below for an introduction to the framework, or read the full " },
        { text: "Human-First AI article", href: "https://digitallearninglab.substack.com/p/human-first-ai" },
        { text: " from the UC Irvine Digital Learning Lab." },
      ],
    ],
    video: {
      src: "/media/human-first-ai.mp4",
      title: "Human-First AI framework video",
      type: "video/mp4",
    },
    cta: {
      label: "Read Human-First AI",
      href: "https://digitallearninglab.substack.com/p/human-first-ai",
    },
  },
  {
    slug: "teaching-writing-in-the-age-of-ai",
    category: "Resources",
    title: "Teaching Writing in the Age of AI",
    date: "March 9, 2026",
    sortDate: "2026-03-09",
    summary: "Tamara Tate of the WRITE AI Center and Stephanie Tran of Cypress College explore human-centered approaches to AI, composition, and academic writing in a new podcast episode.",
    paragraphs: [
      [
        { text: "Tamara Tate of the WRITE AI Center and Stephanie Tran of Cypress College collaborated on a new podcast, " },
        { text: "Teaching Writing in the Age of AI", href: "https://www.meltsintoair.org/unfixedpodcast/ep-24-teaching-writing-in-the-age-of-ai" },
        { text: ". The podcast explores what AI means for composition, academic writing, and the scale of the challenge facing writing instructors as AI models become increasingly proficient at generating polished text." },
      ],
      [
        { text: "What does “writing” mean across disciplines? And how can educators integrate AI into writing instruction without offloading the essential cognitive work that writing is meant to develop? Stephanie shares her work leading district-wide faculty development on equitable and human-centered AI practices. Tamara discusses her leadership at UC Irvine’s Digital Learning Lab and her experience developing AI-based writing tools designed to support—not replace—student skill building." },
      ],
    ],
    cta: {
      label: "Listen to the Podcast",
      href: "https://www.meltsintoair.org/unfixedpodcast/ep-24-teaching-writing-in-the-age-of-ai",
    },
  },
];

export function getNewsStory(slug: string) {
  return newsStories.find((story) => story.slug === slug);
}
