/*
 * Conditional Rendering
 */

import React from 'react';
import { Button, Input } from 'antd';

function ButtonOrInput(props: { type: string }) {
  /*
   * 因为 react 元素就是普通的 JS 表达式，
   * 所以可以使用 JS 中的条件语句，如：if 和 三元条件表达式，
   * 根据不同的条件，渲染不同的组件；
   */
  const { type } = props;
  if (type === 'button') {
    return <Button>button</Button>;
  }
  return <Input placeholder="input" />;
}

function C010701() {
  return (
    <div>
      <ButtonOrInput type="button" />
      <ButtonOrInput type="input" />
      {/*
       * 使用（?:）表达式，条件渲染；
       */}
      {new Date().getTime() % 2 === 0 ? 'EVEN' : 'ODD'}
    </div>
  );
}

export { C010701 };
