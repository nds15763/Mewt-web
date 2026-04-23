import { NextRequest, NextResponse } from "next/server";
import {
  isLocale,
  resolveLocaleFromCountry,
  resolveLocaleFromAcceptLanguage,
  type Locale,
} from "@/lib/i18n";

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("locale")?.value;
  let locale: Locale;
  let fromCookie = false;

  if (isLocale(cookie)) {
    locale = cookie;
    fromCookie = true;
  } else {
    const country = req.headers.get("x-vercel-ip-country");
    if (country) {
      locale = resolveLocaleFromCountry(country);
    } else {
      locale = resolveLocaleFromAcceptLanguage(
        req.headers.get("accept-language"),
      );
    }
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-locale", locale);

  const res = NextResponse.next({ request: { headers: requestHeaders } });

  if (!fromCookie) {
    res.cookies.set("locale", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next|favicon|assets|.*\\.).*)"],
};
