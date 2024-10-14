import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/products",
    element: <App />,
  },
  {
    path: "/products/:id",
    element: <App />,
  },
  {
    path: "/products/cart",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
