import type { Metadata } from "next";
import { PageIntro } from "../components/SiteShell";

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
            <p>Your email application will open with a new message.</p>
          </div>
        </article>

        <form className="newsletter-form" action="https://digitallearninglab.substack.com/subscribe" method="get" target="_blank">
          <div className="form-heading newsletter-copy">
            <p className="eyebrow">WRITE AI Newsletter</p>
            <h2>Stay Informed</h2>
            <p>Get WRITE AI updates in your inbox.</p>
            <p>Subscribe to receive periodic updates from the Center, including new research findings, publications, resources, training opportunities, events, and other developments in generative AI and postsecondary writing.</p>
            <p>The Center emphasizes sharing actionable information with educators, researchers, institutional leaders, policymakers, and the broader public.</p>
          </div>
          <div className="newsletter-fields">
            <label>Email Address<input name="email" type="email" autoComplete="email" required /></label>
            <label>Organization (optional)<input name="organization" type="text" autoComplete="organization" /></label>
            <label>First Name (optional)<input name="first_name" type="text" autoComplete="given-name" /></label>
            <label>Last Name (optional)<input name="last_name" type="text" autoComplete="family-name" /></label>
          </div>
          <div className="form-actions"><button className="button" type="submit">Subscribe to the Newsletter</button><small>You can unsubscribe at any time.</small></div>
        </form>
      </section>
      <section className="section institutional-section">
        <div className="section-heading"><p className="eyebrow">Previous newsletters</p><h2>Read Past Issues</h2><p className="section-deck">Catch up on previous WRITE AI updates, research highlights, events, and resources.</p></div>
        <div className="newsletter-empty"><h3>No issues published yet.</h3><p>Past newsletters will be added here as the Center begins publishing updates.</p></div>
      </section>
    </>
  );
}
