import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";

describe("src/components/App.tsx", () => {
  it("should create", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
