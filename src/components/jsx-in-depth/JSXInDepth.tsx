import * as React from 'react';
import { StringLiteralChildren } from './StringLiteralChildren';

interface Props {
}

interface State {
}

class RefAndDom extends React.Component <Props, State> {
  render() {
    return (
      <div>
        <StringLiteralChildren age={18}>
          1
          <StringLiteralChildren age={19}>1.1</StringLiteralChildren>
        </StringLiteralChildren>
      </div>
    );
  }
}

export default RefAndDom;