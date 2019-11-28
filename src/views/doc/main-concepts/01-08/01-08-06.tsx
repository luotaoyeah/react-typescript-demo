/*
 * Lists and Keys: Embedding map() in JSX
 */

import * as React from "react";

/*
 * 在 JSX 中，{} 中间可以包含任意的 JS 表达式；
 */
interface IProps {}

interface IState {}

class C010806 extends React.Component<IProps, IState> {
  hello() {
    return "hello world";
  }

  public render() {
    return (
      <div>
        <p>{"hello " + "world"}</p>
        <p>{"hello world"}</p>
        <p>{this.hello()}</p>
        <p>
          {(function () {
            return "hello world";
          })()}
        </p>
        <p>{["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"].join("")}</p>
      </div>
    );
  }
}

export { C010806 };
