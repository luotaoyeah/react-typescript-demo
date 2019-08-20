/*
 * https://reactjs.org/docs/forms.html#controlled-input-null-value
 */

import React, { SyntheticEvent } from 'react';
import { Button } from 'antd';

interface IState {
  name: string;
}

class C010906 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      name: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  public handleChange() {}

  public handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    console.log(this.state);
  }

  /*
   * 正常情况下, 如果绑定了表单元素的 value 属性, 那么除非使用 setState() 方法更新了 state 数据,
   * 否则表单元素将处于不可编辑的状态
   *
   * 如果 value 绑定的值为 undefined, 则表单元素会变成一个 uncontrolled component, 可被编辑
   */
  public render() {
    const { name } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" value={name} onChange={this.handleChange} />
            <input type="text" value={undefined} onChange={this.handleChange} />
          </div>

          <Button htmlType="submit">SUBMIT</Button>
        </form>
      </div>
    );
  }
}

export { C010906 };
