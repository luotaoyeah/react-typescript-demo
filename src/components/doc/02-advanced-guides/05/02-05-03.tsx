/*
 * https://reactjs.org/docs/forwarding-refs.html#displaying-a-custom-name-in-devtools
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 使用 React.forwardRef() 创建的组件在 devtools 中显示的名称是什么?
 */

/*
 * 如果 React.forwardRef() 的参数是一个匿名函数,
 * 则新的组件在 devtools 中显示的名称为: Anonymous
 */
const C020503A = React.forwardRef((props: {}, ref?: React.Ref<Button>) => <Button ref={ref}>FOO</Button>);

/*
 * 如果 React.forwardRef() 的参数是一个具名函数,
 * 则新的组件在 devtools 中显示的名称为: 该函数的名称, 如下: C020503B
 */
// eslint-disable-next-line prefer-arrow-callback
const C020503B = React.forwardRef(function C020503B(props: {}, ref?: React.Ref<Button>) {
  return <Button ref={ref}>BAR</Button>;
});

/*
 * 如果设置了函数的 displayName 属性,
 * 则新的组件在 devtools 中显示的名称为: 该函数的 displayName 属性, 如下: C020503C
 */
function forwardRef(props: {}, ref?: React.Ref<Button>) {
  return <Button ref={ref}>BAZ</Button>;
}

(forwardRef as React.RefForwardingComponent<{}>).displayName = 'C020503C';
const C020503C = React.forwardRef(forwardRef);

function C020503() {
  return (
    <>
      <C020503A />
      <C020503B />
      <C020503C />
    </>
  );
}

export { C020503 };
