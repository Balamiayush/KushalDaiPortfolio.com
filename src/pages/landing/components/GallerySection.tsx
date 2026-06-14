import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import Reveal from "@/shared/components/ui/Reveal";
import Eyebrow from "@/shared/components/ui/Eyebrow";
import Image from "@/shared/components/ui/Image";
import { Stagger, StaggerItem } from "@/shared/components/ui/Stagger";
import { works } from "@/pages/work/data/works";

const GallerySection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-30">
      <LayoutWrapper>
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <Eyebrow>Glimpses</Eyebrow>
            <Reveal
              as="h2"
              className="font-display text-[clamp(32px,5vw,60px)] leading-[110%] tracking-[0.01em] text-ink"
            >
              A few frames from <br className="hidden sm:block" />
              the work in motion.
            </Reveal>
          </div>
          <p className="max-w-[360px] text-[15px] leading-[150%] text-muted">
            Snapshots from recent brand and product projects — the textures,
            type, and details behind the case studies.
          </p>
        </div>

        <Stagger
          className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5"
          stagger={0.06}
        >
          {works.map((item, i) => (
            <StaggerItem
              key={item.id}
              className={`group overflow-hidden rounded-xl md:rounded-2xl bg-tint-cream ${
                i % 5 === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/5]"
              }`}
            >
              <Image src={item.src} alt={`${item.title} — ${item.type}`} zoom />
            </StaggerItem>
          ))}
        </Stagger>
      </LayoutWrapper>
    </section>
  );
};

export default GallerySection;
