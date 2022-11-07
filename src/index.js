import React from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App";
import GlobalContextProvider from "./contextapi/GlobalContext";
createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);
