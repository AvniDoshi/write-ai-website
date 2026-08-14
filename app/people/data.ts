export type PersonLink = { label: string; href: string };
export type Person = {
  slug: string;
  name: string;
  role: string;
  institution: string;
  title?: string;
  image?: string;
  description?: string;
  links?: PersonLink[];
};
export type PeopleSection = { id: string; name: string; people: Person[] };

export const peopleSections: PeopleSection[] = [
  { id: "leadership", name: "Leadership", people: [
    { slug: "mark-warschauer", name: "Mark Warschauer", role: "Principal Investigator", institution: "University of California, Irvine", title: "Distinguished Professor of Education and Director, Digital Learning Lab", image: "/people/mark-warschauer.webp", description: "Mark Warschauer is a Distinguished Professor of Education and Director of the Digital Learning Lab at UC Irvine, with affiliated appointments in Informatics, Language Science, and Psychology. He has written more than 300 publications on digital and AI-based learning and is among the world's most widely cited scholars in these areas. Supported by more than $30 million in federal funding, his research examines how conversational agents can support young children's learning, how AI can be integrated with computer science for K-12 students, and how the PapyrusAI platform can strengthen secondary and college students' writing and AI literacy. At UC Irvine's School of Education, Dr. Warschauer has served as Associate Dean and Interim Dean and helped launch major undergraduate, doctoral, master's, and certificate programs. He began his career as a Spanish bilingual mathematics and ESL teacher and has taught and conducted research internationally. He is a Fellow of the American Educational Research Association and a Member of the National Academy of Education.", links: [{ label: "Personal website", href: "https://markwarschauer.com/" }] },
    { slug: "di-xu", name: "Di Xu", role: "Co-Principal Investigator", institution: "University of California, Irvine", title: "Professor", image: "/people/di-xu.webp", description: "Di Xu is a professor at the University of California, Irvine and a Co-Principal Investigator for the WRITE AI Center." },
    { slug: "tamara-tate", name: "Tamara Tate, PhD", role: "Co-Principal Investigator", institution: "University of California, Irvine", title: "Project Scientist and Associate Director, Digital Learning Lab", image: "/people/tamara-tate.webp", description: "Tamara Tate, PhD, is a Project Scientist at UC Irvine and Associate Director of the Digital Learning Lab, where she leads work on generative AI, writing, and digital learning. Her research focuses on how AI and other digital tools can support writing instruction, digital literacy, and student learning across secondary and postsecondary education. As PI of multiple grants on AI-based writing, including NSF-funded work, she has led efforts to develop generative AI writing tools, curricula, and faculty resources that integrate AI into teaching and learning without offloading essential skill development. A frequent speaker on AI in education, Dr. Tate teaches AI in Education courses for master’s students and higher education instructors, helping educators critically and responsibly integrate AI into teaching and learning. She is also part of intersegmental efforts across California’s public higher education systems to advance responsible AI use in academic writing and digital literacy. Dr. Tate brings an interdisciplinary background in education, English, and law, with a PhD and BA from UC Irvine and a JD from UC Berkeley." },
    { slug: "alexander-mayer", name: "Alexander Mayer", role: "Co-Principal Investigator", institution: "MDRC" },
    { slug: "richard-hendra", name: "Richard Hendra", role: "Co-Principal Investigator", institution: "MDRC", title: "Senior Fellow and Director of Data Strategy and Innovation", image: "/people/richard-hendra.webp", description: "Richard Hendra is a Senior Fellow and Director of Data Strategy and Innovation at MDRC and a Co-Principal Investigator for the WRITE AI Center.", links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/richard-hendra-67b60a4/" }] },
    { slug: "jory-hadsell", name: "Jory Hadsell", role: "Co-Principal Investigator", institution: "Foothill-De Anza Community College District" },
    { slug: "justin-schultz", name: "Justin Schultz", role: "Co-Principal Investigator", institution: "Foothill-De Anza Community College District" },
    { slug: "hironao-okahana", name: "Hironao Okahana", role: "Co-Principal Investigator", institution: "American Council on Education" },
    { slug: "sheri-prupis", name: "Sheri L. Prupis, PhD", role: "Co-Principal Investigator", institution: "Virginia Community College System", title: "Director, Teaching & Learning with Technology / Project Director, Digital Accessibility Compliance Initiative", image: "/people/sheri-prupis.webp", description: "Sheri L. Prupis, PhD, directs Teaching & Learning with Technology and the Digital Accessibility Compliance Initiative for the Virginia Community College System. She is a Co-Principal Investigator for the WRITE AI Center.", links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/sheriprupis/" }] },
  ] },
  { id: "research-development", name: "Research and Development Team", people: [
    { slug: "michael-hebert", name: "Michael Hebert", role: "Writing Evaluation", institution: "WRITE AI" },
    { slug: "beth-harnick-shapiro", name: "Beth Harnick-Shapiro", role: "Disciplinary Writing", institution: "UC Irvine and Cal State Fullerton", title: "Lecturer", image: "/people/beth-harnick-shapiro.webp", description: "Beth Harnick-Shapiro is a lecturer at UC Irvine and Cal State Fullerton who contributes expertise in disciplinary writing to the WRITE AI Center.", links: [{ label: "Personal website", href: "https://sites.google.com/uci.edu/bhs" }, { label: "LinkedIn", href: "https://www.linkedin.com/in/beth-harnick-shapiro/" }] },
    { slug: "penelope-collins", name: "Penelope Collins", role: "Developmental Writing", institution: "University of California, Irvine", title: "Professor", description: "Penelope Collins is a professor at the University of California, Irvine who contributes expertise in developmental writing to the WRITE AI Center.", links: [{ label: "Personal website", href: "https://sites.google.com/uci.edu/penelopecollins/home" }] },
    { slug: "kristi-werry", name: "Kristi Werry", role: "Software Engineering", institution: "University of California, Irvine" },
  ] },
  { id: "writing-advisors", name: "Writing Advisors", people: [
    { slug: "charles-macarthur", name: "Charles MacArthur", role: "Writing Advisor", institution: "University of Delaware" },
    { slug: "steve-graham", name: "Steve Graham", role: "Writing Advisor", institution: "Arizona State University" },
    { slug: "anna-mills", name: "Anna Mills", role: "Writing Advisor", institution: "College of Marin / MyEssayFeedback" },
  ] },
  { id: "ai-learning-advisors", name: "AI and Learning Advisors", people: [
    { slug: "ryan-baker", name: "Ryan Baker", role: "AI and Learning Advisor", institution: "University of Pennsylvania" },
    { slug: "danielle-mcnamara", name: "Danielle McNamara", role: "AI and Learning Advisor", institution: "Arizona State University" },
  ] },
  { id: "ethics-advisors", name: "Ethics Advisors", people: [
    { slug: "renzhe-yu", name: "Renzhe Yu", role: "Ethics Advisor", institution: "Teachers College, Columbia University" },
    { slug: "fred-oswald", name: "Fred Oswald", role: "Ethics Advisor", institution: "Rice University" },
  ] },
];

export const partnerOrganizations = [
  { name: "UC Irvine Digital Learning Lab", href: "/organizations/uc-irvine-digital-learning-lab" },
  { name: "MDRC", href: "/organizations/mdrc" },
  { name: "American Council on Education", href: "/organizations/american-council-on-education" },
  { name: "California Community Colleges’ Digital Center for Innovation, Transformation and Equity", href: "/organizations/california-community-colleges-foothill-de-anza" },
  { name: "Virginia Community College System", href: "/organizations/virginia-community-college-system" },
  { name: "Houston City College", href: "/organizations/houston-community-college" },
];

export function getPerson(slug: string) {
  for (const section of peopleSections) {
    const person = section.people.find((candidate) => candidate.slug === slug);
    if (person) return { ...person, section };
  }
  return undefined;
}
