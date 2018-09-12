/*
 * JSX In Depth:
 *     Children in JSX
 *         JavaScript Expressions as Children
 *         Functions as Children
 */

import * as React from "react";
import { Button, Divider } from "antd";

class A extends React.Component {
  render(): React.ReactNode {
    return <div>{(this.props.children as any)(9)}</div>;
  }
}

class C020906 extends React.Component {
  render(): React.ReactNode {
    const button = <Button>button</Button>;

    /*
     * 标签中间可以使用任意的 JS 表达式，跟 props 属性一样；
     */
    return (
      <div>
        {button}
        <Divider />
        {1 + 2 + 3}
        <Divider />
        {/*
          * 通常来讲，props.children 属性要么是字符串，要么是组件，
          * 即可以被 react 直接解析并渲染；
          * 但是跟其他的 props 一样，props.children 也可以是任意类型，包括函数，
          * 此时在组件中，需要在渲染前手动对 props.children 进行处理，
          * 使得 react 可以解析并渲染；
          */}
        <A>{(i: number) => i * i}</A>
      </div>
    );
  }
}

export { C020906 };
