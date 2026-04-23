import type { Dict } from "@/lib/i18n";

type Section = { h: string; p: string };

type Props = {
  title: string;
  updated: string;
  sections: Section[];
};

export const LegalArticle = ({ title, updated, sections }: Props) => {
  return (
    <article
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "96px 24px 96px",
        background: "#ffffff",
        color: "#1a1a1a",
      }}
    >
      <h1
        className="font-display"
        style={{ fontSize: 64, margin: "0 0 24px", letterSpacing: 0.5 }}
      >
        {title}
      </h1>
      <p style={{ fontSize: 13, color: "#888", margin: "0 0 48px" }}>
        {updated}
      </p>
      {sections.map((s, i) => (
        <div key={i}>
          <h2 style={{ fontSize: 18, margin: "32px 0 12px", fontWeight: 800 }}>
            {s.h}
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#333" }}>{s.p}</p>
        </div>
      ))}
    </article>
  );
};

export const TermsArticle = ({ t }: { t: Dict }) => (
  <LegalArticle
    title={t.terms.title}
    updated={t.terms.updated}
    sections={t.terms.sections}
  />
);

export const PrivacyArticle = ({ t }: { t: Dict }) => (
  <LegalArticle
    title={t.privacy.title}
    updated={t.privacy.updated}
    sections={t.privacy.sections}
  />
);
