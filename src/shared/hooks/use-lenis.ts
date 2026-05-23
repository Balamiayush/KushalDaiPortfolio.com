import Lenis, { type LenisOptions } from "lenis";
import { useEffect, useRef } from "react";

// options is read once at mount; subsequent changes are ignored.
export function useLenis(options: LenisOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      ...options,
    });

    lenisRef.current = lenis;

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return lenisRef;
}
