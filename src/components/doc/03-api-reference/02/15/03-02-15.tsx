/*
 * https://reactjs.org/docs/react-component.html#displayname
 */

import React from 'react';
import { Button } from 'antd';

// eslint-disable-next-line react/prefer-stateless-function
class C030215A extends React.Component {
  /*
   * 默认情况下, function component 在 devtools 中显示的名称为该 function 的 name 属性,
   * class component 在 devtools 中显示的名称为该 class 的 name 属性,
   * 可以通过组件的静态属性 displayName 来修改组件在 devtools 中显示的名称, 方便调试
   */
  public static displayName: string = `${C030215A.name}-CUSTOM`;

  public render() {
    /*
     * 在 HOC 中通常需要指定 displayName 属性
     */
    const C030215B = (C01 =>
      // eslint-disable-next-line react/prefer-stateless-function,implicit-arrow-linebreak
      class extends React.Component {
        public static displayName: string = `C030215B(${C01.name})`;

        public render() {
          return <C01 {...this.props} style={{ color: 'red' }} />;
        }
      })(Button);

    return <C030215B>C030215A</C030215B>;
  }
}

function C030215() {
  return <C030215A />;
}

export { C030215 };
