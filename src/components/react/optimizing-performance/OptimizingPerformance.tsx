import React from 'react';
import { WordAdder } from './WordAdder';

interface Props {
  color?: string;
}

interface State {
  count: number;
}

class OptimizingPerformance extends React.PureComponent <Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  /*
    shouldComponentUpdate(nextProps: Props, nextState: State) {
      console.log('shouldComponentUpdate'); // tslint:disable-line
      return this.state.count !== nextState.count;
    }
  */

  handleButtonClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <div>
        <div>COUNT: {this.state.count}</div>
        <button onClick={this.handleButtonClick}>++</button>
        <WordAdder/>
      </div>
    );
  }
}

export default OptimizingPerformance;