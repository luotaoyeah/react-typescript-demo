import React from 'react';

interface Props {
  name?: string | null;
}

interface State {
}

export class DefaultProps extends React.Component<Props, State> {
  static defaultProps: Props = {
    name: 'tom'
  };

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}