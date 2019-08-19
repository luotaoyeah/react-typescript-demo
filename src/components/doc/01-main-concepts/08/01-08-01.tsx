/*
 * https://reactjs.org/docs/lists-and-keys.html#rendering-multiple-components
 */

import React from 'react';

/*
 * 在 JSX 中, 可以使用 Array.prorotype.map() 方法, 渲染一个 react element 数组
 */
function C010801() {
  return (
    <div>
      <ul>
        {['a', 'b', 'c'].map(n => (
          <li>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export { C010801 };
