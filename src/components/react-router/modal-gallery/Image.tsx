import React from 'react';

interface Props {
  color: string;
}

interface State {
}

export class Image extends React.Component<Props, State> {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: 400,
          background: this.props.color
        }}
      />
    );
  }
}