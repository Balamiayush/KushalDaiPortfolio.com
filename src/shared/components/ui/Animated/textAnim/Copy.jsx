import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins globally
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Copy({ children, animateOnScroll = true, delay = 0 }) {
  const containerRef = useRef(null);
  const elementRefs = useRef([]);
  const splitRefs = useRef([]);
  const lines = useRef([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const runSplitAnimation = async () => {
        try {
          // Wait until all fonts are loaded to prevent clipping issues
          await document.fonts.ready;
        } catch (error) {
          console.error("Error waiting for fonts to load:", error);
        }

        // Reset arrays
        splitRefs.current = [];
        lines.current = [];
        elementRefs.current = [];

        let elements = [];
        if (containerRef.current.hasAttribute("data-copy-wrapper")) {
          elements = Array.from(containerRef.current.children);
        } else {
          elements = [containerRef.current];
        }

        elements.forEach((element) => {
          elementRefs.current.push(element);

          // Split the text into lines
          const split = SplitText.create(element, {
            type: "lines",
            mask: "lines",
            linesClass: "line++",
            lineThreshold: 0.1,
          });

          // --- FIX: Make sure each line's overflow is visible to prevent cutting letters ---
          split.lines.forEach((line) => {
            line.style.overflow = "visible";
            line.style.display = "block";
          });

          // Handle text-indent style if present
          const computedStyle = window.getComputedStyle(element);
          const textIndent = computedStyle.textIndent;
          if (textIndent && textIndent !== "0px") {
            if (split.lines.length > 0) {
              split.lines[0].style.paddingLeft = textIndent;
            }
            element.style.textIndent = "0";
          }

          splitRefs.current.push(split);
          lines.current.push(...split.lines);
        });

        // Initial state: lines hidden below mask
        gsap.set(lines.current, { y: "100%" });

        const animationProps = {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: delay,
        };

        // Animate lines
        if (animateOnScroll) {
          gsap.to(lines.current, {
            ...animationProps,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              once: true,
            },
          });
        } else {
          gsap.to(lines.current, animationProps);
        }
      };

      runSplitAnimation();

      // Cleanup
      return () => {
        splitRefs.current.forEach((split) => {
          if (split) split.revert();
        });
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  // Handle single child
  if (React.Children.count(children) === 1 && !Array.isArray(children)) {
    return React.cloneElement(children, { ref: containerRef });
  }

  // Wrap multiple children
  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}