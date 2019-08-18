/*
 * Hooks API Reference
 *     useState
 *         Lazy initialization
 */

import React, { useState } from 'react';
import { Button } from 'antd';

function F01(): React.ReactElement<{}> {
  /*
   * useState() 函数的参数，即 state 的初始值，可以是一个函数，
   * 该函数只会在首次渲染的时候执行
   */
  const [count, setCount] = useState<number>(() => 0);

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

function C04070102() {
  return (
    <div>
      <F01 />
    </div>
  );
}

export { C04070102 };
