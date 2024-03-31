import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router/router";
import "./index.css";
import "./internationalization/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
