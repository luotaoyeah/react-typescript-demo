/*
 * https://reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx
 */

import React from 'react';

/*
 * 在 JSX 中, {} 中间可以包含任意的 JS 表达式
 */

class C010806 extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  public fn01() {
    return 'FOO BAR';
  }

  public render() {
    return (
      <div>
        {/* eslint-disable-next-line no-useless-concat */}
        <div>{'FOO ' + 'BAR'}</div>

        {/* 可以包含字符串 */}
        {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
        <div>{'FOO BAR'}</div>

        {/* 可以包含函数调用 */}
        <div>{this.fn01()}</div>

        {/* 可以包含 IIFE */}
        <div>
          {/* eslint-disable-next-line wrap-iife,space-before-function-paren,func-names */}
          {(function() {
            return 'FOO BAR';
          })()}
        </div>
        <div>{(() => 'FOO BAR')()}</div>

        {/* 可以包含任意合法的 JS 表达式 */}
        <div>{['F', 'O', 'O', ' ', 'B', 'A', 'R'].join('')}</div>
      </div>
    );
  }
}

export { C010806 };
