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
