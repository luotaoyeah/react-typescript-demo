/*
 * Using the State Hook
 *     Declaring a State Variable
 */

import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

/*
 * 调用 useState() 函数，实际上声明了一个 state 变量（如下的 count），
 * 在 function 组件每次渲染之后，这个 count 的值会被 react 保留起来
 *
 * useState() 函数接收的参数，会作为 count 的初始值，
 * 这个初始值可以是任意类型，不需要是 object 类型的值，
 * 可以通过 useState() 方法的泛型参数，指定 count 的数据类型
 */

const F01 = (): React.ReactElement<{}> => {
  /*
   * useState() 函数返回的第二个数据是一个函数，
   * 用来更新对应的 state 变量，它们是成对出现的，
   * 这个 setCount() 函数的功能，类似于 class 组件中的 setState() 方法
   */
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

function C04030401() {
  return (
    <div>
      <F01 />
    </div>
  );
}

export { C04030401 };
