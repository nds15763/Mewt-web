import Link from "next/link";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import type { Dict, Locale } from "@/lib/i18n";

type Props = {
  t: Dict;
  locale: Locale;
};

export const SiteHeader = ({ t, locale }: Props) => {
  return (
    <header
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #eee",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 56px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "#1a1a1a",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
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
        </Link>

        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 13,
            fontWeight: 600,
            color: "#555",
          }}
        >
          <Link
            href="/terms"
            style={{ color: "#555", textDecoration: "none" }}
          >
            {t.nav.terms}
          </Link>
          <Link
            href="/privacy"
            style={{ color: "#555", textDecoration: "none" }}
          >
            {t.nav.privacy}
          </Link>
          <a
            href="mailto:hello@mewt.uk"
            style={{ color: "#555", textDecoration: "none" }}
          >
            {t.nav.contact}
          </a>
        </div>

        <LocaleSwitcher current={locale} variant="light" />
      </nav>
    </header>
  );
};
