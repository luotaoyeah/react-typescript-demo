// https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class

import React from 'react';

interface IProps {}

interface IState {
  date: Date;
}

class Clock extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  public render() {
    return <div>{this.state.date.toISOString()}</div>;
  }
}

class AddingLocalStateToAClassComponent extends React.Component {
  public render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

export { AddingLocalStateToAClassComponent };
