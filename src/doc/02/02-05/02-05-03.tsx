/*
 * Forwarding Refs: Displaying a custom name in DevTools
 */

import * as React from "react";

/*
 * 默认情况下，在 devtools 中，React.forwardRef() 创建的组件，
 * 显示的名称为 ForwardRef；
 */
const FancyButton = React.forwardRef(
  (props: any, ref?: React.Ref<HTMLButtonElement>) => {
    return <button ref={ref}>button</button>;
  }
);

/*
 * 如果 React.forwardRef() 的参数是一个具名函数，如：MyForwardRef，
 * 则显示的名称为 ForwardRef(MyForwardRef)；
 */
const FancyButton02 = React.forwardRef(function MyForwardRef(
  props: any,
  ref?: React.Ref<HTMLButtonElement>
) {
  return <button ref={ref}>button</button>;
});

/**
 *
 */
class C020503 extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <FancyButton />
        <FancyButton02 />
      </div>
    );
  }
}

export { C020503 };
