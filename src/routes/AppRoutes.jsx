import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "@/layouts/PublicLayout";
import LandingPage from "@/pages/landing/LandingPage";
import AboutUsPage from "@/pages/about-us/AboutUsPage";
import ServicesPage from "@/pages/services/ServicesPage";
import WorkPage from "@/pages/work/WorkPage";
import ContactPage from "@/pages/contact/ContactPage";
import NotFound from "@/pages/not-found/NotFound";

import { ROUTES } from "@/shared/constants/routes";

const AppRoutes = createBrowserRouter([
  {
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: ROUTES.LANDING_PAGE,
        element: <LandingPage />,
      },
      {
        path: ROUTES.ABOUT_US_PAGE,
        element: <AboutUsPage />,
      },
      {
        path: ROUTES.SERVICES_PAGE,
        element: <ServicesPage />,
      },
      {
        path: ROUTES.WORK_PAGE,
        element: <WorkPage />,
      },
      {
        path: ROUTES.CONTACT_PAGE,
        element: <ContactPage />,
      },
    ],
  },
]);

export default AppRoutes;
