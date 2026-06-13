import NavLinks from "../NavLinks";

export default function MainNavbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 px-6 pt-6 md:px-12 md:pt-12 lg:px-[48px] lg:pt-[48px]">
      <NavLinks />
    </header>
  );
}
