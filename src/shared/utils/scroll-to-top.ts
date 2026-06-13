import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenisRef } from "@/shared/hooks/Lenis";

/** Resets scroll to the top on route change (through Lenis when it's active). */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenisRef = useLenisRef();

  useEffect(() => {
    const lenis = lenisRef?.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenisRef]);

  return null;
}
