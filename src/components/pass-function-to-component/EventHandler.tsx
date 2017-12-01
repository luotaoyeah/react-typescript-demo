import * as React from 'react';
import { SyntheticEvent } from 'react';

interface Props {
}

interface State {
}

export class EventHandler extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: SyntheticEvent<HTMLDivElement>, ...args: any[]) {
    console.log(args); // tslint:disable-line
  }

  render() {
    return (
      <div
        className="Border Clickable"
        onClick={(e: SyntheticEvent<HTMLDivElement>) => {
          this.handleClick(e, 'a', true);
        }}
      >
        TODO
      </div>
    );
  }
}