export type Person = { slug: string; name: string; role: string; institution: string };
export type PeopleSection = { id: string; name: string; people: Person[] };

export const peopleSections: PeopleSection[] = [
  { id: "leadership", name: "Leadership", people: [
    { slug: "mark-warschauer", name: "Mark Warschauer", role: "Principal Investigator", institution: "University of California, Irvine" },
    { slug: "di-xu", name: "Di Xu", role: "Co-Principal Investigator", institution: "University of California, Irvine" },
    { slug: "tamara-tate", name: "Tamara Tate", role: "Co-Principal Investigator", institution: "University of California, Irvine" },
    { slug: "alexander-mayer", name: "Alexander Mayer", role: "Co-Principal Investigator", institution: "MDRC" },
    { slug: "richard-hendra", name: "Richard Hendra", role: "Co-Principal Investigator", institution: "MDRC" },
    { slug: "jory-hadsell", name: "Jory Hadsell", role: "Co-Principal Investigator", institution: "Foothill-De Anza Community College District" },
    { slug: "justin-schultz", name: "Justin Schultz", role: "Co-Principal Investigator", institution: "Foothill-De Anza Community College District" },
    { slug: "hironao-okahana", name: "Hironao Okahana", role: "Co-Principal Investigator", institution: "American Council on Education" },
    { slug: "sheri-prupis", name: "Sheri Prupis", role: "Co-Principal Investigator", institution: "Virginia Community College System" },
  ] },
  { id: "research-development", name: "Research and Development Team", people: [
    { slug: "michael-hebert", name: "Michael Hebert", role: "Writing Evaluation", institution: "WRITE AI" },
    { slug: "cristina-lopes", name: "Cristina Lopes", role: "Generative AI and Software Development", institution: "University of California, Irvine" },
    { slug: "beth-harnick-shapiro", name: "Beth Harnick-Shapiro", role: "Disciplinary Writing", institution: "University of California, Irvine" },
    { slug: "penelope-collins", name: "Penelope Collins", role: "Developmental Writing", institution: "University of California, Irvine" },
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

export const partnerOrganizations = ["UC Irvine", "MDRC", "American Council on Education", "California Community Colleges / Foothill-De Anza", "Virginia Community College System", "Houston Community College"];

export function getPerson(slug: string) {
  for (const section of peopleSections) {
    const person = section.people.find((candidate) => candidate.slug === slug);
    if (person) return { ...person, section };
  }
  return undefined;
}
