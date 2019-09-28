/*
 * Rules of Hooks
 *     Only Call Hooks at the Top Level
 *     Only Call Hooks from React Functions
 */

import React, { useEffect, useState } from "react";
import { Button } from "antd";

/*
 * hooks 必须遵守一些规则：
 *     1. 只能在 function 组件和 custom hook function 中，调用 hook 函数
 *     2. 只能在最顶层调用 hook 函数，不能在（循环，条件语句，嵌套函数）中调用
 */
function F01(): React.ReactElement<{}> {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = String(count);
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
}

class C04050101 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        <F01 />
      </div>
    );
  }
}

export { C04050101 };
