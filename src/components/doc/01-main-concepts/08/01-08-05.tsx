/*
 * Lists and Keys: Keys Must Only Be Unique Among Siblings
 */

import React from 'react';

function Item({ id, key, name }: { id: string; key: string; name: string }) {
  return (
    <li>
      {/*
       * ref 和 key 是两个特殊的属性，
       * 他们由 react 使用，不会被传递给组件，
       * 如果在组件中需要使用这两个 props 属性，
       * 应该使用其他的名称；
       */}
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        {/*
         * Warning:
         * Item: `key` is not a prop.
         * Trying to access it will result in `undefined` being returned.
         * If you need to access the same value within the child component,
         * you should pass it as a different prop.
         */}
        <li>{key}</li>
      </ul>
    </li>
  );
}

function C010805() {
  return (
    <div>
      {[
        {
          id: '1',
          name: 'a',
          key: 'a_1',
        },
        {
          id: '2',
          name: 'b',
          key: 'b_2',
        },
        {
          id: '3',
          name: 'c',
          key: 'c_3',
        },
      ].map(i => (
        <Item key={i.key} id={i.id} name={i.name} />
      ))}
    </div>
  );
}

export { C010805 };