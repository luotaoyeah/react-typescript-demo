/*
 * https://reactjs.org/docs/lists-and-keys.html#keys
 */

import React from 'react';
import { Divider } from 'antd';

function C010803() {
  const items01: Array<{ id: number; name: string }> = [
    {
      id: 1,
      name: 'a',
    },
    {
      id: 2,
      name: 'b',
    },
    {
      id: 3,
      name: 'c',
    },
  ];

  const items02: Array<string> = ['a', 'b', 'c'];

  return (
    <div>
      {/* 列表组件中的每一个组件必须设置唯一的 key 属性, 类似于数据库中的 ID 属性,
          react 可以通过 key 属性获知某个组件的变更, 添加, 删除,
          通常我们可以使用列表数据的某个唯一属性作为 key 的值, 如 id 属性 */}
      <ul>
        {items01.map(i => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>

      <Divider></Divider>

      {/* 如果没有 id 这样的属性, 我们也可以使用 index 作为 key 的值, 但是这种方式会有性能问题, **很不推荐**这种方式,
          这种方式的缺点在于, 如果列表数据发生了变更, 比如删除了一个元素, 则重新渲染之后, 某些组件的 key 值会发生变化 */}
      <ul>
        {items02.map((i: string, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export { C010803 };
