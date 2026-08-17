import type { Metadata } from "next";
import { SiteLink as Link } from "../../components/SiteLink";

const issueDescription =
  "Research, innovation, and community at the intersection of generative AI and writing.";

const publications = [
  {
    title:
      "Generative AI as a Mediational Agent: Rethinking Learning in Sociocultural Theory",
    description:
      "This preprint introduces a new conceptualization of generative AI that builds on and extends sociocultural theory. It considers the emerging role of AI in learning and offers implications for both future research and pedagogical practice.",
    href: "https://osf.io/preprints/edarxiv/wcpj5_v1",
    label: "Read the preprint",
  },
  {
    title:
      "MADRAG: Multi-Agent Debate with Retrieval-Augmented Generation for Training-Free Analytic Essay Scoring",
    description:
      "Published through the Association for Computational Linguistics, this paper presents MADRAG, a multi-agent approach to analytic essay scoring that combines debate with retrieval-augmented generation. The scoring system is being introduced into PapyrusAI, connecting current AI research with practical tools for writing and learning.",
    href: "https://aclanthology.org/2026.nlp4dh-1.30/",
    label: "Read the paper",
  },
  {
    title:
      "Incorporating Generative AI into a Writing-Intensive Undergraduate Course without Off-Loading Learning",
    description:
      "This paper reports findings from NSF-funded classroom research examining how generative AI can be incorporated into writing-intensive undergraduate instruction while preserving meaningful student learning. The research provides an important foundation for the work now being advanced through the WRITE AI Center and PapyrusAI.",
    href: "https://link.springer.com/article/10.1007/s10791-025-09563-9",
    label: "Read the paper",
  },
];

export const metadata: Metadata = {
  title: "WRITE AI Center Newsletter | Fall 2026 · Issue 01",
  description: issueDescription,
  openGraph: {
    title: "WRITE AI Center Newsletter | Fall 2026 · Issue 01",
    description: issueDescription,
    images: [
      {
        url: "/newsletters/write-ai-fall-2026-hero.png",
        width: 1024,
        height: 1024,
        alt: "WRITE AI Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WRITE AI Center Newsletter | Fall 2026 · Issue 01",
    description: issueDescription,
    images: ["/newsletters/write-ai-fall-2026-hero.png"],
  },
};

export default function Fall2026NewsletterPage() {
  return (
    <article className="newsletter-issue">
      <header className="newsletter-issue-hero">
        <div className="newsletter-hero-grid">
          <div className="newsletter-issue-heading">
            <Link className="newsletter-back-link" href="/contact#past-issues">
              ← All newsletters
            </Link>
            <p className="eyebrow">Fall 2026 · Issue 01</p>
            <h1>WRITE AI Center Newsletter</h1>
            <time dateTime="2026-09">September 2026</time>
            <p className="newsletter-issue-deck">{issueDescription}</p>
            <p className="newsletter-issue-intro">
              Welcome to the inaugural newsletter of the WRITE AI Center. Each
              issue will bring together research updates, emerging technologies,
              professional learning opportunities, and ways to engage with our
              growing community.
            </p>
          </div>
          <img
            className="newsletter-hero-art"
            src="/newsletters/write-ai-fall-2026-hero.png"
            alt="WRITE AI Center — National Center for Writing Research to Improve Teaching Effectiveness with Generative AI"
          />
        </div>
      </header>

      <section className="section newsletter-editorial-section">
        <div className="newsletter-director-layout">
          <aside className="newsletter-director-card">
            <img
              src="/people/mark-warschauer.webp"
              alt="Mark Warschauer"
              width="112"
              height="112"
            />
            <div>
              <strong>Mark Warschauer</strong>
              <span>Director, WRITE AI Center</span>
            </div>
          </aside>
          <div className="newsletter-prose">
            <div className="newsletter-section-heading">
              <p className="eyebrow">A Message from the Director</p>
              <h2>Welcome to our first issue.</h2>
            </div>
            <p>
              Generative AI is rapidly changing how people write, learn, and
              communicate. For colleges and universities, this moment brings both
              extraordinary possibilities and urgent questions. How can AI support
              students as writers without diminishing their agency? How can
              instructors use these tools effectively and responsibly? And how can
              we ensure that advances in AI expand educational opportunity rather
              than deepen existing inequities?
            </p>
            <p>
              The WRITE AI Center was created to help answer these questions. Our
              national partnership brings together researchers, educators,
              technology developers, and higher education leaders to advance
              effective, equitable, and responsible uses of generative AI in
              postsecondary writing instruction.
            </p>
            <p>
              Through research, technology development, professional learning, and
              public engagement, we aim to help students strengthen both the
              writing abilities and AI literacy they will need for school, work,
              and civic life.
            </p>
            <p>
              This newsletter will offer a window into that work. We will share
              findings from our research, introduce members of our growing
              community, highlight useful resources and upcoming events, and invite
              educators and students to contribute their experiences and
              perspectives.
            </p>
            <p>
              We are at the beginning of an ambitious journey, and collaboration
              will be essential. I hope you will follow our progress, engage with
              our work, and help us build a future in which AI supports more
              thoughtful, confident, and capable writers.
            </p>
            <p className="newsletter-signature">
              <span>Thank you for joining us.</span>
              <strong>Mark Warschauer</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="section newsletter-publications-section">
        <div className="newsletter-publications-heading">
          <div className="newsletter-section-heading">
            <p className="eyebrow">Research Spotlight</p>
            <h2>Recent Publications &amp; Preprints</h2>
          </div>
          <a
            className="newsletter-poster-link"
            href="https://docs.google.com/presentation/d/1l5712RPsqhzjn82Q3E8Z4bkEQzjdWGb8/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/newsletters/ai-writing-digital-literacy-fellows-poster.png"
              alt="AI Writing and Digital Literacy Fellows poster preview"
              loading="lazy"
            />
            <span>Open the full fellows poster ↗</span>
          </a>
        </div>
        <div className="newsletter-publication-list">
          {publications.map((publication, index) => (
            <article className="newsletter-publication" key={publication.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <div>
                <h3>{publication.title}</h3>
                <p>{publication.description}</p>
                <a href={publication.href} target="_blank" rel="noreferrer">
                  {publication.label} ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section newsletter-papyrus-section">
        <div className="newsletter-section-heading newsletter-wide-copy">
          <p className="eyebrow">Technology Spotlight</p>
          <h2>PapyrusAI</h2>
          <p>
            PapyrusAI is an AI-supported writing environment designed to explore
            how generative AI can support writing and learning while keeping
            students actively engaged in the writing process.
          </p>
          <p>
            As WRITE AI research progresses, PapyrusAI provides a platform for
            translating emerging research into practical educational technology,
            including work on AI-supported feedback and analytic essay scoring.
          </p>
        </div>
        <figure className="newsletter-papyrus-figure">
          <img
            src="/newsletters/papyrusai-student-guide-interface.jpg"
            alt="PapyrusAI conversation workspace showing an AI writing coach prompt and response field"
            loading="lazy"
          />
          <figcaption>
            The PapyrusAI conversation workspace keeps student writing and
            AI-supported feedback together. Image from the official Student Guide.
          </figcaption>
        </figure>
        <div className="newsletter-training-card">
          <div>
            <p className="eyebrow">Quarterly Training</p>
            <h3>Learn how PapyrusAI can support teaching and learning.</h3>
            <p>
              Our quarterly training sessions give educators an opportunity to
              learn more about the platform and explore classroom applications.
            </p>
          </div>
          <div className="newsletter-event-details">
            <div>
              <span>Next session</span>
              <strong>November 18, 2026</strong>
            </div>
            <div>
              <span>Time</span>
              <strong>4:00–5:00 PM PT</strong>
            </div>
            <div className="button-row">
              <a
                className="button button-primary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdJNMSThhOrj0dlTojZovFEbhj5vpO6JStov0vo0zji9_HkBg/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Register your interest
              </a>
              <a
                className="button button-secondary"
                href="https://www.genaied.org/papyrusai.html"
                target="_blank"
                rel="noreferrer"
              >
                Explore PapyrusAI
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section newsletter-course-section">
        <div className="newsletter-course-grid">
          <figure>
            <img
              src="/newsletters/dll-professional-learning-workshop.jpeg"
              alt="Three educators collaborating during a professional-learning workshop"
              loading="lazy"
            />
            <figcaption>
              Professional-learning workshops support collaborative exploration of
              AI for teaching and learning.
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow">Upcoming Learning Opportunity</p>
            <h2>AI in Higher Education</h2>
            <p>
              The UC Irvine Digital Learning Lab will offer its AI in Higher
              Education course this fall. The synchronous online course provides an
              opportunity to engage with the rapidly evolving role of artificial
              intelligence across higher education.
            </p>
            <dl className="newsletter-course-details">
              <div>
                <dt>Dates</dt>
                <dd>September 29 – December 1, 2026</dd>
              </div>
              <div>
                <dt>Time</dt>
                <dd>Tuesdays, 4:00–5:30 PM PT</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>Synchronous via Zoom</dd>
              </div>
            </dl>
            <p>
              Participants will explore AI in higher education alongside a
              community interested in understanding and shaping how these
              technologies are used in educational settings.
            </p>
            <a
              className="text-link"
              href="https://www.digitallearninglab.org/ai-in-higher-education.html"
              target="_blank"
              rel="noreferrer"
            >
              Learn more about the course ↗
            </a>
          </div>
        </div>
      </section>

      <section className="newsletter-future-section">
        <div>
          <p className="eyebrow">Our Community</p>
          <h2>Building the Future of Writing + AI</h2>
        </div>
        <div>
          <p>
            WRITE AI brings together researchers, educators, students, technology
            developers, and higher education leaders to investigate a central
            question: How can generative AI strengthen writing and learning while
            supporting human agency, equity, and meaningful educational
            experiences?
          </p>
          <p>
            Our work spans research, technology development, professional learning,
            and public engagement. As the Center grows, future newsletters will
            feature new findings, tools, resources, events, and perspectives from
            across the WRITE AI community.
          </p>
        </div>
      </section>

      <section className="section newsletter-connect-section">
        <p className="eyebrow">Stay Connected</p>
        <h2>Continue exploring with WRITE AI.</h2>
        <p>
          Follow the WRITE AI Center for new research, resources, professional
          learning opportunities, technology updates, and upcoming events.
        </p>
        <div className="button-row">
          <Link className="button button-primary" href="/">
            Explore the Center
          </Link>
          <a
            className="button button-secondary"
            href="https://www.genaied.org/papyrusai.html"
            target="_blank"
            rel="noreferrer"
          >
            Explore PapyrusAI
          </a>
        </div>
        <p className="newsletter-thanks">
          Thank you for reading the inaugural issue of the WRITE AI Center
          Newsletter.
        </p>
      </section>
    </article>
  );
}
