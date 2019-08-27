/*
 * https://reactjs.org/docs/react-component.html#componentdidmount
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  name: string;
}

class C03020402A extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      name: 'A',
    };
  }

  public componentDidMount(): void {
    /*
     * 在 componentDidMount() 中调用 setState() 方法, 会立即触发 render() 方法再次调用, 但是在浏览器中只会看到一次界面更新,
     * 通常, 当我们需要先获取到 DOM 信息, 然后再用 DOM 信息来初始化 state 数据的时候, 就可以这样操作
     */
    this.setState({
      name: 'B',
    });
  }

  public render() {
    const { name } = this.state;
    console.log(`${C03020402A.name}.render(): ${name}`);

    return <Button>{name}</Button>;
  }
}

function C03020402() {
  return <C03020402A />;
}

export { C03020402 };
