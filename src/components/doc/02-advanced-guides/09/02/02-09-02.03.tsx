/*
 * https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized
 */

import React from 'react';

/*
 * 如果一个标签的名称是小写字母开头的, 则会被当成是 HTML 标签,
 * 如果一个标签的名称是大写字母开头的, 则会被当成是组件,
 * 因此, 组件在 JSX 中必须首字母大写, 如果一个组件的名称是首字母小写的, 则必须重新赋值给一个首字母大写的变量, 然后在 JSX 中使用这个变量
 */

function c02090203A() {
  return <div>FOO</div>;
}

const C02090203A = c02090203A;

function C02090203() {
  return (
    <React.Fragment>
      <C02090203A></C02090203A>
    </React.Fragment>
  );
}

export { C02090203 };
