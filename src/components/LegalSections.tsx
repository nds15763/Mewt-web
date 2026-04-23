import type { Dict } from "@/lib/i18n";

type Props = {
  t: Dict;
};

export const LegalSections = ({ t }: Props) => {
  return (
    <div style={{ background: "#ffffff", color: "#1a1a1a" }}>
      <section
        id="terms"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "96px 24px 72px",
          scrollMarginTop: 32,
        }}
      >
        <h2
          className="font-display"
          style={{ fontSize: 48, margin: "0 0 24px", letterSpacing: 0.5 }}
        >
          {t.terms.title}
        </h2>
        <p style={{ fontSize: 13, color: "#888", margin: "0 0 40px" }}>
          {t.terms.updated}
        </p>

        {t.terms.sections.map((s, i) => (
          <div key={i}>
            <h3
              style={{ fontSize: 18, margin: "32px 0 12px", fontWeight: 800 }}
            >
              {s.h}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#333" }}>
              {s.p}
            </p>
          </div>
        ))}
      </section>

      <section
        id="privacy"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "72px 24px 96px",
          scrollMarginTop: 32,
          borderTop: "1px solid #eee",
        }}
      >
        <h2
          className="font-display"
          style={{ fontSize: 48, margin: "0 0 24px", letterSpacing: 0.5 }}
        >
          {t.privacy.title}
        </h2>
        <p style={{ fontSize: 13, color: "#888", margin: "0 0 40px" }}>
          {t.privacy.updated}
        </p>

        {t.privacy.sections.map((s, i) => (
          <div key={i}>
            <h3
              style={{ fontSize: 18, margin: "32px 0 12px", fontWeight: 800 }}
            >
              {s.h}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#333" }}>
              {s.p}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};
