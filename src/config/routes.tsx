import React from "react";
import type { RouteObject } from "react-router-dom";
import { Home } from "../pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export default routes;
