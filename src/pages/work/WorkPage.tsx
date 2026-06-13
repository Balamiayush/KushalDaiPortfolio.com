import { m } from "framer-motion";
import { Link } from "react-router-dom";

import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import Copy from "@/shared/components/ui/Animated/textAnim/Copy";
import ButtonArrow from "@/shared/components/icons/ButtonArrow";
import { ROUTES } from "@/shared/constants/routes";
import { works, type Work } from "@/pages/work/data/works";

const REVEAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const isImageUrl = (src: string) => /images\.unsplash\.com/.test(src);

const fallbackSrc = (item: Work) =>
  `https://placehold.co/1200x900/EFEAE0/1D1D1E?text=${encodeURIComponent(
    item.title
  )}`;

const getWorkImage = (item: Work) =>
  isImageUrl(item.src) ? item.src : fallbackSrc(item);

const isWideTile = (index: number) => index === 0 || index === 3;

const tileSpan = (index: number) =>
  isWideTile(index) ? "lg:col-span-2" : "lg:col-span-1";

const tileAspect = (index: number) =>
  isWideTile(index)
    ? "aspect-[4/5] lg:aspect-[16/10]"
    : "aspect-[4/5] lg:aspect-[4/3]";

export default function WorkPage() {
  return (
    <div>
      {/* Hero card */}
      <div className="relative mx-auto w-full p-3 md:p-[24px]">
        <section className="relative flex w-full flex-col justify-end overflow-hidden rounded-[20px] md:rounded-[24px] bg-[#DCE6F0] p-5 pt-24 md:p-8 md:pt-32 lg:p-10 lg:pt-[140px] min-h-[560px] md:min-h-[640px] lg:min-h-[700px] xl:h-[723px]">
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div className="flex flex-col items-start gap-3 lg:gap-2">
              <Copy animateOnScroll={false}>
                <p className="text-[12px] md:text-[13px] tracking-[0.18em] uppercase text-[#5C4ABB]">
                  Portfolio
                </p>
              </Copy>
              <Copy animateOnScroll={false} delay={0.05}>
                <h1 className="-ml-0.5 lg:-ml-3.5 font-[SansPlomb] text-[clamp(56px,12vw,180px)] leading-[84%] lg:leading-[80%] tracking-[0.01em] text-[#2A3F5F]">
                  Selected
                  <br />
                  work.
                </h1>
              </Copy>
            </div>
            <Copy animateOnScroll={false} delay={0.1}>
              <p className="max-w-full lg:max-w-[420px] xl:max-w-[480px] text-[14px] md:text-[16px] lg:text-[18px] leading-[140%] lg:leading-[120%] font-normal tracking-[0.01em] text-[#1E1E1E]">
                A small set of projects I keep close — branding systems,
                product surfaces, and visual identities shaped with strategy,
                craft, and the people they&rsquo;re built for.
              </p>
            </Copy>
          </div>
        </section>
      </div>

      {/* Index strip */}
      <section className="py-12 md:py-16 lg:py-[96px]">
        <LayoutWrapper>
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: REVEAL_EASE }}
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12"
          >
            <Copy>
              <h2 className="font-[SansPlomb] text-[clamp(28px,4vw,40px)] leading-[100%] tracking-[0.01em] text-[#1D1D1E] max-w-[640px]">
                Six projects, one through-line — clarity.
              </h2>
            </Copy>
            <p className="text-[14px] md:text-[15px] leading-[140%] text-[#5F5C6D] max-w-[420px]">
              Each piece below is paired with the discipline it leans on most.
              Case studies are on their way.
            </p>
          </m.div>

          <div className="mt-8 flex justify-between border-t border-[#D9D9DE] pt-4 text-[12px] tracking-[0.08em] uppercase text-[#5F5C6D]">
            <span>01 — {String(works.length).padStart(2, "0")}</span>
            <span>Branding · Product · Visuals</span>
          </div>
        </LayoutWrapper>
      </section>

      {/* Works grid */}
      <section className="pb-16 md:pb-24 lg:pb-[120px]">
        <LayoutWrapper>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 list-none p-0">
            {works.map((item, i) => {
              const isFirst = i === 0;
              const numLabel = `${String(i + 1).padStart(2, "0")} / ${String(
                works.length
              ).padStart(2, "0")}`;
              return (
                <m.li
                  key={item.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    ease: REVEAL_EASE,
                    delay: (i % 3) * 0.06,
                  }}
                  className={tileSpan(i)}
                >
                  <article>
                    <Link
                      to={`${ROUTES.WORK_PAGE}/${item.id}`}
                      className="group block rounded-[16px] md:rounded-[20px] focus-visible:outline-2 focus-visible:outline-[#5C4ABB] focus-visible:outline-offset-4"
                      aria-label={`${item.title} — ${item.type}`}
                    >
                      <figure
                        className={`relative overflow-hidden rounded-[16px] md:rounded-[20px] bg-[#EFEAE0] ${tileAspect(
                          i
                        )}`}
                      >
                        <img
                          src={getWorkImage(item)}
                          alt={`${item.title} — ${item.type}`}
                          loading={isFirst ? "eager" : "lazy"}
                          decoding="async"
                          {...(isFirst ? { fetchPriority: "high" as const } : {})}
                          className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-[#1D1D1E]/0 transition-colors duration-300 group-hover:bg-[#1D1D1E]/15" />
                        <div className="absolute bottom-4 right-4 hidden lg:flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[12px] tracking-[0.08em] uppercase text-[#1D1D1E] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <span>View case</span>
                          <ButtonArrow className="stroke-current" />
                        </div>
                      </figure>
                      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                        <h3 className="font-[SansPlomb] text-[24px] md:text-[28px] lg:text-[32px] leading-[100%] tracking-[0.01em] text-[#1D1D1E]">
                          {item.title}
                        </h3>
                        <p className="text-[12px] md:text-[13px] tracking-[0.08em] uppercase text-[#5F5C6D] shrink-0">
                          {item.type}
                        </p>
                      </figcaption>
                      <p className="mt-1 text-[12px] text-[#9897A3]">
                        {numLabel}
                      </p>
                    </Link>
                  </article>
                </m.li>
              );
            })}
          </ul>
        </LayoutWrapper>
      </section>

      {/* In-between editorial line */}
      <section className="py-16 md:py-24 lg:py-[120px] border-t border-[#D9D9DE]">
        <LayoutWrapper>
          <div className="max-w-[1100px] mx-auto">
            <Copy>
              <h2 className="font-[SansPlomb] text-[clamp(36px,7vw,110px)] leading-[92%] tracking-[0.01em] text-[#9897A3]">
                Made slowly, on purpose —{" "}
                <span className="text-[#604EBB]">so they last.</span>
              </h2>
            </Copy>
            <m.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: REVEAL_EASE, delay: 0.15 }}
              className="mt-6 max-w-[520px] text-[#5F5C6D] text-[15px] md:text-[16px] leading-[140%]"
            >
              No project ships without a reason behind every choice. That&rsquo;s
              the only way I know how to design.
            </m.p>
          </div>
        </LayoutWrapper>
      </section>

      {/* Closing CTA card */}
      <section className="px-3 md:px-[24px] pb-3 md:pb-[24px]">
        <m.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: REVEAL_EASE }}
          className="bg-[#5E4FC4] text-white rounded-[20px] md:rounded-[24px] p-8 md:p-12 lg:p-[64px] flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16"
        >
          <div className="flex flex-col items-start">
            <p className="text-[12px] tracking-[0.08em] uppercase text-white/70">
              Next chapter
            </p>
            <h2 className="font-[SansPlomb] text-[clamp(40px,6vw,80px)] leading-[92%] tracking-[0.01em] mt-4">
              Have a project
              <br />
              worth making well?
            </h2>
            <p className="mt-5 max-w-[460px] text-white/80 text-[15px] md:text-[16px] leading-[140%]">
              Brand systems, product surfaces, mentorship, or something
              in-between — tell me what you&rsquo;re building and we&rsquo;ll
              find the right shape together.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:self-end">
            <Link
              to={ROUTES.CONTACT_PAGE}
              className="rounded-[100px] border border-white bg-white text-[#5E4FC4] hover:bg-white/90 transition-all duration-300 w-full max-w-[260px] sm:w-[260px] lg:w-[292px] h-[48px] inline-flex items-center justify-center gap-[10px] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
            >
              <span>Start a project</span>
              <ButtonArrow className="stroke-current" />
            </Link>
            <div className="flex gap-4 text-[13px] text-white/70">
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
        </m.div>
      </section>
    </div>
  );
}
