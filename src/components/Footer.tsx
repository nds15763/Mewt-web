import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import type { Dict, Locale } from "@/lib/i18n";

type Props = {
  t: Dict;
  locale: Locale;
};

export const Footer = ({ t, locale }: Props) => {
  return (
    <footer
      style={{
        background: "#1a1a1a",
        color: "#fff",
        padding: "72px 56px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
          paddingBottom: 48,
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/icon.png"
                alt="Mewt"
                style={{ width: "100%", height: "100%", display: "block" }}
              />
            </div>
            <span
              className="font-display"
              style={{ fontSize: 22, letterSpacing: 0.5 }}
            >
              MEWT
            </span>
          </div>
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              maxWidth: 340,
              margin: 0,
            }}
          >
            {t.footer.tagline}
          </p>
        </div>

        <FooterColumn title={t.footer.sectionsTitle.product}>
          <FooterLink href="#">{t.footer.links.translate}</FooterLink>
          <FooterLink href="#">{t.footer.links.map}</FooterLink>
          <FooterLink href="#">{t.footer.links.community}</FooterLink>
        </FooterColumn>

        <FooterColumn title={t.footer.sectionsTitle.legal}>
          <FooterLink href="#terms">{t.footer.links.terms}</FooterLink>
          <FooterLink href="#privacy">{t.footer.links.privacy}</FooterLink>
        </FooterColumn>

        <FooterColumn title={t.footer.sectionsTitle.contact}>
          <FooterLink href="mailto:hello@mewt.uk">hello@mewt.uk</FooterLink>
        </FooterColumn>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
          {t.footer.copyright}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase",
              letterSpacing: 0.8,
            }}
          >
            {t.footer.language}
          </span>
          <LocaleSwitcher current={locale} variant="dark" />
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <div
      style={{
        fontSize: 11,
        color: "rgba(255,255,255,0.5)",
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 16,
        fontWeight: 700,
      }}
    >
      {title}
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {children}
    </div>
  </div>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    style={{
      color: "rgba(255,255,255,0.85)",
      textDecoration: "none",
      fontSize: 13,
      fontWeight: 500,
    }}
  >
    {children}
  </a>
);
