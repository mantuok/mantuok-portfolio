"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const url = pathname + searchParams.toString();

    window.gtag?.("config", "G-BZ0266P94V", { page_path: url });
  }, [pathname, searchParams]);

  return null;
}
