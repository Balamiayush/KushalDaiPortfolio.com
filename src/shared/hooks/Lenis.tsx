import { createContext, useContext, type ReactNode, type RefObject } from "react";
import type Lenis from "lenis";
import { useLenis } from "./use-lenis";

const LenisContext = createContext<RefObject<Lenis | null> | null>(null);

/** Access the live Lenis instance ref (null under reduced motion / outside provider). */
export function useLenisRef() {
  return useContext(LenisContext);
}

type AppLenisProps = { children: ReactNode };

export default function AppLenis({ children }: AppLenisProps) {
  const lenisRef = useLenis();

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}
