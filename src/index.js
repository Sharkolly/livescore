import React from "react";
import ReactDOM from "react-dom/client";
import "./General.css";
import AppStore from "./Components/Store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppStore/>
  </React.StrictMode>
);