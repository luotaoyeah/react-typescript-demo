/*
 * https://reactjs.org/docs/context.html#classcontexttype
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 除了使用 <Context.Consumer> 组件来消费一个 context 之外,
 * 对于 class component, 还可以设置它的静态属性 contextType 为某个 context 对象,
 * 然后在组件中通过 this.context 属性来获取这个 context 对象的数据
 *
 * 这种方式的缺点在于, 组件只能消费这一个 context 对象, 不能再消费其他的
 */
const FooContext = React.createContext<string>('foo');

function C02030302A() {
  return <FooContext.Consumer>{(foo: string) => <Button>{foo}</Button>}</FooContext.Consumer>;
}

class C02030302B extends React.Component {
  public static contextType: React.Context<string> = FooContext;

  public render() {
    return <Button style={{ marginLeft: '10px' }}>{this.context}</Button>;
  }
}

function C02030302() {
  return (
    <FooContext.Provider value="BAR">
      <C02030302A />
      <C02030302B />
    </FooContext.Provider>
  );
}

export { C02030302 };
