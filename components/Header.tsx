import Link from "next/link";

function MountainIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent"
      aria-hidden="true"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 font-semibold text-white">
            <MountainIcon />
            <span>Alpine Mastery Blog</span>
          </Link>
          <a
            href="https://masteryhub.se"
            className="hidden text-sm text-text-secondary transition hover:text-accent sm:inline"
          >
            masteryhub.se
          </a>
        </div>
        <a
          href="https://alpine.masteryhub.se"
          className="rounded-lg bg-accent px-4 py-2 font-semibold text-bg-primary transition hover:bg-accent-hover"
        >
          Analysera ditt åk →
        </a>
      </div>
    </header>
  );
}
