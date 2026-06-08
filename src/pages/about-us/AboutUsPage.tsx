import { m } from "framer-motion";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import Copy from "@/shared/components/ui/Animated/textAnim/Copy";
import { ROUTES } from "@/shared/constants/routes";

const REVEAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const REVEAL = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: REVEAL_EASE },
};

const TOOLS = [
  "Figma",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe After Effects",
  "Framer",
  "Webflow",
  "Notion",
  "Spline",
];

const METHODS = [
  {
    n: "01",
    title: "Research & Discovery",
    body: "Stakeholder interviews, audits, and competitive landscaping so design decisions start from evidence, not assumptions.",
  },
  {
    n: "02",
    title: "Brand Strategy & Identity",
    body: "Positioning, naming support, visual systems, and guidelines that make a brand feel inevitable — not invented.",
  },
  {
    n: "03",
    title: "UI / UX & Product Design",
    body: "End-to-end product work: flows, wireframes, design systems, and pixel-perfect interfaces in Figma.",
  },
  {
    n: "04",
    title: "Illustration & Motion",
    body: "Custom illustrations, iconography, and small motion details that give a product its own voice.",
  },
];

const VALUES = [
  {
    n: "01",
    title: "Honest conversation",
    body: "I'd rather ask a hard question early than ship a polished thing that misses the point. Clarity is a kindness.",
  },
  {
    n: "02",
    title: "Slow craft",
    body: "Pixels reward patience. I measure, re-measure, and sweat the spacing so the work still holds up six months in.",
  },
  {
    n: "03",
    title: "Local roots, global lens",
    body: "My references come from Kathmandu rooftops and Tokyo magazines alike. Good design borrows widely and credits openly.",
  },
  {
    n: "04",
    title: "Sharing the climb",
    body: "Mentorship is part of the job. If I learned something the hard way, I'd rather a junior designer learn it the easy way.",
  },
];

const BEYOND = [
  {
    label: "Trekking",
    body: "Weekend escapes into the Annapurna and Langtang trails. The best brand briefs I've cracked happened above 3,000m.",
  },
  {
    label: "Film photography",
    body: "A Pentax K1000 and a slow shutter. Helps me see edges I'd otherwise miss in Figma.",
  },
  {
    label: "Teaching",
    body: "Workshops and 1:1 mentorship with early-career designers across Nepal and South Asia.",
  },
];

function HeroSection() {
  return (
    <div className="relative mx-auto w-full p-3 md:p-[24px]">
      <section className="relative flex w-full flex-col justify-end rounded-[20px] md:rounded-[24px] bg-[#F5E9DA] p-5 pt-24 md:p-8 md:pt-32 lg:p-10 lg:pt-[140px] min-h-[560px] md:min-h-[640px] lg:min-h-[700px] overflow-hidden">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="flex flex-col items-start gap-3 lg:gap-2">
            <Copy animateOnScroll={false}>
              <p className="text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-[#5C4ABB]">
                About Kushal
              </p>
            </Copy>
            <Copy animateOnScroll={false} delay={0.05}>
              <h1 className="-ml-0.5 lg:-ml-3.5 font-[SansPlomb] text-[clamp(56px,12vw,180px)] leading-[84%] lg:leading-[80%] tracking-[0.01em] text-[#7362C9]">
                Designing with <br />
                intention, <br />
                from the <br />
                hills up.
              </h1>
            </Copy>
            <m.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: REVEAL_EASE, delay: 0.4 }}
              className="mt-2 text-[13px] md:text-[14px] text-[#5F5C6D] tracking-[0.01em]"
            >
              Based in Kathmandu, Nepal — open to remote work worldwide.
            </m.p>
          </div>
          <Copy animateOnScroll={false} delay={0.1}>
            <p className="max-w-full lg:max-w-[420px] xl:max-w-[480px] text-[14px] md:text-[16px] lg:text-[18px] leading-[140%] lg:leading-[120%] font-normal tracking-[0.01em] text-[#1E1E1E]">
              I&rsquo;m Kushal Dai — a brand and product designer based in
              Kathmandu. I help founders and teams shape clear, considered
              identities and digital products, guided by research, craft, and a
              little bit of mountain stillness.
            </p>
          </Copy>
        </div>
      </section>
    </div>
  );
}

function StorySection() {
  const paragraphs: { text: string; muted?: boolean }[] = [
    {
      text: "I grew up surrounded by the Himalayas — a place where every ridge teaches patience and every sunrise feels like a fresh canvas. Long before I knew what 'design' meant, I was sketching prayer flags, redrawing shop signs, and obsessing over the way things were arranged.",
    },
    {
      text: "Curiosity carried me from those hills to a laptop in Kathmandu. I taught myself the basics, picked up a degree along the way, and slowly traded pencils for pixels. What stayed constant was the question I still ask on every project: does this feel honest, and does it help someone?",
      muted: true,
    },
    {
      text: "Today I work with founders, studios, and product teams across Nepal and abroad — building brands, shipping interfaces, and mentoring the next wave of designers who, like me, started with nothing but curiosity and a blank screen.",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-[120px]">
      <LayoutWrapper>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-[80px] lg:items-start">
          <div className="lg:w-[440px] lg:shrink-0 lg:sticky lg:top-[120px] flex flex-col gap-3">
            <m.img
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: REVEAL_EASE }}
              src="https://res.cloudinary.com/dfajjqglx/image/upload/f_auto,q_auto,w_1200/v1768109206/IMG_5475_qgszwk.png"
              alt="Kushal Dai in his Kathmandu studio"
              className="w-full aspect-[4/5] object-cover rounded-[20px] md:rounded-[24px]"
            />
            <p className="text-[13px] text-[#5F5C6D]">Kathmandu studio</p>
          </div>

          <div className="flex-1 flex flex-col gap-5 md:gap-6">
            <m.p
              {...REVEAL}
              className="text-[12px] uppercase tracking-[0.18em] text-[#5C4ABB]"
            >
              The story
            </m.p>
            <Copy>
              <h2 className="font-[SansPlomb] text-[clamp(32px,5vw,60px)] leading-[100%] text-[#1E1E1E]">
                From peaks to pixels.
              </h2>
            </Copy>
            {paragraphs.map((p, i) => (
              <m.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  ease: REVEAL_EASE,
                  delay: 0.1 + i * 0.1,
                }}
                className={`text-[16px] md:text-[18px] leading-[160%] ${
                  p.muted ? "text-[#5F5C6D]" : "text-[#1E1E1E]"
                }`}
              >
                {p.text}
              </m.p>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="py-12 md:py-16 lg:py-[120px]">
      <LayoutWrapper>
        <div className="flex flex-col gap-4 max-w-[760px] mb-12 md:mb-16">
          <m.p
            {...REVEAL}
            className="text-[12px] uppercase tracking-[0.18em] text-[#5C4ABB]"
          >
            Expertise
          </m.p>
          <Copy>
            <h2 className="font-[SansPlomb] text-[clamp(32px,5vw,60px)] leading-[100%] text-[#1E1E1E]">
              The tools and the thinking.
            </h2>
          </Copy>
          <m.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: REVEAL_EASE, delay: 0.1 }}
            className="text-[#5F5C6D] text-[16px] md:text-[18px] leading-[150%] max-w-[640px]"
          >
            A short tour of the software I lean on and the practices that shape
            every project I touch.
          </m.p>
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="font-[SansPlomb] text-[20px] md:text-[24px] text-[#1E1E1E] mb-5">
            Tools
          </h3>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {TOOLS.map((tool, i) => (
              <m.span
                key={tool}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  ease: REVEAL_EASE,
                  delay: i * 0.04,
                }}
                className="rounded-full border border-[#CFCDE4] bg-white px-5 py-2.5 text-[14px] md:text-[15px] text-[#1E1E1E] hover:bg-[#F3F2FF] transition-colors"
              >
                {tool}
              </m.span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-[SansPlomb] text-[20px] md:text-[24px] text-[#1E1E1E] mb-5">
            Methods
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {METHODS.map((method, i) => (
              <m.div
                key={method.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  ease: REVEAL_EASE,
                  delay: i * 0.08,
                }}
                className="rounded-[20px] border border-[#CFCDE4] bg-[#F3F2FF] p-6 md:p-8 lg:p-[32px] flex flex-col gap-3"
              >
                <span className="font-[SansPlomb] text-[40px] leading-[100%] text-[#5E4FC4]">
                  {method.n}
                </span>
                <h4 className="font-[SansPlomb] text-[24px] md:text-[28px] text-[#1E1E1E]">
                  {method.title}
                </h4>
                <p className="text-[#5F5C6D] text-[15px] md:text-[16px] leading-[150%]">
                  {method.body}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-[120px] bg-white">
      <LayoutWrapper>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12 md:mb-16">
          <div className="flex flex-col gap-3 max-w-[640px]">
            <m.p
              {...REVEAL}
              className="text-[12px] uppercase tracking-[0.18em] text-[#5C4ABB]"
            >
              What I value
            </m.p>
            <Copy>
              <h2 className="font-[SansPlomb] text-[clamp(32px,5vw,60px)] leading-[100%] text-[#1E1E1E]">
                Small things <br />
                I take seriously.
              </h2>
            </Copy>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {VALUES.map((v, i) => (
            <m.div
              key={v.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: REVEAL_EASE,
                delay: i * 0.08,
              }}
              className="rounded-[20px] border border-[#D9D9DE] p-6 lg:p-[24px] flex flex-col justify-between gap-8 min-h-[260px] lg:min-h-[320px] transition-colors hover:border-[#CFCDE4] hover:bg-[#F3F2FF]"
            >
              <span className="font-[SansPlomb] text-[40px] lg:text-[48px] leading-[100%] text-[#5E4FC4]">
                {v.n}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="font-[SansPlomb] text-[20px] md:text-[22px] text-[#1E1E1E]">
                  {v.title}
                </h3>
                <p className="text-[#5F5C6D] text-[15px] leading-[150%]">
                  {v.body}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}

function BeyondDesignSection() {
  return (
    <section className="py-12 md:py-16 lg:py-[120px]">
      <LayoutWrapper>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-[80px]">
          <div className="lg:w-[420px] lg:shrink-0 flex flex-col gap-4">
            <m.p
              {...REVEAL}
              className="text-[12px] uppercase tracking-[0.18em] text-[#5C4ABB]"
            >
              Off the screen
            </m.p>
            <Copy>
              <h2 className="font-[SansPlomb] text-[clamp(28px,4.5vw,52px)] leading-[100%] text-[#1E1E1E]">
                When I close the laptop.
              </h2>
            </Copy>
          </div>

          <dl className="flex-1 flex flex-col">
            {BEYOND.map((item, i) => (
              <m.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  ease: REVEAL_EASE,
                  delay: i * 0.1,
                }}
                className="border-t border-[#D9D9DE] py-5 md:py-6 last:border-b"
              >
                <dt className="font-[SansPlomb] text-[20px] md:text-[24px] text-[#1E1E1E] mb-2">
                  {item.label}
                </dt>
                <dd className="text-[#5F5C6D] text-[15px] md:text-[16px] leading-[150%] max-w-[560px]">
                  {item.body}
                </dd>
              </m.div>
            ))}
          </dl>
        </div>
      </LayoutWrapper>
    </section>
  );
}

function ClosingCTASection() {
  return (
    <section className="px-3 md:px-[24px] pb-3 md:pb-[24px]">
      <div className="rounded-[20px] md:rounded-[24px] bg-[#F5E9DA] px-6 py-12 md:p-12 lg:p-[80px] min-h-[420px] md:min-h-[520px] flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-4">
          <m.p
            {...REVEAL}
            className="text-[12px] uppercase tracking-[0.18em] text-[#5C4ABB]"
          >
            What&rsquo;s next
          </m.p>
          <Copy delay={0.1}>
            <h2 className="font-[SansPlomb] text-[clamp(40px,8vw,120px)] leading-[88%] lg:leading-[80%] tracking-[0.01em] text-[#7362C9] max-w-[1000px]">
              Have an idea worth <br />
              shaping? Let&rsquo;s talk.
            </h2>
          </Copy>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8 mt-auto">
          <m.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: REVEAL_EASE, delay: 0.12 }}
            className="text-[#1E1E1E] text-[16px] md:text-[18px] leading-[150%] max-w-[520px]"
          >
            I&rsquo;m currently taking on two new projects this quarter — brand
            systems, product design, or a focused mentorship engagement. Tell me
            what you&rsquo;re building.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: REVEAL_EASE, delay: 0.24 }}
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <BigButton variant="purple" size="lg" to={ROUTES.CONTACT_PAGE}>
                Start a project
              </BigButton>
              <BigButton variant="outline" size="lg" to={ROUTES.WORK_PAGE}>
                See selected work
              </BigButton>
            </div>
            <p className="text-[#5F5C6D] text-[13px] mt-2">
              Or write directly —{" "}
              <a
                href="mailto:kushal.design055@gmail.com"
                className="underline underline-offset-2 hover:text-[#5C4ABB] focus-visible:outline-2 focus-visible:outline-[#5C4ABB] focus-visible:outline-offset-4"
              >
                kushal.design055@gmail.com
              </a>
            </p>
          </m.div>
        </div>
      </div>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <div>
      <HeroSection />
      <StorySection />
      <ExpertiseSection />
      <ValuesSection />
      <BeyondDesignSection />
      <ClosingCTASection />
    </div>
  );
}
