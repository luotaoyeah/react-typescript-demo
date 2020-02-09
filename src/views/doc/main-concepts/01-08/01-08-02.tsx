/*
 * Lists and Keys: Basic List Component
 */

import React from 'react';

interface IProps {}

interface IState {}

class Items extends React.Component<{ items: Array<string | number> }> {
  public render() {
    /*
     * 渲染列表组件时，需要给每一个组件设置 key 属性，
     * 否则会报错提示：
     *     Warning: Each child in an array or iterator should have a unique "key" prop.
     */
    return (
      <ul>
        {this.props.items.map((i: string | number, index: number) => (
          <li key={`item_${index}`}>{i}</li>
        ))}
      </ul>
    );
  }
}

class C010802 extends React.Component<IProps, IState> {
  public render() {
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
}

export { C010802 };
