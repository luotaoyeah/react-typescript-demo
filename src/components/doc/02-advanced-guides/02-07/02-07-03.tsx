/*
 * Higher-Order Components:
 *     Convention: Pass Unrelated Props Through to the Wrapped Component
 */

import * as React from 'react';
import { Button } from 'antd';

/*
 * HOC 的主要作用，是用来给组件添加功能，
 * 所以 HOC 不应该影响组件原来的功能，
 * HOC 应该将组件原来的 props 原封不动的继续传递给组件；
 */
function HOC<P>(Component: React.ComponentType<P>) {
  return class extends React.Component {
    public render(): React.ReactNode {
      /*
       * 通常的模式是：将组件原来的 props 单独分离出来，然后继续传递给组件，
       * 同时分离出 HOC 中增加的属性；
       */
      const { someProp, ...props } = this.props as any;
      console.log(someProp);
      return <Component {...props} />;
    }
  };
}

/**  */
const HocButton = HOC<any>(Button);

/**  */
class C020703 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <HocButton>button</HocButton>
      </div>
    );
  }
}

export { C020703 };
