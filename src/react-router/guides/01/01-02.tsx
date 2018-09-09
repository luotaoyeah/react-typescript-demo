/*
 * Philosophy: Nested Routes
 */

import * as React from "react";
import { Button, Divider, Alert } from "antd";
import { Link, Route, RouteComponentProps } from "react-router-dom";

interface IAProps {}

class A extends React.Component<IAProps & RouteComponentProps<any>> {
  render(): React.ReactNode {
    return (
      <div>
        <Alert message={"A"} type={"error"} />
        <Button type={"dashed"}>
          <Link to={this.props.match.url + "/b"}>goto B</Link>
        </Button>
        <Divider />
        {/*
          * 因为 Route 就是普通的组件，所以可以像嵌套普通的组件一样，
          * 在 Route 的组件中，可以嵌套其他的 Route 组件；
          */}
        <Route path={this.props.match.url + "/b"} component={B} />
      </div>
    );
  }
}

interface IBProps {}

class B extends React.Component<IBProps & RouteComponentProps<any>> {
  render(): React.ReactNode {
    return (
      <div>
        <Alert message={"B"} type={"error"} />
      </div>
    );
  }
}

/**  */
class C0102 extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Button type={"dashed"}>
          <Link to="/a">goto A</Link>
        </Button>
        <Divider />
        <Route path={"/a"} component={A} />
      </div>
    );
  }
}

export { C0102 };
