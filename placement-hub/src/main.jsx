


// src/main.jsx — ADD HelmetProvider wrapper around your existing <App />
//
// Only the import + wrapper changes. Everything else in your current
// main.jsx (createRoot, StrictMode, BrowserRouter if you have it there
// instead of in App.jsx, etc.) stays exactly the same — just wrap with
// HelmetProvider so every Seo component in the tree can write to <head>.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./styles/global.css"; // keep your existing import path/order as-is
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
    <Analytics />
  </StrictMode>
);