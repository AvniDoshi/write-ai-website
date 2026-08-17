"use client";

import { FormEvent, useRef, useState } from "react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdb11d9cGwNYU04-fa6tGYMSIc97VAFuKPoLtv91PumRkrfZw/formResponse";

export function NewsletterSignup() {
  const submitted = useRef(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!event.currentTarget.checkValidity()) return;
    submitted.current = true;
    setStatus("submitting");
  }

  function handleResponse() {
    if (!submitted.current) return;
    submitted.current = false;
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="newsletter-signup-success" role="status">
        <strong>Thank you for subscribing.</strong>
        <span>Your email has been added to the WRITE AI Center newsletter list.</span>
      </div>
    );
  }

  return (
    <>
      <form
        className="newsletter-signup-form"
        action={GOOGLE_FORM_ACTION}
        method="post"
        target="newsletter-signup-response"
        onSubmit={handleSubmit}
      >
        <label htmlFor="newsletter-email">
          Email address
          <input
            id="newsletter-email"
            name="entry.812794287"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </label>
        <button className="button" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
          {status !== "submitting" && <span aria-hidden="true"> →</span>}
        </button>
      </form>
      <iframe
        className="newsletter-signup-response"
        name="newsletter-signup-response"
        title="Newsletter signup response"
        onLoad={handleResponse}
      />
      <small>Your email is stored privately by the WRITE AI Center. You can unsubscribe at any time.</small>
    </>
  );
}
