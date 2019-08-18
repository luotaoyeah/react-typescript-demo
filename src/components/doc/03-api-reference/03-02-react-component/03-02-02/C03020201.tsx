/*
 * React.Component
 *     The Component Lifecycle
 *         Mounting
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  num: number;
  msg: string;
}

/*
 * 在 mounting 阶段，react 组件的生命周期包括了下面4个函数的顺序执行：
 *     渲染阶段（Render Phase）：
 *         constructor()
 *         getDerivedStateFromProps()
 *         render()
 *     提交阶段（Commit Phase）：
 *         componentDidMount()
 */
class C03020201 extends React.Component<{}, IState> {
  public constructor(props: {}, context: any) {
    console.log('public constructor()');
    super(props, context);
    this.state = { num: 0, msg: 'hello' };
  }

  /**
   * getDerivedStateFromProps() 是一个静态方法，两个参数分别为：新的 props，旧的 state；
   * @param nextProps 新的 props
   * @param prevState 旧的 state
   */
  public static getDerivedStateFromProps(nextProps: Readonly<{}>, prevState: IState) {
    console.log('getDerivedStateFromProps()');
    return { num: prevState.num + 1 };
  }

  public componentDidMount(): void {
    console.log('public componentDidMount()');
  }

  public render() {
    const { msg, num } = this.state;
    console.log('render()');
    return (
      <div>
        <Button>{msg}</Button>
        <Button>{num}</Button>
      </div>
    );
  }
}

export { C03020201 };
