import React from 'react';

interface Props {
}

interface State {
  num: number;
}

export class SomeComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      num: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      prevState => {
        return {
          num: prevState.num + 1
        };
      }
    );
  }

  render() {
    if (this.state.num > 5) {
      throw new Error('lt 0.5');
    }

    return (
      <div
        className="Border Clickable"
        onClick={this.handleClick}
      >
        {this.state.num}
      </div>
    );
  }
}
