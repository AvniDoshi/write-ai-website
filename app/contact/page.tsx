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
        <form className="contact-form" action="mailto:markw@uci.edu" method="post" encType="text/plain">
          <div className="form-heading">
            <p className="eyebrow">Contact WRITE AI</p>
            <h2>Have a question or want to connect?</h2>
            <p>Use the form below to reach the WRITE AI team.</p>
          </div>
          <div className="contact-fields">
            <label>Name<input name="Name" type="text" autoComplete="name" required /></label>
            <label>Email Address<input name="Email" type="email" autoComplete="email" required /></label>
            <label>Organization (optional)<input name="Organization" type="text" autoComplete="organization" /></label>
            <label>Role or Title (optional)<input name="Role" type="text" autoComplete="organization-title" /></label>
            <label className="field-wide">What are you contacting us about?
              <select name="Topic" defaultValue="General Question">
                <option>General Question</option><option>Research</option><option>PapyrusAI</option><option>Training or Events</option><option>Partnership or Collaboration</option><option>Media Inquiry</option><option>Other</option>
              </select>
            </label>
            <label className="field-wide">Message<textarea name="Message" rows={9} required /></label>
          </div>
          <div className="form-actions"><button className="button" type="submit">Send Message</button><small>We’ll route your message to the appropriate member of the WRITE AI team.</small></div>
        </form>

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
