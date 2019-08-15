/*
 * Hooks API Reference
 *     useEffect
 *         Conditionally firing an effect
 */

import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

/*
 * 默认情况下，在每次 render 之后，所有的 useEffect() 都会执行一次，
 * 如果需要根据某个数据是否变更，来决定是否需要执行某个 useEffect()，
 * 可以传递 useEffect() 函数的第二个参数，该参数是一个数组，
 * 当数组中的所有元素都没有变更时，则本次 render 之后，该 useEffect() 不会执行
 */

function F01(): React.ReactElement<{}> {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log('A');
  });

  /*
   * 当第二个参数是一个空数组（[]）时，
   * 该 useEffect() 只会在首次 render 时执行，
   * 同时在组件 unmount 时执行一次 clean 函数
   */
  useEffect(() => {
    console.log('B');
  }, []);

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

// tslint:disable-next-line:max-classes-per-file
function C04070204(): React.ReactNode {
  return (
    <div>
      <F01 />
    </div>
  );
}

export { C04070204 };
