import React from 'react';

/*
 * JSX Represents Objects
 */

/*
 * JSX 编译之后实际上是 React.createElement() 调用；
 */
console.log('\n-------------------------------------------------- 01');

class C010207 extends React.Component {
  public render(): React.ReactNode {
    const element01 = (
      <p>
        <i className="el">element</i>
      </p>
    );

    /* 等价于 */

    const element02 = React.createElement(
      'p',
      {},
      React.createElement('i', { className: 'el' }, 'element'),
    );
    return (
      <div>
        {element01}
        {element02}
      </div>
    );
  }
}

export { C010207 };
