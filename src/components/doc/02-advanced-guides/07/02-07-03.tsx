/* eslint-disable max-len */
/*
 * https://reactjs.org/docs/higher-order-components.html#convention-pass-unrelated-props-through-to-the-wrapped-component
 */
/* eslint-enable max-len */

import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';

/*
 * HOC 的主要作用是给组件添加新的功能, 所以 HOC 不应该影响组件原来的功能,
 * HOC 应该将组件原来的 props 原封不动的继续传给组件,
 * 通常的模式是: 将组件原来的 props 单独分离出来, 然后继续传递给组件, 同时分离出 HOC 中新增加的属性
 */

interface IProps {
  foo?: string;
}

function withSomething<P>(C01: typeof Button) {
  return function C02({ foo, ...restProps }: P & IProps) {
    return <C01 foo={foo} {...restProps} />;
  };
}

const C020703A = withSomething<ButtonProps>(Button);

function C020703() {
  return <C020703A foo="FOO">BUTTON</C020703A>;
}

export { C020703 };
