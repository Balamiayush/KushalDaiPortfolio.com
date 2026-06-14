import { useEffect } from "react";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import Section from "@/shared/components/layouts/Section";
import Reveal from "@/shared/components/ui/Reveal";
import Image from "@/shared/components/ui/Image";
import { crafts } from "./data/crafts";

export default function CraftsPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = "My Crafts — Kushal Dai";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div>
      <header className="pt-28 md:pt-36 lg:pt-44">
        <LayoutWrapper>
          <Reveal
            as="p"
            onMount
            className="text-[12px] uppercase tracking-[0.18em] text-accent"
          >
            Playground
          </Reveal>
          <Reveal
            as="h1"
            onMount
            delay={0.05}
            duration={0.7}
            className="mt-3 font-display text-[clamp(56px,10vw,140px)] leading-[90%] tracking-[0.01em] text-display"
          >
            My Crafts
          </Reveal>
          <Reveal
            as="p"
            onMount
            delay={0.15}
            className="mt-6 max-w-[560px] text-[16px] md:text-[18px] leading-[150%] text-muted"
          >
            Off-the-clock experiments — posters, logos, UI studies, and the
            small things I make to keep the hands sharp and the ideas flowing.
          </Reveal>
        </LayoutWrapper>
      </header>

      <Section className="!pt-10 md:!pt-14">
        <div className="columns-2 gap-4 md:columns-3 md:gap-5 lg:columns-4">
          {crafts.map((craft) => (
            <div key={craft.id} className="mb-4 break-inside-avoid md:mb-5">
              <Reveal
                as="div"
                className="group overflow-hidden rounded-[12px] md:rounded-[16px] bg-tint-cream"
              >
                <Image src={craft.src} alt={craft.alt} ratio={craft.ratio} zoom />
              </Reveal>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
