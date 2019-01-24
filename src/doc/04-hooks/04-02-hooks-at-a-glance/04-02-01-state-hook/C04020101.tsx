/*
 * Hooks at a Glance
 *     State Hook
 */

import React, { useState } from "react";
import { Button, Divider } from "antd";

function H01() {
  /*
   * 这儿的 useState() 函数，就是一个 hook，
   * 它接收一个参数：初始状态数据，返回两个数据，分别是：
   *     1. state 数据，类似于 class 组件中的 this.state.xxx
   *     2. setXXX() 函数，用来更新对应的 state 数据
   */
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </Button>
      <Divider />
      <Button
        onClick={() => {
          setCount((prev: number) => {
            return prev + 2;
          });
        }}
      >
        {count}
      </Button>
    </div>
  );
}

class C04020101 extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <div>
        <H01 />
      </div>
    );
  }
}

export { C04020101 };
