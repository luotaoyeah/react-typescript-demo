/*
 * https://reactjs.org/docs/higher-order-components.html#dont-mutate-the-original-component-use-composition
 */

import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';

/*
 * HOC 是一个 pure function, 因此不要对它的参数组件做任何修改, 而是返回一个新的组件,
 * 如下, 修改了参数组件的原型对象, 是**错误**的写法
 */
function withSomething<P>(C01: typeof Button) {
  // eslint-disable-next-line no-param-reassign
  C01.prototype.componentDidMount = () => {
    // eslint-disable-next-line no-console
    console.log('LOG');
  };

  return C01;
}

const C020702A = withSomething<ButtonProps>(Button);

function C020702() {
  return <C020702A>BUTTON</C020702A>;
}

export { C020702 };
