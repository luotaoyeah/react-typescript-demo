/*
 * https://reactjs.org/docs/components-and-props.html#rendering-a-component
 */

import React from 'react';

/*
 * react element 有两种:
 *   1. 普通的 DOM 对象, 首字母小写, 如: <div />
 *   2. 组件, 首字母大写, 如: <SomeComponent />
 */

interface IProps {
  name: string;
}

function C010402A({ name }: IProps) {
  return <div>{name}</div>;
}

function C010402() {
  return (
    <>
      <div>HTML TAG</div>

      <C010402A name="CUSTOM COMPONENT" />
    </>
  );
}

export { C010402 };
