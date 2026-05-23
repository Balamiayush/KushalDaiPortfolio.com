import { Link } from "react-router-dom";

import FooterContact from "../FooterContact";
import Button from "@/shared/components/ui/Button";
import { ArrowUpRightIcon } from "@/shared/components/icons";

type MobileFooterProps = { videoSrc: string };

export default function MobileFooter({ videoSrc }: MobileFooterProps) {
  return (
    <div className="flex flex-col gap-8">
      <p className="w-full max-w-[200px] text-neutral-400">
        <span className="text-neutral-200">Let's elevate </span>your brand's
        digital presence
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-6">
          <h1 className="text-d1-mobile font-anton text-neutral-100 uppercase">
            Prixa
          </h1>
          <video
            src={videoSrc}
            playsInline
            autoPlay
            muted
            loop
            className="h-[60px] w-full object-cover"
            poster="https://images.pexels.com/photos/4707700/pexels-photo-4707700.jpeg?_gl=1*1uscg10*_ga*MTg5Mzg3NzUzOS4xNzUyNzMzNDY2*_ga_8JE65Q40S6*czE3Njc3NjYwNzgkbzIkZzEkdDE3Njc3NjYxMDUkajMzJGwwJGgw"
          />
        </div>
        <div className="flex items-center gap-6">
          <Link to="/contact" className="w-full">
            <Button size="large" className="w-full">
              Get in Touch <ArrowUpRightIcon className="w-[10px]" />
            </Button>
          </Link>
          <h1 className="text-d1-mobile font-anton text-neutral-100 uppercase">
            Digital
          </h1>
        </div>
      </div>
      <FooterContact />
    </div>
  );
}
