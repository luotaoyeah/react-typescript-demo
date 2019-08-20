/*
 * https://reactjs.org/docs/forms.html#controlled-components
 */

import React, { SyntheticEvent } from 'react';
import { Button, Input, message } from 'antd';

/*
 * 默认情况下, 表单元素都会维护自己的内部状态,
 * 如果我们不使用它的内部状态, 而是让 react 来控制它的状态, 这时候, 这个表单元素就称之为 controlled component,
 * 使用 controlled component 时, 需要手动绑定 value 属性, 并且监听 onChange 事件(或者其他状态变更事件)
 */

interface IState {
  name: string;
}

class C010902 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = { name: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*
   * 监听表单元素的变更事件, 从而更新它的状态数据
   */
  public handleChange(e: SyntheticEvent) {
    this.setState({
      name: (e.target as HTMLInputElement).value,
    });
  }

  public handleSubmit(e: SyntheticEvent) {
    /*
     * 阻止表单提交的默认操作(刷新页面)
     */
    e.preventDefault();

    const { name } = this.state;
    message.info(name, 9999);
  }

  public render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input value={name} onChange={this.handleChange}></Input>
        <Button htmlType="submit">SUBMIT</Button>
      </form>
    );
  }
}

export { C010902 };
