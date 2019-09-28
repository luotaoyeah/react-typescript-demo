/*
 * Components and Props：Functional and Class Components
 */

import * as React from "react";

/*
 * 从概念上来讲，组件（component）类似 JS 里面的函数，
 * 接收一定的输入（props），然后返回 react 元素；
 */

/**
 * 最简单的组件就是一个函数，接受一个 props 对象作为参数，返回 react 元素，
 * 这种组件称之为 functional 组件；
 *
 * @param props
 * @constructor
 */
function C010401A(props: { name: string }) {
  return <h3>{props.name}</h3>;
}

/**
 * 也可以使用 class 来定义一个组件；
 */
class C010401B extends React.Component<{ name: string }> {
  public render(): React.ReactNode {
    return <h3>{this.props.name}</h3>;
  }
}

class C010401 extends React.Component {
  public render(): React.ReactNode {
    return (
      <p>
        <C010401A name={"luotao"} />
        <C010401B name={"luotao"} />
      </p>
    );
  }
}

export { C010401 };
