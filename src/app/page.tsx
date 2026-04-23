import { headers } from "next/headers";
import { MewtHero } from "@/components/MewtHero";
import { Footer } from "@/components/Footer";
import { HashRedirect } from "@/components/HashRedirect";
import { DEFAULT_LOCALE, dict, isLocale, type Locale } from "@/lib/i18n";

export default async function Home() {
  const h = await headers();
  const raw = h.get("x-locale");
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = dict[locale];

  return (
    <>
      <HashRedirect />
      <MewtHero t={t} locale={locale} />
      <Footer t={t} locale={locale} />
    </>
  );
}
