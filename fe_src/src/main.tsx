import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n"; // i18n 초기화
import "./styles/globals.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
