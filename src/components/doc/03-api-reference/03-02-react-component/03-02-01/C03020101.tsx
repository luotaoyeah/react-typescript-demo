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
function C03020101() {
  return <div />;
}

export { C03020101 };
