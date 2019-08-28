/*
 * https://reactjs.org/docs/higher-order-components.html#use-hocs-for-cross-cutting-concerns
 */

import React from 'react';
import { Button, Input } from 'antd';
import { ButtonProps } from 'antd/es/button';
import { InputProps } from 'antd/es/input';

/*
 * HOC (Higher Order Component) 高阶组件,
 * HOC 本质上是一个 pure function, 其参数是一个组件, 其返回值也是一个组件
 */

interface IWithColorProps {
  someColor: string;
}

/**
 * 如下, withColor() 函数就是一个 HOC, 它接受一个组件 C01, 返回一个新的组件 C02
 */
function withColor<P extends ButtonProps | InputProps>(C01: typeof Button | typeof Input) {
  function C02({ someColor, ...restProps }: P & IWithColorProps) {
    return <C01 {...restProps} style={{ color: someColor }} />;
  }

  return C02;
}

const C020701A = withColor<ButtonProps>(Button);
const C020701B = withColor<InputProps>(Input);

function C020701() {
  return (
    <div>
      <C020701A someColor="red">BUTTON</C020701A>
      <C020701B someColor="#00FF00" />
    </div>
  );
}

export { C020701 };
