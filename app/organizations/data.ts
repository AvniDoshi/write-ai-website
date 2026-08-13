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
    shortName: "UC Irvine Digital Learning Lab",
    about: "UC Irvine's activity is led by the Digital Learning Lab (DLL), a research and development laboratory within the university's School of Education. The DLL was founded by Distinguished Professor Mark Warschauer to design, develop, and evaluate digital and AI-supported tools for promoting improved student learning and development, from preschool through graduate school. The DLL is the developer of PapyrusAI, the software platform used in the project.",
    role: "The Digital Learning Lab will serve as the main hub and coordinator of the WRITE AI Center, leading all activities, especially the further development and evaluation of PapyrusAI.",
    website: "https://www.digitallearninglab.org/",
  },
  {
    slug: "mdrc",
    name: "MDRC",
    shortName: "MDRC",
    about: "MDRC is a nonprofit, nonpartisan research organization founded on the principle that rigorous evidence can help reduce poverty and expand opportunity. Its interdisciplinary teams conduct studies, share findings with policymakers and practitioners, and work directly with programs and agencies to improve effectiveness across areas including postsecondary education.",
    role: "MDRC contributes expertise in rigorous research design, implementation studies, data strategy, and evaluation. Its team will help WRITE AI study how AI-supported writing approaches are implemented and whether they improve outcomes for students and institutions.",
    website: "https://www.mdrc.org/",
  },
  {
    slug: "american-council-on-education",
    name: "American Council on Education",
    shortName: "American Council on Education",
    about: "The American Council on Education (ACE) is a membership organization that represents colleges and universities across the United States. ACE convenes the higher education community, develops research and practical resources, supports institutional leaders, and helps shape public policy affecting postsecondary education.",
    role: "ACE brings national higher education leadership, policy, and communications expertise to WRITE AI. It will help the Center connect its evidence and practical guidance with institutional leaders, educators, policymakers, and the broader postsecondary community.",
    website: "https://www.acenet.edu/",
  },
  {
    slug: "california-community-colleges-foothill-de-anza",
    name: "California Community Colleges / Foothill-De Anza Community College District",
    shortName: "Foothill-De Anza Community College District",
    about: "Foothill-De Anza Community College District serves Silicon Valley through Foothill College and De Anza College. The district emphasizes student success, educational excellence, equitable access, and innovation, and serves a diverse community of learners pursuing transfer, career, and lifelong-learning goals.",
    role: "Foothill-De Anza contributes community-college leadership and direct experience with teaching, learning, and educational technology. Its instructors and students will help ground the co-design, implementation, and evaluation of PapyrusAI in authentic postsecondary writing contexts.",
    website: "https://www.fhda.edu/",
  },
  {
    slug: "virginia-community-college-system",
    name: "Virginia Community College System",
    shortName: "Virginia's Community Colleges",
    about: "Virginia's Community Colleges provide accessible education and workforce development across the Commonwealth. The system's mission is to give everyone the opportunity to learn and develop the skills that strengthen lives and communities.",
    role: "The Virginia Community College System contributes system-level expertise in teaching and learning with technology, faculty support, and digital accessibility. It will help WRITE AI develop training and implementation approaches that can work across varied community-college settings.",
    website: "https://www.vccs.edu/",
  },
  {
    slug: "houston-community-college",
    name: "Houston Community College",
    shortName: "Houston Community College",
    about: "Houston Community College is a public community college serving learners across the Houston region through academic, workforce, online, and continuing-education programs. Its flexible programs and campuses connect students with transfer pathways, credentials, and career preparation.",
    role: "Houston Community College brings the perspective of a large, diverse urban community college to WRITE AI. Its participation will help the Center understand implementation across varied programs and student populations and develop guidance that is practical for instructors and institutions.",
    website: "https://www.hccs.edu/",
  },
];

export function getOrganization(slug: string) {
  return organizations.find((organization) => organization.slug === slug);
}
