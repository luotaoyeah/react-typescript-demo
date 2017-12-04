import React from 'react';

import BoilingVerdict from './BoilingVerdict';

interface Props {
}

interface State {
  temperature: number;
}

class TemperatureCalculator extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      temperature: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      temperature: Number.parseFloat((e.target as HTMLInputElement).value)
    });
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Please input temperature in celsius:</legend>
          <input
            type="number"
            value={this.state.temperature}
            onChange={this.handleChange}
          />
          <BoilingVerdict
            temperature={this.state.temperature}
          />
        </fieldset>
      </div>
    );
  }
}

export default TemperatureCalculator;