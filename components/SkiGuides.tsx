import BlogLink from "@/components/BlogLink";
import { skiGuides } from "@/lib/skiGuides";

export default function SkiGuides() {
  return (
    <section aria-labelledby="ski-guides-title" className="mb-12 rounded-2xl border border-border bg-bg-card p-6 sm:p-8">
      <h2 id="ski-guides-title" className="text-2xl font-bold text-white">Bättre skidteknik börjar med en tydlig fråga</h2>
      <p className="mt-3 max-w-3xl text-text-secondary">Vill du få rena carvingsvängar, förstå en skidfilm eller hjälpa ditt barn i backen? Börja med en praktisk guide för alpin skidåkning.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {skiGuides.map((guide) => (
          <BlogLink key={guide.slug} href={"/sv/" + guide.slug} className="rounded-xl border border-border p-5 transition hover:border-accent focus-visible:outline-2 focus-visible:outline-accent">
            <h3 className="font-semibold text-accent">{guide.title} →</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{guide.description}</p>
          </BlogLink>
        ))}
      </div>
    </section>
  );
}
