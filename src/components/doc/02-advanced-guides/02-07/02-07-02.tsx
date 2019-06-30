/*
 * Higher-Order Components: Don’t Mutate the Original Component. Use Composition
 */

import * as React from 'react';
import { Button } from 'antd';

/*
 * 在 HOC 中，不要对参数组件做任何修改，
 * 而是应该通过组合（composition）的方式来增强组件；
 */
function HOC<P>(Component: React.ComponentType<P>) {
  /*
   * 修改了参数组件的原型对象；
   */
  Component.prototype.componentDidMount = () => {
    console.log('LOG');
  };

  return Component;
}

/**  */
const HocButton = HOC<any>(Button);

/**  */
class C020702 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <HocButton>button</HocButton>
      </div>
    );
  }
}

export { C020702 };
