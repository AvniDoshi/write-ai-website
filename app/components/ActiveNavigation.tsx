"use client";

import { useEffect, useState } from "react";
import { SiteLink as Link } from "./SiteLink";

const nav = [
  ["About", "/about"],
  ["Research", "/research"],
  ["PapyrusAI", "/papyrus-ai"],
  ["Training & Events", "/training-events"],
  ["News", "/news"],
  ["People", "/people"],
];

function matchesPath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function ActiveNavigation() {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const homeIsCurrent = pathname === "/";
  const contactIsCurrent = matchesPath(pathname, "/contact");

  return (
    <div className="nav-wrap">
      <Link className={`wordmark${homeIsCurrent ? " wordmark-current" : ""}`} href="/" aria-label="WRITE AI home" aria-current={homeIsCurrent ? "page" : undefined}>
        <img className="header-logo" src="/write-ai-logo-header.png" alt="WRITE AI Center" />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => {
          const isCurrent = matchesPath(pathname, href);
          return <Link className={isCurrent ? "nav-link-active" : undefined} key={href} href={href} aria-current={isCurrent ? "page" : undefined}>{label}</Link>;
        })}
      </nav>
      <Link className={`button button-small${contactIsCurrent ? " button-current" : ""}`} href="/contact" aria-current={contactIsCurrent ? "page" : undefined}>
        Stay in touch <span aria-hidden="true">&rarr;</span>
      </Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          {nav.map(([label, href]) => {
            const isCurrent = matchesPath(pathname, href);
            return <Link className={isCurrent ? "nav-link-active" : undefined} key={href} href={href} aria-current={isCurrent ? "page" : undefined}>{label}</Link>;
          })}
          <Link className={contactIsCurrent ? "nav-link-active" : undefined} href="/contact" aria-current={contactIsCurrent ? "page" : undefined}>Stay in touch</Link>
        </nav>
      </details>
    </div>
  );
}
