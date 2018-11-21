/*
 * JSX In Depth
 */

import * as React from "react";
import { Button, Divider, message } from "antd";

/*
 * JSX 实际上只是 React.createElement() 方法的语法糖；
 */
class C020901 extends React.Component {
  constructor(props: any, context: any) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    message.success("hello");
  }

  render(): React.ReactNode {
    const button01 = (
      <Button type={"primary"} onClick={this.handleClick}>
        button
      </Button>
    );

    const button02 = React.createElement(
      Button as any,
      {
        type: "primary",
        onClick: this.handleClick
      },
      "button"
    );

    return (
      <div>
        {button01}
        <Divider />
        {button02}
      </div>
    );
  }
}

export { C020901 };
