/*
 * Caveats
 *     Be careful when using Render Props with React.PureComponent
 */

import React from "react";
import { Button, Divider } from "antd";

interface IAProps {
  children?(state: IAState): React.ReactNode;
}

interface IAState {
  text: string;
}

class A extends React.PureComponent<IAProps, IAState> {
  public render(): React.ReactNode {
    if (this.props.children) {
      return this.props.children(this.state);
    }

    return <i>{this.state.text}</i>;
  }
}

/**  */
class C021603A extends React.Component {
  renderA(state: IAState) {
    return <Button>{state.text}</Button>;
  }

  public render(): React.ReactNode {
    return (
      <React.Fragment>
        {/*
         * 如果 render props 是使用的内联函数，
         * 则每次渲染都会生成一个新的函数，
         * 导致该继承自 React.PureComponent 的组件失去其 pure 的特性；
         */}
        <A>{(state: IAState) => <Button>{state.text}</Button>}</A>
        <Divider />
        {/*
         * 解决方法是，使用一个实例方法，而不是内联函数；
         */}
        <A>{this.renderA}</A>
      </React.Fragment>
    );
  }
}

export { C021603A };
