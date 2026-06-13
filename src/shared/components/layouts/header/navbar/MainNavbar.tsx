import NavLinks from "../NavLinks";
import { useScrolled } from "@/shared/hooks/use-scrolled";

export default function MainNavbar() {
  // Box shrinks / frosts / lifts once the hero content has begun fading out.
  const scrolled = useScrolled(120);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 md:px-6 lg:px-[24px] transition-[padding] duration-500 ease-out ${
        scrolled ? "pt-2 md:pt-3" : "pt-3 md:pt-[24px]"
      }`}
    >
      <div
        className={`mx-auto rounded-full border px-4 py-2.5 md:px-6 md:py-3 transition-[max-width,background-color,border-color,box-shadow] duration-500 ease-out ${
          scrolled
            ? "max-w-[1280px] border-line/60 bg-page/85 backdrop-blur-md shadow-[0_10px_40px_-12px_rgba(20,18,40,0.25)]"
            : "max-w-full border-transparent"
        }`}
      >
        <NavLinks />
      </div>
    </header>
  );
}
