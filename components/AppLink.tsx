"use client";
import type { AnchorHTMLAttributes } from "react";
import { useAppLink } from "./useAppLink";
type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string; placement: string };
// Plain-anchor styling/semantics for existing cards and navigation; one shared URL builder.
export default function AppLink({ href, placement, ...props }: Props) {
 const trackedHref = useAppLink(href, placement);
 return <a {...props} href={trackedHref} />;
}
