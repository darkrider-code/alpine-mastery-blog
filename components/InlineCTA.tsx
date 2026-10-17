"use client";
import { useAppLink } from "./useAppLink";
import Link from "next/link";

interface InlineCTAProps {
  product?: string;
  url?: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
  placement?: string;
}

function getProductUrls(product?: string) {
  if (product === "Run Mastery") {
    return {
      freeAnalysis: "https://run.masteryhub.se/free-analysis",
      createAccount: "https://run.masteryhub.se/auth",
    };
  }

  if (product === "Foil Mastery") {
    return {
      freeAnalysis: "https://foil.masteryhub.se/free-analysis",
      createAccount: "https://foil.masteryhub.se/auth",
    };
  }

  return {
    freeAnalysis: "https://alpine.masteryhub.se/free-analysis",
    createAccount: "https://alpine.masteryhub.se/auth?redirect=/membership/checkout?cycle=monthly",
  };
}

export default function InlineCTA({ product, url, text, children, className, placement = "inline" }: InlineCTAProps) {
  const urls = getProductUrls(product);
  const targetUrl = url || urls.freeAnalysis;
  const content = text || children;
  const href = useAppLink(targetUrl, placement);

  return (
    <Link
      href={href}
      className={className ?? "inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-hover underline"}
    >
      👉 {content}
    </Link>
  );
}

