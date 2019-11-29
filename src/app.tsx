import "./app.less";
import * as React from "react";
import { Button, Menu, Popover } from "antd";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { IntroducingJsxComponent } from "./views/doc/main-concepts/introducing-jsx/introducing-jsx.component";
import { RenderingElementsComponent } from "./views/doc/main-concepts/rendering-elements/rendering-elements.component";

class App extends React.Component {
  public render() {
    const menu = (
      <Menu openTransitionName="" openAnimation="" mode={"inline"}>
        <Menu.SubMenu title="DOC">
          <Menu.SubMenu title={"MAIN CONCEPTS"}>
            <Menu.Item>
              <Link to={"/docs/introducing-jsx"}>introducing-jsx</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/docs/rendering-elements"}>rendering-elements</Link>
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
        <Popover
          content={menu}
          transitionName=""
          placement="bottomLeft"
          trigger="click"
          overlayClassName="popover-content-menu"
        >
          <Button type="primary" style={{ margin: "10px", width: "calc(100% - 20px)" }}>
            目录
          </Button>
        </Popover>

        <div style={{ height: "calc(100% - 52px)", padding: "10px" }}>
          <Route path={"/docs/introducing-jsx"} component={IntroducingJsxComponent}></Route>
          <Route path={"/docs/rendering-elements"} component={RenderingElementsComponent}></Route>
        </div>
      </div>
    );
  }
}

export default App;
