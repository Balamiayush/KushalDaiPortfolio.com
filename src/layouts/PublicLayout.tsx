import { Fragment } from "react";

import { Outlet } from "react-router-dom";

import ScrollToTop from "@/shared/utils/scroll-to-top";

export default function PublicLayout() {
  return (
    <Fragment>
      <ScrollToTop />
  
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </Fragment>
  );
}
