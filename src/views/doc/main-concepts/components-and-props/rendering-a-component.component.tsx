// https://reactjs.org/docs/components-and-props.html#rendering-a-component

import * as React from "react";

interface IProps {
  name: string;
  children: React.ReactNode;
}

function C01(props: IProps): React.ReactElement<IProps> {
  return (
    <div>
      <div>{props.name}</div>
      {props.children}
    </div>
  );
}

/**
 * 如果标签名首字母小写, 会被解析为 HTML tag,
 * 如果标签名首字母大写, 会被解析为 component
 *
 * 组件标签中间的内容, 会作为 `children` 属性传给组件
 */
class RenderingAComponentComponent extends React.Component {
  public render() {
    return (
      <div>
        <C01 name={"react"}>
          <div style={{ color: "red" }}>react</div>
        </C01>
      </div>
    );
  }
}

export { RenderingAComponentComponent };
