"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function TranslatedPostBody() {
  const { t } = useLanguage();

  const post = {
    intro: t("post.intro"),
    section1Title: t("post.section1Title"),
    section1P1: t("post.section1P1"),
    section1P2: t("post.section1P2"),
    section1P3: t("post.section1P3"),
    section2Title: t("post.section2Title"),
    section2P1: t("post.section2P1"),
    section2P2: t("post.section2P2"),
    section2P3: t("post.section2P3"),
    quote: t("post.quote"),
    quoteAuthor: t("post.quoteAuthor"),
    section3Title: t("post.section3Title"),
    section3Intro: t("post.section3Intro"),
    tableHeaders: {
      issue: t("post.tableHeaders.issue"),
      symptom: t("post.tableHeaders.symptom"),
      fix: t("post.tableHeaders.fix"),
    },
    tableRows: [
      {
        issue: t("post.tableRows.0.issue"),
        symptom: t("post.tableRows.0.symptom"),
        fix: t("post.tableRows.0.fix"),
      },
      {
        issue: t("post.tableRows.1.issue"),
        symptom: t("post.tableRows.1.symptom"),
        fix: t("post.tableRows.1.fix"),
      },
      {
        issue: t("post.tableRows.2.issue"),
        symptom: t("post.tableRows.2.symptom"),
        fix: t("post.tableRows.2.fix"),
      },
      {
        issue: t("post.tableRows.3.issue"),
        symptom: t("post.tableRows.3.symptom"),
        fix: t("post.tableRows.3.fix"),
      },
      {
        issue: t("post.tableRows.4.issue"),
        symptom: t("post.tableRows.4.symptom"),
        fix: t("post.tableRows.4.fix"),
      },
    ],
    section4Title: t("post.section4Title"),
    section4P1: t("post.section4P1"),
    section5Title: t("post.section5Title"),
    section5P1: t("post.section5P1"),
  };

  return (
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-8 text-text-secondary">{post.intro}</p>

      <h2 className="mt-10 text-3xl font-semibold text-white">{post.section1Title}</h2>
      <p className="mt-4 text-text-secondary">{post.section1P1}</p>
      <p className="mt-4 text-text-secondary">{post.section1P2}</p>
      <p className="mt-4 text-text-secondary">{post.section1P3}</p>

      <h2 className="mt-10 text-3xl font-semibold text-white">{post.section2Title}</h2>
      <p className="mt-4 text-text-secondary">{post.section2P1}</p>
      <p className="mt-4 text-text-secondary">{post.section2P2}</p>
      <p className="mt-4 text-text-secondary">{post.section2P3}</p>

      <blockquote className="mt-8 border-l-4 border-accent pl-6 italic text-text-secondary">
        “{post.quote}”
        <footer className="mt-3 text-sm text-white">— {post.quoteAuthor}</footer>
      </blockquote>

      <h2 className="mt-10 text-3xl font-semibold text-white">{post.section3Title}</h2>
      <p className="mt-4 text-text-secondary">{post.section3Intro}</p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse border border-border text-left text-sm">
          <thead>
            <tr>
              <th className="border border-border bg-bg-secondary p-3 text-white">{post.tableHeaders.issue}</th>
              <th className="border border-border bg-bg-secondary p-3 text-white">{post.tableHeaders.symptom}</th>
              <th className="border border-border bg-bg-secondary p-3 text-white">{post.tableHeaders.fix}</th>
            </tr>
          </thead>
          <tbody>
            {post.tableRows.map((row) => (
              <tr key={`${row.issue}-${row.symptom}`}>
                <td className="border border-border p-3 text-text-secondary">{row.issue}</td>
                <td className="border border-border p-3 text-text-secondary">{row.symptom}</td>
                <td className="border border-border p-3 text-text-secondary">{row.fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-3xl font-semibold text-white">{post.section4Title}</h2>
      <p className="mt-4 text-text-secondary">{post.section4P1}</p>

      <h2 className="mt-10 text-3xl font-semibold text-white">{post.section5Title}</h2>
      <p className="mt-4 text-text-secondary">{post.section5P1}</p>
    </div>
  );
}
