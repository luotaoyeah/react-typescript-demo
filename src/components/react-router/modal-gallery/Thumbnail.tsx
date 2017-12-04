import React from 'react';

interface Props {
  color: string;
}

interface State {
}

export class Thumbnail extends React.Component<Props, State> {
  render() {
    return (
      <div
        style={{
          width: 50,
          height: 50,
          background: this.props.color
        }}
      />
    );
  }
}