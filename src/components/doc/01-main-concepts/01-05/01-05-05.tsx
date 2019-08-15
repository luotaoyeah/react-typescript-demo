/*
 * State and Lifecycle: Using State Correctly
 */

import React from 'react';

interface IState {
  name: string;
  age: number;
}

class C010505 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { name: 'foo', age: 0 };
  }

  /*
   * 除了在 constructor 中初始化 state 对象之外，
   * 在其他地方，不应该直接对 state 对象的属性进行赋值，
   * 如：this.state.name = "bar";
   *
   * 如果要重新渲染组件，必须使用 setState() 方法；
   */

  public componentDidMount() {
    /*
     * 由于性能原因，react 可能会对多次 setState() 调用，
     * 只执行一次组件更新，这时候的 setState() 就是异步的；
     */
    this.setState({ age: 1 });
    /*
     * 此时 this.state.count 的值依然还是 0；
     */
    const { age } = this.state;
    console.log('this.state.count', age);

    /*
     * 如果需要保证 state 的值完成更新，需要使用回到函数参数；
     */
    this.setState((prevState: Readonly<IState>, props: Readonly<{}>) => ({ age: age + 1 }));

    /*
     * 在调用 setState() 方法更新数据时，react 会将参数对象的属性，
     * 合并到当前 state 对象中去，并且使用的是 shallow 合并；
     * 如下：此时 this.state.age 属性不受影响，只会更新 name 属性的值；
     */
    // eslint-disable-next-line react/no-unused-state
    this.setState({ name: 'bar' });
  }

  public render(): React.ReactNode {
    return <div />;
  }
}

export { C010505 };
