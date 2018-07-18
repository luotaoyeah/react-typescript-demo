/*
 * Components and Props
 */
import * as React from "react";

/*
 * component 是相互独立的，相互隔离的，可重用的代码块，
 * 类似 function 一样，接收一定的输入（props），返回 elements；
 */
console.log("\n-------------------------------------------------- 01");

class C010401 extends React.Component {
  render(): React.ReactNode {
    return <div>C010401</div>;
  }
}

export { C010401 };
