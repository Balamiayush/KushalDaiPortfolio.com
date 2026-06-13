import { Fragment } from "react";

import { Outlet } from "react-router-dom";

import MainNavbar from "@/shared/components/layouts/header/navbar/MainNavbar";
import ScrollToTop from "@/shared/utils/scroll-to-top";

export default function PublicLayout() {
  return (
    <Fragment>
      <ScrollToTop />

      <div className="relative">
        <MainNavbar />

        <main>
          <Outlet />
        </main>
      </div>
    </Fragment>
  );
}
