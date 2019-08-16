/*
 * https://reactjs.org/docs/rendering-elements.html
 */

import React, { Component } from 'react';

/*
 * 元素(element)是应用程序的最小构建单元, 它的基类为 React.ReactElement
 */

// eslint-disable-next-line react/prefer-stateless-function
class C010301 extends Component {
  public render() {
    const el01: string = 'foo';
    const el02: JSX.Element = <span>bar</span>;

    return (
      <>
        <p>{el01}</p>
        <p>{el02}</p>
      </>
    );
  }
}

export { C010301 };
