/*
 * Hooks at a Glance
 *     State Hook
 *         multiple declaration
 */

import React, { useState } from "react";
import { Button, Divider } from "antd";

function F01() {
  /*
   * 在同一个组件中，可以多次调用 useState() 函数，
   * 创建多个不同的 state 数据（以及其对应的更新函数）
   */
  const [count, setCount] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const [sequence, setSequence] = useState<string>("react");

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
          setDate(new Date());
        }}
      >
        {date.toISOString()}
      </Button>
      <Divider />
      <Button
        onClick={() => {
          setSequence(Array.from(sequence).reverse().join(""));
        }}
      >
        {sequence}
      </Button>
    </div>
  );
}

class C04020102 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        <F01 />
      </div>
    );
  }
}

export { C04020102 };
