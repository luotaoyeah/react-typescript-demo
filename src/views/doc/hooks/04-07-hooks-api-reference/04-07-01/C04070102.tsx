/*
 * Hooks API Reference
 *     useState
 *         Lazy initialization
 */

import React, { useState } from "react";
import { Button } from "antd";

function F01(): React.ReactElement<{}> {
  /*
   * useState() 函数的参数，即 state 的初始值，可以是一个函数，
   * 该函数只会在首次渲染的时候执行
   */
  const [count, setCount] = useState<number>(() => {
    return 0;
  });

  return (
    <div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </Button>
    </div>
  );
}

// tslint:disable-next-line:max-classes-per-file
class C04070102 extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <F01 />
      </div>
    );
  }
}

export { C04070102 };
