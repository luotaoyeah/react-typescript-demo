/*
 * https://reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-dom-element
 */

import React from 'react';
import { Button, Divider } from 'antd';

class C021602 extends React.Component {
  private readonly ref01: React.RefObject<HTMLInputElement>;

  public constructor(props: {}) {
    super(props);

    this.ref01 = React.createRef<HTMLInputElement>();

    this.handleClick = this.handleClick.bind(this);
  }

  /*
   * 如果 ref 设置在一个 HTML 标签上, 则 React.RefObject.current 属性表示该 DOM 对象,
   * 这个设置 ref 的过程发生在 componentDidMount 和 componentDidUpdate 之前
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
        <input
          type="text"
          ref={this.ref01}
          style={{
            outline: 'none',
            borderRadius: '3px',
            padding: '2px',
          }}
        />

        <Divider />

        <Button onClick={this.handleClick}>FOCUS</Button>
      </div>
    );
  }
}

export { C021602 };
