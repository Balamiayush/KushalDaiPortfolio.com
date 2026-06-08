import { useEffect, useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import Copy from "@/shared/components/ui/Animated/textAnim/Copy";
import { ROUTES } from "@/shared/constants/routes";

gsap.registerPlugin(ScrollTrigger);

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

type ServiceItem = {
  id: number;
  index: string;
  title: string;
  blurb: string;
  deliverables: string[];
  bestFor: string;
};

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    index: "01",
    title: "Brand Design",
    blurb:
      "Identity systems that hold up beyond the logo — built so your team can use them without me in the room.",
    deliverables: [
      "Logo system + wordmark",
      "Type, color, and grid tokens",
      "Brand guidelines (PDF + Figma)",
      "Stationery and launch assets",
      "Founder onboarding session",
    ],
    bestFor: "Early-stage founders and rebrands.",
  },
  {
    id: 2,
    index: "02",
    title: "Product Design",
    blurb:
      "End-to-end UX and UI for web and mobile products — from messy first sketch to a shippable Figma file your developers will thank you for.",
    deliverables: [
      "Discovery + user flows",
      "Wireframes and prototypes",
      "High-fidelity UI in Figma",
      "Component library + tokens",
      "Dev handoff and review",
    ],
    bestFor: "Seed to Series A SaaS and apps.",
  },
  {
    id: 3,
    index: "03",
    title: "Visuals & Web Design",
    blurb:
      "Landing pages, campaign visuals, and content systems that translate the brand into the places people actually see it.",
    deliverables: [
      "Landing page design",
      "Marketing site (up to 6 pages)",
      "Pitch decks and one-pagers",
      "Illustration and motion direction",
      "Webflow / dev-ready specs",
    ],
    bestFor: "Launches, fundraises, and refreshes.",
  },
  {
    id: 4,
    index: "04",
    title: "Social Media Management",
    blurb:
      "A small, considered social presence — templates, monthly content, and a voice that sounds like you instead of a marketing bot.",
    deliverables: [
      "Quarterly content strategy",
      "Template kit (12-16 layouts)",
      "Monthly post design (12 pcs)",
      "Caption + hashtag direction",
      "Performance review each month",
    ],
    bestFor:
      "Founders who want to show up without the full agency overhead.",
  },
];

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

function ServicesHero() {
  return (
    <div className="relative mx-auto w-full p-3 md:p-[24px]">
      <section className="relative flex min-h-[560px] flex-col justify-end overflow-hidden rounded-[20px] bg-[#DCE9D7] p-5 pt-24 md:min-h-[640px] md:rounded-[24px] md:p-8 md:pt-32 lg:min-h-[700px] lg:p-10 lg:pt-[140px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="flex flex-col gap-3 lg:gap-2">
            <Copy animateOnScroll={false}>
              <p className="text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-[#3B5C2E]">
                Services
              </p>
            </Copy>
            <Copy animateOnScroll={false} delay={0.05}>
              <h1 className="-ml-0.5 font-[SansPlomb] text-[clamp(56px,12vw,180px)] leading-[84%] text-[#3B5C2E] lg:-ml-3.5 lg:leading-[80%]">
                What I do
                <br />
                for you.
              </h1>
            </Copy>
          </div>

          <Copy animateOnScroll={false} delay={0.15}>
            <p className="max-w-full text-[14px] leading-[140%] text-[#1E1E1E] md:text-[16px] lg:max-w-[420px] lg:text-[18px] lg:leading-[120%] xl:max-w-[480px]">
              Brand, product, visuals, and social — four ways I help founders
              and teams turn raw ideas into design that actually ships. Pick one
              or stitch them together; the process stays the same.
            </p>
          </Copy>
        </div>
      </section>
    </div>
  );
}

function ServicesIntro() {
  return (
    <section className="py-12 md:py-16 lg:py-[120px]">
      <LayoutWrapper>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12"
        >
          <div className="self-start">
            <p className="text-[12px] uppercase tracking-[0.18em] text-[#5F5C6D] md:text-[13px]">
              Offerings
            </p>
          </div>
          <div>
            <h2 className="font-[SansPlomb] text-[clamp(32px,5vw,60px)] leading-[100%] text-[#1E1E1E]">
              Four services, one design ear listening across all of them.
            </h2>
            <p className="mt-6 max-w-[560px] text-[15px] leading-[150%] text-[#5F5C6D] md:text-[17px]">
              I work hands-on from research through delivery — no handoffs to a
              hidden team, no surprise scopes. Every engagement starts with a
              short discovery call to see if we&rsquo;re a fit, then a written
              proposal with timelines and deliverables before any work begins.
            </p>
          </div>
        </m.div>
      </LayoutWrapper>
    </section>
  );
}

function ServicesAccordion() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rowRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [openId, setOpenId] = useState<number | null>(
    SERVICES[0]?.id ?? null
  );

  useGSAP(
    () => {
      const triggers: ScrollTrigger[] = [];
      rowRefs.current.forEach((el, i) => {
        const item = SERVICES[i];
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
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 520);
    return () => window.clearTimeout(id);
  }, [openId]);

  return (
    <section ref={sectionRef} className="py-12 md:py-[60px]">
      <LayoutWrapper>
        <ul className="flex flex-col">
          {SERVICES.map((s, i) => {
            const isOpen = openId === s.id;
            const contentId = `service-${s.id}`;

            return (
              <li
                key={s.id}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className="border-t border-[#D9D9DE] last:border-b"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() =>
                    setOpenId((prev) => (prev === s.id ? null : s.id))
                  }
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left focus:outline-2 focus:outline-[#5C4ABB] focus:outline-offset-4 md:py-8 lg:py-10"
                >
                  <span className="flex items-baseline gap-5 md:gap-8 lg:gap-[88px]">
                    <span
                      className={`font-[SansPlomb] text-[40px] leading-[96%] tracking-[0.01em] transition-colors duration-300 md:text-[56px] lg:text-[72px] ${
                        isOpen
                          ? "text-[#1E1E20]"
                          : "text-[#9897A3] group-hover:text-[#1E1E20]"
                      }`}
                    >
                      {s.index}
                      <span className="text-[#5C4ABB]">.</span>
                    </span>
                    <span
                      className={`font-[SansPlomb] text-[clamp(28px,5vw,52px)] leading-[100%] tracking-[0.01em] transition-colors duration-300 lg:leading-[96%] ${
                        isOpen
                          ? "text-[#1E1E20]"
                          : "text-[#9897A3] group-hover:text-[#1E1E20]"
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
                        ? "border-[#5C4ABB] text-[#5C4ABB]"
                        : "border-[#D9D9DE] text-[#9897A3] group-hover:border-[#5C4ABB] group-hover:text-[#5C4ABB]"
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
                          <p className="max-w-[440px] text-[15px] font-light leading-[150%] tracking-[0.01em] text-[#5D5C69] md:text-[17px] lg:text-[18px] lg:leading-[140%]">
                            {s.blurb}
                          </p>
                          <p className="mt-6 text-[12px] uppercase tracking-[0.18em] text-[#5F5C6D] md:text-[13px]">
                            Best for
                          </p>
                          <p className="mt-2 text-[14px] text-[#1E1E1E] md:text-[15px]">
                            {s.bestFor}
                          </p>
                        </div>
                        <ul className="flex flex-col gap-3 lg:w-1/2">
                          {s.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-3 border-b border-[#D9D9DE] pb-3 text-[15px] text-[#1E1E1E] md:text-[16px]"
                            >
                              <span
                                aria-hidden
                                className="mt-[6px] inline-block size-[6px] shrink-0 rounded-full bg-[#5C4ABB]"
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
      </LayoutWrapper>
    </section>
  );
}

function ProcessCallout() {
  return (
    <section className="py-12 md:py-16 lg:py-[120px]">
      <LayoutWrapper>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-[#5F5C6D] md:text-[13px]">
              How a project runs
            </p>
            <h2 className="mt-3 max-w-[640px] font-[SansPlomb] text-[clamp(32px,5vw,56px)] leading-[100%] text-[#1E1E1E]">
              Same four steps, whichever service you pick.
            </h2>
          </div>
          <p className="hidden max-w-[320px] text-[15px] leading-[150%] text-[#5F5C6D] lg:block">
            Most engagements run 4-8 weeks. Retainers and social work run
            monthly.
          </p>
        </m.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:mt-[60px] lg:grid-cols-4 lg:gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <m.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: SMOOTH_EASE, delay: i * 0.08 }}
              className="flex min-h-[260px] flex-col items-start justify-between gap-8 rounded-[16px] border border-[#CFCDE4] bg-[#F3F2FF] p-6 lg:min-h-[300px] lg:p-[24px]"
            >
              <span className="font-[SansPlomb] text-[40px] leading-[96%] text-[#5E4FC4] md:text-[48px] lg:text-[56px]">
                {step.number}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="font-[SansPlomb] text-[28px] leading-[100%] text-[#1E1E1E] md:text-[32px] lg:text-[36px]">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[150%] text-[#5F5C6D] md:text-[16px]">
                  {step.blurb}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section className="pb-12 md:pb-16 lg:pb-[120px]">
      <LayoutWrapper>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE }}
          className="flex flex-col gap-8 rounded-[20px] border border-[#CFCDE4] bg-[#F3F2FF] px-6 py-12 md:rounded-[24px] md:px-10 md:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-[64px] lg:py-[80px]"
        >
          <div className="flex max-w-[680px] flex-col gap-4">
            <p className="text-[12px] uppercase tracking-[0.18em] text-[#5F5C6D] md:text-[13px]">
              Start here
            </p>
            <h2 className="font-[SansPlomb] text-[clamp(36px,6vw,80px)] leading-[96%] text-[#1E1E1E]">
              Have a project in mind? Let&rsquo;s scope it.
            </h2>
            <p className="max-w-[520px] text-[15px] leading-[150%] text-[#5F5C6D] md:text-[17px]">
              A 20-minute call, no pitch deck. Tell me the rough shape of what
              you need and I&rsquo;ll tell you honestly whether I&rsquo;m the
              right designer for it.
            </p>
          </div>
          <BigButton variant="purple" size="lg" to={ROUTES.CONTACT_PAGE}>
            Start a project
          </BigButton>
        </m.div>
      </LayoutWrapper>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div>
      <ServicesHero />
      <ServicesIntro />
      <ServicesAccordion />
      <ProcessCallout />
      <ServicesCTA />
    </div>
  );
}
