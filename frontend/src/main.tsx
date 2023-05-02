import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TokenContextProvider from "@/context/TokenContext";
import { Router } from "@/routes/Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenContextProvider>
        <Router />
      </TokenContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
