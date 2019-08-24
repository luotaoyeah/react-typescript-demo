/*
 * https://reactjs.org/docs/jsx-in-depth.html#spread-attributes
 */
import React from 'react';
import { Button, Divider } from 'antd';

interface IProps {
  foo?: string;
  bar?: string;
}

function C02090304A({ foo, bar }: IProps) {
  return (
    <>
      <Button type="primary">{foo}</Button> <Button type="danger">{bar}</Button>
    </>
  );
}

/*
 * 可以使用 spread operator 将一个对象的所有属性拆解为 props 属性传给组件
 */

function C02090304() {
  const obj = { foo: 'FOO', bar: 'BAR' };
  const { bar, foo } = obj;

  return (
    <>
      <C02090304A foo={foo} bar={bar}></C02090304A>

      <Divider />

      <C02090304A {...obj}></C02090304A>
    </>
  );
}

export { C02090304 };
