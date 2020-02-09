import { InfoCircleOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Bind } from 'lodash-decorators';
import React from 'react';
import { Link, Route } from 'react-router-dom';
import './app.less';
import './index.less';
import { ComponentsAndProps } from './views/doc/main-concepts/components-and-props/components-and-props';
import { IntroducingJsx } from './views/doc/main-concepts/introducing-jsx/introducing-jsx';
import { RenderingElements } from './views/doc/main-concepts/rendering-elements/rendering-elements';
import { StateAndLifecycle } from './views/doc/main-concepts/state-and-lifecycle/state-and-lifecycle';
import Home from './views/home';

interface IProps {}

interface IState {
  collapsed: boolean;
}

class App extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);

    this.state = { collapsed: false };
  }

  public render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Layout.Sider
          collapsible={true}
          style={{ paddingTop: '50px' }}
          width={400}
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu theme="dark" mode={'inline'} defaultSelectedKeys={['/home']}>
            <Menu.Item icon={<InfoCircleOutlined />} key="/home">
              <Link to={'/home'}>HOME</Link>
            </Menu.Item>

            <Menu.SubMenu key="doc" icon={<InfoCircleOutlined />} title="DOC">
              <Menu.SubMenu key="main-concepts" title={'MAIN CONCEPTS'}>
                <Menu.Item key="/docs/introducing-jsx">
                  <Link to={'/docs/introducing-jsx'}>INTRODUCING JSX</Link>
                </Menu.Item>
                <Menu.Item key="/docs/rendering-elements">
                  <Link to={'/docs/rendering-elements'}>RENDERING ELEMENTS</Link>
                </Menu.Item>
                <Menu.Item key="/docs/components-and-props">
                  <Link to={'/docs/components-and-props'}>COMPONENTS AND PROPS</Link>
                </Menu.Item>
                <Menu.Item key="/docs/state-and-lifecycle">
                  <Link to={'/docs/state-and-lifecycle'}>STATE AND LIFECYCLE</Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
          </Menu>
        </Layout.Sider>

        <Layout style={{ height: '100%' }}>
          <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 24px' }}>
            <div style={{ color: '#ffffff', fontSize: '20px' }}>@luotao/learning-react</div>
          </Layout.Header>

          <Layout.Content
            style={{
              margin: '50px 0 0 0',
              padding: '12px',
              background: '#ffffff',
              height: '100%',
              overflowY: 'scroll',
              overflowX: 'auto',
            }}
          >
            <Route path={'/home'} component={Home}></Route>
            <Route path={'/docs/introducing-jsx'} component={IntroducingJsx}></Route>
            <Route path={'/docs/rendering-elements'} component={RenderingElements}></Route>
            <Route path={'/docs/components-and-props'} component={ComponentsAndProps}></Route>
            <Route path={'/docs/state-and-lifecycle'} component={StateAndLifecycle}></Route>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }

  @Bind()
  private onCollapse(collapsed: boolean) {
    this.setState({ collapsed });
  }
}

export default App;
