/*
 * Handling Events: Pass Arguments to Event Handlers
 */

import { Button, message } from 'antd';
import React, { MouseEvent } from 'react';

interface IState {
  name: string;
}

class C010602 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      name: 'tom',
    };
  }

  public handleClick(age: number, e: MouseEvent) {
    const { name } = this.state;
    message.info(`hello ${name} ${age}`);
  }

  public render() {
    return (
      <div>
        {/*
         * 如果要往回调函数传递额外的参数，
         * 可以使用下面的方式；
         */}
        {/* eslint-disable-next-line react/jsx-no-bind */}
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
