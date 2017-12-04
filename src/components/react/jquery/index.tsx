import React from 'react';
import { Chosen } from './Chosen';

interface Props {
}

interface State {
  options: string[];
}

export default class ChapterIndex extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      options: [new Date().getTime().toString()]
    };
  }

  componentDidMount() {
    setInterval(
      () => {
        this.setState((prevState) => {
          return {
            options: [...prevState.options, new Date().getTime().toString()]
          };
        });
      },
      1000
    );
  }

  render() {
    return (
      <div>
        <Chosen
          onChange={
            (value: string) => {
              console.log('selected:', value); // tslint:disable-line
            }
          }
        >
          {this.state.options.map((option) => <option key={option}>{option}</option>)}
        </Chosen>
      </div>
    );
  }
}