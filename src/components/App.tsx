import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import {
  Button,
  Dropdown,
  Menu,
  Modal
} from 'antd';
import Basic from './react-router/basic/index';
import UrlParameter from './react-router/url-parameter/index';
import Redirects from './react-router/redirect/index';
import CustomLinkComponent from './react-router/custom-link/index';
import PreventTransition from './react-router/prevent-transition/index';
import NotMatch from './react-router/404/index';
import Sidebar from './react-router/sidebar/index';
import AnimateTransition from './react-router/animate-transition/index';
import AmbiguousMatch from './react-router/ambiguous-match/index';
import ModalGallery from './react-router/modal-gallery/index';

interface Props {
}

interface State {
}

class App extends React.Component<Props, State> {
  menus: JSX.Element = (
    <Menu
      mode="vertical"
      style={
        {
          width: '120px'
        }
      }
    >
      <Menu.SubMenu
        key="react-router"
        title="react-router"
      >
        <Menu.Item key="1">
          <Link to="/basic">{Basic.name}</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/url-parameter">{UrlParameter.name}</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/redirect">{Redirects.name}</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/custom-link">{CustomLinkComponent.name}</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/prevent-transition">{PreventTransition.name}</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/not-match">{NotMatch.name}</Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/sidebar">{Sidebar.name}</Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link to="/animate-transition">{AnimateTransition.name}</Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Link to="/ambiguous-match">{AmbiguousMatch.name}</Link>
        </Menu.Item>
        <Menu.Item key="10">
          <Link to="/modal-gallery">{ModalGallery.name}</Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );

  render() {
    return (
      <div>
        <Router
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
          <div>
            <Dropdown
              overlay={this.menus}
              placement="bottomLeft"
              trigger={['click']}
            >
              <Button
                style={
                  {
                    width: '100%'
                  }
                }
              >
                Contents
              </Button>
            </Dropdown>

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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
