import React from 'react';
import { RouteComponentProps } from 'react-router';

interface Props {
}

interface State {
}

export default class ApiLink extends React.Component<Props & RouteComponentProps<any>, State> {
  render() {
    return (
      <div>
        <h1>NotFound</h1>
        <div className="Border">TODO</div>
      </div>
    );
  }
}