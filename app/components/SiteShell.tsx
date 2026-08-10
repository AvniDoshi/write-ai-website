import Link from "next/link";

const nav = [
  ["About", "/about"],
  ["Research", "/research"],
  ["PapyrusAI", "/papyrus-ai"],
  ["Resources", "/resources"],
  ["Training & Events", "/training-events"],
  ["News", "/news"],
  ["People", "/people"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="announcement">
        <span>National research center</span>
        <span className="announcement-copy">Writing education + generative AI</span>
      </div>
      <div className="nav-wrap">
        <Link className="wordmark" href="/" aria-label="WRITE AI home">
          <span className="wordmark-main">WRITE AI</span>
          <span className="wordmark-sub">CENTER</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="button button-small" href="/ai-tools">
          Explore AI tools <span aria-hidden="true">↗</span>
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <Link href="/ai-tools">Explore AI tools</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="eyebrow light">WRITE AI Center</p>
        <h2>Building evidence for the future of writing and AI.</h2>
        <Link className="text-link light-link" href="/about">
          Learn about the center <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="footer-grid">
        <div>
          <strong>Explore</strong>
          <Link href="/research">Research</Link>
          <Link href="/papyrus-ai">PapyrusAI</Link>
          <Link href="/ai-tools">AI Tools Database</Link>
        </div>
        <div>
          <strong>Learn</strong>
          <Link href="/resources">Resources</Link>
          <Link href="/training-events">Training & Events</Link>
          <Link href="/news">News & Insights</Link>
        </div>
        <div>
          <strong>Center</strong>
          <Link href="/about">About</Link>
          <Link href="/people">People & Partners</Link>
          <a href="mailto:writeai@uci.edu">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} WRITE AI Center</span>
        <span>Researching better writing education in the age of AI.</span>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-deck">{description}</p>
    </section>
  );
}
