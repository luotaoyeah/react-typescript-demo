/*
 * Render Props
 *     Using Props Other Than render
 */

import React from "react";
import { Button, Divider } from "antd";

/*
 * 可以使用 props.children 属性作为 render props；
 */
interface IAProps {
  children?(state: IAState): React.ReactNode;
}

interface IAState {
  text: string;
}

class A extends React.Component<IAProps, IAState> {
  state: IAState = {
    text: "foo",
  };

  public render(): React.ReactNode {
    if (this.props.children) {
      return this.props.children(this.state);
    }

    return <i>{this.state.text}</i>;
  }
}

/**  */
class C021602B extends React.Component {
  renderA(state: IAState) {
    return <Button>{state.text}</Button>;
  }

  public render(): React.ReactNode {
    return (
      <React.Fragment>
        <A children={this.renderA} />
        <Divider />
        {/*
         * props.children 是一个特殊的属性，可以直接写在标签的中间；
         */}
        <A>{this.renderA}</A>
      </React.Fragment>
    );
  }
}

export { C021602B };
