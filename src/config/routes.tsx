import React from "react";
import type { RouteObject } from "react-router-dom";
import { Home, Terms, Bikes, Insurance } from "../pages";

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
  {
    path: "/bicicletas",
    element: <Bikes />,
  },
  {
    path: "/seguros",
    element: <Insurance />,
  },
];

export default routes;
