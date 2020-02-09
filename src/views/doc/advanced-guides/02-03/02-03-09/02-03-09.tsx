/*
 * Context: Forwarding Refs to Context Consumers
 */

import React from 'react';
import ColorInput from './ColorInput';
import { Button } from 'antd';

class C020309 extends React.Component {
  inputRef = React.createRef<any>();

  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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
