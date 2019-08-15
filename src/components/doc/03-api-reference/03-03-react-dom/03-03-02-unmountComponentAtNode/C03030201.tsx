/*
 * ReactDOM
 *     Reference
 *         ReactDOM.unmountComponentAtNode()
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Divider } from 'antd';

class C03030201 extends React.Component {
  public constructor(props: Readonly<{}>) {
    super(props);
    this.handleClick01 = this.handleClick01.bind(this);
    this.handleClick02 = this.handleClick02.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  public handleClick01() {
    ReactDOM.render(<Button>A</Button>, document.getElementById('div01'));
  }

  // eslint-disable-next-line class-methods-use-this
  public handleClick02() {
    const element = document.getElementById('div01');
    if (element) {
      /*
       * ReactDOM.unmountComponentAtNode() 方法，
       * 删除只当的 DOM 节点下面的组件，然后返回 true
       * 如果该节点下面没有组件，则直接返回 false
       */
      console.log(ReactDOM.unmountComponentAtNode(element)); // true
      console.log(ReactDOM.unmountComponentAtNode(element)); // false
    }
  }

  public render(): React.ReactNode {
    const vm = this;

    return (
      <div>
        <Button onClick={vm.handleClick01}>public render()</Button>
        <Button onClick={vm.handleClick02}>unmountComponentAtNode()</Button>
        <Divider />
        <div id="div01">DIV01</div>
      </div>
    );
  }
}

export { C03030201 };
