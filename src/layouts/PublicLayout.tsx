import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { m, AnimatePresence } from "framer-motion";

import MainNavbar from "@/shared/components/layouts/header/navbar/MainNavbar";
import ScrollToTop from "@/shared/utils/scroll-to-top";
import { EASE } from "@/shared/constants/motion";

export default function PublicLayout() {
  const location = useLocation();

  return (
    <Fragment>
      <ScrollToTop />

      <div className="relative">
        <MainNavbar />

        <main>
          <AnimatePresence mode="wait">
            <m.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <Outlet />
            </m.div>
          </AnimatePresence>
        </main>
      </div>
    </Fragment>
  );
}
