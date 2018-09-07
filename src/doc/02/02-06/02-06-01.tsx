/*
 * Fragments
 */

import * as React from "react";

class C020601 extends React.Component {
  render(): React.ReactNode {
    /*
     * React.Fragment 是一种特殊的组件，
     * 用于将多个组件包裹为一个整体，但是却不会引入额外的 DOM 标签；
     */
    const lis = (
      <React.Fragment>
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </React.Fragment>
    );

    /*
     * 可以使用 React.Fragment 的简写形式：<></>
     */
    const lis02 = (
      <>
        <li>D</li>
        <li>E</li>
      </>
    );

    return (
      <div>
        <ul>
          {lis}
          {lis02}
        </ul>
      </div>
    );
  }
}

export { C020601 };
