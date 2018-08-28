/*
 * Handling Events
 */

import * as React from "react";
import { MouseEvent } from "react";
import { Button, message } from "antd";

interface IProps {}

interface IState {
  name: string;
}

class C010601 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: "tom"
    };

    /*
     * class 里面的方法默认是没有绑定 this 的，
     * 如果使用了 onClick={this.handleClick} 这样的形式
     * （注意方法名后面没有小括号，不是方法调用），
     * 则需要在 constructor 中对事件回调函数绑定 this；
     */
    this.handleClick01 = this.handleClick01.bind(this);
  }

  handleClick01(e: MouseEvent) {
    /*
     * 事件对象 e 是一个 SyntheticEvent 对象，
     * 是 react 对原生的事件对象进行包装之后的一个对象；
     */

    /*
     * 如果要阻止事件的默认行为，需要手动调用 e.preventDefault() 方法；
     */
    e.preventDefault();
    message.info(`hello ${this.state.name}`);
  }

  handleClick02(e: MouseEvent) {
    /*
     * 没有在 constructor 中绑定 this，
     * 此处的 this 为 undefined；
     */
    message.info(`hello ${this.state.name}`);
  }

  /*
   * 如果将回调函数定义为 class 的字段，
   * 并且字段值是一个箭头函数，那么可以不用绑定 this；
   */
  handleClick03 = () => {
    message.info(`hello ${this.state.name}`);
  };

  render(): React.ReactNode {
    return (
      <div>
        <p>
          {/*
            * JSX 中事件绑定的写法跟 HTML 中有些区别，
            * 比如在 JSX 中使用的是 camelCase，而在 HTML 中是全部小写；
            */}
          <Button onClick={this.handleClick01}>click me</Button>
        </p>
        <p>
          <a href="https://www.google.com" onClick={this.handleClick01}>
            {"https://www.google.com"}
          </a>
        </p>
        <p>
          <Button onClick={this.handleClick02}>click me</Button>
          <Button onClick={this.handleClick03}>click me</Button>
        </p>
      </div>
    );
  }
}

export { C010601 };
