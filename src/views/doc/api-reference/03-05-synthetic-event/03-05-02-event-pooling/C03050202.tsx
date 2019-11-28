/*
 * SyntheticEvent
 *     Event Pooling
 *         React.BaseSyntheticEvent.persist()
 */

import React from "react";
import { Button } from "antd";

class C03050202 extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent) {
    /*
     * 如果希望通过异步的方式访问 synthetic event 对象，
     * 需要先调用 React.BaseSyntheticEvent.persist() 方法，
     * 将事件对象持久化，再进行访问
     */
    e.persist();
    setTimeout(() => {
      console.log(e.type);
    });
  }

  public render() {
    return (
      <div>
        <Button onClick={this.handleClick}>FOO</Button>
      </div>
    );
  }
}

export { C03050202 };
