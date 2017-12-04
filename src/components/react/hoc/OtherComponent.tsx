import React from 'react';

export interface Props {
  age: number;
  inputRef: (element: HTMLDivElement) => void;
}

interface State {
}

export class OtherComponent extends React.Component<Props, State> {
  static displayName: string = OtherComponent.name;

  render() {
    return (
      <div
        className="Border other-component"
        ref={this.props.inputRef}
      >
        SOME COMPONENT: {this.props.age}
      </div>
    );
  }
}
