/*
 * Context: Forwarding Refs to Context Consumers
 */

import * as React from "react";
import ColorInput from "./ColorInput";
import { Button } from "antd";

class C020309 extends React.Component {
  refInput: React.RefObject<any> = React.createRef();

  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.refInput.current!.focus();
  }

  render(): React.ReactNode {
    return (
      <div>
        <ColorInput ref={this.refInput} />
        <Button onClick={this.handleClick}>focus</Button>
      </div>
    );
  }
}

export { C020309 };
