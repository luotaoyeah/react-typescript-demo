import * as React from 'react';
import { Button } from 'antd';
import { AuthenticationService } from './AuthenticationService';
import {
  RouteComponentProps,
  withRouter
} from 'react-router';

interface Props {
}

interface State {
}

class UserInfo extends React.Component <Props & RouteComponentProps<any>, State> {
  constructor(props: Props & RouteComponentProps<any>) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    AuthenticationService.signout(() => {
      this.props.history.push('/redirect');
    });
  }

  render() {
    return (
      <div>
        {
          AuthenticationService.isAuthenticated ?
            <Button onClick={this.handleClick}>Log out</Button>
            :
            null
        }
      </div>
    );
  }
}

const UserInfoWithRoute: React.ComponentClass = withRouter(UserInfo);

export { UserInfoWithRoute };