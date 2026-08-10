import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "Stay in Touch" };

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Stay in touch" title="Follow the work. Join the conversation." description="Subscribe for Digital Learning Lab updates or contact the WRITE AI team about research, partnerships, events, and future opportunities." />
      <section className="section stay-in-touch-grid">
        <div className="contact-options">
          <article><p className="resource-kicker">Newsletter</p><h2>Get research updates.</h2><p>Follow the Digital Learning Lab’s Substack for new research, insights, events, and project news.</p><Link className="button" href="https://digitallearninglab.substack.com/">Subscribe on Substack →</Link></article>
          <article><p className="resource-kicker">Mailing list</p><h2>Join the DLL community.</h2><p>Join the Digital Learning Lab Google Group for announcements and opportunities.</p><Link className="button button-ghost" href="https://groups.google.com/g/digital-learning-lab">Join the mailing list →</Link></article>
          <article><p className="resource-kicker">Direct contact</p><h2>Mark Warschauer</h2><p>WRITE AI inquiries are currently directed to Mark at UC Irvine while a dedicated center inbox is being established.</p><a className="text-link" href="mailto:markw@uci.edu">markw@uci.edu →</a></article>
        </div>
        <form className="contact-form" action="mailto:markw@uci.edu" method="post" encType="text/plain">
          <div><p className="eyebrow">Contact form</p><h2>Send an inquiry.</h2><p>This form opens your email application and addresses the message to Mark.</p></div>
          <label>Name<input name="Name" type="text" autoComplete="name" required /></label>
          <label>Email<input name="Email" type="email" autoComplete="email" required /></label>
          <label>Organization<input name="Organization" type="text" autoComplete="organization" /></label>
          <label>Topic<select name="Topic" defaultValue="General inquiry"><option>General inquiry</option><option>Research collaboration</option><option>Training or event</option><option>Resource question</option><option>Grant proposal request</option></select></label>
          <label>Message<textarea name="Message" rows={7} required /></label>
          <button className="button" type="submit">Open email to send →</button>
        </form>
      </section>
    </>
  );
}
