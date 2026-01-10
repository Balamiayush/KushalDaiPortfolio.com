import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

import "./styles/index.css";
import AppLenis from "./shared/hooks/Lenis";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppLenis>
    <RouterProvider router={AppRoutes} />
    </AppLenis>
  </StrictMode>,
);
