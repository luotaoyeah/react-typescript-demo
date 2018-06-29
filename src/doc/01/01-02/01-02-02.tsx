import * as React from "react";

/*
 * Embedding Expressions in JSX
 */

/*
 * 可以通过 {} 在 JSX 中嵌入任意合法的表达式；
 */
console.log("\n-------------------------------------------------- 01");

class C010202 extends React.Component {
  private person = { name: "luotao" };

  private hello(): string {
    return "hello";
  }

  render(): React.ReactNode {
    /*
     * JSX 可以跨越多行，此时应该用 () 包裹起来，
     * 以避免 automatic semicolon insertioin；
     */
    return (
      <h1>
        {this.hello()} {this.person.name}
      </h1>
    );
  }
}

export { C010202 };
