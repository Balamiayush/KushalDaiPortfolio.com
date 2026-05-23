import { Link } from "react-router-dom";

import { footerLinks } from "@/shared/constants/data";

export default function FooterLinks() {
  return (
    <ul className="flex flex-col gap-3 xl:self-end xl:pb-8">
      {footerLinks.map((footerLink) => (
        <Link key={footerLink.id} to={footerLink.href}>
          <li className="text-c2 font-medium text-neutral-300">
            {footerLink.title}
          </li>
        </Link>
      ))}
    </ul>
  );
}
