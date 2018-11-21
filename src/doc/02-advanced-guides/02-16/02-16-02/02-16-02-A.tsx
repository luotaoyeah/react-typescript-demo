/*
 * Render Props
 *     Using Props Other Than render
 */

import React from "react";
import { Button } from "antd";

/*
 * 作为 render props 的属性，不一定要叫 render，
 * 其他任何满足规定的属性都可以当做 render props，比如 render02；
 */

interface IAProps {
  render02?(state: IAState): React.ReactNode;
}

interface IAState {}

class A extends React.Component<IAProps, IAState> {
  render(): React.ReactNode {
    if (this.props.render02) {
      return this.props.render02(this.state);
    }
    return <i>A</i>;
  }
}

/**  */
class C021602A extends React.Component {
  renderA(state: IAState) {
    return <Button>A</Button>;
  }

  render(): React.ReactNode {
    return <A render02={this.renderA} />;
  }
}

export { C021602A };
