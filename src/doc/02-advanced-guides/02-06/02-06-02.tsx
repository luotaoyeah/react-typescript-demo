/*
 * Fragments: Motivation
 */

import * as React from "react";

class C020602 extends React.Component {
  render(): React.ReactNode {
    /*
     * 因为 render() 方法返回的必须是单个节点，
     * 所以如果要返回多个节点，必须用一个节点将所有的节点包裹起来，
     * 比如最外层使用 div 包裹，
     * 这种方式的问题在于，会产生多余的 div，导致某些 HTML 非法，
     * 如：<tbody><div><tr></tr><tr></tr></div></tbody>
     */

    const tds = (
      <>
        <td>D</td>
        <td>E</td>
      </>
    );

    return (
      <div>
        <table>
          <tbody>
            <tr>{tds}</tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export { C020602 };
