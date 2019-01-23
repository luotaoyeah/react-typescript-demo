import * as React from "react";
import * as ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./assets/iconfont/iconfont.css";
import "./assets/index.css";
import registerServiceWorker from "./components/registerServiceWorker";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
