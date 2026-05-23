import type { SVGProps } from "react";

export function HamburgerMenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="14"
      fill="none"
      viewBox="0 0 20 14"
      {...props}
    >
      <path
        stroke="#F7F7F7"
        strokeLinecap="square"
        strokeWidth="2"
        d="M1 7h18M1 1h18M1 13h18"
      ></path>
    </svg>
  );
}
