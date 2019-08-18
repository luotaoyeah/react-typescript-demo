/*
 * Hooks at a Glance
 *     Rules of Hooks
 */

import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

/*
 * hook 本质上就是一个 function
 * 但是使用它时，必须遵守一些规定：
 *     1. 只能在 function 组件中使用
 *     2. 只能在 function 组件中的最顶层使用，不能在循环，条件语句，嵌套函数中使用
 */
function F01(): React.ReactElement<{}> {
  const [count, setCount] = useState<number>(0);

  /*
   * 如下，在循环中使用 useEffect() 是错误的用法
   */
  [1, 2, 3].forEach((i: number) => {
    useEffect(() => {
      console.log(i, count);
    });
  });

  return (
    <Button
      onClick={() => {
        setCount((prevCount: number) => prevCount + 1);
      }}
    >
      {count}
    </Button>
  );
}

function C04020301() {
  return (
    <div>
      <F01 />
    </div>
  );
}

export { C04020301 };
