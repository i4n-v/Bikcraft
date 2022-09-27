import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/global.css";
import "./assets/styles/colors.css";
import "./assets/styles/typographies.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
