/*
 * JSX In Depth:
 *     Specifying The React Element Type
 *     React Must Be in Scope
 *     Using Dot Notation for JSX Type
 *     User-Defined Components Must Be Capitalized
 *     Choosing the Type at Runtime
 */

import * as React from "react";
import { Divider } from "antd";

/*
 * JSX 标签如果首字母大写，表示该元素是一个组件，
 * 此时必须在当前模块引入该组件；
 */

/*
 * 因为 JSX 最终会被编译为 React.createElement() 方法，
 * 所以必须在当前模块引入 React；
 */

/*
 * JSX 标签名中可以包含点运算符（A.B）；
 */
const A = {
  B: () => {
    return <i>B</i>;
  },
  C: () => {
    return <i>C</i>;
  },
};

/*
 * 如果标签名是小写开头，则会被当成内置的标签解析，
 * 并且传递给 React.createElement() 时，是以字符串的形式传递，
 * 如：<a> - React.createElement('a')
 *
 * 如果标签名是大写开头，则会被当成自定义组件解析，
 * 并且传递给 React.createElement() 时，是以组件变量的形式传递，
 * 如：<A> - React.createElement(A)
 *
 * 如果某个自定义组件是以小写字母开头，
 * 则可以先把它赋值给一个大写字母开头的变量，
 * 然后在 JSX 中使用这个变量；
 */
function hello() {
  return <i>hello</i>;
}

class C020902 extends React.Component {
  public render() {
    const Hello = hello;

    /*
     * JSX 标签名不能是一个表达式，
     * 需要现将表达式赋值给一个变量，
     * 然后在 JSX 中使用这个变量；
     */
    const components = {
      b: A.B,
      c: A.C,
    };
    const B = components.b;

    return (
      <div>
        <A.B />
        <Divider />
        <A.C />
        <Divider />
        <Hello />
        <Divider />
        <B />
      </div>
    );
  }
}

export { C020902 };
