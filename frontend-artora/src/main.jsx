import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import AuthProvider from "@/context/AuthProvider";
import VisitUserProvider from "@/context/VisitUserProvider";
import CartProvider from "@/context/CartProvider";
import { initData } from "./lib/initData.js";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";

initData();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VisitUserProvider>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <ScrollToTop />
            <App />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </VisitUserProvider>
  </StrictMode>,
);
