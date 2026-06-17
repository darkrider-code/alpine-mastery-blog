export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-bg-secondary py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-sm text-text-secondary sm:px-6">
        <p>© 2025 Alpine Mastery · Del av Masteryhub</p>
        <div className="flex gap-4">
          <a
            href="https://masteryhub.se"
            className="transition hover:text-accent"
          >
            masteryhub.se
          </a>
          <span aria-hidden="true">·</span>
          <a
            href="https://alpine.masteryhub.se"
            className="transition hover:text-accent"
          >
            alpine.masteryhub.se
          </a>
        </div>
      </div>
    </footer>
  );
}
