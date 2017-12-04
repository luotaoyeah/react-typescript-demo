import * as React from 'react';

interface Props {
}

interface State {
}

class Event01 extends React.Component <Props, State> {

  handleClick(e: React.SyntheticEvent<any>) {
    e.preventDefault();
    console.log('click'); // tslint:disable-line
  }

  render() {
    return (
      <a
        className="Border"
        onClick={this.handleClick}
      >
        button
      </a>
    );
  }
}

export default Event01;