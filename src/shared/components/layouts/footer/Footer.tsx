import LayoutWrapper from "../wrapper/LayoutWrapper";
import ButtonArrow from "../../icons/ButtonArrow";
import FooterKushalDai from "../../icons/FooterKushalDai";
const Footer = () => {
  const socialMediaLinks = [
    {
      id: 1,
      name: "Instagram",
      link: "",
    },
    {
      id: 2,
      name: "Linkedin",
      link: "",
    },
    {
      id: 3,
      name: "Behance",
      link: "",
    },
    {
      id: 4,
      name: "Dribbble",
      link: "",
    },
    {
      id: 5,
      name: "Whatsapp",
      link: "",
    },
  ];
  return (
    <footer className="max-h-[575px] py-[120px] w-full flex flex-col items-center">
      <div className="flex flex-col w-full gap-[72px] " >
        <LayoutWrapper>
          <div className="itmes-center flex w-full justify-between">
            <p className="max-w-[610px] text-[32px] leading-[120%] font-medium tracking-[0.01em] text-[#6F6C7D]">
              Whether you’re building a brand, designing a product, or simply
              want to explore an idea,
              <span className="text-[#1E1E1E]">
                {" "}
                I’d love to hear from you.
              </span>
            </p>
            <a
              href="mailto:kushal.design055@gmail.com?subject=Book%20a%2015-min%20call"
              className="flex h-[80px] items-center gap-2 rounded-full bg-[#5E4FC4] px-[32px] py-[24px] text-[32px] leading-[100%] text-[#FAF9FF]"
            >
              <span>Book a 15-min Call</span>
              <ButtonArrow className="w-[32px] h-[32px]" />
            </a>
          </div>
        </LayoutWrapper>
        <LayoutWrapper>
          <div className="flex w-full items-center justify-between">
            <p className="text-[32px] leading-[120%] font-medium tracking-[0.01em] text-[#1E1E1E]">
              kushal.design055@gmail.com
            </p>
          <div className="flex gap-[32px]">
            {
              socialMediaLinks.map((link) => (
                  <a key={link.id} href={link.link} className="flex items-center gap-1 text-[#5F5C6D]">
              <p className="text-[18px] leading-[120%] font-medium tracking-[0.01em]">
                {link.name}
              </p>
              <ButtonArrow />
            </a>
              ))
            }
          </div>
          </div>
        </LayoutWrapper>
        <FooterKushalDai className="w-full"/>
       
      </div>
    </footer>
  );
};

export default Footer;
