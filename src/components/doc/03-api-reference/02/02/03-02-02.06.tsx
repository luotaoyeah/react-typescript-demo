/*
 * https://reactjs.org/docs/react-component.html#render
 */

import React from 'react';

/*
 * render() 方法可以返回: null / undefined / true / false
 * 此时, 组件不会渲染内容, 主要用于条件渲染
 */
class C03020206A extends React.Component {
  public render() {
    return [null, undefined, true, false];
  }
}

function C03020206() {
  return <C03020206A />;
}

export { C03020206 };
