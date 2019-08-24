/*
 * https://reactjs.org/docs/jsx-in-depth.html#string-literals-1
 */
import React from 'react';

/*
 * 标签中间的内容会作为 props.children 属性的值传给组件,
 * children 可以是字符串
 */
function C02090401A({ children }: JSX.ElementChildrenAttribute) {
  console.assert(children === 'FOO');
  return <div>{children}</div>;
}

/*
 * 首尾的空格会被去除, 中间的多个空格只会保留一个空格
 */
function C02090401B({ children }: JSX.ElementChildrenAttribute) {
  console.assert(children === 'FOO BAR');
  return <div>{children}</div>;
}

function C02090401() {
  return (
    <>
      <C02090401A>FOO</C02090401A>
      {/* prettier-ignore */}
      <C02090401B>
        FOO
        BAR
      </C02090401B>
    </>
  );
}

export { C02090401 };
