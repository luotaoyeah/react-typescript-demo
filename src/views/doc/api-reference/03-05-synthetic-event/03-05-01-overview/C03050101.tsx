/*
 * SyntheticEvent
 *     Overview
 */

import React from "react";
import { Button } from "antd";

/*
 * react 将浏览器的 native event 包装成了 synthetic event，
 * 消除了浏览器之间的差异性和兼容性，
 * 同时，synthetic event 的 API 跟 native event 的 API 是保持一致的
 */
class C03050101 extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent) {
    const prototypeOf = Reflect.getPrototypeOf(Reflect.getPrototypeOf(Reflect.getPrototypeOf(e)));
    console.log(prototypeOf.constructor.name); // SyntheticEvent
  }

  public render() {
    return (
      <div>
        <Button onClick={this.handleClick}>FOO</Button>
      </div>
    );
  }
}

export { C03050101 };
