import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps
} from 'react-router-dom';
import { AuthenticationService } from './AuthenticationService';

interface Props {
  component: React.ComponentClass;
  path?: string;
  exact?: boolean;
}

interface State {
}

class ProtectedRoute extends React.Component <Props, State> {
  render() {
    const ProtectedComponent = this.props.component;
    return (
      <Route
        exact={this.props.exact}
        path={this.props.path}
        render={
          (props: RouteComponentProps<any>) => (
            AuthenticationService.isAuthenticated ?
              (
                <ProtectedComponent {...props}/>
              )
              :
              (
                <Redirect
                  to={{
                    pathname: 'login',
                    state: { from: props.location }
                  }}
                />
              )
          )
        }
      />
    );
  }
}

export { ProtectedRoute };