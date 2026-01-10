import { useLenis } from "./use-lenis";

export default function AppLenis({ children }) {
  useLenis();

  return children;
}
