/*
 * https://reactjs.org/docs/fragments.html#motivation
 */

import React from 'react';

function C020602() {
  /*
   * 因为 render() 方法返回的必须是单个节点, 所以如果要返回多个节点, 必须用一个父节点将所有的节点包裹起来, 比如最外层使用 div 包裹,
   * 这种方式的问题在于, 会产生一层多余的 div 标签, 导致某些 HTML 非法, 比如：<tbody><div><tr></tr><tr></tr></div></tbody>,
   * 使用 React.Fragment 组件来作为父节点, 就不会产生额外的标签
   */

  const tds = (
    <>
      <td>A</td>
      <td>B</td>
      <td>C</td>
    </>
  );

  return (
    <table>
      <tbody>
        <tr>{tds}</tr>
      </tbody>
    </table>
  );
}

export { C020602 };
