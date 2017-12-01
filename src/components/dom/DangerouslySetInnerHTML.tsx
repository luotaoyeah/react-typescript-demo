import * as React from 'react';

interface Props {
}

interface State {
}

export class DangerouslySetInnerHTML extends React.Component<Props, State> {
  render() {
    return (
      <div
        className="DangerouslySetInnerHTML"
        dangerouslySetInnerHTML={{ __html: '&lt;>' }}
      />
    );
  }
}