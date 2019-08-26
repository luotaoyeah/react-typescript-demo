/*
 * https://reactjs.org/docs/react-component.html#render
 */

import React, { Component } from 'react';
import { Button } from 'antd';

/*
 * render() 方法可以返回: react element 数组,
 * 此时, 数组中的每一个元素都需要设置 key 属性
 */
class C03020203A extends React.Component {
  public render() {
    return [
      <Button key={1}>A</Button>,
      <Button style={{ marginLeft: '10px' }} key={2}>
        B
      </Button>,
    ];
  }
}

/*
 * render() 方法可以返回: React.Fragment
 */

// eslint-disable-next-line react/prefer-stateless-function
class C03020203B extends Component {
  public render() {
    return (
      <React.Fragment>
        <Button style={{ marginLeft: '10px' }}>C</Button>
        <Button style={{ marginLeft: '10px' }}>D</Button>
      </React.Fragment>
    );
  }
}

function C03020203() {
  return (
    <>
      <C03020203A />
      <C03020203B />
    </>
  );
}

export { C03020203 };
