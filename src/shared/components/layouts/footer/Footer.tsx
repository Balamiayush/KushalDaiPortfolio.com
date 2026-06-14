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
    <footer className="px-3 md:px-[24px] md:pb-[24px]">
      <div className="bg-tint-lavender md:rounded-t-8 relative overflow-hidden rounded-[20px] px-6 pt-10 md:px-12 md:pt-14 lg:px-16 lg:pt-16">
        {/* Top: intro + call CTA */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
          <p className="text-muted max-w-[560px] text-[clamp(18px,2.4vw,28px)] leading-[140%] font-medium tracking-[0.01em]">
            Whether you&rsquo;re building a brand, designing a product, or
            simply want to explore an idea,{" "}
            <span className="text-ink">I&rsquo;d love to hear from you.</span>
          </p>
          <a
            href="mailto:kushal.design055@gmail.com?subject=Book%20a%2015-min%20call"
            className="bg-brand hover:bg-brand/90 focus-visible:outline-accent inline-flex shrink-0 items-center gap-2 self-start rounded-full px-6 py-3.5 text-[16px] text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 md:px-7 md:py-4 md:text-[18px]"
          >
            <span>Book a 15-min Call</span>
            <ButtonArrow className="size-[18px] md:size-[20px]" />
          </a>
        </div>

        {/* Middle: email + socials */}
        <div className="mt-10 flex flex-col gap-5 md:mt-14 md:flex-row md:items-center md:justify-between">
          <a
            href="mailto:kushal.design055@gmail.com"
            className="text-ink hover:text-accent text-[15px] font-medium break-all transition-colors md:text-[16px]"
          >
            kushal.design055@gmail.com
          </a>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socialMediaLinks.map((link) => (
              <li key={link.id}>
                <span className="text-muted text-[14px] font-medium tracking-[0.01em] md:text-[15px]">
                  {link.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Giant wordmark, clipped by the card */}
        <FooterKushalDai
          aria-hidden="true"
          className="mt-8 -mb-[1.2vw] w-full md:mt-12 [&_path]:fill-[#B3A7E0]"
        />
      </div>
    </footer>
  );
};

export default Footer;
