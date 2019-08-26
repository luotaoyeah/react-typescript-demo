/*
 * https://reactjs.org/docs/react-component.html#overview
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 组件的形式有两种: function component 和 class component,
 * class component 比 function component 多一些特性, 比如 lifecycle 和 state,
 * class component 必须继承 React.Component 类, 必须实现 render() 方法
 */

function C030201A() {
  return <Button type="primary">FUNCTION COMPONENT</Button>;
}

class C030201B extends React.Component {
  public componentDidMount(): void {
    console.log('COMPONENT_DID_MOUNT');
  }

  public render() {
    return (
      <Button type="danger" style={{ marginLeft: '10px' }}>
        CLASS COMPONENT
      </Button>
    );
  }
}

function C030201() {
  return (
    <>
      <C030201A />
      <C030201B />
    </>
  );
}

export { C030201 };
