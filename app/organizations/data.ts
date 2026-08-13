export type Organization = {
  slug: string;
  name: string;
  shortName: string;
  about: string;
  role: string;
  website: string;
};

export const organizations: Organization[] = [
  {
    slug: "uc-irvine-digital-learning-lab",
    name: "University of California, Irvine Digital Learning Lab",
    shortName: "Digital Learning Lab",
    about: "UC Irvine's activity is led by the Digital Learning Lab (DLL), a research and development laboratory within the university's School of Education. The DLL was founded by Distinguished Professor Mark Warschauer to design, develop, and evaluate digital and AI-supported tools for promoting improved student learning and development, from preschool through graduate school. The DLL is the developer of PapyrusAI, the software platform used in the project.",
    role: "The Digital Learning Lab will serve as the main hub and coordinator of the WRITE AI Center, leading all activities, especially the further development and evaluation of PapyrusAI.",
    website: "https://www.digitallearninglab.org/",
  },
];

export function getOrganization(slug: string) {
  return organizations.find((organization) => organization.slug === slug);
}
