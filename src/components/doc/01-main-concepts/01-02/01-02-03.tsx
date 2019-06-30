import React from 'react';

/*
 * JSX is an expression
 */

/*
 * JSX 最终会被编译为 function 调用（React.createElement()）；
 * 所以 JSX 跟普通的表达式一样，任意可以使用表达式的地方，都可以使用 JSX；
 */
console.log('\n-------------------------------------------------- 01');

class C010203 extends React.Component {
  private getContent(multi: boolean): React.ReactNode {
    if (multi) {
      return [1, 2, 3].map(item => <p key={item}>{item}</p>);
    } else {
      return <i>{multi.toString()}</i>;
    }
  }

  public render(): React.ReactNode {
    return (
      <div>
        <div>{this.getContent(true)}</div>
        <div>{this.getContent(false)}</div>
      </div>
    );
  }
}

export { C010203 };
