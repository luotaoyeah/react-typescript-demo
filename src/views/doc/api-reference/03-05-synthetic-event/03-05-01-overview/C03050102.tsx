/*
 * SyntheticEvent
 *     Overview
 *         nativeEvent
 */

import React from "react";
import { Button } from "antd";

class C03050102 extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent) {
    /*
     * 可以通过 React.BaseSyntheticEvent.nativeEvent 属性，
     * 获取到浏览器原生的事件对象
     */
    console.log(e.nativeEvent instanceof MouseEvent); // true
  }

  public render() {
    return (
      <div>
        <Button onClick={this.handleClick}>FOO</Button>
      </div>
    );
  }
}

export { C03050102 };
