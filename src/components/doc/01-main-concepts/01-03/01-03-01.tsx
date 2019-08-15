/*
 * Rendering Elements
 */
import React from 'react';

/*
 * React 的 elements 是构建应用的最小单元，React 的 element 是 JS 对象，
 * ReactDOM 负责更新 DOM 的 elements 来跟 React 的 elements 保持一致；
 * 组件（component）是由元素（element）组成的；
 */
console.log('\n-------------------------------------------------- 01');

function C010301(): React.ReactNode {
  const element01: string = 'hello';
  const element02: React.ReactNode = <i>world</i>;

  return (
    <div>
      {element01}
      {element02}
    </div>
  );
}

export { C010301 };
