import "./app.less";
import * as React from "react";
import { Button, Dropdown, Menu } from "antd";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { C010201 } from "./views/doc/01-main-concepts/01-02/01-02-01";

class App extends React.Component {
  public render() {
    const menu = (
      <Menu>
        <Menu.SubMenu title="DOC">
          <Menu.SubMenu title="MAIN CONCEPTS">
            <Menu.Item>Hello World</Menu.Item>
            <Menu.Item>
              <Link to={"/docs/introducing-jsx"}>Introducing JSX</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>

        <Menu.SubMenu title="PACKAGES">
          <Menu.SubMenu title="react-router">
            <Menu.Item>TODO</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu>
    );

    return (
      <div className="app">
        <Dropdown overlay={menu}>
          <Button onClick={e => e.preventDefault()} style={{ margin: "10px" }}>
            目录
          </Button>
        </Dropdown>

        <div style={{ height: "calc(100% - 52px)", padding: "10px" }}>
          <Route path={"/docs/introducing-jsx"} component={C010201}></Route>
        </div>
      </div>
    );
  }
}

export default App;
