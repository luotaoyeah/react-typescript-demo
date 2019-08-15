/*
 * Hooks at a Glance
 *     Effect Hook
 */

import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

/*
 * useEffect() 函数，是 react 内置的另外一个 hook
 * 用来替代 class 组件中的 lifecycle methods
 * 包括 componentDidMount，componentDidUpdate，componentWillUnmount
 */
function F01(): React.ReactElement<{}> {
  const [count, setCount] = useState<number>(0);

  /*
   * useEffect() 接收一个回调函数
   */
  useEffect(() => {
    document.title = String(count);
  });

  return (
    <div>
      <Button
        onClick={() => {
          setCount((prevCount: number) => prevCount + 1);
        }}
      >
        {count}
      </Button>
    </div>
  );
}

function C04020201(): React.ReactNode {
  return (
    <div>
      <F01 />
    </div>
  );
}

export { C04020201 };
