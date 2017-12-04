import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParam {
  user: string;
}

interface Props extends RouteComponentProps<RouteParam> {
}

interface State {
}

export class UserInfo extends React.Component<Props, State> {
  render() {
    return (
      <div>User: {this.props.match.params.user}</div>);
  }
}