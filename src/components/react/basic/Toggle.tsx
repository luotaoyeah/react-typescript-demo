import * as React from 'react';

interface Props {
}

interface State {
  isToggleOn: boolean;
}

class Toggle extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name: string, e: React.SyntheticEvent<HTMLAnchorElement>) {
    console.log(name); // tslint:disable-line
    e.preventDefault();
    this.setState((previousState: State, props: Props) => {
      return {
        isToggleOn: !previousState.isToggleOn
      };
    });
  }

  render() {
    return (
      <a
        className="Clickable Border"
        onClick={this.handleClick.bind(this, 'tom')}
      >
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </a>
    );
  }

}

export default Toggle;