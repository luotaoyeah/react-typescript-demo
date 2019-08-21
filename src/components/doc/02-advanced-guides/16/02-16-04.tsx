/*
 * https://reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components
 */

import React from 'react';
import { Button, Divider } from 'antd';

/*
 * 如果父组件要通过 ref 引用子组件的子组件, 则需要使用 React.forwardRef() 方法对子组件进行包装, 将 ref 传递下去
 */
const C021604A = React.forwardRef((props: {}, ref?: React.Ref<HTMLInputElement>) => (
  <input
    ref={ref}
    type="text"
    style={{
      outline: 'none',
      borderRadius: '3px',
      padding: '2px 8px',
    }}
  />
));

class C021604 extends React.Component {
  public ref01: React.RefObject<HTMLInputElement>;

  public constructor(props: {}) {
    super(props);

    this.ref01 = React.createRef<HTMLInputElement>();

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    if (this.ref01.current) {
      this.ref01.current.focus();
    }
  }

  /*
   * 如下, <C021604A> 组件上绑定的 ref 不再是组件实例, 而是组件内部的 <input> 元素的 DOM 对象
   */
  public render() {
    return (
      <div>
        <C021604A ref={this.ref01} />
        <Divider />
        <Button onClick={this.handleClick}>FOCUS</Button>
      </div>
    );
  }
}

export { C021604 };
