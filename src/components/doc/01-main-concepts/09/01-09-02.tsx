/*
 * Forms: Controlled Components
 */

import React, { SyntheticEvent } from 'react';

/*
 * 表单元素 <input> <select> <texxtarea>，会维护自己的状态，
 * 并且会根据用户的输入，不断更新它们的状态数据；
 *
 * 在 react 中，所有的状态数据都是存放在 state 对象中的，
 * 并且只能通过 setState() 方法来更新状态数据；
 *
 * 把这两点结合起来，由 state 来控制表单元素的状态数据，
 * 这时候这些表单元素称之为 controlled component；
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

  public handleChange(e: SyntheticEvent) {
    /*
     * 监听表单元素的事件，从而更新对应的状态数据；
     */
    this.setState({
      name: (e.target as HTMLInputElement).value.toUpperCase(),
    });
  }

  public handleSubmit(e: SyntheticEvent) {
    /*
     * 阻止表单提交的默认操作，即刷新页面；
     */
    e.preventDefault();

    /*
     * 获取表单数据
     */
    const { name } = this.state;
    alert(`name: ${name}`);
  }

  public render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
        <label>
          NAME：
          <input type="text" value={name} onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </label>
      </form>
    );
  }
}

export { C010902 };
