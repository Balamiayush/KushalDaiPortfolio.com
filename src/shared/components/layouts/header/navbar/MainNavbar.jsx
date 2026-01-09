import { Link } from "react-router-dom";

import LayoutWrapper from "../../wrapper/LayoutWrapper";
import Button from "../../../ui/Button";
import NavLinks from "../NavLinks";
import LandingHeroNavbar from "./LandingHeroNavbar";
import {
  PrixaDigitalLogo,
  CalendarIcon,
  HamburgerMenuIcon,
} from "../../../icons";
import KushalDaiIcon from "@/shared/components/icons/KushalDaiIcon";

export default function MainNavbar() {
  return (
 
    <header className="bg-[#DAD3FF]   relative z-50">
        <nav className="flex items-center justify-between">
         <NavLinks/>
         
        </nav>
    </header>
      

  );
}
