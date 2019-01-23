/*
 * Introducing Hooks
 */

import React, { useState } from "react";
import { Button } from "antd";

/*
 * hooks 是 react 的一个新功能，它的作用是：
 *     在不使用 class 组件的情况下，使用 state 等特性
 *
 * 在 hooks 出现之前，如果要使用 state 等特性，
 * 必须使用 class 组件，不能使用 function 组件
 */

function H01() {
  const [count, setCount] = useState<number>(0);
  return <Button onClick={() => setCount(count + 1)}>{count}</Button>;
}

class C040101 extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <div>
        <H01 />
      </div>
    );
  }
}

export { C040101 };
