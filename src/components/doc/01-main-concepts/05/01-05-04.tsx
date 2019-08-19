/*
 * https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class
 */

import React from 'react';

interface IState {
  date: Date;
}

class C010504A extends React.Component<{}, IState> {
  /*
   * props 表示从组件外部传入的属性参数,
   * state 表示在组件内部定义的状态属性, 通常用于界面显示
   *
   * 除此之外, 可以在 class component 中定义其他的字段, 用于组件的业务逻辑
   */
  public timerID: number | null = null;

  public constructor(props: {}) {
    super(props);

    this.state = { date: new Date() };
  }

  /**
   * 组件在挂载到 DOM 节点之后, 会触发 componentDidMount() 函数
   */
  public componentDidMount(): void {
    this.timerID = window.setInterval(() => {
      /*
       * 通过 setState() 方法, 更新 state 中的某些属性, 使得组件调用 render() 方法重新渲染界面
       */
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  /**
   * 组件在从 DOM 节点卸载之前, 会触发 componentWillUnmount() 函数
   */
  public componentWillUnmount(): void {
    if (this.timerID) {
      window.clearInterval(this.timerID);
    }
  }

  public render() {
    const { date } = this.state;
    return <div>{date.toISOString()}</div>;
  }
}

function C010504() {
  return <C010504A />;
}

export { C010504 };
