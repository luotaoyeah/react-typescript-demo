/*
 * https://reactjs.org/docs/react-component.html#componentdidmount
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  name: string;
}

class A extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      name: 'A',
    };
  }

  public componentDidMount(): void {
    const vm = this;
    /*
     * 在 componentDidMount() 中调用 setState() 方法，会立即触发 render() 方法再次调用；
     * 一般在‘需要获取 DOM 节点信息来初始化相关数据’的情况下，才这样做；
     * 其他情况下没有必要，会造成性能问题；
     */
    vm.setState({
      name: 'B',
    });
  }

  public render() {
    const { name } = this.state;
    console.log(`render(): ${name}`);
    return <Button>{name}</Button>;
  }
}

function C0302030302() {
  return (
    <div>
      <A />
    </div>
  );
}

export { C0302030302 };
