import ButtonArrow from "../../icons/ButtonArrow";
import Watermark from "../../icons/Watermark";

const socialMediaLinks = [
  { id: 1, name: "Instagram", link: "" },
  { id: 2, name: "Linkedin", link: "" },
  { id: 3, name: "Behance", link: "" },
  { id: 4, name: "Dribbble", link: "" },
  { id: 5, name: "Whatsapp", link: "" },
];

const Footer = () => {
  return (
    // Full-bleed on mobile; capped to the content max-width on md+.
    <footer className="bg-tint-lavender relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-t-[20px] px-5 pt-10 md:rounded-t-[24px] md:px-8 md:pt-14 lg:px-12 lg:pt-16">
        {/* Top: intro + call CTA */}
        <div className="flex flex-col gap-7 md:flex-row md:items-start md:justify-between md:gap-10">
          <p className="text-muted max-w-[560px] text-[clamp(20px,2.4vw,28px)] leading-[135%] font-medium tracking-[0.01em]">
            Whether you&rsquo;re building a brand, designing a product, or
            simply want to explore an idea,{" "}
            <span className="text-ink">I&rsquo;d love to hear from you.</span>
          </p>
          <a
            href="mailto:kushal.design055@gmail.com?subject=Book%20a%2015-min%20call"
            className="bg-brand hover:bg-brand/90 focus-visible:outline-accent inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full px-6 py-4 text-base text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 md:w-auto md:justify-start md:px-7 md:text-lg"
          >
            <span>Book a 15-min Call</span>
            <ButtonArrow className="size-4.5 md:size-5" />
          </a>
        </div>

        {/* Middle: email + socials, separated by a divider */}
        <div className="border-ink/10 mt-9 flex flex-col gap-5 border-t pt-7 md:mt-14 md:flex-row md:items-center md:justify-between md:pt-8">
          <a
            href="mailto:kushal.design055@gmail.com"
            className="text-ink hover:text-accent text-base font-medium break-all transition-colors md:text-lg"
          >
            kushal.design055@gmail.com
          </a>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {socialMediaLinks.map((link) => (
              <li key={link.id}>
                <span className="text-muted text-sm font-medium tracking-[0.01em] md:text-[15px]">
                  {link.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Watermark — full-bleeds to the card edges (cancels the footer px),
            and bleeds off the bottom. */}
        <Watermark
          aria-hidden="true"
          className="mt-8 -mx-5 block h-auto w-[calc(100%+2.5rem)] -mb-[1.5vw] md:-mx-8 md:mt-12 md:-mb-[1vw] md:w-[calc(100%+4rem)] lg:-mx-12 lg:w-[calc(100%+6rem)] [&_path]:fill-[#B3A7E0]"
        />
      </footer>
  );
};

export default Footer;
