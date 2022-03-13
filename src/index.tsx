import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SizeProvider from "./context/SizeProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <SizeProvider>
      <App />
    </SizeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
