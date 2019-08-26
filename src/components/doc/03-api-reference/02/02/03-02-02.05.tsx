/*
 * https://reactjs.org/docs/react-component.html#render
 */

import React from 'react';

/*
 * render() 方法可以返回: string / number,
 * 对应于 DOM 中的文本节点
 */
class C03020205A extends React.Component {
  public render() {
    return [9, 'FOO'];
  }
}

function C03020205() {
  return <C03020205A />;
}

export { C03020205 };
