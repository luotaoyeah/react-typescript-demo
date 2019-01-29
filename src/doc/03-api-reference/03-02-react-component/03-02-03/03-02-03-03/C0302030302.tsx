/*
 * React.Component
 *     Reference
 *         componentDidMount()
 */

import React from "react";
import { Button } from "antd";

interface IProps {}

interface IState {
  name: string;
}

class A extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: "A"
    };
  }

  componentDidMount(): void {
    const vm = this;
    /*
     * 在 componentDidMount() 中调用 setState() 方法，会立即触发 render() 方法再次调用；
     * 一般在‘需要获取 DOM 节点信息来初始化相关数据’的情况下，才这样做；
     * 其他情况下没有必要，会造成性能问题；
     */
    vm.setState({
      name: "B"
    });
  }

  public render(): React.ReactNode {
    console.log(`render(): ${this.state.name}`);
    return <Button>{this.state.name}</Button>;
  }
}

class C0302030302 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <A />
      </div>
    );
  }
}

export { C0302030302 };
