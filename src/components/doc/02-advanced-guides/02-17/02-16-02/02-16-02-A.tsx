/*
 * Render Props
 *     Using Props Other Than render
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 作为 render props 的属性，不一定要叫 render，
 * 其他任何满足规定的属性都可以当做 render props，比如 render02；
 */

interface IAProps {
  render02?(state: IAState): React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAState {}

class A extends React.Component<IAProps, IAState> {
  public render() {
    const { render02 } = this.props;
    if (render02) {
      return render02(this.state);
    }
    return <i>A</i>;
  }
}

/**  */
class C021602A extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  public renderA(state: IAState) {
    return <Button>A</Button>;
  }

  public render() {
    return <A render02={this.renderA} />;
  }
}

export { C021602A };
