/*
 * Higher-Order Components
 */

import * as React from "react";
import { HTMLAttributes } from "react";
import { Button, Input } from "antd";

/*
 * HOC 是一个函数，其参数是一个组件，返回值也是一个组件；
 * HOC 是一个 pure 函数，
 * 即在 HOC 里面，不会对参数组件进行修改，而是使用组合的方式，添加新的功能；
 */

interface IWIthRadiusProps {
  radius: number | string;
}

function withRadius<P extends HTMLAttributes<Element>>(
  Component: React.ComponentType<P>
) {
  class HOC extends React.Component<P & IWIthRadiusProps> {
    render(): React.ReactNode {
      const { radius, ...rest } = this.props as IWIthRadiusProps;
      return <Component {...rest} style={{ borderRadius: radius }} />;
    }
  }

  return HOC;
}

const RadiusButton = withRadius<any>(Button);
const RadiusInput = withRadius<any>(Input);

class C020701 extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <RadiusButton radius={"50%"}>button</RadiusButton>
        <RadiusInput radius={15} />
      </div>
    );
  }
}

export { C020701 };
