/*
 * React.Component
 *     Overview
 */

import React from 'react';

/*
 * 在 react 中定义组件有两种方式：class 和 function，
 * class 组件必须继承 React.Component 类；
 */

/*
 * 最佳实践：通过组合（composition）的方式实现代码复用，而不是通过继承（inheritance）来实现；
 */
class C03020101 extends React.Component {
  /*
   * render() 方法是 class 组件中必须实现的一个方法；
   */
  public render(): React.ReactNode {
    return <div />;
  }
}

export { C03020101 };
