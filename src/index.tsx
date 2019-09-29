import * as React from "react";
import * as ReactDOM from "react-dom";
import "./assets/iconfont/iconfont.css";
import "./assets/index.less";
import registerServiceWorker from "./register-service-worker";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root"),
);

registerServiceWorker();
