import { lazy, Suspense, type ComponentType } from "react";
import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "@/layouts/PublicLayout";
import NotFound from "@/pages/not-found/NotFound";

import { ROUTES } from "@/shared/constants/routes";

const LandingPage = lazy(() => import("@/pages/landing/LandingPage"));
const AboutUsPage = lazy(() => import("@/pages/about-us/AboutUsPage"));
const ServicesPage = lazy(() => import("@/pages/services/ServicesPage"));
const WorkPage = lazy(() => import("@/pages/work/WorkPage"));
const WorkDetailPage = lazy(() => import("@/pages/work/WorkDetailPage"));
const CraftsPage = lazy(() => import("@/pages/crafts/CraftsPage"));
const ContactPage = lazy(() => import("@/pages/contact/ContactPage"));

const withSuspense = (Component: ComponentType) => (
  <Suspense fallback={null}>
    <Component />
  </Suspense>
);

const AppRoutes = createBrowserRouter([
  {
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: withSuspense(LandingPage),
      },
      {
        path: ROUTES.ABOUT_US_PAGE,
        element: withSuspense(AboutUsPage),
      },
      {
        path: ROUTES.SERVICES_PAGE,
        element: withSuspense(ServicesPage),
      },
      {
        path: ROUTES.WORK_PAGE,
        element: withSuspense(WorkPage),
      },
      {
        path: `${ROUTES.WORK_PAGE}/:id`,
        element: withSuspense(WorkDetailPage),
      },
      {
        path: ROUTES.CRAFTS_PAGE,
        element: withSuspense(CraftsPage),
      },
      {
        path: ROUTES.CONTACT_PAGE,
        element: withSuspense(ContactPage),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default AppRoutes;
