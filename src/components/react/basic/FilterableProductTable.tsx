import React from 'react';

interface Props {
}

interface State {
  value: string;
}

class Form extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: React.SyntheticEvent<HTMLTextAreaElement>) {
    this.setState({
      value: (e.target as HTMLTextAreaElement).value.toUpperCase()
    });
  }

  handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`Name:${this.state.value}`); // tslint:disable-line
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            rows={6}
            placeholder="请输入字符"
          />
          <input
            type="submit"
            value="Submit"
          />
        </label>
      </form>
    );
  }
}

export default Form;