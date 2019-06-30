/*
 * React Top-Level API
 *     Reference
 *         React.Children.count()
 */

import React from 'react';

/*
 *
 */
class C030108 extends React.Component {
  componentDidMount(): void {
    const element01 = (
      <div>
        <span>A</span>
        <span>B</span>
        <span>C</span>
      </div>
    );

    let count = 0;
    React.Children.forEach(element01.props.children, () => {
      count++;
    });
    console.log(count); // 3

    /*
     * React.Children.count() 返回 children 中的元素数量，
     * 跟 React.Children.map() 和 React.Children.forEach() 循环的次数一样；
     */
    console.log(React.Children.count(element01.props.children)); // 3
  }

  public render(): React.ReactNode {
    return <div />;
  }
}

export { C030108 };
