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
    about: "A nonprofit, nonpartisan organization, MDRC conducts rigorous studies of programs and policies that affect people with low incomes, actively disseminates the lessons to policymakers and practitioners, and works directly with programs and agencies to help improve their effectiveness and efficiency. MDRC’s work in WRITE AI will be coordinated by its Postsecondary Education group and its Center for Data Insights.",
    role: "MDRC will lead the study of writing platforms, organize the Training and Fellows Program, carry out the cost analysis of the PapyrusAI writing intervention, serve as an external monitor on the design and evaluation of the pilot study, and organize quarterly podcasts on research on generative AI and writing.",
    website: "https://www.mdrc.org/",
  },
  {
    slug: "american-council-on-education",
    name: "American Council on Education",
    shortName: "American Council on Education",
    about: "The American Council on Education is a membership organization of more than 1,600 higher education institutions that drives transformative change. A recent area of emphasis for ACE has been to address the complex challenges and opportunities that emerging AI technology presents. ACE has launched the Global Data Consortium as a critical coordinating body for AI innovations in postsecondary teaching and learning.",
    role: "ACE will assist in survey implementation for the study of AI platforms, lead the innovation labs, and assist with national dissemination of publications, findings, and resources from the Center.",
    website: "https://www.acenet.edu/",
  },
  {
    slug: "california-community-colleges-foothill-de-anza",
    name: "California Community Colleges’ Digital Center for Innovation, Transformation and Equity",
    shortName: "California Community Colleges’ Digital Center for Innovation, Transformation and Equity",
    about: "CCC activity is led by its Digital Center for Innovation, Transformation and Equity. The Digital Center is a partnership between Foothill-De Anza Community College District and the CCC Chancellor’s Office. It integrates generative AI and digital innovations across the system’s 116 institutions to prepare the CCC’s 2.2 million students for success in an increasingly AI-driven professional landscape.",
    role: "The Digital Center will lead the annual Futures Summit, the webinars, and the professional development certificate program. It will also organize implementation and evaluation activities in three diverse community college districts across the state.",
    website: "https://cccdigitalcenter.org/",
  },
  {
    slug: "virginia-community-college-system",
    name: "Virginia Community College System",
    shortName: "Virginia Community College System",
    about: "The VCCS is a network of 23 community colleges providing affordable, accessible, and high-quality education, including associate degrees, certificates, workforce training, and transfer programs. With over 250,000 students enrolled annually, the system plays a crucial role in workforce development, economic mobility, and lifelong learning, and has been a national leader in educational reform with technology.",
    role: "VCCS will organize implementation and evaluation activities across diverse community colleges in different regions of Virginia. It will also advise on the development of training and educational resources that serve the needs of community colleges.",
    website: "https://www.vccs.edu/",
  },
  {
    slug: "houston-community-college",
    name: "Houston City College",
    shortName: "Houston City College",
    about: "Houston City College is an open-admission, public institution of higher education serving over 100,000 students across 19 campuses. It offers a high-quality, affordable education for academic advancement, workforce training, career development, and lifelong learning to prepare individuals for life and work in a global and technological society. It serves over 100,000 students in 19 campuses.",
    role: "HCC will serve as a site of the Center’s development, implementation, and evaluation activities, focusing on the role of PapyrusAI in introductory, foundational, and disciplinary writing courses.",
    website: "https://www.hccs.edu/",
  },
];

export function getOrganization(slug: string) {
  return organizations.find((organization) => organization.slug === slug);
}
