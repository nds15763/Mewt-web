"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const MAP: Record<string, string> = {
  "#terms": "/terms",
  "#privacy": "/privacy",
};

export const HashRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const go = () => {
      const target = MAP[window.location.hash];
      if (target) router.replace(target);
    };
    go();
    window.addEventListener("hashchange", go);
    return () => window.removeEventListener("hashchange", go);
  }, [router]);

  return null;
};
