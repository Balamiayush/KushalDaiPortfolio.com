import { useEffect } from "react";
import { m } from "framer-motion";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import Copy from "@/shared/components/ui/Animated/textAnim/Copy";
import KushalDaiIcon from "@/shared/components/icons/KushalDaiIcon";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import { ROUTES } from "@/shared/constants/routes";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function NotFound() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Page not found — Kushal Dai";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <main className="min-h-screen p-3 md:p-[24px]">
      <section
        aria-labelledby="not-found-heading"
        className="relative overflow-hidden rounded-[20px] md:rounded-[24px] bg-[#F3D8DC] min-h-[calc(100vh-24px)] md:min-h-[calc(100vh-48px)] flex flex-col items-center justify-center text-center px-5 md:px-8 lg:px-12 py-20 md:py-24 lg:py-32"
      >
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:block absolute top-6 left-6 md:top-8 md:left-8"
          aria-hidden="true"
        >
          <KushalDaiIcon className="w-[44px] h-auto text-[#5C4ABB]" />
        </m.div>

        <LayoutWrapper>
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
            <Copy animateOnScroll={false}>
              <p className="text-[12px] md:text-[13px] uppercase tracking-[0.2em] text-[#5F5C6D]">
                Error 404
              </p>
            </Copy>

            <Copy animateOnScroll={false} delay={0.12}>
              <p
                aria-hidden="true"
                className="font-[SansPlomb] text-[clamp(120px,22vw,320px)] leading-[0.9] text-[#7362C9] -mt-2 md:-mt-4"
              >
                404
              </p>
            </Copy>

            <Copy animateOnScroll={false} delay={0.24}>
              <h1
                id="not-found-heading"
                className="font-[SansPlomb] text-[clamp(40px,7vw,96px)] leading-[0.95] text-[#0F0E1A]"
              >
                Wrong turn.
              </h1>
            </Copy>

            <Copy animateOnScroll={false} delay={0.32}>
              <p className="mx-auto max-w-[520px] text-[clamp(16px,1.6vw,20px)] leading-[140%] text-[#5F5C6D]">
                This page wandered off the map. It might have moved, been
                renamed, or never existed in the first place — let&rsquo;s get
                you back on track.
              </p>
            </Copy>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: easeOut }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto"
            >
              <BigButton variant="primary" size="lg" to={ROUTES.LANDING_PAGE}>
                Back to home
              </BigButton>
              <BigButton variant="outline" size="lg" to={ROUTES.WORK_PAGE}>
                See the work
              </BigButton>
            </m.div>

            <m.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: easeOut }}
              className="mt-8 text-[13px] text-[#5F5C6D]"
            >
              Still lost? Email{" "}
              <a
                href="mailto:kushal.design055@gmail.com"
                className="underline underline-offset-4 hover:text-[#5C4ABB] focus-visible:outline-2 focus-visible:outline-[#5C4ABB] focus-visible:outline-offset-4"
              >
                kushal.design055@gmail.com
              </a>
            </m.p>
          </div>
        </LayoutWrapper>
      </section>
    </main>
  );
}
