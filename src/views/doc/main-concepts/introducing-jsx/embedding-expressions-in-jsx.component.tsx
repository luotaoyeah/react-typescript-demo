// https://reactjs.org/docs/introducing-jsx.html

import * as React from "react";

/**
 * 可以通过 `{}` 在 JSX 中嵌入任意的表达式
 */
class EmbeddingExpressionsInJsxComponent extends React.Component {
  private foo: string = "FOO";

  private get bar() {
    return "BAR";
  }

  private baz() {
    return "BAZ";
  }

  render() {
    return (
      <div>
        <p>{this.foo}</p>
        <p>{this.bar}</p>
        <p>{this.baz()}</p>
      </div>
    );
  }
}

export { EmbeddingExpressionsInJsxComponent };
