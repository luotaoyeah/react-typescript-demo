/*
 * https://reactjs.org/docs/higher-order-components.html#convention-maximizing-composability
 */

import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';

/*
 * HOC 最简单的形式为: 接受一个组件, 返回一个组件,
 * 这种形式的好处在于, 可以实现多重组合, 如: HOC01(HOC02(HOC03(C01)))
 */

interface IProps01 {
  color?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withColor<P extends React.HTMLAttributes<any>>(C01: any) {
  function C02({ color, style, ...restProps }: P & IProps01) {
    return (
      <C01
        {...restProps}
        style={{
          color,
          ...style,
        }}
      ></C01>
    );
  }

  C02.displayName = `${withColor.name}(${C02.name})`;

  return C02;
}

interface IProps02 {
  borderColor?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withBorderColor<P extends React.HTMLAttributes<any>>(C01: any) {
  function C02({ borderColor, style, ...restProps }: P & IProps02) {
    return (
      <C01
        {...restProps}
        style={{
          borderColor,
          ...style,
        }}
      ></C01>
    );
  }

  C02.displayName = `${withBorderColor.name}(${C02.name})`;

  return C02;
}

const C020703A = withBorderColor<ButtonProps & IProps01>(withColor<ButtonProps>(Button));
const C020703B = withColor<ButtonProps & IProps02>(withBorderColor<ButtonProps>(Button));

function C02070401() {
  return (
    <>
      <C020703A color="red" borderColor="blue">
        BUTTON
      </C020703A>

      <C020703B
        borderColor="red"
        color="blue"
        style={{
          marginLeft: '10px',
        }}
      >
        BUTTON
      </C020703B>
    </>
  );
}

export { C02070401 };
