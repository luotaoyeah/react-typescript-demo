/*
 * DOM Elements
 *     Differences In Attributes
 *         value
 */

import React, { ChangeEvent } from 'react';
import { Divider } from 'antd';

class C03040109 extends React.Component<{}, { message: string }> {
  public constructor(props: Readonly<{}>) {
    super(props);
    this.state = { message: 'FOO' };
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  public handleMessageChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      message: e.target.value,
    });
  }

  public render() {
    const { message } = this.state;
    return (
      <div>
        {/*
         * value 属性，用在 controlled component 中，
         * 用来设置 <input> 和 <textarea> 元素的值
         */}
        <input type="text" value={message} onChange={this.handleMessageChange} />
        <Divider />
        {/*
         * defaultValue 属性，用在 uncontrolled component 中，
         * 用来设置 <input> 和 <textarea> 元素的初始值
         */}
        <textarea defaultValue="BAR" />
      </div>
    );
  }
}

export { C03040109 };
