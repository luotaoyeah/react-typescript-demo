/*
 * Handling Events: Pass Arguments to Event Handlers
 */

import * as React from "react";
import { Button, message } from "antd";
import { MouseEvent } from "react";

interface IProps {}

interface IState {
  name: string;
}

class C010602 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: "tom"
    };
  }

  handleClick(age: number, e: MouseEvent) {
    message.info(`hello ${this.state.name} ${age}`);
  }

  render(): React.ReactNode {
    return (
      <div>
        {/*
         * 如果要往回调函数传递额外的参数，
         * 可以使用下面的方式；
         */}
        <Button onClick={this.handleClick.bind(this, 18)}>click</Button>
        {/*
                <Button
                  onClick={(e: MouseEvent) => {
                    this.handleClick(18, e);
                  }}
                >
                  click
                </Button>
        */}
      </div>
    );
  }
}

export { C010602 };
