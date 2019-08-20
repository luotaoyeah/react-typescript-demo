/*
 * https://reactjs.org/docs/forms.html#handling-multiple-inputs
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  loading: boolean;
  age: number;
}

class C010905 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      age: 0,
      loading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * 可以使用一个回调函数, 来处理多个表单元素的状态变更事件,
   * 通过 HTMLInputElement.type 属性, 或者 HTMLInputElement.name 属性, 来区分各个不同的表单元素
   */
  public handleChange(e: React.SyntheticEvent) {
    const inputEl: HTMLInputElement = e.target as HTMLInputElement;

    if (inputEl.type === 'checkbox') {
      this.setState({
        loading: inputEl.checked,
      });
    } else if (inputEl.type === 'number') {
      this.setState({
        age: Number(inputEl.value),
      });
    }
  }

  public handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log(this.state);
  }

  public render() {
    const { loading, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="checkbox" checked={loading} onChange={this.handleChange} />
        </div>

        <div>
          <input
            type="number"
            value={age}
            onChange={this.handleChange}
            style={{
              outline: 'none',
              borderRadius: '3px',
            }}
          />
        </div>

        <Button htmlType="submit">SUBMIT</Button>
      </form>
    );
  }
}

export { C010905 };
