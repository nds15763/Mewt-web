import { headers } from "next/headers";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { PrivacyArticle } from "@/components/LegalArticle";
import { DEFAULT_LOCALE, dict, isLocale, type Locale } from "@/lib/i18n";

async function resolveLocale(): Promise<Locale> {
  const h = await headers();
  const raw = h.get("x-locale");
  return isLocale(raw) ? raw : DEFAULT_LOCALE;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveLocale();
  return { title: `${dict[locale].privacy.title} — Mewt` };
}

export default async function PrivacyPage() {
  const locale = await resolveLocale();
  const t = dict[locale];

  return (
    <>
      <SiteHeader locale={locale} />
      <PrivacyArticle t={t} />
      <Footer t={t} locale={locale} />
    </>
  );
}
