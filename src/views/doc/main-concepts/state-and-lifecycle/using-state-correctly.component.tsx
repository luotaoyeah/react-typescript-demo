// https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly

import * as React from "react";

interface IProps {}

interface IState {
  name: string;
  age: number;
}

class UsingStateCorrectlyComponent extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);

    // 只能在 constructor 中直接对 state 进行赋值,
    // 在其他地方需要使用 `setState()` 方法进行更新
    this.state = { name: "foo", age: 0 };
  }

  public componentDidMount() {
    // 由于性能原因, 可能会对 `setState()` 的多次调用, 只执行一次重新渲染,
    // 这时候的 `setState()` 就是异步执行的
    this.setState({ age: 1 });
    console.assert(this.state.age === 0);

    // 如果需要保证 state 的值完成更新, 需要使用函数参数形式
    this.setState(
      (prevState: Readonly<IState>, props: Readonly<IProps>) => {
        // 此时可以保证, 前面所有对 `setState()` 的调用都已经执行完毕,
        // 并且 state 数据已经完成更新
        return { age: prevState.age + 1 };
      },
      () => {
        console.assert(this.state.age === 2);
      },
    );

    // `setState()` 会对 state 进行 shallow merge
    this.setState({ name: "bar" });
  }

  public render() {
    return (
      <div>
        <div>name: {this.state.name}</div>
        <div>age: {this.state.age}</div>
      </div>
    );
  }
}

export { UsingStateCorrectlyComponent };
