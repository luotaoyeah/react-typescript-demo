/*
 * https://reactjs.org/docs/react-component.html#componentdidmount
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card } from 'antd';

interface IState {
  avatar: string;
  name: string;
  url: string;
  loading: boolean;
}

class C03020401A extends React.Component<{}, IState> {
  public buttonRef: React.RefObject<Button> = React.createRef<Button>();

  public constructor(props: {}) {
    super(props);

    this.state = {
      avatar: '',
      name: '',
      url: '',
      loading: false,
    };

    this.initUserInfo = this.initUserInfo.bind(this);
  }

  /*
   * 组件挂载到 DOM 树上之后触发 componentDidMount() 方法,
   *   1. 在该方法中可以访问组件的 DOM 对象
   *   2. 在该方法中可以访问后台接口
   *   3. 在该方法中可以订阅事件, 并在 componentWillUnmount() 中取消订阅
   */
  public componentDidMount(): void {
    this.initUserInfo();

    if (this.buttonRef.current) {
      // eslint-disable-next-line react/no-find-dom-node
      const button = ReactDOM.findDOMNode(this.buttonRef.current);
      if (button) {
        (button as HTMLButtonElement).addEventListener('click', this.initUserInfo);
      }
    }
  }

  public componentWillUnmount(): void {
    if (this.buttonRef.current) {
      // eslint-disable-next-line react/no-find-dom-node
      const button = ReactDOM.findDOMNode(this.buttonRef.current);
      if (button) {
        (button as HTMLButtonElement).removeEventListener('click', this.initUserInfo);
      }
    }
  }

  /**
   * 加载用户信息
   */
  private async initUserInfo() {
    this.setState({
      loading: true,
      avatar: '',
    });

    try {
      const user = await (await fetch('https://api.github.com/users/luotaoyeah')).json();

      this.setState({
        avatar: user.avatar_url,
        name: user.name,
        url: user.html_url,
        loading: false,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  public render() {
    const { avatar, url, name, loading } = this.state;

    return (
      <>
        <Button type="primary" ref={this.buttonRef} loading={loading}>
          RELOAD
        </Button>

        <Card hoverable={true} style={{ width: 240, marginTop: '10px' }} cover={<img src={avatar} />} loading={loading}>
          <Card.Meta title={name} description={url} />
        </Card>
      </>
    );
  }
}

function C03020401() {
  return <C03020401A />;
}

export { C03020401 };
