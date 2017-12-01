import * as React from 'react';
import { ReactChild } from 'react';

interface Props {
}

interface State {
}

export class Children extends React.Component<Props, State> {

  componentDidMount() {
    const children: ReactChild[] = React.Children.toArray(this.props.children);
    console.log(children); // tslint:disable-line
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}