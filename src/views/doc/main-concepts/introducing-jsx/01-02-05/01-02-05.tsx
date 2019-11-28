import * as React from "react";
import ico from "./ss.ico";

/*
 * Specifying Children with JSX
 */

/*
 * JSX 中标签可以嵌套子标签；
 */
console.log("\n-------------------------------------------------- 01");

class C010205 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <h1>picture</h1>
        {/* 如果标签没有子元素，可以使用自关闭的写法 */}
        <img src={ico} />
      </div>
    );
  }
}

export { C010205 };
