/*
 * State and Lifecycle: Adding Local State to a Class
 */

import * as React from "react";

interface IClockProps {}

interface IClockState {
  date: Date;
}

class Clock extends React.Component<IClockProps, IClockState> {
  /*
   * 在 constructor 中需要始终调用父类的 constructor：super(props)，
   * 同时，在 constructor 中初始化 state 的数据；
   */
  constructor(props: IClockProps) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  public render(): React.ReactNode {
    return <p>{this.state.date.toISOString()}</p>;
  }
}

class C010503 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

export { C010503 };
