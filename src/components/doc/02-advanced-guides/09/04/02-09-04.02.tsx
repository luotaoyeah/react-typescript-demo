/*
 * https://reactjs.org/docs/jsx-in-depth.html#jsx-children
 */
import React from 'react';

/*
 * children 可以是字符串, 可以是其他的 react element, 也可以是它们的混合
 */
function C02090402A({ children }: JSX.ElementChildrenAttribute) {
  return <div>{children}</div>;
}

/*
 * render() 方法可以返回一个 React.ReactNode 数组,
 * 注意记得要设置 key 属性
 */
class C02090402B extends React.Component {
  public render() {
    return [<li key="a">A</li>, <li key="b">B</li>, <li key="c">C</li>];
  }
}

function C02090402() {
  return (
    <>
      FOO <span>BAR</span>
      <C02090402A>BAZ</C02090402A>
      <ul>
        <C02090402B></C02090402B>
      </ul>
    </>
  );
}

export { C02090402 };
