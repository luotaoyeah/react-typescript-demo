import { InfoCircleOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Bind } from 'lodash-decorators';
import React from 'react';
import { Link, Route } from 'react-router-dom';
import './index.less';
import './app.less';
import { ComponentsAndPropsComponent } from './views/doc/main-concepts/components-and-props/components-and-props.component';
import { IntroducingJsxComponent } from './views/doc/main-concepts/introducing-jsx/introducing-jsx.component';
import { RenderingElementsComponent } from './views/doc/main-concepts/rendering-elements/rendering-elements.component';
import { StateAndLifecycleComponent } from './views/doc/main-concepts/state-and-lifecycle/state-and-lifecycle.component';

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
          collapsible
          style={{ paddingTop: '64px' }}
          width={400}
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu theme="dark" mode={'inline'}>
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
              margin: '64px 0 0 0',
              padding: '12px',
              background: '#ffffff',
              height: '100%',
              overflowY: 'scroll',
              overflowX: 'auto',
            }}
          >
            <div style={{ padding: 24, minHeight: 360 }}>
              <Route path={'/docs/introducing-jsx'} component={IntroducingJsxComponent}></Route>
              <Route path={'/docs/rendering-elements'} component={RenderingElementsComponent}></Route>
              <Route path={'/docs/components-and-props'} component={ComponentsAndPropsComponent}></Route>
              <Route path={'/docs/state-and-lifecycle'} component={StateAndLifecycleComponent}></Route>
            </div>
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
