/*
 * State and Lifecycle: Adding Local State to a Class
 */

import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IClockProps {}

interface IClockState {
  date: Date;
}

class Clock extends React.Component<IClockProps, IClockState> {
  /*
   * 在 constructor 中需要始终调用父类的 constructor：super(props)，
   * 同时，在 constructor 中初始化 state 的数据；
   */
  public constructor(props: IClockProps) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  public render(): React.ReactNode {
    const { date } = this.state;
    return <p>{date.toISOString()}</p>;
  }
}

function C010503(): React.ReactNode {
  return (
    <div>
      <Clock />
    </div>
  );
}

export { C010503 };
