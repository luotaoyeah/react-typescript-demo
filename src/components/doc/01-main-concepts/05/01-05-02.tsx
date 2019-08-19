/*
 * https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class
 */

import React from 'react';

/*
 * 在 class component 中, 可以使用 state 特性,
 *   props 是外部传入组件的属性
 *   state 是在组件内部定义的状态属性
 */

interface IProps {
  date: Date;
}

// eslint-disable-next-line react/prefer-stateless-function
class C010502A extends React.Component<IProps> {
  public render() {
    const { date } = this.props;
    return <div>{date.toISOString()}</div>;
  }
}

function C010502() {
  return <C010502A date={new Date()} />;
}

export { C010502 };
