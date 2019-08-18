/*
 * ReactDOM
 *     Reference
 *         ReactDOM.render()
 *             callback
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Divider } from 'antd';

/*
 * react-dom 模块，提供了一些用来操作DOM的方法
 */
class C03030102 extends React.Component {
  public constructor(props: Readonly<{}>) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  public handleClick() {
    /*
     * ReactDOM.render() 方法可以接收第三个参数：回调函数，
     * 当元素成功被渲染或者被更新之后调用
     */
    ReactDOM.render(<Button>{new Date().getTime()}</Button>, document.getElementById('div01'), () => {
      console.log(new Date().getTime());
    });
  }

  public render() {
    const vm = this;

    return (
      <div>
        <Button onClick={vm.handleClick}>A</Button>
        <Divider />
        <div id="div01">DIV01</div>
      </div>
    );
  }
}

export { C03030102 };
