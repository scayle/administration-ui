import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@rmwc/theme";

import "@rmwc/theme/styles";
import "./style/index.scss";
import ResponsiveTheme from "./components/responsiveTheme";

ReactDOM.render(
  <React.StrictMode>
    <ResponsiveTheme>
      <ThemeProvider options={{}}>
        <App />
      </ThemeProvider>
    </ResponsiveTheme>
  </React.StrictMode>,
  document.getElementById("root")
);
