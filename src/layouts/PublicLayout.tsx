import { Fragment } from "react";

import { Outlet } from "react-router-dom";

import MainNavbar from "@/shared/components/layouts/header/navbar/MainNavbar";
import ScrollToTop from "@/shared/utils/scroll-to-top";

export default function PublicLayout() {
  return (
    <Fragment>
      <ScrollToTop />

      <div className="relative">
        <header className="absolute inset-x-0 top-0 z-50 px-6 pt-6 md:px-12 md:pt-12 lg:px-[48px] lg:pt-[48px]">
          <MainNavbar />
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </Fragment>
  );
}
