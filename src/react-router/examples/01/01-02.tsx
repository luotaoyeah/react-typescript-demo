/*
 * Examples: URL Parameters
 */

import * as React from "react";
import { Link, Route, RouteComponentProps } from "react-router-dom";
import { Alert, Divider } from "antd";

const C = ({ match }: RouteComponentProps<{ id: string }>) => {
  return <Alert message={match.params.id.toUpperCase()} />;
};

const D = ({ match }: RouteComponentProps<{ id: string }>) => {
  return <Alert type={"error"} message={match.params.id.toUpperCase()} />;
};

/**  */
class C0102 extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <ul>
          <li>
            <Link to={"/a"}>A</Link>
          </li>
          <li>
            <Link to={"/b"}>B</Link>
          </li>
          <li>
            <Link to={"/c"}>C</Link>
          </li>
        </ul>
        <Divider />
        <Route path={"/:id"} exact={true} render={C} />
        {/*
          * 可以通过正则表达式，指定参数的匹配规则；
          */}
        <Route path={"/:id([ac])"} exact={true} render={D} />
      </div>
    );
  }
}

export { C0102 };
