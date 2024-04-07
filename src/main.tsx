import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router/router";
import "./index.css";
import "./internationalization/i18n";

const root = document.getElementById("root");

if (!root) {
    throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
