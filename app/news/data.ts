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
    title: "AI in Higher Education",
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
];

export function getNewsStory(slug: string) {
  return newsStories.find((story) => story.slug === slug);
}
