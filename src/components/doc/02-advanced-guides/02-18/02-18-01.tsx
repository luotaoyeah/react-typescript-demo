/*
 * Strict Mode
 *     Identifying unsafe lifecycles
 */

import React from 'react';

/*
 * React.StrictMode 类似 React.Fragment，是一种特殊的组件；
 * React 会检查它的下级组件，发现一些潜在的问题，这些问题包括：
 *     1. 使用了 UNSAFE 的生命周期函数；
 *     2. 使用了旧的 ref API；
 *     3. 使用了旧的 context API；
 *     4. 其他副作用；
 *
 * React.StrictMode 只在开发环境有效，生产环境无效；
 */

class A extends React.Component {
  public componentWillMount(): void {
    console.log('A.componentWillMount()');
  }

  public render(): React.ReactNode {
    return 'A';
  }
}

class B extends React.Component {
  public componentWillMount(): void {
    console.log('B.componentWillMount()');
  }

  public render(): React.ReactNode {
    return 'B';
  }
}

/**  */
function C021801(): React.ReactNode {
  return (
    <React.Fragment>
      {/*
       * A 和 B 都是用了 UNSAFE 的生命周期函数 componentWillMount，
       * 但是因为只有 A 位于 <React.StrictMode> 中间，
       * 因此 React 只会检查 A；
       */}
      <React.StrictMode>
        <A />
      </React.StrictMode>
      <B />
    </React.Fragment>
  );
}

export { C021801 };
