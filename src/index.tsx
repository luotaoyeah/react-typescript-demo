import * as React from "react";
import * as ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./assets/iconfont/iconfont.css";
import registerServiceWorker from "./components/registerServiceWorker";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
