/*
 * Lists and Keys: Embedding map() in JSX
 */

import React from 'react';

/*
 * 在 JSX 中，{} 中间可以包含任意的 JS 表达式；
 */

class C010806 extends React.Component<{}, {}> {
  // eslint-disable-next-line class-methods-use-this
  public hello() {
    return 'hello world';
  }

  public render(): React.ReactNode {
    return (
      <div>
        {/* eslint-disable-next-line no-useless-concat */}
        <p>{'hello ' + 'world'}</p>
        {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
        <p>{'hello world'}</p>
        <p>{this.hello()}</p>
        <p>
          {/* eslint-disable-next-line wrap-iife,space-before-function-paren */}
          {(function() {
            return 'hello world';
          })()}
        </p>
        <p>{['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'].join('')}</p>
      </div>
    );
  }
}

export { C010806 };
