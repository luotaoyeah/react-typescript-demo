/*
 * Lifting State Up: Lessons Learned
 */

import React from 'react';

/*
 * 通常这样规划组件的状态数据：
 *     1. 首先将数据定义在 state 中；
 *     2. 如果数据需要跟其他组件共享，则将数据提升到父组件中，
 *        并通过 props 传入；
 */
interface IProps {}

interface IState {}

class C011002 extends React.Component<IProps, IState> {
  public render(): React.ReactNode {
    return <div />;
  }
}

export { C011002 };
