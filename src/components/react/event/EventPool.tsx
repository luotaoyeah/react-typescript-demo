import React from 'react';
import { SyntheticEvent } from 'react';

interface Props {
}

interface State {
}

export class EventPool extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: SyntheticEvent<HTMLDivElement>) {
    console.log(e.eventPhase); // tslint:disable-line
  }

  render() {
    return (
      <div
        className="Border Clickable"
        onClickCapture={this.handleClick}
      >
        TODO
      </div>
    );
  }
}