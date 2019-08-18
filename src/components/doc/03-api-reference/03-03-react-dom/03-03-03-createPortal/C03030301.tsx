/*
 * ReactDOM
 *     Reference
 *         ReactDOM.createPortal()
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

/*
 * ReactDOM.createPortal() 方法，提供一种特殊的创建下级元素的方式，
 *     普通的下级元素，在 DOM 结构上也必须是父子关系，
 *     而通过 createPortal() 创建的下级组件，在 DOM 结构上，
 *         可以位于其他任意位置，并不需要跟上级组件有父子关系，
 * 即：
 *     在 react 组件的角度上，它们还是父子关系，
 *     但是在 DOM 结构的角度上，它们没有直接的父子关系
 */
function C03030301() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return <div>{ReactDOM.createPortal(<Button>PORTAL</Button>, document.getElementById('root02')!)}</div>;
}

export { C03030301 };
