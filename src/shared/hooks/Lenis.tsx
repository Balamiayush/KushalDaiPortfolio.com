import type { ReactNode } from "react";
import { useLenis } from "./use-lenis";

type AppLenisProps = { children: ReactNode };

export default function AppLenis({ children }: AppLenisProps) {
  useLenis();

  return children;
}
