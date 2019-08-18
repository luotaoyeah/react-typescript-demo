import React from 'react';
import { Button, Divider } from 'antd';

/**
 * https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx
 */
class C010202 extends React.Component {
  private foo: string = 'FOO';

  // eslint-disable-next-line class-methods-use-this
  private bar(): string {
    return 'BAR';
  }

  public render() {
    /*
     * JSX 可以跨越多行, 此时应该用 () 将整个包裹起来, 以避免 automatic semicolon insertioin
     */
    return (
      <>
        <p>
          <code>JSX</code> 中可以通过{' '}
          <code>
            {'{'}
            {'}'}
          </code>{' '}
          插入任意的表达式, 包括方法的调用
        </p>

        <Divider dashed></Divider>

        <Button>
          {this.foo} {this.bar()}
        </Button>
      </>
    );
  }
}

export { C010202 };
