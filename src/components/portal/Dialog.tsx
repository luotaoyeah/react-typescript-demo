import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
}

interface State {
}

export class Dialog extends React.Component<Props, State> {

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById('portal')!
    );
  }
}