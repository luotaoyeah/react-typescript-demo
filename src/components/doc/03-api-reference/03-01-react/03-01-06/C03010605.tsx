/*
 * React Top-Level API
 *     Reference
 *         React.Children.toArray()
 */

import React from 'react';

/*
 *
 */
class C030110 extends React.Component {
  public render(): React.ReactNode {
    const element01 = (
      <div>
        <span>A</span>
        <span>B</span>
        <span>C</span>
      </div>
    );

    /*
     * React.Children.toArray() 将 children 转换为普通的数组，
     * 并给每个元素设置 key 属性（加上前缀）；
     */

    const element02 = <div>{React.Children.toArray(element01.props.children).reverse()}</div>;

    return <div>{element02}</div>;
  }
}

export { C030110 };
