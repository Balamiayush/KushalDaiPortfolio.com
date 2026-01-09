import LayoutWrapper from "../wrapper/LayoutWrapper";
import { DesktopFooter, TabletFooter, MobileFooter } from "./";

import { useScreenDetector } from "@/shared/hooks/use-screen-detector";

import prixaCompanyLogo from "@/assets/icons/a-prixa-company.svg";

export default function Footer() {
  const width = useScreenDetector();

  const date = new Date();
  const year = date.getFullYear();

  const videoSrc = "";

  return (
    <footer className="bg-neutral-800 py-12 xl:py-21">
      <LayoutWrapper>
        <section className="flex flex-col gap-8">
          {width >= 1280 ? (
            <DesktopFooter videoSrc={videoSrc} />
          ) : width >= 768 ? (
            <TabletFooter videoSrc={videoSrc} />
          ) : (
            <MobileFooter videoSrc={videoSrc} />
          )}
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 max-md:gap-4 md:pb-6">
            <span className="text-c3 md:text-p3 xl:text-p2 text-white/50">
              @{year} Tingting.io. All right reserved
            </span>
            <img
              src={prixaCompanyLogo}
              alt="Prixa company"
              className="h-auto w-[209px]"
            />
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span className="text-c3 md:text-p3 xl:text-p2 text-white/50">
                Privacy policy, Terms & Conditions
              </span>
            </a>
          </div>
        </section>
      </LayoutWrapper>
    </footer>
  );
}
