import React from "react";
import { IMouseState, Mouse } from "./Mouse";

/**
 * 使用 render props 实现 HOC
 * @param Component
 */
export function withMouse<P extends { mouse: IMouseState }>(Component: React.ComponentType<any>) {
  return class extends React.Component {
    renderFn(state: IMouseState) {
      return <Component {...this.props} mouse={state} />;
    }

    public render() {
      return <Mouse render={this.renderFn} />;
    }
  };
}
