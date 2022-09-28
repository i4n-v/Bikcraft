import React from "react";
import type { RouteObject } from "react-router-dom";
import { Home, Terms } from "../pages";

const routes: RouteObject[] = [
  {
    path: "*",
    element: <>Not Found</>,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/termos",
    element: <Terms />,
  },
];

export default routes;
