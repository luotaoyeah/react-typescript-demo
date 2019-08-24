/*
 * https://reactjs.org/docs/jsx-in-depth.html#functions-as-children
 */
import React from 'react';

/*
 * props.children 本质上就是一个 props 属性, 因此可以传任意类型的值给它,
 * 比如传一个 function 给它, 这时候我们不能直接将 children 用于渲染, 而是要把它当成一个普通的 props 属性来使用
 */

interface IProps {
  foo: string;

  children(x: string): string;
}

function C02090404A({ foo, children }: IProps) {
  return <div>{children(foo)}</div>;
}

class C02090404 extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  private toUpperCase(x: string) {
    return x.toUpperCase();
  }

  public render() {
    return (
      <>
        <C02090404A foo="foo">{this.toUpperCase}</C02090404A>
      </>
    );
  }
}

export { C02090404 };
