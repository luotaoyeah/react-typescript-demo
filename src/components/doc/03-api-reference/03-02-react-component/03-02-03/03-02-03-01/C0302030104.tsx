/*
 * React.Component
 *     Reference
 *         render()
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

class A extends React.Component {
  /*
   * render() 方法可以返回一个 React.ReactPortal；
   */
  public render(): React.ReactPortal {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return ReactDOM.createPortal(<Button>portal</Button>, document.getElementById('root02')!);
  }
}

function C0302030104(): React.ReactNode {
  return (
    <div>
      <A />
    </div>
  );
}

export { C0302030104 };
