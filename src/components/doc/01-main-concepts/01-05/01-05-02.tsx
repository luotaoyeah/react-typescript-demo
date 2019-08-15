/*
 * State and Lifecycle: Converting a Function to a Class
 */

import React from 'react';

function Clock01({ date }: { date: Date }) {
  return <p>{date.toISOString()}</p>;
}

// eslint-disable-next-line react/prefer-stateless-function
class Clock02 extends React.Component<{ date: Date }> {
  /*
   * 只要组件渲染到的 DOM 节点保持不变，
   * 则组件的实例也不会变，
   * 每次在需要更新组件的时候，就会调用 render() 方法；
   */
  public render(): React.ReactNode {
    const { date } = this.props;
    return <p>{date.toISOString()}</p>;
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class C010502 extends React.Component {
  public render(): React.ReactNode {
    const date = new Date();

    return (
      <div>
        <Clock01 date={date} />
        <Clock02 date={date} />
      </div>
    );
  }
}

export { C010502 };
