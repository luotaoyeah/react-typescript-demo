/*
 * ReactDOM
 *     Reference
 *         ReactDOM.render()
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Divider, Tag } from 'antd';

/*
 * react-dom 模块，提供了一些用来操作DOM的方法
 */
class C03030101 extends React.Component {
  public constructor(props: Readonly<{}>) {
    super(props);
    this.handleClick01 = this.handleClick01.bind(this);
    this.handleClick02 = this.handleClick02.bind(this);
    this.handleClick03 = this.handleClick03.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  public handleClick01() {
    /*
     * ReactDOM.render() 方法，
     * 将某个元素渲染到某个DOM节点中去
     */
    ReactDOM.render(<Button>FOO</Button>, document.getElementById('div01'));
  }

  // eslint-disable-next-line class-methods-use-this
  public handleClick02() {
    /*
     * 如果该DOM节点中已经存在相同类型的元素，
     * 则会直接执行更新操作
     */
    ReactDOM.render(<Button>BAR</Button>, document.getElementById('div01'));
  }

  // eslint-disable-next-line class-methods-use-this
  public handleClick03() {
    /*
     * 如果该DOM节点中存在其他类型的元素，
     * 则旧的元素会被移除，新的元素会被渲染
     */
    ReactDOM.render(<Tag>BAZ</Tag>, document.getElementById('div01'));
  }

  public render() {
    const vm = this;

    return (
      <div>
        <Button onClick={vm.handleClick01}>A</Button>
        <Button onClick={vm.handleClick02}>B</Button>
        <Button onClick={vm.handleClick03}>C</Button>
        <Divider />
        <div id="div01">DIV01</div>
      </div>
    );
  }
}

export { C03030101 };
