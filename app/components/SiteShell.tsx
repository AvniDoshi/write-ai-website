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
      <div className="footer-main">
        <div className="footer-brand"><strong>WRITE AI CENTER</strong><span>Researching better writing education in the age of AI.</span></div>
        <nav className="footer-links" aria-label="Footer navigation"><Link href="/about">About</Link><Link href="/research">Research</Link><Link href="/resources">Resources</Link><Link href="/people">People</Link><Link href="/contact">Contact</Link></nav>
      </div>
      <div className="footer-bottom">
        <p className="footer-funding">The WRITE AI Center is supported by the Institute of Education Sciences, U.S. Department of Education, through Grant R305C260035 to the Regents of the University of California. The opinions expressed do not represent views of the Institute or the U.S. Department of Education.</p>
        <span>© {new Date().getFullYear()} WRITE AI Center</span>
      </div>
    </footer>
  );
}

export function PageIntro({
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <h1>{title}</h1>
      <p className="page-deck">{description}</p>
    </section>
  );
}
