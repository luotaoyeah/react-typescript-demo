import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './StyleLoader';
import {
  BrowserRouter,
  NavLink,
  Route
} from 'react-router-dom';
import {
  Breadcrumb,
  Icon,
  Layout,
  Menu,
  Modal
} from 'antd';
import Basic from './components/react-router/basic';
import UrlParameter from './components/react-router/url-parameter';
import Redirects from './components/react-router/redirect';
import CustomLinkComponent from './components/react-router/custom-link';
import PreventTransition from './components/react-router/prevent-transition';
import NotMatch from './components/react-router/404';
import Sidebar from './components/react-router/sidebar';
import AnimateTransition from './components/react-router/animate-transition';
import AmbiguousMatch from './components/react-router/ambiguous-match';
import ModalGallery from './components/react-router/modal-gallery';

const Header = Layout.Header;
const Content = Layout.Content;
const Sider = Layout.Sider;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

ReactDOM.render(
  <BrowserRouter
    getUserConfirmation={
      /*
       * A function to use to confirm navigation.
       * Defaults to using 'window.confirm'.
       */

      /*
       * Customize prompt for 'Prompt' using 'Modal.confirm()' from 'antd'
       */
      (message: string, callback: (ok: boolean) => void) => {
        Modal.confirm({
          title: 'CONFIRM TO LEAVE',
          content: message,
          okText: 'OK',
          cancelText: 'CANCEL',
          onOk() {
            callback(true);
          },
          onCancel() {
            callback(false);
          }
        });
      }
    }
    forceRefresh={
      /*
       * If true the router will use full page refreshes on page navigation.
       * You probably only want this in browsers that don’t support the HTML5 history API.
       */
      false
    }
  >
    <Layout>
      <Header className="header">
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <MenuItem key="1">nav 1</MenuItem>
          <MenuItem key="2">nav 2</MenuItem>
          <MenuItem key="3">nav 3</MenuItem>
        </Menu>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{ background: '#fff' }}
        >
          <Menu
            mode="inline"
            defaultOpenKeys={['react-router']}
            style={{
              height: '100%',
              borderRight: 0
            }}
          >
            <SubMenu
              key="react-router"
              title={<span><Icon type="user"/>React Router</span>}
            >
              <MenuItem key="1">
                <NavLink to="/basic">{Basic.name}</NavLink>
              </MenuItem>
              <MenuItem key="2">
                <NavLink
                  to="/url-parameter"
                  activeClassName="ant-menu-item-selected"
                >
                  {UrlParameter.name}
                </NavLink>
              </MenuItem>
              <MenuItem key="3">
                <NavLink to="/redirect">{Redirects.name}</NavLink>
              </MenuItem>
              <MenuItem key="4">
                <NavLink to="/custom-link">{CustomLinkComponent.name}</NavLink>
              </MenuItem>
              <MenuItem key="5">
                <NavLink to="/prevent-transition">{PreventTransition.name}</NavLink>
              </MenuItem>
              <MenuItem key="6">
                <NavLink to="/not-match">{NotMatch.name}</NavLink>
              </MenuItem>
              <MenuItem key="7">
                <NavLink to="/sidebar">{Sidebar.name}</NavLink>
              </MenuItem>
              <MenuItem key="8">
                <NavLink to="/animate-transition">{AnimateTransition.name}</NavLink>
              </MenuItem>
              <MenuItem key="9">
                <NavLink to="/ambiguous-match">{AmbiguousMatch.name}</NavLink>
              </MenuItem>
              <MenuItem key="10">
                <NavLink to="/modal-gallery">{ModalGallery.name}</NavLink>
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Route
              path="/basic"
              component={Basic}
            />
            <Route
              path="/url-parameter"
              component={UrlParameter}
            />
            <Route
              path="/redirect"
              component={Redirects}
            />
            <Route
              path="/custom-link"
              component={CustomLinkComponent}
            />
            <Route
              path="/prevent-transition"
              component={PreventTransition}
            />
            <Route
              path="/not-match"
              component={NotMatch}
            />
            <Route
              path="/sidebar"
              component={Sidebar}
            />
            <Route
              path="/animate-transition"
              component={AnimateTransition}
            />
            <Route
              path="/ambiguous-match"
              component={AmbiguousMatch}
            />
            <Route
              path="/modal-gallery"
              component={ModalGallery}
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();