import Link from "next/link";

interface InlineCTAProps {
  product?: string;
  children: React.ReactNode;
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

export default function InlineCTA({ product, children }: InlineCTAProps) {
  const urls = getProductUrls(product);

  return (
    <Link
      href={urls.freeAnalysis}
      className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-hover underline"
    >
      👉 {children}
    </Link>
  );
}
