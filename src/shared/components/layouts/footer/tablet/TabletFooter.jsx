import { Link } from "react-router-dom";

import FooterLinks from "../FooterLinks";
import FooterContact from "../FooterContact";
import Button from "@/shared/components/ui/Button";
import { ArrowUpRightIcon } from "@/shared/components/icons";

export default function TabletFooter({ videoSrc }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="font-anton text-d1-tablet text-neutral-100 uppercase">
          Prixa
        </h1>
        <video
          src={videoSrc}
          playsInline
          autoPlay
          muted
          loop
          className="h-[121px] w-full max-w-[300px] object-cover"
          poster="https://images.pexels.com/photos/4707700/pexels-photo-4707700.jpeg?_gl=1*1uscg10*_ga*MTg5Mzg3NzUzOS4xNzUyNzMzNDY2*_ga_8JE65Q40S6*czE3Njc3NjYwNzgkbzIkZzEkdDE3Njc3NjYxMDUkajMzJGwwJGgw"
        />
        <FooterLinks />
      </div>
      <div className="flex items-center justify-between gap-8">
        <Link to="/contact" className="w-full">
          <Button size="large" className="w-full">
            Get in Touch <ArrowUpRightIcon />
          </Button>
        </Link>
        <h1 className="font-anton text-d1-tablet text-neutral-100 uppercase">
          Digital
        </h1>
      </div>
      <FooterContact />
    </div>
  );
}
