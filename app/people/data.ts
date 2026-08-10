export type Person = {
  slug: string;
  name: string;
  role: string;
};

export type Organization = {
  id: string;
  name: string;
  description: string;
  people: Person[];
};

export const organizations: Organization[] = [
  { id: "uci", name: "UC Irvine + Digital Learning Lab", description: "Center leadership, development, evaluation, engineering, and national communications.", people: [
    { slug: "mark-warschauer", name: "Mark Warschauer", role: "Overall management + coordination" },
    { slug: "di-xu", name: "Di Xu", role: "Pilot evaluation leadership" },
    { slug: "tamara-tate", name: "Tamara Tate", role: "Development study + implementation guidance" },
    { slug: "kristi-werry", name: "Kristi Werry", role: "PapyrusAI + searchable archive engineering" },
    { slug: "sabrina-look", name: "Sabrina Look", role: "National communications" },
  ] },
  { id: "mdrc", name: "MDRC", description: "Exploratory research, evaluation expertise, research training, and evidence communication.", people: [
    { slug: "alexander-mayer", name: "Alexander Mayer", role: "Exploratory study leadership" },
    { slug: "richard-hendra", name: "Richard Hendra", role: "Research training leadership" },
  ] },
  { id: "california", name: "California Community Colleges", description: "Participatory implementation and professional learning in California community colleges.", people: [
    { slug: "jory-hadsell", name: "Jory Hadsell", role: "California community-college implementation" },
  ] },
  { id: "virginia", name: "Virginia Community College System", description: "Project operations, leadership, outreach, and implementation across Virginia.", people: [
    { slug: "justin-schultz", name: "Justin Schultz", role: "Project operations + implementation" },
  ] },
  { id: "ace", name: "American Council on Education", description: "National higher-education leadership, policy connection, and outreach.", people: [
    { slug: "hironao-okahana", name: "Hironao Okahana", role: "ACE project leadership" },
  ] },
  { id: "houston", name: "Houston Community College", description: "Community-college implementation and local coordination in Houston.", people: [
    { slug: "miguel-ramos", name: "Miguel Ramos", role: "Houston implementation" },
  ] },
];

export function getPerson(slug: string) {
  for (const organization of organizations) {
    const person = organization.people.find((candidate) => candidate.slug === slug);
    if (person) return { ...person, organization };
  }
  return undefined;
}
