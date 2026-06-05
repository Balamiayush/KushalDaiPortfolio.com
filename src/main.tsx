import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

import AppRoutes from "./routes/AppRoutes";

import "./styles/index.css";
import AppLenis from "./shared/hooks/Lenis";
import Footer from "./shared/components/layouts/footer/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LazyMotion features={domAnimation} strict>
      <AppLenis>
        <RouterProvider router={AppRoutes} />
        <Footer />
      </AppLenis>
    </LazyMotion>
  </StrictMode>,
);
