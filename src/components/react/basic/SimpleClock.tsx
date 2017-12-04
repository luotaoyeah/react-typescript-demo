import React from 'react';

interface Props {
  date: Date;
}

interface State {
}

class SimpleClock extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <p>{this.props.date.toLocaleTimeString()}</p>
    );
  }
}

export default SimpleClock;