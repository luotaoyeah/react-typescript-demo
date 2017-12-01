import * as React from 'react';
import SimpleClock from './SimpleClock';

interface Props {
}

interface State {
  /**
   * 日期
   */
  date: Date;
  age?: number;
}

class Clock extends React.Component <Props, State> {
  timerId: number;

  constructor(props: Props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerId = window.setInterval(
      () => {
        this.setState((previousState: State, props: Props) => {
          return {
            date: new Date()
          };
        });
      },
      1000
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <b>{this.state.date.toTimeString()}</b>
        <SimpleClock date={this.state.date}/>
      </div>
    );
  }
}

export default Clock;