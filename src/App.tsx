import * as React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import {
  Button,
  Dropdown,
  Menu
} from 'antd';
import Basic from './components/react-router/basic';
import UrlParameter from './components/react-router/url-parameter';
import Redirects from './components/react-router/redirect';

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
      </Menu.SubMenu>
    </Menu>
  );

  render() {
    return (
      <div>
        <Router>
          <div>
            <Dropdown
              overlay={this.menus}
              placement="bottomLeft"
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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
