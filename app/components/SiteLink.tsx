import type { AnchorHTMLAttributes, ReactNode } from "react";

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

/**
 * Uses native document navigation so public pages remain usable even when
 * client-side routing is unavailable.
 */
export function SiteLink({ href, children, ...props }: SiteLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
