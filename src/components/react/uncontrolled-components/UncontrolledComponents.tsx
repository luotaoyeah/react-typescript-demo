import React from 'react';

interface Props {
}

interface State {
}

class UncontrolledComponents extends React.Component <Props, State> {
  inputElement: HTMLElement | null;

  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    console.log((this.inputElement! as HTMLInputElement).value); // tslint:disable-line
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              defaultValue="hello world"
              ref={
                (element) => {
                  this.inputElement = element;
                }
              }
            />
          </label>
          <br/>
          <label>
            Remember:
            <input
              type="checkbox"
              defaultChecked={false}
            />
          </label>
          <br/>
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default UncontrolledComponents;