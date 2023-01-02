import React from "react";
import GlobalLayout from "./pages/_layout";
import Index from "./pages";

const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [{ path: "/", element: <Index />, index: true }],
  },
];

export default routes;

export const pages = [{ route: "/" }];
