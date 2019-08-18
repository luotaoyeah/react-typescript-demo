/*
 * Context: Forwarding Refs to Context Consumers
 */

import React from 'react';
import { Button } from 'antd';
import ColorInput from './ColorInput';

class C020309 extends React.Component {
  private inputRef = React.createRef<any>();

  public constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.inputRef.current!.focus();
  }

  public render() {
    return (
      <div>
        <ColorInput ref={this.inputRef} />
        <Button onClick={this.handleClick}>focus</Button>
      </div>
    );
  }
}

export { C020309 };
