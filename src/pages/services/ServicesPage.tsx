import { useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PageHero from "@/shared/components/layouts/PageHero";
import Section from "@/shared/components/layouts/Section";
import Reveal from "@/shared/components/ui/Reveal";
import Eyebrow from "@/shared/components/ui/Eyebrow";
import Card from "@/shared/components/ui/Card";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import { ROUTES } from "@/shared/constants/routes";
import { services } from "@/pages/services/data/services";

gsap.registerPlugin(ScrollTrigger);

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

const PROCESS_STEPS = [
  {
    id: 1,
    number: "01",
    title: "Scope",
    blurb:
      "A discovery call, a written proposal, and a fixed timeline before any design begins.",
  },
  {
    id: 2,
    number: "02",
    title: "Shape",
    blurb:
      "Research, references, and the first round of directions — usually within the first week.",
  },
  {
    id: 3,
    number: "03",
    title: "Sharpen",
    blurb:
      "Two structured review rounds. You stay in the loop, never in the dark.",
  },
  {
    id: 4,
    number: "04",
    title: "Ship",
    blurb:
      "Final files, a handoff walkthrough, and 14 days of post-launch support.",
  },
];

function ServicesAccordion() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rowRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [openId, setOpenId] = useState<string | null>(services[0]?.id ?? null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const triggers: ScrollTrigger[] = [];
        rowRefs.current.forEach((el, i) => {
          const item = services[i];
          if (!el || !item) return;
          triggers.push(
            ScrollTrigger.create({
              trigger: el,
              start: "top 45%",
              end: "bottom 45%",
              onEnter: () => setOpenId(item.id),
              onEnterBack: () => setOpenId(item.id),
              invalidateOnRefresh: true,
            })
          );
        });
        return () => triggers.forEach((t) => t.kill());
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-12 md:py-15">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-12">
        <ul className="flex flex-col">
          {services.map((s, i) => {
            const isOpen = openId === s.id;
            const contentId = `service-${s.id}`;

            return (
              <li
                key={s.id}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className="border-t border-line last:border-b"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenId(s.id)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 md:py-8 lg:py-10"
                >
                  <span className="flex items-baseline gap-5 md:gap-8 lg:gap-22">
                    <span
                      className={`font-display text-[40px] leading-[96%] tracking-[0.01em] transition-colors duration-300 md:text-[56px] lg:text-7xl ${
                        isOpen ? "text-ink" : "text-muted group-hover:text-ink"
                      }`}
                    >
                      {s.index}
                      <span className="text-accent">.</span>
                    </span>
                    <span
                      className={`font-display text-[clamp(28px,5vw,52px)] leading-[100%] tracking-[0.01em] transition-colors duration-300 lg:leading-[96%] ${
                        isOpen ? "text-ink" : "text-muted group-hover:text-ink"
                      }`}
                    >
                      {s.title}
                    </span>
                  </span>

                  <m.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: SMOOTH_EASE }}
                    className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 md:size-12 ${
                      isOpen
                        ? "border-accent text-accent"
                        : "border-line text-faint group-hover:border-accent group-hover:text-accent"
                    }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </m.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={contentId}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: SMOOTH_EASE }}
                      onAnimationComplete={() => ScrollTrigger.refresh()}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-6 pb-8 md:pb-10 lg:flex-row lg:items-start lg:gap-10 lg:pb-12">
                        <div className="lg:w-1/2">
                          <p className="max-w-[440px] text-[15px] font-light leading-[150%] tracking-[0.01em] text-muted md:text-[17px] lg:text-lg lg:leading-[140%]">
                            {s.description}
                          </p>
                        </div>
                        <ul className="flex flex-col gap-3 lg:w-1/2">
                          {s.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-3 border-b border-line pb-3 text-[15px] text-ink md:text-base"
                            >
                              <span
                                aria-hidden
                                className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-accent"
                              />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function ProcessCallout() {
  return (
    <Section>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Eyebrow className="text-muted">How a project runs</Eyebrow>
          <Reveal
            as="h2"
            className="mt-3 max-w-[640px] font-display text-[clamp(32px,5vw,56px)] leading-[110%] text-ink"
          >
            Same four steps, whichever service you pick.
          </Reveal>
        </div>
        <p className="hidden max-w-[320px] text-[15px] leading-[150%] text-muted lg:block">
          Most engagements run 4-8 weeks. Retainers and social work run monthly.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:mt-15 lg:grid-cols-4 lg:gap-6">
        {PROCESS_STEPS.map((step, i) => (
          <Card
            key={step.id}
            delay={i * 0.08}
            radius="md"
            padding="none"
            className="flex min-h-[260px] flex-col items-start justify-between gap-8 p-6 lg:min-h-[300px] lg:p-6"
          >
            <span className="font-display text-[40px] leading-[96%] text-brand md:text-5xl lg:text-[56px]">
              {step.number}
            </span>
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-[28px] leading-[100%] text-ink md:text-[32px] lg:text-4xl">
                {step.title}
              </h3>
              <p className="text-[15px] leading-[150%] text-muted md:text-base">
                {step.blurb}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function ServicesCTA() {
  return (
    <Section className="!pt-0">
      <Reveal
        as="div"
        className="flex flex-col gap-8 rounded-[20px] border border-line-soft bg-surface px-6 py-12 md:rounded-3xl md:px-10 md:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-20"
      >
        <div className="flex max-w-[680px] flex-col gap-4">
          <Eyebrow className="text-muted">Start here</Eyebrow>
          <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-[100%] text-ink">
            Have a project in mind? Let&rsquo;s scope it.
          </h2>
          <p className="max-w-[520px] text-[15px] leading-[150%] text-muted md:text-[17px]">
            A 20-minute call, no pitch deck. Tell me the rough shape of what you
            need and I&rsquo;ll tell you honestly whether I&rsquo;m the right
            designer for it.
          </p>
        </div>
        <BigButton variant="purple" size="lg" to={ROUTES.CONTACT_PAGE}>
          Start a project
        </BigButton>
      </Reveal>
    </Section>
  );
}

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        tint="sage"
        eyebrow="Services"
        title={
          <>
            What I do
            <br />
            for you.
          </>
        }
        intro="Brand, product, visuals, and social — four ways I help founders and teams turn raw ideas into design that actually ships. Pick one or stitch them together; the process stays the same."
      />

      <Section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12">
          <Eyebrow className="text-muted">Offerings</Eyebrow>
          <div>
            <Reveal
              as="h2"
              className="font-display text-[clamp(32px,5vw,60px)] leading-[110%] text-ink"
            >
              Four services, one design ear listening across all of them.
            </Reveal>
            <Reveal
              as="p"
              delay={0.1}
              className="mt-6 max-w-[560px] text-[15px] leading-[150%] text-muted md:text-[17px]"
            >
              I work hands-on from research through delivery — no handoffs to a
              hidden team, no surprise scopes. Every engagement starts with a
              short discovery call to see if we&rsquo;re a fit, then a written
              proposal with timelines and deliverables before any work begins.
            </Reveal>
          </div>
        </div>
      </Section>

      <ServicesAccordion />
      <ProcessCallout />
      <ServicesCTA />
    </div>
  );
}
