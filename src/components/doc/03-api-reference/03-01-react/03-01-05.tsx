/*
 * React Top-Level API
 *     Reference
 *         React.isValidElement()
 */

import React from 'react';
import { Button } from 'antd';

/*
 * React.isValidElement() 判断一个对象是否是合法的 react 元素；
 */
class C030105 extends React.Component {
  componentDidMount(): void {
    console.log(React.isValidElement(null)); // false
    console.log(React.isValidElement(undefined)); // false
    console.log(React.isValidElement(false)); // false
    console.log(React.isValidElement('foo')); // false
    console.log(React.isValidElement(() => {})); // false
    console.log(React.isValidElement({})); // false
    console.log(React.isValidElement(Button)); // false

    console.log(React.isValidElement(<div />)); // true
    console.log(React.isValidElement(<Button />)); // true
  }

  public render(): React.ReactNode {
    return <div />;
  }
}

export { C030105 };
