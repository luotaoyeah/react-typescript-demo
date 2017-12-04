import React from 'react';
import { clickable } from './HOCClickable';

interface Props {
  message: string;
}

interface State {
}

class SomeComponent extends React.Component<Props, State> {
  static displayName: string = SomeComponent.name;

  render() {
    return (
      <div className="Border">
        SOME COMPONENT: {this.props.message}
      </div>
    );
  }
}

const ClickComponent = clickable<Props>(SomeComponent);

export { ClickComponent };
