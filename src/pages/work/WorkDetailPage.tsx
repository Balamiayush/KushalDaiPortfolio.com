import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import Section from "@/shared/components/layouts/Section";
import Reveal from "@/shared/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/shared/components/ui/Stagger";
import Image from "@/shared/components/ui/Image";
import Parallax from "@/shared/components/ui/Parallax";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import { ROUTES } from "@/shared/constants/routes";
import { works } from "./data/works";
import {
  getCaseStudy,
  type CaseBlock,
  type CaseStudy,
  type CaseTint,
} from "./data/work-case-studies";

const TINTS: Record<CaseTint, string> = {
  cream: "bg-tint-cream",
  sage: "bg-tint-sage",
  blue: "bg-tint-blue",
  pink: "bg-tint-pink",
  lime: "bg-tint-lime",
};

function Frame({
  src,
  alt,
  tint,
  ratio = "4/3",
}: {
  src: string;
  alt: string;
  tint?: CaseTint;
  ratio?: "16/9" | "4/3" | "4/5";
}) {
  if (tint) {
    return (
      <div
        className={`group overflow-hidden rounded-2xl md:rounded-[20px] ${TINTS[tint]} p-4 md:p-6`}
      >
        <Image src={src} alt={alt} ratio={ratio} rounded="md" zoom />
      </div>
    );
  }
  return (
    <div className="group overflow-hidden rounded-2xl md:rounded-[20px]">
      <Image src={src} alt={alt} ratio={ratio} zoom />
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs uppercase tracking-[0.12em] text-muted">
        {label}
      </span>
      <span className="text-sm md:text-[15px] text-ink">{value}</span>
    </div>
  );
}

function CaseHero({ study }: { study: CaseStudy }) {
  return (
    <header className="pt-28 md:pt-36 lg:pt-44">
      <LayoutWrapper>
        <Reveal as="div" onMount>
          <Link
            to={ROUTES.WORK_PAGE}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
          >
            <span aria-hidden>&larr;</span> All work
          </Link>
        </Reveal>
        <Reveal
          as="p"
          onMount
          delay={0.05}
          className="mt-8 text-xs uppercase tracking-[0.18em] text-accent"
        >
          {study.category}
        </Reveal>
        <Reveal
          as="h1"
          onMount
          delay={0.1}
          duration={0.7}
          className="mt-3 font-display text-[clamp(48px,8vw,120px)] leading-[92%] tracking-[0.01em] text-display max-w-[1100px]"
        >
          {study.title}
        </Reveal>
        <Reveal
          as="p"
          onMount
          delay={0.2}
          className="mt-6 max-w-[640px] text-base md:text-lg leading-[150%] text-ink"
        >
          {study.overview}
        </Reveal>
        <Reveal
          as="div"
          onMount
          delay={0.3}
          className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-6 md:grid-cols-4"
        >
          <Meta label="Client" value={study.client} />
          <Meta label="Role" value={study.role} />
          <Meta label="Year" value={study.year} />
          <Meta label="Services" value={study.services.join(", ")} />
        </Reveal>
      </LayoutWrapper>

      <div className="mt-10 px-3 md:mt-14 md:px-6">
        <figure className="group relative aspect-[16/10] overflow-hidden rounded-[20px] md:rounded-3xl lg:aspect-[2/1]">
          <Parallax distance={40} className="absolute inset-0">
            <Image
              src={study.cover}
              alt={`${study.title} cover`}
              fill
              priority
              className="scale-[1.1]"
            />
          </Parallax>
        </figure>
      </div>
    </header>
  );
}

const blockKey = (block: CaseBlock, i: number) => {
  switch (block.kind) {
    case "text":
      return `text-${block.title ?? block.eyebrow ?? i}`;
    case "image":
      return `image-${block.src}`;
    case "duo":
      return `duo-${block.items[0]?.src ?? i}`;
    case "quote":
      return `quote-${block.cite ?? i}`;
    default:
      return String(i);
  }
};

function Block({ block }: { block: CaseBlock }) {
  switch (block.kind) {
    case "text":
      return (
        <Section>
          <div className="max-w-[760px]">
            {block.eyebrow && (
              <Reveal
                as="p"
                className="mb-4 text-xs uppercase tracking-[0.18em] text-accent"
              >
                {block.eyebrow}
              </Reveal>
            )}
            {block.title && (
              <Reveal
                as="h2"
                delay={0.05}
                className="mb-5 font-display text-[clamp(28px,4vw,48px)] leading-[110%] text-ink"
              >
                {block.title}
              </Reveal>
            )}
            <Reveal
              as="p"
              delay={0.1}
              className="text-base md:text-lg leading-[160%] text-muted"
            >
              {block.body}
            </Reveal>
          </div>
        </Section>
      );
    case "image":
      return (
        <Section className="!py-6 md:!py-8">
          <Reveal as="div">
            <figure>
              <Frame
                src={block.src}
                alt={block.alt}
                ratio={block.ratio ?? "16/9"}
                tint={block.tint}
              />
              {block.caption && (
                <figcaption className="mt-3 text-[13px] text-muted">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          </Reveal>
        </Section>
      );
    case "duo":
      return (
        <Section className="!py-6 md:!py-8">
          <Stagger
            className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
            stagger={0.1}
          >
            {block.items.map((it) => (
              <StaggerItem key={it.src}>
                <Frame src={it.src} alt={it.alt} tint={it.tint} ratio="4/3" />
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      );
    case "quote":
      return (
        <Section>
          <Reveal as="div" className="mx-auto max-w-[900px] text-center">
            <blockquote className="font-display text-[clamp(24px,4vw,44px)] leading-[120%] text-ink">
              &ldquo;{block.body}&rdquo;
            </blockquote>
            {block.cite && (
              <p className="mt-6 text-sm uppercase tracking-[0.08em] text-muted">
                {block.cite}
              </p>
            )}
          </Reveal>
        </Section>
      );
    default:
      return null;
  }
}

function CaseFooterNav() {
  return (
    <Section>
      <Reveal
        as="div"
        className="flex flex-col items-start gap-6 border-t border-line pt-12 md:flex-row md:items-center md:justify-between"
      >
        <Link
          to={ROUTES.WORK_PAGE}
          className="font-display text-[clamp(28px,4vw,48px)] leading-[100%] text-ink transition-colors hover:text-accent"
        >
          <span aria-hidden>&larr;</span> All work
        </Link>
        <BigButton variant="purple" to={ROUTES.CONTACT_PAGE}>
          Start a project
        </BigButton>
      </Reveal>
    </Section>
  );
}

function ComingSoon({ title }: { title?: string }) {
  return (
    <div className="flex min-h-[70vh] items-center pt-28 md:pt-32">
      <Section>
        <Reveal as="div" onMount className="max-w-[640px]">
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-accent">
            Case study
          </p>
          <h1 className="mb-6 font-display text-[clamp(40px,7vw,88px)] leading-[95%] text-display">
            {title ?? "Coming soon"}
          </h1>
          <p className="mb-8 text-base md:text-lg leading-[150%] text-muted">
            The full write-up for this project is on its way. In the meantime,
            take a look at the rest of the work.
          </p>
          <BigButton variant="purple" to={ROUTES.WORK_PAGE}>
            Back to work
          </BigButton>
        </Reveal>
      </Section>
    </div>
  );
}

export default function WorkDetailPage() {
  const { id } = useParams();
  const study = getCaseStudy(id);
  const work = works.find((w) => String(w.id) === id);

  useEffect(() => {
    const prev = document.title;
    const name = study?.title ?? work?.title;
    if (name) document.title = `${name} — Kushal Dai`;
    return () => {
      document.title = prev;
    };
  }, [study, work]);

  if (!study) return <ComingSoon title={work?.title} />;

  return (
    <div>
      <CaseHero study={study} />
      {study.blocks.map((block, i) => (
        <Block key={blockKey(block, i)} block={block} />
      ))}
      <CaseFooterNav />
    </div>
  );
}
