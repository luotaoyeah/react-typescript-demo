import * as React from 'react';

interface Props {
  scale: 'c' | 'f';
  temperature: number;
  onTemperatureChange: Function;
}

interface State {
}

const scales = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.SyntheticEvent<HTMLInputElement>) {
    const convertedValue: number = Number.parseFloat((e.target as HTMLInputElement).value);
    this.props.onTemperatureChange(Number.isNaN(convertedValue) ? 0 : convertedValue);
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Please input temperature in {scales[this.props.scale]}:</legend>
          <input
            value={this.props.temperature}
            onChange={this.handleChange}
          />
        </fieldset>
      </div>
    );
  }
}

export default TemperatureInput;