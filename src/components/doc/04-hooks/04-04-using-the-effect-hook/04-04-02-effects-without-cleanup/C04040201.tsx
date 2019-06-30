/*
 * Using the Effect Hook
 *     Effects Without Cleanup
 *         Example Using Classes
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 有些 side effects 不需要进行资源清理，比如：网络请求，日志，DOM操作等，
 * 在 class 组件的 render() 方法中，不应该包含 side effects 操作，
 * 通常应该在 componentDidMount() 和 componentDidUpdate() 声明周期函数中使用 side effects 操纵，
 * 如果某个操作需要在每次 render 之后都执行，即包括首次加载，
 * 则需要同时在 componentDidMount() 和 componentDidUpdate() 方法里面执行
 */

class C01 extends React.Component<{}, { count: number }> {
  constructor(props: {}, context: any) {
    super(props, context);
    this.state = { count: 0 };
  }

  componentDidMount(): void {
    document.title = String(this.state.count);
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{ count: number }>,
    snapshot?: any,
  ): void {
    document.title = String(this.state.count);
  }

  public render(): React.ReactNode {
    return (
      <Button
        onClick={() => {
          this.setState((prevState: Readonly<{ count: number }>) => {
            return {
              count: prevState.count + 1,
            };
          });
        }}
      >
        {this.state.count}
      </Button>
    );
  }
}

class C04040201 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        <C01 />
      </div>
    );
  }
}

export { C04040201 };
