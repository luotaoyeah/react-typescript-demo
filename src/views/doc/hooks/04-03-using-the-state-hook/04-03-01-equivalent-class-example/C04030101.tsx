/*
 * Using the State Hook
 *     Equivalent Class Example
 */

import React, { useState } from "react";
import { Button, Divider } from "antd";

/**
 *
 */
function F01(): React.ReactElement<{}> {
  const [count, SetCount] = useState<number>(0);

  return (
    <Button
      onClick={() => {
        SetCount((prevCount: number) => prevCount + 1);
      }}
    >
      {count}
    </Button>
  );
}

/**
 * 下面的 class 组件 C01 和上面的 function 组件 F01 是等价的
 */
class C01 extends React.Component<{}, { count: number }> {
  constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      count: 0,
    };
  }

  public render() {
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

class C04030101 extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <F01 />
        <Divider />
        <C01 />
      </div>
    );
  }
}

export { C04030101 };
