/*
 * Components and Props: Props are Read-Only
 */

import React from 'react';

/*
 * pure function：
 *     不会修改输入，
 *     对于相同的输入，始终返回相同的结果；
 *
 * 所有的 react 组件都应该表现地像 pure function 一样，
 * 绝对不要修改 props 的值；
 */

function C010405(): React.ReactNode {
  return <div />;
}

export { C010405 };