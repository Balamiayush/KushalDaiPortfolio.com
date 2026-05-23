import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

type CopyProps = {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
};

export default function Copy({ children, animateOnScroll = true, delay = 0 }: CopyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementRefs = useRef<HTMLElement[]>([]);
  const splitRefs = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const runSplitAnimation = async () => {
        try {
          await document.fonts.ready;
        } catch (error) {
          console.error("Error waiting for fonts to load:", error);
        }

        const container = containerRef.current;
        if (!container) return;

        splitRefs.current = [];
        lines.current = [];
        elementRefs.current = [];

        const elements = Array.from(container.children) as HTMLElement[];

        elements.forEach((element) => {
          elementRefs.current.push(element);

          const split = SplitText.create(element, {
            type: "lines",
            mask: "lines",
            linesClass: "line++",
            lineThreshold: 0.1,
          });

          split.lines.forEach((line) => {
            const lineEl = line as HTMLElement;
            lineEl.style.overflow = "visible";
            lineEl.style.display = "block";
          });

          const computedStyle = window.getComputedStyle(element);
          const textIndent = computedStyle.textIndent;
          if (textIndent && textIndent !== "0px") {
            if (split.lines.length > 0) {
              (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
            }
            element.style.textIndent = "0";
          }

          splitRefs.current.push(split);
          lines.current.push(...(split.lines as HTMLElement[]));
        });

        gsap.set(lines.current, { y: "100%" });

        const animationProps = {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: delay,
        };

        if (animateOnScroll) {
          gsap.to(lines.current, {
            ...animationProps,
            scrollTrigger: {
              trigger: container,
              start: "top 75%",
              once: true,
            },
          });
        } else {
          gsap.to(lines.current, animationProps);
        }
      };

      runSplitAnimation();

      return () => {
        splitRefs.current.forEach((split) => {
          if (split) split.revert();
        });
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
