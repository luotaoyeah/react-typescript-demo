// https://reactjs.org/docs/rendering-elements.html#rendering-an-element-into-the-dom

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, Divider } from "antd";
import { Bind } from "lodash-decorators";

/**
 * 使用 `ReactDOM.render()` 方法, 将一个 element 挂载到 DOM 中去
 */
export class RenderingAnElementIntoTheDom extends React.Component {
  @Bind()
  private handleClick() {
    ReactDOM.render(<span>{Date.now()}</span>, document.getElementById("rendering-an-element-into-the-dom-01"));
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>
          <pre>ReactDOM.render()</pre>
        </Button>

        <Divider />

        <div
          id={"rendering-an-element-into-the-dom-01"}
          style={{ border: "1px solid red", borderRadius: "3px", padding: "10px" }}
        />
      </div>
    );
  }
}
