/*
 * https://reactjs.org/docs/jsx-in-depth.html#string-literals
 */
import React from 'react';
import { Button } from 'antd';

interface IProps {
  foo?: string;
  bar?: string;
}

function C02090302A({ foo, bar }: IProps) {
  return (
    <>
      <Button type="primary">{foo}</Button> <Button type="danger">{bar}</Button>
    </>
  );
}

/*
 * props 的值可以是一个字符串, 这时候有两种形式的写法:
 *   1. prop="value"
 *   2. prop={"value"}
 *
 * 区别在于, 第二种形式不会对特殊字符进行转义, 而是原样显示
 */

function C02090302() {
  // eslint-disable-next-line react/jsx-curly-brace-presence
  return <C02090302A foo="<div&gt;" bar={'<div&gt;'}></C02090302A>;
}

export { C02090302 };
