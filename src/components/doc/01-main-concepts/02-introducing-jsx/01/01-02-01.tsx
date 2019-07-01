/*
 * https://reactjs.org/docs/introducing-jsx.html#why-jsx
 */

import React from 'react';

export function C010201(): React.ReactNode {
  return (
    <>
      <p>
        <code>JSX</code> 是 <code>JS</code> 的语法扩展, React 的观点是: 渲染逻辑跟 UI, 事件处理,
        状态变更等天生就应该耦合在一起, 不应该人为地将 UI 跟逻辑分开放在不同的文件中, 而应该将相关的
        UI 和逻辑都放在同一个组件中, 通过组件来解耦
      </p>
    </>
  );
}
