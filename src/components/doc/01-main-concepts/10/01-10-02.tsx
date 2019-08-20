/*
 * https://reactjs.org/docs/lifting-state-up.html#lessons-learned
 */

import React from 'react';

/*
 * 通常这样规划组件的状态数据:
 *     1. 首先将数据定义在 state 中
 *     2. 如果数据需要跟其他组件共享, 则将数据提升到上级组件中, 并通过 props 传入
 */

function C011002() {
  return <div />;
}

export { C011002 };
