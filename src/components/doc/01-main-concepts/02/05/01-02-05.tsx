import React from 'react';
import ico from './01-02-05.ico';

/**
 * https://reactjs.org/docs/introducing-jsx.html#specifying-children-with-jsx
 */
export function C010205() {
  return (
    <div>
      <p>
        <code>JSX</code> 标签可以包含下级标签
      </p>

      <p>如果标签没有下级元素, 可以使用自关闭的写法</p>

      <img src={ico} alt="" />
    </div>
  );
}
