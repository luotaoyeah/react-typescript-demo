/*
 * https://reactjs.org/docs/higher-order-components.html#convention-maximizing-composability
 */

import React from 'react';
import { Button, message } from 'antd';

/*
 * 如果一个 HOC 的参数有多个, 我们可以将它改造成只接受一个组件参数的形式
 */

interface IProps01 {
  color?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withColor<P extends React.HTMLAttributes<Element>>(C01: any, config: { foo: string }) {
  return ({ color, style, ...restProps }: P & IProps01) => {
    message.info(`[C02070402] ${config.foo}`);
    return <C01 {...restProps} style={{ color, ...style }}></C01>;
  };
}

interface IProps02 {
  borderColor?: string;
}

function withBorderColor<P extends React.HTMLAttributes<Element>>(C01: any) {
  return ({ borderColor, style, ...restProps }: P & IProps02) => (
    <C01
      {...restProps}
      style={{
        borderColor,
        ...style,
      }}
    ></C01>
  );
}

const C02070401A = withBorderColor(withColor(Button, { foo: 'FOO' }));

/**
 * withColor02() 是一个 higher order function, 它返回的是一个 HOC
 */
function withColor02(config: { foo: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (C01: any) => withColor(C01, config);
}

const C02070401B = withBorderColor(withColor02({ foo: 'BAR' })(Button));

function C02070402() {
  return (
    <>
      <C02070401A color="red" borderColor="blue">
        BUTTON
      </C02070401A>

      <C02070401B
        color="blue"
        borderColor="red"
        style={{
          marginLeft: '10px',
        }}
      >
        BUTTON
      </C02070401B>
    </>
  );
}

export { C02070402 };
