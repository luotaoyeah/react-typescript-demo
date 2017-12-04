import React from 'react';

interface Props {
  temperature: number;
}

interface State {
}

class BoilingVerdict extends React.Component <Props, State> {
  render() {
    return (
      <div>
        {this.props.temperature > 100 ? 'BOIL' : 'NOT BOIL'}
      </div>
    );
  }
}

export default BoilingVerdict;