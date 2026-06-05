import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "@/shared/constants/data";
import KushalDaiIcon from "../../icons/KushalDaiIcon";
import Navlink from "../../ui/Animated/Navlink/Navlink";
import { useLocalTime } from "@/shared/hooks/useLocalTime";
import ButtonArrow from "../../icons/ButtonArrow";

export default function NavLinks() {
  const time = useLocalTime("Asia/Kathmandu");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="relative flex w-full items-center justify-between">
      <Link to="/" aria-label="Home" className="shrink-0">
        <KushalDaiIcon />
      </Link>

      <ul className="hidden lg:flex items-center gap-8 xl:gap-[48px]">
        {navLinks.map((navLink) => (
          <li key={navLink.id} className="flex items-center gap-3">
            <Link to={navLink.href}>
              <Navlink>
                <span className="text-[#5A5766] transition-colors duration-300 ease-in-out hover:text-black">
                  {navLink.title}
                </span>
              </Navlink>
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex items-center gap-6 xl:gap-[32px]">
        <div className="flex items-start gap-2">
          <div className="bg-[#008C07] size-[8px] rounded-full mt-[2px] outline-2 outline-[#008C0733]" />
          <div className="flex flex-col leading-tight">
            <p className="font-semibold text-[14px] text-[#1E1E1E]">
              Available for Project
            </p>
            <p className="text-[14px] text-[#5A5766]">Early Dec 2025</p>
          </div>
        </div>

        <div className="flex flex-col leading-tight">
          <p className="font-semibold text-[14px] text-[#1E1E1E]">{time}</p>
          <p className="text-[14px] text-[#5A5766]">Kathmandu, Nepal</p>
        </div>

        <Link
          to="/contact"
          className="flex items-center gap-2 text-white px-[16px] py-[12px] bg-[#5E4FC4] rounded-[999px]"
        >
          <span>Let&rsquo;s Talk</span>
          <ButtonArrow />
        </Link>
      </div>

      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(true)}
        className="lg:hidden inline-flex items-center justify-center size-11 rounded-full bg-white/70 backdrop-blur ring-1 ring-black/10"
      >
        <span className="sr-only">Open menu</span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="text-[#1E1E1E]"
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </button>

      {open && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="lg:hidden fixed inset-0 top-0 z-40 flex flex-col bg-[#FAF9FF] px-6 pt-6 pb-10 overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-10">
            <Link
              to="/"
              aria-label="Home"
              onClick={() => setOpen(false)}
              className="shrink-0"
            >
              <KushalDaiIcon />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center size-11 rounded-full bg-white ring-1 ring-black/10"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="text-[#1E1E1E]"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-2 mb-8">
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <Link
                  to={navLink.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-[28px] leading-none text-[#1E1E1E] border-b border-[#E6E4F2]"
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-5">
            <div className="flex items-start gap-2">
              <div className="bg-[#008C07] size-[8px] rounded-full mt-[6px] outline-2 outline-[#008C0733]" />
              <div className="flex flex-col leading-tight">
                <p className="font-semibold text-[16px] text-[#1E1E1E]">
                  Available for Project
                </p>
                <p className="text-[14px] text-[#5A5766]">Early Dec 2025</p>
              </div>
            </div>

            <div className="flex flex-col leading-tight">
              <p className="font-semibold text-[16px] text-[#1E1E1E]">{time}</p>
              <p className="text-[14px] text-[#5A5766]">Kathmandu, Nepal</p>
            </div>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 text-white px-6 py-4 bg-[#5E4FC4] rounded-full text-[18px]"
            >
              <span>Let&rsquo;s Talk</span>
              <ButtonArrow />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
