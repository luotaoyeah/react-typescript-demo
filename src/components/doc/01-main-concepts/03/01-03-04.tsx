/*
 * https://reactjs.org/docs/rendering-elements.html#react-only-updates-whats-necessary
 */

import React from 'react';
import ReactDOM from 'react-dom';

/*
 * 虽然每次创建了一个全新的 element, 但是 ReactDOM 在更新 DOM 之前，会比较本次的 element 和上次的 element,
 * 然后只会更新需要更新的那部分 DOM
 *
 * 这里面涉及到的理念是:
 *     我们只需要考虑当前的 UI 应该怎样呈现, 而不需要考虑 UI 应该如何随着时间变更
 */

// eslint-disable-next-line react/prefer-stateless-function
export class C010304 extends React.Component {
  public componentDidMount(): void {
    setInterval(() => {
      const el = (
        <span>
          <span>[</span>
          <span>{new Date().toISOString()}</span>
          <span>]</span>
        </span>
      );

      ReactDOM.render(el, document.querySelector('#p010304'));
    }, 1000);
  }

  public render() {
    return (
      <p
        id="p010304"
        style={{
          border: '1px solid red',
          borderRadius: '3px',
          padding: '10px',
        }}
      ></p>
    );
  }
}
