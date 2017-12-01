import * as React from 'react';
import GreetingGuest from './GreetingGuest';
import GreetingUser from './GreetingUser';

interface Props {
  isLoggedIn: boolean;
}

interface State {
  isLoggedIn: boolean;
}

class Greeting extends React.Component <Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.SyntheticEvent<HTMLAnchorElement>) {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? <GreetingUser/> : <GreetingGuest/>}
        <a
          className="Border Clickable"
          onClick={this.handleClick}
        >
          {this.state.isLoggedIn ? 'LOG OUT' : 'LOG IN'}
        </a>
      </div>
    );
  }
}

export default Greeting;