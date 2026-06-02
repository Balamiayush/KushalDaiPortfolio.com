import LayoutWrapper from "../wrapper/LayoutWrapper";
import ButtonArrow from "../../icons/ButtonArrow";
import FooterKushalDai from "../../icons/FooterKushalDai";

const socialMediaLinks = [
  { id: 1, name: "Instagram", link: "" },
  { id: 2, name: "Linkedin", link: "" },
  { id: 3, name: "Behance", link: "" },
  { id: 4, name: "Dribbble", link: "" },
  { id: 5, name: "Whatsapp", link: "" },
];

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 lg:py-[120px] w-full flex flex-col items-center">
      <div className="flex flex-col w-full gap-12 md:gap-16 lg:gap-[72px]">
        <LayoutWrapper>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
            <p className="max-w-[610px] text-[clamp(20px,3vw,32px)] leading-[130%] md:leading-[120%] font-medium tracking-[0.01em] text-[#6F6C7D]">
              Whether you’re building a brand, designing a product, or simply
              want to explore an idea,
              <span className="text-[#1E1E1E]">
                {" "}
                I’d love to hear from you.
              </span>
            </p>
            <a
              href="mailto:kushal.design055@gmail.com?subject=Book%20a%2015-min%20call"
              className="inline-flex h-auto min-h-[56px] md:min-h-[64px] lg:h-[80px] items-center gap-2 self-start md:self-auto rounded-full bg-[#5E4FC4] px-6 md:px-7 lg:px-[32px] py-3 md:py-4 lg:py-[24px] text-[18px] md:text-[22px] lg:text-[32px] leading-[100%] text-[#FAF9FF]"
            >
              <span>Book a 15-min Call</span>
              <ButtonArrow className="size-[20px] md:size-[24px] lg:size-[32px]" />
            </a>
          </div>
        </LayoutWrapper>
        <LayoutWrapper>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-6">
            <a
              href="mailto:kushal.design055@gmail.com"
              className="break-all text-[clamp(20px,3vw,32px)] leading-[120%] font-medium tracking-[0.01em] text-[#1E1E1E]"
            >
              kushal.design055@gmail.com
            </a>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 md:gap-[32px]">
              {socialMediaLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    className="inline-flex items-center gap-1 text-[#5F5C6D]"
                  >
                    <span className="text-[16px] md:text-[18px] leading-[120%] font-medium tracking-[0.01em]">
                      {link.name}
                    </span>
                    <ButtonArrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </LayoutWrapper>
        <FooterKushalDai className="w-full px-6 md:px-10 lg:px-0" />
      </div>
    </footer>
  );
};

export default Footer;
