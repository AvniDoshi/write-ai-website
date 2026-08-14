import type { AnchorHTMLAttributes, ReactNode } from "react";

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

/**
 * Uses native document navigation so public pages remain usable even when
 * client-side routing is unavailable.
 */
export function SiteLink({ href, children, target, rel, ...props }: SiteLinkProps) {
  const isExternal = /^https?:\/\//i.test(href);
  const externalRel = isExternal
    ? Array.from(new Set([...(rel?.split(/\s+/).filter(Boolean) ?? []), "noopener", "noreferrer"])).join(" ")
    : rel;

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : target}
      rel={externalRel}
      {...props}
    >
      {children}
    </a>
  );
}
