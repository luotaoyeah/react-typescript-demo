// https://reactjs.org/docs/introducing-jsx.html#jsx-is-an-expression-too

import * as React from "react";
import { Divider } from "antd";

/**
 * JSX 本身也是表达式
 */
class JsxIsAnExpressionTooComponent extends React.Component {
  private getContent(multi: boolean): React.ReactNode {
    if (multi) {
      return [1, 2, 3].map((i) => <p key={i}>{i}</p>);
    } else {
      return <div>{multi.toString()}</div>;
    }
  }

  public render() {
    return (
      <div>
        <div>{this.getContent(true)}</div>
        <Divider />
        <div>{this.getContent(false)}</div>
      </div>
    );
  }
}

export { JsxIsAnExpressionTooComponent };
