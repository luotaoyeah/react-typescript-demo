/*
 * React Top-Level API
 *     Reference
 *         React.Children.forEach()
 */

import React from "react";

/*
 *
 */
class C030107 extends React.Component {
  componentDidMount(): void {
    const element01 = (
      <div>
        <span>A</span>
        <span>B</span>
        <span>C</span>
      </div>
    );

    /*
     * React.Children.forEach() 类似 Array.prototype.forEach()
     */
    React.Children.forEach(
      element01.props.children,
      (child: React.ReactChild) => {
        console.log((child as React.ReactElement<any>).props.children);
      }
    );
  }

  render(): React.ReactNode {
    return <div />;
  }
}

export { C030107 };
