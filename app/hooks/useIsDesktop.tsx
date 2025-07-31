"use client";

import { useEffect, useState } from "react";

export const useIsDesktop = (breakpoint: number = 1025): boolean => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= breakpoint);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [breakpoint]);

  return isDesktop;
};
