import React from 'react';
import { SyntheticEvent } from 'react';

interface Props {
}

interface State {
  items: string[];
}

export class PassParamToEventHandler extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: [
        'a',
        'b',
        'c'
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: SyntheticEvent<HTMLElement>) {
    console.log((e.target as HTMLElement).dataset.item, (e.target as HTMLElement).dataset.index); // tslint:disable-line
  }

  render() {
    return (
      <div
        className="Border Clickable"
      >
        {
          this.state.items.map((item, index) => (
            <div
              className="Border Clickable"
              key={item}
              onClick={this.handleClick}
              data-item={item}
              data-index={index}
            >
              {item}
            </div>
          ))
        }
      </div>
    );
  }
}