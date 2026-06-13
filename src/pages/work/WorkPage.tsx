import { Link } from "react-router-dom";
import PageHero from "@/shared/components/layouts/PageHero";
import Section from "@/shared/components/layouts/Section";
import Reveal from "@/shared/components/ui/Reveal";
import Image from "@/shared/components/ui/Image";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import { ROUTES } from "@/shared/constants/routes";
import { works, type Work } from "@/pages/work/data/works";

const total = String(works.length).padStart(2, "0");
const [featured, ...rest] = works;

function Tile({
  item,
  index,
  featured = false,
}: {
  item: Work;
  index: number;
  featured?: boolean;
}) {
  return (
    <article className="flex flex-col">
      <figure className="group relative overflow-hidden rounded-[16px] md:rounded-[20px] bg-tint-cream">
        <Image
          src={item.src}
          alt={`${item.title} — ${item.type}`}
          ratio={featured ? "16/9" : "4/3"}
          zoom
          priority={featured}
        />
      </figure>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3
          className={`font-display leading-[100%] tracking-[0.01em] text-ink ${
            featured
              ? "text-[28px] md:text-[40px] lg:text-[48px]"
              : "text-[22px] md:text-[26px]"
          }`}
        >
          {item.title}
        </h3>
        <p className="shrink-0 text-[12px] md:text-[13px] tracking-[0.08em] uppercase text-muted">
          {String(index + 1).padStart(2, "0")} / {total}
        </p>
      </div>
      <p className="mt-1 text-[13px] md:text-[14px] text-muted">{item.type}</p>
    </article>
  );
}

export default function WorkPage() {
  return (
    <div>
      <PageHero
        tint="blue"
        eyebrow="Portfolio"
        title={
          <>
            Selected
            <br />
            work.
          </>
        }
        intro="A small set of projects I keep close — branding systems, product surfaces, and visual identities shaped with strategy, craft, and the people they're built for."
      />

      <Section className="!pb-0">
        <Reveal
          as="div"
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12"
        >
          <h2 className="font-display text-[clamp(28px,4vw,40px)] leading-[110%] tracking-[0.01em] text-ink max-w-[640px]">
            Six projects, one through-line — clarity.
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[140%] text-muted max-w-[420px]">
            Each piece below is paired with the discipline it leans on most.
            Case studies are on their way.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-line pt-4 text-[12px] tracking-[0.08em] uppercase text-muted">
          <span>01 — {total}</span>
          <span>Branding · Product · Visuals</span>
        </div>
      </Section>

      <Section className="!pt-10 md:!pt-12">
        <div className="flex flex-col gap-10 md:gap-14 lg:gap-16">
          {featured && (
            <Reveal as="div" y={32}>
              <Tile item={featured} index={0} featured />
            </Reveal>
          )}

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-12 list-none p-0">
            {rest.map((item, i) => (
              <Reveal key={item.id} as="li" y={32} delay={(i % 2) * 0.08}>
                <Tile item={item} index={i + 1} />
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="max-w-[1100px] mx-auto">
          <Reveal
            as="h2"
            className="font-display text-[clamp(36px,7vw,110px)] leading-[92%] tracking-[0.01em] text-faint"
          >
            Made slowly, on purpose —{" "}
            <span className="text-accent">so they last.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.15}
            className="mt-6 max-w-[520px] text-muted text-[15px] md:text-[16px] leading-[140%]"
          >
            No project ships without a reason behind every choice. That&rsquo;s
            the only way I know how to design.
          </Reveal>
        </div>
      </Section>

      <section className="px-3 md:px-[24px] pb-3 md:pb-[24px]">
        <Reveal
          as="div"
          y={32}
          duration={0.7}
          className="bg-brand text-white rounded-[20px] md:rounded-[24px] p-8 md:p-12 lg:p-[64px] flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16"
        >
          <div className="flex flex-col items-start">
            <p className="text-[12px] tracking-[0.08em] uppercase text-white/85">
              Next chapter
            </p>
            <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[92%] tracking-[0.01em] mt-4">
              Have a project
              <br />
              worth making well?
            </h2>
            <p className="mt-5 max-w-[460px] text-white/85 text-[15px] md:text-[16px] leading-[140%]">
              Brand systems, product surfaces, mentorship, or something
              in-between — tell me what you&rsquo;re building and we&rsquo;ll
              find the right shape together.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:self-end">
            <BigButton variant="light" size="lg" to={ROUTES.CONTACT_PAGE}>
              Start a project
            </BigButton>
            <div className="flex gap-4 text-[13px] text-white/85">
              <a
                href="mailto:kushal.design055@gmail.com"
                className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
              >
                kushal.design055@gmail.com
              </a>
              <span aria-hidden="true">·</span>
              <Link
                to={ROUTES.SERVICES_PAGE}
                className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
              >
                See services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
