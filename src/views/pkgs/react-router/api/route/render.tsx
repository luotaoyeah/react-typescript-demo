/*
 * API
 *     <Route>
 *         render
 */

import React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router';
import { Button, Card, Divider } from 'antd';
import { Link } from 'react-router-dom';

interface IUserParam {
  name: string;
}

interface IUserProps extends RouteComponentProps<IUserParam> {
  age?: number;
}

interface IUserState {}

/**  */
class User extends React.Component<IUserProps, IUserState> {
  public render() {
    return (
      <Button type={'primary'}>
        {this.props.match.params.name}，{this.props.age}
      </Button>
    );
  }
}

/**
 * 使用 <Route> 的 render 属性，可以实现个性化的 <Route> 组件；
 * @param routeProps
 * @returns {any}
 * @constructor
 */
const MyRoute = (routeProps: RouteProps) => {
  const { component, ...rest } = routeProps;
  const C = component as React.ComponentClass<any>;
  const renderFn = (props: RouteComponentProps) => {
    return (
      <Card>
        <C {...props} age={19} />
      </Card>
    );
  };
  return <Route {...rest} render={renderFn} />;
};

/**  */
class ApiRouteRender extends React.Component {
  /**
   *
   * @param props
   */
  renderUser(props: RouteComponentProps<IUserParam>) {
    return <User {...props} age={18} />;
  }

  public render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={'/users/foo'}>foo</Link>
          </li>
          <li>
            <Link to={'/users/bar'}>bar</Link>
          </li>
        </ul>
        <Divider />
        {/*
         * 使用 render 属性，可以自定义组件的渲染方式；
         * 此处用到了 React 的 render props 特性；
         */}
        <Route path={'/users/:name'} render={this.renderUser} />
        <MyRoute path={'/users/:name'} component={User} />
      </div>
    );
  }
}

export { ApiRouteRender };
