/*
 * https://reactjs.org/docs/uncontrolled-components.html
 */

import React from 'react';
import { Button, message } from 'antd';

/*
 * 受控组件(controlled component):
 *   手动绑定表单元素的 value 属性, 以及各种状态变更事件
 *
 * 非受控组件(uncontrolled component):
 *   使用表单元素内置的状态, 由 DOM 来负责更新它的内部状态数据
 */

interface IState {
  bar: string;
}

class C022101 extends React.Component<{}, IState> {
  public ref01 = React.createRef<HTMLInputElement>();

  public constructor(props: {}) {
    super(props);

    this.state = {
      bar: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (this.ref01.current) {
      message.info(this.ref01.current.value);
    }

    const { bar } = this.state;
    message.info(bar);
  }

  private handleChange(e: React.SyntheticEvent) {
    this.setState({
      bar: (e.target as HTMLInputElement).value,
    });
  }

  public render() {
    const { bar } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            {/* 如下是一个 uncontrolled component */}
            <input type="text" ref={this.ref01} />

            {/* 如下是一个 controlled component */}
            <input type="text" value={bar} onChange={this.handleChange} />
          </div>

          <Button htmlType="submit">SUBMIT</Button>
        </form>
      </div>
    );
  }
}

export { C022101 };
