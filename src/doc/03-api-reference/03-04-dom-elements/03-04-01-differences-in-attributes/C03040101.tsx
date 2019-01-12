/*
 * DOM Elements
 *     Differences In Attributes
 *         checked
 */

import React, { ChangeEvent } from "react";
import { Button, Divider } from "antd";
/*
 * react 单独实现了一套 DOM 系统，解决了以下问题：
 *     1. 解决跨浏览器的兼容性问题
 *     2. 提高了性能
 *     3. 趁机解决了浏览器在 DOM 系统实现上的一些问题
 */

/*
 * 有一些属性（attribute）在 react 和 HTML 中的工作原理是不一样的
 * 在 HTML 中，checked 属性用来设置 checkbox 和 radio 是否默认勾选，
 * 而在 react 中对应的属性是 defaultChecked，
 * react 中的 checked 属性用来实现受控组件（controlled component）
 */

interface IState {
  isCheck: boolean;
}

class C03040101 extends React.Component<{}, IState> {
  constructor(props: Readonly<{ isCheck: boolean }>) {
    super(props);
    this.state = { isCheck: true };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState((prevState: Readonly<IState>) => {
      return {
        isCheck: !prevState.isCheck
      };
    });
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      isCheck: e.target.checked
    });
  }

  render(): React.ReactNode {
    const vm = this;

    return (
      <div>
        <input type="checkbox" defaultChecked={true} />
        <Divider />
        <input type="radio" defaultChecked={true} />
        <Divider />
        <div>
          <input
            type="checkbox"
            checked={vm.state.isCheck}
            onChange={vm.handleChange}
          />
          <br />
          <Button onClick={vm.handleClick}>change</Button>
        </div>
      </div>
    );
  }
}

export { C03040101 };
