/*
 * React.Component
 *     Reference
 *         componentDidMount()
 */

import React from 'react';
import { Button, Card, Divider, message } from 'antd';
import ReactDOM from 'react-dom';

interface IProps {}

interface IState {
  avatar: string;
  name: string;
  url: string;
}

class A extends React.Component<IProps, IState> {
  buttonRef: React.RefObject<Button> = React.createRef();

  constructor(props: IProps) {
    super(props);
    this.state = {
      avatar: '',
      name: '',
      url: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(): void {
    const vm = this;

    /*
     * 组件的 DOM 节点挂载到 DOM 树中之后立即执行；
     */

    /*
     * 通常可以在该方法中请求后台数据
     */
    vm.initUserInfo();

    /*
     * 通常可以在该方法中注册事件，同时在 componentWillUnmount() 中取消注册；
     */
    if (vm.buttonRef.current) {
      const button = ReactDOM.findDOMNode(vm.buttonRef.current);
      if (button) {
        (button as HTMLButtonElement).addEventListener('click', vm.handleClick);
      }
    }
  }

  componentWillUnmount(): void {
    const vm = this;

    if (vm.buttonRef.current) {
      const button = ReactDOM.findDOMNode(vm.buttonRef.current);
      if (button) {
        (button as HTMLButtonElement).removeEventListener('click', vm.handleClick);
      }
    }
  }

  handleClick() {
    message.info('hello');
  }

  /**
   * 加载用户信息
   */
  async initUserInfo() {
    const user = await (await fetch('https://api.github.com/users/luotaoyeah')).json();

    this.setState({
      avatar: user.avatar_url,
      name: user.name,
      url: user.html_url,
    });
  }

  public render(): React.ReactNode {
    return (
      <>
        <Card style={{ width: 240 }} cover={<img alt="example" src={this.state.avatar} />}>
          <Card.Meta title={this.state.name} description={this.state.url} />
        </Card>
        <Divider />
        <Button ref={this.buttonRef}>click me</Button>
      </>
    );
  }
}

class C0302030301 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <A />
      </div>
    );
  }
}

export { C0302030301 };
