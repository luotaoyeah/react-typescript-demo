/*
 * React.Component
 *     Reference
 *         componentDidMount()
 */

import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Card, Divider, message } from 'antd';
import ReactDOM from 'react-dom';

interface IState {
  avatar: string;
  name: string;
  url: string;
}

class A extends React.Component<{}, IState> {
  public buttonRef: React.RefObject<Button> = React.createRef();

  public constructor(props: {}) {
    super(props);
    this.state = {
      avatar: '',
      name: '',
      url: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  public componentDidMount(): void {
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
      // eslint-disable-next-line react/no-find-dom-node
      const button = ReactDOM.findDOMNode(vm.buttonRef.current);
      if (button) {
        (button as HTMLButtonElement).addEventListener('click', vm.handleClick);
      }
    }
  }

  public componentWillUnmount(): void {
    const vm = this;

    if (vm.buttonRef.current) {
      // eslint-disable-next-line react/no-find-dom-node
      const button = ReactDOM.findDOMNode(vm.buttonRef.current);
      if (button) {
        (button as HTMLButtonElement).removeEventListener('click', vm.handleClick);
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public handleClick() {
    message.info('hello');
  }

  /**
   * 加载用户信息
   */
  public async initUserInfo() {
    const user = await (await fetch('https://api.github.com/users/luotaoyeah')).json();

    this.setState({
      avatar: user.avatar_url,
      name: user.name,
      url: user.html_url,
    });
  }

  public render(): React.ReactNode {
    const { avatar } = this.state;
    const { url, name } = this.state;
    return (
      <>
        <Card style={{ width: 240 }} cover={<img alt="example" src={avatar} />}>
          <Card.Meta title={name} description={url} />
        </Card>
        <Divider />
        <Button ref={this.buttonRef}>click me</Button>
      </>
    );
  }
}

function C0302030301(): React.ReactNode {
  return (
    <div>
      <A />
    </div>
  );
}

export { C0302030301 };
