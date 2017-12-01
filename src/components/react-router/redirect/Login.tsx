import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect } from 'react-router-dom';
import { AuthenticationService } from './AuthenticationService';
import { LocationDescriptorObject } from 'history';
import {
  Alert,
  Button
} from 'antd';

interface Props {
}

interface State {
  redirectToReferrer: boolean;
}

interface RouteParam {
}

/**
 * Login page
 */
export class Login extends React.Component<Props & RouteComponentProps<RouteParam>, State> {
  constructor(props: Props & RouteComponentProps<RouteParam>) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
    this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this);
  }

  handleLoginButtonClick() {
    AuthenticationService.authenticate().then(() => {
      this.setState({
        redirectToReferrer: true
      });
    });
  }

  render() {
    const from: LocationDescriptorObject = this.props.location.state.from || { pathname: '/' };

    if (this.state.redirectToReferrer) {
      return (
        <Redirect to={from}/>
      );
    }

    return (
      <div>
        <Alert
          type="warning"
          message={`You must login to view the page: ${from.pathname}`}
        />
        <Button onClick={this.handleLoginButtonClick}>Log in</Button>
      </div>
    );
  }
}