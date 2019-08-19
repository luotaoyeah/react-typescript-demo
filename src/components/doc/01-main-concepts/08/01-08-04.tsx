/*
 * https://reactjs.org/docs/lists-and-keys.html#extracting-components-with-keys
 */

import React from 'react';

function C010804A({ value }: { value: string }) {
  return <li>{value}</li>;
}

function C010804() {
  return (
    <ul>
      {/* key 属性应该设置在 <C010804A> 组件上，而不是它里面的 <li> 标签上 */}
      {['a', 'b', 'c'].map(n => (
        <C010804A value={n} key={n} />
      ))}
    </ul>
  );
}

export { C010804 };
