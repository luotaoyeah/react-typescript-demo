import React from 'react';
import TemperatureInput from './TemperatureInput';
import { Helper } from './Helper';

interface Props {
}

interface State {
  temperature: number;
  scale: 'c' | 'f';
}

class TemperatureCalculator extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      temperature: 0,
      scale: 'c'
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature: number) {
    this.setState({
      scale: 'c',
      temperature
    });
  }

  handleFahrenheitChange(temperature: number) {
    this.setState({
      scale: 'f',
      temperature
    });
  }

  render() {
    const celsius: number = this.state.scale === 'c' ? this.state.temperature : Helper.convert(this.state.temperature, Helper.convertFahrenheitToCelsius);
    const fahrenheit: number = this.state.scale === 'f' ? this.state.temperature : Helper.convert(this.state.temperature, Helper.convertCelsiusToFahrenheit);

    return (
      <div>
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
      </div>
    );
  }
}

export default TemperatureCalculator;