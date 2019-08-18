/*
 * React.Component
 *     Reference
 *         render()
 */

import React from 'react';

class A extends React.Component {
  /*
   * render() 方法可以返回 null 或者 true 或者 false，
   * 此时，页面上不会渲染任何内容，
   * 主要用在条件渲染：根据某个 expression 是否为 true，来决定是否渲染某个 element；
   */
  public render() {
    return [true, false, null];
  }
}

function C0302030106() {
  return (
    <div>
      <A />
    </div>
  );
}

export { C0302030106 };
