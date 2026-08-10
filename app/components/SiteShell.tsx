import { SiteLink as Link } from "./SiteLink";
import { ActiveNavigation } from "./ActiveNavigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <ActiveNavigation />
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
          <Link href="/contact">Stay in touch</Link>
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
