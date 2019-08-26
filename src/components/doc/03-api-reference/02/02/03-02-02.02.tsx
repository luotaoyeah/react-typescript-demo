/*
 * https://reactjs.org/docs/react-component.html#render
 */

import React from 'react';
import { Button } from 'antd';

/*
 * render() 方法可以返回 react element (DOM 或者组件)
 */

/*
 * render() 方法可以返回: DOM
 */

// eslint-disable-next-line react/prefer-stateless-function
class C03020202A extends React.Component {
  public render() {
    return (
      <button type="button" className="ant-btn">
        <span>DOM</span>
      </button>
    );
  }
}

/*
 * render() 方法可以返回: component
 */

// eslint-disable-next-line react/prefer-stateless-function
class C03020202B extends React.Component {
  public render() {
    return <Button style={{ marginLeft: '10px' }}>COMPONENT</Button>;
  }
}

function C03020202() {
  return (
    <>
      <C03020202A></C03020202A>
      <C03020202B></C03020202B>
    </>
  );
}

export { C03020202 };
