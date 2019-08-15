/*
 * API
 *     <Route>
 *         component
 */

import React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { Button, Divider } from 'antd';
import { Link } from 'react-router-dom';

interface IUserParam {
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IUserProps extends RouteComponentProps<IUserParam> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IUserState {}

/**  */
// eslint-disable-next-line react/prefer-stateless-function
class User extends React.Component<IUserProps, IUserState> {
  public render(): React.ReactNode {
    const { match } = this.props;
    return <Button>{match.params.name}</Button>;
  }
}

/**  */
function ApiRouteComponent(): React.ReactNode {
  return (
    <div>
      <ul>
        <li>
          <Link to="/users/foo">foo</Link>
        </li>
        <li>
          <Link to="/users/bar">bar</Link>
        </li>
      </ul>
      <Divider />
      {/*
       * 使用 component 属性，指定对应的组件，
       * 当地址匹配时，会调用 React.createElement() 方法创建组件实例，
       * 同时传递三个 props 给该组件（match，location，history）；
       */}
      <Route path="/users/:name" component={User} />
    </div>
  );
}

export { ApiRouteComponent };
