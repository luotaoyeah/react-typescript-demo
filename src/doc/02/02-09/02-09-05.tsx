/*
 * JSX In Depth:
 *     Children in JSX
 *         JSX Children
 */

import * as React from "react";

class C020905 extends React.Component {
  render(): React.ReactNode {
    /*
     * 类似 HTML，JSX 标签中间可以混合字符串和其他组件，
     */
    const el = (
      <span>
        hello
        <i>world</i>
      </span>
    );

    /*
     * render() 方法可以直接返回一个元素数组，
     * 而不需要使用标签将它们包裹起来，
     * 此时需要为每一个元素设置 key 属性；
     */
    return [<p key="a">{el}</p>, <p key="b">B</p>, <p key="c">C</p>];
  }
}

export { C020905 };
