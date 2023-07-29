import React from "react";
import ReactDOM from "react-dom";
import Providers from "./providers";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
