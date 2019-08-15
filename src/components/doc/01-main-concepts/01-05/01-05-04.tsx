/*
 * State and Lifecycle: Adding Lifecycle Methods to a Class
 */

import React from 'react';

interface IState {
  date: Date;
}

class Clock extends React.Component<{}, IState> {
  /*
   * this.props 和 this.state 分别用于外部参数和内部状态数据，
   * 除此之外，可以在组件中任意添加其他的属性，用于组件的业务逻辑；
   */
  public timerID!: number;

  public constructor(props: {}) {
    super(props);
    this.state = { date: new Date() };
  }

  /*
   * 组件在挂载到 DOM 节点之后，会触发 componentDidMount() 钩子函数；
   */
  public componentDidMount(): void {
    this.timerID = window.setInterval(() => {
      this.tick();
    }, 1000);
  }

  /**
   * 组件在从 DOM 节点移除之前，会触发 componentWillUnmount() 钩子函数；
   */
  public componentWillUnmount(): void {
    window.clearInterval(this.timerID);
  }

  public tick() {
    /*
     * 通过 React.Component.setState() 方法，
     * 更新组件的状态数据，使得组件调用 render() 方法重新渲染；
     */
    this.setState({
      date: new Date(),
    });
  }

  public render(): React.ReactNode {
    const { date } = this.state;
    return <div>{date.toISOString()}</div>;
  }
}

function C010504(): React.ReactNode {
  return (
    <div>
      <Clock />
    </div>
  );
}

export { C010504 };