/*
 * https://reactjs.org/docs/lists-and-keys.html#keys-must-only-be-unique-among-siblings
 */

import React from 'react';

/*
 * key 属性不需要全局唯一, 只需要在当前父组件的儿子组件中唯一就可以了
 */

interface IProps {
  id: string;
  name: string;
}

function C010805A({ id, name }: IProps) {
  /*
   * key 是一个特殊的属性, 它由 react 使用, 它不会被传递给组件,
   * 如果在组件中需要使用这个属性, 需要使用其他名称的属性来传入
   */
  return (
    <li>
      {id} - {name}
    </li>
  );
}

function C010805() {
  return (
    <ul>
      {[
        {
          id: '1',
          name: 'A',
        },
        {
          id: '2',
          name: 'B',
        },
        {
          id: '3',
          name: 'C',
        },
      ].map(i => (
        <C010805A key={i.id} id={i.id} name={i.name} />
      ))}
    </ul>
  );
}

export { C010805 };
