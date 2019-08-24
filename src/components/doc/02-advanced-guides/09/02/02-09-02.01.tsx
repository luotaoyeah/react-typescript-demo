/*
 * https://reactjs.org/docs/jsx-in-depth.html#react-must-be-in-scope
 */

import React from 'react';

/*
 * 因为 JSX 会被编译成对 React.createElement() 方法的调用,
 * 所以在使用 JSX 时, 必须引入 React 模块, 并且引入时的模块名称必须为 "React"
 */
function C02090201() {
  return <></>;
}

export { C02090201 };
