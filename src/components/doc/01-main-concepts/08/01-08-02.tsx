/*
 * https://reactjs.org/docs/lists-and-keys.html#basic-list-component
 */

import React from 'react';
import { Divider } from 'antd';

interface IProps {
  items: Array<string | number>;
}

function C010802A({ items }: IProps) {
  /*
   * 渲染列表组件时, 需要给每一个组件设置一个唯一的 key 属性,
   * 否则会报错提示:
   *     Warning: Each child in a list should have a unique "key" prop.
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

function C010802() {
  return (
    <div>
      <C010802A items={[1, 2, 3]} />

      <Divider></Divider>

      <C010802A items={['a', 'b', 'c']} />
    </div>
  );
}

export { C010802 };
