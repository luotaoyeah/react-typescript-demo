/*
 * Hooks API Reference
 *     useEffect
 *         Cleaning up an effect
 */

import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

function F01(): React.ReactElement<{}> {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      console.log(Math.floor(new Date().getTime() / 500));
    }, 500);

    /*
     * useEffect() 的回调函数中，可以返回一个函数，用来清理资源
     */
    return () => {
      /*
       * 这个清理函数，不仅仅会在组件销毁的时候执行，
       * 而是在每次 render 之后都会执行
       */
      console.log('CLEAN');
      window.clearInterval(timer);
    };
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
function C04070202() {
  return (
    <div>
      <F01 />
    </div>
  );
}

export { C04070202 };
