/*
 * DOM Elements
 *     Differences In Attributes
 *         className
 */

import React from "react";
import { Button } from "antd";

/*
 * react 中设置 CSS 类名需要使用 className 属性
 */
class C03040102 extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Button className="my-btn">FOO</Button>
      </div>
    );
  }
}

export { C03040102 };
