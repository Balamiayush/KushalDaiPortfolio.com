import type { ReactNode } from "react";
import PageHero from "@/shared/components/layouts/PageHero";
import Section from "@/shared/components/layouts/Section";
import Reveal from "@/shared/components/ui/Reveal";
import Eyebrow from "@/shared/components/ui/Eyebrow";
import Card from "@/shared/components/ui/Card";
import Image from "@/shared/components/ui/Image";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import { ROUTES } from "@/shared/constants/routes";

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

const STORY = [
  "I grew up surrounded by the Himalayas — a place where every ridge teaches patience and every sunrise feels like a fresh canvas. Long before I knew what 'design' meant, I was sketching prayer flags, redrawing shop signs, and obsessing over the way things were arranged.",
  "Curiosity carried me from those hills to a laptop in Kathmandu. I taught myself the basics, picked up a degree along the way, and slowly traded pencils for pixels. What stayed constant was the question I still ask on every project: does this feel honest, and does it help someone?",
  "Today I work with founders, studios, and product teams across Nepal and abroad — building brands, shipping interfaces, and mentoring the next wave of designers who, like me, started with nothing but curiosity and a blank screen.",
];

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <Reveal
    as="h2"
    className="font-display text-[clamp(32px,5vw,60px)] leading-[110%] text-ink"
  >
    {children}
  </Reveal>
);

function StorySection() {
  return (
    <Section>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-[80px] lg:items-start">
        <Reveal
          as="div"
          className="lg:w-[440px] lg:shrink-0 lg:sticky lg:top-[120px] flex flex-col gap-3"
        >
          <Image
            src="https://res.cloudinary.com/dfajjqglx/image/upload/f_auto,q_auto,w_1200/v1768109206/IMG_5475_qgszwk.png"
            alt="Kushal Dai in his Kathmandu studio"
            ratio="4/5"
            rounded="xl"
            className="w-full"
          />
          <p className="text-[13px] text-muted">Kathmandu studio</p>
        </Reveal>

        <div className="flex-1 flex flex-col gap-5 md:gap-6">
          <Eyebrow>The story</Eyebrow>
          <SectionHeading>From peaks to pixels.</SectionHeading>
          {STORY.map((text, i) => (
            <Reveal
              key={text}
              as="p"
              delay={0.1 + i * 0.1}
              className={`text-[16px] md:text-[18px] leading-[160%] ${
                i === 1 ? "text-muted" : "text-ink"
              }`}
            >
              {text}
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ExpertiseSection() {
  return (
    <Section>
      <div className="flex flex-col gap-4 max-w-[760px] mb-12 md:mb-16">
        <Eyebrow>Expertise</Eyebrow>
        <SectionHeading>The tools and the thinking.</SectionHeading>
        <Reveal
          as="p"
          delay={0.1}
          className="text-muted text-[16px] md:text-[18px] leading-[150%] max-w-[640px]"
        >
          A short tour of the software I lean on and the practices that shape
          every project I touch.
        </Reveal>
      </div>

      <div className="mb-12 md:mb-16">
        <h3 className="font-display text-[20px] md:text-[24px] text-ink mb-5">
          Tools
        </h3>
        <div className="flex flex-wrap gap-3 md:gap-4">
          {TOOLS.map((tool, i) => (
            <Reveal
              key={tool}
              as="span"
              delay={i * 0.04}
              y={12}
              duration={0.5}
              className="rounded-full border border-line-soft bg-white px-5 py-2.5 text-[14px] md:text-[15px] text-ink hover:bg-surface transition-colors"
            >
              {tool}
            </Reveal>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-[20px] md:text-[24px] text-ink mb-5">
          Methods
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {METHODS.map((method, i) => (
            <Card
              key={method.n}
              delay={i * 0.08}
              padding="lg"
              className="flex flex-col gap-3"
            >
              <span className="font-display text-[40px] leading-[100%] text-brand">
                {method.n}
              </span>
              <h4 className="font-display text-[24px] md:text-[28px] text-ink">
                {method.title}
              </h4>
              <p className="text-muted text-[15px] md:text-[16px] leading-[150%]">
                {method.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ValuesSection() {
  return (
    <Section className="bg-white">
      <div className="flex flex-col gap-3 max-w-[640px] mb-12 md:mb-16">
        <Eyebrow>What I value</Eyebrow>
        <SectionHeading>
          Small things <br />
          I take seriously.
        </SectionHeading>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {VALUES.map((v, i) => (
          <Card
            key={v.n}
            delay={i * 0.08}
            tone="outline"
            padding="none"
            className="p-6 lg:p-[24px] flex flex-col justify-between gap-8 min-h-[260px] lg:min-h-[320px]"
          >
            <span className="font-display text-[40px] lg:text-[48px] leading-[100%] text-brand">
              {v.n}
            </span>
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-[20px] md:text-[22px] text-ink">
                {v.title}
              </h3>
              <p className="text-muted text-[15px] leading-[150%]">{v.body}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function BeyondSection() {
  return (
    <Section>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-[80px]">
        <div className="lg:w-[420px] lg:shrink-0 flex flex-col gap-4">
          <Eyebrow>Off the screen</Eyebrow>
          <Reveal
            as="h2"
            className="font-display text-[clamp(28px,4.5vw,52px)] leading-[110%] text-ink"
          >
            When I close the laptop.
          </Reveal>
        </div>

        <dl className="flex-1 flex flex-col">
          {BEYOND.map((item, i) => (
            <Reveal
              key={item.label}
              as="div"
              delay={i * 0.1}
              className="border-t border-line py-5 md:py-6 last:border-b"
            >
              <dt className="font-display text-[20px] md:text-[24px] text-ink mb-2">
                {item.label}
              </dt>
              <dd className="text-muted text-[15px] md:text-[16px] leading-[150%] max-w-[560px]">
                {item.body}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}

function ClosingCTA() {
  return (
    <section className="px-3 md:px-[24px] pb-3 md:pb-[24px]">
      <div className="rounded-[20px] md:rounded-[24px] bg-tint-cream px-6 py-12 md:p-12 lg:p-[80px] min-h-[420px] md:min-h-[520px] flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-4">
          <Eyebrow>What&rsquo;s next</Eyebrow>
          <Reveal
            as="h2"
            delay={0.1}
            className="font-display text-[clamp(40px,8vw,120px)] leading-[88%] lg:leading-[80%] tracking-[0.01em] text-display max-w-[1000px]"
          >
            Have an idea worth <br />
            shaping? Let&rsquo;s talk.
          </Reveal>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8 mt-auto">
          <Reveal
            as="p"
            delay={0.12}
            className="text-ink text-[16px] md:text-[18px] leading-[150%] max-w-[520px]"
          >
            I&rsquo;m currently taking on two new projects this quarter — brand
            systems, product design, or a focused mentorship engagement. Tell me
            what you&rsquo;re building.
          </Reveal>

          <Reveal as="div" delay={0.24} className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <BigButton variant="purple" size="lg" to={ROUTES.CONTACT_PAGE}>
                Start a project
              </BigButton>
              <BigButton variant="outline" size="lg" to={ROUTES.WORK_PAGE}>
                See selected work
              </BigButton>
            </div>
            <p className="text-muted text-[13px] mt-2">
              Or write directly —{" "}
              <a
                href="mailto:kushal.design055@gmail.com"
                className="underline underline-offset-2 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
              >
                kushal.design055@gmail.com
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <div>
      <PageHero
        tint="cream"
        eyebrow="About Kushal"
        title={
          <>
            Designing with <br />
            intention, <br />
            from the <br />
            hills up.
          </>
        }
        intro="I'm Kushal Dai — a brand and product designer based in Kathmandu. I help founders and teams shape clear, considered identities and digital products, guided by research, craft, and a little bit of mountain stillness."
      >
        <Reveal
          as="p"
          onMount
          delay={0.4}
          y={12}
          className="mt-8 text-[13px] md:text-[14px] text-muted tracking-[0.01em]"
        >
          Based in Kathmandu, Nepal — open to remote work worldwide.
        </Reveal>
      </PageHero>

      <StorySection />
      <ExpertiseSection />
      <ValuesSection />
      <BeyondSection />
      <ClosingCTA />
    </div>
  );
}
