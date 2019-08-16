/*
 * https://reactjs.org/docs/introducing-jsx.html#jsx-represents-objects
 */

import React, { Component } from 'react';

/*
 * JSX 被编译之后会变成是对 React.createElement() 方法的调用
 */

// eslint-disable-next-line react/prefer-stateless-function
class C010207 extends Component {
  public render(): React.ReactNode {
    const element01 = (
      <p>
        <span className="foo">foo</span>
      </p>
    );

    const element02 = React.createElement('p', {}, React.createElement('span', { className: 'foo' }, 'foo'));

    return (
      <div>
        {element01}
        {element02}
      </div>
    );
  }
}

export { C010207 };
