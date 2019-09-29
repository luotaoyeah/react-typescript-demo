import * as React from "react";
import { Button, Dropdown, Menu } from "antd";

class App extends React.Component {
  public render() {
    const menu = (
      <Menu>
        <Menu.SubMenu title="DOC">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu title="PACKAGES">
          <Menu.SubMenu title="react-router">
            <Menu.Item>TODO</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu>
    );

    return (
      <div className="App">
        <Dropdown overlay={menu}>
          <Button onClick={e => e.preventDefault()} style={{ margin: "10px" }}>
            目录
          </Button>
        </Dropdown>
      </div>
    );
  }
}

export default App;
