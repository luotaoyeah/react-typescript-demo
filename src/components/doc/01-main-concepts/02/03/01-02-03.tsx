import React from 'react';
import { Button, Divider } from 'antd';

/**
 * https://reactjs.org/docs/introducing-jsx.html#jsx-is-an-expression-too
 */
class C010203 extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  private getSomething(multi: boolean) {
    if (multi) {
      return [1, 2, 3].map(item => <Button key={item}>{item}</Button>);
    }

    return <Button>{multi.toString()}</Button>;
  }

  public render() {
    return (
      <>
        <p>
          <code>JSX</code> 经过编译之后, 会变成一个方法的调用, 它的返回值是一个 JS 对象, 也就是说, <code>JSX</code>{' '}
          本质上也是一个 <code>expression</code>, 可以被当成普通的 <code>expression</code> 来使用
        </p>

        <Divider dashed></Divider>

        <p>{this.getSomething(true)}</p>

        <p>{this.getSomething(false)}</p>
      </>
    );
  }
}

export { C010203 };
