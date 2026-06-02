import { Link } from "react-router-dom";
import { navLinks } from "@/shared/constants/data";
import KushalDaiIcon from "../../icons/KushalDaiIcon";
import Navlink from "../../ui/Animated/Navlink/Navlink";
import { useLocalTime } from "@/shared/hooks/useLocalTime";
import ButtonArrow from "../../icons/ButtonArrow";

export default function NavLinks() {
  const time = useLocalTime("Asia/Kathmandu");

  return (
    <nav className="max-md:hidden flex items-center w-full justify-between">
      <div className="flex items-center xl:gap-[48px]">
        <Link to="/" aria-label="Home">
          <KushalDaiIcon />
        </Link>

        <ul className="flex items-center xl:gap-[48px]">
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
      </div>

      <div className="flex items-center gap-[32px]">
        <div className="flex items-start gap-2">
          <div className="circlee bg-[#008C07] w-[8px] h-[8px] rounded-full mt-[2px] outline-2 outline-[#008C0733]" />
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
    </nav>
  );
}
