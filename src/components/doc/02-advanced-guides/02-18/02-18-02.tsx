/*
 * Strict Mode
 *     Warning about legacy string ref API usage
 *     Detecting unexpected side effects
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
  componentWillMount(): void {
    /*  */
  }

  componentDidMount(): void {
    /*
     * 字符串形式的 ref 已经被弃用，不建议再使用；
     */
    (this.refs.inputRef as HTMLInputElement).focus();
  }

  public render(): React.ReactNode {
    return <div>{/*<input type="text" ref={"inputRef"} />*/}</div>;
  }
}

/**  */
class C021802 extends React.Component {
  public render(): React.ReactNode {
    return (
      <React.Fragment>
        <React.StrictMode>
          <A />
        </React.StrictMode>
      </React.Fragment>
    );
  }
}

export { C021802 };
