/*
 * Hooks API Reference
 *     useState
 *         Functional updates
 */

import React, { useState } from 'react';
import { Button } from 'antd';

/*
 * 跟 class 组件中的 setState() 方法一样，
 * useState() 返回的 setState() 函数也可以接收一个函数作为参数，
 * 该函数的第一个参数为上次渲染的 state 对象
 */

function F01(): React.ReactElement<{}> {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <Button>{count}</Button>{' '}
      <Button
        onClick={() => {
          setCount(0);
        }}
      >
        RESET
      </Button>{' '}
      <Button
        onClick={() => {
          setCount((prevCount: number) => prevCount + 1);
        }}
      >
        +
      </Button>{' '}
      <Button
        onClick={() => {
          setCount((prevCount: number) => prevCount - 1);
        }}
      >
        -
      </Button>
    </div>
  );
}

// tslint:disable-next-line:max-classes-per-file
class C04070101 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        <F01 />
      </div>
    );
  }
}

export { C04070101 };
