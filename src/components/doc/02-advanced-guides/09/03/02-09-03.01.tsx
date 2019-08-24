/*
 * https://reactjs.org/docs/jsx-in-depth.html#javascript-expressions-as-props
 */
import React from 'react';
import { Button } from 'antd';

/*
 * props 的值可以是任意的 JS 表达式
 */

interface IProps {
  foo?: number;
  bar?: number;
}

function C02090301A({ foo, bar }: IProps) {
  return (
    <>
      <Button type="primary">{foo}</Button> <Button type="danger">{bar}</Button>
    </>
  );
}

function C02090301() {
  return <C02090301A foo={4 + 5} bar={(() => 9)()}></C02090301A>;
}

export { C02090301 };
