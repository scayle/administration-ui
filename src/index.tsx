import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Theme from "./components/theme";

// import "./style/theme/dark.scss";
import "./style/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Theme theme="default">
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
