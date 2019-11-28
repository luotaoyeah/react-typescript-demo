import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

describe("src/components/App.tsx", () => {
  it("should create", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
