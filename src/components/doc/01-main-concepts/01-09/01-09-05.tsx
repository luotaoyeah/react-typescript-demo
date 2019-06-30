/*
 * Forms: Handling Multiple Inputs
 */

import React from 'react';
import { SyntheticEvent } from 'react';

interface IProps {}

interface IState {
  loading: boolean;
  age: number;
}

class C010905 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      age: 0,
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * 可以使用一个回调函数，处理多个表单元素的状态变更事件，
   * 通过 HTMLInputElement.type 属性，或者 HTMLInputElement.name 属性，
   * 区分各个不同的表单元素；
   *
   * @param e
   */
  handleChange(e: SyntheticEvent) {
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

  handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
  }

  public render(): React.ReactNode {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="checkbox" checked={this.state.loading} onChange={this.handleChange} />
          </div>
          <div>
            <input type="number" value={this.state.age} onChange={this.handleChange} />
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export { C010905 };
