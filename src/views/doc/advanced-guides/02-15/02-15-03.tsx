/*
 * Refs and the DOM
 *     Adding a Ref to a Class Component
 */

import React from "react";
import { Button, Divider, Input } from "antd";

class C021503 extends React.Component {
  inputRef: React.RefObject<Input>;

  constructor(props: any) {
    super(props);
    this.inputRef = React.createRef<Input>();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const vm = this;
    /*
     * 如果 ref 设置在一个自定义组件上，
     * 则 React.RefObject.current 属性表示该组件的实例对象；
     */
    if (vm.inputRef.current) {
      vm.inputRef.current.focus();
    }
  }

  public render() {
    return (
      <div>
        <Input ref={this.inputRef} style={{ width: "200px" }} />
        <Divider />
        <Button onClick={this.handleClick}>focus</Button>
      </div>
    );
  }
}

export { C021503 };
