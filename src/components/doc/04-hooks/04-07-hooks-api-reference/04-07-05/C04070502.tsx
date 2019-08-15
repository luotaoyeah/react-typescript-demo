/*
 * Hooks API Reference
 *     useCallback
 */

import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'antd';

function F01(): React.ReactElement<{}> {
  const [count, setCount] = useState<number>(0);
  const [odd, setOdd] = useState<number>(0);

  /*
   * 使用 useCallback() 可以记忆某个内联函数，
   * 避免每次 render 之后都会创建新的内联函数
   */

  /*
   * useCallback() 接收两个参数：内联函数，数据列表，返回一个记忆化的（memoized）回调函数
   * 当数据列表中的某个数据发生变更时，回调函数才会发生变更，
   * 如下：当 odd 发生变更时，cb 才会变更，当 cb 发生变更时，useEffect() 才会调用
   */
  const cb = useCallback(() => {}, [odd]); // tslint:disable-line:no-empty

  useEffect(() => {
    console.log('ODD:', count);
  }, [cb]);

  return (
    <Button
      onClick={() => {
        const newCount = count + 1;
        setCount(newCount);
        if (newCount % 3 === 0) {
          setOdd(newCount);
        }
      }}
    >
      {count}
    </Button>
  );
}

function C04070501(): React.ReactNode {
  return (
    <div>
      <F01 />
    </div>
  );
}

export { C04070501 };
