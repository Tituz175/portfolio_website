import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App";

import ThemeProvider from "../context/ThemeProvider";
import SiteContentProvider from "../context/SiteContentProvider";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <SiteContentProvider>
        <App />
      </SiteContentProvider>
    </ThemeProvider>
  </React.StrictMode>
);
