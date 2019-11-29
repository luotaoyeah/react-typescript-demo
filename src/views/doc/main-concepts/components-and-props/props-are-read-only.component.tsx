// https://reactjs.org/docs/components-and-props.html#props-are-read-only

import * as React from "react";
import { Divider } from "antd";

interface IProps {
  name: string;
}

function C01(props: IProps) {
  try {
    // 修改 props 的属性会运行报错
    props.name = "foo";
  } catch (e) {
    console.assert(e instanceof TypeError);
    console.warn(e.message);
  }
  return <div>{props.name}</div>;
}

class C02 extends React.Component<IProps> {
  public render() {
    // 修改 props 的属性会编译报错
    // this.props.name = "foo";

    return <div>{this.props.name}</div>;
  }
}

/**
 * props 是 read-only 的, 不能修改
 */
class PropsAreReadOnlyComponent extends React.Component {
  public render() {
    return (
      <div>
        <C01 name={"react"} />

        <Divider />

        <C02 name="react" />
      </div>
    );
  }
}

export { PropsAreReadOnlyComponent };
