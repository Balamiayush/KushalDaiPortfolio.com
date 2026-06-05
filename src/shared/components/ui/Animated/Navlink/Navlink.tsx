import gsap from "gsap";
import { useRef, type ReactNode } from "react";
import "./Navlink.css";

type NavlinkProps = {
  children: ReactNode;
  className?: string;
};

export default function Navlink({ children, className = "" }: NavlinkProps) {
  const underlineRef = useRef<HTMLSpanElement | null>(null);

  const handleMouseEnter = () => {
    gsap.fromTo(
      underlineRef.current,
      { x: "-101%" },
      {
        x: "0%",
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      }
    );
  };

  const handleMouseLeave = () => {
    gsap.to(underlineRef.current, {
      x: "101%",
      duration: 0.6,
      ease: "power3.out",
      overwrite: "auto",
      onComplete: () => {
        gsap.set(underlineRef.current, { x: "-101%" });
      },
    });
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`linkText relative inline-block cursor-pointer ${className}`}
    >
      {children}
      <span ref={underlineRef} className="underLine absolute left-0 bottom-0" />
    </span>
  );
}
