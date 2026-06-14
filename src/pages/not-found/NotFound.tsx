import { useEffect } from "react";
import { m } from "framer-motion";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import Reveal from "@/shared/components/ui/Reveal";
import Eyebrow from "@/shared/components/ui/Eyebrow";
import KushalDaiIcon from "@/shared/components/icons/KushalDaiIcon";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import { ROUTES } from "@/shared/constants/routes";

export default function NotFound() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Page not found — Kushal Dai";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="min-h-screen p-3 md:p-6">
      <section
        aria-labelledby="not-found-heading"
        className="relative overflow-hidden rounded-[20px] md:rounded-3xl bg-tint-pink min-h-[calc(100vh-24px)] md:min-h-[calc(100vh-48px)] flex flex-col items-center justify-center text-center px-5 md:px-8 lg:px-12 pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-24"
      >
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:block absolute top-6 left-6 md:top-8 md:left-8"
          aria-hidden="true"
        >
          <KushalDaiIcon className="w-[44px] h-auto text-accent" />
        </m.div>

        <LayoutWrapper>
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
            <Eyebrow onMount className="text-muted">
              Error 404
            </Eyebrow>

            <Reveal
              as="p"
              onMount
              delay={0.12}
              duration={0.7}
              className="font-display text-[clamp(120px,22vw,320px)] leading-[0.9] text-display -mt-2 md:-mt-4"
            >
              <span aria-hidden="true">404</span>
            </Reveal>

            <Reveal
              as="h1"
              onMount
              delay={0.24}
              duration={0.7}
              className="font-display text-[clamp(40px,7vw,96px)] leading-[0.95] text-ink"
            >
              <span id="not-found-heading">Wrong turn.</span>
            </Reveal>

            <Reveal
              as="p"
              onMount
              delay={0.32}
              className="mx-auto max-w-[520px] text-[clamp(16px,1.6vw,20px)] leading-[140%] text-muted"
            >
              This page wandered off the map. It might have moved, been renamed,
              or never existed in the first place — let&rsquo;s get you back on
              track.
            </Reveal>

            <Reveal
              as="div"
              onMount
              delay={0.45}
              y={16}
              duration={0.5}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto"
            >
              <BigButton variant="primary" size="lg" to={ROUTES.LANDING_PAGE}>
                Back to home
              </BigButton>
              <BigButton variant="outline" size="lg" to={ROUTES.WORK_PAGE}>
                See the work
              </BigButton>
            </Reveal>

            <Reveal
              as="p"
              onMount
              delay={0.6}
              y={8}
              duration={0.5}
              className="mt-8 text-[13px] text-muted"
            >
              Still lost? Email{" "}
              <a
                href="mailto:kushal.design055@gmail.com"
                className="underline underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
              >
                kushal.design055@gmail.com
              </a>
            </Reveal>
          </div>
        </LayoutWrapper>
      </section>
    </div>
  );
}
