/*
 * https://reactjs.org/docs/forms.html#the-select-tag
 */

import React, { SyntheticEvent } from 'react';
import { Button, Divider } from 'antd';
import './01-09-04.less';

/*
 * 在 HTML 中, <select> 标签可以通过在 <option> 上设置 selected 属性来设置默认的选中项
 */
function C010904A() {
  return (
    <select>
      <option value="a">A</option>
      <option value="b" selected>
        B
      </option>
      <option value="c">C</option>
    </select>
  );
}

interface IState {
  option: string;
  options: Array<string>;
}

class C010904 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = { option: 'b', options: ['a', 'c'] };

    this.handleChange01 = this.handleChange01.bind(this);
    this.handleChange02 = this.handleChange02.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange01(e: SyntheticEvent) {
    this.setState({
      option: (e.target as HTMLSelectElement).value,
    });
  }

  public handleChange02(e: SyntheticEvent) {
    /*
     * 对于多选的 <select>,
     * 需要手动根据 option 的 selected 是否为 true 进行过滤, 得到当前所有的选中项
     */
    this.setState({
      options: Array.from((e.target as HTMLSelectElement).options)
        .filter(i => i.selected)
        .map(i => i.value),
    });
  }

  public handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    const { option, options } = this.state;
    console.log(option);
    console.log(options);
  }

  public render() {
    const { option, options } = this.state;

    return (
      <div>
        <C010904A />

        <Divider></Divider>

        <form onSubmit={this.handleSubmit}>
          {/* 在 react 中, <select> 跟 <input> 一样也是通过 value 属性绑定标签的值, 并且通过 onChange 事件更新数据 */}
          <div>
            <select value={option} onChange={this.handleChange01}>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
          </div>

          {/* 通过设置 multiple 为 true 支持多选 */}
          <div>
            <select multiple value={options} onChange={this.handleChange02}>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
          </div>

          <Button htmlType="submit">SUBMIT</Button>
        </form>
      </div>
    );
  }
}

export { C010904 };
