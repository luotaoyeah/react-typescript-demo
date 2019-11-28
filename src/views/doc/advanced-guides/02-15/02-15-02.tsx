/*
 * Refs and the DOM
 *     Adding a Ref to a DOM Element
 */

import React from "react";
import { Button, Divider } from "antd";

class C021502 extends React.Component {
  inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.inputRef = React.createRef<HTMLInputElement>();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const vm = this;
    /*
     * 如果 ref 设置在一个 HTML 标签上，
     * 则 ref 对象的 current 属性表示该 HTML 元素对象；
     * 这个设置 ref 的过程发生在 componentDidMount 和 componentDidUpdate 之前；
     */
    if (vm.inputRef.current) {
      vm.inputRef.current.focus();
    }
  }

  public render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <Divider />
        <Button onClick={this.handleClick}>focus</Button>
      </div>
    );
  }
}

export { C021502 };
