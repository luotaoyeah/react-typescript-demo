/*
 * Hooks API Reference
 *     useCallback
 */

import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

function F01(): React.ReactElement<{}> {
  const [count, setCount] = useState<number>(0);

  /*
   * 对于内联函数来说，默认情况下，每次 render 之后都会创建一个新的内联函数，
   * 当某个地方需要根据该内联函数是否发生变更（即是否是重新创建的内联函数），来执行某些操作时，
   * 由于每次 render 之后都会创建新的内联函数，因此每次 render 之后该操作都会执行
   */

  /*
   * 如下，cb 是一个内联函数，每次 render 之后，cb 都是指向一个新的内联函数，
   * 而 useEffect() 依赖于 cb 是否发生变更，
   * 因此每次 render 之后，useEffect() 都会执行
   */
  const cb = () => {}; // tslint:disable-line:no-empty

  useEffect(() => {
    console.log('ODD:', count);
  }, [cb]);

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

function C04070501() {
  return (
    <div>
      <F01 />
    </div>
  );
}

export { C04070501 };
