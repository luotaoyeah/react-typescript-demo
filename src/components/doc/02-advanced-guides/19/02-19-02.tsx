/*
 * https://reactjs.org/docs/strict-mode.html#warning-about-legacy-string-ref-api-usage
 */

import React from 'react';

/*
 * 在 React 里面，可以分为两个时期：
 *     render phase
 *         React 决定需要将哪些更改应用到 DOM 中去，通过调用 render() 方法，
 *         并将结果跟上一次的结果进行比较来决定；
 *     commit phase
 *         React 将这些更改应用到 DOM 中去；
 */

class A extends React.Component {
  public componentWillMount(): void {
    /*  */
  }

  public componentDidMount(): void {
    /*
     * 字符串形式的 ref 已经被弃用，不建议再使用；
     */
    // eslint-disable-next-line react/no-string-refs
    (this.refs.inputRef as HTMLInputElement).focus();
  }

  public render() {
    // eslint-disable-next-line spaced-comment
    return <div>{/*<input type="text" ref={"inputRef"} />*/}</div>;
  }
}

/**  */
function C021902() {
  return (
    <React.Fragment>
      <React.StrictMode>
        <A />
      </React.StrictMode>
    </React.Fragment>
  );
}

export { C021902 };
