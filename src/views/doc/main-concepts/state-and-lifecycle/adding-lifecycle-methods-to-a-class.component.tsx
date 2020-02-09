// https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class

import React from 'react';

interface IProps {}

interface IState {
  date: Date;
}

class Clock extends React.Component<IProps, IState> {
  private timerID: number | null = null;

  public constructor(props: IProps) {
    super(props);

    this.state = { date: new Date() };
  }

  /**
   * 组件在挂载到 DOM 节点之后, 会触发 `componentDidMount()` 生命周期函数
   */
  public componentDidMount(): void {
    this.timerID = window.setInterval(() => {
      this.tick();
    }, 1000);
  }

  /**
   * 组件从 DOM 节点移除之前, 会触发 `componentWillUnmount()` 生命周期函数
   */
  public componentWillUnmount(): void {
    if (this.timerID) {
      window.clearInterval(this.timerID);
      this.timerID = null;
    }
  }

  private tick() {
    /*
     * 通过 `React.Component.setState()` 方法,
     * 更新组件的 state 数据, 使得组件调用 `render()` 方法重新渲染
     */
    this.setState({
      date: new Date(),
    });
  }

  public render() {
    return <div>{this.state.date.toISOString()}</div>;
  }
}

class AddingLifecycleMethodsToAClassComponent extends React.Component {
  public render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

export { AddingLifecycleMethodsToAClassComponent };
