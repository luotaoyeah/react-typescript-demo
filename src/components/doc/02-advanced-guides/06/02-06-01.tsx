/*
 * https://reactjs.org/docs/fragments.html
 */

import React from 'react';

function C020601() {
  /*
   * React.Fragment 是一个特殊的组件, 用来将多个组件包裹为一个整体, 并且不会引入额外的 DOM 标签
   */
  const list01 = (
    <React.Fragment>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </React.Fragment>
  );

  /*
   * <React.Fragment></React.Fragment> 的简写形式为 <></>
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
        {list02}
      </ul>
    </div>
  );
}

export { C020601 };
