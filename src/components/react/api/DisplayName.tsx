import * as React from 'react';

interface Props {
}

interface State {
}

export class DisplayName extends React.Component<Props, State> {
  static displayName: string = 'SomeOtherDisplayN.ameForDebugging';

  render() {
    return (
      <div>
        TODO
      </div>
    );
  }
}