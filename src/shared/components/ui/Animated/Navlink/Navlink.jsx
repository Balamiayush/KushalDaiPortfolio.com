import gsap from "gsap";
import React, { useRef } from "react";
import "./Navlink.css";

export default function Navlink({ children, className = "" }) {
  const underlineRef = useRef(null);

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
