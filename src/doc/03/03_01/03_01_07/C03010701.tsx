/*
 * React Top-Level API
 *     Reference
 *         React.Fragment
 */

import React from "react";

/*
 *
 */
class C03010701 extends React.Component {
  render(): React.ReactNode {
    /*
     * React.Fragment 是一种特殊的组件，
     * 用于将多个组件包裹成一个整体，并且不会引入额外的 DOM 标签；
     */

    const list01 = (
      <React.Fragment>
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </React.Fragment>
    );

    /*
     * 可以使用简写形式（<></>）；
     */
    const list02 = (
      <>
        <li>D</li>
        <li>E</li>
      </>
    );

    return (
      <div>
        <ul>
          {list01}
          <li>X</li>
          {list02}
        </ul>
      </div>
    );
  }
}

export { C03010701 };
