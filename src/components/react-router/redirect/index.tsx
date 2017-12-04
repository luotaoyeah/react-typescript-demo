import React from 'react';
import { RouteComponentProps } from 'react-router';
import {
  Link,
  Route
} from 'react-router-dom';
import { Login } from './Login';
import { PublicPage } from './PublicPage';
import { ProtectedPage } from './ProtectedPage';
import { ProtectedRoute } from './ProtectedRoute';
import { UserInfoWithRoute } from './UserInfo';

interface Props {
}

interface State {
}

export default class Redirects extends React.Component<Props & RouteComponentProps<any>, State> {
  render() {
    return (
      <div>
        <h1>Redirects</h1>

        <ol
          style={
            {
              listStyle: 'initial'
            }
          }
        >
          <li><Link to={`${this.props.match.url}/public`}>public page</Link></li>
          <li><Link to={`${this.props.match.url}/protected`}>protected page</Link></li>
        </ol>

        <UserInfoWithRoute/>
        <Route
          path={`${this.props.match.url}/public`}
          component={PublicPage}
        />
        <ProtectedRoute
          exact={true}
          path={`${this.props.match.url}/protected`}
          component={ProtectedPage}
        />
        <Route
          path={`${this.props.match.url}/login`}
          component={Login}
        /></div>
    );
  }
}