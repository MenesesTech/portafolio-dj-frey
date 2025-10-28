import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <WhatsAppButton />
    </BrowserRouter>
  </StrictMode>
);
