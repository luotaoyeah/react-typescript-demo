/*
 * https://reactjs.org/docs/accessibility.html
 */

import React from 'react';
import { Button, Divider, Input } from 'antd';

class C020101 extends React.Component<{}, {}> {
  public ref01: React.RefObject<HTMLInputElement>;

  public ref02: React.RefObject<Input>;

  public constructor(props: {}) {
    super(props);

    /*
     * 创建一个 RefObject 对象, 并绑定到组件的 ref 属性, 然后通过该对象访问组件的实例对象或者 DOM 对象
     */
    this.ref01 = React.createRef<HTMLInputElement>();
    this.ref02 = React.createRef<Input>();

    this.handleClick01 = this.handleClick01.bind(this);
    this.handleClick02 = this.handleClick02.bind(this);
  }

  public handleClick01() {
    if (this.ref01.current) {
      this.ref01.current.focus();
    }
  }

  public handleClick02() {
    if (this.ref02.current) {
      this.ref02.current.focus();
    }
  }

  public render() {
    return (
      <div>
        {/* WAI-ARIA（Web Accessibility Initiative - Accessible Rich Internet Applications）定义了一系列的 HTML 属性, 以 aria- 开头,
            在 JSX 中, 这些属性依然使用 kebab-case 的命名方式, 如: aria-required="true" */}
        <input id="name" type="text" aria-required="true" />

        <input type="text" ref={this.ref01} />
        <Button onClick={this.handleClick01}>FOCUS</Button>

        <Divider></Divider>

        <Input ref={this.ref02}></Input>
        <Button onClick={this.handleClick02}>FOCUS</Button>
      </div>
    );
  }
}

export { C020101 };
