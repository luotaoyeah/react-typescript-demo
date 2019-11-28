/*
 * Forwarding Refs: Displaying a custom name in DevTools
 */

import * as React from "react";

/*
 * 默认情况下，在 devtools 中，React.forwardRef() 创建的组件，
 * 显示的名称为 ForwardRef；
 */
const FancyButton01 = React.forwardRef((props: any, ref?: React.Ref<HTMLButtonElement>) => {
  return <button ref={ref}>button</button>;
});

/*
 * 如果 React.forwardRef() 的参数是一个具名函数，如：MyForwardRef02，
 * 则显示的名称为 ForwardRef(MyForwardRef02)；
 */
function MyForwardRef02(props: any, ref?: React.Ref<HTMLButtonElement>) {
  return <button ref={ref}>button</button>;
}

const FancyButton02 = React.forwardRef(MyForwardRef02);

/*
 * 可以设置函数的 displayName 属性，如：MyForwardRef03DisplayName，
 * 则显示的名称为 ForwardRef(MyForwardRef03DisplayName)；
 */
function MyForwardRef03(props: any, ref?: React.Ref<HTMLButtonElement>) {
  return <button ref={ref}>button</button>;
}

(MyForwardRef03 as React.RefForwardingComponent<any>).displayName = "MyForwardRef03DisplayName";
const FancyButton03 = React.forwardRef(MyForwardRef03);

/**
 *
 */
class C020503 extends React.Component {
  public render() {
    return (
      <div>
        <FancyButton01 />
        <FancyButton02 />
        <FancyButton03 />
      </div>
    );
  }
}

export { C020503 };
