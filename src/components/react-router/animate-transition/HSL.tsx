import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParam {
  h: number;
  s: number;
  l: number;
}

interface Props extends RouteComponentProps<RouteParam> {
}

interface State {
}

export class HSL extends React.Component<Props, State> {
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          color: 'white',
          paddingTop: '20px',
          fontSize: '30px',
          background: `hsl(${this.props.match.params.h}, ${this.props.match.params.s}%, ${this.props.match.params.l}%)`
        }}
      >
        hsl({this.props.match.params.h}, {this.props.match.params.s}%, {this.props.match.params.l}%)
      </div>

    );
  }
}