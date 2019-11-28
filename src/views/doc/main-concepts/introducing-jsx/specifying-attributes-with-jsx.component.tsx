// https://reactjs.org/docs/introducing-jsx.html#specifying-attributes-with-jsx

import * as React from "react";

/**
 * 因为 JSX 本质上是 JS,
 * 因此它的属性在命名上, 使用的是 DOM 对象的 property 形式,
 * 而不是 HTML 的 attribute 形式
 */
class SpecifyingAttributesWithJsxComponent extends React.Component {
  public render() {
    return <div id={Date.now().toString()} className="active" children={Date.now().toString()} />;
  }
}

export { SpecifyingAttributesWithJsxComponent };
