/*
 * Philosophy: Nested Routes
 */

import React from 'react';
import { Alert, Button, Divider } from 'antd';
import { Link, Route, RouteComponentProps } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class B extends React.Component<{} & RouteComponentProps<any>> {
  public render() {
    return (
      <div>
        <Alert message="B" type="error" />
      </div>
    );
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class A extends React.Component<{} & RouteComponentProps<any>> {
  public render(): React.ReactNode {
    const { match } = this.props;
    return (
      <div>
        <Alert message="A" type="error" />
        <Button type="dashed">
          <Link to={`${match.url}/b`}>goto B</Link>
        </Button>
        <Divider />
        {/*
         * 因为 Route 就是普通的组件，所以可以像嵌套普通的组件一样，
         * 在 Route 的组件中，可以嵌套其他的 Route 组件；
         */}
        <Route path={`${match.url}/b`} component={B} />
      </div>
    );
  }
}

/**  */
function C0102(): React.ReactNode {
  return (
    <div>
      <Button type="dashed">
        <Link to="/a">goto A</Link>
      </Button>
      <Divider />
      <Route path="/a" component={A} />
    </div>
  );
}

export { C0102 };
