/*
 * Using the State Hook
 *     What’s a Hook?
 */

import React, { useEffect, useState } from "react";
import { Button } from "antd";

/*
 * hooks 到底是什么？
 * 简单来说，hooks 就是一种特殊的 function，一般使用 useSomething 的形式命名，
 * hooks 的作用是：通过 hooks 在 function 组件中实现 class 组件的功能
 */

const H01 = (): React.ReactElement<{}> => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(count);
  });

  return (
    <Button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </Button>
  );
};

class C04030301 extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <div>
        <H01 />
      </div>
    );
  }
}

export { C04030301 };
