/*
 * Lists and Keys: Basic List Component
 */

import React from 'react';

function Items({ items }: { items: Array<string | number> }) {
  /*
   * 渲染列表组件时，需要给每一个组件设置 key 属性，
   * 否则会报错提示：
   *     Warning: Each child in an array or iterator should have a unique "key" prop.
   */
  return (
    <ul>
      {items.map((i: string | number, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`item_${index}`}>{i}</li>
      ))}
    </ul>
  );
}

function C010802(): React.ReactNode {
  return (
    <div>
      <div>
        <Items items={[1, 2, 3]} />
      </div>
      <div>
        <Items items={['a', 'b', 'c']} />
      </div>
    </div>
  );
}

export { C010802 };
