import React from "react";
import type { RouteObject } from "react-router-dom";
import { Home, Terms, Bikes, Bike, Insurance, Contact, Budgets } from "../pages";

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
    children: [
      {
        index: true,
        element: <Bikes />,
      },
      {
        path: ":name",
        element: <Bike />,
      },
    ],
  },
  {
    path: "/seguros",
    element: <Insurance />,
  },
  {
    path: "/contato",
    element: <Contact />,
  },
  {
    path: "/orcamentos",
    element: <Budgets />,
  },
];

export default routes;
