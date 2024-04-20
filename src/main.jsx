import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Menu from "./page/Menu";
import Cart from "./page/Cart";
import SearchRestaurants from "./components/SearchRestaurants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "restaurants/:id",
        element: <Menu />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
      {
        path: "search",
        element: <SearchRestaurants />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
