import * as React from 'react';

interface Props {
  kind: string;
  onClick: () => void;
}

interface State {
}

class Button extends React.Component <Props, State> {
  render() {
    const { kind } = this.props;

    const className01: string = kind === 'primary' ? 'primary' : 'default';
    return (
      <button
        className={className01}
      />
    );
  }
}

export default Button;