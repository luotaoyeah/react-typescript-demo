import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface Props {
}

interface State {
}

interface RouteParam {
  id: string;
}

export class Child extends React.Component<Props & RouteComponentProps<RouteParam>, State> {
  render() {
    return (
      <div>
        id:{this.props.match.params.id}
      </div>
    );
  }
}