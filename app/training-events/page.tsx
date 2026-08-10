import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { PageIntro } from "../components/SiteShell";

export const metadata: Metadata = { title: "Training & Events" };

const events = [
  {
    month: "SEP",
    day: "29",
    year: "2026",
    status: "Registration open",
    title: "AI in Higher Education course begins",
    description: "A synchronous UCI course for postsecondary instructors and instructional-support professionals. Meets Tuesdays, 4:00–5:30 p.m. Pacific, through December 1.",
    href: "https://www.digitallearninglab.org/ai-in-higher-education.html",
    label: "Course details",
  },
  {
    month: "MONTHLY",
    day: "—",
    year: "Planned",
    status: "Dates forthcoming",
    title: "WRITE AI research webinars",
    description: "Planned public conversations connecting emerging evidence with the practical needs of educators, researchers, and institutions.",
    href: "/contact",
    label: "Get updates",
  },
  {
    month: "YEARS",
    day: "2 + 4",
    year: "Planned",
    status: "Dates forthcoming",
    title: "National stakeholder convenings",
    description: "Two proposed gatherings for 75–100 researchers, educators, policymakers, students, developers, and institutional leaders.",
    href: "/contact",
    label: "Join the mailing list",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageIntro eyebrow="Training + events" title="Learn, connect, and build the field." description="A calendar of verified Digital Learning Lab opportunities and planned WRITE AI programs. New dates will be added as they are confirmed." />
      <section className="section events-section">
        <div className="section-heading split-heading"><div><p className="eyebrow">Calendar</p><h2>Upcoming and planned.</h2></div><p>Check back for updates. Programs described as planned are part of the proposed WRITE AI center and do not yet have confirmed dates.</p></div>
        <div className="event-calendar">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <div className="calendar-date"><span>{event.month}</span><strong>{event.day}</strong><small>{event.year}</small></div>
              <div className="event-card-copy"><p className="resource-kicker">{event.status}</p><h2>{event.title}</h2><p>{event.description}</p><Link className="text-link" href={event.href}>{event.label} →</Link></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading"><p className="eyebrow">Research Fellows Program</p><h2>Train the people who will build the next evidence base.</h2><p className="section-deck">A proposed program for researchers, educators, institutional researchers, EdTech professionals, and graduate students.</p></div>
        <div className="topic-grid">{["AI evaluation frameworks", "RCTs + A/B testing", "Engagement analytics", "Research data management", "Mixed-methods research", "Bias + ethics"].map((topic, index) => <div key={topic}><span>0{index + 1}</span><strong>{topic}</strong></div>)}</div>
      </section>
      <section className="professional-learning"><div><p className="eyebrow">Professional development</p><h2>Practical learning for educators.</h2></div><div><p>Planned outreach includes monthly webinars, annual research briefs, a quarterly podcast series with MDRC’s Evidence First, and a professional-development certificate offered through @ONE.</p><Link className="button button-light" href="https://www.digitallearninglab.org/custom-professional-learning.html">DLL professional learning →</Link></div></section>
    </>
  );
}
