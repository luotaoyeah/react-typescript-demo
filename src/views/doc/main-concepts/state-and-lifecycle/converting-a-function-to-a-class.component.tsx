// https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class

import * as React from "react";

interface IProps {
  date: Date;
}

class Clock extends React.Component<IProps> {
  public render() {
    return <div>{this.props.date.toISOString()}</div>;
  }
}

class ConvertingAFunctionToAClassComponent extends React.Component {
  public render() {
    const date = new Date();

    return (
      <div>
        <Clock date={date} />
      </div>
    );
  }
}

export { ConvertingAFunctionToAClassComponent };
