import { SiteLink as Link } from "./components/SiteLink";
import { partners, researchAreas, resources } from "./data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Improving writing education in the age of AI</p>
          <h1>Better writing starts with better questions.</h1>
          <p className="hero-deck">
            WRITE AI researches how generative AI can strengthen writing
            instruction, build AI literacy, and support—not replace—student
            thinking.
          </p>
          <div className="button-row">
            <Link className="button" href="/research">
              Explore our research <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-ghost" href="/about">
              About WRITE AI
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="Writing, educators, AI, and research connected to improve learning">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="concept concept-writing"><span>Writing</span></div>
          <div className="concept concept-ai"><span>AI</span></div>
          <div className="concept concept-educators"><span>Educators</span></div>
          <div className="concept concept-research"><span>Research</span></div>
          <div className="concept concept-learning"><span>Better<br />learning</span></div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">The proposed program at a glance</p>
          <h2>Evidence built with community colleges, not just for them.</h2>
          <p className="section-deck">WRITE AI is designed as a five-year research and capacity-building program. These figures describe the work proposed in the project narrative.</p>
        </div>
        <div className="four-grid">
          {[
            ["100", "AI tools targeted for the public landscape database"],
            ["6", "community colleges participating in early co-design"],
            ["24", "instructors contributing to iterative development"],
            ["60", "first-year composition instructors in the planned trial"],
          ].map(([number, copy]) => <article className="function-card" key={number}><span className="card-index">{number}</span><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="statement band">
        <p>The future of writing isn’t human <em>or</em> AI.</p>
        <h2>It’s learning how to use both.</h2>
      </section>

      <section className="section what-we-do">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>Research designed to move the field forward.</h2>
          </div>
          <p>
            We connect rigorous study, participatory design, researcher training,
            and national outreach to turn emerging evidence into practical guidance.
          </p>
        </div>
        <div className="four-grid">
          {[
            ["Research AI + writing", "Study how generative AI is being used in postsecondary writing education."],
            ["Develop + test PapyrusAI", "Build an AI writing environment designed around learning and student agency."],
            ["Train people", "Equip researchers and educators with methods, professional learning, and practical tools."],
            ["Share evidence", "Translate research for colleges, instructors, researchers, and policymakers."],
          ].map(([title, copy], index) => (
            <article className="function-card" key={title}>
              <span className="card-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section research-section">
        <div className="section-heading">
          <p className="eyebrow">Our research</p>
          <h2>Three connected areas. One urgent question.</h2>
          <p className="section-deck">
            How can AI support stronger writers and more effective teaching while
            protecting the human work of learning?
          </p>
        </div>
        <div className="research-list">
          {researchAreas.map((area) => (
            <Link className="research-row" href={area.href} key={area.number}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="papyrus-feature">
        <div className="papyrus-copy">
          <p className="eyebrow light">Meet PapyrusAI</p>
          <h2>AI that helps students write—not writes for them.</h2>
          <p>
            A guided environment where instructor-designed prompts help students
            plan, reflect, revise, and build the judgment to use AI responsibly.
          </p>
          <Link className="button button-light" href="/papyrus-ai">
            See how it works <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="guided-flow" aria-label="PapyrusAI learning flow">
          {[
            ["01", "Guided questions"],
            ["02", "Student thinking"],
            ["03", "AI feedback"],
            ["04", "Student revision"],
          ].map(([number, label]) => (
            <div className="flow-step" key={number}>
              <span>{number}</span><strong>{label}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section resource-preview">
        <div className="section-heading split-heading">
          <div>
          <p className="eyebrow">Planned research + resources</p>
            <h2>Evidence you can use.</h2>
          </div>
          <Link className="text-link" href="/resources">
            View all resources <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="three-grid">
          {resources.map((resource) => (
            <article className="resource-card" key={resource.title}>
              <div className="resource-meta"><span>{resource.type}</span><span>{resource.audience}</span></div>
              <h3>{resource.title}</h3>
              <p>{resource.summary}</p>
              <span className="read-more">Coming soon <span aria-hidden="true">↗</span></span>
            </article>
          ))}
        </div>
      </section>

      <section className="partners-section">
        <div>
          <p className="eyebrow">A national collaboration</p>
          <h2>Research is stronger when expertise travels.</h2>
        </div>
        <div className="partner-grid">
          {partners.map((partner) => <span key={partner}>{partner}</span>)}
        </div>
      </section>
    </>
  );
}
