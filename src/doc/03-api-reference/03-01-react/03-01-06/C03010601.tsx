/*
 * React Top-Level API
 *     Reference
 *         React.Children.map()
 */

import React from "react";

/*
 *
 */
class C030106 extends React.Component {
  componentDidMount(): void {
    const element01 = (
      <div>
        <span>A</span>
        <span>B</span>
        <span>C</span>
      </div>
    );

    const element02 = <span />;

    /*
     * React.Children.map() 类似 Array.prototype.map()，
     * 如果 children 是一个数组，则返回的也是一个数组，
     * 如果 children 是 null 或者 undefined，则返回的也是 null 或者 undefined；
     */
    console.log(
      React.Children.map<string>(
        element01.props.children,
        (child: React.ReactChild) => {
          return (child as React.ReactElement<any>).props.children;
        }
      )
    ); // ["A", "B", "C"]

    console.log(
      React.Children.map(
        element02.props.children,
        (child: React.ReactChild) => {
          return child;
        }
      )
    ); // undefined

    const element03 = (
      <div>
        <React.Fragment>
          <span key={"1"}>1</span>
          <span key={"2"}>2</span>
          <span key={"3"}>3</span>
        </React.Fragment>
      </div>
    );

    /*
     * 如果 children 是一个 React.Fragment，则会被当成单个节点；
     */
    console.log(
      React.Children.map<React.ReactFragment>(
        element03.props.children,
        (child: React.ReactChild) => {
          return (child as React.ReactElement<any>).props.children.length;
        }
      )
    ); // [3]
  }

  public render(): React.ReactNode {
    return <div />;
  }
}

export { C030106 };
