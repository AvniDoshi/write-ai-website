import type { Metadata } from "next";
import { PageIntro } from "../components/SiteShell";
import { SiteLink as Link } from "../components/SiteLink";
import { NewsletterSignup } from "./NewsletterSignup";

export const metadata: Metadata = { title: "Stay in Touch" };

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Stay in touch"
        title="Stay in Touch"
        description="Connect with the WRITE AI Center, ask a question, or keep up with new research, resources, events, and opportunities."
      />
      <section className="section contact-columns">
        <article className="newsletter-form">
          <div className="form-heading newsletter-copy">
            <p className="eyebrow">WRITE AI Newsletter</p>
            <h2>Stay Informed</h2>
            <p>Get WRITE AI updates in your inbox.</p>
            <p>Subscribe to receive periodic updates from the Center, including new research findings, publications, resources, training opportunities, events, and other developments in generative AI and postsecondary writing.</p>
            <p>The Center emphasizes sharing actionable information with educators, researchers, institutional leaders, policymakers, and the broader public.</p>
          </div>
          <div className="form-actions">
            <NewsletterSignup />
          </div>
        </article>

        <article className="contact-email-card">
          <div className="contact-email-copy">
            <p className="eyebrow">Contact WRITE AI</p>
            <h2>Have a question or want to connect?</h2>
            <p>Email the WRITE AI team about research, PapyrusAI, training and events, partnerships, media inquiries, or general questions.</p>
          </div>
          <div className="contact-email-action">
            <a className="button contact-email-button" href="mailto:writeaicenter@gmail.com?subject=WRITE%20AI%20Inquiry">
              Email WRITE AI <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </section>
      <section className="section institutional-section" id="past-issues">
        <div className="section-heading"><p className="eyebrow">Previous newsletters</p><h2>Read Past Issues</h2><p className="section-deck">Catch up on previous WRITE AI updates, research highlights, events, and resources.</p></div>
        <div className="newsletter-issues">
          <Link className="newsletter-issue-card" href="/newsletter/fall-2026-issue-01">
            <div className="newsletter-issue-meta">
              <span>Fall 2026 · Issue 01</span>
              <time dateTime="2026-09">September 2026</time>
            </div>
            <p>In this issue: A message from Director Mark Warschauer, recent publications and preprints, PapyrusAI updates and training, and the upcoming AI in Higher Education course.</p>
            <span className="text-link">Read Issue →</span>
          </Link>
        </div>
      </section>
    </>
  );
}
