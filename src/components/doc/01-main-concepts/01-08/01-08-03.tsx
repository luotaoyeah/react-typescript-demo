/*
 * Lists and Keys: Keys
 */

import React from 'react';

interface IProps {}

interface IState {}

class C010803 extends React.Component<IProps, IState> {
  public render(): React.ReactNode {
    const strObj: Array<{ id: number; name: string }> = [
      {
        id: 1,
        name: 'foo',
      },
      {
        id: 2,
        name: 'bar',
      },
      {
        id: 3,
        name: 'baz',
      },
    ];
    const strArray: Array<string> = ['a', 'b', 'c'];
    return (
      <div>
        {/*
         * 在循环展示列表组件时，需要给每个组件设置 key 属性，
         * 且 key 属性在这些组件中必须是唯一的；
         *
         * react 可以通过 key 知道某个组件的变更，添加，删除；
         * 通常我们可以使用列表数据的某个唯一属性作为 key 的值，如 id 属性；
         */}
        <ul>
          {strObj.map(i => (
            <li key={i.id}>{i.name}</li>
          ))}
        </ul>
        {/*
         * 如果没有 id 这样的属性，我们也可以使用 index 作为 key 的值，
         * 但是这种方式会有性能问题，很不推荐这种方式；
         */}
        <ul>
          {strArray.map((i: string, index: number) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
        <ul>
          {strArray.map((i: string) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export { C010803 };
