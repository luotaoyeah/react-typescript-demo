import React from 'react';

interface Props {
}

interface State {
  value: string[];
}

class Select extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: ['March']
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.SyntheticEvent<HTMLSelectElement>) {
    const newValue = (e.target as HTMLSelectElement).value;
    this.setState({
      value: [newValue]
    });
    console.log('this.state.value', newValue); // tslint:disable-line
  }

  render() {
    return (
      <div>
        <select
          multiple={true}
          value={this.state.value}
          onChange={this.handleChange}
        >
          <option value="January">一月</option>
          <option
            value="February"
          >
            二月
          </option>
          <option value="March">三月</option>
        </select>
      </div>
    );
  }
}

export default Select;