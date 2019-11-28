/*
 * DOM Elements
 *     Differences In Attributes
 *         onChange
 */

import React, { ChangeEvent } from "react";

/*
 * onChange 事件，当表单元素的数据发生改变时，实时触发
 */
class C03040105 extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  public render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

export { C03040105 };
