import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParam {
}

interface Props {
}

interface State {
}

export class Statistic extends React.Component<Props & Partial<RouteComponentProps<RouteParam>>, State> {
  render() {
    return (
      <div>statistic</div>
    );
  }
}