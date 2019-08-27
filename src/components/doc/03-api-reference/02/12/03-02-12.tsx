/*
 * https://reactjs.org/docs/react-component.html#setstate
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  count: number;
}

class C030212A extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = { count: 0 };

    this.handleClick01 = this.handleClick01.bind(this);
    this.handleClick02 = this.handleClick02.bind(this);
    this.handleClick03 = this.handleClick03.bind(this);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
  public componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: any): void {
    const { count } = this.state;

    console.log(`${C030212A.name}.${this.componentDidUpdate.name}()`, count);
  }

  public handleClick01() {
    /*
     * setState() 方法, 用来更新 state 数据, 从而触发 render() 方法的调用, 从而更新组件界面,
     * 调用 setState() 方法之后, 并不一定会立即更新 state 数据, react 可能会将多次对 setState() 的调用合并为一次更新,
     * 如下, 连续调用三次 setState() 方法, 实际上只会更新 state 一次, 相当于只调用了一次: this.setState({ count: 3 })
     */
    this.setState({ count: 1 });
    this.setState({ count: 2 });
    this.setState({ count: 3 });
  }

  public handleClick02() {
    /*
     * 由于 setState() 调用之后不会立即更新 state 数据, 因此如果本次的调用需要保证上次的调用已经完成了对 state 数据的更新,
     * 则需要使用函数参数的形式来调用 setState() 方法, 保证本次拿到的 prevState 一定是前面所有的调用已经更新了 state 之后的数据,
     * 如下, 相当于只调用了一次: this.setState(prevState => ({ count: prevState.count + 3 }));
     */
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  public handleClick03() {
    /*
     * 如果需要在本次的调用成功更新了 state 数据之后执行代码, 可以使用 setState() 的第二个回调函数参数,
     * 或者使用 componentDidUpdate() 生命周期, 此时可以保证, 本次对 setState() 的调用已经成功更新了 state 数据
     */
    this.setState({ count: 4 }, () => {
      const { count } = this.state;
      console.assert(count === 4);
    });
  }

  public render() {
    const { count } = this.state;
    console.log(`${C030212A.name}.${this.render.name}()`, count);

    return (
      <>
        <Button onClick={this.handleClick01}>{count}</Button>
        <Button style={{ marginLeft: '10px' }} onClick={this.handleClick02}>
          {count}
        </Button>
        <Button style={{ marginLeft: '10px' }} onClick={this.handleClick03}>
          {count}
        </Button>
      </>
    );
  }
}

function C030212() {
  return <C030212A />;
}

export { C030212 };
