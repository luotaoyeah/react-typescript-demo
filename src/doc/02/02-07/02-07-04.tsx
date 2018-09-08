/*
 * Higher-Order Components:
 *     Convention: Wrap the Display Name for Easy Debugging
 */

import * as React from "react";
import { Button } from "antd";

/*
 *
 */
function withNothing<P>(Component: React.ComponentType<P>) {
  return class extends React.Component {
    /*
     * 通过设置返回的组件的 displayName 属性，
     * 方便在 devtools 中进行调试；
     */
    static displayName: string = `WithNothing(${Component.displayName ||
      Component.name ||
      "Component"})`;

    render(): React.ReactNode {
      return <Component {...this.props} />;
    }
  };
}

/**  */
const ButtonWithNothing = withNothing<any>(Button);

/**  */
class C020704 extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <ButtonWithNothing>button</ButtonWithNothing>
      </div>
    );
  }
}

export { C020704 };
