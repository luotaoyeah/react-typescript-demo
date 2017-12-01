import * as React from 'react';

interface Props {
  name?: string;
  age: number;
}

interface State {
}

export class StringLiteralChildren extends React.Component <Props, State> {
  static defaultProps: Partial<Props> = {
    name: 'tom'
  };

  render() {
    return [
      (
        <div key="a">
          <b>BOLD：{this.props.children}</b>
          <br/>
          <b>NAME：{this.props.name}</b>
        </div>
      ),
      (
        <div key="b">
          <i>ITALIC：{this.props.children}</i>
        </div>
      )
    ];
  }
}