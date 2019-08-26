/*
 * https://reactjs.org/docs/react-component.html#render
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

/*
 * render() 方法可以返回: React.ReactPortal
 */
class C03020204A extends React.Component {
  public render() {
    return ReactDOM.createPortal(
      <Button
        style={{
          position: 'absolute',
          right: '10px',
          bottom: '10px',
        }}
      >
        PORTAL
      </Button>,
      document.body,
    );
  }
}

function C03020204() {
  return <C03020204A />;
}

export { C03020204 };
