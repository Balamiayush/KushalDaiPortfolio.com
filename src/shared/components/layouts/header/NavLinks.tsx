import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "@/shared/constants/data";
import KushalDaiIcon from "../../icons/KushalDaiIcon";
import Navlink from "../../ui/Animated/Navlink/Navlink";
import { useLocalTime } from "@/shared/hooks/useLocalTime";
import ButtonArrow from "../../icons/ButtonArrow";

export default function NavLinks() {
  const time = useLocalTime("Asia/Kathmandu");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
    dialogRef.current?.showModal();
  };
  const closeMenu = () => dialogRef.current?.close();

  // Native <dialog> handles focus trap, Escape, and focus restore. We only add
  // body-scroll locking while it's open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <nav className="relative flex w-full items-center justify-between">
      <Link to="/" aria-label="Home" className="shrink-0">
        <KushalDaiIcon />
      </Link>

      <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
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

      <div className="hidden lg:flex items-center gap-6 xl:gap-8">
        <div className="flex items-start gap-2">
          <div
            aria-hidden="true"
            className="bg-[#008C07] size-2 rounded-full mt-0.5 outline-2 outline-[#008C0733]"
          />
          <div className="flex flex-col leading-tight">
            <p className="font-semibold text-sm text-[#1E1E1E]">
              Available for Project
            </p>
            <p className="text-sm text-[#5A5766]">Early Dec 2025</p>
          </div>
        </div>

        <div className="flex flex-col leading-tight">
          <p className="font-semibold text-sm text-[#1E1E1E]">{time}</p>
          <p className="text-sm text-[#5A5766]">Kathmandu, Nepal</p>
        </div>

        <Link
          to="/contact"
          className="flex items-center gap-2 text-white px-4 py-3 bg-[#5E4FC4] rounded-full"
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
        onClick={openMenu}
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

      <dialog
        ref={dialogRef}
        id="mobile-nav"
        aria-label="Site navigation"
        onClose={() => setOpen(false)}
        className="lg:hidden inset-0 m-0 h-[100dvh] max-h-[100dvh] w-full max-w-none bg-[#FAF9FF] px-6 pt-6 pb-10 overflow-y-auto backdrop:bg-black/40"
      >
        <div className="flex min-h-full flex-col">
          <div className="flex items-center justify-between mb-10">
            <Link to="/" aria-label="Home" onClick={closeMenu} className="shrink-0">
              <KushalDaiIcon />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
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
                  onClick={closeMenu}
                  className="block py-4 text-[28px] leading-none text-[#1E1E1E] border-b border-[#E6E4F2]"
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-5">
            <div className="flex items-start gap-2">
              <div
                aria-hidden="true"
                className="bg-[#008C07] size-2 rounded-full mt-1.5 outline-2 outline-[#008C0733]"
              />
              <div className="flex flex-col leading-tight">
                <p className="font-semibold text-base text-[#1E1E1E]">
                  Available for Project
                </p>
                <p className="text-sm text-[#5A5766]">Early Dec 2025</p>
              </div>
            </div>

            <div className="flex flex-col leading-tight">
              <p className="font-semibold text-base text-[#1E1E1E]">{time}</p>
              <p className="text-sm text-[#5A5766]">Kathmandu, Nepal</p>
            </div>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-2 text-white px-6 py-4 bg-[#5E4FC4] rounded-full text-lg"
            >
              <span>Let&rsquo;s Talk</span>
              <ButtonArrow />
            </Link>
          </div>
        </div>
      </dialog>
    </nav>
  );
}
