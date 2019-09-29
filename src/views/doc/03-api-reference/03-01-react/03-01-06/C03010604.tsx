/*
 * React Top-Level API
 *     Reference
 *         React.Children.only()
 */

import React from "react";

/*
 *
 */
class C030109 extends React.Component {
  componentDidMount(): void {
    const element01 = (
      <div>
        <span>A</span>
        <span>B</span>
        <span>C</span>
      </div>
    );

    const element02 = <div />;

    const element03 = (
      <div>
        <span>A</span>
      </div>
    );

    /*
     * 如果 children 只有一个元素，则 React.Children.only() 返回该元素，
     * 否则报错；
     */

    try {
      console.log(React.Children.only(element01.props.children));
    } catch (e) {
      console.log(e); // Error: React.Children.only expected to receive a single React element child.
    }

    try {
      console.log(React.Children.only(element02.props.children));
    } catch (e) {
      console.log(e); // Error: React.Children.only expected to receive a single React element child.
    }

    console.log(React.Children.only(element03.props.children));
  }

  public render(): React.ReactNode {
    return <div />;
  }
}

export { C030109 };
