/*
 * https://reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-class-component
 */

import React from 'react';
import { Button, Divider, Input } from 'antd';

class C021603 extends React.Component {
  private readonly ref01: React.RefObject<Input>;

  public constructor(props: {}) {
    super(props);

    this.ref01 = React.createRef<Input>();

    this.handleClick = this.handleClick.bind(this);
  }

  /*
   * 如果 ref 设置在一个组件上, 则 React.RefObject.current 属性表示该组件的实例
   */
  public handleClick() {
    const vm = this;
    if (vm.ref01.current) {
      vm.ref01.current.focus();
    }
  }

  public render() {
    return (
      <div>
        <Input ref={this.ref01} />
        <Divider />
        <Button onClick={this.handleClick}>FOCUS</Button>
      </div>
    );
  }
}

export { C021603 };
