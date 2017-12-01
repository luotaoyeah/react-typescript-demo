import * as React from 'react';

interface Props {
}

interface State {
  booleanValue: boolean;
  numberValue: number;
}

class MultipleInput extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      booleanValue: true,
      numberValue: 4
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.SyntheticEvent<HTMLSelectElement | HTMLInputElement>) {
/*
    const type = (e.target as (HTMLSelectElement | HTMLInputElement)).type;
    if (type === 'checkbox') {
      this.setState({
        booleanValue: (e.target as HTMLInputElement).checked
      });
    } else {
      this.setState({
        numberValue: Number((e.target as HTMLInputElement).value)
      });
    }
*/
  }

  render() {
    return (
      <div>
        <label>
          Number:
          <input
            name="numberValue"
            type="number"
            value={this.state.numberValue}
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          Boolean:
          <input
            type="checkbox"
            checked={this.state.booleanValue}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default MultipleInput;