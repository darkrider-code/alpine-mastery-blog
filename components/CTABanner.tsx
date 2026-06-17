export default function CTABanner() {
  return (
    <section className="rounded-2xl border border-accent/30 bg-gradient-to-br from-bg-secondary to-bg-card p-8 text-center sm:p-10">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        Tillämpa tekniken direkt
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-text-secondary">
        Ladda upp ett videoklipp och få AI-analys av just din teknik – gratis.
      </p>
      <a
        href="https://alpine.masteryhub.se"
        className="mt-6 inline-block rounded-xl bg-accent px-8 py-4 text-lg font-bold text-bg-primary transition hover:bg-accent-hover"
      >
        Analysera ditt åk gratis →
      </a>
    </section>
  );
}
